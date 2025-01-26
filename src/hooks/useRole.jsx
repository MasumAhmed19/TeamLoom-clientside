import useAuth from "./useAuth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
    const {user, loading} = useAuth();

    const {data: role, isLoading} = useQuery({
        queryKey:['role', user?.email],
        enabled:!loading && !!user?.email,
        queryFn: async ()=>{
            const data = await axios.get(`${import.meta.env.VITE_API_URL}/employee/role/${user?.email}`)
            return data.data.role
        }
    })

    return [role, isLoading]
};

export default useRole;