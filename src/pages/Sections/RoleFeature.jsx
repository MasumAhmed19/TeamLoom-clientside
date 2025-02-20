import React from "react";
import AdminHome from "./AdminHome";
import { Link } from "react-router-dom";

const RoleFeature = () => {
  return (
    <div className="bg-black py-[70px]">
      <div className="container mx-auto p-5">
        <div className="max-w-xl text-center mx-auto flex flex-col items-center justify-center gap-3">
          <h2 className="h1 text-gray-50  mx-auto ">Core Feature</h2>
          <p className="p1">
            TeamLoom enhances productivity with task tracking, real-time
            updates, and comprehensive employee insights.
          </p>

          <Link
            to="/dashboard"
            className="btn1"
          >
            Explore it
          </Link>
        </div>

        <AdminHome />
      </div>
    </div>
  );
};

export default RoleFeature;
