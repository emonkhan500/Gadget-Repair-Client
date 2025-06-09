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
  
    return (
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-6' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">MySite</h1>
          <div className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
      </nav>
    );
};

export default Nav;