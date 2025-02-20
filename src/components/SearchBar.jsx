import { IoMdSearch } from "react-icons/io";
import { IoMoonOutline, IoNotificationsSharp, IoSunnyOutline } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { RiMenuUnfoldFill } from "react-icons/ri";
import useAuth from "../hooks/useAuth";
import { Dropdown, DropdownItem } from "flowbite-react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../Context/DarkModeContext";

const SearchBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { user, logOut } = useAuth();
  const { darkMode, setDarkMode } = useDarkMode();

  console.log(darkMode);

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-3 w-full md:w-2/3 lg:w-1/2">
        <button
          className="md:hidden p-2 text-xl text-white bg-purple-600 rounded-lg"
          onClick={() => setIsSidebarOpen(true)}
        >
          <RiMenuUnfoldFill />
        </button>

        <div className="border flex hover:border-slate-400 dark:border-gray-600 dark:hover:border-gray-400 cursor-pointer transition-all duration-200 h-9 md:h-10 items-center justify-between p-3 rounded-md w-full bg-white dark:bg-gray-800">
          <div className="flex items-center gap-2">
            <IoMdSearch className="text-gray-600 dark:text-gray-300" />
            <p className="text-slate-400 dark:text-gray-300">Search </p>
          </div>
          <kbd className="kbd kbd-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">ctrl+K</kbd>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <span className="bg-gray-100 dark:bg-gray-700 dark:text-gray-300 p-[10px] rounded-md cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
        </span>

        <Dropdown
          inline={true}
          label={
            <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-md">
              <IoNotificationsSharp className="text-xl text-gray-800 dark:text-gray-300" />
            </div>
          }
          dismissOnClick={false}
          arrowIcon={false}
          className="bg-white dark:bg-gray-800"
        >
          <div className="px-2 md:px-4">
            <div className="p-3 flex items-center justify-between w-[280px] md:w-[350px]">
              <h2 className="text-md font-semibold text-gray-800 dark:text-gray-200">Notifications</h2>
              <h2 className="text-xs text-slate-400 dark:text-gray-400 flex items-center gap-1 cursor-pointer">
                <MdCheckBoxOutlineBlank /> Mark all as read
              </h2>
            </div>
            <hr className="my-2 border-gray-300 dark:border-gray-600" />

            <div className="flex flex-col gap-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <DropdownItem key={i}>
                  <div className="flex gap-3">
                    <div>
                      <img
                        src="https://isomorphic-furyroad.vercel.app/avatar.webp"
                        alt=""
                        className="w-10 rounded-full"
                      />
                    </div>
                    <div className="text-start">
                      <h2 className="text-md text-gray-800 dark:text-gray-300 font-semibold">
                        Invitation for crafting engaging designs
                      </h2>
                      <p className="text-slate-500 dark:text-gray-400">2 years</p>
                    </div>
                  </div>
                </DropdownItem>
              ))}
            </div>
          </div>
        </Dropdown>

        <Dropdown
          inline={true}
          label={
            <div className="w-10 h-10">
              <img
                referrerPolicy="no-referrer"
                src={`${user?.photoURL}`}
                alt="User"
                className="h-10 w-10 object-cover rounded-full cursor-pointer"
              />
            </div>
          }
          dismissOnClick={false}
          arrowIcon={false}
          className="bg-white dark:bg-gray-800"
        >
          <div className="px-4 mb-2">
            <div className="p-3">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{`${user?.displayName}`}</h2>
              <h2 className="text-xs text-slate-400 dark:text-gray-400">{`${user?.email}`}</h2>
            </div>
            <hr className="my-2 border-gray-300 dark:border-gray-600" />
            <DropdownItem><Link to="/dashboard/profile" className="text-gray-800 dark:text-gray-300">Dashboard</Link></DropdownItem>
            <DropdownItem><Link to="/" className="text-gray-800 dark:text-gray-300">Home</Link></DropdownItem>
            <DropdownItem><Link to="/" className="text-gray-800 dark:text-gray-300">Contact</Link></DropdownItem>
            <DropdownItem onClick={logOut}>
              <Link to="/" className="text-gray-800 dark:text-gray-300">Logout</Link>
            </DropdownItem>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default SearchBar;









// import { IoMdSearch } from "react-icons/io";
// import { IoMoonOutline, IoNotificationsSharp, IoSunnyOutline } from "react-icons/io5";
// import { MdCheckBoxOutlineBlank } from "react-icons/md";
// import { RiMenuUnfoldFill } from "react-icons/ri";
// import useAuth from "../hooks/useAuth";
// import { Dropdown, DropdownItem } from "flowbite-react";
// import { Link } from "react-router-dom";
// import { useDarkMode } from "../Context/DarkModeContext";




// const SearchBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
//   const { user, logOut } = useAuth();
//   const {darkMode, setDarkMode} = useDarkMode();

//   console.log(darkMode)

//   return (
//     <div className="flex items-center justify-between gap-2">
//       <div className="flex items-center gap-3 w-full md:w-2/3 lg:w-1/2">
//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden p-2 text-xl text-white bg-purple-600 rounded-lg"
//           onClick={() => setIsSidebarOpen(true)}
//         >
//           <RiMenuUnfoldFill />
//         </button>

//         {/* Search Input */}
//         <div className="border flex hover:border-slate-400 cursor-pointer transition-all duration-200 h-9 md:h-10 items-center justify-between p-3 rounded-md w-full">
//           <div className="flex items-center gap-2">
//             <IoMdSearch />
//             <p className="text-slate-400 ">Search </p>
//           </div>
//           <kbd className="kbd kbd-xs">ctrl+K</kbd>
//         </div>
//       </div>

