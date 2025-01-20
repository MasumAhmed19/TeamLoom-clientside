import { FaSquareArrowUpRight } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import useEmployeeDet from "../../hooks/useEmployeeDet";
import useAuth from "../../hooks/useAuth";
import { MdOutlineClose } from "react-icons/md";


const EmployeeRowforAdmin = ({ singlaData, idx, handleAdjustSalary, handleAdjustFire, handleAdjusMakeHR, handleDetail }) => {
  const { user } = useAuth();
  const {
    _id,
    name,
    email,
    bank_account,
    role,
    designation,
    salary,
    profileURL,
  } = singlaData || {};
  const { isAdmin } = useEmployeeDet(user?.email);


  return (
    <tr className="hover:bg-purple-50 transition-all duration-200">
      <td>{idx + 1}</td>

      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-10 w-10">
              <img
                src={profileURL}
                alt="Profile image"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">Bangladesh</div>
          </div>
        </div>
      </td>

      <td>
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>

      <td>
        <span className="badge badge-ghost badge-sm capitalize">{role}</span>
      </td>

      <td>
        <span className=" w-fit">{designation || "N/A"}</span>
      </td>

      <td>
        <span className="">{bank_account || "N/A"}</span>
      </td>

      <td>
        <span className="font-medium">{salary ? `$${salary}` : "N/A"}</span>
      </td>

      <td>
        <button
          className="highlight1"
          onClick={() => handleAdjustSalary(_id)}
        >
          Adjust Salary
        </button>
      </td>

      <td>
        <button
          className="highlight1"
          onClick={() => handleAdjustFire(_id)}
        >
          Fire
        </button>
      </td>
      <td>
        {role === "employee" ? (
          <button
            className="highlight1"
            onClick={() => handleAdjusMakeHR(_id)}
          >
            Make HR
          </button>
        ) : (
          <Link className="text-[#8C52FF] cursor-default">
            <GiCheckMark />
          </Link>
        )}
      </td>

      <td>
        <button
          className="highlight1 flex items-center gap-2"
          onClick={() => handleDetail(_id)}
        >
          Detail<FaSquareArrowUpRight />
        </button>
      </td>
      {/* modals */}
      
    </tr>
  );
};

export default EmployeeRowforAdmin;
