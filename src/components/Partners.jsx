'use client'
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
const Partners = () => {
    return (
        <div>
            <Swiper
        slidesPerView={6}
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper w-full  mx-auto px-4 md:px-16 lg:px-10 2xl:px-28"
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 0 }, // Mobile (sm)
          550: { slidesPerView: 2, spaceBetween: 2 }, // Small tablets
          640: { slidesPerView: 2, spaceBetween: 5 }, // Tablets
          770: { slidesPerView: 4, spaceBetween: 8 }, // Small laptops
          1024: { slidesPerView: 6, spaceBetween: 24 }, // Standard laptops (adjusted)
          1280: { slidesPerView: 6, spaceBetween: 12 }, // Large laptops
          1440: { slidesPerView: 6, spaceBetween: 15 }, // Widescreen monitors
        }}
      >
        <SwiperSlide>
          
            <img
              className=""
              src="iphone.webp"
              alt="Cake & Milk"
            />
            
          
        </SwiperSlide>

        <SwiperSlide>
          
            <img
              className=""
              src="iphone.webp"
              alt="Cake & Milk"
            />
            
          
        </SwiperSlide>
        <SwiperSlide>
          
            <img
              className=""
              src="iphone.webp"
              alt="Cake & Milk"
            />
            
          
        </SwiperSlide>
        <SwiperSlide>
          
            <img
              className=""
              src="iphone.webp"
              alt="Cake & Milk"
            />
            
          
        </SwiperSlide>
        <SwiperSlide>
          
            <img
              className=""
              src="iphone.webp"
              alt="Cake & Milk"
            />
            
          
        </SwiperSlide>
        <SwiperSlide>
          
            <img
              className=""
              src="iphone.webp"
              alt="Cake & Milk"
            />
            
          
        </SwiperSlide>
        <SwiperSlide>
          
            <img
              className=""
              src="iphone.webp"
              alt="Cake & Milk"
            />
            
          
        </SwiperSlide>

        
       
      </Swiper>
            
        </div>
    );
};

export default Partners;