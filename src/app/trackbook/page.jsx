import ShareHead from '@/components/ShareHead/ShareHead';
import React from 'react';

const page = () => {
    return (
        <div>
          <div className='relative pt-10 px-4 md:px-16 lg:px-36'>
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
    <ShareHead upTitle={'What Do We Fix'} pageTitle={'Track Your Repair'}></ShareHead>
    
    
  </div>
  
        </div>
        
        </div>
    );
};

export default page;