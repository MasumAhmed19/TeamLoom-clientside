import { useEffect, useState } from "react";
import { getAllEmployee } from "../../api/utils";
import useAuth from "../../hooks/useAuth";
import EmployeeRowforAdmin from "./EmployeeRowforAdmin";
import TableLoader from "../Loader/TableLoader";
import axios from "axios";
import { MdOutlineClose } from "react-icons/md";
import EmployeeDetails from "../pop-up/EmployeeDetails";

const EmployeeListTableAdmin = () => {
  const { user } = useAuth();
  const [employees, setEmployees] = useState([]);
  const [role, setRole] = useState("");
  const [loader, setLoader] = useState(true);
  const [detData, setDetData] = useState(null);

  // role wise render koraite hbe
  useEffect(() => {
    const fetchEmployeeDataByQuery = async () => {
      try {
        setLoader(true);
        const users = await getAllEmployee(role);
        setEmployees(users.data);
      } catch (err) {
        console.error("error--->", err);
      } finally {
        setLoader(false);
      }
    };

    fetchEmployeeDataByQuery();
  }, [user?.email, role]);

  const handleAdjustSalary = (id) => {
    {
      /* TODO: pop up for adjust salary field */
    }
    console.log(id);
  };

  const handleAdjustFire = (id) => {
    {
      /* TODO: pop up for fire employee */
    }
    console.log(id);
  };

  const handleAdjusMakeHR = (id) => {
    {
      /* TODO: pop up for resure about make hr */
    }
    console.log(id);
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
      {loader ? (
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
                  handleAdjusMakeHR={handleAdjusMakeHR}
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
      </>
    </div>
  );
};

export default EmployeeListTableAdmin;
