import { Link } from "react-router-dom";

const HeroSection = () => {
    // const htext = "One Platform Endless Efficiency"; 

    return (
        <div className="bg-black">
            <div className="sw">
                {/* Hero container */}
                <div className="min-h-[80vh] flex flex-col items-center justify-center gap-5">
                    {/* Display the entire heading */}
                    <h2 className="f2 text-[10vh] md:text-[12vh]  leading-[60px] lg:leading-[80px] text-center text-gray-200">
                        One Platform <br/>Endless Efficiency
                    </h2>
                    {/* Supporting text */}
                    <p className="text-gray-500 f1 text-xl md:w-2/3 text-center">
                        Discover a unified platform that streamlines tasks,
                        boosts productivity, and transforms how employees, HR,
                        and admins collaborate—effortlessly.
                    </p>
                    {/* Button */}
                    <Link className="btn1">
                        Get Started
                    </Link>
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