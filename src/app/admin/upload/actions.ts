"use server";

import { uploadImage } from "@/lib/cloudinary";
import { z } from "zod";

const imageSchema = z.object({
  image: z.instanceof(File),
});

type State = {
  message: string;
  imageUrl?: string;
  success: boolean;
  errors?: {
    image?: string[];
  }
};

export async function uploadImageAction(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = imageSchema.safeParse({
    image: formData.get('image'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid image file.",
      success: false,
    };
  }

  try {
    const result = await uploadImage(validatedFields.data.image);
    return {
      message: "Image uploaded successfully.",
      imageUrl: result.secure_url,
      success: true,
    };
  } catch (error) {
    console.error("Error uploading image:", error);
    return {
      message: "Failed to upload image.",
      success: false,
    };
  }
}
