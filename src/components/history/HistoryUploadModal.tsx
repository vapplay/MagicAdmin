'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { formDataFetcher, updater } from '@/ts/fetch';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Image as ImageIcon,
  Music,
  UploadCloud,
  X,
  Loader2,
  FileAudio,
  ImagePlus,
  Play,
  Pause,
  ArrowDownToLine,
} from 'lucide-react';
import { toast } from 'sonner';
import { IMAGE_URL, AUDIO_URL } from '@/ts/util';

// --- INTERFACES Y ESTADO INICIAL (SIN CAMBIOS) ---
interface Story {
  id: string;
  name_es: string;
  name_en: string;
  name_pt: string;
  active: boolean;
  description_en: string;
  description_es: string;
  description_pt: string;
  youtube: string | null;
  poster: string;
  cover: string;
  type: number;
  isPremium: boolean;
  song: string;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  storyToEdit?: Story | null;
}

const initialState = {
  name_es: '',
  description_es: '',
  name_en: '',
  description_en: '',
  name_pt: '',
  description_pt: '',
  youtube: '',
  type: 1,
  isPremium: false,
  active: true,
  language: 'es',
  posterFile: null as File | null,
  coverFile: null as File | null,
  audio_esFile: null as File | null,
  audio_enFile: null as File | null,
  audio_ptFile: null as File | null,
};

