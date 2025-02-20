import { FaRegUser, FaListUl } from "react-icons/fa";
import { MdPayment, MdOutlineNotificationsActive } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const HRmenu = ({ onClose }) => {
  const hr = [
    { name: "Profile", path: "/dashboard/profile", icon: <FaRegUser /> },
    { name: "Employee List", path: "/dashboard/employee-list", icon: <FaListUl /> },
    { name: "Payment Request", path: "/dashboard/payment-request", icon: <MdPayment /> },
    { name: "Progress", path: "/dashboard/progress", icon: <GiProgression /> },
    { name: "Notifications", path: "/dashboard/notifications", icon: <MdOutlineNotificationsActive /> },
  ];

  return (
    <ul className="space-y-2">
      {hr.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            onClick={onClose}
            className="flex items-center gap-2 text-sm p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition duration-200"
          >
            <span className="text-base text-[#7250FF]">{item.icon}</span>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default HRmenu;










// import { FaRegUser } from "react-icons/fa";
// import { FaListUl } from "react-icons/fa";
// import { MdPayment } from "react-icons/md";
// import { GiProgression } from "react-icons/gi";
// import { MdOutlineNotificationsActive } from "react-icons/md";
// import { NavLink } from "react-router-dom";


// const HRmenu = ({onClose}) => {
//   const hr = [
//     { name: "Profile", path: "/dashboard/profile", icon: <FaRegUser /> },
//     {
//       name: "Employee List",
//       path: "/dashboard/employee-list",
//       icon: <FaListUl />,
//     },
//     {
//       name: "Payment Request",
//       path: "/dashboard/payment-request",
//       icon: <MdPayment />,
//     },
//     {
//       name: "Progress",
//       path: "/dashboard/progress",
//       icon: <GiProgression />,
//     },
//     {
//       name: "Notifications",
//       path: "/dashboard/notifications",
//       icon: <MdOutlineNotificationsActive />,
//     },
//   ];

//     return (
        
//         <>
//             {hr.map((item) => (
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

// export default HRmenu;