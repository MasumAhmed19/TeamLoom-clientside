import { FaSquareArrowUpRight } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const EmployeeRowforAdmin = ({ singlaData, idx, handleAdjustSalary, handleAdjustFire, handleAdjustMakeHR, handleDetail }) => {
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

  return ( 


    <tr className="hover:bg-purple-50 dark:hover:bg-black transition-all duration-200 dark:border-[#4B5563]">
      <td>{idx + 1}</td>

      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-10 w-10">
              <img
                 referrerPolicy="no-referrer"
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

      {/* <td>
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td> */}
      <td>
        <span className="">{bank_account || "N/A"}</span>
      </td>

      <td>
        <span className="badge badge-ghost badge-sm capitalize">{role}</span>
      </td>

      <td>
        <span className=" w-fit">{designation || "N/A"}</span>
      </td>

      

      <td>
        <span className="font-medium">{salary ? `$${salary}` : "N/A"}</span>
      </td>

      <td>
        <button
          className="highlight4both"
          onClick={() => handleAdjustSalary(_id)}
        >
          Adjust Salary
        </button>
      </td>

      <td>
        <button
          className="highlight4both"
          onClick={() => handleAdjustFire(_id)}
        >
          Fire
        </button>
      </td>

      <td>
        {role === "employee" ? (
          <button
            className="highlight4both"
            onClick={() => handleAdjustMakeHR(_id)}
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
          className="highlight4both flex items-center gap-2"
          onClick={() => handleDetail(_id)}
        >
          Detail<FaSquareArrowUpRight />
        </button>
      </td>
 
    </tr>
  );
};

export default EmployeeRowforAdmin;
