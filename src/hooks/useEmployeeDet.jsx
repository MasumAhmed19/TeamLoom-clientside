import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useEmployeeDet = () => {
    const {user, loading} = useAuth();

    const {data: userData={}, isLoading, refetch} = useQuery({
        queryKey:['userData', user?.email],
        queryFn: async ()=>{
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/employee/${user?.email}`)
            // console.log(data)
            return data[0] || {};
        }
    })

    return [userData, isLoading]
    
};

export default useEmployeeDet;
