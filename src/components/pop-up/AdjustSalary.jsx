import { useEffect, useState } from "react";
import axios from "axios";

const AdjustSalary = ({ detData, refetch }) => {
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

  const handleIncreaseSal = async (e) => {
    e.preventDefault();
    const form = e.target;
    const sal = form.sal.value
    console.log(_id, sal);

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/adjust-salary/${_id}`,
        { salary: parseInt(sal) } 
      );

      if (response.data.modifiedCount > 0) {
        alert("Salary updated successfully!");
        form.reset()
        refetch()
      }
    } catch (error) {
      console.error("Error updating salary:", error);
    }
  };

  return (
    <dialog
      id="modal_adjust_salary"
      className="modal"
    >
      <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
        <div>
          {/* Profile Section */}
          <div className="flex items-center p-6 space-x-4">
            <img
              src={profileURL || "https://i.ibb.co/nrXHXPY/profile-avatar.webp"}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800">
                {name || "No Name Provided"}
              </h2>
              <div className="flex gap-2 items-center">
                <span className="highlight1 text-sm capitalize">
                  {role || "No Role"}
                </span>
                <p className="text-sm text-gray-600">
                  {designation || "No Designation"}
                </p>
              </div>
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
            <form
              
              onSubmit={handleIncreaseSal}
            >
              <div className="form-control">
                <input
                  type="number"
                  name="sal"
                  placeholder={` ${salary}`}
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="btn1 w-full mt-4"
              >
                Update Salary
              </button>
              
            </form>
          </div>
          <form method="dialog" className="px-6 py-4">
          <button className="btn1 w-full">Close</button>
        </form>
        </div>
      </div>
    </dialog>
  );
};

export default AdjustSalary;
