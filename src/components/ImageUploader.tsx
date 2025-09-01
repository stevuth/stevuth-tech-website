"use client";

import { useState, useActionState, useEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { uploadImageAction } from '@/app/admin/upload/actions';
import { UploadCloud, X, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { Progress } from './ui/progress';

interface ImageUploaderProps {
  onUploadSuccess: (url: string) => void;
}

const initialState = {
  message: "",
  imageUrl: "",
  success: false,
};

export function ImageUploader({ onUploadSuccess }: ImageUploaderProps) {
  const [state, formAction] = useActionState(uploadImageAction, initialState);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setPreview(URL.createObjectURL(file));
        const formData = new FormData();
        formData.append('image', file);
        setIsUploading(true);
        formAction(formData);
      }
    },
    accept: { 'image/*': ['.jpeg', '.png', '.jpg', '.gif'] },
    multiple: false,
  });

  useEffect(() => {
    if (state.success && state.imageUrl) {
      onUploadSuccess(state.imageUrl);
      setPreview(state.imageUrl);
      setIsUploading(false);
    }
    if (!state.success && state.message) {
      setIsUploading(false);
    }
  }, [state, onUploadSuccess]);

  const handleRemoveImage = () => {
    setPreview(null);
    onUploadSuccess("");
    if (fileInputRef.current) {
        fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <div
        {...getRootProps()}
        className={`w-full border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-primary bg-primary/10' : 'border-input hover:border-primary/50'}`}
      >
        <input {...getInputProps({ref: fileInputRef})} />
        {preview ? (
          <div className="relative group">
            <Image src={preview} alt="Image preview" width={200} height={200} className="mx-auto rounded-md" />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Remove image"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
            <UploadCloud className="h-10 w-10" />
            <p className="font-semibold">Drag & drop an image here, or click to select</p>
            <p className="text-xs">PNG, JPG, GIF up to 10MB</p>
          </div>
        )}
      </div>
      {isUploading && (
         <div className="mt-4">
          <Progress value={isUploading && !state.success ? 50 : 100} className="w-full" />
          <p className="text-sm text-center mt-2 text-muted-foreground">Uploading...</p>
        </div>
      )}
       {!state.success && state.message && (
         <p className="text-sm text-destructive mt-2">{state.message}</p>
      )}
    </div>
  );
}
