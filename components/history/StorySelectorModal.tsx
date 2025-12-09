"use client";

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search } from 'lucide-react';
import { IMAGE_URL } from '@/util/config';
import { fetcher } from '@/lib/fetch';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export interface HistoryModel {
    id: string;
    name_es: string;
    name_en: string;
    name_pt?: string;
    cover: string;
    description_es: string;
    description_en: string;
    description_pt?: string;
    isPremium: boolean;
    type: number;
}

interface StorySelectorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onStorySelect: (story: HistoryModel) => void;
}

export function StorySelectorModal({ isOpen, onClose, onStorySelect }: StorySelectorModalProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState<string>('all');

    const { data: storiesData, isLoading } = useQuery({
        queryKey: ['histories'],
        queryFn: () => fetcher('history'),
    });

    const stories = storiesData?.data || [];

    const filteredStories = (stories as HistoryModel[]).filter((story) => {
        const matchesSearch = story.name_es.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = filterType === 'all' ? true : story.type.toString() === filterType;
        return matchesSearch && matchesType;
    });

    const getTypeLabel = (type: number) => {
        switch (type) {
            case 1: return "Historia";
            case 2: return "Icónico";
            case 3: return "Canción";
            default: return "Otro";
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-4xl w-[95vw] h-[85vh] flex flex-col gap-0 p-0 overflow-hidden">
                <div className="p-6 pb-2">
                    <DialogHeader>
                        <DialogTitle>Seleccionar Cuento</DialogTitle>
                    </DialogHeader>

                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                                placeholder="Buscar cuento..."
                                className="pl-9"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Select value={filterType} onValueChange={setFilterType}>
                            <SelectTrigger className="w-full sm:w-[180px]">
                                <SelectValue placeholder="Tipo" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todos</SelectItem>
                                <SelectItem value="1">Historia</SelectItem>
                                <SelectItem value="2">Icónico</SelectItem>
                                <SelectItem value="3">Canción</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Área de contenido Scrollable (flex-1 ocupa el espacio restante) */}
                <div className="flex-1 min-h-0 w-full">
                    {isLoading ? (
                        <div className="h-full flex items-center justify-center">
                            <div className="border-muted border-t-primary h-8 w-8 animate-spin rounded-full border-4"></div>
                        </div>
                    ) : (
                        <ScrollArea className="h-full w-full">
                            <div className="p-6 pt-2">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {filteredStories.map((story) => (
                                        <div
                                            key={story.id}
                                            className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent cursor-pointer transition-colors relative group"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onStorySelect(story);
                                                onClose();
                                            }}
                                        >
                                            <div className="h-16 w-16 shrink-0 rounded overflow-hidden bg-slate-100 border border-slate-200">
                                                <img
                                                    src={`${IMAGE_URL}${story.cover}`}
                                                    alt={story.name_es}
                                                    className="h-full w-full object-cover"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-center justify-between gap-2 mb-0.5">
                                                    <h4 className="font-medium text-sm truncate" title={story.name_es}>
                                                        {story.name_es}
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Badge variant="secondary" className="text-[10px] px-1.5 h-4 font-normal">
                                                        {getTypeLabel(story.type)}
                                                    </Badge>
                                                    {story.isPremium && (
                                                        <Badge variant="outline" className="text-[10px] px-1.5 h-4 font-normal text-amber-600 border-amber-200 bg-amber-50">
                                                            Premium
                                                        </Badge>
                                                    )}
                                                </div>
                                                <p className="text-xs text-muted-foreground line-clamp-2">
                                                    {story.description_es}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                    {filteredStories.length === 0 && (
                                        <div className="col-span-full text-center py-12 text-muted-foreground">
                                            No se encontraron cuentos que coincidan con los filtros.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ScrollArea>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
} 