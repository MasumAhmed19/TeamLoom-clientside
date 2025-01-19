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
    const data = await axios.get(`${import.meta.env.VITE_API_URL}/employee?role=${role}`)
    return data.data[0]
}


export const getEmployeeDetail = async (email)=>{
    const data = await axios.get(`${import.meta.env.VITE_API_URL}/employee/${email}`)
    return data.data[0];
}



    // useEffect(()=>{
    //     const fetchEmployeeData =async ()=>{
    //         try{
    //         const userInfo = await getEmployeeDetail(user?.email)
    //         // console.log(userInfo)
    //         }catch(err){
    //             console.error('error--->', err)
    //         }
    //     }
    //     fetchEmployeeData();
    // }, [user?.email])