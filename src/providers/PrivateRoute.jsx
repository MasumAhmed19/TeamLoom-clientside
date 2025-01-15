import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader1 from "../components/Loader1";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading) return <Loader1 />;
    if(user) return children;
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;