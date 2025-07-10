import { IoIosPhonePortrait } from "react-icons/io";
import { IoLaptopOutline } from "react-icons/io5";
import { BsTabletLandscape } from "react-icons/bs";
import { SiVlcmediaplayer } from "react-icons/si";
import Link from "next/link";

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-1 xl:gap-6 mt-5 md:mt-10 px-3 md:px-16 lg:px-3 xl:px-28">
      
      
      {/* Card 1 */}
      <div data-aos="fade-down" data-aos-duration="2000" className="bg-[#4d6c77] rounded-lg flex flex-col justify-between p-4">
        <div className="space-y-3 flex-grow">
          <div className="flex items-center justify-between text-white px-10 lg:px-2 mt-3">
            <IoIosPhonePortrait className="text-7xl" />
            <h1 className="text-4xl">01</h1>
          </div>
          <h1 className="text-white font-bold text-3xl">Phone Repair</h1>
          <p className="text-gray-300">
            Apple, Samsung, Google, Huawei, Xiaomi, OnePlus, Oppo, Vivo, Sony, LG, Motorola, Nokia, Realme, Asus
          </p>
        </div>
        <div className="mt-6 ">
          <Link href='/service' className="w-full block text-center px-4 py-2 rounded-full bg-white text-black">Read More</Link>
        </div>
      </div>

      {/* Card 2 */}
      <div data-aos="flip-left" data-aos-duration="2000" className="bg-[#4d6c77] rounded-lg flex flex-col justify-between p-4">
        <div className="space-y-3 flex-grow">
          <div className="flex items-center justify-between text-white px-10 lg:px-2 mt-3">
            <IoLaptopOutline className="text-7xl" />
            <h1 className="text-4xl">02</h1>
          </div>
          <h1 className="text-white font-bold text-3xl">Laptop Repair</h1>
          <p className="text-gray-300">
            Apple, Dell, HP, Lenovo, Asus, Acer, Microsoft, MSI, Razer, Samsung, LG, Huawei, Google, Alienware
          </p>
        </div>
        <div className="mt-6 ">
        <Link href='/service' className="w-full block text-center px-4 py-2 rounded-full bg-white text-black">Read More</Link>
        </div>
      </div>

      {/* Card 3 */}
      <div data-aos="flip-right" data-aos-duration="2000" className="bg-[#4d6c77] rounded-lg flex flex-col justify-between p-4">
        <div className="space-y-3 flex-grow">
          <div className="flex items-center justify-between text-white px-10 lg:px-2 mt-3">
            <BsTabletLandscape className="text-7xl" />
            <h1 className="text-4xl">03</h1>
          </div>
          <h1 className="text-white font-bold text-3xl">Tablet Repair</h1>
          <p className="text-gray-300">
            Apple, Samsung, Microsoft, Lenovo, Huawei, Asus, Google, Acer, Dell, HP, Sony, Alcatel, LG
          </p>
        </div>
        <div className="mt-6 ">
        <Link href='/service' className="w-full block text-center px-4 py-2 rounded-full bg-white text-black">Read More</Link>
        </div>
      </div>

      {/* Card 4 */}
      <div data-aos="fade-up" data-aos-duration="2000" className="bg-[#4d6c77] rounded-lg flex flex-col justify-between p-4">
        <div className="space-y-3 flex-grow">
          <div className="flex items-center justify-between text-white px-10 lg:px-2 mt-3">
            <SiVlcmediaplayer className="text-7xl" />
            <h1 className="text-4xl">04</h1>
          </div>
          <h1 className="text-white font-bold text-3xl">Software Repair</h1>
          <p className="text-gray-300">
            Operating System, Software Installation, Data Recovery, Virus and Malware Removal
          </p>
        </div>
        <div className="mt-6 ">
        <Link href='/service' className="w-full block text-center px-4 py-2 rounded-full bg-white text-black">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
