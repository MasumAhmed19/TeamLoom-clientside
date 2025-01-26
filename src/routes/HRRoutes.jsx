import { Navigate } from "react-router-dom";
import Loader1 from "../components/Loader1";
import useRole from "../hooks/useRole";

const HRRoutes = ({children}) => {
    const [role, isLoading] = useRole();

    if(isLoading) return <Loader1 />;
    if(role==='hr') return children;
    return <Navigate to='/dashboard'></Navigate>
};

export default HRRoutes;