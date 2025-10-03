
"use client";

import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { uploadImageAction } from '@/app/admin/upload/actions';
import { UploadCloud, X } from 'lucide-react';
import Image from 'next/image';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

interface ImageUploaderProps {
  onUploadSuccess: (url: string) => void;
  initialImage?: string;
}

const initialState = {
  message: "",
  imageUrl: "",
  success: false,
};

export function ImageUploader({ onUploadSuccess, initialImage }: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(initialImage || null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setPreview(initialImage || null);
  }, [initialImage]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setIsUploading(true);

    const formData = new FormData();
    formData.append('image', file);
    
    const newState = await uploadImageAction(initialState, formData);

    if (newState.success && newState.imageUrl) {
      onUploadSuccess(newState.imageUrl);
      setPreview(newState.imageUrl);
       toast({
        title: "Success",
        description: "Image uploaded successfully.",
      });
    } else {
       toast({
        title: "Upload Failed",
        description: newState.message || "An unexpected error occurred.",
        variant: "destructive",
      });
      setPreview(initialImage || null);
    }
    setIsUploading(false);
  }, [onUploadSuccess, toast, initialImage]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.png', '.jpg', '.gif'] },
    multiple: false,
  });

  const handleRemoveImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setPreview(null);
    onUploadSuccess("");
  };

  return (
    <div>
      <div
        {...getRootProps()}
        className={`w-full border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-primary bg-primary/10' : 'border-input hover:border-primary/50'}`}
      >
        <input {...getInputProps()} />
        {preview ? (
          <div className="relative group mx-auto max-w-[200px]">
            <Image src={preview} alt="Image preview" width={200} height={200} className="rounded-md object-cover" />
            {!isUploading && (
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={handleRemoveImage}
                className="absolute top-1 right-1 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Remove image"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
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
          <Progress value={50} className="w-full" />
          <p className="text-sm text-center mt-2 text-muted-foreground">Uploading...</p>
        </div>
      )}
    </div>
  );
}
