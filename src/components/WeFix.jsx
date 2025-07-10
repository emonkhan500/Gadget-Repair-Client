'use client'
import { useGetAllServicesQuery } from "@/allApi/allApi";
import React from "react";

const WeFix = () => {
  const { data, isLoading, error } = useGetAllServicesQuery();
  if (isLoading){ 
    return <div className="text-center mt-10">
      <span className="text-center loading loading-spinner loading-xl"></span>
    </div>
  };
  const serviceData = data?.services
  console.log(data?.services);
  return (
    <div>
      <div data-aos="fade-down" data-aos-duration="2000" className=" text-center">
        <div className="flex items-center  gap-3 mt-12 md:mt-20 lg:mt-28 justify-center ">
          <div className="w-10 h-[2px] bg-gray-400"></div>
          <span className="dark:text-white tracking-widest font-semibold text-gray-700">
            ISSUES WE REPAIR
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 text-gray-700 dark:text-white">
          What Do We Fix
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 lg:gap-10  2xl:gap-10 mt-5 md:mt-10 px-4 md:px-16 lg:px-10 2xl:px-28">

      {serviceData?.map((service, index) => (
  <div data-aos="zoom-in-down" data-aos-duration="3000" key={index}>
    <img src={service.image} alt={service.title} className="" />
    <h1 className="text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl font-semibold mt-3 lg:mt-5 mb-3 lg:mb-5">
      {service.title}
    </h1>
    <hr />
    <p className="text-gray-400 mt-3 lg:mt-5">
      {service.description}
    </p>                   
  </div>
))}

       
      </div>
    </div>
  );
};

export default WeFix;
