import EmployeeListTable from "../../../components/Tables/EmployeeListTable";

const EmployeList = () => {

    return (
        <div className="mt-5 space-y-5">
            <div className="border p-5 rounded-lg">
                {/* All Employee */}
                <EmployeeListTable />
                
            </div>
                
            {/*  */}

        </div>
    );
};

export default EmployeList;