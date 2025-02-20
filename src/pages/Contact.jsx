import { Link } from "react-router-dom";
import CommonHSection from "../components/commonHSection";

const Contact = () => {
  return (
    <div className="bg-black min-h-screen py-[110px]">

      <section className="bg-black text-white">
        <div className="sw ">
          <div className="flex flex-col gap-5 items-center text-center">
            <h2 className="f2 text-[8vh] leading-[80px]">Contact Us</h2>
            <p className="text-lg p1 w-2/3">Get in touch with us. We will respond to your inquiry within 24 hours.</p>

          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">

        <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1586769852836-bc069f19e1b6')",
            }}
          >
            <div className="relative p-8 h-full flex flex-col justify-end text-white">
              <h3 className="text-2xl mb-4">Visit Our Office</h3>
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  123 Business Street, New York, NY 10001
                </p>
                <p className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  contact@company.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black p-6 md:p-8 rounded-lg">
          <form className="space-y-6">
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-400
                                        focus:outline-none focus:border-white transition-colors rounded-md"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-400
                                        focus:outline-none focus:border-white transition-colors  rounded-md"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-400
                                        focus:outline-none focus:border-white transition-colors  rounded-md"
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-400
                                        focus:outline-none focus:border-white transition-colors resize-none  rounded-md"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full btn1 py-4 border tracking-wide border-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
