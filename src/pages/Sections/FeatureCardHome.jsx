import React from 'react';
import BlockCard from '../../components/BlockCard';

const FeatureCardHome = () => {
    return (
        <section className="bg-black text-whit p-5 py-[70px]">
        <div className="container mx-auto flex flex-col items-center justify-center gap-3">
          <h2 className="h1 text-gray-50  mx-auto ">
            What TeamLoom brings to the table ?
          </h2>
          <p className="p1">TeamLoom enhances productivity with task tracking, real-time updates, and comprehensive employee insights.</p>
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
    );
};

export default FeatureCardHome;