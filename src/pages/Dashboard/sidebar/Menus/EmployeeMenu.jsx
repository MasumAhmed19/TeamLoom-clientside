import { FaRegUser, FaTasks } from "react-icons/fa";
import { MdPayment, MdOutlineNotificationsActive } from "react-icons/md";
import { NavLink } from "react-router-dom";

const EmployeeMenu = ({ onClose }) => {
  const employee = [
    { name: "Profile", path: "/dashboard/profile", icon: <FaRegUser /> },
    { name: "Task", path: "/dashboard/task", icon: <FaTasks /> },
    { name: "Payment History", path: "/dashboard/payment-record", icon: <MdPayment /> },
    { name: "Notifications", path: "/dashboard/notifications", icon: <MdOutlineNotificationsActive /> },
  ];

  return (
    <ul className="space-y-2">
      {employee.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            onClick={onClose}
            className="flex items-center gap-2 text-sm p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition duration-200"
          >
            <span className="text-base text-[#7250FF] dark:text-white">{item.icon}</span>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default EmployeeMenu;







// import { FaRegUser } from "react-icons/fa";
// import { FaTasks } from "react-icons/fa";
// import { MdPayment } from "react-icons/md";
// import { MdOutlineNotificationsActive } from "react-icons/md";
// import { NavLink } from "react-router-dom";


// const EmployeeMenu = ({onClose}) => {
//     const employee = [
//         { name: "Profile", path: "/dashboard/profile", icon: <FaRegUser />},
//         { name: "Task", path: "/dashboard/task", icon: <FaTasks />},
//         {
//           name: "Payment History",
//           path: "/dashboard/payment-record",
//           icon: <MdPayment /> ,
//         },
//         {
//           name: "Notifications",
//           path: "/dashboard/notifications",
//           icon: <MdOutlineNotificationsActive />,
//         },
//     ];

//     return (
        
//         <>
//             {employee.map((item) => (
//               <li key={item.path}>
//                 <NavLink
//                   to={item.path}
//                   onClick={onClose}
//                   className="flex text-sm items-center gap-1 text-md p-1 text-gray-500"
//                 >
//                   <h4 className="flex items-center gap-2"><span className="text-base text-[#7250FF]">{item.icon}</span> {item.name}</h4>
//                 </NavLink>
//               </li>
//             ))}

//         </>
//     );
// };

// export default EmployeeMenu;