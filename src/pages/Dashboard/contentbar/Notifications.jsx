import { Helmet } from "react-helmet-async";

const Notifications = () => {
    return (
        <div className="mt-5 space-y-5">
            <Helmet>
                <title>Notifications</title>
            </Helmet>
            <div className="border dark:border-[#4B5563] p-5 rounded-lg">
                You don't have any messages yet
            </div>
        </div>
    );
};

export default Notifications;