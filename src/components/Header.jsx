import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { FaHome, FaTachometerAlt, FaAddressCard, FaInfoCircle, FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  const { user, logOut } = useAuth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const menus = (
    <div className="flex flex-col lg:flex-row gap-5 text-2xl f2">
      <div className="group relative inline-block">
        <NavLink className="" to="/">
          home
        </NavLink>
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-11/12"></span>
      </div>

      <div className="group relative inline-block">
        <NavLink className="" to="/contact">
          contact
        </NavLink>
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-11/12"></span>
      </div>

      <div className="group relative inline-block">
        <NavLink className="" to="/dashboard">
          dashboard
        </NavLink>
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-11/12"></span>
      </div>

      {user ? (
        <div onClick={logOut} className="group relative inline-block">
          <NavLink className="navlink" to="/">
            logout
          </NavLink>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-11/12"></span>
        </div>
      ) : (
        <div className="group relative inline-block">
          <NavLink className="navlink" to="/login">
            login
          </NavLink>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-11/12"></span>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-black">
      <div className="drawer container mx-auto">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar w-full text-white">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="mx-2 flex-1 px-2 flex justify-between items-center">
              <Link className="flex items-center gap-1">
                <img src="/src/assets/logo.png" className="w-8" alt="Logo" />
                <h4 className="f2 text-4xl">TeamLoom</h4>
              </Link>

              {isMobile && user && (
                <img
                  referrerPolicy="no-referrer"
                  src={`${user?.photoURL}`}
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 hover:shadow-md transition-all duration-200"
                  alt="User Profile"
                />
              )}
            </div>

            <div className="hidden lg:flex flex-none items-center justify-center gap-3">
              {/* Navbar menu content here */}
              {menus}

              {user && (
                <img
                  src={`${user?.photoURL}`}
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 hover:shadow-md transition-all duration-200"
                  alt="User Profile"
                />
              )}
            </div>
          </div>
        </div>

        {/* Sidebar menu */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-gray-900 text-white min-h-full w-80 p-4 space-y-4 f1">
            {/* Sidebar Header */}
            <li className="text-center text-lg font-semibold mb-6">
              <Link className="flex items-center gap-1">
                <img src="/src/assets/logo.png" className="w-8" alt="Logo" />
                <h4 className="f2 text-4xl">TeamLoom</h4>
              </Link>
            </li>

            {/* Sidebar Items */}
            <li>
              <Link to="/" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
                <FaHome />
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
                <FaTachometerAlt />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
                <FaAddressCard />
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
                <FaInfoCircle />
                About
              </Link>
            </li>

            {/* Conditional Login/Logout */}
            <li>
              <Link to="/login" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
                <FaSignInAlt />
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
                <FaUserPlus />
                Signup
              </Link>
            </li>
            <li>
              <Link to="/logout" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md text-red-400">
                <FaSignOutAlt />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
