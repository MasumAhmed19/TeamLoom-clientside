import { Link } from "react-router-dom";

const HeroSection2 = () => {
  return (
    <div className="bg-[#030712] relative overflow-hidden">
      <div className="absolute flex top-[47%] -left-[25%] transform -translate-x-1/2 -translate-y-1/2">
        {/* <div className="z-[1] absolute w-[40rem] h-[36rem] bg-gradient-to-r from-pink-500 to-red-500 filter blur-[6rem] rounded-full transform -translate-x-[30vw] -translate-y-[25rem] animate-rotate1"></div> */}
        <div className="z-[2] absolute w-[65rem] h-[50rem] bg-gradient-to-r from-[#D569A2] to-[#8F03FF] filter blur-[5rem] rounded-full transform -translate-x-[29vw] -translate-y-[35rem] animate-rotate2"></div>
        {/* <div className="z-[3] absolute w-[40rem] h-[50rem] bg-gradient-to-r from-yellow-500 to-green-500 filter blur-[4rem] rounded-full transform -translate-x-[29vw] -translate-y-[30rem] animate-rotate3"></div> */}
      </div>

      <div className="sw min-h-[150vh] relative z-10">
        {/* Hero container */}
        <div className=""></div>
        <div className="min-h-[80vh] flex flex-col items-center justify-center gap-5">
          <p className="link-highlight text-gray-200">Where Team and Tasks Align</p>
          <h2 className="f2 text-[8vh] md:text-[10vh] leading-[60px] lg:leading-[80px] text-center text-gray-200 md:w-2/3">
            Streamline Workforce Management with Precision
          </h2>
          <p className="text-gray-300 f1 text-xl md:w-2/3 text-center">
            Empower your HR team, track employee productivity, and automate payroll—all in one unified platform.
          </p>
          <Link to="/dashboard" className="btn1">
            Get Started
          </Link>

          <div className="py-5"></div>
          <div className="md:px-[8vw]">
            <div className="p-2 md:p-4 rounded-lg g17">
              <img
                src="https://i.ibb.co.com/6FJXr9t/Dashboard.png"
                className="rounded-md"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
