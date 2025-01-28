import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import TableLoader from "../../../../components/Loader/TableLoader";
import { useQuery } from "@tanstack/react-query";
import EmployeeRow4HR from "./EmployeeRow4HR";
import PopModal from "../../../../components/pop-up/PopModal";
import {
  IoCallOutline,
  IoCheckmarkCircle,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { format } from "date-fns";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const EmployeeListTableAdmin = () => {
  const { user } = useAuth();
  const [detData, setDetData] = useState([]);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [startDate, setStartDate] = useState(new Date())
  const axiosSecure = useAxiosSecure()


  const {
    data: allEmployee = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allEmployee", user?.email],
    queryFn: async () => {
      const response = await axiosSecure(`/only-employees`);
      return response.data;
    },
  });

  console.log(allEmployee);

  const handleDetail = async (id) => {
    console.log(currentData);
  };

  const handlePayRequest = (id) => {
    console.log(id);
  };

  const handleSalarySubmit = async (e)=>{
    e.preventDefault();
    const form = e.target;
    const month = form.month.value;
    const year = form.year.value;
    const employee_id = currentData?._id;
    const employee_name = currentData?.name;
    const employee_designation= currentData?.designation;
    const employee_bank_acc = currentData?.bank_account;
    const isComplete = false;
    const reqDate = format(startDate, "dd-MM-yyyy");
    const payableSalary = currentData?.salary
    const status = 'pending';
    const transactionId= '-';

    const payData = {
      month,
      year,
      employee_id,
      employee_name,
      employee_designation,
      employee_bank_acc,
      isComplete,
      payableSalary,
      reqDate,
      transactionId,
      status
    }
    
    try{
      const result = await axios.post(`${import.meta.env.VITE_API_URL}/payment-req`, payData)
      console.log(result)
      if(result.data.acknowledged){
        toast.success('Requested for the payment')
        setIsPaymentModalOpen(false)
      }
    }catch (err) {
      // Log the error
      console.error(err);

      if (err.response && err.response.status === 400) {
        const errorMessage = err.response.data?.message || "An error occurred.";
        if (errorMessage === "Payment Exists") {
          toast.error("Payment request already exists for this month and year.");
        } else {
          toast.error(errorMessage);
        }
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    }
  }

  const handleVerify = async (id) => {
    try {
      const result = await axios.patch(
        `${import.meta.env.VITE_API_URL}/verify/${id}`
      );
      console.log(result);
      refetch();
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
                <th>No</th>
                <th>Name</th>
                <th>Bank Account No</th>
                <th>Verify</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>Salary Request</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              {/* row 1 */}
              {allEmployee.map((el, idx) => (
                <EmployeeRow4HR
                  key={el?._id}
                  el={el}
                  idx={idx}
                  handleVerify={handleVerify}
                  handleDetail={handleDetail}
                  setCurrentData={setCurrentData}
                  setIsDetailModalOpen={setIsDetailModalOpen}
                  setIsPaymentModalOpen={setIsPaymentModalOpen}
                  handlePayRequest={handlePayRequest}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      <>
        {/* Detail Modal */}
        <PopModal
          isOpen={isDetailModalOpen}
          closeModal={() => setIsDetailModalOpen(false)}
          title="Employee Detail"
        >
          <div className="flex flex-col items-center p-6 bg-white rounded-xl max-w-md mx-auto">
            {/* Profile Image */}
            <div className="relative w-36 h-36">
              <img
                src={currentData?.profileURL}
                alt="User"
                className="w-full h-full rounded-full border-4 border-[#7201FF] object-cover"
              />
            </div>

            {/* User Info */}
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-end justify-center gap-2">
                {currentData?.name}{" "}
                {currentData?.isVerified && (
                  <MdVerified className="text-base mb-1 text-[#7201ff]" />
                )}
              </h2>
              <p className="text-gray-600 mt-2">
                His honesty and truthfulness contribute significantly to the
                company's growth and success.
              </p>

              {/* Details */}
              <div className="mt-4 text-sm text-gray-600 flex flex-col items-center gap-1">
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <tbody>
                      <tr>
                        <td className="p-2 font-semibold">ID</td>
                        <td className="p-2">{currentData?._id || "N/A"}</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-semibold">Email</td>
                        <td className="p-2">{currentData?.email || "N/A"}</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-semibold">Designation</td>
                        <td className="p-2">
                          {currentData?.designation || "N/A"}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 font-semibold">Salary</td>
                        <td className="p-2">${currentData?.salary || "N/A"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="gap-2 w-full m-2">
                  <h2 className=" text-center flex items-center justify-center gap-1 highlight1 font-medium">
                    Say Something <FaTelegramPlane />{" "}
                  </h2>
                </div>
                {/* TODO: send message to employee */}
              </div>
            </div>
          </div>
        </PopModal>

        {/* Pay Request Modal */}
        <PopModal
          isOpen={isPaymentModalOpen}
          closeModal={() => setIsPaymentModalOpen(false)}
          title="Salary Request"
        >
          <div>
            {/* Profile Image */}
            <div className="flex flex-col md:flex-row items-center p-6 bg-white rounded-xl  mx-auto">
              <div className="w-full">
                <div className="relative w-36 h-36">
                  <img
                    src={currentData?.profileURL}
                    alt="User"
                    className="w-full h-full rounded-full border-4 border-[#7201FF] object-cover"
                  />
                </div>
              </div>
              {/* User Info */}
              <div className="w-full text-center mt-4">
                <h2 className="text-xl font-semibold text-gray-800 flex items-end justify-center gap-2">
                  {currentData?.name}{" "}
                  {currentData?.isVerified && (
                    <MdVerified className="text-base mb-1 text-[#7201ff]" />
                  )}
                </h2>

                {/* Details */}
                <div className="mt-4 text-sm text-gray-600 flex flex-col items-center gap-1">
                  <div className="overflow-x-auto">
                    <table className="table w-full">
                      <tbody>
                        <tr>
                          <td className="p-2 font-semibold">ID</td>
                          <td className="p-2">{currentData?._id || "N/A"}</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-semibold">Email</td>
                          <td className="p-2">{currentData?.email || "N/A"}</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-semibold">Designation</td>
                          <td className="p-2">
                            {currentData?.designation || "N/A"}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 font-semibold">Salary</td>
                          <td className="p-2">
                            ${currentData?.salary || "N/A"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 bg-slate-50 p-4 rounded-md">
              <h2 className="text-center">Please put year and month for making salary request</h2>
              <form onSubmit={handleSalarySubmit}>
                <div className="flex gap-3">
                  <div className="form-control w-full">
                    <select
                      defaultValue="default"
                      className="select select-bordered w-full"
                      name="month"
                    >
                      <option
                        disabled
                        value="default"
                      >
                        Month
                      </option>
                      <option value="january">January</option>
                      <option value="february">February</option>
                      <option value="march">March</option>
                      <option value="april">April</option>
                      <option value="may">May</option>
                      <option value="june">June</option>
                      <option value="july">July</option>
                      <option value="august">August</option>
                      <option value="september">September</option>
                      <option value="october">October</option>
                      <option value="november">November</option>
                      <option value="december">December</option>
                    </select>
                  </div>

                  <div className="form-control w-full">
                    <input type="text" name="year" placeholder="Year" className="input input-bordered w-full px-4 py-2 border rounded-md" required />
                  </div>

                </div>

                <button className="btn2" type='submit'>Make Request</button>
                
              </form>
            </div>
          </div>
        </PopModal>
      </>
    </div>
  );
};

export default EmployeeListTableAdmin;