// --- COMPONENTE FileUploadInput (ACTUALIZADO CON DRAG & DROP) ---
const FileUploadInput = ({
  label,
  accept,
  icon: Icon,
  file,
  onFileSelect,
  existingUrl,
  id,
}: {
  label: string;
  accept: string;
  icon: React.ElementType;
  file: File | null;
  onFileSelect: (file: File | null) => void;
  existingUrl?: string;
  id: string;
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

  const handleDivClick = () => inputRef.current?.click();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    e.target.files?.[0] && onFileSelect(e.target.files[0]);
  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFileSelect(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  // --- NUEVA LÓGICA DE DRAG & DROP ---
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragIn = (e: React.DragEvent) => {
    handleDrag(e);
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  };
  const handleDragOut = (e: React.DragEvent) => {
    handleDrag(e);
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    handleDrag(e);
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileSelect(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const showExistingPreview = existingUrl && !file && !preview;

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div
        onClick={handleDivClick}
        // Eventos de Drag & Drop añadidos aquí
        onDrop={handleDrop}
        onDragOver={handleDrag}
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        // CAMBIO: Se aplica el color de fondo y estilos condicionales para el drag
        className={`relative flex min-h-[120px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-4 transition-colors ${isDragging ? 'border-primary bg-primary/10' : file ? 'border-primary/50' : 'border-border'} hover:border-primary/50 dark:hover:border-primary/50 bg-gray-50 hover:bg-gray-100/50 dark:bg-gray-900 dark:hover:bg-gray-800/50`}
      >
        <input
          ref={inputRef}
          id={id}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
        />
        {isDragging ? (
          <>
            <ArrowDownToLine className="text-primary mb-2 h-10 w-10 animate-bounce" />
            <p className="text-primary font-semibold">Suelta el archivo aquí</p>
          </>
        ) : preview || showExistingPreview ? (
          <img
            src={preview || `${IMAGE_URL}${existingUrl}`}
            alt="Preview"
            className="max-h-full max-w-full rounded-md object-contain"
          />
        ) : file ? (
          <>
            <Icon className="text-primary mb-2 h-8 w-8" />
            <p className="text-foreground max-w-full truncate px-4 text-sm font-medium">
              {file.name}
            </p>
          </>
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
            onClick={handleClear}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

// --- COMPONENTE AudioPlayerPreview (SIN CAMBIOS) ---
const AudioPlayerPreview = ({ src, langLabel }: { src: string; langLabel: string }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const setAudioData = () => setDuration(audio.duration);
    const setAudioTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) audio.pause();
      else audio.play();
      setIsPlaying(!isPlaying);
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-muted/50 mt-2 space-y-2 rounded-lg border p-3">
      <audio ref={audioRef} src={src} preload="metadata"></audio>
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 flex-shrink-0"
          onClick={togglePlayPause}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <div className="flex w-full flex-col gap-1.5">
          <p className="text-sm font-medium">Audio actual ({langLabel})</p>
          <div className="bg-background relative h-2 w-full rounded-full">
            <div
              className="bg-primary absolute h-2 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-muted-foreground flex justify-between text-xs">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE HistoryUploadModal (RESTO SIN CAMBIOS) ---
export default function HistoryUploadModal({ open, onClose, storyToEdit }: Props) {
  const queryClient = useQueryClient();
  const isEditMode = !!storyToEdit;
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (open) {
      if (storyToEdit) {
        setFormData({
          ...initialState,
          ...storyToEdit,
          type: storyToEdit.type || 1,
          youtube: storyToEdit.youtube || '',
        });
      } else {
        setFormData(initialState);
      }
    }
  }, [open, storyToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSwitchChange = (checked: boolean, name: string) =>
    setFormData((prev) => ({ ...prev, [name]: checked }));
  const handleSelectChange = (value: string, name: string) =>
    setFormData((prev) => ({ ...prev, [name]: Number(value) }));
  const handleFileSelect = (file: File | null, name: string) =>
    setFormData((prev) => ({ ...prev, [name]: file }));
  const { mutate: saveStory, isLoading } = useMutation({
    // ***** CORRECCIÓN CLAVE *****
    // Cambiamos 'updater' por una función que usa 'formDataFetcher'
    mutationFn: (data: FormData) => {
      const endpoint = isEditMode ? 'history/update' : 'history';
      return formDataFetcher(endpoint, {
        method: 'POST', // O 'PUT' si tus rutas de admin usan PUT
        body: data,
      });
    },
    onSuccess: (response) => {
      // 'response' es lo que devuelve el backend
      queryClient.invalidateQueries({ queryKey: ['history'] });
      toast.success(response.message || (isEditMode ? 'Cuento actualizado' : 'Cuento creado'));
      onClose();
    },
    onError: (error: any) => toast.error(error?.message || 'Ocurrió un error.'),
  });

  const handleSubmit = () => {
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      // Tu lógica para construir el FormData ya es PERFECTA. No hay que cambiarla.
      if (key.endsWith('File') && value instanceof File) {
        const fieldNameMap: { [key: string]: string } = {
          posterFile: 'image',
          coverFile: 'poster',
          audio_esFile: 'es_song',
          audio_enFile: 'en_song',
          audio_ptFile: 'pt_song',
        };
        data.append(fieldNameMap[key], value);
      } else if (
        value !== null && // Asegurarnos de no enviar valores nulos
        key !== 'language' // No necesitamos enviar el 'language' del selector de tabs
      ) {
        data.append(key, String(value));
      }
    });

    if (isEditMode && storyToEdit) {
      data.append('id', storyToEdit.id);
    }

    saveStory(data);
  };
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="p-0 sm:max-h-[90vh] sm:max-w-5xl">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle>
            {isEditMode ? `Editar: ${storyToEdit.name_es}` : 'Crear Nuevo Cuento'}
          </DialogTitle>
          <DialogDescription>
            Completa la información y sube los archivos multimedia.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(90vh-140px)] px-6 py-2">
          <div className="grid gap-8 py-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="space-y-4 md:col-span-2">
                <h3 className="text-foreground flex items-center gap-2 font-medium">
                  <ImagePlus className="h-5 w-5" /> Imágenes
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FileUploadInput
                    id="poster"
                    label="Poster (Vertical)"
                    accept="image/*"
                    icon={ImageIcon}
                    file={formData.posterFile}
                    existingUrl={storyToEdit?.poster}
                    onFileSelect={(file) => handleFileSelect(file, 'posterFile')}
                  />
                  <FileUploadInput
                    id="cover"
                    label="Cover (Horizontal)"
                    accept="image/*"
                    icon={ImageIcon}
                    file={formData.coverFile}
                    existingUrl={storyToEdit?.cover}
                    onFileSelect={(file) => handleFileSelect(file, 'coverFile')}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-foreground font-medium">Configuración</h3>
                <div className="space-y-4 rounded-lg border p-4">
                  <div className="space-y-2">
                    <Label htmlFor="type">Tipo</Label>
                    <Select
                      value={String(formData.type)}
                      onValueChange={(v) => handleSelectChange(v, 'type')}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">📚 Historia</SelectItem>
                        <SelectItem value="2">🎭 Icónico</SelectItem>
                        <SelectItem value="3">🎵 Canción</SelectItem>
                        <SelectItem value="4">👨‍👩‍👧‍👦 Clientes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between space-x-2 pt-2">
                    <Label htmlFor="isPremium" className="flex flex-col">
                      <span>Premium</span>
                      <span className="text-muted-foreground text-xs font-normal">Exclusivo</span>
                    </Label>
                    <Switch
                      id="isPremium"
                      checked={formData.isPremium}
                      onCheckedChange={(c) => handleSwitchChange(c, 'isPremium')}
                    />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="active" className="flex flex-col">
                      <span>Activo</span>
                      <span className="text-muted-foreground text-xs font-normal">
                        Visible en App
                      </span>
                    </Label>
                    <Switch
                      id="active"
                      checked={formData.active}
                      onCheckedChange={(c) => handleSwitchChange(c, 'active')}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="youtube">URL YouTube (Opcional)</Label>
                  <Input
                    id="youtube"
                    name="youtube"
                    placeholder="https://youtube.com/..."
                    value={formData.youtube || ''}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <Tabs defaultValue="es" className="mt-2">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="es">🇪🇸 Español</TabsTrigger>
                <TabsTrigger value="en">🇺🇸 Inglés</TabsTrigger>
                <TabsTrigger value="pt">🇧🇷 Portugués</TabsTrigger>
              </TabsList>
              {[
                { lang: 'es', label: 'Español' },
                { lang: 'en', label: 'Inglés' },
                { lang: 'pt', label: 'Portugués' },
              ].map(({ lang, label }) => (
                <TabsContent
                  key={lang}
                  value={lang}
                  className="mt-4 space-y-4 rounded-md border p-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor={`name_${lang}`}>Título ({label})</Label>
                    <Input
                      id={`name_${lang}`}
                      name={`name_${lang}`}
                      value={formData[`name_${lang}`]}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`description_${lang}`}>Descripción ({label})</Label>
                    <Textarea
                      id={`description_${lang}`}
                      name={`description_${lang}`}
                      value={formData[`description_${lang}`]}
                      onChange={handleChange}
                      rows={3}
                    />
                  </div>
                  {isEditMode &&
                  storyToEdit?.[`name_${lang}`] &&
                  storyToEdit?.song &&
                  !formData[`audio_${lang}File`] ? (
                    <AudioPlayerPreview
                      src={`${AUDIO_URL}${lang}/${storyToEdit.song}`}
                      langLabel={label}
                    />
                  ) : null}
                  <FileUploadInput
                    id={`audio_${lang}`}
                    label={
                      isEditMode && storyToEdit?.[`name_${lang}`] && storyToEdit?.song
                        ? `Reemplazar Audio (${label})`
                        : `Subir Audio (${label})`
                    }
                    accept=".mp3,.wav,.m4a"
                    icon={FileAudio}
                    file={formData[`audio_${lang}File`]}
                    onFileSelect={(file) => handleFileSelect(file, `audio_${lang}File`)}
                  />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </ScrollArea>
        <DialogFooter className="border-t px-6 py-4">
          <Button variant="outline" onClick={onClose} disabled={isLoading}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit} disabled={isLoading} className="gap-2">
            {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
            {isEditMode ? 'Guardar Cambios' : 'Subir Cuento'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
