import { useState } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../../../components/SearchBar";

const Contentbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className="bg-white rounded-lg overflow-y-auto shadow-lg p-5 md:ml-16 h-[calc(100vh-32px)]">
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
