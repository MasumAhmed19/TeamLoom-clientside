import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import PaymentHistoryRow from "./PaymentHistoryRow";

const PaymentRequest = () => {
    const {user} = useAuth()
    const [payUser, setPayUser]= useState([]);
    
    useEffect(()=>{
        fetchPayrollData()
    }, [user?.email])

    const fetchPayrollData =async ()=>{
        try{
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/all-payment-request`)
            setPayUser(result.data)
        }catch(err){
            console.log(err)
        }
    }
    console.log(payUser)

    return (
        <div className="mt-5 space-y-5">
            <Helmet>
                <title>Payment Request</title>
            </Helmet>
            <div className="border p-5 rounded-lg">
            <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#EBD9FF] text-[#7201FF] p-[1px]">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Bank Account No</th>
                <th>Month, Year</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {/* row 1 */}
              {payUser.map((el, idx) => (
                <PaymentHistoryRow key={el?._id} idx={idx} el={el} />
              ))}
            </tbody>
          </table>
        </div>
    
            </div>
        </div>
    );
};

export default PaymentRequest;