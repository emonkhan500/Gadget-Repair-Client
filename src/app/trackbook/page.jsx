"use client";
import ShareHead from "@/components/ShareHead/ShareHead";
import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdOutlineSecurityUpdate } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useDeleteBookingMutation, useGetBookingQuery } from "@/allApi/allApi";

const page = () => {
  
  const session = useSession();
  const email = session?.data?.user?.email;

  const { data, error, isLoading, refetch } = useGetBookingQuery(email, {
    skip: !email,
  });

  const [deleteBooking] = useDeleteBookingMutation();

  // delete
  const handleDelete = async (id) => {
    try {
      const response = await deleteBooking(id).unwrap();
      if (response?.response?.deletedCount > 0) {
        toast.success(response?.message);
        refetch() 
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete booking.");
    }
    
  };

  return (
    
    <div>
      
      <ToastContainer />
      <div className="relative pt-10 px-2  lg:px-36">
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
            pageTitle={"Track Your Repair"}
          ></ShareHead>

<div className="pb-16 overflow-x-auto md:mt-20">
  {isLoading ? (
    <div className="text-center mt-10">
      <span className="text-center loading loading-spinner loading-xl"></span>
    </div>
  ) : data?.myBookings?.length === 0 ? (
    <div className="text-center text-3xl font-semibold text-white mt-10">
      You have no bookings yet ...
    </div>
  ) : (
    <table className="table border-2 border-slate-200 p-3">
      {/* head */}
      <thead className="text-2xl text-white bg-[#C6E76C]">
        <tr className="text-black">
          <th>SL</th>
          <th>GADGET</th>
          <th>MODEL</th>
          <th>YOUR PROBLEM</th>
          <th>EXPECTED DATE</th>
          <th>NAME</th>
          <th>PHONE</th>
          <th>UPDATE</th>
          <th>DELETE</th>
        </tr>
      </thead>

      <tbody className="bg-gray-500">
        {data?.myBookings.map((book, index) => (
          <tr key={book._id || index} className="border-b-2 border-slate-100">
            <td className="text-lg font-bold">{index + 1}</td>
            <td className="text-lg font-bold">{book?.gadget}</td>
            <td className="text-lg font-bold">{book?.model}</td>
            <td className="text-lg font-medium">{book?.problem}</td>
            <td className="text-lg font-bold">{book?.date}</td>
            <td className="text-lg font-bold">{book?.name}</td>
            <td className="text-lg font-bold">{book?.phone}</td>
            <td>
              <Link
                href={`/trackbook/update/${book._id}`}
                className="btn text-[#C6E76C] btn-ghost btn-xl"
              >
                <MdOutlineSecurityUpdate />
              </Link>
            </td>
            <td>
              <button
                onClick={() => handleDelete(book._id)}
                className="btn text-[#C6E76C] btn-ghost btn-lg"
              >
                <FaRegTrashAlt />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>

        </div>
      </div>
    </div>
  );
};

export default page;
