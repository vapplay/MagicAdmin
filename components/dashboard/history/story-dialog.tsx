"use client"

import React, { useState, useEffect, useRef } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useDropzone } from "react-dropzone"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Upload, X, Play, Pause, Music, ImageIcon, FileAudio, Trash2, Loader2 } from "lucide-react"
import { IMAGE_URL, SONG_URL } from "@/util/config"

// --- TYPES ---
export interface StoryFormData {
    id?: string
    name_es: string
    description_es: string
    name_en: string
    description_en: string
    name_pt?: string
    description_pt?: string

    cover: string | File
    song: string | File
    youtube?: string

    type: string
    active: boolean
    isPremium: boolean
}

interface StoryDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    story?: any | null // Using any for flexibility with the existing Story interface
    onSave: (data: StoryFormData) => Promise<void>
}

// --- ZOD SCHEMA ---
const storySchema = z.object({
    // Language specific fields
    name_es: z.string().min(1, "El nombre en español es requerido"),
    description_es: z.string().min(1, "La descripción en español es requerida"),
    song_es: z.union([z.string().optional(), z.instanceof(File).optional()]),

    name_en: z.string().min(1, "El nombre en inglés es requerido"),
    description_en: z.string().min(1, "La descripción en inglés es requerida"),
    song_en: z.union([z.string().optional(), z.instanceof(File).optional()]),

    name_pt: z.string().optional(),
    description_pt: z.string().optional(),
    song_pt: z.union([z.string().optional(), z.instanceof(File).optional()]),

    // Global media
    cover: z.union([z.string().min(1, "El cover es requerido"), z.instanceof(File, { message: "El cover es requerido" })]),
    poster: z.union([z.string().optional(), z.instanceof(File).optional()]),

    // Config
    youtube: z.string().optional(),
    type: z.string(),
    active: z.boolean(),
    isPremium: z.boolean(),
})

export type StoryFormSchema = z.infer<typeof storySchema>



