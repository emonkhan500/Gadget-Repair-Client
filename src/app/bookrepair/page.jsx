import ShareHead from '@/components/ShareHead/ShareHead';
import React from 'react';

const page = () => {
    return (
        <div className='relative px-16 lg:px-36'>
            <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://reactheme.com/products/wordpress/gadgetfix/wp-content/uploads/2024/12/1-1.webp')",
       // Controls the background opacity
    }}
  ></div>
  <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
  <div className='relative z-10 text-white pt-6 '>
    <ShareHead upTitle={'What Do We Fix'} pageTitle={'Book a Repair'}></ShareHead>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 p-6 pt-10 pb-36">
      
      <div className="text-center space-y-2 border-x px-4">
        <button className=" text-black rounded-lg  bg-[#C6E76C] px-5 py-1">STEP 1</button>
        <h3 className="text-2xl font-medium text-white mt-3">
          Select your repair & request a quote
        </h3>
      </div>

      <div className="text-center space-y-2 border-r  px-4">
        <button className="text-black rounded-lg  bg-[#C6E76C] px-5 py-1">STEP 2</button>
        <h3 className="text-2xl font-medium text-white mt-3">
          Send your gadget or visit our store
        </h3>
      </div>

      <div className="text-center space-y-2 border-r px-4">
        <button className="text-black rounded-lg  bg-[#C6E76C] px-5 py-1">STEP 3</button>
        <h3 className="text-2xl font-medium text-white mt-3">
          Our technicians fix your gadget
        </h3>
      </div>

      <div className="text-center space-y-2 border-r px-4">
        <button className="text-black rounded-lg  bg-[#C6E76C] px-5 py-1">Step 4</button>
        <h3 className="text-2xl font-medium text-white mt-3">
          We'll request payment
        </h3>
      </div>

      <div className="text-center space-y-2 border-r px-4">
        <button className="text-black rounded-lg  bg-[#C6E76C] px-5 py-1">Step 5</button>
        <h3 className="text-2xl font-medium text-white mt-3 ">
          Return to you
        </h3>
      </div>

    </div>
  </div>
            
        </div>
    );
};

export default page;