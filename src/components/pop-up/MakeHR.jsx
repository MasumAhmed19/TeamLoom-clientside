import axios from "axios";
import { MdOutlineClose } from "react-icons/md";

const MakeHR = ({ detData, refetch }) => {
    const {
      profileURL,
      name,
      designation,
      role,
      email,
      bank_account,
      salary,
      _id,
    } = detData || {};

    const promoteTohr = async ()=>{
        try{
            const res = await axios.put(`${import.meta.env.VITE_API_URL}/makehr/${_id}`)
            refetch();
        }catch(err){
            console.log(err)
        }
    }
  
    return (
      <dialog
        id="modal_makehr"
        className="modal"
      >
        <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden relative">
          <div>
            {/* Profile Section */}
            <div className="flex flex-col items-center p-6 space-x-4">
              <img
                src={profileURL || "https://i.ibb.co/nrXHXPY/profile-avatar.webp"}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex flex-col items-center">

                <h2 className="text-2xl font-bold text-gray-800">
                  {name || "No Name Provided"}
                </h2>

                <span className="highlight1 text-sm capitalize">
                    {role || "No Role"}
                </span>

                <p className="text-sm text-gray-600">
                    {designation || "No Designation"}
                </p>
                
              </div>
            </div>
  
            {/* Details Section */}
            <div className="px-6 py-4">
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-medium">Email:</span> {email || "N/A"}
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-medium">Bank Account:</span>{" "}
                {bank_account || "N/A"}
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-medium">Salary:</span> ${salary || "0.00"}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">ID:</span> {_id || "N/A"}
              </p>
            </div>
          </div>
  
          {/* Button Section */}
          <form
            method="dialog"
            className="px-6 py-4"
          >
            <button className="btn1 w-full" onClick={()=>promoteTohr()}>Promoted to HR</button>
          </form>
          <form
            method="dialog"
            className="px-6 py-4 absolute top-2 right-2"
          >
            <button className="w-full bg-red-300"><MdOutlineClose /></button>
          </form>
        </div>
      </dialog>
    );
  };
  
  export default MakeHR;
  