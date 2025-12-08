"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher, formDataFetcher } from '@/lib/fetch';
import { toast } from 'sonner';

// --- Iconos y Componentes UI ---
import {
    PlusCircle,
    Link2,
    BookOpen,
    Edit,
    Trash2,
    Wand2,
    UploadCloud,
    ArrowDownToLine,
    X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';

import { IMAGE_URL } from '@/util/config';
import { StorySelectorModal, HistoryModel } from '@/components/history/StorySelectorModal';

interface Banner {
    id: string;
    title?: string | null;
    description?: string | null;
    isPromo: boolean;
    playImage?: string | null;
    externalUrl?: string | null;
    history?: HistoryModel | null;
    historyId?: string | null;
}

// --- Componente de Subida de Archivos ---
const FileUploadInput = ({
    file,
    onFileSelect,
    existingUrl,
}: {
    file: File | null;
    onFileSelect: (file: File | null) => void;
    existingUrl?: string | null;
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    useEffect(() => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result as string);
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    }, [file]);
    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDragIn = (e: React.DragEvent) => {
        handleDrag(e);
        if (e.dataTransfer.items?.length > 0) setIsDragging(true);
    };
    const handleDragOut = (e: React.DragEvent) => {
        handleDrag(e);
        setIsDragging(false);
    };
    const handleDrop = (e: React.DragEvent) => {
        handleDrag(e);
        setIsDragging(false);
        if (e.dataTransfer.files?.[0]) onFileSelect(e.dataTransfer.files[0]);
    };

    // existingUrl logic: if it starts with http, use it, else prepend IMAGE_URL
    const displayExistingUrl = existingUrl
        ? (existingUrl.startsWith('http') ? existingUrl : `${IMAGE_URL}${existingUrl}`)
        : null;

    const showExistingPreview = displayExistingUrl && !file && !preview;

    return (
        <div
            onClick={() => inputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDrag}
            onDragEnter={handleDragIn}
            onDragLeave={handleDragOut}
            className={`relative flex min-h-[150px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-4 transition-colors ${isDragging ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'}`}
        >
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={(e) => onFileSelect(e.target.files?.[0] || null)}
                className="hidden"
            />
            {isDragging ? (
                <>
                    <ArrowDownToLine className="text-primary mb-2 h-10 w-10 animate-bounce" />
                    <p className="text-primary font-semibold">Suelta la imagen aquí</p>
                </>
            ) : preview || showExistingPreview ? (
                <img
                    src={preview || displayExistingUrl!}
                    alt="Preview"
                    className="max-h-full max-w-full rounded-md object-contain"
                />
            ) : (
                <>
                    <UploadCloud className="text-muted-foreground mb-2 h-8 w-8" />
                    <p className="text-muted-foreground text-sm">Arrastra o haz clic para subir</p>
                </>
            )}
            {file && !isDragging && (
                <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-destructive/10 hover:text-destructive absolute top-1 right-1 h-6 w-6 rounded-full"
                    onClick={(e) => {
                        e.stopPropagation();
                        onFileSelect(null);
                    }}
                >
                    <X className="h-4 w-4" />
                </Button>
            )}
        </div>
    );
};

