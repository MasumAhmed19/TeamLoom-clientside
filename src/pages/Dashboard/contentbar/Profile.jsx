import useAuth from "../../../hooks/useAuth";
import { BsThreeDots } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";





const Profile = () => {
    const {user} = useAuth();

    return (
        <div className="m-5">
            {/* header + image and setting button */}
            <div className="">
                <div className="border rounded-md">
                    <img src="https://i.ibb.co.com/cw9yBQ6/profile-bg-2.png" alt="" className="h-[100px] md:h-[180px] w-full object-cover" />
                </div>
                <div className="flex items-start md:items-center justify-between -mt-10  lg:-mt-20 px-4 md:px-6 lg:px-10">
                    <div className="flex flex-col items-start gap-4 " >
                        <img src={`${user?.photoURL}`} alt="" className="w-[20vw] h-[20vw] md:w-[8vw] md:h-[8vw] rounded-full border-4 border-[#7201FF]" />
                        <h4 className="text-lg font-medium">{`${user?.displayName}`}</h4>
                        <p className="md:w-2/3 text-sm text-gray-500">A student information collection form is a document used by teachers to collect data about their students.</p>
                        <div className="flex flex-row flex-wrap gap-2 text-xs">
                            <h2 className="tag-highlight"><FaMapMarkerAlt /> Florida, USA 3564</h2>
                            <h2 className="tag-highlight"> <FaPhoneSquareAlt /> +4411 214 225</h2>
                            <h2 className="tag-highlight"> <MdEmail /> {`${user?.email}`}</h2>
                        </div>
                    </div>

                    <div className="mt-16 md:mt-0">
                        <BsThreeDots />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;