import { IoCloseSharp } from "react-icons/io5";
import { RiLogoutBoxLine, RiHome9Line, RiContactsBook3Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import EmployeeMenu from "./Menus/EmployeeMenu";
import HRmenu from "./Menus/HRMenu";
import AdminMenu from "./Menus/AdminMenu";

const Sidebar = ({ onClose }) => {
  const { user, logOut } = useAuth();
  const [role, isLoading] = useRole();

  return (
    <div className="overflow-y-auto mt-2 h-full p-5 text-black dark:text-white md:w-[300px] bg-white dark:bg-[#262626] rounded-lg">
      {/* Close Button for Mobile */}
      {/* <div className=" flex justify-between items-center md:hidden mb-4">
        <Link to="/" className="flex items-center gap-2 w-full">
          <img
            src="https://i.ibb.co.com/6H7FBtf/logo.png"
            alt="Logo"
            className="w-10"
          />
          <h2 className="f2 text-3xl">TeamLoom</h2>
        </Link>
        <button className="p-2 dark:text-white w-full flex justify-end" onClick={onClose}>
          <IoCloseSharp className="text-2xl" />
        </button>
        <hr className="border-gray-300 dark:border-gray-600" />
      </div> */}

      {/* Sidebar Full Content */}
      <div className="space-y-5">
        <div className="flex flex-col gap-5">
          <div className="flex gap-3 items-center ">
            <img
              referrerPolicy="no-referrer"
              src={user?.photoURL}
              alt="User"
              className="w-10 h-10 object-cover rounded-full border dark:border-gray-500"
            />
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <h2 className="text-md font-semibold">{user?.displayName}</h2>
                {isLoading ? (
                  <span className="loading loading-bars loading-xs"></span>
                ) : (
                  <h5 className="bg-[#8F03FF] text-white px-2 py-1 rounded-full text-sm">
                    {role}
                  </h5>
                )}
              </div>
              <h2 className="text-xs text-gray-500 dark:text-gray-300 mt-1">{user?.email}</h2>
            </div>
          </div>

          <ul className="space-y-3">
            {role === "employee" && <EmployeeMenu onClose={onClose} />}
            {role === "hr" && <HRmenu onClose={onClose} />}
            {role === "admin" && <AdminMenu onClose={onClose} />}

            <div className="py-4"></div>
            <hr className="border-gray-300 dark:border-gray-600" />

            <Link
              to="/"
              className="flex items-center gap-2 text-md p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
            >
              <RiHome9Line className="text-lg dark:text-white text-[#7250FF]" /> Home
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-2 text-md p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
            >
              <RiContactsBook3Line className="text-lg dark:text-white text-[#7250FF]" /> Contact
            </Link>

            <NavLink
              to="/"
              className="flex items-center gap-2 text-md p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
              onClick={logOut}
            >
              <RiLogoutBoxLine className="text-lg dark:text-white text-[#7250FF]" /> Logout
            </NavLink>
          </ul>
        </div>

        {/* Footer */}
        <div className="md:flex absolute bottom-5 justify-between w-[calc(100vw-32px)] md:w-4/5">
          <Link to="/" className="flex items-center gap-2 w-full">
            <img
              src="https://i.ibb.co.com/6H7FBtf/logo.png"
              alt="Logo"
              className="w-8"
            />
            <h2 className="f2 text-2xl">TeamLoom</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;










// import { IoCloseSharp } from "react-icons/io5";
// import { RiLogoutBoxLine } from "react-icons/ri";
// import { Link, NavLink } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";
// import useRole from "../../../hooks/useRole";
// import EmployeeMenu from "./Menus/EmployeeMenu";
// import HRmenu from "./Menus/HRMenu";
// import AdminMenu from "./Menus/AdminMenu";
// import { RiHome9Line } from "react-icons/ri";
// import { RiContactsBook3Line } from "react-icons/ri";



// const Sidebar = ({ onClose }) => {
//   const { user, logOut } = useAuth();
//   const  [role, isLoading] = useRole()

//   return (
//     <div className="overflow-y-auto h-full p-5 text-black md:w-[300px] bg-white dark:bg-[#262626] dark:text-white rounded-lg ">
//       {/* ei div only mobile e show krbe Close Button for Mobile */}
//       <div className="flex justify-between items-center md:hidden mb-4">
//         <Link
//           to="/"
//           className="flex items-center gap-2 w-full"
//         >
//           <img
//             src="https://i.ibb.co.com/6H7FBtf/logo.png"
//             alt=""
//             className="w-10"
//           />
//           <h2 className="f2 text-3xl">TeamLoom</h2>
//         </Link>
//         <button
//           className="p-2 text-black w-full flex justify-end"
//           onClick={onClose}
//         >
//           <IoCloseSharp className="text-2xl" />
//         </button>
//         <hr />
//       </div>

//       {/* Sidebar Full Content */}
//       <div className="space-y-5">
//         <div className="flex flex-col gap-5">

//           <div className="flex gap-1 items-center">
//             <div className="">
//               <img
//                 referrerPolicy="no-referer"
//                 src={`${user?.photoURL}`}
//                 alt=""
//                 className="w-10 h-10 object-cover rounded-full"
//               />
//             </div>

//             <div className="flex flex-col">
//               <div className="flex gap-2">
//                 <h2 className="text-md font-semibold">{`${user?.displayName}`}</h2>
//                 {isLoading ? (
//                   <span className="loading loading-bars loading-xs"></span>
//                 ) : <h5 className="tag-highlight">{role}</h5>}
//               </div>
//               <h2 className="text-xs text-slate-400">{`${user?.email}`}</h2>
//             </div>
//           </div>
//           <ul className="space-y-3 ">

//             {role==='employee' && <EmployeeMenu onClose={onClose} />}
//             {role==='hr' && <HRmenu onClose={onClose} />}
//             {role==='admin' && <AdminMenu onClose={onClose} />}

//             <div className="py-4"></div>
//             <hr className="" />

//             <Link
//               to="/"
//               className="flex items-center gap-1 text-md p-1 text-gray-500"
//             >
//               <RiHome9Line className="text-base text-[#7250FF]" /> Home
//             </Link>

//             <Link
//               to="/contact"
//               className="flex items-center gap-1 text-md p-1 text-gray-500"
//             >
//               <RiContactsBook3Line className="text-base text-[#7250FF]" /> Contact
//             </Link>

//             <NavLink
//               to="/"
//               className="flex items-center gap-1 text-md p-1 text-gray-500"
//               onClick={logOut}
//             >
//               <RiLogoutBoxLine className="text-base text-[#7250FF]" /> Logout
//             </NavLink>



//           </ul>
//         </div>

//         <div className="hidden md:flex absolute bottom-5  justify-between w-[calc(100vw-32px)] md:w-4/5">
//           <Link
//             to="/"
//             className="flex items-center gap-2 w-full"
//           >
//             <img
//               src="https://i.ibb.co.com/6H7FBtf/logo.png"
//               alt=""
//               className="w-8"
//             />
//             <h2 className="f2 text-3xl">TeamLoom</h2>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
