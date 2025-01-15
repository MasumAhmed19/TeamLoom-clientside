import Contentbar from "./contentbar/Contentbar";
import Sidebar from "./sidebar/Sidebar";


const Dashboard = () => {
    return (
        <div className="grid gap-4 p-4 grid-cols-[220px_1fr] bg-gray-100">
            <Sidebar />
            <Contentbar />
        </div>
    );
};

export default Dashboard;