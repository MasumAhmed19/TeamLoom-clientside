import BlockCard from "../components/BlockCard";
import HeroSection from "../components/HeroSection";
import HeroSection2 from "../components/HeroSection2";
import { useDarkMode } from "../Context/DarkModeContext";
import FAQHome from "./Sections/FAQHome";
import FeatureCardHome from "./Sections/FeatureCardHome";
import RoleFeature from "./Sections/RoleFeature";
import TestimonialsHome from "./Sections/TestimonialsHome";

const Home = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className="">
      {/* <HeroSection /> */}
      <HeroSection2 />

      {/* Feature Card */}
      <FeatureCardHome />

      {/* Role Feature */}
      <RoleFeature />


      {/* Testimonials */}
      <TestimonialsHome />

      {/* FAQ */}
      <FAQHome />


      


    </div>
  );
};

export default Home;
