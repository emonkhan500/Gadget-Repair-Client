import Link from 'next/link';
import React from 'react';
import { FaGoogle } from 'react-icons/fa6';

const page = () => {
    return (
        <div>
            <div className='w-full lg:max-w-7xl mx-auto flex flex-col md:flex-row gap-3 mt-26'>
                <div className='w-full md:w-1/2'>
                    <h1>emon</h1>
                </div>
                <div className='w-full md:w-1/2 '>
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
            <div className="flex items-center justify-between mb-4 animate__animated animate__lightSpeedInLeft animate__slow">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-[#3BB77E]"
                />
                <span className="ml-2 text-sm text-[#253D4E]">Remember me</span>
              </label>
              <a href="#" className="text-sm text-[#3BB77E] hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className=" w-full text-[#253D4E] font-bold py-2 px-4 rounded-lg border border-green-500 shadow-md hover:bg-[#3BB77E] hover:text-white hover:shadow-lg transition-all duration-300"
            >
              Sign Up
            </button>
          </form>
          <button
            
            className=" mt-4 w-full text-[#253D4E] font-bold py-2 px-4 rounded-lg border border-green-500 shadow-md hover:bg-[#3BB77E] hover:text-white hover:shadow-lg transition-all duration-300 flex items-center justify-center"
          >
            <FaGoogle className="mr-3 text-[#3BB77E] hover:text-black" />
            Sign In with Google
          </button>

          <p className="text-[#253D4E] mt-6 text-center font-bold">
            Already have an account?{"  "}
            <Link href="/signin" className="font-bold text-[#3BB77E]">
              Sign In
            </Link>
          </p>
                </div>
          
        </div>
            </div>
        
    );
};

export default page;