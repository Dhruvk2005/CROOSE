"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/(public)/component/navbar";
import { Nav } from "../components/nav";
import { useRouter } from "next/navigation";
import { verifyToken } from "@/app/Apis/publicapi";
import { Icon } from '@iconify/react';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();

  const isLogin = async () => {
    try {
      setLoading(true);
      let res: any = await verifyToken();
      console.log(res, 28);
      setLoading(false);

      if (res?.err?.status) {
        console.log("inif");
        return router.push("/login");
      }
    } catch (err) {
      router.push("/login");
    }
  };

  useEffect(() => {
    isLogin();
  }, []);

  // Handle responsive sidebar
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Initial check - on mobile, sidebar should be hidden by default
    setShow(!mediaQuery.matches);

    // Listener for screen resize
    const handleResize = (e: MediaQueryListEvent) => {
      setShow(!e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <section className="flex relative">

      <Nav show={show} setShow={setShow} />

  
      {!show && (
        <div className="fixed top-4 left-4 z-50">
          <button 
            className="cursor-pointer bg-purple-100 hover:bg-purple-200 p-2 rounded-lg shadow-md transition-colors"
            onClick={() => setShow(true)}
          >
            <Icon 
              icon="line-md:menu-fold-right" 
              width="24" 
              height="24" 
              style={{color: 'purple'}} 
            />
          </button>
        </div>
      )}

      {show && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setShow(false)}
        />
      )}

    
      <div className={`transition-all duration-300 ${show ? 'md:ml-[272px]' : 'ml-0'} w-full`}>
        <div className="w-full bg-white min-h-screen">
          {children}
        </div>
      </div>
    </section>
  );
}