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
        slidesPerView={10}
        spaceBetween={1}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper w-full lg:w-[1586px] mx-auto lg:pl-7"
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 0 }, // Mobile (sm)
          550: { slidesPerView: 4, spaceBetween: 2 }, // Small tablets
          640: { slidesPerView: 5, spaceBetween: 3 }, // Tablets
          770: { slidesPerView: 6, spaceBetween: 5 }, // Small laptops
          1024: { slidesPerView: 7, spaceBetween: 24 }, // Standard laptops (adjusted)
          1280: { slidesPerView: 10, spaceBetween: 12 }, // Large laptops
          1440: { slidesPerView: 11, spaceBetween: 15 }, // Widescreen monitors
        }}
      >
        <SwiperSlide>
          <div className="w-40 h-56 lg:py-3 bg-[#F2FCE4] flex flex-col items-center rounded-lg ">
            <img
              className="w-24 h-24 object-contain"
              src="https://i.ibb.co/QvGkSQvq/Link-cat-13-png.png"
              alt="Cake & Milk"
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Cake & Milk
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-40 h-56 lg:py-3 bg-[#FFF3FF] flex flex-col items-center rounded-lg ">
            <img
              className="w-24 h-24 object-contain"
              src="https://i.ibb.co/XxNXLFTs/Link-cat-2-png.png"
              alt="Vegetables"
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Vegetables
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-40 h-56 lg:py-3 bg-[#F2FCE4] flex flex-col items-center rounded-lg ">
            <img
              className="w-24 h-24 object-contain"
              src="https://i.ibb.co/xSVvX39n/Link-cat-3-png.png"
              alt="Strawberry"
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Strawberry
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-40 h-56 lg:py-3 bg-[#FFF3EB] flex flex-col items-center rounded-lg ">
            <img
              className="w-24 h-24 object-contain"
              src="https://i.ibb.co/hJksmk92/Link-cat-4-png.png"
              alt="Snack"
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Snack
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-40 h-56 lg:py-3 bg-[#FEEFEA] flex flex-col items-center rounded-lg ">
            <img
              className="w-24 h-24 object-contain"
              src="https://i.ibb.co/tMyBpB6y/Link-cat-9-png.png"
              alt="Black Plum"
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Black Plum
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-40 h-56 lg:py-3 bg-[#FFFCEB] flex flex-col items-center rounded-lg ">
            <img
              className="w-24 h-24 object-contain"
              src="https://i.ibb.co/MDcVTkCv/Link-cat-5-png.png"
              alt="Custard"
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Custard
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-40 h-56 lg:py-3 bg-[#ECFFEC] flex flex-col items-center rounded-lg ">
            <img
              className="w-24 h-24 object-contain"
              src="https://i.ibb.co/8FY0bdJ/Link-cat-11-png.png"
              alt="Peach"
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Peach
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-40 h-56 lg:py-3  bg-[#FFFCEB] flex flex-col items-center rounded-lg ">
            <img
              className=""
              src="https://i.ibb.co.com/MDcVTkCv/Link-cat-5-png.png"
              alt=""
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Custard
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>
       
      </Swiper>
            
        </div>
    );
};

export default Partners;