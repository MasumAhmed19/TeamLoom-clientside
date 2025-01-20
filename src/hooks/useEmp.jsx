import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useEmp = (role) => {
    const { user } = useAuth();

    const { data: employees = [], refetch, isLoading, isError, error } = useQuery({
        queryKey: ['employees', role, user?.email], // Include role for better caching
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/all-employee?role=${role}`);
            return res.data;
        },
        enabled: !!user, // Prevents fetching when user is undefined
        staleTime: 5 * 60 * 1000, // Cache data for 5 minutes to reduce API calls
    });

    return { employees, refetch, isLoading, isError, error };
};

export default useEmp;



// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import axios from "axios";

// const useEmp = (role) => {
//     const {user} = useAuth();

//     const {refetch, data:employees=[]} = useQuery({
//         queryKey:['employees', user?.email],
//         queryFn: async()=>{
//             const res = await axios.get(`${import.meta.env.VITE_API_URL}/all-employee?role=${role}`);
//             return res.data;
//         }
//     })

//     return [employees, refetch]
// };

// export default useEmp;


