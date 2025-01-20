import { useEffect, useState } from "react";
import { getAllEmployee } from "../../api/utils";
import useAuth from "../../hooks/useAuth";
import useEmployeeDet from "../../hooks/useEmployeeDet";
import EmployeeRowforHR from "./EmployeeRowforHR";

const EmployeeListTableAdmin = () => {
  const { user } = useAuth();
  const [employees, setEmployees] = useState([]);
  const [role, setRole] = useState("employee");
  const { isAdmin, isHR, isEmployee, loading } = useEmployeeDet(user?.email);

  // role wise render koraite hbe
  useEffect(() => {
    const fetchEmployeeDataByQuery = async () => {
      try {
        const users = await getAllEmployee(role);
        setEmployees(users.data);
      } catch (err) {
        console.error("error--->", err);
      }
    };
  

    fetchEmployeeDataByQuery();
  }, [user?.email, role]);



  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#EBD9FF] text-[#7201FF] p-[1px]">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Designation</th>
              <th>Bank Account No</th>
              <th>Salary</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {employees.map((singlaData, idx) => (
              <EmployeeRowforHR
                key={singlaData?._id}
                idx={idx}
                singlaData={singlaData}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeListTableAdmin;
