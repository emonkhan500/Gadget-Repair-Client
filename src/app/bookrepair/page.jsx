"use client";
import { useCreateBookingMutation } from "@/allApi/allApi";

import ShareHead from "@/components/ShareHead/ShareHead";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuAlarmClock } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { data } = useSession();
  const [createBooking, { isLoading: isCreating }] = useCreateBookingMutation();



  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      gadget: e.target.gadget.value,
      model: e.target.model.value,
      date: e.target.date.value,
      problem: e.target.problem.value,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };

    try {
      const response = await createBooking(bookingData).unwrap();
      toast.success(response?.message);
      e.target.reset();
    } catch (err) {
      toast.error("Something went wrong!");
      console.error(err);
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="relative px-4 md:px-16 lg:px-36">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://reactheme.com/products/wordpress/gadgetfix/wp-content/uploads/2024/12/1-1.webp')",
            // Controls the background opacity
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
        <div className="relative z-10 text-white pt-6 ">
          <ShareHead
            upTitle={"What Do We Fix"}
            pageTitle={"Book a Repair"}
          ></ShareHead>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 p-6 pt-10 pb-36">
            <div data-aos="fade-left" data-aos-duration="2000" className="text-center space-y-2 border-x px-4">
              <button className=" text-black rounded-lg  bg-[#C6E76C] px-5 py-1">
                STEP 1
              </button>
              <h3 className="text-2xl font-medium text-white mt-3">
                Select your repair & request a quote
              </h3>
            </div>

            <div data-aos="fade-left" data-aos-duration="2500" className="text-center space-y-2 border-x md:border-r  px-4">
              <button className="text-black rounded-lg  bg-[#C6E76C] px-5 py-1">
                STEP 2
              </button>
              <h3 className="text-2xl font-medium text-white mt-3">
                Send your gadget or visit our store
              </h3>
            </div>

            <div className="text-center space-y-2 border-x md:border-r px-4">
              <button className="text-black rounded-lg  bg-[#C6E76C] px-5 py-1">
                STEP 3
              </button>
              <h3 className="text-2xl font-medium text-white mt-3">
                Our technicians fix your gadget
              </h3>
            </div>

            <div data-aos="fade-right" data-aos-duration="2500"  className="text-center space-y-2 border-x md:border-r px-4">
              <button className="text-black rounded-lg  bg-[#C6E76C] px-5 py-1">
                Step 4
              </button>
              <h3 className="text-2xl font-medium text-white mt-3">
                We'll request payment
              </h3>
            </div>

            <div data-aos="fade-right" data-aos-duration="2000" className="text-center space-y-2 border-x md:border-r px-4">
              <button className="text-black rounded-lg  bg-[#C6E76C] px-5 py-1">
                Step 5
              </button>
              <h3 className="text-2xl font-medium text-white mt-3 ">
                Return to you
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-10 z-10">
        {/* Form Section */}
        <div   className="lg:col-span-2">
        <form className="space-y-6" onSubmit={handleSubmit}>
  {/* Gadget & Model */}
  <div data-aos="flip-left" data-aos-duration="2000" className="grid md:grid-cols-3 gap-4">
    <div>
      <label className="block mb-1 font-medium">Choose Gadget</label>
      <select
        name="gadget"
        className="w-full border border-gray-200 rounded-lg text-gray-700 bg-white dark:bg-[#1F2937] dark:text-white dark:border-gray-600 p-2"
      >
        <option>Phone</option>
        <option>Laptop</option>
        <option>Tablet</option>
        <option>Smartwatch</option>
        <option>Software</option>
        <option>Game</option>
      </select>
    </div>
    <div>
      <label className="block mb-1 font-medium">Model of Gadget</label>
      <input
        required
        type="text"
        name="model"
        placeholder="iPhone 15 Pro Max"
        className="w-full border border-gray-200 rounded-lg text-gray-700 dark:text-white p-2 placeholder-gray-500 dark:placeholder-text-gray-200"
      />
    </div>
    <div>
      <label className="block mb-1 font-medium">Expected Delivery</label>
      <input
        type="date"
        name="date"
        min={new Date().toISOString().split("T")[0]} // This blocks past dates
        className="w-full border border-gray-200 rounded-lg p-2 text-gray-700 dark:text-white  placeholder-gray-500 dark:placeholder-text-gray-200"
      />
    </div>
  </div>

  {/* Problem */}
  <div>
    <label className="block mb-1 font-medium">Problem With Gadget?</label>
    <textarea
      required
      name="problem"
      rows="4"
      placeholder="Write your gadget problem"
      className="w-full border border-gray-200 rounded-lg text-gray-700 p-2 placeholder-gray-500 dark:text-white dark:placeholder-text-gray-200"
    ></textarea>
  </div>

  {/* Name, Email, Phone */}
  <div data-aos="flip-right" data-aos-duration="2000" className="grid md:grid-cols-3 gap-4">
    <input
      readOnly
      defaultValue={data?.user?.name}
      type="text"
      name="name"
      placeholder="Name"
      className="w-full border border-gray-200 rounded-lg text-gray-700 p-2 placeholder-gray-500 dark:text-white dark:placeholder-text-gray-200"
    />
    <input
      readOnly
      defaultValue={data?.user?.email}
      type="email"
      name="email"
      placeholder="Email Address"
      className="w-full border border-gray-200 rounded-lg text-gray-700 p-2 placeholder-gray-500 dark:text-white dark:placeholder-text-gray-200"
    />
    <input
      type="text"
      name="phone"
      placeholder="Phone"
      inputMode="numeric"
      pattern="[0-9]*"
      onInput={(e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
      }}
      className="w-full border border-gray-200 rounded-lg text-gray-700 p-2 placeholder-gray-500 dark:text-white dark:placeholder-text-gray-200"
    />
  </div>

  {/* Submit Button */}
  <button
    data-aos="fade-down"
    data-aos-duration="2000"
    type="submit"
    disabled={isCreating}
    className="w-full bg-gray-700 dark:text-white text-white px-6 py-2 rounded-full hover:bg-gray-800"
  >
    Book Now
  </button>
</form>

        </div>

        {/* Sidebar Info */}
        <div  className="space-y-6">
          {/* Location Card */}
          <div  data-aos="fade-up" data-aos-duration="1500" className="bg-[#c6e76c] p-6 rounded-lg space-y-2">
            <div className="flex items-center gap-3">
              <span className="dark:text-black text-3xl">
                <CiLocationOn />
              </span>
              <div>
                <h2 className="dark:text-black font-semibold text-lg">Visit Our Workshop</h2>
                <p className="dark:text-black">1920 Tangail, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Opening Hours Card */}
          <div  data-aos="fade-up" data-aos-duration="2000" className="bg-[#223035] text-white p-6 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-3xl">
                <LuAlarmClock />
              </span>
              <div>
                <h2 className="font-semibold text-lg">We're Open Today</h2>
                <p className="text-sm">Mon - Sat: 8AM - 9PM</p>
              </div>
            </div>
            <p className="text-sm pl-9">Sunday closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
