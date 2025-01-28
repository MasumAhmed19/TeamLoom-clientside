import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";

const useEmployeeDet = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure()

    const {data: userData={}, isLoading, refetch} = useQuery({
        queryKey:['userData', user?.email],
        queryFn: async ()=>{
            // const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/employee/${user?.email}`)
            const {data} = await axiosSecure(`/employee/${user?.email}`)
            // console.log(data)
            return data[0] || {};
        }
    })

    return [userData, isLoading]
    
};

export default useEmployeeDet;
