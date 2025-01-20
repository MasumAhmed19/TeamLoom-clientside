import { IoCloseSharp, IoLogOut } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { RiLogoutBoxFill } from "react-icons/ri";

import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useEmployeeDet from "../../../hooks/useEmployeeDet";

const Sidebar = ({ onClose }) => {
  const { user, logOut } = useAuth();
  const {isAdmin, isHR, loading} = useEmployeeDet(user?.email)

  const admin = [
    { name: "Profile", path: "/dashboard/profile", icon: <RiDashboardFill /> },
    {
      name: "Employee List",
      path: "/dashboard/employee-list",
      icon: <RiDashboardFill />,
    },
    { name: "Payroll", path: "/dashboard/payroll", icon: <RiDashboardFill /> },
    {
      name: "Notifications",
      path: "/dashboard/notifications",
      icon: <RiDashboardFill />,
    },
  ];

  const hr = [
    { name: "Profile", path: "/dashboard/profile", icon: <RiDashboardFill /> },
    {
      name: "Employee List",
      path: "/dashboard/employee-list",
      icon: <RiDashboardFill />,
    },
    {
      name: "Payment History",
      path: "/dashboard/payment-history",
      icon: <RiDashboardFill />,
    },
    {
      name: "Progress",
      path: "/dashboard/progress ",
      icon: <RiDashboardFill />,
    },
    {
      name: "Notifications",
      path: "/dashboard/notifications",
      icon: <RiDashboardFill />,
    },
  ];

  const employee = [
    { name: "Profile", path: "/dashboard/profile", icon: <RiDashboardFill /> },
    { name: "Task", path: "/dashboard/task", icon: <RiDashboardFill /> },
    {
      name: "Payment History",
      path: "/dashboard/payment-history",
      icon: <RiDashboardFill />,
    },
    { name: "Payroll", path: "/dashboard/payroll", icon: <RiDashboardFill /> },
    {
      name: "Notifications",
      path: "/dashboard/notifications",
      icon: <RiDashboardFill />,
    },
  ];

  return (
    <div className="overflow-y-auto h-full p-5 text-black md:w-[300px] bg-white rounded-lg ">
      {/* ei div only mobile e show krbe Close Button for Mobile */}
      <div className="flex justify-between items-center md:hidden mb-4">
        <Link
          to="/"
          className="flex items-center gap-2 w-full"
        >
          <img
            src="https://i.ibb.co.com/6H7FBtf/logo.png"
            alt=""
            className="w-10"
          />
          <h2 className="f2 text-3xl">TeamLoom</h2>
        </Link>
        <button
          className="p-2 text-black w-full flex justify-end"
          onClick={onClose}
        >
          <IoCloseSharp className="text-2xl" />
        </button>
        <hr />
      </div>

      {/* Sidebar Full Content */}
      <div className="space-y-5">
        <div className="flex flex-col gap-5">
          {/* <div className="hidden md:block">
                    <Link to='/' className="flex items-center gap-2 w-full">
                        <img src="https://i.ibb.co.com/6H7FBtf/logo.png" alt="" className="w-8"/>
                        <h2 className="f2 text-3xl">TeamLoom</h2>
                    </Link>
                </div> */}

          <div className="flex gap-1 items-center">
            <div className="">
              <img
                src={`${user?.photoURL}`}
                alt=""
                className="w-10 h-10 object-cover rounded-full"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex gap-2">
                <h2 className="text-md font-semibold">{`${user?.displayName}`}</h2>
                {loading ? (
                  <span className="loading loading-bars loading-xs"></span>
                ) : isAdmin ? (
                  <h2 className="tag-highlight text-xs">Admin</h2>
                ) : isHR ? (
                  <h2 className="tag-highlight text-xs">HR</h2>
                ) : (
                  <h2 className="tag-highlight text-xs">Employee</h2>
                )}
              </div>
              <h2 className="text-xs text-slate-400">{`${user?.email}`}</h2>
            </div>
          </div>
          <ul className="space-y-3 ">
            {admin.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className="flex text-sm items-center gap-1 text-md p-1 text-gray-500"
                >
                  {item.icon} {item.name}
                </NavLink>
              </li>
            ))}

            <NavLink
              to="/"
              className="flex items-center gap-1 text-md p-1 text-gray-500"
              onClick={logOut}
            >
              <RiLogoutBoxFill /> Logout
            </NavLink>
          </ul>
        </div>

        <div className="hidden md:flex absolute bottom-5  justify-between w-[calc(100vw-32px)] md:w-4/5">
          <Link
            to="/"
            className="flex items-center gap-2 w-full"
          >
            <img
              src="https://i.ibb.co.com/6H7FBtf/logo.png"
              alt=""
              className="w-8"
            />
            <h2 className="f2 text-3xl">TeamLoom</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
