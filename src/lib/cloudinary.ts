import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dni2duulw", 
  api_key: process.env.CLOUDINARY_API_KEY || "317148353678176", 
  api_secret: process.env.CLOUDINARY_API_SECRET || "iGERXKs5VbRjvz3fO2JxkVD6TpY",
  secure: true,
});

export async function uploadImage(image: File) {
  const imageData = await image.arrayBuffer();
  const mime = image.type;
  const encoding = 'base64';
  const base64Data = Buffer.from(imageData).toString('base64');
  const fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;
  
  const result = await cloudinary.uploader.upload(fileUri, {
    folder: 'stevuth-tech-blog',
    upload_preset: "stevuth"
  });

  return result;
}
