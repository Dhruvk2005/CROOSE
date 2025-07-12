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
























