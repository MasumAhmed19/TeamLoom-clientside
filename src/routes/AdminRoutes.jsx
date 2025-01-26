import { Navigate } from "react-router-dom";
import Loader1 from "../components/Loader1";
import useRole from "../hooks/useRole";

const AdminRoutes = ({children}) => {
    const [role, isLoading] = useRole();

    if(isLoading) return <Loader1 />;
    if(role==='admin') return children;
    return <Navigate to='/dashboard'></Navigate>
};

export default AdminRoutes;