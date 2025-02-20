import { useState } from "react";

const FAQHome = () => {
    const queries = [
        {
          ques: "What is the purpose of this website?",
          ans: "This website is designed for employee management, allowing employees to log work hours, HR to manage employee data and payroll, and Admins to oversee all activities.",
        },
        {
          ques: "What are the different user roles?",
          ans: "There are three user roles: Employee (logs work hours and manages work logs), HR (manages employees and payroll), and Admin (oversees employees, promotes HRs, and manages payroll).",
        },
        {
          ques: "How do I register an account?",
          ans: "Users can register using email and password or through Google/GitHub login. During registration, they must select their role as either Employee or HR.",
        },
        {
          ques: "How is the Admin role assigned?",
          ans: "The Admin role is created from the backend/database and is not selectable during registration.",
        },
        {
          ques: "What data is required during registration?",
          ans: "Users must provide their name, email, password, role selection, and additional details like bank account number, salary, and a photo.",
        },
        {
          ques: "What features are available in Employee Dashboard?",
          ans: "Employees can submit daily work hours, view payment history, and edit/delete work logs through private routes like /work-sheet and /payment-history.",
        },
        {
          ques: "What actions can HR perform?",
          ans: "HR can verify employees, view employee details, and process payroll payments through private routes like /employee-list, /details/:slug, and /progress.",
        },
        {
          ques: "How does salary payment work?",
          ans: "HR processes salary payments for employees, and Admins can adjust salary amounts and approve payments. The payment status is updated in the database.",
        },
        {
          ques: "Is the website mobile-friendly?",
          ans: "Yes, the website is fully responsive, working seamlessly on mobile, tablet, and desktop devices.",
        },
      ];
      

  return (
    <div className="bg-black py-[110px] relative p-5">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl mx-auto text-left md:text-center mb-10 space-y-3 lg:mb-14">
            <h2 className="h1 text-white ">
              Frequently Asked Questions
            </h2>
            <p className="text-white ">
            Absolutely! Suggestify allows users to customize their preferences, ensuring that the recommendations align closely with their tastes and interests.
            </p>
          </div>

          <div className="container mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
              {queries.map((qyery, index) => 
                (<>
                  <div key={index} className="group">
                    <h3 className="text-lg link-highlight duration-200">
                    {qyery.ques}
                    </h3>
                    <p className="mt-2 text-gray-400 group-hover:text-white  duration-200">
                      {qyery.ans}
                    </p>
                  </div>
                </>)
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQHome;
