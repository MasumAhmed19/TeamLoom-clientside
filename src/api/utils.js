import axios from "axios";


// upload img and return url
const img_hosting_key = import.meta.env.VITE_IMAGEBB_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

export const imageUpload = async (imgData)=>{
    const formData = new FormData();
    formData.append('image', imgData)
    const imgRes = await axios.post(img_hosting_api, formData);
    return imgRes.data.data.url
}