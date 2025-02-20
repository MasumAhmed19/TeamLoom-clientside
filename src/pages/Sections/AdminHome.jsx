import { motion } from "framer-motion";

const AdminHome = () => {
  return (
    <div className="">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          <div className="aspect-w-16 aspect-h-9 lg:aspect-none ">
            <motion.img
              className="md:w-2/3 rounded-xl"
              src="https://i.ibb.co.com/Kpgkn7j3/img2.png"
              alt="Features Image"
              animate={{
                y: ["0px", "-20px", "0px"], // Moves the image up and down
              }}
              transition={{
                duration: 2, // Duration for one cycle of up and down
                repeat: Infinity, // Infinite loop
                repeatType: "loop", // Loops the animation
                ease: "easeInOut", // Smooth easing
              }}
            />
          </div>

          <div>
            {/* <div className="mb-4 flex">
              <h3 className="link-highlight text-xs font-medium uppercase">
                Admin Features
              </h3>
            </div> */}

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-[#7201FF] text-white  font-semibold text-xs uppercase rounded-full">
                    1
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base text-neutral-400">
                  <span className="text-white">
                    User Authentication and Roles:{" "}
                  </span>
                  Email/password and social login with roles (Employee, HR,
                  Admin) determining access.
                </p>
              </div>
            </div>
            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-[#7201FF] text-white  font-semibold text-xs uppercase rounded-full">
                    2
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base text-neutral-400">
                  <span className="text-white">Admin Control: </span>
                  Manage all verified employees, adjust salaries, assign HR
                  roles, and manage payroll using Stripe.
                </p>
              </div>
            </div>
            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-[#7201FF] text-white  font-semibold text-xs uppercase rounded-full">
                    3
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base text-neutral-400">
                  <span className="text-white">Employee Work Tracking: </span>
                  Log daily tasks, hours, and dates. View, edit, and delete
                  entries.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-[#7201FF] text-white  font-semibold text-xs uppercase rounded-full">
                    4
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base text-neutral-400">
                  <span className="text-white">HR Employee Management: </span>
                  View employee list and details, verify status, and initiate
                  salary payments.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 ms-1">
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-[#7201FF] text-white  font-semibold text-xs uppercase rounded-full">
                    5
                  </span>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base text-neutral-400">
                  <span className="text-white">
                    Salary and Payment History:{" "}
                  </span>
                  Employees view their payment history. HR initiates payments,
                  and Admins manage payroll.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
