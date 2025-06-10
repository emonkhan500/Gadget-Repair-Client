import { FaRegCircleCheck } from "react-icons/fa6";
import Link from 'next/link'
const Letter = () => {
    return (
        <div className="bg-[#C6E76C] py-12 px-4 md:px-32 lg:px-64 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3 text-gray-900 text-2xl font-semibold">
      <FaRegCircleCheck  className="text-4xl" />
        <span>Quick, reliable, and affordable gadget repairs</span>
      </div>

      <Link href="/bookrepair">
        <h1 className="bg-[#4d6c77] text-white text-sm font-semibold px-7 py-3 rounded-full hover:bg-slate-800 transition">
          Book A Repair
        </h1>
      </Link>
    </div>
    );
};

export default Letter;