'use client';

import React, { useState, useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher, updater } from '@/ts/fetch';
import { toast } from 'sonner';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Users,
  Search,
  UserCheck,
  UserX,
  Calendar as CalendarIcon,
  Download,
  FileJson,
  FileSpreadsheet,
  ChevronLeft,
  ChevronRight,
  FilterX,
  SortAsc,
  SortDesc,
  BarChart3,
  CheckCircle,
} from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { DateRange } from 'react-day-picker';

// Interfaz de Usuario
type User = {
  id: string;
  name: string;
  email: string;
  premium: boolean;
  photo?: string;
  premiumEnd?: string | null;
  premiumStart?: string | null;
  createdAt: string;
  updatedAt?: string;
};

export default function UserManagementPage() {
  const queryClient = useQueryClient();

  // --- ESTADOS PARA FILTROS, ORDENAMIENTO Y PAGINACIÓN ---
  const [searchTerm, setSearchTerm] = useState('');
  const [premiumFilter, setPremiumFilter] = useState('all');
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [sortBy, setSortBy] = useState<keyof User>('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);

  // --- DATA FETCHING CON REACT QUERY ---
  const { data: users = [], isLoading } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => fetcher('user/all').then((res) => res.data),
    refetchInterval: 1000 * 60 * 5,
  });

  // --- MUTACIÓN CON REACT QUERY (CORREGIDA) ---
  const { mutate: togglePremiumStatus } = useMutation({
    mutationFn: ({ userId, newStatus }: { userId: string; newStatus: boolean }) =>
      updater('user/premium', { id: userId, state: newStatus }), // <--- ¡AQUÍ ESTÁ LA CORRECCIÓN!
    onSuccess: () => {
      toast.success('Estado premium actualizado');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'No se pudo actualizar el estado');
    },
  });

  // --- CÁLCULOS MEMORIZADOS PARA FILTRADO Y ESTADÍSTICAS ---
  const filteredData = useMemo(() => {
    return users
      .filter((user) => {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
          user.name.toLowerCase().includes(searchLower) ||
          user.email.toLowerCase().includes(searchLower);
        const matchesPremium =
          premiumFilter === 'all' || (premiumFilter === 'premium' ? user.premium : !user.premium);
        const matchesDate =
          !dateRange?.from ||
          (user.createdAt &&
            new Date(user.createdAt) >= dateRange.from &&
            new Date(user.createdAt) <= (dateRange.to || dateRange.from));
        return matchesSearch && matchesPremium && matchesDate;
      })
      .sort((a, b) => {
        const fieldA = a[sortBy];
        const fieldB = b[sortBy];
        const comparison =
          fieldA && fieldB && fieldA > fieldB ? 1 : fieldA && fieldB && fieldA < fieldB ? -1 : 0;
        return sortOrder === 'desc' ? -comparison : comparison;
      });
  }, [users, searchTerm, premiumFilter, dateRange, sortBy, sortOrder]);

  const stats = useMemo(
    () => ({
      total: users.length,
      premium: users.filter((u) => u.premium).length,
    }),
    [users]
  );

  // --- PAGINACIÓN ---
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  // --- MANEJADORES DE EVENTOS ---
  const clearFilters = () => {
    setSearchTerm('');
    setPremiumFilter('all');
    setDateRange(undefined);
    setCurrentPage(1);
  };
  const handleTogglePremium = (user: User) => {
    togglePremiumStatus({ userId: user.id, newStatus: !user.premium });
  };
  const toggleSort = (field: keyof User) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };
  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="border-muted border-t-primary h-8 w-8 animate-spin rounded-full border-4"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col p-4 sm:p-6 lg:p-8">
      {/* Encabezado */}
      <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-foreground flex items-center gap-2 text-2xl font-bold">
            <Users className="h-6 w-6" />
            Gestión de Usuarios
          </h1>
          <p className="text-muted-foreground">
            {filteredData.length} de {stats.total} usuarios
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-4 sm:flex">
            <div className="flex items-center gap-1.5 text-sm">
              <BarChart3 className="text-muted-foreground h-4 w-4" />
              <span className="text-foreground font-medium">{stats.total}</span>
              <span>Total</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="font-medium text-green-600">{stats.premium}</span>
              <span>Premium</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              variant="outline"
              size="icon"
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-muted-foreground text-sm">
              Página {currentPage} de {totalPages > 0 ? totalPages : 1}
            </span>
            <Button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              variant="outline"
              size="icon"
              disabled={currentPage >= totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Barra de Filtros y Acciones */}
      <div className="bg-card mb-6 rounded-lg border p-4">
        <div className="flex flex-wrap items-end gap-4">
          <div className="relative min-w-[250px] flex-grow">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              placeholder="Buscar por nombre o email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={premiumFilter} onValueChange={setPremiumFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los Estados</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
              <SelectItem value="free">No Premium</SelectItem>
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal sm:w-auto"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateRange?.from
                  ? dateRange.to
                    ? `${format(dateRange.from, 'LLL dd, y')} - ${format(dateRange.to, 'LLL dd, y')}`
                    : format(dateRange.from, 'LLL dd, y')
                  : 'Filtrar por fecha'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
          <Button variant="ghost" onClick={clearFilters} className="flex items-center gap-1.5">
            <FilterX className="h-4 w-4" />
            Limpiar
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto flex items-center gap-2">
                <Download className="h-4 w-4" />
                Exportar
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => {
                  /* Lógica de exportación JSON */
                }}
              >
                <FileJson className="mr-2 h-4 w-4" /> Exportar a JSON
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  /* Lógica de exportación CSV */
                }}
              >
                <FileSpreadsheet className="mr-2 h-4 w-4" /> Exportar a Excel (CSV)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Tabla de Usuarios */}
      <div className="bg-card flex-1 overflow-auto rounded-lg border">
        <Table>
          <TableHeader className="bg-card sticky top-0">
            <TableRow>
              {[
                { label: 'Usuario', field: 'name' },
                { label: 'Email', field: 'email' },
                { label: 'Fecha de registro', field: 'createdAt' },
              ].map((header) => (
                <TableHead key={header.field}>
                  <button
                    className="flex items-center gap-2"
                    onClick={() => toggleSort(header.field as keyof User)}
                  >
                    {header.label}
                    {sortBy === header.field &&
                      (sortOrder === 'asc' ? (
                        <SortAsc className="h-4 w-4" />
                      ) : (
                        <SortDesc className="h-4 w-4" />
                      ))}
                  </button>
                </TableHead>
              ))}
              <TableHead>Estado Premium</TableHead>
              <TableHead>Periodo Premium</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user.photo} />
                        <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{user.email}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {format(new Date(user.createdAt), 'dd MMM yyyy', {
                      locale: es,
                    })}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Switch
                        checked={user.premium}
                        onCheckedChange={() => handleTogglePremium(user)}
                      />
                      <Badge variant={user.premium ? 'default' : 'outline'}>
                        {user.premium ? (
                          <UserCheck className="mr-1.5 h-3 w-3" />
                        ) : (
                          <UserX className="mr-1.5 h-3 w-3" />
                        )}
                        {user.premium ? 'Premium' : 'Gratuito'}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {user.premium && user.premiumStart && user.premiumEnd
                      ? `${format(new Date(user.premiumStart), 'dd/MM/yy')} - ${format(new Date(user.premiumEnd), 'dd/MM/yy')}`
                      : 'N/A'}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-48 text-center">
                  <p className="font-semibold">No se encontraron usuarios</p>
                  <p className="text-muted-foreground">Intenta ajustar los filtros de búsqueda.</p>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
