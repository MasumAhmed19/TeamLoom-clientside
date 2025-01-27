import EmployeeListTableAdmin from "../../../components/Tables/EmployeeListTableAdmin";
import useAuth from "../../../hooks/useAuth";
import {Helmet} from 'react-helmet-async'
import useRole from "../../../hooks/useRole";
import EmployeeList4HR from "./HR/EmployeeList4HR";
import TableLoader from "../../../components/Loader/TableLoader";

const EmployeeList = () => {

    const {user} = useAuth();
    const [role, isLoading] = useRole();

    console.log(role)

    return (
        <div className="mt-5 space-y-5">
            <Helmet>
                <title>Employee List</title>
            </Helmet>
            <div className="border p-5 rounded-lg">
                {/* All Employee */}
    
                {role==='admin' && <EmployeeListTableAdmin />}
                {role==='hr' && <EmployeeList4HR />}
                    
         
            </div>
        </div>
    );
};

export default EmployeeList;