'use client'
import { useGetBookingByIdQuery, useUpdateBookingMutation } from '@/allApi/allApi';
import ShareHead from '@/components/ShareHead/ShareHead';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const page = () => {
  const params = useParams()
  
    const [booking, setBooking] = useState([]);
    const [updateBooking] = useUpdateBookingMutation();
    const { data, error, isLoading } = useGetBookingByIdQuery(params.id);
    useEffect(() => {
      if (!isLoading && data?.data) {
        setBooking(data.data);
      }
    }, [data, isLoading]);

console.log(data)
  

  const handleUpdateBooking = async (event) => {
    event.preventDefault();
  
    const updatedData = {
      date: event.target.date.value,
      problem: event.target.problem.value,
      phone: event.target.phone.value,
    };
  
    try {
      const res = await updateBooking({ id: params.id, updatedData }).unwrap();
      toast.success("Updated Successfully");
    } catch (err) {
      toast.error("Update failed");
      console.error(err);
    }
  };

  
    return (
        <div>
        <ToastContainer/>
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
              pageTitle={"Update Your Booking"}
            ></ShareHead>
  
           
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12  gap-10 z-10">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <form onSubmit={handleUpdateBooking} className="space-y-6" >
              {/* Gadget & Model */}
              <div className="grid md:grid-cols-3 gap-4">
              <div>
  <label className="block mb-1 font-medium">Choose Gadget</label>
  <input
                  defaultValue={booking?.gadget}
                    readOnly
                    type="text"
                    name="model"
                    placeholder="iPhone 15 Pro Max"
                    className="w-full border border-gray-200 rounded-lg text-gray-700 p-2 placeholder-gray-500 dark:text-white dark:placeholder-text-gray-200 p-2"
                  />
</div>

                <div>
                  <label className="block mb-1 font-medium">
                    Model of Gadget
                  </label>
                  <input
                  defaultValue={booking?.model}
                    readOnly
                    type="text"
                    name="model"
                    placeholder="iPhone 15 Pro Max"
                    className="w-full border border-gray-200 rounded-lg text-gray-700 p-2 placeholder-gray-500 dark:text-white dark:placeholder-text-gray-200 p-2"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Delivery Date</label>
                  <input
                 defaultValue={booking?.date}
                    type='date'
                    name="date"
                    className="w-full border border-gray-200 rounded-lg text-gray-700 p-2 placeholder-gray-500 dark:text-white dark:placeholder-text-gray-200 p-2"
                  />
                </div>
              </div>
  
              {/* Problem */}
              <div>
                <label className="block mb-1 font-medium">
                  Problem With Gadget?
                </label>
                <textarea
                defaultValue={booking?.problem}
                  
                  name="problem"
                  rows="4"
                  placeholder="Write your gadget problem"
                  className="w-full border border-gray-200 rounded-lg text-gray-700 p-2 placeholder-gray-500 dark:text-white dark:placeholder-text-gray-200 p-2"
                ></textarea>
              </div>
  
              {/* Name, Email, Phone */}
              <div className="grid md:grid-cols-3 gap-4">
                <input
                readOnly
                  defaultValue={booking?.name}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full border border-gray-200 rounded-lg text-gray-700 p-2 placeholder-gray-500 dark:text-white dark:placeholder-text-gray-200 p-2"
                />
                <input
                readOnly
                  defaultValue={booking?.email}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-200 rounded-lg text-gray-700 p-2 placeholder-gray-500 dark:text-white dark:placeholder-text-gray-200 p-2"
                />
                <input
                defaultValue={booking?.phone}
    type="text"
    name="phone"
    placeholder="Phone"
    inputMode="numeric"
    pattern="[0-9]*"
    onInput={(e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
    }}
    className="w-full border border-gray-200 rounded-lg text-gray-700 p-2 placeholder-gray-500 dark:text-white dark:placeholder-text-gray-200 p-2"
  />
  
  
              </div>
  
              {/* Submit Button */}
              <button
              
                type="submit"
                className=" w-full bg-gray-700 dark:text-white text-white px-6 py-2 rounded-full hover:bg-gray-800"
              >
                Update
              </button>
            </form>
          </div>
  
          
        </div>
      </div>
    );
};

export default page;