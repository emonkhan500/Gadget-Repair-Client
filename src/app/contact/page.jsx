import React from 'react';

const page = () => {
    return (
        <div className=" mt-16 md:mt-5">
      <div className="flex flex-col md:flex-row gap-8 md:gap-3 lg:gap-16 2xl:gap-32 relative">
        <div className="w-full md:w-1/2 ">
          <img
            className="md:h-[600px] xl:h-[650px] 2xl:h-[750px] w-full rounded-ee-4xl"
            src="banner-11.webp"
            alt=""
          />
        </div>
        
        <div className="w-full md:w-1/2 xl:pr-32 2xl:pr-64 space-y-3 lg:space-y-8 px-4">
          <div className="flex items-center  gap-3 md:mt-4 xl:mt-16 2xl:mt-22">
            <div className="w-10 h-[2px] bg-gray-400"></div>
            <span className=" tracking-widest font-semibold text-gray-700">
              CONTACT US
            </span>
          </div>
          <form  className="mt-6">
            <div className="mb-4 ">
              <label
                className="text-[#253D4E] block  text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your Name"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4 animate__animated animate__lightSpeedInLeft animate__slow">
              <label
                className="text-[#253D4E] block  text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4 animate__animated animate__lightSpeedInRight animate__slow">
              <label
                className=" text-[#253D4E] block  text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="pass"
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>
            
            <button
              type="submit"
              className=" w-full text-[#253D4E] font-bold py-2 px-4 border rounded-lg  shadow-md  hover:shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
          
         
          
        </div>
      </div>
    </div>
    );
};

export default page;