import { motion, useAnimation, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Rui",
    username: "@Logreg_n_coffee",
    text: "Literally the coolest React library in React",
    avatar: "https://www.reactbits.dev/assets/8-DlExvXZh.jpg",
  },
  {
    id: 2,
    name: "Vollhard",
    username: "@0xVollhard",
    text: "This website is reactbits.dev. Thank me later devs",
    avatar: "https://www.reactbits.dev/assets/8-DlExvXZh.jpg",
  },
  {
    id: 3,
    name: "Deepam Makwana",
    username: "@makwanadeepam",
    text: "Really impressed by reactbits.dev. Check it out.",
    avatar: "https://www.reactbits.dev/assets/8-DlExvXZh.jpg",
  },
  {
    id: 4,
    name: "CY",
    username: "@yyyyyy4ever",
    text: "This UI components library is mind-blowing!",
    avatar: "https://www.reactbits.dev/assets/8-DlExvXZh.jpg",
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

  const springScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const parallaxY = useTransform(springScrollY, [0, 1], ["-10%", "10%"]); 

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

  useEffect(() => {
    controls.start({
      x: [0, "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  const duplicatedReviews = Array(duplicateCount).fill(reviews).flat();

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-black py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      <motion.div style={{ y: parallaxY }} className="relative">
        <motion.div className="flex space-x-6" animate={controls}>
          {duplicatedReviews.map((review, index) => (
            <motion.div
              key={`${review.id}-${index}`}
              className="relative min-w-[300px] px-6 py-4 rounded-xl"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ rotate: 5, transition: { duration: 0.1 } }}
            >
              <div className="relative z-10 backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-white/20 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-sm" />
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="relative w-12 h-12 rounded-full object-cover border-2 border-white/20"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{review.name}</h3>
                    <p className="text-sm text-purple-200/80">{review.username}</p>
                  </div>
                </div>
                <p className="mt-4 text-white/90 leading-relaxed">{review.text}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TestimonialsMarquee;