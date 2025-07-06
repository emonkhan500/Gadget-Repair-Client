import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";

const Banner = () => {
  return (
    <div className=" mt-16 md:mt-5">
      <div className="flex flex-col md:flex-row gap-8 md:gap-3 lg:gap-16 2xl:gap-32 relative">
        <div className="w-full md:w-1/2 ">
          <img
            className="md:h-[600px] xl:h-[650px] 2xl:h-[750px]  w-full rounded-ee-4xl "
            src="banner-11.webp"
            alt=""
          />
        </div>
        <div className="hidden lg:flex  absolute h-40 xl:h-44 w-40 xl:w-44 top-60 lg:left-100 xl:left-150 2xl:left-203">
            <img src="scratch.webp" alt="" />
        </div>
        <div className="w-full md:w-1/2 xl:pr-32 2xl:pr-64 space-y-3 lg:space-y-8 px-4">
          <div className="flex items-center  gap-3 md:mt-4 xl:mt-16 2xl:mt-22">
            <div className="w-10 h-[2px] bg-gray-400"></div>
            <span className=" tracking-widest font-semibold text-gray-700">
              OFFICIALLY CERTIFIED
            </span>
          </div>
          <h1 className="text-[#223035] font-semibold text-4xl lg:text-5xl xl:text-6xl">
            Don't worry, we've got your gadget repair covered!
          </h1>
          <p className="text-base text-gray-600">
            We’re passionate about keeping your gadgets in top shape. Our team
            of experienced technicians combines technical expertise with
            exceptional customer service to provide reliable repairs.
          </p>
          <div className="mb-4 ">
            <p className="flex items-center gap-2 mt-8   text-sm md:text-lg md:font-semibold">
              <IoMdCheckmark className="text-green-500 text-xl font-bold" />
              We are highly trained and certified technicians
            </p>
            <p className="flex items-center gap-2 text-sm md:text-lg md:font-semibold">
              <IoMdCheckmark className="text-green-500 text-xl font-bold" />
              We provide thorough diagnostic services accurately
            </p>
            <p className="flex items-center gap-2 text-sm md:text-lg md:font-semibold">
              <IoMdCheckmark className="text-green-500 text-xl font-bold" />
              We use only high-quality parts for all repairs
            </p>
          </div>
          <div className="mt-4 ">
          <Link href='/bookrepair' className="w-full md:w-auto px-7 py-3 rounded-full bg-[#4d6c77] text-white">
            Book a Repair
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
