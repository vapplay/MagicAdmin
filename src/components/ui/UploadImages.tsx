import React, { useState, useRef } from "react";
import { ImageUpIcon } from "lucide-react";
interface ImagePreview {
  name: string;
  url: string;
}

const UploadImages = ({
  Name,
  onFileChange,
}: {
  Name?: string;
  onFileChange?: (file: File) => void;
}) => {
  const [image, setImage] = useState<ImagePreview | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);

    // Filtrar solo imágenes
    const imageFile = files.find((file) => file.type.startsWith("image/"));
    if (imageFile) {
      onFileChange && onFileChange(imageFile);
      const imageUrl = URL.createObjectURL(imageFile);
      setImage({ name: imageFile.name, url: imageUrl });
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // Necesario para permitir el drop
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      onFileChange && onFileChange(file);
      const imageUrl = URL.createObjectURL(file);
      setImage({ name: file.name, url: imageUrl });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-row gap-2 items-center">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={triggerFileInput}
        className="relative border-2 border-dashed border-gray-300 text-center bg-gray-50 rounded-full cursor-pointer hover:bg-gray-100 w-20 h-20 flex justify-center items-center"
      >
        {image ? (
          <img
            src={image.url}
            alt={image.name}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <ImageUpIcon className="text-gray-500" />
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileSelect}
      />
      <div className="flex flex-col gap-2 justify-center max-w-xs">
        <span className="pl-2">{Name}</span>
        <label className="text-gray-700 ml-2 ">
          {image?.name || "Selecciona una imagen"}
        </label>
      </div>
    </div>
  );
};

export default UploadImages;
