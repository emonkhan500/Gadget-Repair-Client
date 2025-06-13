'use client';

import { MdClose, MdMenu } from "react-icons/md";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';




const Nav = () => {
  const router = useRouter()
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 30);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const pathName=usePathname()
    const links=[
      {
        title:'Home',
        path:'/'
      },
      {
        title:'Services',
        path:'/service'
      },
    
      {
        title:'Book a Repair',
        path:'/bookrepair'
      },
      {
        title:'Contact',
        path:'/contact'
      },
    ]
    const handleSignIn=()=>{
      router.push('/signin')
    }
    const handleSignUp=()=>{
      router.push('/signup')
    }
    return (
      <nav className= { `fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-6' : 'bg-transparent py-6 '
      }`}>
        <div className="flex justify-around items-center" >
           {/* Small menu */}
        <button
          className="md:hidden text-3xl text-[#4d6c77]"
          onClick={toggleMenu}
        >
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>
        <div className="w-20 md:w-[140px] lg:w-[180px] xl:w-[200px] ">
            <Link href='/'><img src="/logo.webp" alt="logo" /></Link>
          </div>

  <ul className="hidden  md:flex justify-around gap-5  lg:text-xl">
   {
    links.map((link,index)=><li key={index}><Link className={`${pathName === link.path && 'text-[#C6E76C]'}`} href={link.path}>{link.title}</Link> </li>)
   }
  </ul>
  <div className='space-x-3'>
  <button onClick={handleSignIn} className='bg-[#4d6c77] px-1 md:px-2 lg:px-4 text-white py-1 md:py-2 lg:py-3'>SignIn</button>
  <button onClick={handleSignUp} className='bg-[#4d6c77] px-1 md:px-2 lg:px-4 text-white py-1 md:py-2 lg:py-3'>SignUp</button>
  </div>
  {isOpen && (
          <aside
            className={`quick fixed top-20 right-0  bg-white z-20 shadow-lg p-4 w-[70%] max-w-[300px] transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="gap-[20px] text-[1rem] flex flex-col mt-3">
            {
    links.map((link,index)=><li key={index}><Link href={link.path}>{link.title}</Link> </li>)
   }
            </ul>
          </aside>
        )}
</div>
      </nav>
    );
};

export default Nav;