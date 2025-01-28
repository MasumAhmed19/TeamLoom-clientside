import { Helmet } from "react-helmet-async";
import useRole from "../../../../hooks/useRole";
import AdminStatistics from "./AdminStatistics";
import HRStatistics from "./HRStatistics";
import EmployeeStatistics from "./EmployeeStatistics";

const Statistics = () => {
    const [role, isLoading] = useRole();

    return (
        <div className="mt-5 space-y-5">
            <Helmet>
                <title>Statistics</title>
            </Helmet>
            <div className="border p-5 rounded-lg">
                {/* All Employee */}
                {role === 'admin' && <AdminStatistics />}
                {role === 'hr' && <HRStatistics />}
                {role === 'employee' && <EmployeeStatistics />}

            </div>
        </div>
    );
};

export default Statistics;