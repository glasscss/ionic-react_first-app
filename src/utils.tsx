import {Photo} from '@capacitor/camera';

const readAsBase64 = async (photo: Photo) => {
   // Fetch the photo, read as a blob, then convert to base64 format
   const response = await fetch(photo.webPath!);
   const blob = await response.blob();

   return await convertBlobToBase64(blob) as string;
};


const convertBlobToBase64 = async (blob: Blob) => new Promise((resolve, reject) => {
   const reader = new FileReader();
   reader.onerror = reject;
   reader.onload = () => {
      resolve(reader.result);
   };
   reader.readAsDataURL(blob);
});
export default readAsBase64;
