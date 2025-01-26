import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Switch } from "@/components/ui/switch";
import UploadImages from "./ui/UploadImages";
import UploadAudio from "./upload-song";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { addHistory, editHistory } from "@/api";
import { History } from "@/type/type";

type Props = {
  onClose: () => void;

  history: History;
};

const Box = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col gap-5 p-3 ${className}`}>{children}</div>
  );
};

const HistoryType = [
  {
    value: 2,
    label: "🎭 Iconic",
  },
  {
    value: 1,
    label: "📚 History",
  },
  {
    value: 3,
    label: "🎵 Song",
  },
  {
    value: 4,
    label: "👨‍👩‍👧‍👦 Customers",
  },
];

type FormHistory = {
  name_es: string;
  description_es: string;
  audio_es: File | null;
  name_en: string;
  description_en: string;
  audio_en: File | null;
  name_pt: string;
  description_pt: string;
  audio_pt: File | null;
  poster: File | null;
  cover: File | null;
  type: number;
  isPremium: boolean;
  active: boolean;
  language: string;
};

export const AddForm = ({ onClose, history }: Props) => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormHistory>({
    // Español
    name_es: "",
    description_es: "",
    audio_es: null,
    // Inglés
    name_en: "",
    description_en: "",
    audio_en: null,
    // Portugués
    name_pt: "",
    description_pt: "",
    audio_pt: null,
    // Imágenes
    poster: null,
    cover: null,
    // Extras
    type: 1,
    isPremium: false,
    active: false,
    language: "es",
  });

  const handleSubmit = async () => {
    const formData = new FormData();
    try {
      // Campos de texto
      formData.append("name_es", form.name_es || "");
      formData.append("name_en", form.name_en || "");
      formData.append("name_pt", form.name_pt || "");

      formData.append("description_es", form.description_es || "");
      formData.append("description_en", form.description_en || "");
      formData.append("description_pt", form.description_pt || "");

      formData.append("language", form.language || "es");

      formData.append("type", form.type.toString() || "1");
      formData.append("isPremium", form.isPremium ? "true" : "false");
      formData.append("active", form.active ? "true" : "false");

      // Archivos de imagen y audio
      if (form.poster) formData.append("image", form.poster);
      if (form.cover) formData.append("poster", form.cover);
      if (form.audio_es) formData.append("es_song", form.audio_es);
      if (form.audio_en) formData.append("en_song", form.audio_en);
      if (form.audio_pt) formData.append("pt_song", form.audio_pt);
      if (history?.id) formData.append("id", history.id);

      // Inicia la carga
      setLoading(true);

      console.log(form);

      /*   if (history) {
        toast.info("Editando historial");
        const response = await editHistory(formData);
        console.log(response);
      } else {
        toast.info("Agregando historial");
        await addHistory(formData);
      }

      if (onClose) onClose(); */
      toast.success("Historial añadido con éxito");
 /*      window.location.reload(); */
    } catch (e: any) {
      toast.error(e?.message || "Ocurrió un error al enviar los datos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (history) {
      setForm({
        ...form,
        name_es: history.name_es,
        name_en: history.name_en,
        name_pt: history.name_pt,
        description_en: history.description_en,
        description_es: history.description_es,
        description_pt: history.description_pt,
        type: history.type,
        isPremium: history.isPremium,
        active: history.active,
      });
    }
  }, [history]);

  return (
    <ScrollArea>
      <div className="flex flex-col gap-4 p-4 items-center">
        {/* Contenedor horizontal por idioma */}
        <div className="flex flex-row gap-4">
          {/* Español */}
          <Box>
            <Label>🇪🇸 Español</Label>
            <Input
              value={form.name_es}
              placeholder="Título"
              onChange={(e) => setForm({ ...form, name_es: e.target.value })}
            />
            <Input
              value={form.description_es}
              placeholder="Descripción"
              onChange={(e) =>
                setForm({ ...form, description_es: e.target.value })
              }
            />
            <UploadAudio
              Name="Audio"
              onFileChange={(file) => setForm({ ...form, audio_es: file })}
            />
          </Box>

          {/* Inglés */}
          <Box>
            <Label>🇺🇸 Inglés</Label>
            <Input
              value={form.name_en}
              placeholder="Title"
              onChange={(e) => setForm({ ...form, name_en: e.target.value })}
            />
            <Input
              value={form.description_en}
              placeholder="Description"
              onChange={(e) =>
                setForm({ ...form, description_en: e.target.value })
              }
            />
            <UploadAudio
              Name="Audio"
              onFileChange={(file) => setForm({ ...form, audio_en: file })}
            />
          </Box>
          {/* Portugués */}
          <Box>
            <Label>🇧🇷 Portugués</Label>
            <Input
              value={form.name_pt}
              placeholder="Título"
              onChange={(e) => setForm({ ...form, name_pt: e.target.value })}
            />
            <Input
              value={form.description_pt}
              placeholder="Descrição"
              onChange={(e) =>
                setForm({ ...form, description_pt: e.target.value })
              }
            />
            <UploadAudio
              Name="Áudio"
              onFileChange={(file) => setForm({ ...form, audio_pt: file })}
            />
          </Box>
        </div>

        {/* Imágenes y Extras */}
        <div className="grid grid-cols-3 gap-6">
          {/* Imágenes (ocupa 2 columnas) */}
          <Box className="col-span-2">
            <Label>Imágenes</Label>
            <Card>
              <CardHeader />
              <CardContent className="flex flex-col gap-4">
                <UploadImages
                  Name="Poster 🌄"
                  onFileChange={(file) => setForm({ ...form, poster: file })}
                />
                <UploadImages
                  Name="Cover 🎨"
                  onFileChange={(file) => setForm({ ...form, cover: file })}
                />
              </CardContent>
            </Card>
          </Box>

          {/* Extras (ocupa 1 columna) */}
          <Box className="col-span-1">
            <Label>Extras</Label>
            <Select
              value={String(form.type)}
              onValueChange={(value) => {
                const type = parseInt(value, 10);
                setForm((prev) => ({ ...prev, type }));
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {HistoryType.map((item) => (
                  <SelectItem key={item.value} value={String(item.value)}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Card>
              <div className="flex flex-row justify-between p-[0.4rem] align-center">
                <Label>Premium</Label>
                <Switch
                  checked={form.isPremium}
                  onCheckedChange={(checked) =>
                    setForm({ ...form, isPremium: checked })
                  }
                />
              </div>
            </Card>

            <Card>
              <div className="flex flex-row justify-between p-[0.4rem] align-center">
                <Label>Active</Label>
                <Switch
                  onChange={(checked) =>
                    setForm({ ...form, active: checked ? true : false })
                  }
                  checked={form.active}
                  onCheckedChange={(checked) =>
                    setForm({ ...form, active: checked ? true : false })
                  }
                />
              </div>
            </Card>
          </Box>
        </div>

        {/* Botón de subida */}
        <div className="flex w-full">
          <Button
            onClick={handleSubmit}
            className="ml-auto flex items-center gap-2"
          >
            {loading && <Loader2 className="animate-spin" />}
            Subir
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};