export function StoryDialog({ open, onOpenChange, story, onSave }: StoryDialogProps) {
    const isEditing = !!story
    const [isSaving, setIsSaving] = useState(false)

    // --- FORM SETUP ---
    const form = useForm<StoryFormSchema>({
        resolver: zodResolver(storySchema),
        defaultValues: {
            name_es: "", description_es: "", song_es: "",
            name_en: "", description_en: "", song_en: "",
            name_pt: "", description_pt: "", song_pt: "",
            cover: "", poster: "",
            youtube: "",
            type: "1",
            active: true,
            isPremium: false,
        }
    })

    // --- RESET FORM ON OPEN ---
    useEffect(() => {
        if (open) {
            if (story) {
                form.reset({
                    name_es: story.name_es, description_es: story.description_es, song_es: story.song || "",

                    name_en: story.name_en, description_en: story.description_en, song_en: story.song || "",
                    name_pt: story.name_pt || "", description_pt: story.description_pt || "", song_pt: story.song || "",

                    cover: story.cover,
                    poster: story.poster || "",
                    youtube: story.youtube || "",
                    type: String(story.type),
                    active: story.active,
                    isPremium: story.isPremium,
                })
            } else {
                form.reset({
                    name_es: "", description_es: "", song_es: "",
                    name_en: "", description_en: "", song_en: "",
                    name_pt: "", description_pt: "", song_pt: "",
                    cover: "", poster: "",
                    youtube: "",
                    type: "1",
                    active: true,
                    isPremium: false,
                })
            }
        }
    }, [open, story, form])

    const onSubmit = async (data: StoryFormSchema) => {
        setIsSaving(true)
        try {
            await onSave(data as unknown as StoryFormData)
        } catch (error) {
            console.error("Error saving story", error)
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={(val) => {
            if (isSaving) return
            onOpenChange(val)
        }}>
            <DialogContent className="min-w-4xl max-h-[90vh] flex flex-col p-0 gap-0" onInteractOutside={(e) => {
                if (isSaving) e.preventDefault()
            }}>
                <DialogHeader className="p-6 pb-4">
                    <DialogTitle>{isEditing ? "Editar Cuento" : "Nuevo Cuento"}</DialogTitle>
                    <DialogDescription>
                        {isEditing ? "Modifica los detalles del cuento." : "Completa la información para crear un nuevo cuento."}
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col flex-1 overflow-hidden">
                    <div className="flex-1 overflow-y-auto p-6 pt-0 space-y-6">

                        {/* --- TOP SECTION: IMAGES & CONFIG --- */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Images Column (2/3) */}
                            <div className="md:col-span-2 space-y-4">
                                <h3 className="flex items-center gap-2 font-medium text-slate-900 dark:text-slate-100">
                                    <ImageIcon className="h-5 w-5" /> Imágenes
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Poster (Vertical)</Label>
                                        <Controller
                                            control={form.control}
                                            name="poster"
                                            render={({ field }) => (
                                                <ImageDropzone
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    heightClass="h-[280px]" // Taller for poster
                                                />
                                            )}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Cover (Horizontal)</Label>
                                        <Controller
                                            control={form.control}
                                            name="cover"
                                            render={({ field }) => (
                                                <ImageDropzone
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    heightClass="h-[180px]" // Shorter for cover
                                                />
                                            )}
                                        />
                                        {form.formState.errors.cover && <p className="text-xs text-red-500">{form.formState.errors.cover.message}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Config Column (1/3) */}
                            <div className="space-y-4">
                                <h3 className="font-medium text-slate-900 dark:text-slate-100">Configuración</h3>
                                <div className="space-y-4 rounded-lg border p-4 bg-slate-50 dark:bg-slate-900/50">
                                    <div className="space-y-2">
                                        <Label htmlFor="type">Tipo</Label>
                                        <Controller
                                            control={form.control}
                                            name="type"
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Seleccione tipo" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="1">📚 Historia</SelectItem>
                                                        <SelectItem value="2">🎭 Icónico</SelectItem>
                                                        <SelectItem value="3">🎵 Canción</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                    </div>

                                    <Controller
                                        control={form.control}
                                        name="isPremium"
                                        render={({ field }) => (
                                            <div className="flex items-center justify-between space-x-2">
                                                <div className="space-y-0.5">
                                                    <Label className="text-base text-amber-600 dark:text-amber-500">Premium</Label>
                                                    <p className="text-xs text-muted-foreground">Exclusivo</p>
                                                </div>
                                                <Switch checked={field.value} onCheckedChange={field.onChange} />
                                            </div>
                                        )}
                                    />

                                    <Controller
                                        control={form.control}
                                        name="active"
                                        render={({ field }) => (
                                            <div className="flex items-center justify-between space-x-2">
                                                <div className="space-y-0.5">
                                                    <Label className="text-base">Activo</Label>
                                                    <p className="text-xs text-muted-foreground">Visible en App</p>
                                                </div>
                                                <Switch checked={field.value} onCheckedChange={field.onChange} />
                                            </div>
                                        )}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="youtube">URL YouTube (Opcional)</Label>
                                    <div className="relative">
                                        <Input id="youtube" {...form.register("youtube")} placeholder="https://youtube.com/..." className="pl-9" />
                                        <div className="absolute left-3 top-2.5 text-slate-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --- BOTTOM SECTION: LANGUAGES TABS --- */}
                        <Tabs defaultValue="es" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="es">🇪🇸 Español</TabsTrigger>
                                <TabsTrigger value="en">🇺🇸 Inglés</TabsTrigger>
                                <TabsTrigger value="pt">🇧🇷 Portugués</TabsTrigger>
                            </TabsList>

                            {/* HELPER TO RENDER TABS content to avoid repetition code */}
                            {([
                                { lang: 'es', label: '🇪🇸 Español', titleName: 'name_es', descName: 'description_es', audioName: 'song_es' },
                                { lang: 'en', label: '🇺🇸 Inglés', titleName: 'name_en', descName: 'description_en', audioName: 'song_en' },
                                { lang: 'pt', label: '🇧🇷 Portugués', titleName: 'name_pt', descName: 'description_pt', audioName: 'song_pt' },
                            ] as const).map(({ lang, label, titleName, descName, audioName }) => (
                                <TabsContent key={lang} value={lang} className="space-y-4 mt-4 border p-4 rounded-md bg-slate-50 dark:bg-slate-900/50">
                                    <div className="space-y-2">
                                        <Label htmlFor={titleName}>Título ({label})</Label>
                                        <Input id={titleName} {...form.register(titleName)} placeholder={`Título en ${label}`} />
                                        {form.formState.errors[titleName] && <p className="text-xs text-red-500">{form.formState.errors[titleName]?.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor={descName}>Descripción ({label})</Label>
                                        <Textarea id={descName} {...form.register(descName)} placeholder={`Descripción en ${label}...`} className="resize-none" rows={3} />
                                        {form.formState.errors[descName] && <p className="text-xs text-red-500">{form.formState.errors[descName]?.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Audio ({label})</Label>
                                        <Controller
                                            control={form.control}
                                            name={audioName}
                                            render={({ field }) => (
                                                <AudioDropzone
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    language={lang as any}
                                                />
                                            )}
                                        />
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>


                    </div>
                    <DialogFooter className="p-6 border-t bg-background mt-auto">
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isSaving}>Cancelar</Button>
                        <Button type="submit" disabled={isSaving}>
                            {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {isSaving ? "Guardando..." : "Guardar"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

// --- SUBCOMPONENTS FOR DRAG & DROP ---

function ImageDropzone({ value, onChange, heightClass = "h-48 md:h-64" }: { value: string | File | null | undefined, onChange: (v: string | File) => void, heightClass?: string }) {
    const [preview, setPreview] = useState<string | null>(null)

    useEffect(() => {
        if (typeof value === 'string' && value) {
            if (value.startsWith('http')) {
                setPreview(value)
            } else {
                setPreview(`${IMAGE_URL}${value}`)
            }
        } else if (value instanceof File) {
            const objectUrl = URL.createObjectURL(value)
            setPreview(objectUrl)
            return () => URL.revokeObjectURL(objectUrl)
        } else {
            setPreview(null)
        }
    }, [value])

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles?.[0]) {
            onChange(acceptedFiles[0])
        }
    }

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        maxFiles: 1,
        multiple: false,
        noClick: true // Disable click on root, use open() only
    } as any)

    return (
        <div className="w-full">
            {preview ? (
                <div className={`relative w-full ${heightClass} rounded-md overflow-hidden border border-slate-200 dark:border-slate-800 group`}>
                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button type="button" variant="secondary" size="sm" onClick={() => open()}>
                            <Upload className="w-4 h-4 mr-2" /> Reemplazar
                        </Button>
                        <Button type="button" variant="destructive" size="sm" onClick={(e) => {
                            e.stopPropagation()
                            onChange("")
                        }}>
                            <Trash2 className="w-4 h-4 mr-2" /> Quitar
                        </Button>
                    </div>
                    <div {...getRootProps()} className="absolute inset-0 z-10" style={{ pointerEvents: 'none' }}>
                        {/* @ts-ignore */}
                        <input {...getInputProps()} />
                    </div>
                </div>
            ) : (
                <div
                    {...getRootProps()}
                    onClick={open}
                    className={`border-2 border-dashed rounded-md p-4 flex flex-col items-center justify-center cursor-pointer transition-colors ${heightClass}
                        ${isDragActive ? 'border-primary bg-primary/5' : 'border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900'}
                    `}
                >
                    <input {...(getInputProps() as any)} />
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full mb-3">
                        <ImageIcon className="w-6 h-6 text-slate-400" />
                    </div>
                    <p className="text-sm font-medium text-center mb-1">
                        {isDragActive ? "Suelta la imagen aquí" : "Arrastra una imagen o haz clic"}
                    </p>
                    <p className="text-xs text-muted-foreground text-center">
                        PNG, JPG, WEBP hasta 5MB
                    </p>
                </div>
            )
            }
        </div >
    )
}

function AudioDropzone({ value, onChange, language = 'es' }: { value: string | File | null | undefined, onChange: (v: string | File) => void, language?: 'es' | 'en' | 'pt' }) {
    const [preview, setPreview] = useState<string | null>(null)
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        if (typeof value === 'string' && value) {
            if (value.startsWith('http')) {
                setPreview(value)
            } else {
                // Determine base URL
                let baseUrl = SONG_URL.es
                if (language === 'en') baseUrl = SONG_URL.en
                // For PT, we default to ES bucket as no specific bucket was provided.
                if (language === 'pt') baseUrl = SONG_URL.es // Fallback to ES for now

                setPreview(`${baseUrl}${value}`)
            }
        } else if (value instanceof File) {
            const objectUrl = URL.createObjectURL(value)
            setPreview(objectUrl)
            return () => URL.revokeObjectURL(objectUrl)
        } else {
            setPreview(null)
        }
    }, [value])

    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles?.[0]) {
            onChange(acceptedFiles[0])
        }
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'audio/*': [] },
        maxFiles: 1,
        multiple: false
    } as any)

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setProgress(audioRef.current.currentTime)
        }
    }

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration)
        }
    }

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value)
        if (audioRef.current) {
            audioRef.current.currentTime = time
            setProgress(time)
        }
    }

    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00"
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    return (
        <div className="w-full" >
            {
                preview ? (
                    <div className="flex items-center gap-4 p-4 border rounded-md bg-slate-50 dark:bg-slate-900/50" >
                        <div className="h-10 w-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
                            <Music className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">
                                {value instanceof File ? value.name : 'Archivo de audio actual'}
                            </p>
                            <audio
                                ref={audioRef}
                                src={preview}
                                onEnded={() => setIsPlaying(false)}
                                onPause={() => setIsPlaying(false)}
                                onPlay={() => setIsPlaying(true)}
                                onTimeUpdate={handleTimeUpdate}
                                onLoadedMetadata={handleLoadedMetadata}
                                className="hidden"
                            />
                            <div className="flex items-center gap-2 mt-1">
                                <Button type="button" size="icon" variant="ghost" className="h-6 w-6 shrink-0" onClick={togglePlay}>
                                    {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                                </Button>

                                <div className="flex-1 flex items-center gap-2">
                                    <span className="text-[10px] text-muted-foreground w-8 text-right tabular-nums">
                                        {formatTime(progress)}
                                    </span>
                                    <input
                                        type="range"
                                        min="0"
                                        max={duration || 0}
                                        value={progress}
                                        onChange={handleSeek}
                                        className="flex-1 h-1 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-600 hover:[&::-webkit-slider-thumb]:bg-indigo-700"
                                    />
                                    <span className="text-[10px] text-muted-foreground w-8 tabular-nums">
                                        {formatTime(duration)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Button type="button" variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => onChange("")}>
                            <Trash2 className="w-4 h-4" />
                        </Button>
                    </div >
                ) : (
                    <div
                        {...getRootProps()}
                        className={`border-2 border-dashed rounded-md p-4 flex flex-col items-center justify-center cursor-pointer transition-colors h-32
                        ${isDragActive ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/20' : 'border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900'}
                    `}
                    >
                        <input {...(getInputProps() as any)} />
                        <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full mb-2">
                            <FileAudio className="w-5 h-5 text-slate-400" />
                        </div>
                        <p className="text-sm font-medium">Subir Audio</p>
                    </div>
                )
            }
        </div >
    )
}
