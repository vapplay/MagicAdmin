"use client";

import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetch";
import { toast } from "sonner";
import {
    Save,
    Settings,
    Shield,
    FileText,
    Megaphone,
    Plus,
    Trash2,
    Layout,
    Sparkles,
    ChevronRight,
    Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

// --- UI Components ---

const PageHeader = ({ title, action }: { title: string, action?: React.ReactNode }) => (
    <div className="flex items-center justify-between pb-8">
        <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h1>
            <p className="text-sm text-slate-500 mt-1">Administra las preferencias globales de tu aplicación.</p>
        </div>
        {action}
    </div>
);

const SectionHeader = ({ title, description, icon: Icon, colorClass }: any) => (
    <div className="flex items-start gap-4 mb-6">
        <div className={cn("p-2.5 rounded-xl shrink-0", colorClass)}>
            <Icon className="w-5 h-5 text-white" strokeWidth={2} />
        </div>
        <div>
            <h3 className="text-base font-semibold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-500 mt-0.5">{description}</p>
        </div>
    </div>
);

const ConfigRow = ({ label, desc, children, className }: any) => (
    <div className={cn(
        "flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:border-violet-100 hover:shadow-md transition-all duration-200",
        className
    )}>
        <div className="space-y-1 pr-8">
            <Label className="text-sm font-medium text-slate-800">{label}</Label>
            {desc && <p className="text-[13px] text-slate-500 leading-snug">{desc}</p>}
        </div>
        {children}
    </div>
);

const MenuTab = ({ value, icon: Icon, label }: any) => (
    <TabsTrigger
        value={value}
        className="group flex w-full items-center justify-start gap-3 px-4 py-3 text-sm font-medium text-slate-500 transition-all rounded-xl 
        data-[state=active]:bg-violet-50 data-[state=active]:text-violet-700 
        hover:bg-slate-50 hover:text-slate-900 mb-1"
    >
        <Icon className="w-4 h-4 transition-colors group-data-[state=active]:text-violet-600" />
        <span>{label}</span>
        <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-data-[state=active]:opacity-100 transition-opacity text-violet-400" />
    </TabsTrigger>
);

// --- Tipos ---

type TermSection = {
    title: string;
    content: string;
};

export default function ConfigPage() {
    const queryClient = useQueryClient();

    // Data Fetching
    const { data: config, isLoading } = useQuery({
        queryKey: ["app-config"],
        queryFn: () => fetcher("config"),
    });

    // Mutation
    const updateConfigMutation = useMutation({
        mutationFn: (newConfig: any) =>
            fetcher("config", {
                method: "POST",
                body: JSON.stringify(newConfig),
                headers: { "Content-Type": "application/json" },
            }),
        onSuccess: () => {
            toast.success("Configuración guardada exitosamente");
            queryClient.invalidateQueries({ queryKey: ["app-config"] });
        },
        onError: () => toast.error("Error al guardar"),
    });

    // State
    const [menuLang, setMenuLang] = useState<'es' | 'en' | 'pt'>('es');

    const [formData, setFormData] = useState({
        forceUpdate: false,
        latestVersion: "1.0.0",
        adsMasterSwitch: true,
        adsBannerEnabled: true,
        adsInterstitialEnabled: true,
        loginMasterSwitch: true,
        googleLoginEnabled: true,
        facebookLoginEnabled: false,
        adsLoginEnabled: false,
        // Menu - ES
        menuText1_es: "Inicio",
        menuText2_es: "Cuentos",
        menuText3_es: "Perfil",
        // Menu - EN
        menuText1_en: "Home",
        menuText2_en: "Stories",
        menuText3_en: "Profile",
        // Menu - PT
        menuText1_pt: "Início",
        menuText2_pt: "Histórias",
        menuText3_pt: "Perfil",

        surprisesModuleEnabled: false
    });

    const [termsLang, setTermsLang] = useState<'es' | 'en' | 'pt'>('es');
    const [termsDataMap, setTermsDataMap] = useState<Record<'es' | 'en' | 'pt', { version: string, sections: TermSection[] }>>({
        es: { version: "1.0", sections: [] },
        en: { version: "1.0", sections: [] },
        pt: { version: "1.0", sections: [] }
    });
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);

    const currentTerms = termsDataMap[termsLang];

    useEffect(() => {
        if (config) {
            setFormData({
                forceUpdate: config.forceUpdate ?? false,
                latestVersion: config.latestVersion ?? "1.0.0",
                adsMasterSwitch: config.adsMasterSwitch ?? true,
                adsBannerEnabled: config.adsBannerEnabled ?? true,
                adsInterstitialEnabled: config.adsInterstitialEnabled ?? true,
                loginMasterSwitch: config.loginMasterSwitch ?? true,
                googleLoginEnabled: config.googleLoginEnabled ?? true,
                facebookLoginEnabled: config.facebookLoginEnabled ?? false,
                adsLoginEnabled: config.adsLoginEnabled ?? false,

                // Menu Mapping
                menuText1_es: config.menuText1_es ?? "Inicio",
                menuText2_es: config.menuText2_es ?? "Cuentos",
                menuText3_es: config.menuText3_es ?? "Perfil",

                menuText1_en: config.menuText1_en ?? "Home",
                menuText2_en: config.menuText2_en ?? "Stories",
                menuText3_en: config.menuText3_en ?? "Profile",

                menuText1_pt: config.menuText1_pt ?? "Início",
                menuText2_pt: config.menuText2_pt ?? "Histórias",
                menuText3_pt: config.menuText3_pt ?? "Perfil",

                surprisesModuleEnabled: config.surprisesModuleEnabled ?? false,
            });


            // Load Terms
            const parseTerms = (data: any) => {
                if (!data) return { version: "1.0", sections: [] };
                try {
                    return {
                        version: data.version || "1.0",
                        sections: Array.isArray(data.sections) ? data.sections :
                            (typeof data.content === 'string' ? [{ title: "General", content: data.content }] : [])
                    };
                } catch { return { version: "1.0", sections: [] }; }
            };

            setTermsDataMap({
                es: parseTerms(config.termsData_es || config.termsData), // Fallback to legacy
                en: parseTerms(config.termsData_en),
                pt: parseTerms(config.termsData_pt)
            });
        }
    }, [config]);

    const handleChange = (key: string, value: any) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    // Terms Helpers
    const updateCurrentTerms = (updates: Partial<{ version: string, sections: TermSection[] }>) => {
        setTermsDataMap(prev => ({
            ...prev,
            [termsLang]: { ...prev[termsLang], ...updates }
        }));
    };

    const addSection = () => {
        const newSections = [...currentTerms.sections, { title: "", content: "" }];
        updateCurrentTerms({ sections: newSections });
        setActiveSectionIndex(newSections.length - 1);
    };

    const removeSection = (index: number) => {
        const newSections = currentTerms.sections.filter((_, i) => i !== index);
        updateCurrentTerms({ sections: newSections });
        setActiveSectionIndex(prev => Math.max(0, Math.min(prev, newSections.length - 1)));
    };

    const updateSection = (index: number, field: keyof TermSection, value: string) => {
        const newSections = [...currentTerms.sections];
        newSections[index] = { ...newSections[index], [field]: value };
        updateCurrentTerms({ sections: newSections });
    };

    const setTermsVersion = (version: string) => {
        updateCurrentTerms({ version });
    };

    const handleSave = () => {
        updateConfigMutation.mutate({
            ...formData,
            termsData_es: termsDataMap.es,
            termsData_en: termsDataMap.en,
            termsData_pt: termsDataMap.pt,
            // Legacy/Fallback update for older app versions if active language is ES
            termsData: termsDataMap.es
        });
    };

    if (isLoading) return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-50 gap-3">
            <div className="w-6 h-6 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm font-medium text-slate-500">Cargando configuración...</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50/50 p-6 md:p-10 font-sans">
            <div className="max-w-6xl mx-auto">

                <PageHeader
                    title="Configuración"
                    action={
                        <Button
                            onClick={handleSave}
                            disabled={updateConfigMutation.isPending}
                            className="bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20 px-6 rounded-full transition-all hover:scale-105 active:scale-95"
                        >
                            {updateConfigMutation.isPending ? (
                                <span className="flex items-center gap-2"><div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Guardando</span>
                            ) : (
                                <span className="flex items-center gap-2"><Save className="w-4 h-4" /> Guardar Cambios</span>
                            )}
                        </Button>
                    }
                />

                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Sidebar de Navegación */}
                    <Tabs defaultValue="general" className="w-full flex flex-col lg:flex-row gap-8">
                        <aside className="lg:w-64 shrink-0">
                            <div className="sticky top-6">
                                <TabsList className="flex lg:flex-col h-auto w-full bg-transparent p-0 gap-1">
                                    <div className="px-4 py-2 mb-2">
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Sistema</span>
                                    </div>
                                    <MenuTab value="general" icon={Settings} label="General" />
                                    <MenuTab value="ads" icon={Megaphone} label="Monetización" />
                                    <MenuTab value="menu" icon={Layout} label="Navegación App" />

                                    <MenuTab value="login" icon={Shield} label="Acceso y Login" />
                                    <MenuTab value="terms" icon={FileText} label="Legal y Términos" />
                                </TabsList>
                            </div>
                        </aside>

                        {/* Área de Contenido */}
                        <div className="flex-1 min-w-0">

                            {/* GENERAL */}
                            <TabsContent value="general" className="mt-0 space-y-6 outline-none animate-in fade-in slide-in-from-bottom-2 duration-500">
                                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                                    <SectionHeader
                                        title="Control de Versión"
                                        description="Gestiona las actualizaciones obligatorias y la versión visible."
                                        icon={Smartphone}
                                        colorClass="bg-blue-500"
                                    />
                                    <div className="space-y-4 max-w-2xl">
                                        <ConfigRow label="Forzar Actualización" desc="Bloquea el uso de la app en versiones antiguas.">
                                            <Switch className="data-[state=checked]:bg-blue-500" checked={formData.forceUpdate} onCheckedChange={(c) => handleChange("forceUpdate", c)} />
                                        </ConfigRow>
                                        <ConfigRow label="Versión Actual" desc="El número de versión que ven los usuarios.">
                                            <Input
                                                className="max-w-[100px] bg-slate-50 border-slate-200 focus-visible:ring-blue-500 font-mono text-sm text-center"
                                                value={formData.latestVersion}
                                                onChange={(e) => handleChange("latestVersion", e.target.value)}
                                                placeholder="1.0.0"
                                            />
                                        </ConfigRow>

                                        <div className="my-6 border-t border-slate-100" />

                                        <ConfigRow label="Módulo de Sorpresas" desc="Habilita funcionalidades especiales de temporada.">
                                            <Switch className="data-[state=checked]:bg-blue-500" checked={formData.surprisesModuleEnabled} onCheckedChange={(c) => handleChange("surprisesModuleEnabled", c)} />
                                        </ConfigRow>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* ADS */}
                            <TabsContent value="ads" className="mt-0 space-y-6 outline-none animate-in fade-in slide-in-from-bottom-2 duration-500">
                                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                                    <SectionHeader
                                        title="Gestión de Anuncios"
                                        description="Controla la visibilidad de la publicidad en tiempo real."
                                        icon={Megaphone}
                                        colorClass="bg-emerald-500"
                                    />

                                    <div className="mb-8 p-5 rounded-xl bg-emerald-50/50 border border-emerald-100 flex items-center justify-between">
                                        <div className="space-y-1">
                                            <Label className="text-base font-bold text-emerald-900">Sistema de Anuncios</Label>
                                            <p className="text-sm text-emerald-700">Interruptor maestro para desactivar toda la publicidad.</p>
                                        </div>
                                        <Switch
                                            checked={formData.adsMasterSwitch}
                                            onCheckedChange={(c) => handleChange("adsMasterSwitch", c)}
                                            className="data-[state=checked]:bg-emerald-500 scale-110"
                                        />
                                    </div>

                                    <div className={cn("space-y-4 max-w-2xl transition-all duration-300", !formData.adsMasterSwitch && "opacity-50 pointer-events-none grayscale")}>
                                        <ConfigRow label="Banners Inferiores" desc="Anuncios fijos en la parte inferior de la pantalla.">
                                            <Switch className="data-[state=checked]:bg-emerald-500" checked={formData.adsBannerEnabled} onCheckedChange={(c) => handleChange("adsBannerEnabled", c)} />
                                        </ConfigRow>
                                        <ConfigRow label="Intersticiales" desc="Anuncios a pantalla completa entre transiciones.">
                                            <Switch className="data-[state=checked]:bg-emerald-500" checked={formData.adsInterstitialEnabled} onCheckedChange={(c) => handleChange("adsInterstitialEnabled", c)} />
                                        </ConfigRow>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* MENU - Navigation Config */}
                            <TabsContent value="menu" className="mt-0 space-y-6 outline-none animate-in fade-in slide-in-from-bottom-2 duration-500">
                                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                                    <SectionHeader
                                        title="Personalización del Menú"
                                        description="Edita los textos de la barra de navegación principal de la App en múltiples idiomas."
                                        icon={Layout}
                                        colorClass="bg-violet-500"
                                    />

                                    {/* Language Selector */}
                                    <div className="flex justify-center mb-6">
                                        <div className="bg-slate-100 p-1 rounded-lg inline-flex">
                                            {(['es', 'en', 'pt'] as const).map((lang) => (
                                                <button
                                                    key={lang}
                                                    onClick={() => setMenuLang(lang)}
                                                    className={cn(
                                                        "px-4 py-1.5 text-sm font-medium rounded-md transition-all",
                                                        menuLang === lang
                                                            ? "bg-white text-violet-600 shadow-sm"
                                                            : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                                                    )}
                                                >
                                                    {lang === 'es' ? 'Español' : lang === 'en' ? 'Inglés' : 'Portugués'}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4 max-w-2xl">
                                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                                            <div className="flex items-center justify-around text-center">
                                                <div className="flex flex-col items-center gap-2 opacity-100">
                                                    <div className="w-10 h-10 rounded-full bg-slate-200" />
                                                    <span className="text-xs font-medium text-slate-600">
                                                        {formData[`menuText1_${menuLang}` as keyof typeof formData]}
                                                    </span>
                                                </div>
                                                <div className="flex flex-col items-center gap-2 opacity-50">
                                                    <div className="w-10 h-10 rounded-full bg-slate-200" />
                                                    <span className="text-xs font-medium text-slate-600">
                                                        {formData[`menuText2_${menuLang}` as keyof typeof formData]}
                                                    </span>
                                                </div>
                                                <div className="flex flex-col items-center gap-2 opacity-50">
                                                    <div className="w-10 h-10 rounded-full bg-slate-200" />
                                                    <span className="text-xs font-medium text-slate-600">
                                                        {formData[`menuText3_${menuLang}` as keyof typeof formData]}
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-widest">
                                                Vista Previa ({menuLang.toUpperCase()})
                                            </p>
                                        </div>

                                        <ConfigRow label="Botón 1 (Principal)" desc="Generalmente 'Inicio' o 'Home'.">
                                            <Input
                                                className="max-w-[150px] bg-slate-50"
                                                value={(formData as any)[`menuText1_${menuLang}`]}
                                                onChange={(e) => handleChange(`menuText1_${menuLang}`, e.target.value)}
                                            />
                                        </ConfigRow>
                                        <ConfigRow label="Botón 2 (Contenido)" desc="Generalmente 'Cuentos' o 'Biblioteca'.">
                                            <Input
                                                className="max-w-[150px] bg-slate-50"
                                                value={(formData as any)[`menuText2_${menuLang}`]}
                                                onChange={(e) => handleChange(`menuText2_${menuLang}`, e.target.value)}
                                            />
                                        </ConfigRow>
                                        <ConfigRow label="Botón 3 (Usuario)" desc="Generalmente 'Perfil' o 'Cuenta'.">
                                            <Input
                                                className="max-w-[150px] bg-slate-50"
                                                value={(formData as any)[`menuText3_${menuLang}`]}
                                                onChange={(e) => handleChange(`menuText3_${menuLang}`, e.target.value)}
                                            />
                                        </ConfigRow>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* LOGIN */}
                            <TabsContent value="login" className="mt-0 space-y-6 outline-none animate-in fade-in slide-in-from-bottom-2 duration-500">
                                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                                    <SectionHeader
                                        title="Seguridad y Acceso"
                                        description="Configura los métodos de autenticación permitidos."
                                        icon={Shield}
                                        colorClass="bg-indigo-500"
                                    />

                                    <div className="space-y-4 max-w-2xl">
                                        <ConfigRow label="Acceso Restringido" desc="Exigir login para ver el contenido.">
                                            <Switch className="data-[state=checked]:bg-indigo-500" checked={formData.loginMasterSwitch} onCheckedChange={(c) => handleChange("loginMasterSwitch", c)} />
                                        </ConfigRow>

                                        <div className="pt-4 pb-2">
                                            <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">Proveedores</span>
                                        </div>

                                        <ConfigRow label="Google Sign-In" desc="Permitir acceso con cuenta Google.">
                                            <Switch className="data-[state=checked]:bg-indigo-500" checked={formData.googleLoginEnabled} onCheckedChange={(c) => handleChange("googleLoginEnabled", c)} />
                                        </ConfigRow>
                                        <ConfigRow label="Facebook Login" desc="Permitir acceso con cuenta Facebook.">
                                            <Switch className="data-[state=checked]:bg-indigo-500" checked={formData.facebookLoginEnabled} onCheckedChange={(c) => handleChange("facebookLoginEnabled", c)} />
                                        </ConfigRow>

                                        <div className="my-6 border-t border-slate-100" />

                                        <ConfigRow label="Publicidad en Login" desc="Mostrar banners en la pantalla de bienvenida.">
                                            <Switch className="data-[state=checked]:bg-indigo-500" checked={formData.adsLoginEnabled} onCheckedChange={(c) => handleChange("adsLoginEnabled", c)} />
                                        </ConfigRow>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* TERMS - Editor Estilo Documento */}
                            <TabsContent value="terms" className="mt-0 h-[650px] flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500">

                                {/* Language Selector for Terms */}
                                <div className="flex justify-center">
                                    <div className="bg-white border border-slate-200 p-1 rounded-lg inline-flex shadow-sm">
                                        {(['es', 'en', 'pt'] as const).map((lang) => (
                                            <button
                                                key={lang}
                                                onClick={() => {
                                                    setTermsLang(lang);
                                                    setActiveSectionIndex(0);
                                                }}
                                                className={cn(
                                                    "px-4 py-1.5 text-sm font-medium rounded-md transition-all flex items-center gap-2",
                                                    termsLang === lang
                                                        ? "bg-violet-600 text-white shadow-sm"
                                                        : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                                                )}
                                            >
                                                <span>{lang === 'es' ? 'Español' : lang === 'en' ? 'Inglés' : 'Portugués'}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-1 flex gap-6 min-h-0">
                                    {/* Lista Lateral */}
                                    <div className="w-64 shrink-0 flex flex-col gap-3">
                                        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col h-full">
                                            <div className="flex items-center justify-between mb-4 pl-2">
                                                <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Secciones ({termsLang.toUpperCase()})</span>
                                                <Button variant="ghost" size="icon" onClick={addSection} className="h-6 w-6 text-violet-600 hover:bg-violet-50 rounded-full">
                                                    <Plus className="w-4 h-4" />
                                                </Button>
                                            </div>

                                            <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                                                {currentTerms.sections.map((section, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => setActiveSectionIndex(idx)}
                                                        className={cn(
                                                            "w-full text-left px-3 py-2.5 text-sm rounded-lg transition-all flex items-center justify-between group",
                                                            activeSectionIndex === idx
                                                                ? "bg-violet-600 text-white shadow-md shadow-violet-200"
                                                                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                                                        )}
                                                    >
                                                        <span className="truncate font-medium">{section.title || `Nueva Sección ${idx + 1}`}</span>
                                                        {activeSectionIndex === idx && <Sparkles className="w-3 h-3 text-violet-200" />}
                                                    </button>
                                                ))}
                                                {currentTerms.sections.length === 0 && (
                                                    <div className="text-center py-8 text-xs text-slate-400 italic">
                                                        No hay secciones creadas
                                                    </div>
                                                )}
                                            </div>

                                            <div className="pt-4 mt-4 border-t border-slate-100">
                                                <label className="text-[10px] uppercase text-slate-400 font-bold block mb-1.5 ml-1">Versión del Documento</label>
                                                <Input
                                                    value={currentTerms.version}
                                                    onChange={(e) => setTermsVersion(e.target.value)}
                                                    className="h-8 text-xs bg-slate-50 border-slate-200 focus-visible:ring-violet-500"
                                                    placeholder="v1.0"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Editor Principal */}
                                    <div className="flex-1 bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden flex flex-col relative">
                                        {currentTerms.sections.length > 0 && activeSectionIndex < currentTerms.sections.length ? (
                                            <>
                                                <div className="h-16 border-b border-slate-100 flex items-center px-6 justify-between shrink-0 bg-white/50 backdrop-blur-sm">
                                                    <Input
                                                        className="text-lg font-bold border-0 bg-transparent shadow-none px-0 focus-visible:ring-0 placeholder:text-slate-300 w-2/3 text-slate-800"
                                                        value={currentTerms.sections[activeSectionIndex].title}
                                                        onChange={(e) => updateSection(activeSectionIndex, "title", e.target.value)}
                                                        placeholder="Título de la sección..."
                                                    />
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-full"
                                                        onClick={() => removeSection(activeSectionIndex)}
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                                <div className="flex-1 p-0 bg-slate-50/30">
                                                    <Textarea
                                                        className="w-full h-full resize-none border-0 bg-transparent shadow-none focus-visible:ring-0 p-8 leading-relaxed text-sm text-slate-600 font-normal"
                                                        value={currentTerms.sections[activeSectionIndex].content}
                                                        onChange={(e) => updateSection(activeSectionIndex, "content", e.target.value)}
                                                        placeholder={`Escribe el contenido legal en ${termsLang === 'es' ? 'Español' : termsLang === 'en' ? 'Inglés' : 'Portugués'} aquí...`}
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <div className="flex flex-col items-center justify-center h-full text-slate-300 gap-3">
                                                <div className="p-4 bg-slate-50 rounded-full">
                                                    <Layout className="w-8 h-8 stroke-1 text-slate-400" />
                                                </div>
                                                <p className="text-sm font-medium">Selecciona una sección para editar</p>
                                                <Button variant="outline" size="sm" onClick={addSection}>
                                                    Crear primera sección
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}