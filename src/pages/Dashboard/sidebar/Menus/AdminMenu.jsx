import { FaRegUser, FaListUl } from "react-icons/fa";
import { MdPayment, MdOutlineNotificationsActive } from "react-icons/md";
import { GrPieChart } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const AdminMenu = ({ onClose }) => {
  const admin = [
    { name: "Profile", path: "/dashboard/profile", icon: <FaRegUser /> },
    { name: "Statistics", path: "/dashboard/statistics", icon: <GrPieChart /> },
    { name: "Employee List", path: "/dashboard/employee-list", icon: <FaListUl /> },
    { name: "Payroll", path: "/dashboard/payroll", icon: <MdPayment /> },
    { name: "Notifications", path: "/dashboard/notifications", icon: <MdOutlineNotificationsActive /> },
  ];

  return (
    <ul className="space-y-2">
      {admin.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            onClick={onClose}
            className="flex items-center gap-2 text-sm p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#8F03FF] rounded-lg transition duration-200"
          >
            <span className="text-base text-[#7250FF] dark:text-white">{item.icon}</span>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default AdminMenu;








// import { FaRegUser } from "react-icons/fa";
// import { FaListUl } from "react-icons/fa";
// import { MdPayment } from "react-icons/md";
// import { MdOutlineNotificationsActive } from "react-icons/md";
// import { NavLink } from "react-router-dom";
// import { GrPieChart } from "react-icons/gr";



// const AdminMenu = ({onClose}) => {
//     const admin = [
//       { name: "Profile", path: "/dashboard/profile", icon: <FaRegUser /> },
//       { name: "Statistics", path: "/dashboard/statistics", icon: <GrPieChart /> },
//         {
//           name: "Employee List",
//           path: "/dashboard/employee-list",
//           icon: <FaListUl />,
//         },
//         { name: "Payroll", path: "/dashboard/payroll", icon: <MdPayment /> },
//         {
//           name: "Notifications", path: "/dashboard/notifications", icon: <MdOutlineNotificationsActive />,
//         },
//       ];

//     return (
        
//         <>
//             {admin.map((item) => (
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

// export default AdminMenu;