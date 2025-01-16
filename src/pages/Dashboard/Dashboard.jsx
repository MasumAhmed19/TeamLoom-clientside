import { useState } from "react";
import Contentbar from "./contentbar/Contentbar";
import Sidebar from "./sidebar/Sidebar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:grid md:grid-cols-[240px_1fr] gap-4 p-2 md:p-4 bg-[#F5F5F4] min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 z-20 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:inset-auto transition-transform duration-300 ease-in-out bg-white shadow-lg md:shadow-none`}
      >
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Content Bar */}
      <Contentbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
};

export default Dashboard;


