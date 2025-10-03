'use client';

import React, { useState, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher, updater } from '@/ts/fetch';
import { toast } from 'sonner';

// --- Iconos y Componentes UI ---
import { BookHeart, CheckCircle, Clock, Trash2, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { IMAGE_URL } from '@/ts/util';

// --- IMPORTA TU MODAL EXISTENTE ---
// Asegúrate de que esta ruta sea correcta
import { StorySelectorModal } from '@/components/history/StorySelectorModal';

// --- Interfaces ---
interface Story {
  id: string;
  name_es: string;
  cover: string;
}
interface User {
  id: string;
  name: string;
  avatar?: string;
}
interface StoryRequest {
  id: string;
  user: User;
  childName: string;
  baseStory: Story;
  assignedStory: Story | null;
  createdAt: string;
}

// --- Datos Simulados (Mock Data) ---
const mockBaseStories: Story[] = [
  {
    id: '6faab0a2-bc5c-4e25-be51-882cc1a84618',
    name_es: 'Pinocho',
    cover: '6faab0a2-bc5c-4e25-be51-882cc1a84618.jpeg',
  },
  {
    id: '50095690-b132-44c8-b8af-7f0485a89c27',
    name_es: 'Jack y los Frijoles Mágicos',
    cover: '50095690-b132-44c8-b8af-7f0485a89c27.png',
  },
];
const mockUsers: User[] = [
  { id: 'user-01', name: 'Ana García', avatar: 'https://i.pravatar.cc/150?u=ana' },
  { id: 'user-02', name: 'Carlos Pérez', avatar: 'https://i.pravatar.cc/150?u=carlos' },
];
const mockStoryRequests: StoryRequest[] = [
  {
    id: 'req-001',
    user: mockUsers[0],
    childName: 'Leo',
    baseStory: mockBaseStories[0],
    assignedStory: null,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'req-002',
    user: mockUsers[1],
    childName: 'Sofía',
    baseStory: mockBaseStories[1],
    assignedStory: null,
    createdAt: new Date().toISOString(),
  },
];

// --- Componente para mostrar información del cuento ---
const StoryInfo = React.memo(
  ({ title, story, status }: { title: string; story: Story; status?: 'pending' | 'assigned' }) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">{title}</h4>
        {status === 'pending' && (
          <Badge variant="outline">
            <Clock className="mr-1.5 h-3 w-3" />
            Pendiente
          </Badge>
        )}
        {status === 'assigned' && (
          <Badge variant="default" className="bg-green-600 hover:bg-green-700">
            <CheckCircle className="mr-1.5 h-3 w-3" />
            Asignado
          </Badge>
        )}
      </div>
      <div className="flex items-center gap-4 rounded-lg border p-3">
        <img
          src={`${IMAGE_URL}${story.cover}`}
          alt={story.name_es}
          className="h-16 w-16 rounded-md object-cover"
        />
        <div className="flex-grow">
          <p className="text-foreground font-medium">{story.name_es}</p>
          <p className="text-muted-foreground text-xs">ID: {story.id}</p>
        </div>
      </div>
    </div>
  )
);

StoryInfo.displayName = 'StoryInfo';

// --- Página Principal de Solicitudes ---
export default function CustomerRequestsPage() {
  const queryClient = useQueryClient();
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [requestToFulfill, setRequestToFulfill] = useState<StoryRequest | null>(null);

  const { data: requests = [], isLoading: isLoadingRequests } = useQuery<StoryRequest[]>({
    queryKey: ['storyRequests'],
    queryFn: async () => mockStoryRequests, // Reemplazar con tu fetcher
  });

  const { mutate: assignStoryToRequest } = useMutation({
    mutationFn: async ({ requestId, story }: { requestId: string; story: Story }) => {
      // Simula la llamada a la API
      const currentRequests = queryClient.getQueryData<StoryRequest[]>(['storyRequests']) || [];
      const updatedRequests = currentRequests.map((req) =>
        req.id === requestId ? { ...req, assignedStory: story } : req
      );
      queryClient.setQueryData(['storyRequests'], updatedRequests);
    },
    onSuccess: () => toast.success('Cuento asignado con éxito'),
    onError: () => toast.error('No se pudo asignar el cuento'),
  });

  // Use useCallback to memoize event handlers
  const handleOpenSelector = useCallback((request: StoryRequest) => {
    setRequestToFulfill(request);
    setIsSelectorOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsSelectorOpen(false);
    setRequestToFulfill(null);
  }, []);

  const handleStorySelected = useCallback(
    (story: Story) => {
      if (requestToFulfill) {
        assignStoryToRequest({ requestId: requestToFulfill.id, story });
      }
      handleCloseModal();
    },
    [requestToFulfill, assignStoryToRequest, handleCloseModal]
  );

  if (isLoadingRequests) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="border-muted border-t-primary h-8 w-8 animate-spin rounded-full border-4"></div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col p-4 sm:p-6 lg:p-8">
      <header className="mb-8">
        <h1 className="text-foreground flex items-center gap-3 text-3xl font-bold">
          <Wand2 className="h-8 w-8" />
          Solicitudes de Cuentos Personalizados
        </h1>
        <p className="text-muted-foreground mt-2">
          Confirma y asigna los cuentos personalizados solicitados por los usuarios.
        </p>
      </header>

      <ScrollArea className="flex-grow">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {requests.map((request) => (
            <Card key={request.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border">
                    <AvatarImage src={request.user.avatar} />
                    <AvatarFallback>{request.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{request.user.name}</CardTitle>
                    <CardDescription>
                      Solicitud para personalizar para:{' '}
                      <span className="text-foreground font-semibold">{request.childName}</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <StoryInfo title="Cuento Base Solicitado" story={request.baseStory} />

                {request.assignedStory ? (
                  <StoryInfo
                    title="Cuento Personalizado Asignado"
                    story={request.assignedStory}
                    status="assigned"
                  />
                ) : (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Cuento Personalizado Asignado</h4>
                    <div className="flex h-[92px] items-center justify-center rounded-lg border border-dashed text-center">
                      <p className="text-muted-foreground flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4" />
                        Pendiente de Asignación
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Rechazar
                </Button>
                <Button onClick={() => handleOpenSelector(request)}>
                  <BookHeart className="mr-2 h-4 w-4" />
                  {request.assignedStory ? 'Cambiar Asignación' : 'Confirmar/Asignar Cuento'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>

      {/* --- MODAL WITH MEMOIZED PROPS --- */}
      <StorySelectorModal
        isOpen={isSelectorOpen}
        onClose={handleCloseModal}
        onStorySelect={handleStorySelected}
      />
    </div>
  );
}
