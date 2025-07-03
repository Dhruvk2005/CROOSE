import React from "react";
import { Icon } from "@iconify/react";

import AccordionUsage from "../../components/material/accordings";

let boxes = [
  {
    title: "First visit date",
    value: "2 Jan, 2024",
  },
  {
    title: "Last seen",
    value: "10 Jun, 2025",
  },
  {
    title: "No of visits",
    value: "12",
  },
   {
    title: "First visit date",
    value: "2 Jan, 2024",
  },
  {
    title: "Last seen",
    value: "10 Jun, 2025",
  },
  {
    title: "No of visits",
    value: "12",
  }
];


let accordings = [
  {
    title:"Payments (4)",
    desc:"",
    
  },
   {
    title:"Activity Timeline",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  }
]

const Page = () => {
  return (
    <div className="flex justify-center items-center w-[100%] h-[100%] text-[#101828] bg-[#0009] fixed left-0">
      <section className="bg-[white] w-[658px] h-auto sm:h-[80%]  flex flex-col gap-[10px] rounded-[20px] relative ">
        <div className="absolute">
          <div >
         <img
          src="/girlbanner.jpeg"
          className="w-full h-[150px]  rounded-[20px] flex flex-row "
        />

        <Icon
          icon="material-symbols:close-rounded"
          width="24"
          height="24"
          className="absolute top-[25px] right-[25px]"
         
        />
        </div>
        </div>


           <div className="h-[80px]">
          
        
        </div>
        
        <section className="flex flex-col gap-2 m-[30px]  relative">
          <div className="absolute">
            <img
              src="/Avatar.png"
              className="h-[48px] w-[48px] border rounded-[50%] border-none"
            />
          </div>
          <div className="h-[48px]">

          </div>
          <div className="flex justify-between ">
            <section className="text-[14px] ">
              <div className="text-[14px] flex gap-2 items-center">
                Chelsea Moore{" "}
                <div className="bg-[#ECFDF3] text-[#067647] border-[#ABEFC6] h-[22px] w-[53px] rounded-[30px] text-center">
                  Active
                </div>{" "}
              </div>
              <div className="flex justify-center  gap-[10px]">
              <div className="text-[#475467]">olivia@untitledui.com</div>
              <div className="w-[4px] mt-[10px] h-[4px] bg-[#475467] border rounded-[50%]"></div>
              <div className="text-[#475467]">0241763214</div>
                   <div className="w-[4px] mt-[10px] h-[4px] bg-[#475467] border rounded-[50%]"></div>
              <div className="text-[#475467]">Atlanta, United States</div>
              </div>
            </section>
            <div>
              <button
                type="button"
                className="py-2.5 px-5 me-2 mb-2 border border-[#EAECF0] rounded-[8px] text-[12px] text-[#344054] font-semibold"
              >
                Edit Customer
              </button>
            </div>
          </div>
        </section>

        <section className="flex gap-2 flex-wrap justify-center">
          {boxes.map((item) => {
            return (
              <div className="bg-[#F9FAFB] py-[14px] px-[20px] w-[187.3333282470703] h-[80px]">
                <section className="flex flex-col gap-2">
                  <div className="text-[#475467] text-[12px] ">
                    {item?.title}
                  </div>
                  <div className="text-[#101828] text-[20px] font-semibold">
                    {item?.value}
                  </div>
                </section>
              </div>
            );
          })}

          {/* </div> */}
        </section>

        <section className="flex flex-col items-center  gap-1 w-[97%] mx-[10px] py-[20px]">
          {
            accordings.map((acc:any)=>{


              return( <AccordionUsage style="height-172px" title={acc.title} desc={

    <div className="flex flex-col gap-[10px]">
  {/* Container 1 */}
  <div className="w-full flex justify-between flex-wrap px-[20px]">
    <span className="flex flex-wrap items-center gap-x-[12px] gap-y-[6px] w-full max-w-[600px]">
      <span className="w-[110px] text-[12px] mt-[3px] text-[#475467] leading-[18px] font-normal font-inter">
        10 Jan 2024, 13:00
      </span>
      <span className="w-[4px] h-[4px] mt-[9px] bg-[#475467] rounded-full"></span>
      <span className="w-[60px] text-[12px] mt-[3px] text-[#475467] leading-[18px] font-normal font-inter">
        ₵200
      </span>
      <span className="w-[4px] h-[4px] mt-[9px] bg-[#475467] rounded-full"></span>
      <span className="w-[130px] h-[22px]">
        <span className="w-full inline-block text-sm px-3 py-[2px] rounded-full border font-medium text-[12px] text-[#175CD3] leading-[18px] text-center truncate font-inter">
          Kinky wig
        </span>
      </span>
      <span className="w-[4px] h-[4px] mt-[9px] bg-[#475467] rounded-full"></span>
      <span className="w-[22px] h-[22px] rounded-full border p-[5px] bg-[#ECFDF3] border-[#ABEFC6] flex items-center justify-center">
        <Icon icon="qlementine-icons:check-tick-16" width="12" height="12" className="text-[#17B26A]" />
      </span>
       <span className="w-[20px] h-[14px] mt-[3px] ml-auto">
      <Icon icon="bi:three-dots" width="16" height="16" className="text-[#98A2B3]" />
    </span>
    </span>
   
  </div>

  {/* Container 2 */}
  <div className="w-full flex justify-between flex-wrap px-[20px]">
    <span className="flex flex-wrap items-center gap-x-[12px] gap-y-[6px] w-full max-w-[600px]">
      <span className="w-[110px] text-[12px] mt-[3px] text-[#475467] leading-[18px] font-normal font-inter">
        10 Dec 2023, 12:30
      </span>
      <span className="w-[4px] h-[4px] mt-[9px] bg-[#475467] rounded-full"></span>
      <span className="w-[60px] text-[12px] mt-[3px] text-[#475467] leading-[18px] font-normal font-inter">
        ₵200
      </span>
      <span className="w-[4px] h-[4px] mt-[9px] bg-[#475467] rounded-full"></span>
      <span className="w-[130px] h-[22px]">
        <span className="w-full inline-block text-sm px-3 py-[2px] rounded-full border font-medium text-[12px] text-[#175CD3] leading-[18px] text-center truncate font-inter">
          Curl Hair
        </span>
      </span>
      <span className="w-[4px] h-[4px] mt-[9px] bg-[#475467] rounded-full"></span>
      <span className="w-[22px] h-[22px] rounded-full border p-[5px] bg-[#ECFDF3] border-[#ABEFC6] flex items-center justify-center">
        <Icon icon="qlementine-icons:check-tick-16" width="12" height="12" className="text-[#17B26A]" />
      </span>
       <span className="w-[20px] h-[14px] mt-[3px] ml-auto">
      <Icon icon="bi:three-dots" width="16" height="16" className="text-[#98A2B3]" />
    </span>
    </span>
   
  </div>

  {/* Container 3 */}
  <div className="w-full flex justify-between flex-wrap px-[20px]">
    <span className="flex flex-wrap items-center gap-x-[12px] gap-y-[6px] w-full max-w-[600px]">
      <span className="w-[110px] text-[12px] mt-[3px] text-[#475467] leading-[18px] font-normal font-inter">
        10 Nov 2023, 15:45
      </span>
      <span className="w-[4px] h-[4px] mt-[9px] bg-[#475467] rounded-full"></span>
      <span className="w-[60px] text-[12px] mt-[3px] text-[#475467] leading-[18px] font-normal font-inter">
        ₵200
      </span>
      <span className="w-[4px] h-[4px] mt-[9px] bg-[#475467] rounded-full"></span>
      <span className="w-[130px] h-[22px]">
        <span className="w-full inline-block text-sm px-3 py-[2px] rounded-full border font-medium text-[12px] text-[#175CD3] leading-[18px] text-center truncate font-inter">
          Expression Braid...
        </span>
      </span>
      <span className="w-[4px] h-[4px] mt-[9px] bg-[#475467] rounded-full"></span>
      <span className="w-[22px] h-[22px] rounded-full border p-[5px] bg-[#ECFDF3] border-[#ABEFC6] flex items-center justify-center">
        <Icon icon="qlementine-icons:check-tick-16" width="12" height="12" className="text-[#17B26A]" />
      </span>
       <span className="w-[20px] h-[14px] mt-[3px] ml-auto">
      <Icon icon="bi:three-dots" width="16" height="16" className="text-[#98A2B3]" />
    </span>
    </span>
   
  </div>

  {/* Container 4 */}
  <div className="w-full flex justify-between flex-wrap px-[20px]">
    <span className="flex flex-wrap items-center gap-x-[12px] gap-y-[6px] w-full max-w-[600px]">
      <span className="w-[110px] text-[12px] mt-[3px] text-[#475467] leading-[18px] font-normal font-inter">
        10 Oct 2023, 13:15
      </span>
      <span className="w-[4px] h-[4px] mt-[9px] bg-[#475467] rounded-full"></span>
      <span className="w-[60px] text-[12px] mt-[3px] text-[#475467] leading-[18px] font-normal font-inter">
        ₵200
      </span>
      <span className="w-[4px] h-[4px] mt-[9px] bg-[#475467] rounded-full"></span>
      <span className="w-[130px] h-[22px]">
        <span className="w-full inline-block text-sm px-3 py-[2px] rounded-full border font-medium text-[12px] text-[#175CD3] leading-[18px] text-center truncate font-inter">
          Bulb wig
        </span>
      </span>
      <span className="w-[4px] h-[4px] mt-[9px] bg-[#475467] rounded-full"></span>
      <span className="w-[22px] h-[22px] rounded-full border p-[5px] bg-[#ECFDF3] border-[#ABEFC6] flex items-center justify-center">
        <Icon icon="qlementine-icons:check-tick-16" width="12" height="12" className="text-[#17B26A]" />
      </span>
       <span className="w-[20px] h-[14px] mt-[3px] ml-auto">
  <Icon icon="bi:three-dots" width="16" height="16" className="text-[#98A2B3]" />
</span>
    </span>
   

  </div>
</div>




}/>)
            })
          }
          
        </section>
      </section>
    </div>
  );
};

