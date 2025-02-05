// import { Link } from "react-router-dom";

// const HeroSection = () => {
//     // const htext = "One Platform Endless Efficiency"; 

//     return (
//         <div className="bg-[#030712]">
//             <div className="sw py-">
//                 {/* Hero container */}
//                 <div className=""></div>
//                 <div className="min-h-[80vh] flex flex-col items-center justify-center gap-5">
//                     <p className="link-highlight">Where Team and Tasks Align</p>
//                     {/* Display the entire heading */}
//                     <h2 className="f2 text-[8vh] md:text-[10vh] leading-[60px] lg:leading-[80px] text-center text-gray-200 md:w-2/3">
//                         {/* One Platform <br/>Endless Efficiency */}
//                         Streamline Workforce Management with Precision
//                     </h2>
//                     {/* Supporting text */}
//                     <p className="text-gray-500 f1 text-xl md:w-2/3 text-center">
//                         Empower your HR team, track employee productivity, and automate payroll—all in one unified platform.
//                     </p>
//                     {/* Button */}
//                     <Link to='/dashboard' className="btn1">
//                         Get Started
//                     </Link>

//                     <div className="py-5"></div>
//                     <div className=" md:px-[8vw]">
//                         <div className="p-2 md:p-4 rounded-lg g15 ">
//                             <img src="https://i.ibb.co.com/6FJXr9t/Dashboard.png" className=" rounded-md" alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;


import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen bg-[#212121] flex flex-col justify-center items-center px-6 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0">
                {/* <div className="bg-blur1"></div> */}
                <div className="bg-blur2"></div>
                {/* <div className="bg-blur3"></div> */}
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center text-white px-4 md:px-10">
                <p className="text-lg text-gray-300">Where Team and Tasks Align</p>
                <h2 className="text-[7vh] md:text-[9vh] lg:text-[10vh] leading-tight font-bold">
                    Streamline Workforce Management with Precision
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                    Empower your HR team, track employee productivity, and automate payroll—all in one unified platform.
                </p>
                <Link to="/dashboard" className="btn1 mt-6 inline-block">
                    Get Started
                </Link>

                {/* Image */}
                <div className="mt-10 max-w-lg md:max-w-3xl mx-auto px-4">
                    <img
                        src="https://i.ibb.co/6FJXr9t/Dashboard.png"
                        className="rounded-lg shadow-lg w-full"
                        alt="Dashboard"
                    />
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