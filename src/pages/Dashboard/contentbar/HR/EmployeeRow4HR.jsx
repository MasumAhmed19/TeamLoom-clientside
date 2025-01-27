import { FaSquareArrowUpRight } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";


const EmployeeRow4HR = ({ el, idx, handleVerify, handleDetail, setIsDetailModalOpen, setCurrentData, setIsPaymentModalOpen, handlePayRequest }) => {
  return (
    <tr
      className="hover:bg-purple-50 transition-all duration-200"
    >
      <td>{idx + 1}</td>

      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-10 w-10">
              <img
                src={el?.profileURL}
                alt="Profile image"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{el?.name}</div>
            <div className="text-sm opacity-50">Bangladesh</div>
          </div>
        </div>
      </td>

      <td>
        <span className="">{el?.bank_account || "N/A"}</span>
      </td>

      <td>
        <span className="font-medium cursor-pointer" onClick={()=>handleVerify(el?._id)}>
          {el?.isVerified ? (
            <span className="flex items-center gap-1"> 
                <IoCheckmarkCircle className="text-lg text-[#7201FF]" /> <p className="text-slate-500">verifed</p>
            </span>
          ) : (
            <button className=" bg-[#7201ff] text-white px-1 rounded">Verify now</button>
          )}
        </span>
      </td>

      <td>
        <span className=" w-fit">{el?.designation || "N/A"}</span>
      </td>

      <td>
        <span className="font-medium">
          {el?.salary ? `$${el?.salary}` : "N/A"}
        </span>
      </td>

      <td>
        {
          el?.isVerified ? <button className="highlight1 flex items-center gap-2"
          onClick={() => {setCurrentData(el); handlePayRequest(el?._id); setIsPaymentModalOpen(true)}}
          >Make Request <FaSquareArrowUpRight /></button> 
          :
          <button disabled className="bg-[#dbdbdb] text-[#999999] px-[10px] py-[1px] rounded-full flex items-center gap-2"
        onClick={() => {setCurrentData(el); handlePayRequest(el?._id); setIsPaymentModalOpen(true)}}
        >Make Request <FaSquareArrowUpRight /></button>
        }
        
      </td>
      
      <td>
        <button
          className="highlight1 flex items-center gap-2"
          onClick={() => {setCurrentData(el); handleDetail(el?._id); setIsDetailModalOpen(true)}}
        >
          Detail
          <FaSquareArrowUpRight />
        </button>
      </td>
    </tr>
  );
};

export default EmployeeRow4HR;
