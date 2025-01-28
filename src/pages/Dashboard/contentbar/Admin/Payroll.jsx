import { Helmet } from "react-helmet-async";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PayrollTableRow from "./PayrollTableRow";
import { useState } from "react";
import PopModal from "../../../../components/pop-up/PopModal";
import { FaTelegramPlane } from "react-icons/fa";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../../../components/CheckoutForm/CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Payroll = () => {
  const { user } = useAuth();
  const [currentData, setCurrentData] = useState(null);
  const [paymentModal, setPaymentModal] = useState(false);

  const {
    data: allPayrollData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-payment-request`
      );
      return response.data;
    },
  });

  console.log(allPayrollData);

  const handlePayment = (id) => {
    console.log(id);
    console.log(currentData);
  };

  return (
    <div className="mt-5 space-y-5">
      <Helmet>
        <title>Payroll</title>
      </Helmet>
      <div className="border p-5 rounded-lg">
        <table className="table">
          {/* head */}
          <thead className="bg-[#EBD9FF] text-[#7201FF] p-[1px]">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Month, Year</th>
              <th>Amount</th>
              <th>Transaction Id</th>
              <th>Pay Now</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {allPayrollData.map((el, idx) => (
              <PayrollTableRow
                key={el?._id}
                el={el}
                idx={idx}
                handlePayment={handlePayment}
                setCurrentData={setCurrentData}
                setPaymentModal={setPaymentModal}
              />
            ))}
          </tbody>
        </table>
      </div>

      <>
        {/* Delete Modal */}
        <PopModal
          isOpen={paymentModal}
          closeModal={() => setPaymentModal(false)}
          title="Complete Payroll"
        >
          <div className="">
            <div className="overflow-x-auto">
              <div className="mt-4 text-sm text-gray-600 flex flex-col items-center gap-1">
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <tbody className="w-full">
                      <tr>
                        <td className="p-2 font-semibold">Employee ID: </td>
                        <td className="p-2">{currentData?.employee_id}</td>
                      </tr>

                      <tr>
                        <td className="p-2 font-semibold">Employee Name: </td>
                        <td className="p-2">{currentData?.employee_name}</td>
                      </tr>

                      <tr>
                        <td className="p-2 font-semibold">
                          Bank Account Number:{" "}
                        </td>
                        <td className="p-2">
                          {currentData?.employee_bank_acc}
                        </td>
                      </tr>

                      <tr>
                        <td className="p-2 font-semibold">Designation: </td>
                        <td className="p-2">
                          {currentData?.employee_designation}
                        </td>
                      </tr>

                      <tr>
                        <td className="p-2 font-semibold">Salary</td>
                        <td className="p-2">${currentData?.payableSalary}</td>
                      </tr>
                    </tbody>
                  </table>

                  {/* stripe CheckOut Form */}

                    <div className="py-4">

                    </div>
                    
                  <Elements
                    stripe={stripePromise}
                  >
                    {/* <CheckoutForm /> */}
                    <CheckoutForm  currentData={currentData} refetch={refetch}/>
                  </Elements>
                </div>
              </div>
            </div>
          </div>
        </PopModal>
      </>
    </div>
  );
};

export default Payroll;
