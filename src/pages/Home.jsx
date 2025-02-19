import BlockCard from "../components/BlockCard";
import HeroSection from "../components/HeroSection";
import HeroSection2 from "../components/HeroSection2";
import { useDarkMode } from "../Context/DarkModeContext";

const Home = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className="">
      {/* <HeroSection /> */}
      <div className="-mt-16">
        <HeroSection2 />
      </div>

      {/* Feature Card */}
      <section className="bg-black text-whit p-2">
        <div className="container mx-auto">
          <h2 className="f2 text-[5vh] md:text-[5vh] md:leading-[60px] lg:leading-[80px] text-center text-gray-200 md:w-2/3 mx-auto leading-tight">
            Everything You Need to Manage Your Team Efficiently
          </h2>
        </div>
        <div className="sw grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white">
          <BlockCard
            title="Task & Workflow Tracking"
            subtitle="Assign tasks, track hours worked, and ensure deadlines are met with real-time updates."
            imgURL="https://i.ibb.co.com/wJLmkxt/signup.png"
          />

          <BlockCard />

          <BlockCard
            title="Employee Insights"
            subtitle="View detailed employee profiles, designations, and performance metrics at a glance."
            imgURL="https://i.ibb.co.com/ZcNsvTd/students-1.png"
          />
        </div>
      </section>

      {/*  */}

    </div>
  );
};

export default Home;
