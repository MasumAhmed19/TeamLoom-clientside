
const PaymentHistoryRow = ({el, idx}) => {
    return (
         <tr
              className="hover:bg-purple-50 dark:hover:bg-black transition-all duration-200 dark:border-[#4B5563]"
            >
              <td>{idx + 1}</td>
        
              <td>
                <div className="font-bold">{el?.employee_name}</div>
              </td>
        
              <td>
                <span className="">{el?.employee_designation}</span>
              </td>

              <td>
                <span className="">{el?.employee_bank_acc}</span>
              </td>

              <td>
                <span className="">{el?.month}, {el?.year}</span>
              </td>

              <td>
                <span className="">${el?.payableSalary}</span>
              </td>

              <td>
                {
                    el?.status==='pending' ? 
                    <span className="bg-yellow-200 dark:text-black px-1 rounded-md capitalize">{el?.status}</span> 
                    :
                    <span className="bg-[#e9d8ff] text-[#7201FF] px-1 rounded-full capitalize">{el?.status}</span> 
                }
                
              </td>
            </tr>
    );
};

export default PaymentHistoryRow;