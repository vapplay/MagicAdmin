'use client';

import fetcher, { updater } from '@/ts/fetch';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Edit,
  Trash2,
  Eye,
  Star,
  Filter,
  Music,
  Image,
  Youtube,
  Plus,
  SortAsc,
  SortDesc,
  BookOpen,
  PlayCircle,
  CheckCircle,
  BarChart3,
  FilterX,
  Play,
  Pause,
  Square,
  Volume2,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TooltipProvider } from '@/components/ui/tooltip';
import HistoryViewModal from './HistoryViewModal';
import { AUDIO_URL, IMAGE_URL } from '@/ts/util';
import { Switch } from '../ui/switch';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import HistoryUploadModal from './HistoryUploadModal';

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

// Nuevo componente para el Modal de Confirmación de Eliminación
function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  storyName,
  isLoading,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  storyName: string;
  isLoading: boolean;
}) {
  const [step, setStep] = useState(1);
  const [confirmationText, setConfirmationText] = useState('');
  const isConfirmationTextCorrect = confirmationText === 'eliminar';

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setConfirmationText('');
    }
  }, [isOpen]);

  const handleConfirmFirstStep = () => {
    setStep(2);
  };

  const handleFinalConfirm = () => {
    if (isConfirmationTextCorrect) {
      onConfirm();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <AlertTriangle className="text-red-500" />
                  ¿Seguro que desea eliminar?
                </DialogTitle>
                <DialogDescription>
                  Esta acción no se puede deshacer. Esto eliminará permanentemente el cuento{' '}
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    {storyName}
                  </span>
                  .
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="mt-4">
                <Button variant="outline" onClick={onClose}>
                  Cancelar
                </Button>
                <Button variant="destructive" onClick={handleConfirmFirstStep}>
                  Eliminar
                </Button>
              </DialogFooter>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <DialogHeader>
                <DialogTitle>Confirmación Final</DialogTitle>
                <DialogDescription>
                  Para confirmar la eliminación, por favor escriba{' '}
                  <span className="font-bold text-red-600 dark:text-red-500">eliminar</span> en el
                  campo de abajo.
                </DialogDescription>
              </DialogHeader>
              <div className="my-4">
                <Input
                  value={confirmationText}
                  onChange={(e) => setConfirmationText(e.target.value)}
                  placeholder='Escriba "eliminar" para confirmar'
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500 dark:border-slate-700"
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={onClose}>
                  Cancelar
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleFinalConfirm}
                  disabled={!isConfirmationTextCorrect || isLoading}
                >
                  {isLoading ? 'Eliminando...' : 'Confirmar y Eliminar'}
                </Button>
              </DialogFooter>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

export default function HistoryTable() {
  const queryClient = useQueryClient();

  // Estados para filtros y paginación
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [premiumFilter, setPremiumFilter] = useState('all');
  const [youtubeFilter, setYoutubeFilter] = useState('all');
  const [advancedSearch, setAdvancedSearch] = useState('');
  const [sortBy, setSortBy] = useState<keyof Story>('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [expandedStory, setExpandedStory] = useState<string | null>(null);
  const [seleteViewItem, setSeleteViewItem] = useState<Story | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [storyToDelete, setStoryToDelete] = useState<Story | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [storyToEdit, setStoryToEdit] = useState<Story | null>(null);

  // Estados del reproductor
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ['history'] });
  };
  const { mutate: activeStory } = useMutation({
    mutationFn: (data: { id: string; active: boolean }) => updater('history/active', data),
    onSuccess,
  });

  const { mutate: premiumStory } = useMutation({
    mutationFn: (data: { id: string; isPremium: boolean }) => updater('history/premium', data),
    onSuccess,
  });

  const { mutate: deleteStory, isLoading: isDeleting } = useMutation({
    mutationFn: (id: string) => updater('history/delete', { id }),
    onSuccess: () => {
      onSuccess();
      setStoryToDelete(null);
    },
  });

  // Query para obtener datos
  const { data: response, isLoading } = useQuery({
    queryKey: ['history'],
    queryFn: async () => {
      const response = await fetcher('history/all');
      return response.data as Story[];
    },
    refetchInterval: 1000 * 60 * 5,
  });

  const data = response;

  const showModalView = (story: Story) => {
    setSeleteViewItem(story);
    setIsViewModalOpen(true);
  };

  const showDeleteModal = (story: Story) => {
    setStoryToDelete(story);
  };

  const handleEditStory = (story: Story) => {
    setStoryToEdit(story);
    setIsUploadModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (storyToDelete) {
      deleteStory(storyToDelete.id);
    }
  };

  // Filtrado y ordenamiento de datos
  const filteredData = useMemo(() => {
    if (!data) return [];

    const filtered = data.filter((story: Story) => {
      const searchLower = searchTerm.toLowerCase();
      const advancedLower = advancedSearch.toLowerCase();
      const matchesSearch =
        story.name_es.toLowerCase().includes(searchLower) ||
        story.name_en.toLowerCase().includes(searchLower) ||
        story.name_pt.toLowerCase().includes(searchLower) ||
        story.description_es.toLowerCase().includes(searchLower) ||
        story.id.toLowerCase().includes(searchLower);
      const matchesAdvanced =
        !advancedSearch ||
        Object.values(story).some((value) => String(value).toLowerCase().includes(advancedLower));
      const matchesStatus =
        statusFilter === 'all' || (statusFilter === 'active' ? story.active : !story.active);
      const matchesType = typeFilter === 'all' || story.type.toString() === typeFilter;
      const matchesPremium =
        premiumFilter === 'all' ||
        (premiumFilter === 'premium' ? story.isPremium : !story.isPremium);
      const matchesYoutube =
        youtubeFilter === 'all' ||
        (youtubeFilter === 'with' ? story.youtube !== null : story.youtube === null);
      return (
        matchesSearch &&
        matchesAdvanced &&
        matchesStatus &&
        matchesType &&
        matchesPremium &&
        matchesYoutube
      );
    });

    return filtered.sort((a, b) => {
      const fieldA = a[sortBy];
      const fieldB = b[sortBy];
      const comparison = fieldA > fieldB ? 1 : fieldA < fieldB ? -1 : 0;
      return sortOrder === 'desc' ? -comparison : comparison;
    });
  }, [
    data,
    searchTerm,
    advancedSearch,
    statusFilter,
    typeFilter,
    premiumFilter,
    youtubeFilter,
    sortBy,
    sortOrder,
  ]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateProgress = () => setAudioProgress(audio.currentTime);
    const updateDuration = () => isFinite(audio.duration) && setAudioDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentAudio(null);
    };
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const stats = useMemo(() => {
    if (!data) return { total: 0, active: 0, premium: 0, withVideo: 0 };
    return {
      total: data.length,
      active: data.filter((s) => s.active).length,
      premium: data.filter((s) => s.isPremium).length,
      withVideo: data.filter((s) => !!s.youtube).length,
    };
  }, [data]);

  const getTypeLabel = (type: number) =>
    ({ 1: 'Cuento', 2: 'Historia', 3: 'Fábula' })[type] || `Tipo ${type}`;

  const getAvailableAudios = (story: Story) => {
    if (!story.song) return [];
    const audios = [];
    if (story.name_es) audios.push({ lang: 'es', file: story.song, label: 'Español' });
    if (story.name_en) audios.push({ lang: 'en', file: story.song, label: 'Inglés' });
    if (story.name_pt) audios.push({ lang: 'pt', file: story.song, label: 'Portugués' });
    return audios;
  };

  const getFlagEmoji = (lang: string) => ({ es: '🇪🇸', en: '🇺🇸', pt: '🇧🇷' })[lang] || '🌐';

  const clearAllFilters = () => {
    setSearchTerm('');
    setAdvancedSearch('');
    setStatusFilter('all');
    setTypeFilter('all');
    setPremiumFilter('all');
    setYoutubeFilter('all');
    setCurrentPage(1);
  };

  const hasActiveFilters =
    searchTerm ||
    advancedSearch ||
    statusFilter !== 'all' ||
    typeFilter !== 'all' ||
    premiumFilter !== 'all' ||
    youtubeFilter !== 'all';

  const playAudio = (audioFile: string, lang: string) => {
    const audioUrl = `${AUDIO_URL}${lang}/${audioFile}`;
    const uniqueTrackId = `${lang}-${audioFile}`;
    if (currentAudio === uniqueTrackId) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play().catch((e) => console.error('Error resuming audio:', e));
        setIsPlaying(true);
      }
    } else {
      setCurrentAudio(uniqueTrackId);
      if (audioRef.current) {
        setAudioDuration(0);
        audioRef.current.src = audioUrl;
        audioRef.current.play().catch((e) => console.error('Error playing new audio:', e));
        setIsPlaying(true);
      }
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentAudio(null);
  };

  const toggleSort = (field: keyof Story) => {
    setSortBy(field);
    setSortOrder(sortBy === field && sortOrder === 'desc' ? 'asc' : 'desc');
  };

  const changeActive = (story: Story) => {
    activeStory({ id: story.id, active: !story.active });
  };

  const changePremium = (story: Story) => {
    premiumStory({ id: story.id, isPremium: !story.isPremium });
  };

  if (isLoading)
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-200 border-t-blue-500"></div>
      </div>
    );

  return (
    <TooltipProvider>
      <div className="flex h-screen flex-col bg-gray-50 dark:bg-slate-950">
        <div className="flex-shrink-0 border-b border-gray-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <h1 className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-slate-50">
                  <BookOpen className="h-5 w-5" />
                  Cuentos
                </h1>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-slate-400">
                  {filteredData.length} de {stats.total} cuentos
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-xs">
                  <BarChart3 className="h-3 w-3 text-gray-400 dark:text-slate-500" />
                  <span className="font-medium text-gray-700 dark:text-slate-300">
                    {stats.total}
                  </span>
                  <span className="text-gray-500 dark:text-slate-400">Total</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="font-medium text-green-600 dark:text-green-500">
                    {stats.active}
                  </span>
                  <span className="text-gray-500 dark:text-slate-400">Activos</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <Star className="h-3 w-3 fill-current text-amber-500" />
                  <span className="font-medium text-amber-600 dark:text-amber-500">
                    {stats.premium}
                  </span>
                  <span className="text-gray-500 dark:text-slate-400">Premium</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <PlayCircle className="h-3 w-3 text-red-500" />
                  <span className="font-medium text-red-600 dark:text-red-500">
                    {stats.withVideo}
                  </span>
                  <span className="text-gray-500 dark:text-slate-400">Video</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                className="flex items-center gap-2"
                onClick={() => {
                  handleEditStory(null);
                }}
              >
                <Plus className="h-4 w-4" />
                Nuevo
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 dark:text-slate-400">Mostrar:</span>
                <Select
                  value={itemsPerPage.toString()}
                  onValueChange={(v) => {
                    setItemsPerPage(Number(v));
                    setCurrentPage(1);
                  }}
                >
                  <SelectTrigger className="w-[80px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => setCurrentPage((p) => p - 1)}
                    disabled={currentPage <= 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="px-2 text-xs whitespace-nowrap text-gray-600 dark:text-slate-300">
                    Página {currentPage} de {totalPages > 0 ? totalPages : 1}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => setCurrentPage((p) => p + 1)}
                    disabled={currentPage >= totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <audio ref={audioRef} />

        <div className="flex-shrink-0 border-b border-gray-200 bg-white px-6 py-3 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative min-w-[200px] flex-1">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-slate-500" />
              <Input
                type="text"
                placeholder="Buscar por nombre, descripción o ID..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative min-w-[200px] flex-1">
              <Filter className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-slate-500" />
              <Input
                type="text"
                placeholder="Filtro detallado..."
                className="pl-9"
                value={advancedSearch}
                onChange={(e) => setAdvancedSearch(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="active">Activos</SelectItem>
                <SelectItem value="inactive">Inactivos</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="1">Cuento</SelectItem>
                <SelectItem value="2">Historia</SelectItem>
                <SelectItem value="3">Fábula</SelectItem>
              </SelectContent>
            </Select>
            <Select value={premiumFilter} onValueChange={setPremiumFilter}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
                <SelectItem value="free">Gratis</SelectItem>
              </SelectContent>
            </Select>
            <Select value={youtubeFilter} onValueChange={setYoutubeFilter}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="YouTube" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="with">Con video</SelectItem>
                <SelectItem value="without">Sin video</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="sm"
              onClick={clearAllFilters}
              disabled={!hasActiveFilters}
              className="flex items-center gap-1.5"
            >
              <FilterX className="h-4 w-4" />
              Limpiar
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto bg-white dark:bg-slate-900">
          {paginatedData.length > 0 ? (
            <table className="w-full table-fixed">
              <thead className="sticky top-0 z-10 border-b border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                <tr>
                  {[
                    { label: 'Cuento', field: 'name_es', width: 'w-2/5' },
                    { label: 'Estado', field: 'active', width: 'w-[100px]' },
                    { label: 'Tipo', field: 'type', width: 'w-[120px]' },
                    { label: 'Plan', field: 'isPremium', width: 'w-[180px]' },
                    { label: 'Multimedia', width: 'w-[120px]' },
                    { label: 'Acciones', width: 'w-[120px]', align: 'text-center' },
                  ].map((h) => (
                    <th
                      key={h.label}
                      className={`px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-600 uppercase dark:text-slate-400 ${h.width} ${h.align || ''}`}
                    >
                      {h.field ? (
                        <button
                          onClick={() => toggleSort(h.field as keyof Story)}
                          className="flex items-center gap-1 transition-colors hover:text-gray-900 dark:hover:text-slate-200"
                        >
                          {h.label}
                          {sortBy === h.field &&
                            (sortOrder === 'asc' ? (
                              <SortAsc className="h-3 w-3" />
                            ) : (
                              <SortDesc className="h-3 w-3" />
                            ))}
                        </button>
                      ) : (
                        h.label
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                {paginatedData.map((story) => (
                  <React.Fragment key={story.id}>
                    <tr
                      className="group cursor-pointer transition-colors hover:bg-gray-50/50 dark:hover:bg-slate-800/50"
                      onClick={() => setExpandedStory(expandedStory === story.id ? null : story.id)}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                            <img
                              src={`${IMAGE_URL}${story.cover}`}
                              alt={story.name_es}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-slate-50">
                              {story.name_es}
                            </p>
                            <p className="truncate text-xs text-gray-500 dark:text-slate-400">
                              {story.description_es}
                            </p>
                            <div className="mt-1 flex items-center gap-1">
                              {getAvailableAudios(story).map((a) => (
                                <span key={a.lang} className="text-xs">
                                  {getFlagEmoji(a.lang)}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <button onClick={(e) => e.stopPropagation()}>
                          <Switch
                            checked={story.active}
                            onCheckedChange={() => changeActive(story)}
                          />
                        </button>
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="secondary">{getTypeLabel(story.type)}</Badge>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          {story.isPremium ? (
                            <Badge className="border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 dark:border-amber-900/50 dark:bg-amber-950 dark:text-amber-400 dark:hover:bg-amber-900">
                              <Star className="mr-1 h-3 w-3 fill-current" />
                              Premium
                            </Badge>
                          ) : (
                            <Badge variant="outline">Gratis</Badge>
                          )}
                          <button onClick={(e) => e.stopPropagation()}>
                            <Switch
                              checked={story.isPremium}
                              onCheckedChange={() => changePremium(story)}
                            />
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <Image className="h-3.5 w-3.5 text-green-500" />
                          <Music className="h-3.5 w-3.5 text-blue-500" />
                          {story.youtube && <Youtube className="h-3.5 w-3.5 text-red-500" />}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div
                          className="flex items-center justify-center gap-1 opacity-0 transition-opacity group-hover:opacity-100"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => showModalView(story)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleEditStory(story)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500 hover:text-red-700"
                            onClick={() => showDeleteModal(story)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <AnimatePresence>
                      {expandedStory === story.id && (
                        <motion.tr
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="bg-gray-50/50 dark:bg-slate-800/20"
                        >
                          <td colSpan={6} className="p-0">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 border-l-2 border-blue-200 p-4 dark:border-blue-800">
                                <h4 className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-slate-50">
                                  <Volume2 className="h-4 w-4 text-blue-500" />
                                  Audios Disponibles
                                </h4>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                  {getAvailableAudios(story).map((audioInfo) => {
                                    const uniqueTrackId = `${audioInfo.lang}-${audioInfo.file}`;
                                    const isCurrent = currentAudio === uniqueTrackId;
                                    return (
                                      <div
                                        key={audioInfo.lang}
                                        className="rounded-lg border bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-800"
                                      >
                                        <div className="mb-2 flex items-center justify-between gap-4">
                                          <span className="flex items-center gap-2 text-sm font-semibold">
                                            {getFlagEmoji(audioInfo.lang)} {audioInfo.label}
                                          </span>
                                          <div className="flex items-center gap-2">
                                            <Button
                                              size="sm"
                                              variant={
                                                isCurrent && isPlaying ? 'default' : 'outline'
                                              }
                                              onClick={() =>
                                                playAudio(audioInfo.file, audioInfo.lang)
                                              }
                                            >
                                              {isCurrent && isPlaying ? (
                                                <Pause className="h-4 w-4" />
                                              ) : (
                                                <Play className="h-4 w-4" />
                                              )}
                                            </Button>
                                            <Button
                                              size="sm"
                                              variant="outline"
                                              onClick={stopAudio}
                                              disabled={!isCurrent}
                                            >
                                              <Square className="h-4 w-4" />
                                            </Button>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </motion.div>
                          </td>
                        </motion.tr>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <Search className="mx-auto mb-4 h-12 w-12 text-gray-300 dark:text-slate-700" />
                <h3 className="mb-2 text-sm font-medium text-gray-900 dark:text-slate-50">
                  No se encontraron cuentos
                </h3>
                <p className="text-sm text-gray-500 dark:text-slate-400">
                  Intenta modificar los filtros de búsqueda
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <HistoryViewModal
        open={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        item={seleteViewItem}
      />
      <DeleteConfirmationModal
        isOpen={!!storyToDelete}
        onClose={() => setStoryToDelete(null)}
        onConfirm={handleDeleteConfirm}
        storyName={storyToDelete?.name_es || ''}
        isLoading={isDeleting}
      />

      <HistoryUploadModal
        open={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        storyToEdit={storyToEdit}
      />
    </TooltipProvider>
  );
}
