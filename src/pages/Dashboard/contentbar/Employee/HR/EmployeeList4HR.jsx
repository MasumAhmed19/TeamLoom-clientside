import { useState } from "react";
import useAuth from "../../../../../hooks/useAuth";
import useEmp from "../../../../../hooks/useEmp";
import axios from "axios";
import TableLoader from "../../../../../components/Loader/TableLoader";
import EmployeeRowforAdmin from "../../../../../components/Tables/EmployeeRowforAdmin";
import EmployeeDetails from "../../../../../components/pop-up/EmployeeDetails";
import MakeHR from "../../../../../components/pop-up/MakeHR";
import AdjustSalary from "../../../../../components/pop-up/AdjustSalary";
import FireEmployee from "../../../../../components/pop-up/FireEmployee";
import { useQuery } from "@tanstack/react-query";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import EmployeeRow4HR from "./EmployeeRow4HR";



const EmployeeListTableAdmin = () => {
  const { user } = useAuth();
//   const {employees, refetch, isLoading} = useEmp('employee')
  const [detData, setDetData] = useState([]);

  const { data: allEmployee = [], isLoading, refetch } = useQuery({
    queryKey: ["allEmployee", user?.email],
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/only-employees`);
      return response.data; 
    },
  });

  console.log(allEmployee)


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

  const handleVerify = async (id)=>{
        try{
            const result = await axios.patch(`${import.meta.env.VITE_API_URL}/verify/${id}`)
            console.log(result)
            refetch()
        }catch(err){
            console.log(err)
        }
  }

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
                <th>No</th>
                <th>Name</th>
                <th>Bank Account No</th>
                <th>Verify</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>Pay</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              {/* row 1 */}
              {
                allEmployee.map((el, idx)=>
                    <EmployeeRow4HR key={el?._id} el={el} idx={idx} handleVerify={handleVerify} />
                )
              }
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