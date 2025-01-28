import React, { useState } from 'react';

const testimonials = [
  {
    img: "https://via.placeholder.com/150",
    quote: "Pipe is the best service I’ve ever used. Highly recommend!",
    name: "Keith Ryu",
    title: "CEO of Fountain",
    logo: "https://via.placeholder.com/50"
  },
  {
    img: "https://via.placeholder.com/150",
    quote: "Pipe is amazing! It's a game-changer for SaaS businesses.",
    name: "Des Traynor",
    title: "Co-Founder of Intercom",
    logo: "https://via.placeholder.com/50"
  },
  {
    img: "https://via.placeholder.com/150",
    quote: "Pipe has transformed the way we manage cash flow. Brilliant service!",
    name: "John S. Kim",
    title: "CEO of Sendbird",
    logo: "https://via.placeholder.com/50"
  },
  {
    img: "https://via.placeholder.com/150",
    quote: "Fast, reliable, and easy to use. A+ service!",
    name: "Dan Wright",
    title: "President & CEO of DataRobot",
    logo: "https://via.placeholder.com/50"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center">
          <img
            className="w-16 h-16 rounded-full mb-4 md:mb-0 md:mr-4"
            src={testimonials[currentIndex].img}
            alt={testimonials[currentIndex].name}
          />
          <div className="text-center md:text-left">
            <img
              src={testimonials[currentIndex].logo}
              alt={`${testimonials[currentIndex].name} logo`}
              className="w-10 h-10 mb-2 mx-auto md:mx-0"
            />
            <p className="italic text-lg text-gray-300">
              "{testimonials[currentIndex].quote}"
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">{testimonials[currentIndex].name}</h3>
            <span className="text-sm text-gray-400">{testimonials[currentIndex].title}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={prevSlide} className="p-2 bg-gray-600 rounded-full text-white hover:bg-gray-500">Previous</button>
        <button onClick={nextSlide} className="p-2 bg-gray-600 rounded-full text-white hover:bg-gray-500">Next</button>
      </div>
    </div>
  );
};


export default Testimonials
