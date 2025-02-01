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

export const getAllEmployee = async (role="")=>{
    const data = await axios.get(`${import.meta.env.VITE_API_URL}/all-employee?role=${role}`)
    return data
}


export const getEmployeeDetail = async (email)=>{
    const data = await axios.get(`${import.meta.env.VITE_API_URL}/employee/${email}`)
    return data.data[0];
}


export const saveUser = async (user)=>{
    //by default employee hisebe save krbe
    await axios.post(`${import.meta.env.VITE_API_URL}/goolgle-signIn/${user?.email}`,{
        name: user?.displayName,
        email: user?.email,
        bank_account: '2221425441',
        role:'employee',
        designation:'Sales Assistant',
        salary:45000,
        profileURL: user?.photoURL,
        makeHR:false,
        isVerified:false,
        uid:user?.uid,
    })
}
