'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';


const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 30);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
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
  
    return (
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-6' : 'bg-transparent py-6 '
      }`}>
        <div className="flex justify-around " >
        <div className="w-20 md:w-[130px] lg:w-[160px] xl:w-[180px] ">
            <img src="/logo.webp" alt="logo" />
          </div>

  <ul className="flex justify-around gap-5">
   {
    links.map((link,index)=><li key={index}><Link href={link.path}>{link.title}</Link> </li>)
   }
  </ul>
  <div className='space-x-3'>
  {/* <button onClick={handleSignIn}>SignIn</button>
  <button onClick={handleSignUp}>SignUp</button> */}
  </div>
</div>
      </nav>
    );
};

export default Nav;