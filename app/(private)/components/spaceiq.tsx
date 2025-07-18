'use client'
import { BussinessCategories } from '@/app/Apis/publicapi'
import React from 'react'
import { useState,useEffect } from 'react'

interface Category {
  id:number,
  name:string,
  description:string,
  template:string,
  created_at:string,
  updated_at:string,
   deleted_at: null;
  uuid: any;

}

const Spaceiq = (props:any) => {

  const [spaceData,setSpaceData] = useState<Category[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
useEffect(()=>{
  const SpaceCategories = async()=>{


  try{
    const res  = await BussinessCategories()
    setSpaceData(res.data)
console.log(res.data)


  }catch(err){
    console.log(err)

  }
   }
   SpaceCategories()

},[])

  return (
    <div>
      <div className="relative z-10">
        <div className="fixed inset-0 bg-gray-500/75 transition-opacity flex justify-center items-center">
          <div className="w-full flex justify-center px-4 sm:px-6">
            <div className="w-full  max-w-4xl h-auto flex flex-col items-center  rounded-2xl bg-white">
              
              <div  className="w-[90%] flex items-center justify-between h-16">
                <img src="/arrow-left.png" className="h-5 w-5" />
                <div className="text-white font-sans font-semibold text-xl leading-none tracking-tight text-center">
                  Scan QR code
                </div>
                <img onClick={() => props.setSpaceiqopen(false)} src="/x.png" className="h-5 w-5" />
              </div>

              <div className="bg-white flex flex-col px-4 pb-12 gap-3 rounded-2xl  w-full items-center">
                
                <div className="w-full flex flex-col justify-center items-center gap-2 text-center">
                  <span className="text-[#121217] font-sans font-semibold text-xl leading-none tracking-tight">
                    Increase Space IQ
                  </span>
                  <span className="text-[#71717A] font-sans text-sm leading-5 w-full sm:w-[47%]">
                    Set custom instructions and guidance for the agent to follow. Enter plain text, upload or link documents.
                  </span>
                </div>

                <div className="sm:w-[80%]  flex flex-col items-center px-4 py-6 rounded-lg gap-6"> 
                  
                  <div className="w-[80%] h-[186px]  flex flex-col items-center gap-3">
                    <span className="text-[#18181B] font-sans font-medium text-base leading-6">
                      Plain Text
                    </span>
                    
                   <div className="w-[80%] h-[150px] rounded-[16px] border border-[#EAECF0] p-4 flex flex-col gap-3 bg-white overflow-y-auto scrollbar-thin">
  <div className="text-[#71717A] font-sans text-sm leading-5">
   <p>{spaceData[selectedIndex]?.description}</p>
  </div>
  <div className="flex items-center justify-end gap-2 mt-auto">
    <span className="text-[10px] text-[#71717A] font-sans">Write with</span>
    <span className="text-[10px] text-[#71717A] font-sans">Cactus AI</span>
    <img src="/sms.png" alt="sms" className="h-4 w-4" />
  </div>
</div>

                  </div>

                  {/* <div className="w-[70%]">
                    <img src="/Line 10.png" alt="line" className="w-[90%]" />
                  </div> */}

                  {/* <div className="w-[80%] h-[116px]  flex flex-col items-center gap-3">
                    <span className="text-[#18181B]  h-[24px] font-sans font-medium text-base leading-6">
                      Documents
                    </span>
                    <div style={{borderColor:"#EAECF0"}} className="w-[80%] h-[100px] rounded-lg border-[1px] p-4 flex flex-col gap-2 bg-white">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                          <div className="flex flex-wrap gap-2">
                            <span className="font-sans font-semibold text-sm text-[#020617]">Click to upload</span>
                            <span className="font-sans text-sm text-[#475467]">or drag and drop</span>
                          </div>
                          <span className="font-sans text-xs text-[#71717A]">CSV, PDF, DOCX</span>
                        </div>
                        <img src="/Featured icon.png" className="h-10 w-10" />
                      </div>
                    </div>
                  </div> */}
                </div>

             

                {/* FINAL BUTTON SECTION FIXED */}
                <div className="w-[55%] ml-6 flex flex-col gap-[7px] sm:flex-row items-center  mt-6 px-4">
                  <button onClick={() => props.setSpaceiqcoloropen(true)} className="w-[78%] py-2 bg-[#685BC7]  text-white font-sans font-semibold text-sm rounded-md text-center">
                    Finish
                  </button>
                  <button className="w-[63px] py-2 border border-zinc-200 bg-[#F4F4F5] ml-[5px] text-[#685BC7] font-sans font-semibold text-sm rounded-md text-center">
                    Skip
                  </button>
                </div>
                </div>
                {/* END FINAL BUTTON SECTION */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spaceiq
















// import React from 'react'
// const Spaceiq = (props:any) => {
//   return (
//     <div>
//       <div className="relative z-10">
//   <div className="fixed inset-0 bg-gray-500/75 transition-opacity flex justify-center items-center">
//     <div className="w-full flex justify-center px-4 sm:px-6">
//       <div className="w-full max-w-4xl h-auto flex flex-col items-center border rounded-2xl bg-white">

         
//         <div className="w-[90%] flex items-center justify-between h-16">
//           <img src="/arrow-left.png" className="h-5 w-5" />
//           <div className="text-[#121217] font-sans font-semibold text-xl leading-none tracking-tight text-center">
//             Scan QR code
//           </div>
//           <img  onClick={()=>props.setSpaceiqopen(false)} src="/x.png" className="h-5 w-5" />
//         </div>

        
//         <div className="bg-white flex flex-col border-b px-4 pb-12 gap-8 w-full items-center">
          
          
//           <div className="w-full flex flex-col justify-center items-center gap-2 text-center">
//             <span className="text-[#121217] font-sans font-semibold text-xl leading-none tracking-tight">
//               Increase Space IQ
//             </span>
//             <span className="text-[#71717A] font-sans text-sm leading-5 w-full sm:w-[47%]">
//               Set custom instructions and guidance for the agent to follow. Enter plain text, upload or link documents.
//             </span>
//           </div>

          
//           <div className=" sm:w-[80%] h-[396px]  flex flex-col items-center px-4 py-6 rounded-lg gap-6">

            
            
//             <div className="w-[80%] h-[186px]  ml-[60px] flex flex-col gap-3">
//               <span className="text-[#18181B] font-sans font-medium text-base leading-6">
//                 Plain Text
//               </span>
              
//               <div className="w-[80%] h-[150px] rounded-[16px] border border-gray-300 p-4  flex flex-col gap-3 bg-white">
//                 <div className="text-[#71717A] font-sans text-sm leading-5">
//                   Enter custom instructions
//                 </div>
//                 <div className="flex items-center mt-[18%] justify-end gap-2">
//                   <span className="text-[10px] text-[#71717A] font-sans">Write with</span>
//                   <span className="text-[10px] text-[#71717A] font-sans">Cactus AI</span>
//                   <img src="/sms.png" alt="sms" className="h-4 w-4" />
//                 </div>
//               </div>
            
//             </div>

          
//             <div className="w-[70%]">
//               <img src="/Line 10.png" alt="line" className="w-[90%]" />
//             </div>

            
//             <div className="w-[80%] h-[116px] ml-[60px] flex flex-col gap-3">
//               <span className="text-[#18181B] h-[24px] font-sans font-medium text-base leading-6">
//                 Documents
//               </span>
//               <div className="w-[80%] h-[80px] rounded-lg border p-4 flex flex-col gap-2 bg-white">
//                 <div className="flex items-center justify-between">
//                   <div className="flex flex-col gap-1">
//                     <div className="flex flex-wrap gap-2">
//                       <span className="font-sans font-semibold text-sm text-[#020617]">Click to upload</span>
//                       <span className="font-sans text-sm text-[#475467]">or drag and drop</span>
//                     </div>
//                     <span className="font-sans text-xs text-[#71717A]">CSV, PDF, DOCX</span>
//                   </div>
//                   <img src="/Featured icon.png" className="h-10 w-10" />
//                 </div>
//               </div>
//             </div>
//           </div>

          
// <<<<<<< HEAD
//           <div className="w-[54%] flex flex-col sm:flex-row items-center  mt-6 ">
//             <button className=" w-[74%] py-2  bg-[#685BC7] text-white font-sans font-semibold text-sm rounded-md text-center">
// =======
//           <div className="w-[390px] flex flex-col sm:flex-row items-center gap-3 mt-6 px-4">
//             <button onClick={()=>props.setSpaceiqcoloropen(true)} className=" w-[315px] py-2 bg-[#685BC7] text-white font-sans font-semibold text-sm rounded-md text-center">
// >>>>>>> e2bb69d943312feb2c547cf5601f18e6ca2fce75
//               Finish
//             </button>
//             <button className=" w-[63px] py-2 border border-zinc-200 bg-[#F4F4F5] ml-[5px] text-[#685BC7] font-sans font-semibold text-sm rounded-md text-center">
//               Skip
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div> 
//     </div>
//   )
// }

// export default Spaceiq
