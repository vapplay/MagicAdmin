"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { activePremium, getUsers } from "@/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, Search, UserCheck, UserX } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Download, FileJson, FileSpreadsheet } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type User = {
  id: string;
  name: string;
  email: string;
  premium: boolean;
  photo?: string;
  premiumEnd?: string | null;
  premiumStart?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [premiumFilter, setPremiumFilter] = useState<string>("all");
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  useEffect(() => {
    (async () => {
      const response = await getUsers();
      setUsers(response);
      setFilteredUsers(response);
    })();
  }, []);

  useEffect(() => {
    let result = [...users];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (user) =>
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
      );
    }

    // Filter by premium status
    if (premiumFilter !== "all") {
      const isPremium = premiumFilter === "premium";
      result = result.filter((user) => user.premium === isPremium);
    }

    // Filter by date range
    if (dateRange.from && dateRange.to) {
      const fromDate = new Date(dateRange.from);
      const toDate = new Date(dateRange.to);
      toDate.setHours(23, 59, 59, 999); // End of the day

      result = result.filter((user) => {
        if (!user.createdAt) return true;
        const createdDate = new Date(user.createdAt);
        return createdDate >= fromDate && createdDate <= toDate;
      });
    }

    setFilteredUsers(result);
  }, [users, searchQuery, premiumFilter, dateRange]);

  const togglePremium = async (id: string) => {
    const response = await activePremium(
      id,
      !users.find((user) => user.id === id)?.premium
    );

    if (response?.status === 200) {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, premium: !user.premium } : user
        )
      );
    }
  };

  const resetFilters = () => {
    setSearchQuery("");
    setPremiumFilter("all");
    setDateRange({ from: undefined, to: undefined });
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const exportToJson = () => {
    const dataStr = JSON.stringify(filteredUsers, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(
      dataStr
    )}`;

    const exportFileDefaultName = `usuarios_${format(
      new Date(),
      "yyyy-MM-dd"
    )}.json`;

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  const exportToExcel = () => {
    // Create CSV content
    const headers = [
      "ID",
      "Nombre",
      "Email",
      "Premium",
      "Fecha de registro",
      "Inicio Premium",
      "Fin Premium",
    ];

    const csvContent = [
      headers.join(","),
      ...filteredUsers.map((user) =>
        [
          user.id,
          `"${user.name.replace(/"/g, '""')}"`, // Escape quotes in names
          `"${user.email.replace(/"/g, '""')}"`,
          user.premium ? "Sí" : "No",
          user.createdAt ? format(new Date(user.createdAt), "yyyy-MM-dd") : "",
          user.premiumStart
            ? format(new Date(user.premiumStart), "yyyy-MM-dd")
            : "",
          user.premiumEnd
            ? format(new Date(user.premiumEnd), "yyyy-MM-dd")
            : "",
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const exportFileDefaultName = `usuarios_${format(
      new Date(),
      "yyyy-MM-dd"
    )}.csv`;

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", url);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="mb-6">
        <CardHeader className="pb-3 flex flex-row items-center justify-between">
          <div>
            <CardTitle>Gestión de Usuarios</CardTitle>
            <CardDescription>
              Administra los usuarios y sus estados premium
            </CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Exportar
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={exportToJson}
                className="cursor-pointer"
              >
                <FileJson className="mr-2 h-4 w-4" />
                Exportar como JSON
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={exportToExcel}
                className="cursor-pointer"
              >
                <FileSpreadsheet className="mr-2 h-4 w-4" />
                Exportar como Excel
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row md:items-end">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar por nombre o email..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <Select value={premiumFilter} onValueChange={setPremiumFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Estado Premium" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Estado Premium</SelectLabel>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="free">No Premium</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal md:w-[240px]"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange.from ? (
                      dateRange.to ? (
                        <>
                          {format(dateRange.from, "dd/MM/yyyy", { locale: es })}{" "}
                          - {format(dateRange.to, "dd/MM/yyyy", { locale: es })}
                        </>
                      ) : (
                        format(dateRange.from, "dd/MM/yyyy", { locale: es })
                      )
                    ) : (
                      "Filtrar por fecha"
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={dateRange.from}
                    selected={dateRange}
                    onSelect={setDateRange as any}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>

              <Button variant="ghost" onClick={resetFilters}>
                Limpiar filtros
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-[250px]">Usuario</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Fecha de registro</TableHead>
                  <TableHead>Estado Premium</TableHead>
                  <TableHead>Periodo Premium</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                      No se encontraron usuarios con los filtros aplicados.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={user.photo} alt={user.name} />
                            <AvatarFallback>
                              {getInitials(user.name)}
                            </AvatarFallback>
                          </Avatar>
                          <span>{user.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        {user.createdAt
                          ? format(new Date(user.createdAt), "dd MMM yyyy", {
                              locale: es,
                            })
                          : "N/A"}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={user.premium}
                            onCheckedChange={() => togglePremium(user.id)}
                          />
                          <Badge
                            variant={user.premium ? "default" : "outline"}
                            className="ml-2"
                          >
                            {user.premium ? (
                              <span className="flex items-center gap-1">
                                <UserCheck className="h-3 w-3" /> Premium
                              </span>
                            ) : (
                              <span className="flex items-center gap-1">
                                <UserX className="h-3 w-3" /> Gratuito
                              </span>
                            )}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        {user.premium &&
                        user.premiumStart &&
                        user.premiumEnd ? (
                          <span className="text-sm">
                            {format(
                              new Date(user.premiumStart),
                              "dd MMM yyyy",
                              { locale: es }
                            )}{" "}
                            -{" "}
                            {format(new Date(user.premiumEnd), "dd MMM yyyy", {
                              locale: es,
                            })}
                          </span>
                        ) : (
                          <span className="text-muted-foreground text-sm">
                            No aplicable
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
