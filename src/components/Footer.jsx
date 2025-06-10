

import {CgFacebook} from "react-icons/cg";
import {BsLinkedin} from "react-icons/bs";

import { FaGithub } from 'react-icons/fa6';
import { BiLogoMicrosoft } from "react-icons/bi";
import { IoMdTime, IoMdPin, IoMdMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-[#1f3337] text-gray-300 py-10 px-4">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and description */}
          <div>
            <img className=" w-44 mb-4" src="logofooter.webp" alt="" />
            
            <p className="">
              We’re passionate about keeping your gadgets in top shape. Our dedicated team of
              experienced technicians combines technical expertise with exceptional customer service
              to provide reliable repairs for all your electronic devices.
            </p>
            {/* Social icons */}
            <div className="flex gap-[15px] text-black mt-3 ">
        <a href='https://www.facebook.com/profile.php?id=100025282659899' className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
            <CgFacebook/>
        </a>
        <a href='ttps://github.com/emonkhan500' className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
        <FaGithub />
        </a>
        <a href='https://emon-khan-portfolio.netlify.app/' className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
        <BiLogoMicrosoft />
        </a>
        <a href='https://www.linkedin.com/in/emon-khan-247498306/' className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
            <BsLinkedin/>
        </a>
    </div>
          </div>
  
          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 ">
              <li>Home</li>
              <li>All Services</li>
              <li>Track My Repair</li>
              <li>Book a Repair</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
  
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Service</h3>
            <ul className="space-y-2 ">
              <li>Phone Repair</li>
              <li>Tablet Repair</li>
              <li>Laptop Repair</li>
              <li>Software Repair</li>
              <li>Smart Watch</li>
              <li>Game Console</li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div className="space-y-4 ">
            <div className=" space-x-2">
              <div className="flex items-start gap-3">
              <IoMdTime className="mt-1 text-[#c6e76c] text-lg" />
                <p className="font-semibold">We&apos;re Open</p>
              </div>
                <p>Monday - Saturday 08.00 - 18.00</p>
            </div>
            <div className=" space-x-2">
              <div className="flex items-start gap-3">
              <IoMdPin className="mt-1 text-[#c6e76c] text-lg" />
                <p className="font-semibold">Workshop Location</p>
              </div>
                <p>100 S Main St, New York, NY</p>
            </div>
            <div className=" space-x-2">
              <div className="flex items-start gap-3">
              <IoMdMail className="mt-1 text-[#c6e76c] text-lg" />
                <p className="font-semibold">Send a Message</p>
              </div>
                <p>emon562002@gmail.com</p>
            </div>
          </div>
        </div>
  
        {/* Bottom copyright */}
        <div className="mt-10 border-t border-gray-600 pt-6  text-gray-400 flex flex-col md:flex-row justify-between items-center xl:px-64">
          <p>Copyright 2025 - GadgetFix by Md Emon Khan</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;