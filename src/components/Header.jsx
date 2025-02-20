import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { FaHome, FaTachometerAlt, FaAddressCard, FaInfoCircle, FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import { RiContactsBook3Line, RiHome9Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";


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
    <div className="flex flex-col lg:flex-row gap-5 text-lg font-bold">
      <div className="group relative inline-block">
        <Link className="" to="/">
          home
        </Link>
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-11/12"></span>
      </div>

      <div className="group relative inline-block">
        <Link className="" to="/contact">
          contact
        </Link>
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-11/12"></span>
      </div>

      <div className="group relative inline-block">
        <Link className="" to="/dashboard/profile">
          dashboard
        </Link>
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-11/12"></span>
      </div>

      {user ? (
        <div onClick={logOut} className="group relative inline-block">
          <Link className="" to="/">
            logout
          </Link>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-11/12"></span>
        </div>
      ) : (
        <div className="group relative inline-block">
          <Link className="" to="/login">
            login
          </Link>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-11/12"></span>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-transparent relative z-[1000]">
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
                <img src="https://i.ibb.co.com/6H7FBtf/logo.png" className="w-8" alt="Logo" />
                <h4 className="f1 text-xl font-bold">TeamLoom</h4>
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
                  referrerPolicy="no-referrer"
                  src={`${user?.photoURL}`}
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 hover:shadow-md transition-all duration-200"
                  alt="User Profile"
                />
              )}
            </div>
          </div>
        </div>


        {/* Sidebar menu */}
        <div className="drawer-side z-[10000]">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-black text-white min-h-full w-80 p-4 space-y-4 f1">
            {/* Sidebar Header */}
            <li className="text-center text-lg font-semibold mt-5 mb-6">
              <Link className="flex items-center gap-1">
                <img src="/src/assets/logo.png" className="w-8" alt="Logo" />
                <h4 className="f2 text-xl pl-1">TeamLoom</h4>
              </Link>
            </li>

            {/* Sidebar Items */}
            <li>
              <Link to="/" className="flex text-md items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
                <RiHome9Line className=" text-white" /> Home
              </Link>
            </li>
            
                <li>
                  <Link to="/dashboard/profile" className="flex text-md items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
                  <RxDashboard />
                    Dashboard
                  </Link>
                </li>
            
            <li>
              <Link to="/contact" className="flex text-md items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
                  <RiContactsBook3Line className=" text-white" /> Contact
              </Link>
            </li>
            {/* <li>
              <Link to="/about" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
                <FaInfoCircle />
                About
              </Link>
            </li> */}

            {/* Conditional Login/Logout */}
            {
              !user && (
                <>
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
                </>
              )
            }
            {
              user && 
              <li>
                <Link to="/" onClick={logOut} className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md text-red-400">
                  <FaSignOutAlt />
                  Logout
                </Link>
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
