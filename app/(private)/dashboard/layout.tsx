"use client"

import Navbar from "@/app/(public)/component/navbar";
import { Nav } from "../components/nav";
import { useState,useEffect } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [show,setShow] = useState(false)
  const [mediaQuery,setMediaQuery] = useState<any>( window.matchMedia("(max-width: 1259px)"))
  useEffect(() => {
   

    // Initial check
    if (mediaQuery.matches) {
      setShow(false);
    } else {
      setShow(true);
    }

    // Listener for screen resize
    const handleResize = (e:any) => {
      setShow(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [mediaQuery]);
  return (
    <section className="flex">

      <Nav show={show} setShow={setShow}/>

      {/* <div > */}
        <div >
        <Navbar show={show} setShow={setShow}/>
          <div className="w-[100%] xl:w-[calc(100%-272px)] bg-[white] h-[100%] absolute"  onClick={()=>setShow(false)}>
          {children}
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}
