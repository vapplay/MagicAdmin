import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react"; // Importa los íconos de play y pause
import { MusicIcon } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface AudioPreview {
  name: string;
  url: string;
}

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const animation =
  "https://cdn.dribbble.com/users/1235878/screenshots/4534497/media/ecebae28eb04b351b904ec67d953153b.gif";

const UploadAudio = ({
  Name,
  onFileChange,
}: {
  Name?: string;
  onFileChange?: (file: File) => void;
}) => {
  const [audio, setAudio] = useState<AudioPreview | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // Tiempo actual del audio
  const [duration, setDuration] = useState(0); // Duración total del audio
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Actualiza el tiempo actual del audio mientras se reproduce
  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current && audioRef.current.currentTime) {
        setCurrentTime(audioRef.current.currentTime);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);

    // Filtrar solo audios
    const audioFile = files.find((file) => file.type.startsWith("audio/"));
    if (audioFile) {
      onFileChange && onFileChange(audioFile);
      const audioUrl = URL.createObjectURL(audioFile);
      setAudio({ name: audioFile.name, url: audioUrl });
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); 
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("audio/")) {
      const audioUrl = URL.createObjectURL(file);
      onFileChange && onFileChange(file);
      setAudio({ name: file.name, url: audioUrl });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(event.target.value);
    setCurrentTime(newTime);

    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  return (
    <div className="flex flex-row gap-2 items-center min-w-[300px]">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={triggerFileInput}
        className="relative text-center bg-gray-50 rounded-full cursor-pointer hover:bg-gray-100 w-20 h-20 flex justify-center items-center"
      >
        {audio ? (
          <div className="flex flex-col gap-2">
            {/* Contenedor circular con el control de audio */}
            <audio
              ref={audioRef}
              controls
              className="hidden"
              onLoadedMetadata={handleLoadedMetadata}
            >
              <source src={audio.url} type="audio/mp3" />
              Tu navegador no soporta el elemento de audio.
            </audio>

            <Avatar className="w-full h-full object-cover rounded-full">
              <AvatarImage src={animation} />
            </Avatar>
          </div>
        ) : (
          <MusicIcon className="text-gray-500" />
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="audio/*"
        className="hidden"
        onChange={handleFileSelect}
      />
      <div className="flex flex-col gap-2 justify-center max-w-xs">
        <span className="pl-2">{Name}</span>
        <label className="text-gray-700 ml-2">
          {audio?.name || "Selecciona un audio"}
        </label>

        {audio && (
          <div className="w-full flex flex-row gap-2 items-center">
            {/* Coloca el ícono de play/pause al lado de la barra de progreso */}
            <button
              onClick={handlePlayPause}
              className="p-1 bg-blue-500 text-white rounded-full flex items-center justify-center"
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} />}
            </button>

            {/* Barra de progreso con el control deslizante */}
            <div className="w-full flex flex-1 items-center">
              <input
                type="range"
                min={0}
                max={duration || 0}
                step="0.1"
                value={currentTime}
                onChange={handleTimeChange}
                className="w-full"
              />
            </div>
            {/* Time */}
            <div className="flex items-center gap-2 text-xs">
              <span>{formatTime(currentTime)}</span> /{" "}
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadAudio;
