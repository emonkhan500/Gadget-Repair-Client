'use client';

import { MdClose, MdMenu } from "react-icons/md";
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut, useSession } from "next-auth/react";
import 'animate.css';

const    Nav = () => {
  const router = useRouter();
  const session = useSession();
  console.log(session)

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuWrapperRef = useRef(null);
  const pathName = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // ✅ Close on scroll change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 2);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  // ✅ Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuWrapperRef.current &&
        !menuWrapperRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const links = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/service' },
    { title: 'Book a Repair', path: '/bookrepair' },
    { title: 'Track Repair', path: '/trackbook' },
    { title: 'Contact', path: '/contact' },
  ];

  const handleSignIn = () => router.push('/signin');
  const handleSignUp = () => router.push('/signup');

  return (
    <nav className={`animate__animated animate__wobble animate__fast fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-[#1E2229]  shadow-md py-6' : 'bg-transparent py-6 '}`}>
      <div className="flex justify-around items-center">
        
    
        <div ref={menuWrapperRef} className="relative">
     
          <button
            className="md:hidden text-3xl text-[#C6E76C]"
            onClick={toggleMenu}
          >
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>

          {/* Sidebar menu */}
          {isOpen && (
            <aside
              className={`quick fixed top-20 right-0 bg-white z-20 shadow-lg p-4 w-[70%] max-w-[300px] transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <ul className="gap-[20px] dark:text-black text-[1rem] flex flex-col mt-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className={`${pathName === link.path ? 'text-[#C6E76C]' : ''}`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>

        {/* Logo */}
        <div className="dark:bg-gray-300  xl:-ml-60 w-20 md:w-[140px] lg:w-[180px] xl:w-[200px]">
          <Link href='/'><img src="/logo.webp" alt="logo" /></Link>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex justify-around gap-5 lg:text-xl">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className={`${pathName === link.path ? 'text-[#C6E76C]' : ''}`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className='space-x-3'>
          {!session.data ? (
            
            <>
              <button onClick={handleSignIn} className='bg-[#4d6c77] px-1 md:px-2 lg:px-4 text-white py-1 md:py-2 lg:py-3'>SignIn</button>
              <button onClick={handleSignUp} className='bg-[#4d6c77] px-1 md:px-2 lg:px-4 text-white py-1 md:py-2 lg:py-3'>SignUp</button>
            </>
          ) : (
            <div className="flex gap-2 justify-center items-center">
              <img
                className="w-12 h-10 rounded-full text-[#C6E76C]"
                src={
                  session?.data?.user?.image
                    ? session?.data?.user?.image
                    : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                }
                alt={session?.data?.user?.name}
              />
              <button
                onClick={() => signOut()}
                className='bg-[#4d6c77] px-1 md:px-2 lg:px-4 text-white py-1 md:py-2 lg:py-3'
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
