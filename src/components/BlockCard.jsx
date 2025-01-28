import { Link } from "react-router-dom";

const BlockCard = ({
  title = "Employee Management Hub",
  subtitle = "Effortlessly organize employee profiles, roles, and verifiedstatuses. HRs can verify employees and manage salaries seamlessly.",
  imgURL = "https://i.ibb.co.com/Kr4KWPV/login.png",
}) => {
  return (
    <div className="g16 rounded-lg text-white">
      <div className="flex flex-col items-start gap-5 rounded-lg p-5">
        <div className=" flex items-start">
          <img
            src={imgURL}
            alt="Employee List"
            className="rounded-lg w-[300px] h-[300px] object-cover"
          />
        </div>

        <div className="flex flex-col items-start">
          <h2 className="link-highlight">{title}</h2>
          <p className="text-gray-300 mt-2">{subtitle}</p>

          {/* <div className="py-8">
            <Link
              to="/login"
              className="btn1"
            >
              Get Started
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlockCard;
