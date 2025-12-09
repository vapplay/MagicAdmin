"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
    CheckCircle2,
    XCircle,
    BookOpen,
    Users,
    Search,
    FilterX,
    Crown,
    CalendarDays,
    ChevronLeft,
    ChevronRight,
    User as UserIcon,
    Calendar as CalendarIcon,
    Trash2,
    Loader2
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format, isWithinInterval, startOfDay, endOfDay } from "date-fns";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";

import { fetcher } from "@/lib/fetch";

// Types matching our API response
type Story = {
    id: string;
    title: string;
    date: string;
    cover?: string;
};

type MembershipType = "MONTHLY" | "QUARTERLY" | "ANNUAL" | "NONE";

type User = {
    id: string;
    name: string;
    email: string;
    profileImage?: string;
    membership: MembershipType;
    hasAssignedTales: boolean;
    stories: Story[];
    isPremium: boolean;
    createdAt?: string;
    premiumSince?: string;
};

// --- Constants ---
const IMAGE_URL = 'https://pub-233a13519c3c4e18a1d97e37666c5297.r2.dev/';

export default function UsersPage() {
    // Filters
    const [filterName, setFilterName] = useState("");
    const [filterMembership, setFilterMembership] = useState<string>("all");
    const [filterStatus, setFilterStatus] = useState<string>("all"); // Premium vs Free

    // Date Filters
    const [dateRangeCreated, setDateRangeCreated] = useState<DateRange | undefined>();
    const [dateRangePremium, setDateRangePremium] = useState<DateRange | undefined>();

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [localData, setLocalData] = useState<User[]>([]);

    // Delete Story State
    const [storyToDelete, setStoryToDelete] = useState<{ userId: string, storyId: string } | null>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    // Use React Query to fetch data
    const { data: queryData, isLoading } = useQuery({
        queryKey: ['users-list'],
        queryFn: async () => {
            const res = await fetch("/api/users?limit=10000");
            if (!res.ok) throw new Error("Failed to fetch");
            const usersData = await res.json();
            const rawData = usersData.data || usersData;

            // Ensure data matches our type, adding defaults if missing
            return (Array.isArray(rawData) ? rawData : []).map((u: any) => ({
                ...u,
                membership: u.membership || "NONE",
                isPremium: u.membership && u.membership !== "NONE"
            })) as User[];
        }
    });

    // Sync query data to local state for client-side filtering and optimistic/local updates
    useEffect(() => {
        if (queryData) {
            setLocalData(queryData);
        }
    }, [queryData]);

    const data = localData; // data alias to keep downstream code working
    const setData = setLocalData; // setData alias

    const updateMembership = (userId: string, newMembership: MembershipType) => {
        setLocalData((prevData) =>
            prevData.map((user) => {
                if (user.id === userId) {
                    const shouldBePremium = newMembership !== "NONE";
                    return {
                        ...user,
                        membership: newMembership,
                        isPremium: shouldBePremium
                    };
                }
                return user;
            })
        );
    };

    const togglePremium = async (userId: string, isPremium: boolean) => {
        // Optimistic update
        setLocalData((prevData) =>
            prevData.map((user) => {
                if (user.id === userId) {
                    return { ...user, isPremium };
                }
                return user;
            })
        );

        try {
            const res = await fetch('/api/users/premium', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, isPremium })
            });

            if (!res.ok) {
                throw new Error("Error updating premium status");
            }

            const result = await res.json();
            if (result.success) {
                toast.success(isPremium ? "Usuario actualizado a Premium" : "Premium removido correctamente");
            } else {
                throw new Error(result.error || "Unknown error");
            }
        } catch (error) {
            console.error("Error updating premium:", error);
            toast.error("Error al actualizar el estado Premium");

            // Revert optimistic update
            setLocalData((prevData) =>
                prevData.map((user) => {
                    if (user.id === userId) {
                        return { ...user, isPremium: !isPremium };
                    }
                    return user;
                })
            );
        }
    };

    const handleAddStory = (userId: string) => {
        // Placeholder for add functionality if needed in future, currently disabled in UI
        toast.info("Función de asignar desactivada temporalmente");
    };

    const confirmRemoveStory = async () => {
        if (!storyToDelete) return;
        setIsDeleting(true);
        const { userId, storyId } = storyToDelete;

        // Optimistic Update
        const previousData = [...localData];
        setData(prevData => prevData.map(user => {
            if (user.id === userId) {
                const updatedStories = user.stories.filter(s => s.id !== storyId);
                return {
                    ...user,
                    hasAssignedTales: updatedStories.length > 0,
                    stories: updatedStories
                };
            }
            return user;
        }));

        try {
            await fetcher(`users/stories/${storyId}`, { method: 'DELETE' });
            toast.success("Asignación removida correctamente");
            setIsDeleteModalOpen(false);
            setStoryToDelete(null);
        } catch (error) {
            console.error("Error removing story assignment:", error);
            toast.error("Error al remover la asignación");
            setData(previousData); // Revert
        } finally {
            setIsDeleting(false);
        }
    };

    const handleRemoveClick = (userId: string, storyId: string) => {
        setStoryToDelete({ userId, storyId });
        setIsDeleteModalOpen(true);
    };

    // Filter Logic
    const filteredData = useMemo(() => {
        return data.filter((user) => {
            const matchesName =
                user.name.toLowerCase().includes(filterName.toLowerCase()) ||
                user.email.toLowerCase().includes(filterName.toLowerCase());

            const matchesMembership =
                filterMembership === "all"
                    ? true
                    : user.membership === filterMembership;

            const matchesStatus =
                filterStatus === "all"
                    ? true
                    : filterStatus === "premium"
                        ? user.isPremium
                        : !user.isPremium;

            // Date Range: Created At
            let matchesCreated = true;
            if (dateRangeCreated?.from && user.createdAt) {
                const userDate = new Date(user.createdAt);
                const from = startOfDay(dateRangeCreated.from);
                const to = dateRangeCreated.to ? endOfDay(dateRangeCreated.to) : endOfDay(dateRangeCreated.from);

                matchesCreated = isWithinInterval(userDate, { start: from, end: to });
            } else if (dateRangeCreated?.from && !user.createdAt) {
                matchesCreated = false;
            }

            // Date Range: Premium Since
            let matchesPremiumDate = true;
            if (dateRangePremium?.from) {
                if (!user.premiumSince) {
                    matchesPremiumDate = false; // If filtering by premium date but user has none, exclude
                } else {
                    const userDate = new Date(user.premiumSince);
                    const from = startOfDay(dateRangePremium.from);
                    const to = dateRangePremium.to ? endOfDay(dateRangePremium.to) : endOfDay(dateRangePremium.from);
                    matchesPremiumDate = isWithinInterval(userDate, { start: from, end: to });
                }
            }

            return matchesName && matchesMembership && matchesStatus && matchesCreated && matchesPremiumDate;
        });
    }, [data, filterName, filterMembership, filterStatus, dateRangeCreated, dateRangePremium]);

    // Pagination Logic
    useEffect(() => {
        setCurrentPage(1);
    }, [filterName, filterMembership, filterStatus, dateRangeCreated, dateRangePremium, pageSize]);

    const totalPages = Math.ceil(filteredData.length / pageSize);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    // Stats Logic
    const stats = useMemo(() => {
        return {
            total: data.length,
            premium: data.filter((u) => u.isPremium).length,
            assigned: data.filter((u) => u.hasAssignedTales).length,
            monthly: data.filter((u) => u.membership === "MONTHLY").length,
            quarterly: data.filter((u) => u.membership === "QUARTERLY").length,
            annual: data.filter((u) => u.membership === "ANNUAL").length,
        };
    }, [data]);

    if (isLoading) {
        return (
            <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                    <p className="text-muted-foreground">Cargando usuarios...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] gap-6 p-6">
            {/* Header Stats & Title */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b pb-4 shrink-0">
                <div className="space-y-1">
                    <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                        <Users className="h-6 w-6" />
                        Usuarios
                    </h1>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                            <UserIcon className="h-3.5 w-3.5" />
                            <span className="font-medium text-foreground">{stats.total}</span>{" "}
                            Total
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Crown className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                            <span className="font-medium text-foreground">{stats.premium}</span>{" "}
                            Premium
                        </div>
                        <div className="flex items-center gap-1.5">
                            <BookOpen className="h-3.5 w-3.5 text-blue-500" />
                            <span className="font-medium text-foreground">{stats.assigned}</span>{" "}
                            Con Cuentos
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="flex flex-wrap items-center gap-3 bg-white p-3 rounded-lg border dark:bg-slate-950 shrink-0">
                <div className="relative flex-1 min-w-[200px]">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Buscar por nombre o email..."
                        className="pl-9 bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800"
                        value={filterName}
                        onChange={(e) => setFilterName(e.target.value)}
                    />
                </div>

                <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Tipo de Usuario" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="free">Gratis</SelectItem>
                    </SelectContent>
                </Select>

                <Select value={filterMembership} onValueChange={setFilterMembership}>
                    <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Membresía" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todas</SelectItem>
                        <SelectItem value="MONTHLY">Mensual</SelectItem>
                        <SelectItem value="QUARTERLY">Trimestral</SelectItem>
                        <SelectItem value="ANNUAL">Anual</SelectItem>
                        <SelectItem value="NONE">Ninguna</SelectItem>
                    </SelectContent>
                </Select>

                <DateRangePicker
                    date={dateRangeCreated}
                    setDate={setDateRangeCreated}
                    placeholder="Registro"
                />

                <DateRangePicker
                    date={dateRangePremium}
                    setDate={setDateRangePremium}
                    placeholder="Premium"
                />

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                        setFilterName("");
                        setFilterMembership("all");
                        setFilterStatus("all");
                        setDateRangeCreated(undefined);
                        setDateRangePremium(undefined);
                    }}
                    title="Limpiar filtros"
                >
                    <FilterX className="h-4 w-4 text-muted-foreground" />
                </Button>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-auto min-h-0 rounded-md border bg-white dark:bg-slate-950 shadow-sm">
                <Table>
                    <TableHeader className="bg-slate-50 dark:bg-slate-900/50">
                        <TableRow>
                            <TableHead className="w-[300px]">Usuario</TableHead>
                            <TableHead>Membresía</TableHead>
                            <TableHead className="text-center">Premium</TableHead>
                            <TableHead className="text-center">Cuentos Asignados</TableHead>
                            <TableHead className="text-right">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedData.map((user) => (
                            <TableRow
                                key={user.id}
                                className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors"
                            >
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-10 w-10 border border-slate-200 dark:border-slate-800">
                                            <AvatarImage src={user.profileImage} alt={user.name} />
                                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <span className="font-medium text-slate-900 dark:text-slate-100">
                                                {user.name}
                                            </span>
                                            <span className="text-xs text-muted-foreground">
                                                {user.email}
                                            </span>
                                            {user.createdAt && (
                                                <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                                                    <CalendarDays className="w-3 h-3 text-slate-300" />
                                                    Reg: {format(new Date(user.createdAt), 'dd/MM/yyyy')}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Select
                                        value={user.membership}
                                        onValueChange={(val: MembershipType) => updateMembership(user.id, val)}
                                    >
                                        <SelectTrigger className="w-[130px] h-8">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="MONTHLY">Mensual</SelectItem>
                                            <SelectItem value="QUARTERLY">Trimestral</SelectItem>
                                            <SelectItem value="ANNUAL">Anual</SelectItem>
                                            <SelectItem value="NONE">Ninguna</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {user.premiumSince && user.membership !== 'NONE' && (
                                        <span className="text-[10px] text-muted-foreground mt-1 block">
                                            Desde: {format(new Date(user.premiumSince), 'dd/MM/yyyy')}
                                        </span>
                                    )}
                                </TableCell>
                                <TableCell className="text-center">
                                    <div className="flex justify-center">
                                        <Switch
                                            checked={user.isPremium}
                                            onCheckedChange={(checked) => togglePremium(user.id, checked)}
                                        />
                                    </div>
                                </TableCell>
                                <TableCell className="text-center">
                                    <div className="flex justify-center items-center gap-2">
                                        {user.hasAssignedTales ? (
                                            <>
                                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                                <span className="text-xs text-muted-foreground">
                                                    {user.stories.length}
                                                </span>
                                            </>
                                        ) : (
                                            <XCircle className="h-4 w-4 text-slate-300" />
                                        )}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <Button variant="ghost" size="sm" className="h-8 gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                                <BookOpen className="h-4 w-4" />
                                                Ver Cuentos
                                            </Button>
                                        </SheetTrigger>
                                        <SheetContent className="w-[400px] sm:w-[540px]">
                                            <SheetHeader className="mb-6">
                                                <SheetTitle className="flex items-center gap-2 text-xl text-slate-900 dark:text-white">
                                                    <BookOpen className="h-5 w-5 text-blue-600" />
                                                    Biblioteca de {user.name}
                                                </SheetTitle>
                                                <SheetDescription>
                                                    Linea de tiempo de cuentos asignados a este usuario.
                                                </SheetDescription>
                                            </SheetHeader>

                                            {/* Story List / Timeline */}
                                            <div className="space-y-6 pr-2 max-h-[calc(100vh-150px)] overflow-y-auto custom-scrollbar pl-4 border-l-2 border-slate-100 dark:border-slate-800 ml-2">
                                                {user.stories.length === 0 ? (
                                                    <div className="flex flex-col items-center justify-center py-12 text-center -ml-4">
                                                        <div className="bg-slate-50 p-4 rounded-full mb-3">
                                                            <BookOpen className="h-8 w-8 text-slate-300" />
                                                        </div>
                                                        <p className="text-sm text-muted-foreground font-medium">No hay cuentos asignados</p>
                                                    </div>
                                                ) : (
                                                    user.stories.map((story) => (
                                                        <div key={story.id} className="relative group">
                                                            {/* Dot on timeline */}
                                                            <div className="absolute -left-[25px] top-6 h-4 w-4 rounded-full border-4 border-white dark:border-black bg-blue-500 shadow-sm z-10" />

                                                            <div className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-white dark:bg-slate-950 dark:border-slate-800 hover:shadow-lg hover:border-blue-100 transition-all duration-300">
                                                                <div className="h-20 w-14 rounded-md overflow-hidden bg-slate-100 shrink-0 border shadow-sm relative group-hover:scale-105 transition-transform">
                                                                    {story.cover ? (
                                                                        <img
                                                                            src={`${IMAGE_URL}${story.cover}`}
                                                                            className="h-full w-full object-cover"
                                                                            alt={story.title}
                                                                        />
                                                                    ) : (
                                                                        <div className="h-full w-full flex items-center justify-center bg-blue-100 text-blue-500">
                                                                            <BookOpen className="h-6 w-6" />
                                                                        </div>
                                                                    )}
                                                                </div>

                                                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                                    <div className="flex items-start justify-between">
                                                                        <h3 className="font-bold text-slate-900 dark:text-slate-100 truncate pr-2 text-base leading-tight">
                                                                            {story.title}
                                                                        </h3>
                                                                    </div>

                                                                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
                                                                        <span className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 px-2.5 py-1 rounded-md font-medium text-slate-600 dark:text-slate-400">
                                                                            <CalendarDays className="h-3.5 w-3.5 text-blue-500" />
                                                                            {story.date}
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div className="flex flex-col justify-center border-l pl-4 ml-2 border-slate-100">
                                                                    <Button
                                                                        variant="ghost"
                                                                        size="icon"
                                                                        className="h-8 w-8 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                                                                        onClick={() => handleRemoveClick(user.id, story.id)}
                                                                        title="Remover asignación"
                                                                    >
                                                                        <Trash2 className="h-4 w-4" />
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                        </SheetContent>
                                    </Sheet>
                                </TableCell>
                            </TableRow>
                        ))}
                        {paginatedData.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    <div className="flex flex-col items-center justify-center text-muted-foreground">
                                        <Search className="h-8 w-8 mb-2 opacity-20" />
                                        <p>No se encontraron usuarios</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-2 shrink-0 border-t pt-4">
                <div className="flex items-center gap-2">
                    <p className="text-sm text-muted-foreground hidden sm:block">
                        Filas por página
                    </p>
                    <Select
                        value={pageSize.toString()}
                        onValueChange={(value) => setPageSize(Number(value))}
                    >
                        <SelectTrigger className="h-8 w-[70px]">
                            <SelectValue placeholder={pageSize.toString()} />
                        </SelectTrigger>
                        <SelectContent side="top">
                            {[5, 10, 20, 50].map((size) => (
                                <SelectItem key={size} value={size.toString()}>
                                    {size}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex items-center gap-4 lg:gap-8">
                    <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1 text-sm text-muted-foreground">
                        <span>
                            Mostrando{" "}
                            {paginatedData.length > 0
                                ? (currentPage - 1) * pageSize + 1
                                : 0}{" "}
                            - {Math.min(currentPage * pageSize, filteredData.length)}
                        </span>
                        <span className="hidden sm:inline">
                            de {filteredData.length} resultados
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            className="h-8 w-8 p-0"
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                        >
                            <span className="sr-only">Anterior</span>
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <div className="flex w-[80px] items-center justify-center text-sm font-medium">
                            Pág. {currentPage} / {totalPages || 1}
                        </div>
                        <Button
                            variant="outline"
                            className="h-8 w-8 p-0"
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages || totalPages === 0}
                        >
                            <span className="sr-only">Siguiente</span>
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <DeleteStoryModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmRemoveStory}
                isDeleting={isDeleting}
            />
        </div>
    );
}

// --- Helper Modal ---

function DeleteStoryModal({
    isOpen,
    onClose,
    onConfirm,
    isDeleting
}: {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    isDeleting: boolean;
}) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>¿Remover asignación del cuento?</DialogTitle>
                    <DialogDescription>
                        Este cuento <b>no se eliminará del sistema</b>, solo se quitará la asignación a este usuario. ¿Desea confirmar esta acción?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="gap-2 sm:gap-0 mt-4">
                    <Button variant="outline" onClick={onClose} disabled={isDeleting}>Cancelar</Button>
                    <Button variant="destructive" onClick={onConfirm} disabled={isDeleting}>
                        {isDeleting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Eliminando...
                            </>
                        ) : (
                            'Confirmar y Remover'
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

function DateRangePicker({
    date,
    setDate,
    placeholder
}: {
    date: DateRange | undefined,
    setDate: (date: DateRange | undefined) => void,
    placeholder: string
}) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date?.from ? (
                        date.to ? (
                            <>
                                {format(date.from, "LLL dd, y")} -{" "}
                                {format(date.to, "LLL dd, y")}
                            </>
                        ) : (
                            format(date.from, "LLL dd, y")
                        )
                    ) : (
                        <span>{placeholder}</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                />
            </PopoverContent>
        </Popover>
    )
}
