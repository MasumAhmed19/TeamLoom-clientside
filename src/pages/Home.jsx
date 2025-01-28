import BlockCard from "../components/BlockCard";
import HeroSection from "../components/HeroSection";

const Home = () => {
    return (
        <div className=''>
            <HeroSection />

            <section className="bg-black text-whit p-2">
                <div className="container mx-auto">
                    <h2 className="f2 text-[5vh] md:text-[5vh] md:leading-[60px] lg:leading-[80px] text-center text-gray-200 md:w-2/3 mx-auto leading-tight">Everything You Need to Manage Your Team Efficiently</h2>
                </div>
                <div className="sw grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white">
                    <BlockCard title='Task & Workflow Tracking' subtitle="Assign tasks, track hours worked, and ensure deadlines are met with real-time updates." imgURL='https://i.ibb.co.com/wJLmkxt/signup.png' />
                    <BlockCard title='Employee Insights' subtitle="View detailed employee profiles, designations, and performance metrics at a glance." imgURL='https://i.ibb.co.com/ZcNsvTd/students-1.png' />
                    <BlockCard />
                </div>
            </section>

            {/* <section className="g8">
                <div className="sw">
                    <div>
                        <h2 className="text-[5vh] md:text-[5vh] f2 leading-tight">Loved by<br/>industry leaders</h2>
                    </div>

                    <Testimonials />

                </div>
            </section> */}
        </div>
    );
};

export default Home;