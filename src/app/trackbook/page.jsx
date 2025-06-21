import ShareHead from '@/components/ShareHead/ShareHead';
import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

const page = () => {
    return (
        <div>
          <div className='relative pt-10 px-4 md:px-16 lg:px-36'>
            <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://reactheme.com/products/wordpress/gadgetfix/wp-content/uploads/2024/12/1-1.webp')",
       // Controls the background opacity
    }}
  ></div>
  <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
  <div className='relative z-10 text-white pt-6 '>
    <ShareHead upTitle={'What Do We Fix'} pageTitle={'Track Your Repair'}></ShareHead>
    
    
  <div className='pb-16'>
  <table className="table border-2 border-slate-200 p-3 pb-16">
        {/* head */}
        <thead className="text-2xl text-white bg-[#3BB77E] quick ">
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="border-b-2 border-slate-100">
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className=" h-24 w-24 border-2 border-slate-100 p-3">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </div>
            </td>
            <td className="text-lg font-bold text-[#253D4E]">
              Field Roast Chao Cheese Creamy Original
            </td>
            <td className="text-xl font-bold text-[#3BB77E]">$2.5</td>
            {/* edit */}
            <th>
              <button className="btn btn-ghost btn-xl">
              <CiEdit />
              </button>
            </th>
            <th>
              <button className="btn btn-ghost btn-lg">
                <FaRegTrashAlt />
              </button>
            </th>
          </tr>
         
         
        </tbody>
      </table>
  </div>
  </div>
  
        </div>
        
        </div>
    );
};

export default page;