export default Page;


















// import React from 'react'
// import { Icon } from '@iconify/react';

// const Page = () => {
//   return (







// <div className="w-full min-h-screen flex flex-col items-center justify-start bg-[#FFFFFF] backdrop-blur-2xl p-4 sm:h-[900px] sm:justify-center">

//   <div className=" w-[70%] h-auto sm:h-[732px] relative border rounded-[20px] bg-[#ffffff]">
//     <img src="/girlbanner.jpeg" className='w-full h-[150px] border rounded-[20px] flex flex-row' />

//     <Icon icon="material-symbols:close-rounded" width="24" height="24" className='w-[18px] h-[18px] absolute top-[28px] right-[24px] text-black' />

//     <div className='h-auto sm:h-[106px] absolute top-[17%] left-0 sm:ml-[5%] w-full sm:w-[90%] flex flex-col gap-[12px] bg-[#ffffff] px-4'>
//       <img src='/Avatar.png' className='h-[48px] w-[48px] border rounded-[50%] bg-[#F2F4F7]' />

//       <div className='w-full flex flex-col sm:flex-row justify-between h-auto gap-2'>
//         <div className='w-full sm:w-[408px] flex flex-col gap-[4px]'>
//           <div className='w-full sm:w-[162px] flex gap-[4px]'>
//             <div className='w-auto font-medium text-sm leading-5 tracking-normal text-[#101828]'>Chelsea Moore</div>
//             <div className='px-3 py-1 text-sm font-medium text-green-800 border border-[#ABEFC6] bg-[#ECFDF3] flex flex-row w-[53px] h-[22px] rounded-full border-solid pt-[2px] pb-[2px]'>
//               <div className='w-[37px] h-[18px] font-medium text-xs leading-[18px] tracking-normal text-[#067647] text-center'>Active</div>
//             </div>
//           </div>

