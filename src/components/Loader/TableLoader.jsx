
const TableLoader = () => {
  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Designation</th>
            <th>Bank Account</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <tr
              key={index}
              className="hover:bg-purple-50 transition-all duration-200 animate-pulse"
            >
              <td>
                <div className="h-4 bg-gray-300 rounded w-8"></div>
              </td>

              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-10 w-10 bg-gray-300"></div>
                  </div>
                  <div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                    <div className="h-3 bg-gray-200 rounded w-16 mt-1"></div>
                  </div>
                </div>
              </td>

              <td>
                <div className="h-4 bg-gray-300 rounded w-32"></div>
              </td>

              <td>
                <div className="h-4 bg-gray-300 rounded w-20"></div>
              </td>

              <td>
                <div className="h-4 bg-gray-300 rounded w-24"></div>
              </td>

              <td>
                <div className="h-4 bg-gray-300 rounded w-24"></div>
              </td>

              <td>
                <div className="h-4 bg-gray-300 rounded w-16"></div>
              </td>

              <td>
                <div className="flex gap-2">
                  <div className="h-8 bg-gray-300 rounded w-24"></div>
                  <div className="h-8 bg-gray-300 rounded w-24"></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableLoader;
