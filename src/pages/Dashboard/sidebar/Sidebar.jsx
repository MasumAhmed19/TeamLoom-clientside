import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = ({ onClose }) => {
    return (
      <div className="overflow-y-auto h-full p-6 text-black">
        {/* ei div only mobile e show krbe Close Button for Mobile */}
        <div className="flex justify-between items-center md:hidden mb-4">
          <Link to='/' className="flex items-center gap-2 w-full">
            <img src="https://i.ibb.co.com/6H7FBtf/logo.png" alt="" className="w-10"/>
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
        <ul className="space-y-4">
          <li className="hover:bg-blue-500 p-3 rounded-lg cursor-pointer">
            Dashboard
          </li>
          <li className="hover:bg-blue-500 p-3 rounded-lg cursor-pointer">
            Settings
          </li>
          <li className="hover:bg-blue-500 p-3 rounded-lg cursor-pointer">
            Profile
          </li>
          <li className="hover:bg-blue-500 p-3 rounded-lg cursor-pointer">
            Logout
          </li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  