import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import useEmployeeDet from "../../../../hooks/useEmployeeDet";

const PaymentRecord = () => {

  // TODO  add krte hbe
  const [donePayment, setDonePayment] = useState([]);
  const [userData,] = useEmployeeDet()

  useEffect(() => {
    fetchPayrollData();
  }, [userData]);

  const fetchPayrollData = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/donepayment/${userData?._id}`
      );
      setDonePayment(result.data);
      console.log(result.data)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-5 space-y-5">
      <Helmet>
        <title>Payment Record</title>
      </Helmet>
      <div className="border dark:border-[#4B5563] p-5 rounded-lg">
      <div className="overflow-x-auto">
      <table className="table">
        {/* Table Head */}
        <thead className="bg-[#EBD9FF] dark:bg-[#8F03FF] dark:text-white text-[#7201FF] p-[1px]">
          <tr>
            <th>No</th>
            <th>Month</th>
            <th>Year</th>
            <th>Recieved</th>
            <th>Transaction ID</th>
          </tr>
        </thead>

        <tbody>
          {donePayment.map((el, idx) => (
            <tr
              key={el._id}
              className="hover:bg-purple-50 dark:hover:bg-black transition-all duration-200 dark:border-[#4B5563]"
            >
              <td>{idx + 1}</td>
              <td>{el.month}</td>
              <td>{el.year}</td>
              <td>{el.payableSalary} Tk.</td>
              <td className="text-[#7201FF] dark:text-[#EBD9FF] font-medium">
                {el.transactionId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
    </div>
  );
};

export default PaymentRecord;
