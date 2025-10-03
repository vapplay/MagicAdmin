'use client';

import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetcher, updater } from '@/ts/fetch';
import { toast } from 'sonner';

// --- Iconos de Lucide ---
import {
  Settings,
  RadioTower,
  LogIn,
  Gift,
  FileText,
  Info,
  Facebook,
  Save,
  Palette,
  RectangleHorizontal,
  Trash2,
  PlusCircle,
  PackageCheck,
  AlertCircle,
  GitBranch,
  Users,
} from 'lucide-react';

// --- Componentes de shadcn/ui ---
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

// --- Interfaces para el estado de la configuración ---
interface Section {
  title: string;
  content: string;
}
interface TermsData {
  title: string;
  sections: Section[];
  english_title: string;
  english_sections: Section[];
}
interface AppConfig {
  id: string; // El backend devuelve un 'id'
  adsMasterSwitch: boolean;
  adsBannerEnabled: boolean;
  adsInterstitialEnabled: boolean;
  loginMasterSwitch: boolean;
  googleLoginEnabled: boolean;
  facebookLoginEnabled: boolean;
  surprisesModuleEnabled: boolean;
  forceUpdate: boolean;
  latestVersion: string;
  termsData: TermsData;
}
const currentNativeVersion = '1.4.0';

const TermsEditorModal = ({
  isOpen,
  onClose,
  initialData,
  onSave,
  isSaving,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData: TermsData;
  onSave: (data: TermsData) => void;
  isSaving: boolean;
}) => {
  const [editableData, setEditableData] = useState<TermsData>(initialData);
  useEffect(() => {
    // Solo actualiza el estado interno si el modal se abre con nuevos datos
    if (isOpen) {
      setEditableData(initialData);
    }
  }, [initialData, isOpen]);

  const handleTitleChange = (lang: 'es' | 'en', value: string) =>
    setEditableData((prev) => ({ ...prev, [lang === 'es' ? 'title' : 'english_title']: value }));
  const handleSectionChange = (
    lang: 'es' | 'en',
    index: number,
    field: 'title' | 'content',
    value: string
  ) => {
    const key = lang === 'es' ? 'sections' : 'english_sections';
    const updated = editableData[key].map((s, i) => (i === index ? { ...s, [field]: value } : s));
    setEditableData((prev) => ({ ...prev, [key]: updated }));
  };
  const addSection = (lang: 'es' | 'en') => {
    const key = lang === 'es' ? 'sections' : 'english_sections';
    setEditableData((prev) => ({
      ...prev,
      [key]: [...prev[key], { title: 'Nuevo Título', content: 'Nuevo contenido...' }],
    }));
  };
  const removeSection = (lang: 'es' | 'en', index: number) => {
    const key = lang === 'es' ? 'sections' : 'english_sections';
    setEditableData((prev) => ({ ...prev, [key]: prev[key].filter((_, i) => i !== index) }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex h-[90vh] max-w-4xl flex-col">
        <DialogHeader>
          <DialogTitle>Editor de Términos y Condiciones</DialogTitle>
          <DialogDescription>
            Modifica, añade o elimina secciones para cada idioma.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="es" className="flex flex-grow flex-col overflow-hidden">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="es">🇪🇸 Español</TabsTrigger>
            <TabsTrigger value="en">🇺🇸 Inglés</TabsTrigger>
          </TabsList>
          <ScrollArea className="mt-4 flex-grow pr-4">
            <TabsContent value="es" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="main-title-es">Título Principal</Label>
                <Input
                  id="main-title-es"
                  value={editableData.title}
                  onChange={(e) => handleTitleChange('es', e.target.value)}
                />
              </div>
              {editableData.sections.map((section, index) => (
                <div key={index} className="relative space-y-2 rounded-md border p-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-7 w-7"
                    onClick={() => removeSection('es', index)}
                  >
                    <Trash2 className="text-destructive h-4 w-4" />
                  </Button>
                  <Label>Sección {index + 1}</Label>
                  <Input
                    value={section.title}
                    onChange={(e) => handleSectionChange('es', index, 'title', e.target.value)}
                  />
                  <Label>Contenido</Label>
                  <Textarea
                    value={section.content}
                    onChange={(e) => handleSectionChange('es', index, 'content', e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
              ))}
              <Button variant="outline" className="w-full" onClick={() => addSection('es')}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Añadir Sección
              </Button>
            </TabsContent>
            <TabsContent value="en" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="main-title-en">Main Title</Label>
                <Input
                  id="main-title-en"
                  value={editableData.english_title}
                  onChange={(e) => handleTitleChange('en', e.target.value)}
                />
              </div>
              {editableData.english_sections.map((section, index) => (
                <div key={index} className="relative space-y-2 rounded-md border p-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-7 w-7"
                    onClick={() => removeSection('en', index)}
                  >
                    <Trash2 className="text-destructive h-4 w-4" />
                  </Button>
                  <Label>Section {index + 1}</Label>
                  <Input
                    value={section.title}
                    onChange={(e) => handleSectionChange('en', index, 'title', e.target.value)}
                  />
                  <Label>Content</Label>
                  <Textarea
                    value={section.content}
                    onChange={(e) => handleSectionChange('en', index, 'content', e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
              ))}
              <Button variant="outline" className="w-full" onClick={() => addSection('en')}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Section
              </Button>
            </TabsContent>
          </ScrollArea>
        </Tabs>
        <DialogFooter className="border-t pt-4">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            type="button"
            onClick={() => {
              onSave(editableData);
            }}
            disabled={isSaving}
          >
            <Save className="mr-2 h-4 w-4" />
            {isSaving ? 'Guardando...' : 'Guardar Cambios'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default function AdminConfigurationPage() {
  const queryClient = useQueryClient();

  const {
    data: config,
    isLoading,
    error,
  } = useQuery<AppConfig>({
    queryKey: ['config'],
    queryFn: () => fetcher('config'),
  });

  const updateConfigMutation = useMutation({
    mutationFn: (newConfig: AppConfig) => updater('config', newConfig),
    onSuccess: (updatedData) => {
      queryClient.setQueryData(['config'], updatedData.data);
      toast.success('Configuración guardada en el servidor.');
    },
    onError: (error) => {
      toast.error(`Error al guardar: ${error.message}`);
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [internalVersion, setInternalVersion] = useState(config?.latestVersion || '');

  useEffect(() => {
    if (config && internalVersion === '') {
      setInternalVersion(config.latestVersion);
    }
  }, [config]);

  const handleConfigChange = <K extends keyof AppConfig>(key: K, value: AppConfig[K]) => {
    if (!config) return;
    const newConfig = { ...config, [key]: value };
    updateConfigMutation.mutate(newConfig);
  };

  const handleSaveTerms = (newTerms: TermsData) => {
    handleConfigChange('termsData', newTerms);
    setIsModalOpen(false); // Cierra el modal al guardar
  };

  const ColoredIcon = ({
    icon: Icon,
    colorClass,
  }: {
    icon: React.ElementType;
    colorClass: string;
  }) => (
    <div className={`mr-4 flex h-10 w-10 items-center justify-center rounded-lg ${colorClass}`}>
      <Icon className="h-6 w-6 text-white" />
    </div>
  );

  const SettingsRow = ({
    title,
    description,
    children,
    icon: Icon,
  }: {
    title: string;
    description: string;
    children: React.ReactNode;
    icon: React.ElementType;
  }) => (
    <div className="hover:bg-muted/50 flex items-center justify-between space-x-4 rounded-lg border p-4 transition-colors">
      <div className="flex items-center">
        <Icon className="text-muted-foreground mr-3 h-5 w-5" />
        <div className="space-y-0.5">
          <h3 className="text-foreground font-medium">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
      <div className="flex-shrink-0">{children}</div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="border-muted border-t-primary h-8 w-8 animate-spin rounded-full border-4"></div>
        <p className="text-muted-foreground ml-4">Cargando configuración...</p>
      </div>
    );
  }

  if (error || !config) {
    return (
      <div className="flex h-full items-center justify-center">
        <AlertCircle className="text-destructive h-8 w-8" />
        <p className="text-destructive-foreground ml-4">
          No se pudo cargar la configuración. Por favor, recarga la página.
        </p>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <div className="flex h-full flex-col p-4 sm:p-6 lg:p-8">
        <header className="mb-8">
          <h1 className="text-foreground flex items-center gap-3 text-3xl font-bold">
            <Settings className="h-8 w-8" />
            Configuración General
          </h1>
          <p className="text-muted-foreground mt-2">
            Ajusta las configuraciones globales de la aplicación desde este panel.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Card de Monetización */}
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center">
                <ColoredIcon icon={RadioTower} colorClass="bg-red-500" />
                <div>
                  <CardTitle>Monetización</CardTitle>
                  <CardDescription>Controla la visibilidad de los anuncios.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <SettingsRow
                title="Habilitar Anuncios"
                description="Interruptor maestro para publicidad."
                icon={RadioTower}
              >
                <Switch
                  checked={config.adsMasterSwitch}
                  onCheckedChange={(v) => handleConfigChange('adsMasterSwitch', v)}
                  disabled={updateConfigMutation.isPending}
                />
              </SettingsRow>
              <SettingsRow
                title="Anuncios de Banner"
                description="Banners en la parte inferior."
                icon={RectangleHorizontal}
              >
                <Switch
                  checked={config.adsBannerEnabled}
                  onCheckedChange={(v) => handleConfigChange('adsBannerEnabled', v)}
                  disabled={!config.adsMasterSwitch || updateConfigMutation.isPending}
                />
              </SettingsRow>
              <SettingsRow
                title="Anuncios Intersticiales"
                description="Anuncios a pantalla completa."
                icon={FileText}
              >
                <Switch
                  checked={config.adsInterstitialEnabled}
                  onCheckedChange={(v) => handleConfigChange('adsInterstitialEnabled', v)}
                  disabled={!config.adsMasterSwitch || updateConfigMutation.isPending}
                />
              </SettingsRow>
            </CardContent>
          </Card>

          {/* Card de Acceso de Usuarios */}
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center">
                <ColoredIcon icon={LogIn} colorClass="bg-blue-500" />
                <div>
                  <CardTitle>Acceso de Usuarios</CardTitle>
                  <CardDescription>Gestiona la pantalla y métodos de login.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <SettingsRow
                title="Habilitar Pantalla de Login"
                description="Muestra u oculta el acceso."
                icon={LogIn}
              >
                <Switch
                  checked={config.loginMasterSwitch}
                  onCheckedChange={(v) => handleConfigChange('loginMasterSwitch', v)}
                  disabled={updateConfigMutation.isPending}
                />
              </SettingsRow>
              <SettingsRow
                title="Login con Google"
                description="Permitir acceso con Google."
                icon={Users}
              >
                <Switch
                  checked={config.googleLoginEnabled}
                  onCheckedChange={(v) => handleConfigChange('googleLoginEnabled', v)}
                  disabled={!config.loginMasterSwitch || updateConfigMutation.isPending}
                />
              </SettingsRow>
              <SettingsRow
                title="Login con Facebook"
                description="Permitir acceso con Facebook."
                icon={Facebook}
              >
                <Switch
                  checked={config.facebookLoginEnabled}
                  onCheckedChange={(v) => handleConfigChange('facebookLoginEnabled', v)}
                  disabled={!config.loginMasterSwitch || updateConfigMutation.isPending}
                />
              </SettingsRow>
            </CardContent>
          </Card>

          {/* Card de Control de Versiones */}
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center">
                <ColoredIcon icon={PackageCheck} colorClass="bg-indigo-500" />
                <div>
                  <CardTitle>Control de Versiones</CardTitle>
                  <CardDescription>Gestiona las actualizaciones de la app.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <SettingsRow
                title="Forzar Actualización"
                description="Obliga a usuarios a actualizar."
                icon={AlertCircle}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <Switch
                        checked={config.forceUpdate}
                        onCheckedChange={(v) => handleConfigChange('forceUpdate', v)}
                        disabled={updateConfigMutation.isPending}
                      />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    Si se activa, los usuarios con versiones antiguas no podrán usar la app sin
                    actualizar.
                  </TooltipContent>
                </Tooltip>
              </SettingsRow>
              <SettingsRow
                title="Última Versión Requerida"
                description="Ej: 1.5.2"
                icon={GitBranch}
              >
                <Input
                  className="w-28 text-center"
                  value={internalVersion}
                  onChange={(e) => setInternalVersion(e.target.value)}
                  onBlur={() => handleConfigChange('latestVersion', internalVersion)}
                  disabled={updateConfigMutation.isPending}
                />
              </SettingsRow>
              <SettingsRow
                title="Versión Nativa Actual"
                description="Versión en producción (lectura)."
                icon={Info}
              >
                <Badge variant="outline">{currentNativeVersion}</Badge>
              </SettingsRow>
            </CardContent>
          </Card>

          {/* Card de Contenido y Legales */}
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center">
                <ColoredIcon icon={Palette} colorClass="bg-emerald-500" />
                <div>
                  <CardTitle>Contenido y Legales</CardTitle>
                  <CardDescription>Gestiona módulos y textos legales.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <SettingsRow
                title="Módulo de Sorpresas"
                description="Permite crear cuentos con IA."
                icon={Gift}
              >
                <Switch
                  checked={config.surprisesModuleEnabled}
                  onCheckedChange={(v) => handleConfigChange('surprisesModuleEnabled', v)}
                  disabled={updateConfigMutation.isPending}
                />
              </SettingsRow>
              <Button
                variant="outline"
                className="w-full justify-start text-left"
                onClick={() => setIsModalOpen(true)}
                disabled={updateConfigMutation.isPending}
              >
                <FileText className="mr-2 h-4 w-4" />
                Editar Términos y Condiciones
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <TermsEditorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={config.termsData}
        onSave={handleSaveTerms}
        isSaving={updateConfigMutation.isPending}
      />
    </TooltipProvider>
  );
}
