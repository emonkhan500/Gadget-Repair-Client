'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa6';

import Lottie from "lottie-react";
import login from "../../../public/login1.json";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
const page = () => {
  const router = useRouter()
  const session =useSession()

const[registerError,setregisterError]=useState('')

  // social login
  const handleGoogle = async () => {
    await signIn('google', { callbackUrl: '/' });
  };
  
  
const handleSignUp = async (e) => {
  e.preventDefault();
  setregisterError('');

  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.pass.value;

  const newUser = { name, email, password };

  try {
    const response = await fetch('/signup/api', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (response.ok) {
      e.target.reset();
      Swal.fire("User created successfully! Now sign in");
      router.push("/signin");
    } else {
      // Server responded with an error status
      setregisterError(data.message || 'Signup failed. Please try again.');
    }
  } catch (error) {
    // Network error or server is down
    console.error('Signup error:', error);
    setregisterError('Something went wrong. Please try again later.');
  }
};
  
    return (
        <div>
          <ToastContainer></ToastContainer>
          <div className='text-center mt-26 lg:mt-38 mb-8'>
         <h2  className="animate__animated animate__bounceIn animate__slow text-2xl md:text-3xl font-bold text-[#3BB77E] lg:mt-8 mb-2 text-[#C6E76C]">
            Welcome To Gadget Fix !
          </h2>
          <p className="text-[#253D4E] dark:text-white text-lg font-semibold mt-4 my-4">
            Experience The Best Gadget Repairing Platform !
          </p>
         </div>
          
            <div className='w-full lg:max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-6 md:gap-0  mb-20'>
                <div className='w-full md:w-1/2 '>
                <Lottie animationData={login}  className='h-[350px] w-full'/>
                </div>
                <div className='w-full md:w-1/2 px-4'>
                <form onSubmit={handleSignUp} className="mt-6">
            <div className="mb-4 animate__animated animate__backInDown animate__slow">
              <label
                className="text-[#253D4E] dark:text-white block  text-sm font-bold mb-2"
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
                className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white  placeholder-gray-500 dark:placeholder-text-gray-200 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4 animate__animated animate__backInDown animate__slow">
              <label
                className="text-[#253D4E] dark:text-white block  text-sm font-bold mb-2"
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
                className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white  placeholder-gray-500 dark:placeholder-text-gray-200 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4 animate__animated animate__backInDown animate__slow">
              <label
                className=" text-[#253D4E] dark:text-white block  text-sm font-bold mb-2"
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
                className="w-full px-4 py-2 border rounded-lg text-gray-700 dark:text-white  placeholder-gray-500 dark:placeholder-text-gray-200 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="flex items-center justify-between mb-4 animate__animated animate__backInDown animate__slow">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-[#3BB77E]"
                />
                <span className="ml-2 text-sm text-[#253D4E] dark:text-white">Remember me</span>
              </label>
              <a href="#" className="text-sm text-[#253D4E] dark:text-white hover:underline">
                Forgot Password?
              </a>
            </div>
            {registerError && (
              <p className="text-red-600 text-lg">{registerError}</p>
            )}
            <button 
              type="submit"
              className=" w-full text-[#253D4E] dark:text-white font-bold py-2 px-4 border rounded-lg  shadow-md  hover:shadow-lg transition-all duration-300"
            >
              Sign Up
            </button>
          </form>
          <button
            onClick={handleGoogle}
            className=" mt-4 w-full text-[#253D4E] dark:text-white font-bold py-2 px-4 rounded-lg border  shadow-md  hover:shadow-lg transition-all duration-300 flex items-center justify-center"
          >
            <FaGoogle className="mr-3 text-[#3BB77E] " />
            Sign In with Google
          </button>

          <p className="text-[#253D4E] dark:text-white mt-6 text-center font-bold">
            Already have an account?{"  "}
            <Link href="/signin" className="font-bold text-lg text-[#C6E76C]">
              Sign In
            </Link>
          </p>
                </div>
          
        </div>
            </div>
        
    );
};

export default page;