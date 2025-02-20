import {
  motion,
  useAnimation,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const reviews = [
    {
      id: 1,
      name: "Liam",
      username: "@liamW",
      text: "TeamLoom made it so easy to track my workflow. The interface is smooth and intuitive!",
      avatar: "https://www.reactbits.dev/assets/8-DlExvXZh.jpg",
    },
    {
      id: 2,
      name: "Ava",
      username: "@avaT",
      text: "I love how TeamLoom integrates everything I need to keep up with tasks and salaries.",
      avatar: "https://www.reactbits.dev/assets/5-BUilta6Y.jpg",
    },
    {
      id: 3,
      name: "Max",
      username: "@maxR",
      text: "As an HR exec, TeamLoom has made managing workflows and payments so much easier.",
      avatar: "https://www.reactbits.dev/assets/6-CoPM9HBX.jpg",
    },
    {
      id: 4,
      name: "Olivia",
      username: "@oliviaM",
      text: "Fantastic tool for managing employee updates and salary details. Highly recommend TeamLoom.",
      avatar: "https://www.reactbits.dev/assets/7-WcWh38Wv.jpg",
    },
    {
      id: 5,
      name: "James",
      username: "@jamesF",
      text: "TeamLoom is an all-in-one platform for employee management. Makes everything so much more efficient!",
      avatar: "https://www.reactbits.dev/assets/9-CCulDUUl.jpg",
    },
    {
      id: 6,
      name: "Sophia",
      username: "@sophiaK",
      text: "This website saves me so much time with salary tracking and contract management on TeamLoom.",
      avatar: "https://www.reactbits.dev/assets/1-BQBdWOXh.jpg",
    },
    {
      id: 7,
      name: "Ben",
      username: "@benL",
      text: "TeamLoom is a must-have for any business. It’s streamlined and easy to use.",
      avatar: "https://www.reactbits.dev/assets/2-BIyLlzsI.jpg",
    },
    {
      id: 8,
      name: "Isla",
      username: "@islaD",
      text: "Highly useful for HRs. Easy workflow management and all employee data in one place on TeamLoom.",
      avatar: "https://www.reactbits.dev/assets/3-pN7dByUJ.jpg",
    },
    {
      id: 9,
      name: "Leo",
      username: "@leoP",
      text: "The workflow updates on TeamLoom make it so much easier to stay on top of projects and salaries.",
      avatar: "https://www.reactbits.dev/assets/4-DE_PC7-8.jpg",
    },

  ];
  
const TestimonialsMarquee = () => {
  const containerRef = useRef(null);
  const [duplicateCount, setDuplicateCount] = useState(2);
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // const springScrollY = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  useEffect(() => {
    const updateDuplicateCount = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const viewportWidth = window.innerWidth;
      const newCount = Math.ceil((viewportWidth * 2) / containerWidth) + 1;
      setDuplicateCount(newCount);
    };

    updateDuplicateCount();
    window.addEventListener("resize", updateDuplicateCount);

    return () => window.removeEventListener("resize", updateDuplicateCount);
  }, []);

  const slideSpeed = window.innerWidth <= 768 ? 5 : 20;

  useEffect(() => {
    controls.start({
      x: [0, "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: slideSpeed,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  const duplicatedReviews = Array(duplicateCount).fill(reviews).flat();

  return (
    <div className="bg-black py-[70px]">
      <div className="max-w-2xl mx-auto text-left md:text-center mb-10 space-y-3 lg:mb-14 p-10">
        <h2 className="h1 text-white ">Here's what others are saying</h2>
        <p className="p1">
        They think TeamLoom is cool, maybe you will too!
        </p>
      </div>
      <div
        ref={containerRef}
        className="relative overflow-hidden py-16 container mx-auto"
      >
        <div className="absolute inset-0" />

        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-10 md:w-64 bg-gradient-to-r from-black to-transparent z-10" />

        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-10  md:w-64 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div className="relative">
          <motion.div
            className="flex space-x-6 flex-nowrap"
            animate={controls}
          >
            {duplicatedReviews.map((review, index) => (
              <motion.div
                key={`${review.id}-${index}`}
                className="relative min-w-[250px] min-h-[180px] px-4 py-4 rounded-xl flex flex-col justify-between"
                initial={{
                  opacity: 0,
                  y: 20,
                  rotate: index % 2 === 0 ? 5 : -5,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ rotate: 0, transition: { duration: 0.2 } }}
              >
                <div className="relative z-10 backdrop-blur-sm bg-white/10 p-6 rounded-xl border-2 border-[#7201FF] shadow-xl flex flex-col justify-between h-full">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-800 rounded-full blur-sm" />
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="relative w-12 h-12 rounded-full object-cover border-2 border-white/20"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm sm:text-base">
                        {review.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-purple-200/80">
                        {review.username}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-white/90 text-sm leading-relaxed">
                    {review.text}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl -z-10" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsMarquee;
