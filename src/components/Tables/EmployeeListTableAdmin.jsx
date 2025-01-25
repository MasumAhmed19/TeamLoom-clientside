import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import EmployeeRowforAdmin from "./EmployeeRowforAdmin";
import TableLoader from "../Loader/TableLoader";
import axios from "axios";
import EmployeeDetails from "../pop-up/EmployeeDetails";
import MakeHR from "../pop-up/MakeHR";
import useEmp from "../../hooks/useEmp";
import AdjustSalary from "../pop-up/AdjustSalary";
import FireEmployee from "../pop-up/FireEmployee";

const EmployeeListTableAdmin = () => {
  const { user } = useAuth();
  const [role, setRole] = useState("")
  const {employees, refetch, isLoading} = useEmp(role)

  const [detData, setDetData] = useState(null);


  const handleAdjustSalary = async (id) => {
    document.getElementById("modal_adjust_salary").showModal();
    try {
      const temp = await axios.get(
        `${import.meta.env.VITE_API_URL}/employee/id/${id}`
      );
      setDetData(temp.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdjustFire = async (id) => {
    document.getElementById("modal_fire_emp").showModal();
    try {
      const temp = await axios.get(
        `${import.meta.env.VITE_API_URL}/employee/id/${id}`
      );
      setDetData(temp.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdjustMakeHR = async (id) => {
    document.getElementById("modal_makehr").showModal();
    try {
      const temp = await axios.get(
        `${import.meta.env.VITE_API_URL}/employee/id/${id}`
      );
      setDetData(temp.data[0]);
    } catch (err) {
      console.log(err);
    }

  };

  const handleDetail = async (id) => {
    document.getElementById("modal_detail").showModal();
    console.log(id);
    try {
      const temp = await axios.get(
        `${import.meta.env.VITE_API_URL}/employee/id/${id}`
      );
      setDetData(temp.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {isLoading ? (
        <TableLoader></TableLoader>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#EBD9FF] text-[#7201FF] p-[1px]">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>
                  <select
                    className="text-xs bg-transparent border-none focus:outline-none"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option
                      selected
                      value=""
                    >
                      Role
                    </option>
                    <option value="hr">HR</option>
                    <option value="employee">Employee</option>
                  </select>
                </th>
                <th>Designation</th>
                <th>Bank Account No</th>
                <th>Salary</th>
                <th>Adjust Salary</th>
                <th>Fire</th> <th>Make HR</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              {/* row 1 */}
              {employees.map((singlaData, idx) => (
                <EmployeeRowforAdmin
                  key={singlaData?._id}
                  idx={idx}
                  singlaData={singlaData}
                  handleAdjustFire={handleAdjustFire}
                  handleAdjustMakeHR={handleAdjustMakeHR}
                  handleDetail={handleDetail}
                  handleAdjustSalary={handleAdjustSalary}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      <>
        <EmployeeDetails detData={detData} />
        <MakeHR detData={detData} refetch={refetch} />
        <AdjustSalary detData={detData} refetch={refetch}/>
        <FireEmployee detData={detData} refetch={refetch}/>
      </>
    </div>
  );
};

export default EmployeeListTableAdmin;