//           <div className='flex flex-col sm:flex-row gap-2 flex-wrap'>
//             <div className='font-normal text-sm leading-5 tracking-normal text-[#475467]'>olivia@untitledui.com</div>
//             <span className='h-[4px] w-[4px] bg-[#475467] border rounded-[50%] sm:mt-[7px] hidden sm:inline-block'></span>
//             <div className='font-normal text-sm leading-5 tracking-normal text-[#475467]'>0241763214</div>
//             <span className='h-[4px] w-[4px] bg-[#475467] border rounded-[50%] sm:mt-[7px] hidden sm:inline-block'></span>
//             <div className='font-normal text-sm leading-5 tracking-normal text-[#475467]'>Atlanta, United States</div>
//           </div>
//         </div>

//         <div className='text-sm font-medium text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 w-full sm:w-[111px] h-[34px] gap-2 border border-[#EAECF0]'>
//           <button className='w-full h-[18px] mt-[10px] ml-[8px] font-semibold text-[12px] leading-[18px] tracking-[0] font-inter text-[#344054] flex flex-row'>Edit Customer</button>
//         </div>
//       </div>
//     </div>

//     <div className='w-full mt-[60%] sm:mt-[15%] px-4 flex  flex-wrap gap-[8px] bg-white'>
//       <div className='w-full h-[168px] flex justify-center flex-col flex-wrap gap-[8px]'>
//         <div className='w-full h-[80px] flex-wrap justify-center flex flex-row gap-[8px]'>
//         <div className='w-[28%] border rounded-[12px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[4px] bg-gray-100'>
//           <div className='font-normal text-[12px] text-[#475467]'>First visit date</div>
//           <div className='font-semibold text-[20px] text-[#101828]'>2 Jan, 2024</div>
//         </div>

