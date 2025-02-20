import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useEmp from "../../../../hooks/useEmp";
import ProgressTableRow from "./ProgressTableRow";

const Progress = () => {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const {
    data: allTaskData = [],
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: [user?.email, name, month, year],
    enabled: !!user?.email,
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-tasks?name=${name}&month=${month}&year=${year}`
      );
      return response.data;
    },
  });


  return (
    <div className="mt-5 space-y-5">
      <Helmet>
        <title>Progress Report</title>
      </Helmet>

      <div className="border dark:border-[#4B5563] p-5 rounded-lg space-y-7">
        {/* Form and selector  */}
        <div>
          {/* Form and Selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
  {/* Employee Name Input */}
  <div>
    <input
      type="text"
      name="employeeName"
      placeholder="Search by employee name"
      className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
      onChange={(e) => setName(e.target.value)}
      aria-label="Search by employee name"
    />
  </div>

  {/* Month Selector */}
  <div>
    <select
      defaultValue=""
      className="select select-bordered w-full bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
      name="month"
      onChange={(e) => setMonth(e.target.value)}
      aria-label="Filter by month"
    >
      <option value="" className="dark:bg-gray-800">
        Select a month
      </option>
      <option value="1" className="dark:bg-gray-800">January</option>
      <option value="2" className="dark:bg-gray-800">February</option>
      <option value="3" className="dark:bg-gray-800">March</option>
      <option value="4" className="dark:bg-gray-800">April</option>
      <option value="5" className="dark:bg-gray-800">May</option>
      <option value="6" className="dark:bg-gray-800">June</option>
      <option value="7" className="dark:bg-gray-800">July</option>
      <option value="8" className="dark:bg-gray-800">August</option>
      <option value="9" className="dark:bg-gray-800">September</option>
      <option value="10" className="dark:bg-gray-800">October</option>
      <option value="11" className="dark:bg-gray-800">November</option>
      <option value="12" className="dark:bg-gray-800">December</option>
    </select>
  </div>

  {/* Year Input */}
  <div>
    <input
      type="number"
      name="year"
      placeholder="Search by year"
      className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
      onChange={(e) => setYear(e.target.value)}
      aria-label="Search by year"
    />
  </div>
</div>

          
        </div>

        {/* Table */}

        <table className="table">
          {/* head */}
          <thead className="bg-[#EBD9FF]  dark:bg-[#8F03FF] dark:text-white text-[#7201FF] p-[1px]">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Task</th>
              <th>Hours</th>
              <th>Date</th>
              {/*TODO: <th>Status</th> */}
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {allTaskData.map((el, idx) => {
              return (
                <ProgressTableRow
                  key={el?._id}
                  el={el}
                  idx={idx}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Progress;
