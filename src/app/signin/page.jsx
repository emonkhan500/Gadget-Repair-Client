'use client'
import Link from 'next/link';
import React from 'react';
import {signIn, useSession} from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa6';

import Lottie from "lottie-react";
import login from "../../../public/login1.json";
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter()
  const session =useSession()

// social login
const handleGoogle= async ()=>{
const response = await signIn('google')

}
if(session.status === 'authenticated'){
  router.push('/')

}


  // login with email
  const handleSignIn =async (e)=>{
    e.preventDefault()


const email = e.target.email.value;
const password = e.target.pass.value;
const response = await signIn("credentials", {
  email,
  password,
  redirect: false,
});
if(response.status ===200){
  router.push('/')
}

  }
    return (
        <div>
          
         <div className='text-center mt-16 md:mt-26'>
         <h2 className="animate__animated animate__bounceIn animate__slow text-3xl font-bold text-[#3BB77E] lg:mt-8 mb-2 text-[#C6E76C]">
            Welcome To Gadget Fix !
          </h2>
          <p className="text-[#253D4E] text-lg font-semibold">
            Experience The Best Gadget Repairing Platform !
          </p>
         </div>
          
            <div className='w-full lg:max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-6 md:gap-0  mb-20'>
                <div className='w-full md:w-1/2 px-4'>
                <form onSubmit={handleSignIn} className="mt-6">
           
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
              <a href="#" className="text-sm text-[#253D4E] hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className=" w-full text-[#253D4E] font-bold py-2 px-4 border rounded-lg  shadow-md  hover:shadow-lg transition-all duration-300"
            >
              Sign In
            </button>
          </form>
          <button onClick={handleGoogle}
            
            className=" mt-4 w-full text-[#253D4E] font-bold py-2 px-4 rounded-lg border  shadow-md  hover:shadow-lg transition-all duration-300 flex items-center justify-center"
          >
            <FaGoogle className="mr-3 text-[#3BB77E] " />
            Sign In with Google
          </button>

          <p className="text-[#253D4E] mt-6 text-center font-bold">
            New Here? {"  "}
            <Link href="/signup" className="font-bold text-lg text-[#C6E76C]">
              Sign UP
            </Link>
          </p>
                </div>
          
                <div className='w-full md:w-1/2 '>
                <Lottie animationData={login}  className='h-[350px] w-full'/>
                </div>
        </div>
            </div>
    );
};

export default page;