//         <div className='w-full sm:w-[28%] border rounded-[12px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[4px] bg-gray-100'>
//           <div className='font-normal text-[12px] text-[#475467]'>Last seen</div>
//           <div className='font-semibold text-[20px] text-[#101828]'>10 Jun, 2025</div>
//         </div>

//         <div className='w-full sm:w-[28%] border rounded-[12px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[4px] bg-gray-100'>
//           <div className='font-normal text-[12px] text-[#475467]'>No of visits</div>
//           <div className='font-semibold text-[20px] text-[#101828]'>12</div>
//         </div>
//         </div>
      

//       <div className='h-[80px] w-full justify-center flex-wrap flex flex-row gap-[8px]'>
//         <div className='w-full sm:w-[28%] border rounded-[12px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[4px] bg-gray-100'>
//           <div className='font-normal text-[12px] text-[#475467]'>Total spent</div>
//           <div className='font-semibold text-[20px] text-[#101828]'>$1200.60</div>
//         </div>

//         <div className='w-full sm:w-[28%] border rounded-[12px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[4px] bg-gray-100'>
//           <div className='font-normal text-[12px] text-[#475467]'>First amount spent</div>
//           <div className='font-semibold text-[20px] text-[#101828]'>$219</div>
//         </div>

//         <div className='w-full sm:w-[28%] border rounded-[12px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[4px] bg-gray-100'>
//           <div className='font-normal text-[12px] text-[#475467]'>Last amount spent</div>
//           <div className='font-semibold text-[20px] text-[#101828]'>$430</div>
//         </div>
//       </div>
//       </div>

     
//     </div>
//     <div className='w-[100%] h-[172px] mt-[5%]   flex justify-center' >
  
//       <div className='w-[81%] h-[82px]  gap-[10px] flex flex-col bg-[#F9FAFB]'>
//         <span className='h-[36px] w-full flex flex-row justify-between border rounded-[12px] pt-[8px] pr-[20px] pb-[8px] bg-[#F9FAFB] pl-[20px]'>
//           <span className='font-inter font-semibold text-[12px] text-[#101828]'>Payments (4)</span>
//           <img src="/downarrow.png" className='w-[12px] h-[12px]' />
//         </span>

            // <div className='w-full h-[22px]  flex justify-between pr-[20px] pl-[20px]'>
            //      <span className='h-[20px] w-[85%] flex gap-[20px] flex-row'>
            //        <span className='w-[30%] h-[18px] font-inter font-normal text-[12px] mt-[3px] leading-[18px] tracking-[0%] text-[#475467]'>10 Jan 2024, 13:00</span>
            //        <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
            //        <span className='h-[18px] w-[10%] font-inter font-normal text-[12px] mt-[3px] leading-[18px] tracking-[0] text-[#475467] font-inter'>₵200</span>
            //         <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
            //         <span className='h-[22px] w-[22%]'>
            //       <span className='text-sm px-3 py-1 w-[77px] h-[22px] rounded-full pt-[2px]  pb-[2px]  border  font-medium text-[12px] text-[#175CD3] leading-[18px] tracking-[0px] text-center font-inter'>Kinky wig</span></span>
            //          <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
            //          <span className='w-[22px] h-[22px] rounded-full gap-[4px] border p-[5px] bg-[#ECFDF3] border-[#ABEFC6]'>
            //            <Icon icon="qlementine-icons:check-tick-16" width="16" height="16"className='text-[#000] w-[12px] h-[12px]  text-[#17B26A]'  />
                      
            //        </span>
                 
            //  </span>
            //         <span className='w-[20px] h-[14px]'><Icon icon="bi:three-dots" width="16" height="16" className='text-[#98A2B3] mt-[3px]' /></span>
            // </div>  


//                      <div className='w-full h-[22px] flex justify-between pr-[20px] pl-[20px]'>
//                    <span className='h-[20px]  w-[85%] flex gap-[20px] flex-row'>
//                    <span className='w-[30%] h-[18px] font-inter font-normal text-[12px] mt-[3px] leading-[18px] tracking-[0%] text-[#475467]'>10 Dec 2023, 12:30</span>                   <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
//                    <span className='h-[18px] w-[10%] font-inter font-normal text-[12px] mt-[3px] leading-[18px] tracking-[0] text-[#475467] font-inter'>₵200</span>
//                     <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
//                     <span className='h-[22px] w-[22%]'>
//                 <span className='text-sm px-3 py-1 w-[77px] h-[22px] rounded-full pt-[2px]  pb-[2px]  border  font-medium text-[12px] text-[#175CD3] leading-[18px] tracking-[0px] text-center font-inter'>Curl Hair</span></span>
//                      <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
//                     <span className='w-[22px] h-[22px] rounded-full gap-[4px] border p-[5px] bg-[#ECFDF3] border-[#ABEFC6]'>
//                        <Icon icon="qlementine-icons:check-tick-16" width="16" height="16"className='text-[#000] w-[12px] h-[12px]  text-[#17B26A]'  />
                      
