import { useState } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../../../components/SearchBar";

const Contentbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5 min-h-screen">
      {/* Search Bar */}
      <SearchBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      {/* Dynamic Content */}
      <Outlet />
    </div>
  );
};

export default Contentbar;
