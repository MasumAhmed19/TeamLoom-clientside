import { useEffect, useState } from "react";
import { getAllEmployee, getEmployeeDetail } from "../../api/utils";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import EmployeeRow from "./EmployeeRow";

const EmployeeListTable = () => {

    const {user} =useAuth();
    const [employee, setEmployee] = useState([]);

    // role wise render koraite hbe
    
    useEffect(()=>{
        const fetchEmployeeDataByCat =async ()=>{
            try{
            // const users = await getAllEmployee('')
            const users = await axios.get(`${import.meta.env.VITE_API_URL}/all-employee?role=`)
                setEmployee(users.data);
            }catch(err){
                console.error('error--->', err)
            }
        }
        
        fetchEmployeeDataByCat();
    }, [user?.email])

    console.log(employee)

    

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
              <th>Designation</th>
              <th>Bank Account No</th>
              <th>Salary</th>
              <th>Adjust Salary</th>
              <th>Fire</th>
              <th>Make HR</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                employee.map((singlaData, idx)=>(
                    <EmployeeRow key={singlaData?._id} idx={idx} singlaData={singlaData} />
                ))
            }
            
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default EmployeeListTable;
