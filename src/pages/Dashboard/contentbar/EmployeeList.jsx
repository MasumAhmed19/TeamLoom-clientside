import EmployeeListTableAdmin from "../../../components/Tables/EmployeeListTableAdmin";
import useAuth from "../../../hooks/useAuth";

const EmployeeList = () => {

    const {user} = useAuth();

    return (
        <div className="mt-5 space-y-5">
            <div className="border p-5 rounded-lg">
                {/* All Employee */}
                <EmployeeListTableAdmin />
            </div>
        </div>
    );
};

export default EmployeeList;