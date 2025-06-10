
import React from 'react';
import { IoIosArrowForward, IoMdHome } from 'react-icons/io';

const ShareHead = ({upTitle, pageTitle}) => {
    return (
        <div>
            <div className="flex items-center  gap-3 mt-12 md:mt-20 lg:mt-28 justify-center text-lg text-white">
            <div className="w-10 h-[2px] bg-white"></div>
            <span className=" tracking-widest font-semibold text-white">
            {upTitle}
            </span>
          </div>
        
  

  <div className="flex items-center gap-4 justify-center mt-3  font-medium"> 
    
    <h1 className="text-[#7E7E7E]  flex justify-center items-center gap-2 text-5xl text-white font-bold mb-10"> {pageTitle}</h1>
  </div>
</div>
   
    );
};

export default ShareHead;