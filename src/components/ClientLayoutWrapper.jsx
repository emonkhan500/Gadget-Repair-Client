"use client";

import { useState, useEffect } from "react";
import NavbarWrapper from "./NavbarWrapper";
import Footer from "./Footer";
import AuthProvider from "./AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientLayoutWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-[#151C25] h-screen flex items-center justify-center">
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="w-48 h-48"
          src="https://i.ibb.co.com/2Mxgr7H/1728761069604-removebg-preview-2.png"
          alt="Splash Logo"
        />
      </div>
    );
  }

  return (
    <AuthProvider>
      <NavbarWrapper />
      <div>{children}</div>
      <Footer />
    </AuthProvider>
  );
}
