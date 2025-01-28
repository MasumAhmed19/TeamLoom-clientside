import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAllHREmp = (role) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    const { data: employees = [], refetch, isLoading, isError, error } = useQuery({
        queryKey: ['employees', role, user?.email], // Include role for better caching
        queryFn: async () => {
            const res = await axiosSecure(`/allemployees?role=${role}`);
            return res.data;
        },
        enabled: !!user,
    });

    return { employees, refetch, isLoading, isError, error };
};

export default useAllHREmp;

