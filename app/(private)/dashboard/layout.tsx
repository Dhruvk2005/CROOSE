// "use client"

// import Navbar from "@/app/(public)/component/navbar";
// import { Nav } from "../components/nav";
// import { useState,useEffect } from "react";

// export default function Layout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [show,setShow] = useState(false)
//   // const [mediaQuery,setMediaQuery] = useState<any>()

//   // useEffect(()=>{
//   // let a = window.matchMedia("(max-width: 1259px)")
//   //   setMediaQuery(a)
//   // },[])
//   // useEffect(() => {
 
//   //   // Initial check
//   //   if (mediaQuery.matches) {
//   //     setShow(false);
//   //   } else {
//   //     setShow(true);
//   //   }

//   //   // Listener for screen resize
//   //   const handleResize = (e:any) => {
//   //     setShow(e.matches);
//   //   };

//   //   mediaQuery.addEventListener("change", handleResize);

//   //   return () => {
//   //     mediaQuery.removeEventListener("change", handleResize);
//   //   };
//   // }, [mediaQuery]);

//    useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 1259px)");

//     // Initial check
//     if (mediaQuery.matches) {
//       setShow(true);
//     } else {
//       setShow(false);
//     }

//     // Listener for screen resize
//     const handleResize = (e:any) => {
//       setShow(e.matches);
//     };

//     mediaQuery.addEventListener("change", handleResize);

//     return () => {
//       mediaQuery.removeEventListener("change", handleResize);
//     };
//   }, []);
//   return (
//     <section className="flex">

//       <Nav show={show} setShow={setShow}/>

//       {/* <div > */}
//         <div >
//         <Navbar show={show} setShow={setShow}/>
//           <div className="w-[100%] xl:w-[calc(100%-272px)] bg-[white] h-[100%] absolute"  onClick={()=>setShow(false)}>
//           {children}
//           </div>
//         </div>
//       {/* </div> */}
//     </section>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/(public)/component/navbar"; // Assuming this is your top header/navbar
import { Nav } from "../components/nav"; // Sidebar
import { useRouter } from "next/navigation";
import { verifyToken } from "@/app/Apis/publicapi";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);

   const [loding, setLoding] = useState(false)
  
    const router = useRouter()
  
    const isLogin = async () => {
      try {
  
        setLoding(true)
  
        let res: any = await verifyToken()
        console.log(res,28)
        // router.push("/dashboard/space")
        setLoding(false)
  
        if(res?.err?.status){
          console.log("inif")
  
          return router.push("/login")
        }
          // router.push("/dashboard/space")
  
          
  
  
  
  
  
      }
      catch (err) {
        router.push("/login")
      }
    }
    useEffect(() => {
      isLogin()
    }, [])

  // Handle responsive sidebar
  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 1259px)");

  //   // Initial check
  //   setShow(!mediaQuery.matches);

  //   // Listener for screen resize
  //   const handleResize = (e: MediaQueryListEvent) => {
  //     setShow(!e.matches);
  //   };

  //   mediaQuery.addEventListener("change", handleResize);
  //   return () => mediaQuery.removeEventListener("change", handleResize);
  // }, []);

  return (
   <section className="flex">

      <Nav show={show} setShow={setShow}/>

      {/* <div > */}
        <div >
        {/* <Navbar show={show} setShow={setShow}/> */}
          <div className="w-[100%] xl:w-[calc(100%-272px)] bg-[white] h-[100%] absolute"  onClick={()=>setShow(false)}>
          {children}
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}
