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
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
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
              className="h-[48px] w-[48px] border rounded-[50%] border-none bg-[#F2F4F7]"
            />
          </div>
          <div className="h-[48px]">

          </div>
          <div className="flex justify-between ">
            <section className="text-[14px]">
              <div className="text-[14px] flex gap-2 items-center">
                Chelsea Moore{" "}
                <div className="bg-[#ECFDF3] text-[#067647] h-[22px] w-[53px] border border-[#ABEFC6] rounded-[30px] text-center ">
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

        <section className="flex flex-col items-center gap-1 w-[97%] mx-[10px] py-[20px]">
          {
            accordings.map((acc:any)=>{


              return( <AccordionUsage title={acc.title} desc={acc.desc}/>)
            })
          }
          
        </section>
      </section>
    </div>
  );
};

export default Page;
