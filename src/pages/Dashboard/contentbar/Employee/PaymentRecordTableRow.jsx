import React from "react";

const PaymentRecordTableRow = ({ paymentRecords }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* Table Head */}
        <thead className="bg-[#EBD9FF] dark:bg-[#8F03FF] dark:text-white text-[#7201FF] p-[1px]">
          <tr>
            <th>No</th>
            <th>Month</th>
            <th>Year</th>
            <th>Transaction ID</th>
          </tr>
        </thead>

        <tbody>
          {paymentRecords.map((el, idx) => (
            <tr
              key={el._id}
              className="hover:bg-purple-50 dark:hover:bg-black transition-all duration-200 dark:border-[#4B5563]"
            >
              <td>{idx + 1}</td>
              <td>{el.month}</td>
              <td>{el.year}</td>
              <td className="text-[#7201FF] dark:text-[#EBD9FF] font-medium">
                {el.transactionId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentRecordTableRow;
