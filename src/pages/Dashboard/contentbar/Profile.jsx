import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { BsThreeDots } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useDarkMode } from "../../../Context/DarkModeContext";
import useRole from "../../../hooks/useRole";
import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useEmployeeDet from "../../../hooks/useEmployeeDet";

const Profile = () => {
  const { user } = useAuth();
  const [role, isLoading] = useRole();
  const axiosSecure = useAxiosSecure();
  const [userData] = useEmployeeDet();

  return (
    <div className="mt-5 space-y-5">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="border dark:border-[#4B5563] p-5 rounded-lg bg-white dark:bg-[#262626]">
        <div className="">
          <div className="h-[100px] md:h-[180px] bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:10px_10px]"></div>
          <div className="flex items-start md:items-center justify-between -mt-10 lg:-mt-20 px-4 md:px-6 lg:px-10">
            <div className="flex flex-col items-start gap-4">
              <img
                src={`${user?.photoURL}`}
                alt=""
                className="w-[20vw] h-[20vw] md:w-[8vw] md:h-[8vw] object-cover rounded-full border-4 border-[#7201FF]"
              />
              <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">{`${user?.displayName}`}</h4>
              <p className="md:w-2/3 text-sm text-gray-500 dark:text-gray-400">
                A dedicated {`${role}`} who responsible for ensuring smooth
                operations, maintaining efficiency, and contributing to
                organizational success. Manages tasks, collaborates with others,
                and upholds company policies to foster a productive and positive
                work environment
              </p>
              <div className="flex flex-row flex-wrap gap-2 text-xs text-gray-700 dark:text-gray-300">
                {/* <h2 className="tag-highlight flex items-center gap-1">
                  <FaMapMarkerAlt /> Florida, USA 3564
                </h2> */}
                <h2 className="tag-highlight flex items-center gap-1">
                  <MdEmail /> {`${user?.email}`}
                </h2>
                <h2 className="tag-highlight flex items-center gap-1">
                  <FaPhoneSquareAlt /> 017 123 456 78
                </h2>
              </div>
            </div>
            <div className="mt-16 md:mt-0 text-gray-900 dark:text-gray-100">
              <BsThreeDots />
            </div>
          </div>
        </div>
      </div>

      <div className="border dark:border-[#4B5563] p-8 rounded-lg bg-white dark:bg-[#262626]">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}

            <tbody>
              <tr className="dark:border-[#4B5563]">
                <td>ID: </td>
                <td>{userData?._id || "678b5ced604d65a4a19f79d9"}</td>
              </tr>

              <tr className="dark:border-[#4B5563]">
                <td>Email: </td>
                <td>{userData?.email || "employe@gmail.com"}</td>
              </tr>

              <tr className="dark:border-[#4B5563]">
                <td>Bank Account</td>
                <td className="capitalize">{userData?.bank_account || "222351035745"}</td>
              </tr>
              <tr className="dark:border-[#4B5563]">
                <td>Role: </td>
                <td className="capitalize">{userData?.role || "Employee"}</td>
              </tr>

              <tr className="dark:border-[#4B5563]">
                <td>Designation: </td>
                <td className="capitalize">{userData?.designation || "Employee"}</td>
              </tr>

              <tr className="dark:border-[#4B5563]">
                <td>Location </td>
                <td className="capitalize">Dhaka, Bangladesh</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// import { Helmet } from "react-helmet-async";
// import useAuth from "../../../hooks/useAuth";
// import { BsThreeDots } from "react-icons/bs";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { FaPhoneSquareAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { useDarkMode } from "../../../Context/DarkModeContext";

// const Profile = () => {
//     const {user} = useAuth();

//     console.log(user?.uid)

//     return (
//         <div className="mt-5 space-y-5">
//             <Helmet>
//                 <title>Profile</title>
//             </Helmet>
//             <div className="border p-5 rounded-lg">

//                 <div className="">

//                     <div className="h-[100px] md:h-[180px] bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_1px,_transparent_1px)] bg-[size:10px_10px]"></div>

//                     <div className="flex items-start md:items-center justify-between -mt-10  lg:-mt-20 px-4 md:px-6 lg:px-10">
//                         <div className="flex flex-col items-start gap-4 " >
//                             <img src={`${user?.photoURL}`} alt="" className="w-[20vw] h-[20vw] md:w-[8vw] md:h-[8vw] object-cover rounded-full border-4 border-[#7201FF]" />
//                             <h4 className="text-lg font-medium">{`${user?.displayName}`}</h4>
//                             <p className="md:w-2/3 text-sm text-gray-500">A student information collection form is a document used by teachers to collect data about their students.</p>
//                             <div className="flex flex-row flex-wrap gap-2 text-xs">
//                                 <h2 className="tag-highlight"><FaMapMarkerAlt /> Florida, USA 3564</h2>
//                                 <h2 className="tag-highlight"> <FaPhoneSquareAlt /> +4411 214 225</h2>
//                                 <h2 className="tag-highlight"> <MdEmail /> {`${user?.email}`}</h2>
//                             </div>
//                         </div>

//                         <div className="mt-16 md:mt-0">
//                             <BsThreeDots />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/*  */}

//         </div>
//     );
// };

// export default Profile;
