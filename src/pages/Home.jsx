import BlockCard from "../components/BlockCard";
import HeroSection from "../components/HeroSection";
import HeroSection2 from "../components/HeroSection2";
import { useDarkMode } from "../Context/DarkModeContext";
import AdminHome from "./Sections/AdminHome";
import EmployeeHome from "./Sections/EMployeeHome";
import FAQHome from "./Sections/FAQHome";
import FeatureCardHome from "./Sections/FeatureCardHome";
import HRHome from "./Sections/HRHome";
import TestimonialsHome from "./Sections/TestimonialsHome";

const Home = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className="">
      {/* <HeroSection /> */}
      <HeroSection2 />

      {/* Feature Card */}
      <FeatureCardHome />

      {/* FAQ */}
      <FAQHome />

      {/* What can HR do */}
      <HRHome />

      {/* What can Employee do */}
      <EmployeeHome />


      {/* What can Admin do */}
      <AdminHome />


      {/* Testimonials */}
      <TestimonialsHome />


    </div>
  );
};

export default Home;
