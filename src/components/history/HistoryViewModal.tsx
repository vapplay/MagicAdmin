'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Play,
  Pause,
  Star,
  Calendar,
  Youtube,
  BookOpen,
  Film,
  Download,
  FileJson,
  Loader2,
} from 'lucide-react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

// Componentes de shadcn/ui
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Label } from '@/components/ui/label';
import { AUDIO_URL, IMAGE_URL } from '@/ts/util';
import { toast } from 'sonner';

// Interfaz Story
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

type Props = {
  open: boolean;
  onClose: () => void;
  item: Story | null;
};

const InfoCard = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`bg-background space-y-4 rounded-lg border p-6 shadow-sm ${className}`}>
    <h3 className="text-foreground text-lg font-semibold">{title}</h3>
    {children}
  </div>
);

const HistoryViewModal = ({ open, onClose, item }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [language, setLanguage] = useState<'es' | 'en' | 'pt'>('es');
  const [isZipping, setIsZipping] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
    if (open) setLanguage('es');
  }, [open, item]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const setAudioData = () => setDuration(audio.duration);
    const setAudioTime = () => setCurrentTime(audio.currentTime);
    const handleAudioEnd = () => setIsPlaying(false);

    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleAudioEnd);

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleAudioEnd);
    };
  }, [item, language]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    isPlaying ? audio.pause() : audio.play().catch(console.error);
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value[0];
    setCurrentTime(value[0]);
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getName = () => item?.[`name_${language}`] || item?.name_es || '';
  const getDescription = () => item?.[`description_${language}`] || item?.description_es || '';

  // --- CAMBIO CLAVE: Descarga individual arreglada para evitar problemas de CORS ---
  const handleDownload = (url: string, filename: string) => {
    try {
      toast.info(`Iniciando descarga de ${filename}...`);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      // Opcional: Para algunos navegadores y para evitar que el enlace se abra en la misma pestaña
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error al iniciar descarga:', error);
      toast.error('No se pudo iniciar la descarga.');
    }
  };

  const handleDownloadAllAsZip = async () => {
    if (!item) return;
    setIsZipping(true);
    toast.info('Comprimiendo archivos...', { id: 'zipping-toast' });
    try {
      const zip = new JSZip();
      const assets = [
        { url: `${IMAGE_URL}${item.cover}`, name: `cover.jpg` },
        { url: `${IMAGE_URL}${item.poster}`, name: `poster.jpg` },
        { url: `${AUDIO_URL}es/${item.song}`, name: `audio-es.mp3` },
        { url: `${AUDIO_URL}en/${item.song}`, name: `audio-en.mp3` },
        { url: `${AUDIO_URL}pt/${item.song}`, name: `audio-pt.mp3` },
      ];
      const fetchPromises = assets.map((asset) =>
        fetch(asset.url)
          .then((res) => (res.ok ? res.blob() : Promise.reject()))
          .then((blob) => zip.file(asset.name, blob))
          .catch(() => console.warn(`No se pudo descargar: ${asset.name}`))
      );
      await Promise.all(fetchPromises);
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      saveAs(zipBlob, `historia-${item.id}.zip`);
      toast.success('Archivos listos para descargar.', { id: 'zipping-toast' });
    } catch (error) {
      toast.error('No se pudo generar el archivo ZIP.', { id: 'zipping-toast' });
    } finally {
      setIsZipping(false);
    }
  };

  const handleExportJson = () => {
    if (!item) return;
    const blob = new Blob([JSON.stringify(item, null, 2)], { type: 'application/json' });
    saveAs(blob, `${item.id}.json`);
  };

  if (!item) return null;

  const showTwoImages = item.poster && item.poster !== item.cover;

  return (
    <TooltipProvider>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogOverlay className="backdrop-blur-sm" />
        <DialogContent className="grid max-h-[95vh] w-full grid-rows-[auto_1fr] gap-0 p-0 sm:max-w-5xl">
          <DialogHeader className="flex-row items-center justify-between border-b p-4">
            <DialogTitle className="text-lg">Detalles del Cuento</DialogTitle>
            <div className="flex items-center gap-2">
              <Select
                value={language}
                onValueChange={(value: 'es' | 'en' | 'pt') => setLanguage(value)}
              >
                <SelectTrigger className="h-9 w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">🇪🇸 Español</SelectItem>
                  <SelectItem value="en">🇺🇸 English</SelectItem>
                  <SelectItem value="pt">🇧🇷 Português</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          <ScrollArea>
            <div className="grid grid-cols-1 gap-8 p-6 lg:grid-cols-2">
              <div className="flex flex-col gap-6">
                <InfoCard title="Archivos Multimedia">
                  <div className={`grid gap-4 ${showTwoImages ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    <div className="space-y-2">
                      <Label>Cover</Label>
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <img
                          src={`${IMAGE_URL}${item.cover}`}
                          alt={`Cover de ${getName()}`}
                          className="h-full w-full object-cover"
                        />
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="bg-background/50 absolute top-2 right-2 h-7 w-7 backdrop-blur-sm"
                              onClick={() =>
                                handleDownload(`${IMAGE_URL}${item.cover}`, `cover-${item.id}.jpg`)
                              }
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Descargar Cover</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>
                    {showTwoImages && (
                      <div className="space-y-2">
                        <Label>Poster</Label>
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                          <img
                            src={`${IMAGE_URL}${item.poster}`}
                            alt={`Poster de ${getName()}`}
                            className="h-full w-full object-cover"
                          />
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="outline"
                                size="icon"
                                className="bg-background/50 absolute top-2 right-2 h-7 w-7 backdrop-blur-sm"
                                onClick={() =>
                                  handleDownload(
                                    `${IMAGE_URL}${item.poster}`,
                                    `poster-${item.id}.jpg`
                                  )
                                }
                              >
                                <Download className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Descargar Poster</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="pt-4">
                    <Label>Audio ({language.toUpperCase()})</Label>
                    <audio
                      ref={audioRef}
                      src={`${AUDIO_URL}${language}/${item.song}`}
                      preload="metadata"
                    />
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        onClick={togglePlayPause}
                        size="icon"
                        className="h-12 w-12 flex-shrink-0 rounded-full"
                      >
                        {isPlaying ? (
                          <Pause className="h-5 w-5" />
                        ) : (
                          <Play className="ml-1 h-5 w-5" />
                        )}
                      </Button>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-12 w-12 flex-shrink-0 rounded-full"
                            onClick={() =>
                              handleDownload(
                                `${AUDIO_URL}${language}/${item.song}`,
                                `audio-${language}-${item.id}.mp3`
                              )
                            }
                          >
                            <Download className="h-5 w-5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Descargar Audio</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="mt-4 flex w-full items-center gap-3">
                      <span className="text-muted-foreground flex-shrink-0 font-mono text-sm">
                        {formatTime(currentTime)}
                      </span>
                      <Slider
                        value={[currentTime]}
                        max={duration || 100}
                        step={1}
                        onValueChange={handleSeek}
                        className="flex-1"
                      />
                      <span className="text-muted-foreground flex-shrink-0 font-mono text-sm">
                        {formatTime(duration)}
                      </span>
                    </div>
                  </div>
                </InfoCard>
              </div>

              <div className="flex flex-col gap-6">
                <InfoCard title="Información Principal">
                  <h1 className="text-foreground text-2xl font-bold">{getName()}</h1>
                  {item.isPremium && (
                    <Badge className="border-amber-400/50 bg-amber-400/20 text-amber-500">
                      <Star className="mr-1.5 h-3.5 w-3.5" />
                      Premium
                    </Badge>
                  )}
                  <p className="prose prose-sm dark:prose-invert text-muted-foreground max-w-none leading-relaxed">
                    {getDescription()}
                  </p>
                </InfoCard>

                <InfoCard title="Detalles">
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Tipo
                      </span>
                      <Badge variant="outline">{item.type === 1 ? 'Cuento' : 'Historia'}</Badge>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        Creación
                      </span>
                      <span className="font-mono">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        Actualización
                      </span>
                      <span className="font-mono">
                        {new Date(item.updatedAt).toLocaleDateString()}
                      </span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center">Estado</span>
                      <Badge variant={item.active ? 'default' : 'destructive'}>
                        {item.active ? 'Activo' : 'Inactivo'}
                      </Badge>
                    </li>
                  </ul>
                </InfoCard>

                <InfoCard title="Acciones Globales">
                  <div className="flex flex-col gap-3">
                    {item.youtube && (
                      <Button variant="outline" asChild>
                        <a href={item.youtube} target="_blank" rel="noopener noreferrer">
                          <Youtube className="mr-2 h-4 w-4" />
                          Ver en YouTube
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" onClick={handleDownloadAllAsZip} disabled={isZipping}>
                      {isZipping ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Download className="mr-2 h-4 w-4" />
                      )}
                      {isZipping ? 'Comprimiendo...' : 'Descargar Todo (.zip)'}
                    </Button>
                    <Button variant="outline" onClick={handleExportJson}>
                      <FileJson className="mr-2 h-4 w-4" />
                      Exportar JSON
                    </Button>
                  </div>
                </InfoCard>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
};

export default HistoryViewModal;