// --- Componente Editor de Banners ---
const BannerEditModal = ({
    isOpen,
    onClose,
    banner,
    createMutation,
    updateMutation,
}: {
    isOpen: boolean;
    onClose: () => void;
    banner: Banner | null;
    createMutation: any;
    updateMutation: any;
}) => {
    // Usamos una interfaz interna para el formulario
    interface FormState extends Omit<Partial<Banner>, 'history'> {
        story?: HistoryModel | null;
    }
    const [formData, setFormData] = useState<FormState>({});
    const [bannerImageFile, setBannerImageFile] = useState<File | null>(null);
    const [isStorySelectorOpen, setIsStorySelectorOpen] = useState(false);
    const [useExternalUrl, setUseExternalUrl] = useState(false);
    const bannerType = formData.isPromo ? 'promo' : 'story';

    useEffect(() => {
        setBannerImageFile(null);
        if (banner) {
            setFormData({ ...banner, story: banner.history });
            setUseExternalUrl(!!banner.externalUrl);
        } else {
            setFormData({ isPromo: false, story: null });
            setUseExternalUrl(false);
        }
    }, [banner, isOpen]);

    const handleTypeChange = (value: 'promo' | 'story') =>
        setFormData((prev) => ({ ...prev, isPromo: value === 'promo', story: null }));

    const handleSave = () => {
        const dataToSend = new FormData();

        dataToSend.append('title', formData.title || '');
        dataToSend.append('description', formData.description || '');
        dataToSend.append('isPromo', String(formData.isPromo || false));

        // Si el tipo es promo
        if (formData.isPromo) {
            if (bannerImageFile) {
                dataToSend.append('playImage', bannerImageFile);
            }
            if (useExternalUrl && formData.externalUrl) {
                dataToSend.append('externalUrl', formData.externalUrl);
            } else {
                dataToSend.append('externalUrl', '');
            }
            // El 'history' es opcional en promo y solo si no hay URL externa
            if (formData.story && !useExternalUrl) {
                dataToSend.append('historyId', formData.story.id);
            }
        } else {
            // Si el tipo es story
            if (formData.story?.id) {
                dataToSend.append('historyId', formData.story.id);
            } else {
                toast.error('Debes seleccionar un cuento para este tipo de banner.');
                return;
            }
        }

        if (banner?.id) {
            updateMutation.mutate({ id: banner.id, data: dataToSend });
        } else {
            createMutation.mutate(dataToSend);
        }
    };

    const isLoading = createMutation.isPending || updateMutation.isPending;

    return (
        <>
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>{banner ? 'Editar Banner' : 'Crear Nuevo Banner'}</DialogTitle>
                        <DialogDescription>Completa la información del banner.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-6 py-4">
                        <div className="space-y-2 rounded-lg border p-4">
                            <Label>Tipo de Banner</Label>
                            <RadioGroup
                                value={bannerType}
                                onValueChange={handleTypeChange as (value: string) => void}
                                className="grid grid-cols-2 gap-4 pt-2"
                            >
                                <div>
                                    <RadioGroupItem value="story" id="type-story" className="peer sr-only" />
                                    <Label
                                        htmlFor="type-story"
                                        className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border-2 p-4 cursor-pointer"
                                    >
                                        <BookOpen className="mb-3 h-6 w-6" />
                                        Tipo Cuento
                                    </Label>
                                </div>
                                <div>
                                    <RadioGroupItem value="promo" id="type-promo" className="peer sr-only" />
                                    <Label
                                        htmlFor="type-promo"
                                        className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border-2 p-4 cursor-pointer"
                                    >
                                        <Wand2 className="mb-3 h-6 w-6" />
                                        Tipo Promocional
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="space-y-4 rounded-md border p-4">
                            {bannerType === 'story' && (
                                <>
                                    <div className="space-y-2">
                                        <Label>Cuento Seleccionado</Label>
                                        <div className="flex min-h-[100px] items-center gap-4 rounded-lg border p-4">
                                            {formData.story ? (
                                                <>
                                                    <img
                                                        src={`${IMAGE_URL}${formData.story.cover}`}
                                                        alt={formData.story.name_es}
                                                        className="h-16 w-16 rounded-md object-cover"
                                                    />
                                                    <div className="flex-grow">
                                                        <p className="font-medium">{formData.story.name_es}</p>
                                                    </div>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => setIsStorySelectorOpen(true)}
                                                    >
                                                        Cambiar
                                                    </Button>
                                                </>
                                            ) : (
                                                <div className="w-full text-center">
                                                    <Button variant="secondary" onClick={() => setIsStorySelectorOpen(true)}>
                                                        Seleccionar Cuento
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Título Personalizado (Opcional)</Label>
                                        <Input
                                            value={formData.title || ''}
                                            onChange={(e) => setFormData((p) => ({ ...p, title: e.target.value }))}
                                            placeholder={formData.story?.name_es || 'Se usará el título del cuento'}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Descripción Personalizada (Opcional)</Label>
                                        <Textarea
                                            value={formData.description || ''}
                                            onChange={(e) => setFormData((p) => ({ ...p, description: e.target.value }))}
                                            placeholder={
                                                formData.story?.description_es || 'Se usará la descripción del cuento'
                                            }
                                        />
                                    </div>
                                </>
                            )}
                            {bannerType === 'promo' && (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label>Título</Label>
                                            <Input
                                                value={formData.title || ''}
                                                onChange={(e) => setFormData((p) => ({ ...p, title: e.target.value }))}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Descripción</Label>
                                            <Input
                                                value={formData.description || ''}
                                                onChange={(e) =>
                                                    setFormData((p) => ({ ...p, description: e.target.value }))
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Imagen Promocional</Label>
                                        <FileUploadInput
                                            file={bannerImageFile}
                                            onFileSelect={setBannerImageFile}
                                            existingUrl={formData.playImage}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between rounded-lg border p-4">
                                        <div className="space-y-0.5">
                                            <Label>Usar URL Externa</Label>
                                            <p className="text-muted-foreground text-sm">
                                                El banner abrirá un enlace web.
                                            </p>
                                        </div>
                                        <Switch checked={useExternalUrl} onCheckedChange={setUseExternalUrl} />
                                    </div>
                                    {useExternalUrl && (
                                        <div className="space-y-2">
                                            <Label>URL Externa</Label>
                                            <div className="relative">
                                                <Link2 className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                                                <Input
                                                    type="url"
                                                    value={formData.externalUrl || ''}
                                                    onChange={(e) =>
                                                        setFormData((p) => ({ ...p, externalUrl: e.target.value }))
                                                    }
                                                    placeholder="https://ejemplo.com"
                                                    className="pl-9"
                                                />
                                            </div>
                                        </div>
                                    )}
                                    <div className={`space-y-2 ${useExternalUrl ? 'opacity-50' : ''}`}>
                                        <Label>Asociar un Cuento (Opcional)</Label>
                                        <div className="flex min-h-[100px] items-center gap-4 rounded-lg border p-4">
                                            {formData.story ? (
                                                <>
                                                    <img
                                                        src={`${IMAGE_URL}${formData.story.cover}`}
                                                        alt={formData.story.name_es}
                                                        className="h-16 w-16 rounded-md object-cover"
                                                    />
                                                    <div className="flex-grow">
                                                        <p className="font-medium">{formData.story.name_es}</p>
                                                    </div>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => setIsStorySelectorOpen(true)}
                                                        disabled={useExternalUrl}
                                                    >
                                                        Cambiar
                                                    </Button>
                                                    <Button
                                                        variant="destructive"
                                                        size="sm"
                                                        onClick={() => setFormData((p) => ({ ...p, story: null }))}
                                                        disabled={useExternalUrl}
                                                    >
                                                        Quitar
                                                    </Button>
                                                </>
                                            ) : (
                                                <div className="w-full text-center">
                                                    <Button
                                                        variant="secondary"
                                                        onClick={() => setIsStorySelectorOpen(true)}
                                                        disabled={useExternalUrl}
                                                    >
                                                        Seleccionar Cuento
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={onClose} variant="outline">
                            Cancelar
                        </Button>
                        <Button onClick={handleSave} disabled={isLoading}>
                            {isLoading ? 'Guardando...' : 'Guardar'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <StorySelectorModal
                isOpen={isStorySelectorOpen}
                onClose={() => setIsStorySelectorOpen(false)}
                onStorySelect={(story) => setFormData((p) => ({ ...p, story }))}
            />
        </>
    );
};

// --- Página Principal de Banners ---
export default function BannersPage() {
    const queryClient = useQueryClient();
    const { data: banners = [], isLoading: isLoadingBanners } = useQuery<Banner[]>({
        queryKey: ['banners'],
        queryFn: () => fetcher('banners'),
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBanner, setSelectedBanner] = useState<Banner | null>(null);

    const createBannerMutation = useMutation({
        mutationFn: (newBannerData: FormData) =>
            formDataFetcher('banners', {
                method: 'POST',
                body: newBannerData,
            }),
        onSuccess: () => {
            toast.success('Banner creado con éxito!');
            queryClient.invalidateQueries({ queryKey: ['banners'] });
            setIsModalOpen(false);
        },
        onError: (error: any) => {
            toast.error(`Error al crear: ${error.message}`);
        },
    });

    const updateBannerMutation = useMutation({
        mutationFn: ({ id, data }: { id: string; data: FormData }) =>
            formDataFetcher(`banners/${id}`, {
                method: 'PUT',
                body: data,
            }),
        onSuccess: () => {
            toast.success('Banner actualizado con éxito!');
            queryClient.invalidateQueries({ queryKey: ['banners'] });
            setIsModalOpen(false);
        },
        onError: (error: any) => {
            toast.error(`Error al actualizar: ${error.message}`);
        },
    });

    const deleteBannerMutation = useMutation({
        mutationFn: (id: string) => fetcher(`banners/${id}`, { method: 'DELETE' }),
        onSuccess: () => {
            toast.success('Banner eliminado con éxito.');
            queryClient.invalidateQueries({ queryKey: ['banners'] });
        },
        onError: (error: any) => {
            toast.error(`Error al eliminar: ${error.message}`);
        },
    });

    const handleDelete = (id: string) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este banner?')) {
            deleteBannerMutation.mutate(id);
        }
    };

    const handleOpenCreateModal = () => {
        setSelectedBanner(null);
        setIsModalOpen(true);
    };

    const handleOpenEditModal = (banner: Banner) => {
        setSelectedBanner(banner);
        setIsModalOpen(true);
    };

    if (isLoadingBanners)
        return (
            <div className="flex h-full items-center justify-center">
                <div className="border-muted border-t-primary h-8 w-8 animate-spin rounded-full border-4"></div>
            </div>
        );

    const getBannerData = (banner: Banner) => {
        if (banner.isPromo)
            return {
                title: banner.title || 'Banner Promocional',
                description: banner.description || '',
                image: banner.playImage ? (banner.playImage.startsWith('http') ? banner.playImage : `${IMAGE_URL}${banner.playImage}`) : '/placeholder.png',
            };
        return {
            title: banner.title || banner.history?.name_es || 'Cuento...',
            description: banner.description || banner.history?.description_es || '',
            image: banner.history?.cover ? `${IMAGE_URL}${banner.history.cover}` : '/placeholder.png',
        };
    };

    return (
        <div className="flex h-full flex-col p-4 sm:p-6 lg:p-8">
            <header className="mb-8 flex items-center justify-between">
                <h1 className="text-foreground flex items-center gap-3 text-3xl font-bold">
                    <Wand2 className="h-8 w-8" />
                    Gestión de Banners
                </h1>
                <Button onClick={handleOpenCreateModal}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Crear Banner
                </Button>
            </header>
            <ScrollArea className="flex-grow">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {banners &&
                        banners?.map((banner) => {
                            const { title, description, image } = getBannerData(banner);
                            return (
                                <Card key={banner.id} className="flex flex-col">
                                    <CardHeader>
                                        <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                                            <img src={image} alt={title} className="h-full w-full object-cover" />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow space-y-2">
                                        <div className="flex items-start justify-between">
                                            <CardTitle className="line-clamp-2 text-lg">{title}</CardTitle>
                                            <Badge variant={banner.isPromo ? 'secondary' : 'default'}>
                                                {banner.isPromo ? 'Promo' : 'Cuento'}
                                            </Badge>
                                        </div>
                                        <CardDescription className="line-clamp-3">{description}</CardDescription>
                                        {banner.history && (
                                            <div className="text-muted-foreground flex items-center gap-2 pt-2 text-xs">
                                                <BookOpen className="h-4 w-4" />
                                                <span>{banner.history.name_es}</span>
                                            </div>
                                        )}
                                        {banner.externalUrl && (
                                            <div className="text-muted-foreground flex items-center gap-2 pt-2 text-xs">
                                                <Link2 className="h-4 w-4" />
                                                <span>URL: {banner.externalUrl}</span>
                                            </div>
                                        )}
                                    </CardContent>
                                    <CardFooter className="flex justify-end gap-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => handleOpenEditModal(banner)}
                                        >
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            onClick={() => handleDelete(banner.id)}
                                            disabled={deleteBannerMutation.isPending}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            );
                        })}
                </div>
            </ScrollArea>
            {isModalOpen && (
                <BannerEditModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    banner={selectedBanner}
                    createMutation={createBannerMutation}
                    updateMutation={updateBannerMutation}
                />
            )}
        </div>
    );
}