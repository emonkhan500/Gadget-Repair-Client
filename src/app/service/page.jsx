import ShareHead from '@/components/ShareHead/ShareHead';
import { IoIosPhonePortrait } from "react-icons/io";
import { IoLaptopOutline } from "react-icons/io5";
import { BsTabletLandscape } from "react-icons/bs";
import { SiVlcmediaplayer } from "react-icons/si";
import { IoWatchOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import Letter from '@/components/serviceCompo/Letter';
import Link from 'next/link';



const page = () => {
    return (
      <div className="relative  w-full">
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
  <div className="relative z-10 text-white pt-6 ">
   <ShareHead upTitle={'What Do We Fix'} pageTitle={'Our Services'}></ShareHead>

   {/* card section */}
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-10 md:mt-10  ">
      
      {/* Card 1 */}
      <div className="bg-[#19272b]  flex flex-col justify-between p-4">
        <div className="space-y-3 flex-grow">
          <div className="flex items-center justify-between text-white px-10 lg:px-2 mt-3">
            <IoIosPhonePortrait className="text-7xl text-[#C6E76C]" />
            <h1 className="text-4xl">01</h1>
          </div>
          <h1 className="text-white font-bold text-3xl">Phone Repair</h1>
          <p className="text-gray-300">
            Apple, Samsung, Google, Huawei, Xiaomi, OnePlus, Oppo, Vivo, Sony, LG, Motorola, Nokia, Realme, Asus
          </p>
        </div>
        <Link href='/bookrepair' className="mt-6 text-center w-full px-4 py-2 rounded-full bg-[#C6E76C] text-black">Book Now</Link>
      </div>

      {/* Card 2 */}
      <div className="bg-[#223035]  flex flex-col justify-between p-4">
        <div className="space-y-3 flex-grow">
          <div className="flex items-center justify-between text-white px-10 lg:px-2 mt-3">
            <IoLaptopOutline className="text-7xl text-[#C6E76C]" />
            <h1 className="text-4xl">02</h1>
          </div>
          <h1 className="text-white font-bold text-3xl">Laptop Repair</h1>
          <p className="text-gray-300">
            Apple, Dell, HP, Lenovo, Asus, Acer, Microsoft, MSI, Razer, Samsung, LG, Huawei, Google, Alienware
          </p>
        </div>
        <Link href='/bookrepair' className="mt-6 text-center w-full px-4 py-2 rounded-full bg-[#C6E76C] text-black">Book Now</Link>
      </div>
      {/* img 1 */}
      <div>
        <img src="bg.webp" alt="" />
      </div>

      {/* Card 3 */}
      <div className="bg-[#19272b]  flex flex-col justify-between p-4">
        <div className="space-y-3 flex-grow">
          <div className="flex items-center justify-between text-white px-10 lg:px-2 mt-3">
            <BsTabletLandscape className="text-7xl text-[#C6E76C]" />
            <h1 className="text-4xl">03</h1>
          </div>
          <h1 className="text-white font-bold text-3xl">Tablet Repair</h1>
          <p className="text-gray-300">
            Apple, Samsung, Microsoft, Lenovo, Huawei, Asus, Google, Acer, Dell, HP, Sony, Alcatel, LG
          </p>
        </div>
        <Link href='/bookrepair' className="mt-6 text-center w-full px-4 py-2 rounded-full bg-[#C6E76C] text-black">Book Now</Link>
      </div>

      {/* Card 4 */}
      <div className="bg-[#19272b]  flex flex-col justify-between p-4">
        <div className="space-y-3 flex-grow">
          <div className="flex items-center justify-between text-white px-10 lg:px-2 mt-3">
            <SiVlcmediaplayer className="text-7xl text-[#C6E76C]" />
            <h1 className="text-4xl">04</h1>
          </div>
          <h1 className="text-white font-bold text-3xl">Software Repair</h1>
          <p className="text-gray-300">
            Operating System, Software Installation, Data Recovery, Virus and Malware Removal
          </p>
        </div>
        
          <Link href='/bookrepair' className="mt-6 text-center w-full px-4 py-2 rounded-full bg-[#C6E76C] text-black">Book Now</Link>
        
      </div>
      {/* img 2 */}
      <div>
        <img className='h-full' src="faq.webp" alt="" />
      </div>
      {/* Card 5 */}
      <div className="bg-[#223035]  flex flex-col justify-between p-4">
        <div className="space-y-3 flex-grow">
          <div className="flex items-center justify-between text-white px-10 lg:px-2 mt-3">
          <IoWatchOutline  className="text-7xl text-[#C6E76C]" />
            <h1 className="text-4xl">05</h1>
          </div>
          <h1 className="text-white font-bold text-3xl">Smartwatch Repair</h1>
          <p className="text-gray-300">
          Apple, Dell, HP, Lenovo, Asus, Acer, Microsoft, MSI, Razer, Samsung, LG, Toshiba, Huawei, Google, Alienware
          </p>
        </div>
        <Link href='/bookrepair' className="mt-6 text-center w-full px-4 py-2 rounded-full bg-[#C6E76C] text-black">Book Now</Link>
      </div>
      {/* Card 6 */}
      <div className="bg-[#19272b]  flex flex-col justify-between p-4">
        <div className="space-y-3 flex-grow">
          <div className="flex items-center justify-between text-white px-10 lg:px-2 mt-3">
          <IoGameControllerOutline   className="text-7xl text-[#C6E76C]" />
            <h1 className="text-4xl">05</h1>
          </div>
          <h1 className="text-white font-bold text-3xl">Game Console</h1>
          <p className="text-gray-300">
          Apple, Dell, HP, Lenovo, Asus, Acer, Microsoft, MSI, Razer, Samsung, LG, Toshiba, Huawei, Google, Alienware
          </p>
        </div>
        <Link href='/bookrepair' className="mt-6 text-center w-full px-4 py-2 rounded-full bg-[#C6E76C] text-black">Book Now</Link>
      </div>
    </div>
    <Letter></Letter>
  </div>
  
</div>
    );
};

export default page;