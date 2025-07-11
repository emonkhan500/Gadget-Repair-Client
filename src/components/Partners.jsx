'use client'
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination ,Autoplay} from "swiper/modules";
const Partners = () => {
    return (
        <div className='mt-20 lg:mt-36  lg:pl-20'>
            <Swiper
        slidesPerView={6}
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{         // ✅ Added autoplay config
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination,Autoplay]}
        className="partner-swiper mySwiper w-full  mx-auto px-4 md:px-16 lg:px-10 2xl:px-28"
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 3 }, // Mobile (sm)
          550: { slidesPerView: 3, spaceBetween: 3 }, // Small tablets
          640: { slidesPerView: 3, spaceBetween: 3 }, // Tablets
          770: { slidesPerView: 4, spaceBetween: 15 }, // Small laptops
          1024: { slidesPerView: 4, spaceBetween: 10 }, // Standard laptops (adjusted)
          1280: { slidesPerView: 6, spaceBetween: 10 }, // Large laptops
          1440: { slidesPerView: 6, spaceBetween: 10 }, // Widescreen monitors
        }}
      >
        <SwiperSlide>
          
            <img
              className="dark:bg-gray-300 w-32 md:w-56 lg:w-40 xl:w-44 "
              src="iphone.webp"
              alt="Cake & Milk"
            />
            
          
        </SwiperSlide>

        
        <SwiperSlide>
          
            <img
              className="dark:bg-gray-300 w-32 md:w-44 lg:w-40 xl:w-44"
              src="lenevo.webp"
              alt="Cake & Milk"
            />
            
          
        </SwiperSlide>
        <SwiperSlide>
          
            <img
              className="dark:bg-gray-300 w-32 md:w-44 lg:w-40 xl:w-44"
              src="hp.webp"
              alt="Cake & Milk"
            />
            
          
        </SwiperSlide>
        <SwiperSlide>
          
            <img
              className="dark:bg-gray-300 w-32 md:w-44 lg:w-40 xl:w-44"
              src="sony.webp"
              alt="Cake & Milk"
            />
            
          
        </SwiperSlide>
        <SwiperSlide>
          
            <img
              className="dark:bg-gray-300 w-32 md:w-44 lg:w-40 xl:w-44"
              src="p.webp"
              alt="Cake & Milk"
            />
            
          
        </SwiperSlide>
        <SwiperSlide>
          
            <img
              className="dark:bg-gray-300 w-32 md:w-44 lg:w-40 xl:w-44"
              src="bose.webp"
              alt="Cake & Milk"
            />
            
          
        </SwiperSlide>
        <SwiperSlide>
          
            <img
              className="dark:bg-gray-300 w-32 md:w-44 lg:w-40 xl:w-44"
              src="dell.webp"
              alt="Cake & Milk"
            />
            
          
        </SwiperSlide>
        <SwiperSlide>
          
            <img
              className="dark:bg-gray-300 w-32 md:w-44 lg:w-40 xl:w-44"
              src="fuji.webp"
              alt="Cake & Milk"
            />
            
          
        </SwiperSlide>
        <SwiperSlide>
          
            <img
              className="dark:bg-gray-300 w-32 md:w-44 lg:w-40 xl:w-44"
              src="asus.webp"
              alt="Cake & Milk"
            />
            
          
        </SwiperSlide>

        
       
      </Swiper>
            
        </div>
    );
};

export default Partners;