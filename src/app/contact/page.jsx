'use client';

import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import AOS from "aos";
import "aos/dist/aos.css";


const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you!");
    e.target.reset();
  };

  return (
    <div className="mt-16 md:mt-5 mb-5">
      <ToastContainer />
      <div className="flex flex-col md:flex-row gap-8 md:gap-3 lg:gap-16 2xl:gap-32 relative">
        <div data-aos="fade-right" data-aos-duration="2000" className="w-full md:w-1/2 mb-6">
          <img
            className="md:h-[600px] xl:h-[650px] 2xl:h-[750px] w-full rounded-ee-4xl"
            src="contact.webp"
            alt="Contact"
          />
        </div>

        <div data-aos="fade-left" data-aos-duration="2000" className="w-full md:w-1/2 xl:pr-32 2xl:pr-64 space-y-3 lg:space-y-8 px-4 md:mt-20">
          <div className="flex items-center gap-3 md:mt-4 xl:mt-16 2xl:mt-22">
            <div className="w-10 h-[2px] bg-gray-400"></div>
            <span className="tracking-widest font-semibold text-gray-700">
              CONTACT US
            </span>
          </div>

          <form onSubmit={handleSubmit} className="mt-6">
            <div data-aos="fade-up"
    data-aos-duration="2000" 
            className="mb-4 ">
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your Name"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-700 focus:outline-none"
              />
            </div>
            <div data-aos="fade-up"
    data-aos-duration="2500" className="mb-4">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-700 focus:outline-none"
              />
            </div>
            <div data-aos="fade-up"
    data-aos-duration="3000" className="mb-4">
              <textarea
                name="message"
                required
                rows="7"
                placeholder="Enter your message"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-700 focus:outline-none resize-none"
              ></textarea>
            </div>

            <div data-aos="fade-up"
    data-aos-duration="2500"><button 
              type="submit"
              className="w-full bg-[#4d6c77] text-white font-bold py-2 px-4 border rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Send Message
            </button></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
