import { Link } from "react-router-dom";

const HeroSection = () => {
    // const htext = "One Platform Endless Efficiency"; 

    return (
        <div className="bg-[#030712]">
            <div className="sw py-">
                {/* Hero container */}
                <div className=""></div>
                <div className="min-h-[80vh] flex flex-col items-center justify-center gap-5">
                    <p className="link-highlight">Where Team and Tasks Align</p>
                    {/* Display the entire heading */}
                    <h2 className="f2 text-[8vh] md:text-[10vh] leading-[60px] lg:leading-[80px] text-center text-gray-200 md:w-2/3">
                        {/* One Platform <br/>Endless Efficiency */}
                        Streamline Workforce Management with Precision
                    </h2>
                    {/* Supporting text */}
                    <p className="text-gray-500 f1 text-xl md:w-2/3 text-center">
                        Empower your HR team, track employee productivity, and automate payroll—all in one unified platform.
                    </p>
                    {/* Button */}
                    <Link to='/login' className="btn1">
                        Get Started
                    </Link>

                    <div className="py-5"></div>
                    <div className=" md:px-[8vw]">
                        <div className="p-2 md:p-4 rounded-lg g15 ">
                            <img src="https://i.ibb.co.com/6FJXr9t/Dashboard.png" className=" rounded-md" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;



                    {/* Display each character as a separate element
                    <div className="flex flex-wrap justify-center gap-2">
                        {htext.split("").map((ch, index) => (
                            <span
                                key={index}
                                className="f2 text-8xl text-gray-700 hover:text-[#8C52FF] duration-200"
                            >
                                {ch}
                            </span>
                        ))}
                    </div> */}