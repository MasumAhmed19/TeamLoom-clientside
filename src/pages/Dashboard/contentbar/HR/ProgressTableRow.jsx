import { format, parse } from 'date-fns';

const ProgressTableRow = ({ el, idx }) => {
  // Parse the custom date format first
  const parsedDate =
    el?.date &&
    parse(el.date, 'dd-MM-yyyy, hh:mma', new Date()); // Parse using the custom format

  // Format the parsed date
  const formateDate = parsedDate && format(parsedDate, 'dd/MM/yyyy');

  return (
    <tr className="hover:bg-purple-50 dark:hover:bg-black transition-all duration-200 dark:border-[#4B5563]">
      <td>{idx + 1}</td>

      <td>
        <div className="font-bold">{el?.employeeName}</div>
      </td>

      <td>
        <span className="">{el?.employeeEmail}</span>
      </td>

      <td>
        <span className="">{el?.task}</span>
      </td>

      <td>
        <span className="">{el?.hoursWorked}</span>
      </td>

      <td>
        <span className="">{formateDate}</span>
      </td>
    </tr>
  );
};

export default ProgressTableRow;