//       <div className="flex gap-3 items-center">

//         {/* DarkMood setup */}
//         <span className="bg-gray-100 dark:bg-[#171717] dark:text-[#E5E5E5] p-[10px] rounded-md cursor-pointer" onClick={()=>{setDarkMode(!darkMode)}}>
//           {
//             darkMode ? <IoSunnyOutline />:<IoMoonOutline /> 
            
//           }
//         </span>


//         {/* notification */}
//         <Dropdown
//           inline={true}
//           label={
//             <div className="bg-gray-200 p-2 rounded-md">
//               <IoNotificationsSharp className="text-xl" />
//             </div>
//           }
//           dismissOnClick={false}
//           arrowIcon={false}
//           className=""
//         >
//           <div className="px-2 md:px-4">
//             <div className="p-3 flex items-center justify-between w-[280px] md:w-[350px]">
//               <h2 className="text-md font-semibold">Notifications</h2>
//               <h2 className="text-xs text-slate-400 flex items-center gap-1 cursor-pointer">
//                 <MdCheckBoxOutlineBlank /> Mark all as read
//               </h2>
//             </div>
//             <hr className="my-2" />

//             <div className="flex flex-col gap-2 mb-3">
//               <DropdownItem>
//                 <div className="flex gap-3">
//                   <div>
//                     <img
//                       src="https://isomorphic-furyroad.vercel.app/avatar.webp"
//                       alt=""
//                       className="w-10 rounded-full"
//                     />
//                   </div>
//                   <div className="text-start">
//                     <h2 className="text-md text-slate-600 font-semibold">
//                       Invitation for crafting engaging designs
//                     </h2>
//                     <p className="text-slate-500">2 years</p>
//                   </div>
//                 </div>
//               </DropdownItem>

//               <DropdownItem>
//                 <div className="flex gap-3">
//                   <div>
//                     <img
//                       src="https://isomorphic-furyroad.vercel.app/avatar.webp"
//                       alt=""
//                       className="w-10 rounded-full"
//                     />
//                   </div>
//                   <div className="text-start">
//                     <h2 className="text-md text-slate-600 font-semibold">
//                       Invitation for crafting engaging designs
//                     </h2>
//                     <p className="text-slate-500">2 years</p>
//                   </div>
//                 </div>
//               </DropdownItem>

//               <DropdownItem>
//                 <div className="flex gap-3">
//                   <div>
//                     <img
//                       src="https://isomorphic-furyroad.vercel.app/avatar.webp"
//                       alt=""
//                       className="w-10 rounded-full"
//                     />
//                   </div>
//                   <div className="text-start">
//                     <h2 className="text-md text-slate-600 font-semibold">
//                       Invitation for crafting engaging designs
//                     </h2>
//                     <p className="text-slate-500">2 years</p>
//                   </div>
//                 </div>
//               </DropdownItem>

//               <DropdownItem>
//                 <div className="flex gap-3">
//                   <div>
//                     <img
//                       src="https://isomorphic-furyroad.vercel.app/avatar.webp"
//                       alt=""
//                       className="w-10 rounded-full"
//                     />
//                   </div>
//                   <div className="text-start">
//                     <h2 className="text-md text-slate-600 font-semibold">
//                       Invitation for crafting engaging designs
//                     </h2>
//                     <p className="text-slate-500">2 years</p>
//                   </div>
//                 </div>
//               </DropdownItem>

//               <DropdownItem>
//                 <div className="flex gap-3">
//                   <div>
//                     <img
//                       src="https://isomorphic-furyroad.vercel.app/avatar.webp"
//                       alt=""
//                       className="w-10 rounded-full"
//                     />
//                   </div>
//                   <div className="text-start">
//                     <h2 className="text-md text-slate-600 font-semibold">
//                       Invitation for crafting engaging designs
//                     </h2>
//                     <p className="text-slate-500">2 years</p>
//                   </div>
//                 </div>
//               </DropdownItem>

//               <DropdownItem>
//                 <div className="flex gap-3">
//                   <div>
//                     <img
//                       src="https://isomorphic-furyroad.vercel.app/avatar.webp"
//                       alt=""
//                       className="w-10 rounded-full"
//                     />
//                   </div>
//                   <div className="text-start">
//                     <h2 className="text-md text-slate-600 font-semibold">
//                       Invitation for crafting engaging designs
//                     </h2>
//                     <p className="text-slate-500">2 years</p>
//                   </div>
//                 </div>
//               </DropdownItem>
//             </div>
//           </div>
//         </Dropdown>

//         {/* profile */}
//         <Dropdown
//           inline={true}
//           label={
//             <div className="w-10 h-10">
//               <img
//                 referrerPolicy="no-referrer"
//                 src={`${user?.photoURL}`}
//                 alt="User"
//                 className="h-10 w-10 object-cover rounded-full cursor-pointer"
//               />
//             </div>
//           }
//           dismissOnClick={false}
//           arrowIcon={false}
//           className=""
//         >
//           <div className="px-4 mb-2">
//             <div className="p-3">
//               <h2 className="text-lg font-semibold">{`${user?.displayName}`}</h2>
//               <h2 className="text-xs text-slate-400">{`${user?.email}`}</h2>
//             </div>
//             <hr className="my-2" />
//             <DropdownItem><Link to="/dashboard/profile">Dashboard</Link></DropdownItem>
//             <DropdownItem><Link to="/">Home</Link></DropdownItem>
//             <DropdownItem><Link to="/">Contact</Link></DropdownItem>
//             <DropdownItem onClick={logOut}>
//               <Link to="/">Logout</Link>
//             </DropdownItem>
//           </div>
//         </Dropdown>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
