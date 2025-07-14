"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/(public)/component/navbar";
import { Nav } from "../components/nav";
import { useRouter } from "next/navigation";
import { verifyToken } from "@/app/Apis/publicapi";
import { ModalProvider } from "@/app/context/modelcontext"; // ✅ import ModalProvider
import ModalRoot from "@/app/(public)/component/Modalroot";// ✅ import ModalRoot

export default function Layout({ children }: { children: React.ReactNode; }) {
  const [show, setShow] = useState(false);
  const [loding, setLoding] = useState(false);
  const router = useRouter();

  const isLogin = async () => {
    try {
      setLoding(true);
      let res: any = await verifyToken();
      console.log(res,28)
      setLoding(false);
      if(res?.err?.status){
        return router.push("/login")
      }
    }
    catch (err) {
      router.push("/login")
    }
  }

  useEffect(() => {
    isLogin()
  }, [])

  return (
    <ModalProvider> {/* ✅ wrap entire layout with ModalProvider */}
      <section className="flex">
        <Nav show={show} setShow={setShow}/>

        <div>
          {/* <Navbar show={show} setShow={setShow}/> */}
          <div className="w-[100%] xl:w-[calc(100%-272px)] bg-[white] h-[100%] absolute" onClick={()=>setShow(false)}>
            {children}
          </div>
        </div>
      </section>

      <ModalRoot /> {/* ✅ render ModalRoot at the root so modals display globally */}
    </ModalProvider>
  );
}
