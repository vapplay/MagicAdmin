"use client"

import React, { useState, useMemo, useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
    Search,
    Filter,
    MoreHorizontal,
    FileImage,
    Palette,
    Star,
    Image as ImageIcon,
    Music,
    Youtube,
    Edit,
    Trash2,
    Eye,
    Plus,
    BookOpen,
    BarChart3,
    CheckCircle,
    PlayCircle,
    ChevronLeft,
    ChevronRight,
    FilterX,
    Download,
    Loader2,
    AlertTriangle
} from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { IMAGE_URL } from "@/util/config"
import { StoryDialog, StoryFormData } from "@/components/dashboard/history/story-dialog"


// Mock Data based on Prisma Model & Reference Schema
interface Story {
    id: string;
    name_es: string;
    description_es: string;
    name_en: string;
    description_en: string;
    name_pt: string | null;
    description_pt: string | null;
    cover: string;
    poster: string | null;
    youtube: string | null;
    type: number;
    song: string | null;

    active: boolean;
    isPremium: boolean;
    googleProductId: string | null;

    // Palette
    dominant: string | null;
    average: string | null;
    vibrant: string | null;
    darkVibrant: string | null;
    lightVibrant: string | null;
    darkMuted: string | null;
    lightMuted: string | null;
    muted: string | null;

    createdAt: Date | string;
    updatedAt: Date | string;
}

