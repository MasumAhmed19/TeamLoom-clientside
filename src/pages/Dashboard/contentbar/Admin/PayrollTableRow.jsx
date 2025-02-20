import { MdPayment } from "react-icons/md";
import { IoCheckmarkSharp } from "react-icons/io5";


const PayrollTableRow = ({ el, idx, handlePayment, setCurrentData, setPaymentModal }) => {
  return (
    <tr className="hover:bg-purple-50 dark:hover:bg-black transition-all duration-200 dark:border-[#4B5563]">
      <td>{idx + 1}</td>

      <td>
        <div className="font-bold">{el?.employee_name}</div>
      </td>

      <td>
        <span className="">{el?.employee_designation}</span>
      </td>

      <td>
        <span className="">
          {el?.month},{el?.year}
        </span>
      </td>

      <td>
        <span className="">{el?.payableSalary}</span>
      </td>
      <td>
        <span className="">{el?.transactionId}</span>
      </td>

      <td>

        {el?.isComplete ? (
          <span className="bg-[#e9d8ff] text-[#7201FF] px-1 rounded-full flex w-1/2  gap-1 capitalize">
                <IoCheckmarkSharp className="text-lg" /> Paid
          </span>
        ) : (
            <span
            className="capitalize flex items-center gap-1 cursor-pointer text-[#8C52FF]"
            onClick={() => {
              setCurrentData(el);
              setPaymentModal(true);
              handlePayment(el?._id);
            }}
          >
            <MdPayment className="text-lg " /> pay now
          </span>
        )}
      </td>

      <td>
        {el?.isComplete ? (
          <span className="bg-[#e9d8ff] text-[#7201FF] px-1 rounded-full capitalize">
            completed
          </span>
        ) : (
          <span className="bg-yellow-100 dark:text-black px-1 rounded-md capitalize">
            pending
          </span>
        )}
      </td>
    </tr>
  );
};

export default PayrollTableRow;
