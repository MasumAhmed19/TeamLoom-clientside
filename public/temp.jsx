<div className="overflow-x-auto">
  <table className="table">
    {/* head */}

    <tbody>
      <tr>
        <td>ID: </td>
        <td>{user?._id || "678b5ced604d65a4a19f79d9"}</td>
      </tr>

      <tr>
        <td>Bank Account</td>
        <td>{user?.bank_account || "222351035745"}</td>
      </tr>
      <tr>
        <td>Role: </td>
        <td>{user?.role || "Employee"}</td>
      </tr>

      <tr>
        <td>Designation: </td>
        <td>{user?.designation || "Employee"}</td>
      </tr>

    </tbody>
  </table>
</div>