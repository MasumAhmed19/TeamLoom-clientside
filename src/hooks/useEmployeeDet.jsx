import { useState, useEffect } from "react";
import { getEmployeeDetail } from "../api/utils";

const useEmployeeDet = (email) => {
    const [employee, setEmployees] = useState(null);
    const [isAdmin, setIsAdmin]= useState(false);
    const [isHR, setIsHR]= useState(false);
    const [isEmployee, setIsEmployee]= useState(false);
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const fetchDet = async ()=>{
            try{
                setLoading(true)
                const info = await getEmployeeDetail(email)
                setEmployees(info)
                
                if(employee?.role==='admin'){
                    setIsAdmin(true)
                }else if(employee?.role==='hr'){
                    setIsHR(true)
                }else{
                    setIsEmployee(true)
                }

            }catch(err){
                console.log(err)
            }finally{
                setLoading(false)
            }
        }
        fetchDet();
    },[email, employee?.role])

    return {employee, isAdmin, isHR, isEmployee, loading}
};

export default useEmployeeDet;
