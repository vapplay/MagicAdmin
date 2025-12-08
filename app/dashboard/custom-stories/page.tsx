"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher, formDataFetcher } from '@/lib/fetch';
import { toast } from 'sonner';
import { useDropzone } from 'react-dropzone';
import {
    Mic,
    Plus,
    Search,
    Trash2,
    Play,
    Pause,
    History,
    Bell,
    CheckCircle2,
    X,
    AlertTriangle,
    Music,
    Share2,
    FileAudio,
    Maximize2,
    Calendar,
    User,
    Mail,
    Edit,
    ChevronLeft,
    ChevronRight,
    Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogDescription,
    DialogTrigger
} from '@/components/ui/dialog';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Label } from '@/components/ui/label';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { StorySelectorModal, HistoryModel } from '@/components/history/StorySelectorModal';
import { IMAGE_URL, SONG_URL } from '@/util/config';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

// --- Types ---

interface AudioModel {
    id: string;
    url: string;
    childName: string;
    historyId: string;
    history: {
        name_es: string;
        cover: string;
    };
    duration?: number;
    _count?: {
        assignedTo: number;
    };
}

interface UserStoryRequest {
    id: string;
    userId: string;
    historyId: string;
    requestedName: string;
    status: 'PENDING_PAYMENT' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'REFUNDED';
    user: {
        name: string | null;
        email: string;
        profileImage: string | null;
    };
    history: {
        id: string;
        name_es: string;
        cover: string;
    };
    audio?: {
        url: string;
        childName: string;
    };
    createdAt: string;
    updatedAt?: string;
}

// --- Components ---


// --- Advanced Audio Player Component ---
const AdvancedAudioPlayer = ({
    url,
    id,
    currentPlayingId,
    onPlay
}: {
    url: string;
    id: string;
    currentPlayingId: string | null;
    onPlay: (id: string | null) => void;
}) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const isPlaying = currentPlayingId === id;

    const fullUrl = url.startsWith('http') ? url : `${SONG_URL}${url}`;

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play().catch(e => console.error("Playback error:", e));
        } else {
            audioRef.current?.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 1;
        }
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            onPlay(null);
        } else {
            onPlay(id);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setProgress(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLAudioElement>) => {
        setDuration(e.currentTarget.duration);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setProgress(time);
        }
    };

    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="flex items-center gap-3 w-full">
            <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full shrink-0"
                onClick={togglePlay}
            >
                {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3 ml-0.5" />}
            </Button>

            <div className="flex-1 flex items-center gap-2 min-w-0">
                <span className="text-[10px] text-muted-foreground w-8 text-right tabular-nums">
                    {formatTime(progress)}
                </span>
                <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={progress}
                    onChange={handleSeek}
                    className="flex-1 h-1 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-600 hover:[&::-webkit-slider-thumb]:bg-indigo-700"
                />
                <span className="text-[10px] text-muted-foreground w-8 tabular-nums">
                    {formatTime(duration)}
                </span>
            </div>

            <audio
                ref={audioRef}
                src={fullUrl}
                onEnded={() => onPlay('')}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                className="hidden"
            />
        </div>
    );
};

// --- Audio Dropzone Component (Copied & Adapted) ---

function AudioDropzone({ value, onChange }: { value: File | null, onChange: (v: File | null) => void }) {
    const [preview, setPreview] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (value) {
            const objectUrl = URL.createObjectURL(value);
            setPreview(objectUrl);
            return () => URL.revokeObjectURL(objectUrl);
        } else {
            setPreview(null);
        }
    }, [value]);

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles?.[0]) onChange(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'audio/*': [] },
        maxFiles: 1,
        multiple: false
    } as any);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) audioRef.current.pause();
            else audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) setProgress(audioRef.current.currentTime);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setProgress(time);
        }
    };

    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    if (preview) {
        return (
            <div className="flex items-center gap-4 p-4 border rounded-md bg-slate-50 dark:bg-slate-900/50">
                <div className="h-10 w-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
                    <Music className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate mb-1">
                        {value?.name}
                    </p>
                    <div className="flex items-center gap-2">
                        <Button type="button" size="icon" variant="ghost" className="h-6 w-6" onClick={togglePlay}>
                            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                        </Button>
                        <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={progress}
                            onChange={handleSeek}
                            className="flex-1 h-1 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="text-[10px] text-muted-foreground w-8 tabular-nums">
                            {formatTime(duration)}
                        </span>
                    </div>
                    <audio
                        ref={audioRef}
                        src={preview}
                        onEnded={() => setIsPlaying(false)}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                        className="hidden"
                    />
                </div>
                <Button type="button" variant="ghost" size="icon" className="text-destructive" onClick={() => onChange(null)}>
                    <Trash2 className="w-4 h-4" />
                </Button>
            </div>
        );
    }

    return (
        <div
            {...getRootProps()}
            className={`
                border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center cursor-pointer transition-colors
                ${isDragActive ? 'border-primary bg-primary/5' : 'border-slate-300 dark:border-slate-700 hover:bg-slate-50'}
            `}
        >
            <input {...(getInputProps() as any)} />
            <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full mb-3">
                <FileAudio className="w-6 h-6 text-slate-400" />
            </div>
            <p className="text-sm font-medium">Arrastra el audio aquí o haz clic</p>
            <p className="text-xs text-muted-foreground mt-1">MP3, M4A, WAV hasta 10MB</p>
        </div>
    );
}

