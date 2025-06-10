import React from 'react';

const page = () => {
    return (
      <div className="relative h-screen w-full">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://reactheme.com/products/wordpress/gadgetfix/wp-content/uploads/2024/12/1-1.webp')",
       // Controls the background opacity
    }}
  ></div>
  <div className="absolute inset-0 bg-black opacity-30 z-0"></div>


  {/* Content goes here */}
  <div className="relative z-10 text-white p-8">
    <h1 className="text-3xl font-bold">Your Content Here</h1>
  </div>
</div>
    );
};

export default page;