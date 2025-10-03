import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

// --- Iconos y Componentes UI ---
import { FilterX, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { IMAGE_URL } from '@/ts/util';
import fetcher from '@/ts/fetch';

// Interfaz para el objeto Story
interface Story {
  id: string;
  name_es: string;
  cover: string;
  description_es: string;
  isPremium: boolean;
  type: number;
}

// Props del componente modal
interface StorySelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStorySelect: (story: Story) => void;
}

const ITEMS_PER_PAGE = 12; // Cantidad de cuentos a cargar cada vez

export const StorySelectorModal = ({ isOpen, onClose, onStorySelect }: StorySelectorModalProps) => {
  // --- Carga de todos los cuentos una sola vez ---
  const { data: allStories = [], isLoading: isLoadingStories } = useQuery<Story[]>({
    queryKey: ['history'],
    queryFn: async () => {
      const response = await fetcher('history/all');
      return response.data as Story[];
    },
  });

  // --- Estados para filtros y control del scroll infinito ---
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [premiumFilter, setPremiumFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // --- Lógica de filtrado (SIN efectos secundarios) ---
  const filteredStories = useMemo(() => {
    return allStories.filter((story) => {
      const matchesSearch = story.name_es.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = typeFilter === 'all' || story.type.toString() === typeFilter;
      const matchesPremium =
        premiumFilter === 'all' ||
        (premiumFilter === 'premium' ? story.isPremium : !story.isPremium);
      return matchesSearch && matchesType && matchesPremium;
    });
  }, [allStories, searchTerm, typeFilter, premiumFilter]);

  // --- Resetear visibleCount cuando cambien los filtros ---
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchTerm, typeFilter, premiumFilter]);

  // --- Lógica para el scroll infinito ---
  const observer = useRef<IntersectionObserver>();

  const lastStoryElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoadingStories) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        // Si el último elemento es visible y hay más cuentos por mostrar
        if (entries[0].isIntersecting && visibleCount < filteredStories.length) {
          // Cargamos la siguiente "página" de cuentos
          setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoadingStories, visibleCount, filteredStories.length]
  );

  // --- Memoizar handlers para evitar re-renders ---
  const handleStoryClick = useCallback(
    (story: Story) => {
      onStorySelect(story);
      onClose();
    },
    [onStorySelect, onClose]
  );

  const handleClearFilters = useCallback(() => {
    setSearchTerm('');
    setTypeFilter('all');
    setPremiumFilter('all');
  }, []);

  // --- Resetear estado cuando se cierre el modal ---
  useEffect(() => {
    if (!isOpen) {
      setVisibleCount(ITEMS_PER_PAGE);
    }
  }, [isOpen]);

  // Historias que se muestran en la UI
  const visibleStories = useMemo(
    () => filteredStories.slice(0, visibleCount),
    [filteredStories, visibleCount]
  );

  const hasMore = visibleCount < filteredStories.length;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* Añadido max-w-none y w-[95vw] para controlar mejor el ancho */}
      <DialogContent className="flex h-[90vh] w-[95vw] max-w-none flex-col sm:w-[90vw] sm:max-w-4xl lg:max-w-5xl">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle>Seleccionar un Cuento</DialogTitle>
          <DialogDescription>
            Busca, filtra y haz clic en un cuento para seleccionarlo.
          </DialogDescription>
        </DialogHeader>

        {/* Filtros: flex-shrink-0 evita que esta área se encoja */}
        <div className="flex flex-shrink-0 flex-wrap items-center gap-3 border-y py-4">
          <div className="relative min-w-[200px] flex-grow">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              placeholder="Buscar por nombre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full sm:w-auto sm:min-w-[150px]">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los Tipos</SelectItem>
              <SelectItem value="1">Cuento</SelectItem>
              <SelectItem value="2">Historia</SelectItem>
              <SelectItem value="3">Fábula</SelectItem>
            </SelectContent>
          </Select>
          <Select value={premiumFilter} onValueChange={setPremiumFilter}>
            <SelectTrigger className="w-full sm:w-auto sm:min-w-[150px]">
              <SelectValue placeholder="Plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los Planes</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
              <SelectItem value="free">Gratis</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="ghost" onClick={handleClearFilters}>
            <FilterX className="mr-2 h-4 w-4" />
            Limpiar
          </Button>
        </div>

        {/* Área de Contenido: flex-grow permite que ocupe todo el espacio disponible */}
        <ScrollArea className="flex-grow overflow-hidden">
          <div className="p-2 sm:p-4">
            {isLoadingStories ? (
              <div className="flex items-center justify-center py-12">
                <p className="text-muted-foreground text-sm">Cargando cuentos...</p>
              </div>
            ) : visibleStories.length > 0 ? (
              <div className="space-y-2">
                {visibleStories.map((story, index) => (
                  <Card
                    // Asignamos el ref al último elemento de la lista para detectar el scroll
                    ref={index === visibleStories.length - 1 ? lastStoryElementRef : null}
                    key={story.id}
                    className="hover:bg-accent group flex cursor-pointer flex-row items-center gap-3 p-3 transition-all sm:gap-4"
                    onClick={() => handleStoryClick(story)}
                  >
                    {/* Imagen a la izquierda - TAMAÑO FIJO para evitar desbordamiento */}
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-20">
                      <img
                        src={`${IMAGE_URL}${story.cover}`}
                        alt={story.name_es}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Contenido a la derecha - ESPACIO RESTANTE sin desbordamiento */}
                    <div className="min-w-0 flex-1">
                      {/* Título - máximo 2 líneas */}
                      <h3 className="text-foreground mb-1 line-clamp-2 text-sm leading-tight font-semibold sm:text-base">
                        {story.name_es}
                      </h3>

                      {/* Descripción - máximo 2 líneas para móvil, 3 para desktop */}
                      <p className="text-muted-foreground line-clamp-2 text-xs leading-snug sm:line-clamp-3 sm:text-sm">
                        {story.description_es}
                      </p>

                      {/* Badges en línea - se adaptan al espacio disponible */}
                      <div className="mt-2 flex flex-wrap gap-1">
                        {story.isPremium && (
                          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-2 py-0.5 text-xs font-medium text-white">
                            ✨ Premium
                          </span>
                        )}
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                          {story.type === 1
                            ? '📖 Cuento'
                            : story.type === 2
                              ? '📚 Historia'
                              : '🦊 Fábula'}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}

                {/* Indicador de carga visible solo si hay más cuentos por mostrar */}
                {hasMore && (
                  <div className="flex items-center justify-center py-4">
                    <p className="text-muted-foreground text-sm">Cargando más...</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground text-center text-sm">
                  No se encontraron cuentos.
                </p>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
