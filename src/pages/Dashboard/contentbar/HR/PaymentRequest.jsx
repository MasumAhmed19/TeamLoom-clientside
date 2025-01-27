import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";

const PaymentRequest = () => {
    const {user} = useAuth()
    const [payrUser, setPayUser]= useState([]);
    
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
    console.log(payrUser)

    return (
        <div className="mt-5 space-y-5">
            <Helmet>
                <title>Payment Request</title>
            </Helmet>
            <div className="border p-5 rounded-lg">
    
            </div>
        </div>
    );
};

export default PaymentRequest;