// --- User Selector Modal ---
const UserSelectorModal = ({
    isOpen,
    onClose,
    onUserSelect
}: {
    isOpen: boolean;
    onClose: () => void;
    onUserSelect: (user: any) => void;
}) => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
            setPage(1); // Reset to page 1 on new search
        }, 500);
        return () => clearTimeout(timer);
    }, [search]);

    const { data: response, isLoading } = useQuery<any>({
        queryKey: ['users', page, debouncedSearch],
        queryFn: () => {
            const params = new URLSearchParams();
            params.set('page', page.toString());
            params.set('limit', '18'); // 3x6 grid
            if (debouncedSearch) params.set('search', debouncedSearch);
            return fetcher(`users?${params.toString()}`);
        },
    });

    // Handle both new generic API response structure and potential legacy array
    const users = Array.isArray(response) ? response : (response?.data || []);
    const pagination = !Array.isArray(response) ? response?.pagination : null;

    const totalPages = pagination?.totalPages || 1;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-5xl w-[95vw] h-[90vh] flex flex-col gap-0 p-0 overflow-hidden">
                <div className="p-6 pb-2 shrink-0">
                    <DialogHeader>
                        <DialogTitle>Asignar a Usuario</DialogTitle>
                        <DialogDescription>Selecciona un usuario para asignarle este audiocuento.</DialogDescription>
                    </DialogHeader>

                    <div className="relative mt-4">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                            placeholder="Buscar usuario por nombre o email..."
                            className="pl-9"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex-1 min-h-0 w-full bg-slate-50/50">
                    <ScrollArea className="h-full w-full">
                        <div className="p-6 pt-4">
                            {isLoading ? (
                                <div className="flex flex-col items-center justify-center py-20 gap-3 text-muted-foreground">
                                    <Loader2 className="h-10 w-10 animate-spin text-indigo-600" />
                                    <p>Cargando usuarios...</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {users.map((user: any) => (
                                        <div
                                            key={user.id}
                                            className="flex items-center gap-3 p-3 rounded-xl border bg-white hover:bg-indigo-50/50 hover:border-indigo-200 cursor-pointer transition-all shadow-sm hover:shadow-md relative group"
                                            onClick={() => onUserSelect(user)}
                                        >
                                            <Avatar className="h-12 w-12 border shrink-0">
                                                <AvatarImage src={user.profileImage} />
                                                <AvatarFallback className="bg-indigo-100 text-indigo-600 font-bold">
                                                    {user.name?.[0]?.toUpperCase() || 'U'}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="min-w-0 flex-1">
                                                <h4 className="font-semibold text-sm truncate text-slate-900" title={user.name}>
                                                    {user.name || "Usuario sin nombre"}
                                                </h4>
                                                <div className="flex items-center gap-1 mt-0.5 text-xs text-slate-500">
                                                    <Mail className="h-3 w-3 shrink-0" />
                                                    <span className="truncate" title={user.email}>{user.email}</span>
                                                </div>
                                                {user.isPremium && (
                                                    <Badge variant="secondary" className="mt-1.5 h-4 text-[10px] px-1 bg-amber-100 text-amber-700 border-amber-200">
                                                        Premium
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    {users.length === 0 && (
                                        <div className="col-span-full flex flex-col items-center justify-center py-16 text-muted-foreground opacity-60">
                                            <User className="h-16 w-16 mb-4 stroke-1" />
                                            <p className="text-lg font-medium">No se encontraron usuarios</p>
                                            <p className="text-sm">Intenta con otra búsqueda</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </ScrollArea>
                </div>

                {/* Pagination Footer */}
                <div className="p-4 border-t bg-white flex items-center justify-between shrink-0">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page === 1 || isLoading}
                        className="gap-1"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Anterior
                    </Button>
                    <span className="text-sm text-muted-foreground font-medium">
                        Página {page} de {totalPages}
                    </span>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page >= totalPages || isLoading}
                        className="gap-1"
                    >
                        Siguiente
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}


// --- Delete Confirmation Modal ---
function DeleteConfirmationModal({
    isOpen,
    onClose,
    onConfirm,
    audioName
}: {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    audioName: string;
}) {
    const [confirmText, setConfirmText] = useState("");
    const isConfirmed = confirmText === "ELIMINAR";

    return (
        <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>¿Eliminar audio permanentemente?</DialogTitle>
                    <DialogDescription>
                        Esta acción no se puede deshacer. Esto eliminará permanentemente el audio <b>"{audioName}"</b> y lo removerá de nuestros servidores.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <div className="p-3 bg-red-50 text-red-800 text-sm rounded-md border border-red-200 flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 shrink-0" />
                        <p>Si este audio ya fue entregado a un usuario, dejará de estar disponible para ellos.</p>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm-delete">
                            Escribe <span className="font-bold text-red-600">ELIMINAR</span> para confirmar
                        </Label>
                        <Input
                            id="confirm-delete"
                            value={confirmText}
                            onChange={(e) => setConfirmText(e.target.value)}
                            placeholder="ELIMINAR"
                            className="border-red-300 focus-visible:ring-red-500"
                        />
                    </div>
                </div>
                <DialogFooter className="gap-2 sm:gap-0">
                    <Button variant="ghost" onClick={onClose}>Cancelar</Button>
                    <Button
                        variant="destructive"
                        onClick={onConfirm}
                        disabled={!isConfirmed}
                        className="gap-2"
                    >
                        <Trash2 className="h-4 w-4" />
                        Eliminar Definitivamente
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

// --- LARGE HISTORY MODAL ---
function FullHistoryModal({
    isOpen,
    onClose,
    requests
}: {
    isOpen: boolean;
    onClose: () => void;
    requests: UserStoryRequest[]
}) {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");

    // Combine sorting: Pending first, then date desc
    const sortedRequests = [...requests].sort((a, b) => {
        if (a.status === 'PROCESSING' && b.status !== 'PROCESSING') return -1;
        if (a.status !== 'PROCESSING' && b.status === 'PROCESSING') return 1;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    const filteredRequests = sortedRequests.filter(req => {
        const matchesSearch =
            req.user.name?.toLowerCase().includes(search.toLowerCase()) ||
            req.user.email.toLowerCase().includes(search.toLowerCase()) ||
            req.requestedName.toLowerCase().includes(search.toLowerCase()) ||
            req.history.name_es.toLowerCase().includes(search.toLowerCase());

        if (statusFilter === "all") return matchesSearch;
        if (statusFilter === "pending") return matchesSearch && (req.status === 'PROCESSING' || req.status === 'PENDING_PAYMENT');
        if (statusFilter === "completed") return matchesSearch && req.status === 'COMPLETED';
        return matchesSearch;
    });

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-6xl w-[95vw] h-[90vh] flex flex-col p-6">
                <DialogHeader>
                    <div className="flex items-center justify-between pb-4 border-b">
                        <div>
                            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                                <History className="w-6 h-6 text-indigo-600" />
                                Historial Global de Solicitudes
                            </DialogTitle>
                            <DialogDescription className="mt-1">
                                Detalles completos de todas las solicitudes, asignaciones y estado de entrega.
                            </DialogDescription>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-sm px-3 py-1">
                                Total: {requests.length}
                            </Badge>
                        </div>
                    </div>
                </DialogHeader>

                <div className="flex items-center gap-4 py-4">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                            placeholder="Buscar por usuario, niño o cuento..."
                            className="pl-9"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center bg-slate-100 p-1 rounded-lg">
                        <Button
                            variant={statusFilter === "all" ? "white" as any : "ghost"}
                            size="sm"
                            className={statusFilter === "all" ? "bg-white shadow-sm" : "text-muted-foreground"}
                            onClick={() => setStatusFilter("all")}
                        >
                            Todos
                        </Button>
                        <Button
                            variant={statusFilter === "pending" ? "white" as any : "ghost"}
                            size="sm"
                            className={statusFilter === "pending" ? "bg-white shadow-sm text-amber-600" : "text-muted-foreground"}
                            onClick={() => setStatusFilter("pending")}
                        >
                            Pendientes
                        </Button>
                        <Button
                            variant={statusFilter === "completed" ? "white" as any : "ghost"}
                            size="sm"
                            className={statusFilter === "completed" ? "bg-white shadow-sm text-green-600" : "text-muted-foreground"}
                            onClick={() => setStatusFilter("completed")}
                        >
                            Completados
                        </Button>
                    </div>
                </div>

                <div className="flex-1 border rounded-lg overflow-hidden bg-slate-50 relative flex flex-col">
                    <div className="overflow-auto flex-1">
                        <Table>
                            <TableHeader className="bg-white sticky top-0 z-10 shadow-sm">
                                <TableRow>
                                    <TableHead className="w-[80px]">Cuento</TableHead>
                                    <TableHead className="w-[200px]">Usuario</TableHead>
                                    <TableHead className="w-[180px]">Para (Niño/a)</TableHead>
                                    <TableHead className="w-[120px]">Estado</TableHead>
                                    <TableHead>Asignación (Audio)</TableHead>
                                    <TableHead className="w-[150px]">Fechas</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="bg-white">
                                {filteredRequests.map((req) => (
                                    <TableRow key={req.id}>
                                        <TableCell>
                                            <div className="flex flex-col items-center justify-center gap-1">
                                                <img src={`${IMAGE_URL}${req.history.cover}`} className="h-16 w-12 rounded object-cover border bg-slate-100" />
                                                <span className="text-[10px] text-muted-foreground font-medium text-center truncate w-20 leading-tight">{req.history.name_es}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-9 w-9 border">
                                                    <AvatarImage src={req.user.profileImage || undefined} />
                                                    <AvatarFallback>{req.user.name?.[0]}</AvatarFallback>
                                                </Avatar>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium">{req.user.name || "Sin nombre"}</span>
                                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                        <Mail className="h-3 w-3" /> {req.user.email}
                                                    </span>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg inline-flex items-center font-semibold text-sm">
                                                {req.requestedName}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {req.status === 'COMPLETED' ? (
                                                <Badge className="bg-green-100 text-green-700 border-green-200 hover:bg-green-100 gap-1 pl-1.5">
                                                    <CheckCircle2 className="w-3.5 h-3.5" /> Entregado
                                                </Badge>
                                            ) : req.status === 'PENDING_PAYMENT' ? (
                                                <Badge variant="outline" className="text-slate-500">Pago Pendiente</Badge>
                                            ) : (
                                                <Badge className="bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-100 gap-1 pl-1.5 animate-pulse">
                                                    <AlertTriangle className="w-3.5 h-3.5" /> Procesando
                                                </Badge>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {req.audio ? (
                                                <div className="flex items-center gap-2 p-2 rounded-md border bg-slate-50">
                                                    <div className="h-8 w-8 rounded-full bg-white border flex items-center justify-center text-indigo-500 shrink-0">
                                                        <Music className="w-4 h-4" />
                                                    </div>
                                                    <div className="flex flex-col min-w-0">
                                                        <span className="text-sm font-medium truncate max-w-[150px]">{req.audio.childName}</span>
                                                        <span className="text-[10px] text-muted-foreground truncate">{req.audio.url.split('/').pop()}</span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <span className="text-xs text-muted-foreground italic pl-2">-- Sin asignar --</span>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col gap-1 text-xs">
                                                <div className="flex items-center gap-1 text-slate-600">
                                                    <Calendar className="w-3 h-3" />
                                                    {new Date(req.createdAt).toLocaleDateString()}
                                                </div>
                                                <span className="text-muted-foreground pl-4">{new Date(req.createdAt).toLocaleTimeString()}</span>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {filteredRequests.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={6} className="h-24 text-center">
                                            No se encontraron solicitudes.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default function CustomStoriesPage() {
    const queryClient = useQueryClient();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedHistory, setSelectedHistory] = useState<HistoryModel | null>(null);
    const [isStorySelectorOpen, setIsStorySelectorOpen] = useState(false);
    const [selectorMode, setSelectorMode] = useState<'filter' | 'create'>('filter');
    const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null);

    // --- Modals State ---
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
    const [isHistorySheetOpen, setIsHistorySheetOpen] = useState(false);
    const [isFullHistoryOpen, setIsFullHistoryOpen] = useState(false); // New state for Full History

    // Delete Modal State
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [audioToDelete, setAudioToDelete] = useState<{ id: string, name: string } | null>(null);

    // Assign to pending request state
    const [requestToAssign, setRequestToAssign] = useState<UserStoryRequest | null>(null);
    const [selectedAssignAudioId, setSelectedAssignAudioId] = useState<string | null>(null);

    // Assign to Any User state
    const [isUserSelectorOpen, setIsUserSelectorOpen] = useState(false);
    const [audioToAssignUser, setAudioToAssignUser] = useState<AudioModel | null>(null);

    // --- Create Form State ---
    const [newAudioName, setNewAudioName] = useState('');
    const [newAudioStory, setNewAudioStory] = useState<HistoryModel | null>(null);
    const [newAudioFile, setNewAudioFile] = useState<File | null>(null);

    // --- Edit Form State ---
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [audioToEdit, setAudioToEdit] = useState<AudioModel | null>(null);
    const [editAudioFile, setEditAudioFile] = useState<File | null>(null);
    const [editAudioName, setEditAudioName] = useState('');
    const [editAudioStory, setEditAudioStory] = useState<HistoryModel | null>(null);

    // --- Audio Bank Queries ---
    const { data: audios = [], isLoading: isLoadingAudios } = useQuery<AudioModel[]>({
        queryKey: ['custom-audios', selectedHistory?.id, searchTerm],
        queryFn: async () => {
            const params = new URLSearchParams();
            if (selectedHistory?.id) params.set('historyId', selectedHistory.id);
            if (searchTerm) params.set('search', searchTerm);
            return fetcher(`custom-stories/audio?${params.toString()}`);
        },
    });

    // --- Requests Queries ---
    const { data: pendingRequests = [] } = useQuery<UserStoryRequest[]>({
        queryKey: ['custom-requests', 'pending'],
        queryFn: () => fetcher('custom-stories/requests?status=pending'),
        refetchInterval: 30000,
    });


    const { data: historyRequests = [] } = useQuery<UserStoryRequest[]>({
        queryKey: ['custom-requests', 'completed'],
        queryFn: () => fetcher('custom-stories/requests?status=completed'),
    });

    const allRequests = [...pendingRequests, ...historyRequests];

    // --- Query for Assignment Modal (Independent of main list filters) ---
    const { data: assignableAudios = [], isLoading: isLoadingAssignable } = useQuery<AudioModel[]>({
        queryKey: ['custom-audios-assign', requestToAssign?.history.id],
        queryFn: async () => {
            if (!requestToAssign) return [];
            const params = new URLSearchParams();
            params.set('historyId', requestToAssign.history.id);
            return fetcher(`custom-stories/audio?${params.toString()}`);
        },
        enabled: !!requestToAssign && isAssignModalOpen,
    });

    // --- Mutations ---
    const createAudioMutation = useMutation({
        mutationFn: (data: FormData) => formDataFetcher('custom-stories/audio', { method: 'POST', body: data }),
        onSuccess: () => {
            toast.success('Audio agregado correctamente');
            queryClient.invalidateQueries({ queryKey: ['custom-audios'] });
            setIsCreateModalOpen(false);
            setNewAudioFile(null); setNewAudioName(""); setNewAudioStory(null);
        },
        onError: (err) => toast.error('Error creando audio'),
    });

    const deleteAudioMutation = useMutation({
        mutationFn: (id: string) => fetcher(`custom-stories/audio/${id}`, { method: 'DELETE' }),
        onSuccess: () => {
            toast.success('Audio eliminado');
            queryClient.invalidateQueries({ queryKey: ['custom-audios'] });
            setIsDeleteModalOpen(false);
            setAudioToDelete(null);
        },
    });

    const assignAudioMutation = useMutation({
        mutationFn: ({ requestId, audioId }: { requestId: string, audioId: string }) =>
            fetcher('custom-stories/requests', {
                method: 'PATCH',
                body: JSON.stringify({ requestId, audioId }),
                headers: { 'Content-Type': 'application/json' }
            }),
        onSuccess: () => {
            toast.success('Audio asignado correctamente');
            queryClient.invalidateQueries({ queryKey: ['custom-requests'] });
            setIsAssignModalOpen(false);
            setRequestToAssign(null); setSelectedAssignAudioId(null);
        },
        onError: () => toast.error('Error asignando audio'),
    });

    const assignToUserMutation = useMutation({
        mutationFn: (data: any) => fetcher('custom-stories/assign', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }),
        onSuccess: () => {
            toast.success('Cuento asignado al usuario exitosamente');
            setIsUserSelectorOpen(false);
            setAudioToAssignUser(null);
        },
        onError: () => toast.error('Error al asignar cuento al usuario'),
    });

    const updateAudioMutation = useMutation({
        mutationFn: ({ id, data }: { id: string, data: FormData }) =>
            formDataFetcher(`custom-stories/audio/${id}`, { method: 'PUT', body: data }),
        onSuccess: () => {
            toast.success('Audio actualizado correctamente');
            queryClient.invalidateQueries({ queryKey: ['custom-audios'] });
            setIsEditModalOpen(false);
            setAudioToEdit(null);
            // Reset form
            setEditAudioName('');
            setEditAudioStory(null);
            setEditAudioFile(null);
        },
        onError: () => toast.error('Error actualizando audio'),
    });




    // Populate edit form when audioToEdit changes
    useEffect(() => {
        if (audioToEdit) {
            setEditAudioName(audioToEdit.childName);
            setEditAudioStory(audioToEdit.history as any); // Type assertion if needed or matching types
            setEditAudioFile(null); // Reset file
        }
    }, [audioToEdit]);


    const handleCreateSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newAudioFile || !newAudioName || !newAudioStory) {
            toast.error('Completa todos los campos');
            return;
        }
        const formData = new FormData();
        formData.append('childName', newAudioName);
        formData.append('historyId', newAudioStory.id);
        formData.append('audio', newAudioFile);
        createAudioMutation.mutate(formData);
    };

    const handleEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!audioToEdit || !editAudioName || !editAudioStory) {
            toast.error('Completa los campos requeridos');
            return;
        }
        const formData = new FormData();
        formData.append('childName', editAudioName);
        formData.append('historyId', editAudioStory.id);
        if (editAudioFile) {
            formData.append('audio', editAudioFile);
        }
        updateAudioMutation.mutate({ id: audioToEdit.id, data: formData });
    };


    const handleAssign = () => {
        if (!requestToAssign || !selectedAssignAudioId) return;
        assignAudioMutation.mutate({
            requestId: requestToAssign.id,
            audioId: selectedAssignAudioId
        });
    };

    const handleUserSelect = (user: any) => {
        if (!audioToAssignUser) return;
        assignToUserMutation.mutate({
            userId: user.id,
            audioId: audioToAssignUser.id,
            historyId: audioToAssignUser.historyId,
            childName: audioToAssignUser.childName
        });
    };

    const handleDeleteClick = (audio: AudioModel) => {
        setAudioToDelete({ id: audio.id, name: audio.childName });
        setIsDeleteModalOpen(true);
    };

    // Filter audios for assignment (Use the dedicated query result)
    const availableAudiosForAssign = assignableAudios;

    // Sort available audios: prioritize exact name match
    const sortedAvailableAudios = [...availableAudiosForAssign].sort((a, b) => {
        if (!requestToAssign) return 0;
        const nameMatchA = a.childName.toLowerCase() === requestToAssign.requestedName.toLowerCase();
        const nameMatchB = b.childName.toLowerCase() === requestToAssign.requestedName.toLowerCase();
        if (nameMatchA && !nameMatchB) return -1;
        if (!nameMatchA && nameMatchB) return 1;
        return 0;
    });

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] p-6 gap-6">
            <div className="flex items-center justify-between shrink-0">
                <h1 className="text-3xl font-bold flex items-center gap-3">
                    <Mic className="h-8 w-8" />
                    Cuentos Personalizados
                </h1>
                <div className="flex items-center gap-3">
                    {/* History Button - Now opens Full Modal */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="relative"
                        onClick={() => setIsFullHistoryOpen(true)}
                        title="Ver Historial Completo"
                    >
                        <History className="h-5 w-5" />
                    </Button>

                    <FullHistoryModal
                        isOpen={isFullHistoryOpen}
                        onClose={() => setIsFullHistoryOpen(false)}
                        requests={allRequests}
                    />

                    {/* Notifications (Pending Requests) */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="relative">
                                <Bell className="h-5 w-5" />
                                {pendingRequests.length > 0 && (
                                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                                        {pendingRequests.length}
                                    </span>
                                )}
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="w-[400px] sm:w-[540px]">
                            <SheetHeader>
                                <SheetTitle>Solicitudes Pendientes ({pendingRequests.length})</SheetTitle>
                            </SheetHeader>
                            <ScrollArea className="h-[calc(100vh-100px)] mt-4">
                                <div className="space-y-4 pr-4">
                                    {pendingRequests.map((req) => (
                                        <div key={req.id} className="border rounded-lg p-4 bg-white dark:bg-slate-950 shadow-sm relative overflow-hidden">
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400"></div>
                                            <div className="flex items-start justify-between mb-3 pl-2">
                                                <div className="flex items-center gap-2">
                                                    <Avatar className="h-8 w-8">
                                                        <AvatarImage src={req.user.profileImage || undefined} />
                                                        <AvatarFallback>{req.user.name?.[0] || 'U'}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="min-w-0">
                                                        <p className="text-sm font-medium truncate">{req.user.name}</p>
                                                        <p className="text-xs text-muted-foreground">{req.user.email}</p>
                                                    </div>
                                                </div>
                                                <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200">
                                                    Pendiente
                                                </Badge>
                                            </div>
                                            <div className="flex gap-3 pl-2 mb-4">
                                                <div className="h-20 w-14 rounded-md overflow-hidden bg-slate-100 shrink-0 border">
                                                    <img src={`${IMAGE_URL}${req.history.cover}`} className="h-full w-full object-cover" />
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <p className="text-xs text-muted-foreground">Cuento solicitado:</p>
                                                    <p className="font-semibold">{req.history.name_es}</p>
                                                    <div className="mt-2 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-bold inline-block self-start">
                                                        "{req.requestedName}"
                                                    </div>
                                                    <p className="text-[10px] text-muted-foreground mt-1">
                                                        {new Date(req.createdAt).toLocaleString()}
                                                    </p>
                                                </div>
                                            </div>
                                            <Button
                                                className="w-full gap-2 pl-2"
                                                onClick={() => {
                                                    setRequestToAssign(req);
                                                    setSelectedAssignAudioId(null);
                                                    setIsAssignModalOpen(true);
                                                }}
                                            >
                                                <CheckCircle2 className="h-4 w-4" />
                                                Asignar Audio
                                            </Button>
                                        </div>
                                    ))}
                                    {pendingRequests.length === 0 && <p className="text-center text-muted-foreground py-12">No hay solicitudes pendientes.</p>}
                                </div>
                            </ScrollArea>
                        </SheetContent>
                    </Sheet>

                    <Button onClick={() => {
                        setNewAudioFile(null);
                        setNewAudioName('');
                        setNewAudioStory(null);
                        setIsCreateModalOpen(true);
                    }}>
                        <Plus className="mr-2 h-4 w-4" />
                        Nuevo Audio
                    </Button>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4 bg-white dark:bg-slate-950 p-4 rounded-lg border shrink-0">
                <div className="relative flex-1 min-w-[200px]">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                        placeholder="Buscar por nombre de niño..."
                        className="pl-9"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2 min-w-[200px]">
                    {selectedHistory ? (
                        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-md border text-sm max-w-[250px]">
                            <img src={`${IMAGE_URL}${selectedHistory.cover}`} className="h-6 w-6 rounded object-cover" />
                            <span className="truncate">{selectedHistory.name_es}</span>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-5 w-5 ml-1 hover:bg-slate-200 rounded-full"
                                onClick={() => setSelectedHistory(null)}
                            >
                                <X className="h-3 w-3" />
                            </Button>
                        </div>
                    ) : (
                        <Button
                            variant="outline"
                            className="w-full justify-start text-muted-foreground font-normal"
                            onClick={() => {
                                setSelectorMode('filter');
                                setIsStorySelectorOpen(true);
                            }}
                        >
                            Filtrar por Cuento
                        </Button>
                    )}
                </div>
            </div>

            {/* Audio Grid */}
            <ScrollArea className="flex-1 border rounded-lg bg-white dark:bg-slate-950">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                    {audios.map((audio) => (
                        <div key={audio.id} className="group relative flex flex-col border rounded-lg p-3 hover:shadow-md transition-shadow bg-card">
                            <div className="flex items-start gap-3 mb-2">
                                <div className="h-12 w-12 rounded-md overflow-hidden bg-slate-100 border shrink-0">
                                    <img
                                        src={`${IMAGE_URL}${audio.history.cover}`}
                                        alt={audio.history.name_es}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h4 className="font-semibold truncate text-sm">{audio.childName}</h4>
                                    <p className="text-[10px] text-muted-foreground truncate">{audio.history.name_es}</p>
                                </div>
                            </div>

                            <div className="mt-auto space-y-3">
                                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                                    <AdvancedAudioPlayer
                                        url={audio.url}
                                        id={audio.id}
                                        currentPlayingId={currentPlayingId}
                                        onPlay={setCurrentPlayingId}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    {audio._count?.assignedTo ? (
                                        <Badge variant="secondary" className="text-[10px] px-1.5 h-5">
                                            {audio._count.assignedTo} usos
                                        </Badge>
                                    ) : (
                                        <span></span>
                                    )}
                                    <div className="flex items-center gap-1">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-7 px-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                                            onClick={() => {
                                                setAudioToAssignUser(audio);
                                                setIsUserSelectorOpen(true);
                                            }}
                                            title="Asignar a usuario"
                                        >
                                            <Share2 className="h-3.5 w-3.5 mr-1" />
                                            Asignar
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-7 w-7 text-indigo-500 hover:text-indigo-700 hover:bg-indigo-50"
                                            onClick={() => {
                                                setAudioToEdit(audio);
                                                setIsEditModalOpen(true);
                                            }}
                                            title="Editar"
                                        >
                                            <Edit className="h-3.5 w-3.5" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-7 w-7 text-red-300 hover:text-red-500 hover:bg-red-50"
                                            onClick={() => handleDeleteClick(audio)}
                                        >
                                            <Trash2 className="h-3.5 w-3.5" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {audios.length === 0 && !isLoadingAudios && (
                        <div className="col-span-full flex flex-col items-center justify-center py-16 text-muted-foreground">
                            <Mic className="h-12 w-12 mb-4 opacity-20" />
                            <p>No se encontraron audios.</p>
                        </div>
                    )}
                </div>
            </ScrollArea >

            {/* --- MODALS --- */}
            {/* Create Audio Modal */}
            <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Nuevo Cuento Personalizado</DialogTitle>
                        <DialogDescription>
                            Sube un audio grabado y asignalo a una historia.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleCreateSubmit} className="space-y-4 pt-4">
                        <div className="space-y-2">
                            <Label>Nombre del Niño(a)</Label>
                            <Input
                                value={newAudioName}
                                onChange={(e) => setNewAudioName(e.target.value)}
                                placeholder="Ej: Santiago, Valentina..."
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Historia Base</Label>
                            {newAudioStory ? (
                                <div className="flex items-center gap-2 p-2 border rounded-md bg-slate-50 dark:bg-slate-900/50">
                                    <img src={`${IMAGE_URL}${newAudioStory.cover}`} className="h-10 w-10 rounded object-cover" />
                                    <span className="text-sm font-medium truncate flex-1">{newAudioStory.name_es}</span>
                                    <Button type="button" variant="ghost" size="icon" className="h-8 w-8" onClick={() => setNewAudioStory(null)}>
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            ) : (
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="w-full justify-start text-muted-foreground font-normal"
                                    onClick={() => {
                                        setSelectorMode('create');
                                        setIsStorySelectorOpen(true);
                                    }}
                                >
                                    Seleccionar Historia
                                </Button>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label>Archivo de Audio</Label>
                            <AudioDropzone value={newAudioFile} onChange={setNewAudioFile} />
                        </div>

                        <DialogFooter>
                            <Button type="submit" disabled={createAudioMutation.isPending}>
                                {createAudioMutation.isPending ? 'Guardando...' : 'Guardar Audio'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Edit Audio Modal */}
            <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Editar Audio Personalizado</DialogTitle>
                        <DialogDescription>
                            Modifica los detalles del audio o sube una nueva versión.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleEditSubmit} className="space-y-4 pt-4">
                        <div className="space-y-2">
                            <Label>Nombre del Niño(a)</Label>
                            <Input
                                value={editAudioName}
                                onChange={(e) => setEditAudioName(e.target.value)}
                                placeholder="Ej: Santiago, Valentina..."
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Historia Base</Label>
                            {editAudioStory ? (
                                <div className="flex items-center gap-2 p-2 border rounded-md bg-slate-50 dark:bg-slate-900/50">
                                    <img src={`${IMAGE_URL}${editAudioStory.cover}`} className="h-10 w-10 rounded object-cover" />
                                    <span className="text-sm font-medium truncate flex-1">{editAudioStory.name_es}</span>
                                    <Button type="button" variant="ghost" size="icon" className="h-8 w-8" onClick={() => setEditAudioStory(null)}>
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            ) : (
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="w-full justify-start text-muted-foreground font-normal"
                                    onClick={() => {
                                        setSelectorMode('create');
                                        setIsStorySelectorOpen(true);
                                    }}
                                >
                                    Seleccionar Historia
                                </Button>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label>Archivo de Audio (Opcional)</Label>
                            <div className="text-xs text-muted-foreground mb-1">
                                Deja vacío para mantener el audio actual.
                            </div>
                            <AudioDropzone value={editAudioFile} onChange={setEditAudioFile} />
                        </div>

                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setIsEditModalOpen(false)}>Cancelar</Button>
                            <Button type="submit" disabled={updateAudioMutation.isPending}>
                                {updateAudioMutation.isPending ? 'Guardando...' : 'Guardar Cambios'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Selector Modal */}
            <StorySelectorModal
                isOpen={isStorySelectorOpen}
                onClose={() => setIsStorySelectorOpen(false)}
                onStorySelect={(story) => {
                    if (selectorMode === 'filter') {
                        setSelectedHistory(story);
                    } else if (selectorMode === 'create') {
                        if (isEditModalOpen) {
                            setEditAudioStory(story);
                        } else {
                            setNewAudioStory(story);
                        }
                    }
                    setIsStorySelectorOpen(false);
                }}
            />

            {/* Assign Modal (For Pending Request) */}
            <Dialog open={isAssignModalOpen} onOpenChange={setIsAssignModalOpen}>
                <DialogContent className="sm:max-w-2xl h-[80vh] flex flex-col">
                    <DialogHeader>
                        <DialogTitle>Asignar Audio a Solicitud</DialogTitle>
                        <DialogDescription>
                            Selecciona el audio grabado para <span className="font-bold text-indigo-600">{requestToAssign?.requestedName}</span>.
                        </DialogDescription>
                    </DialogHeader>

                    {requestToAssign && (
                        <div className="flex gap-4 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-100 mb-4 shrink-0">
                            <img src={`${IMAGE_URL}${requestToAssign.history.cover}`} className="h-16 w-12 rounded object-cover shadow-sm" />
                            <div>
                                <h4 className="font-semibold text-slate-800 dark:text-slate-200">{requestToAssign.history.name_es}</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Solicitado por: {requestToAssign.user.name}</p>
                                <p className="text-sm mt-1">Nombre objetivo: <Badge className="bg-indigo-600 border-0">{requestToAssign.requestedName}</Badge></p>
                            </div>
                        </div>
                    )}

                    <div className="flex-1 overflow-hidden flex flex-col">
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            Audios Disponibles ({sortedAvailableAudios.length})
                            {isLoadingAssignable && <Loader2 className="h-3 w-3 animate-spin text-muted-foreground" />}
                        </h4>
                        <ScrollArea className="flex-1 border rounded-md p-4">
                            {sortedAvailableAudios.length > 0 ? (
                                <div className="space-y-4">
                                    {sortedAvailableAudios.map((audio) => (
                                        <div
                                            key={audio.id}
                                            onClick={() => setSelectedAssignAudioId(audio.id)}
                                            className={`
                                            flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all
                                            ${selectedAssignAudioId === audio.id
                                                    ? 'bg-indigo-50 border-indigo-500 ring-1 ring-indigo-500 dark:bg-indigo-950/50'
                                                    : 'hover:bg-slate-50 dark:hover:bg-slate-900'}
                                        `}
                                        >
                                            <div className={`
                                            h-4 w-4 rounded-full border flex items-center justify-center
                                            ${selectedAssignAudioId === audio.id ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'}
                                        `}>
                                                {selectedAssignAudioId === audio.id && <CheckCircle2 className="h-3 w-3" />}
                                            </div>
                                            <div className="h-10 w-10 bg-slate-100 rounded flex items-center justify-center shrink-0">
                                                <Music className="text-slate-500 h-5 w-5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium text-sm">{audio.childName}</p>
                                                <p className="text-xs text-muted-foreground">{audio.url.split('/').pop()}</p>
                                            </div>
                                            <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
                                                <AdvancedAudioPlayer
                                                    url={audio.url}
                                                    id={`assign-${audio.id}`}
                                                    currentPlayingId={currentPlayingId}
                                                    onPlay={setCurrentPlayingId}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-10 text-muted-foreground">
                                    <p>No se encontraron audios para esta historia.</p>
                                    <Button variant="link" onClick={() => { setIsAssignModalOpen(false); setIsCreateModalOpen(true); setNewAudioName(requestToAssign?.requestedName || ''); }}>Crear Nuevo Audio</Button>
                                </div>
                            )}
                        </ScrollArea>
                    </div>

                    <DialogFooter className="mt-4">
                        <Button variant="outline" onClick={() => setIsAssignModalOpen(false)}>Cancelar</Button>
                        <Button onClick={handleAssign} disabled={!selectedAssignAudioId || assignAudioMutation.isPending}>
                            {assignAudioMutation.isPending ? 'Asignando...' : 'Confirmar Asignación'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <UserSelectorModal
                isOpen={isUserSelectorOpen}
                onClose={() => setIsUserSelectorOpen(false)}
                onUserSelect={handleUserSelect}
            />

            <DeleteConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={() => audioToDelete && deleteAudioMutation.mutate(audioToDelete.id)}
                audioName={audioToDelete?.name || ""}
            />
        </div >
    );
}