export default function HistoryPage() {

    const [data, setData] = useState<Story[]>([])

    const queryClient = useQueryClient()

    const { data: stories, isLoading } = useQuery<any>({
        queryKey: ['histories'],
        queryFn: async () => {
            const res = await fetch('/api/history')
            if (!res.ok) throw new Error('Network response was not ok')
            return res.json() as Promise<Story[]>
        }
    })

    const updateStoryMutation = useMutation({
        mutationFn: async (variables: { id: string, data: any }) => {
            const isFormData = variables.data instanceof FormData;
            const res = await fetch(`/api/history/${variables.id}`, {
                method: 'PATCH',
                headers: isFormData ? undefined : { 'Content-Type': 'application/json' },
                body: isFormData ? variables.data : JSON.stringify(variables.data)
            })
            if (!res.ok) throw new Error('Failed to update')
            return res.json()
        },
        onSuccess: () => {
            // Optional: Invalidate queries if you want to re-fetch from server
            queryClient.invalidateQueries({ queryKey: ['histories'] })
        }
    })

    useEffect(() => {
        if (stories?.data) {
            setData(stories.data)
        }
    }, [stories?.data])

    const createStoryMutation = useMutation({
        mutationFn: async (data: any) => {
            const isFormData = data instanceof FormData;
            const res = await fetch('/api/history', {
                method: 'POST',
                headers: isFormData ? undefined : { 'Content-Type': 'application/json' },
                body: isFormData ? data : JSON.stringify(data)
            })
            if (!res.ok) throw new Error('Failed to create')
            return res.json()
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['histories'] })
            setIsStoryModalOpen(false)
        }
    })

    const deleteStoryMutation = useMutation({
        mutationFn: async (id: string) => {
            const res = await fetch(`/api/history/${id}`, {
                method: 'DELETE',
            })
            if (!res.ok) throw new Error('Failed to delete')
            return res.json()
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['histories'] })
            setIsDeleteModalOpen(false)
            setDeleteConfirmStep(0) // Reset confirmation step
        }
    })

    // Dialog State
    const [isStoryModalOpen, setIsStoryModalOpen] = useState(false)
    const [editingStory, setEditingStory] = useState<Story | null>(null)

    // Delete Modal State
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [storyToDelete, setStoryToDelete] = useState<Story | null>(null)
    const [deleteConfirmStep, setDeleteConfirmStep] = useState(0) // 0: Initial, 1: Confirmed

    const handleSaveStory = async (formData: StoryFormData) => {
        const payload = new FormData();

        // Append all fields
        Object.entries(formData).forEach(([key, value]) => {
            // Handle active/premium which are booleans
            if (key === 'active' || key === 'isPremium') {
                payload.append(key, String(value));
            }
            // Handle files
            else if (value instanceof File) {
                payload.append(key, value);
            }
            // Handle other values (strings, numbers)
            else if (value !== null && value !== undefined && value !== "") {
                payload.append(key, String(value));
            }
        });

        if (editingStory) {
            updateStoryMutation.mutate({
                id: editingStory.id,
                data: payload
            }, {
                onSuccess: () => setIsStoryModalOpen(false)
            })
        } else {
            createStoryMutation.mutate(payload)
        }
    }

    const openEditModal = (story: Story) => {
        setEditingStory(story)
        setIsStoryModalOpen(true)
    }

    const openCreateModal = () => {
        setEditingStory(null)
        setIsStoryModalOpen(true)
    }

    const openDeleteModal = (story: Story) => {
        setStoryToDelete(story)
        setDeleteConfirmStep(0)
        setIsDeleteModalOpen(true)
    }

    const [filterName, setFilterName] = useState("")
    const [filterStatus, setFilterStatus] = useState<"all" | "active" | "inactive">("all")
    const [filterType, setFilterType] = useState<string>("all")
    const [filterPremium, setFilterPremium] = useState<string>("all")

    // Modal State
    const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null)
    const [isColorModalOpen, setIsColorModalOpen] = useState(false)

    // Stats calculation
    const stats = useMemo(() => {
        return {
            total: data.length,
            active: data.filter(s => s.active).length,
            premium: data.filter(s => s.isPremium).length,
            withVideo: data.filter(s => !!s.youtube).length
        }
    }, [data])

    const activeStory = useMemo(() =>
        data.find(s => s.id === selectedStoryId),
        [data, selectedStoryId])

    const handleSwitchChange = (id: string, field: 'active' | 'isPremium', checked: boolean) => {
        // Optimistic update
        setData(data.map(item => item.id === id ? { ...item, [field]: checked } : item))

        // API Call
        updateStoryMutation.mutate({
            id,
            data: { [field]: checked }
        })
    }

    const handleColorChange = (id: string, field: string, value: string) => {
        setData(data.map(item => item.id === id ? { ...item, [field]: value } : item))
    }

    const openColorModal = (id: string) => {
        setSelectedStoryId(id)
        setIsColorModalOpen(true)
    }

    const filteredData = data.filter(item => {
        const matchesName = item.name_es.toLowerCase().includes(filterName.toLowerCase()) ||
            item.name_en.toLowerCase().includes(filterName.toLowerCase())

        const matchesStatus = filterStatus === "all" ? true :
            filterStatus === "active" ? item.active : !item.active

        const matchesType = filterType === "all" ? true : item.type.toString() === filterType

        const matchesPremium = filterPremium === "all" ? true :
            filterPremium === "premium" ? item.isPremium : !item.isPremium

        return matchesName && matchesStatus && matchesType && matchesPremium
    })


    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    useEffect(() => {
        setCurrentPage(1)
    }, [filterName, filterStatus, filterType, filterPremium, pageSize])

    const totalPages = Math.ceil(filteredData.length / pageSize)
    const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize)

    const getTypeLabel = (type: number) => ({ 1: 'Cuento', 2: 'Historia', 3: 'Fábula' })[type] || `Tipo ${type}`;

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] gap-6">
            {/* Header Stats & Title */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b pb-4 shrink-0">
                <div className="space-y-1">
                    <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                        <BookOpen className="h-6 w-6" />
                        Cuentos
                    </h1>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                            <BarChart3 className="h-3.5 w-3.5" />
                            <span className="font-medium text-foreground">{stats.total}</span> Total
                        </div>
                        <div className="flex items-center gap-1.5">
                            <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                            <span className="font-medium text-foreground">{stats.active}</span> Activos
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                            <span className="font-medium text-foreground">{stats.premium}</span> Premium
                        </div>
                        <div className="flex items-center gap-1.5">
                            <PlayCircle className="h-3.5 w-3.5 text-red-500" />
                            <span className="font-medium text-foreground">{stats.withVideo}</span> Video
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button onClick={openCreateModal} className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900">
                        <Plus className="h-4 w-4" />
                        Nuevo
                    </Button>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="flex flex-wrap items-center gap-3 bg-white p-3 rounded-lg border dark:bg-slate-950 shrink-0">
                <div className="relative flex-1 min-w-[200px]">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Buscar por nombre..."
                        className="pl-9 bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800"
                        value={filterName}
                        onChange={(e) => setFilterName(e.target.value)}
                    />
                </div>
                <Select value={filterStatus} onValueChange={(v: any) => setFilterStatus(v)}>
                    <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="active">Activos</SelectItem>
                        <SelectItem value="inactive">Inactivos</SelectItem>
                    </SelectContent>
                </Select>
                <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Tipo" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Tipos</SelectItem>
                        <SelectItem value="1">Cuento</SelectItem>
                        <SelectItem value="2">Historia</SelectItem>
                        <SelectItem value="3">Fábula</SelectItem>
                    </SelectContent>
                </Select>
                <Select value={filterPremium} onValueChange={setFilterPremium}>
                    <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Plan" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Planes</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="free">Gratis</SelectItem>
                    </SelectContent>
                </Select>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                        setFilterName("");
                        setFilterStatus("all");
                        setFilterType("all");
                        setFilterPremium("all");
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
                            <TableHead className="w-[350px]">Cuento</TableHead>
                            <TableHead className="w-[100px]">Estado</TableHead>
                            <TableHead className="w-[120px]">Tipo</TableHead>
                            <TableHead className="w-[150px]">Plan</TableHead>
                            <TableHead>Multimedia</TableHead>
                            <TableHead className="text-right w-[160px]">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedData.map((item) => (
                            <TableRow key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors">
                                <TableCell>
                                    <div className="flex items-start gap-3">
                                        <div className="h-14 w-10 flex-shrink-0 rounded-md overflow-hidden bg-slate-100 shadow-sm border border-slate-200 dark:border-slate-800">
                                            <img
                                                src={`${IMAGE_URL}${item.cover}`}
                                                alt={item.name_es}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="font-medium text-slate-900 dark:text-slate-100 truncate">{item.name_es}</span>
                                            <span className="text-xs text-muted-foreground truncate max-w-[220px]">{item.description_es}</span>
                                            <div className="flex items-center gap-1 mt-1">
                                                <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1 rounded text-slate-500">ES</span>
                                                <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1 rounded text-slate-500">EN</span>
                                                <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1 rounded text-slate-500">PT</span>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Switch
                                        checked={item.active}
                                        onCheckedChange={(checked) => handleSwitchChange(item.id, 'active', checked)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Badge variant="outline" className="font-normal">
                                        {getTypeLabel(item.type)}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-2 items-start">
                                        {item.isPremium ? (
                                            <Badge variant="default" className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-amber-200 shadow-none">
                                                <Star className="w-3 h-3 mr-1 fill-amber-700" />
                                                Premium
                                            </Badge>
                                        ) : (
                                            <Badge variant="secondary" className="text-slate-500">Gratis</Badge>
                                        )}
                                        <div className="flex items-center gap-2 scale-90 origin-left">
                                            <Switch
                                                checked={item.isPremium}
                                                onCheckedChange={(checked) => handleSwitchChange(item.id, 'isPremium', checked)}
                                            />
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <ImageIcon className="h-4 w-4 text-blue-500" />
                                        <Music className="h-4 w-4 text-purple-500" />
                                        {item.youtube ? (
                                            <Youtube className="h-4 w-4 text-red-500" />
                                        ) : (
                                            <Youtube className="h-4 w-4 opacity-20" />
                                        )}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex items-center justify-end gap-1">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-pink-500 hover:text-pink-600 hover:bg-pink-50"
                                            onClick={() => openColorModal(item.id)}
                                            title="Editar colores"
                                        >
                                            <Palette className="h-4 w-4" />
                                        </Button>

                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50" onClick={() => openEditModal(item)}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50" onClick={() => openDeleteModal(item)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {filteredData.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="rounded-full bg-slate-100 p-3 mb-4 dark:bg-slate-800">
                            <Search className="h-6 w-6 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-semibold">No se encontraron cuentos</h3>
                        <p className="text-muted-foreground text-sm max-w-sm">
                            Intenta ajustar los filtros o buscar con otros términos.
                        </p>
                        <Button
                            variant="outline"
                            className="mt-4"
                            onClick={() => {
                                setFilterName("");
                                setFilterStatus("all");
                                setFilterType("all");
                                setFilterPremium("all");
                            }}
                        >
                            Limpiar filtros
                        </Button>
                    </div>
                )}
            </div>

            {/* Pagination Mock */}
            {/* Pagination */}
            <div className="flex items-center justify-between px-2 shrink-0 border-t pt-4">
                <div className="flex items-center gap-2">
                    <p className="text-sm text-muted-foreground hidden sm:block">Filas por página</p>
                    <Select
                        value={pageSize.toString()}
                        onValueChange={(value) => setPageSize(Number(value))}
                    >
                        <SelectTrigger className="h-8 w-[70px]">
                            <SelectValue placeholder={pageSize.toString()} />
                        </SelectTrigger>
                        <SelectContent side="top">
                            {[5, 10, 20, 50, 100].map((size) => (
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
                            Mostrando {filteredData.length > 0 ? (currentPage - 1) * pageSize + 1 : 0} - {Math.min(currentPage * pageSize, filteredData.length)}
                        </span>
                        <span className="hidden sm:inline">de {filteredData.length} resultados</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            className="h-8 w-8 p-0"
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
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
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages || totalPages === 0}
                        >
                            <span className="sr-only">Siguiente</span>
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <Dialog open={isColorModalOpen} onOpenChange={setIsColorModalOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Paleta de Colores</DialogTitle>
                        <DialogDescription>
                            Personaliza los colores para {activeStory?.name_es}
                        </DialogDescription>
                    </DialogHeader>
                    {activeStory && (
                        <div className="grid grid-cols-2 gap-6 py-4">
                            <ColorField
                                label="Dominante"
                                value={activeStory.dominant}
                                onChange={(v) => handleColorChange(activeStory.id, 'dominant', v)}
                            />
                            <ColorField
                                label="Vibrante"
                                value={activeStory.vibrant}
                                onChange={(v) => handleColorChange(activeStory.id, 'vibrant', v)}
                            />
                            <ColorField
                                label="Apagado"
                                value={activeStory.muted}
                                onChange={(v) => handleColorChange(activeStory.id, 'muted', v)}
                            />
                            <ColorField
                                label="Vibrante Oscuro"
                                value={activeStory.darkVibrant}
                                onChange={(v) => handleColorChange(activeStory.id, 'darkVibrant', v)}
                            />
                            <ColorField
                                label="Vibrante Claro"
                                value={activeStory.lightVibrant}
                                onChange={(v) => handleColorChange(activeStory.id, 'lightVibrant', v)}
                            />
                            <ColorField
                                label="Apagado Oscuro"
                                value={activeStory.darkMuted}
                                onChange={(v) => handleColorChange(activeStory.id, 'darkMuted', v)}
                            />
                        </div>
                    )}
                    <DialogFooter>
                        <Button onClick={() => {
                            if (activeStory) {
                                // Save colors
                                updateStoryMutation.mutate({
                                    id: activeStory.id,
                                    data: {
                                        dominant: activeStory.dominant,
                                        vibrant: activeStory.vibrant,
                                        darkVibrant: activeStory.darkVibrant,
                                        lightVibrant: activeStory.lightVibrant,
                                        darkMuted: activeStory.darkMuted,
                                        lightMuted: activeStory.lightMuted,
                                        muted: activeStory.muted,
                                        average: activeStory.average
                                    }
                                })
                            }
                            setIsColorModalOpen(false)
                        }}>Listo</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <StoryDialog
                open={isStoryModalOpen}
                onOpenChange={setIsStoryModalOpen}
                story={editingStory}
                onSave={handleSaveStory}
            />

            <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                <DialogContent className="sm:max-w-md border-0 bg-white dark:bg-slate-950 shadow-2xl overflow-hidden p-0 gap-0">
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 z-0" />

                    <DialogHeader className="relative z-10 flex flex-col items-center text-center pt-8 pb-2 px-6">
                        <div className={`h-16 w-16 rounded-full flex items-center justify-center mb-4 transition-all duration-500 shadow-sm ${deleteConfirmStep === 0 ? 'bg-white text-slate-400' : 'bg-red-600 text-white scale-110 shadow-red-500/20'}`}>
                            <Trash2 className="h-8 w-8" />
                        </div>
                        <DialogTitle className="text-xl font-semibold">Eliminar Historia</DialogTitle>
                        <DialogDescription className="max-w-[80%] mx-auto mt-2">
                            Esta acción eliminará permanentemente el cuento y todos sus recursos asociados.
                        </DialogDescription>
                    </DialogHeader>

                    {storyToDelete && (
                        <div className="relative z-10 px-6 py-6">
                            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground text-center mb-3">
                                Se eliminará:
                            </div>
                            <div className="group relative flex gap-4 p-3 rounded-xl border border-slate-200 bg-white/80 dark:bg-slate-900/50 dark:border-slate-800 hover:border-red-200 dark:hover:border-red-900/50 transition-colors backdrop-blur-sm shadow-sm">
                                <div className="h-20 w-14 rounded-lg overflow-hidden bg-slate-100 shadow-sm shrink-0 border border-slate-100 dark:border-slate-800">
                                    <img src={`${IMAGE_URL}${storyToDelete.cover}`} alt="" className="h-full w-full object-cover" />
                                </div>
                                <div className="flex flex-col flex-1 min-w-0 justify-center gap-2">
                                    <h4 className="font-semibold text-base truncate text-slate-900 dark:text-slate-100">{storyToDelete.name_es}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary" className="text-[10px] h-5 px-1.5 font-medium border-slate-200 bg-slate-100 text-slate-500">
                                            {getTypeLabel(storyToDelete.type)}
                                        </Badge>
                                        {storyToDelete.isPremium && (
                                            <Badge className="text-[10px] h-5 px-1.5 bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200 shadow-none">
                                                Premium
                                            </Badge>
                                        )}
                                        {storyToDelete.active ? (
                                            <Badge className="text-[10px] h-5 px-1.5 bg-green-100 text-green-700 hover:bg-green-100 border-green-200 shadow-none">
                                                Activo
                                            </Badge>
                                        ) : (
                                            <Badge variant="outline" className="text-[10px] h-5 px-1.5 text-muted-foreground">
                                                Inactivo
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <DialogFooter className="relative z-10 bg-slate-50 dark:bg-slate-900/50 p-6 flex flex-col sm:flex-row gap-3 sm:justify-center border-t">
                        <Button
                            variant="ghost"
                            onClick={() => setIsDeleteModalOpen(false)}
                            className="bg-white dark:bg-transparent border dark:border-slate-800 sm:border-transparent hover:bg-slate-100"
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant={deleteConfirmStep === 0 ? "default" : "destructive"}
                            className={`transition-all duration-300 shadow-md ${deleteConfirmStep === 0 ? "bg-slate-900 hover:bg-slate-800 text-white w-full sm:w-auto px-8" : "bg-red-600 hover:bg-red-700 w-full sm:w-auto px-8 animate-in zoom-in-95"}`}
                            onClick={() => {
                                if (deleteConfirmStep === 0) {
                                    setDeleteConfirmStep(1)
                                } else {
                                    if (storyToDelete) {
                                        deleteStoryMutation.mutate(storyToDelete.id)
                                    }
                                }
                            }}
                        >
                            {deleteConfirmStep === 0 ? (
                                "Continuar"
                            ) : (
                                <span className="flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4" />
                                    Confirmar Eliminación
                                </span>
                            )}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div >
    )
}

function ColorField({ label, value, onChange }: { label: string, value?: string | null, onChange: (v: string) => void }) {
    return (
        <div className="flex flex-col gap-2">
            <Label className="text-xs text-muted-foreground">{label}</Label>
            <div className="flex items-center gap-3">
                <div
                    className="h-10 w-10 rounded-full border shadow-sm shrink-0 overflow-hidden relative ring-offset-1 ring-1 ring-slate-200"
                    style={{ backgroundColor: value || '#ffffff' }}
                >
                    <input
                        type="color"
                        value={value || '#ffffff'}
                        onChange={(e) => onChange(e.target.value)}
                        className="opacity-0 w-full h-full cursor-pointer absolute inset-0"
                    />
                </div>
                <div className="text-xs font-mono text-slate-500 uppercase">
                    {value || '---'}
                </div>
            </div>
        </div>
    )
}