//                      </span>
                 
//                  </span>
//                     <span className='w-[20px] h-[14px]'><Icon icon="bi:three-dots" width="16" height="16" className='text-[#98A2B3] mt-[3px]' /></span>
//                </div>
                 


            //             <div className='w-full h-[22px]  flex justify-between pr-[20px] pl-[20px]'>
            //  <span className='h-[20px] w-[85%] flex gap-[20px] flex-row'>
            //        <span className='w-[30%] h-[18px] font-inter font-normal text-[12px] mt-[3px] leading-[18px] tracking-[0%] text-[#475467]'>10 Nov 2023, 15:45</span>
            //        <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
            //        <span className='h-[18px] w-[10%] font-inter font-normal text-[12px] mt-[3px] leading-[18px] tracking-[0] text-[#475467] font-inter'>₵200</span>
            //         <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
            //         <span className='h-[22px] bg-amber-700 w-[22%]'>
            //             <span className='w-[123px] h-[22px] rounded-full pt-[2px] pr-4 pb-[2px] pl-4 border bg-[#EFF8FF] font-medium text-[12px] leading-[18px] tracking-[0] text-center font-inter  px-4  text-sm  text-[#175CD3] '>Expression Braid...</span>
            //       </span>
            //          <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
            //          <span className='w-[22px] h-[22px] rounded-full gap-[4px] border p-[5px] bg-[#ECFDF3] border-[#ABEFC6]'>
            //            <Icon icon="qlementine-icons:check-tick-16" width="16" height="16"className='text-[#000] w-[12px] h-[12px]  text-[#17B26A]'  />
                      
            //          </span>
                 
            //      </span>
            //         <span className='w-[20px] h-[14px]'><Icon icon="bi:three-dots" width="16" height="16" className='text-[#98A2B3] mt-[3px]' /></span>
            //     </div>
                

//                         <div className='w-full h-[22px]  flex justify-between pr-[20px] pl-[20px]'>
//                  <span className='h-[20px] w-[85%] flex gap-[20px] flex-row'>
//                    <span className='w-[30%] h-[18px] font-inter font-normal text-[12px] mt-[3px] leading-[18px] tracking-[0%] text-[#475467]'>10 Oct 2023, 13:15</span>
//                    <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
//                    <span className='h-[18px] w-[10%] font-inter font-normal text-[12px] mt-[3px] leading-[18px] tracking-[0] text-[#475467] font-inter'>₵200</span>
//                     <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
//                     <span className='h-[22px]  w-[22%]'>
//                     <span className='text-sm px-3 py-1 w-[77px] h-[22px] rounded-full pt-[2px]  pb-[2px]  border  font-medium text-[12px] text-[#175CD3] leading-[18px] tracking-[0px] text-center font-inter'>Bulb wig</span></span>
//                      <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
//                      <span className='w-[22px] h-[22px] rounded-full gap-[4px] border p-[5px] bg-[#ECFDF3] border-[#ABEFC6]'>
//                        <Icon icon="qlementine-icons:check-tick-16" width="16" height="16"className='text-[#000] w-[12px] h-[12px]  text-[#17B26A]'  />
                      
//                      </span>
                 
//                  </span>
//                     <span className='w-[20px] h-[14px]'><Icon icon="bi:three-dots" width="16" height="16" className='text-[#98A2B3] mt-[3px]' /></span>
//               </div>
//               <span className='h-[36px] w-full flex flex-row justify-between border rounded-[12px] pt-[8px] pr-[20px] pb-[8px] bg-[#F9FAFB] pl-[20px]'>
//              <span className='w-[98px] h-[20px]  font-inter font-inter font-semibold text-[12px] leading-[20px] tracking-[0] text-[#101828]'>Activity Timeline</span>
//             <Icon icon="iconamoon:arrow-down-2-bold" width="24" height="24"  className='w-[12px] h-[12px] text-black material-icons font-bold '/>
            

            
//         </span>

                



//             </div>
//       </div>
//   </div>
// </div>




//   )
// }

// export default Page




















