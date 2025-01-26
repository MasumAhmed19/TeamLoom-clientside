import { FaRegUser } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";


const AdminMenu = ({onClose}) => {
    const admin = [
        { name: "Profile", path: "/dashboard/profile", icon: <FaRegUser /> },
        {
          name: "Employee List",
          path: "/dashboard/employee-list",
          icon: <FaListUl />,
        },
        { name: "Payroll", path: "/dashboard/payroll", icon: <MdPayment /> },
        {
          name: "Notifications", path: "/dashboard/notifications", icon: <MdOutlineNotificationsActive />,
        },
      ];

    return (
        
        <>
            {admin.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className="flex text-sm items-center gap-1 text-md p-1 text-gray-500"
                >
                  <h4 className="flex items-center gap-2"><span className="text-base text-[#7250FF]">{item.icon}</span> {item.name}</h4>
                </NavLink>
              </li>
            ))}

        </>
    );
};

export default AdminMenu;