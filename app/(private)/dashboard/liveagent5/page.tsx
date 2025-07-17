import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const users = [
  {
    number: "Mom 💕",
    sms: "Mom is typing...",
    batton: "General",
    time: "19:45",
    count: "5",
    img: "/Profile.png",
  },
  {
    number: "+233847048730",
    sms: "How much exactly does all your ",
    time: "19:45",
    count: "5",
    batton: "Enquiry",
    img: "/Profiledummy.png",
  },
  {
    number: "+234567890123",
    sms: "Can you send me the detailed report?",
    time: "14:15",
    batton: "Broken",
    img: "/Profiledummy.png",
  },
  {
    number: "+233456789012",
    sms: "What are the available payment...",
    time: "10:30",
    batton: "Complete Sale",
    img: "/Profiledummy.png",
  },

  {
    number: "+233456789012",
    img: "/Profiledummy.png",
    batton: "Enquiry",
    time: "19:45",
    sms: "How much exactly does all your ",
  },
  {
    number: "+233847048730",
    sms: "How much exactly does all your",
    time: "19:45",
    batton: "General",
    count: "5",
    img: "/Profile.png",
  },
  { number: "+233456789012",   img: "/Profiledummy.png" },

];
const table = [
  { img: "/chat.png", heading: " Total Chats", num: "896" },
  { img: "/message.png", heading: " Live  Chats", num: "126" },
  { img: "/timer.png", heading: " Avg. Response Time ", num: "0.5s" },
  { img: "/party-popper.png", heading: " Sales", num: "12" },
];

const message = [
  { text: "Hello there!", time: "14:37" },
  {
    text: "Hey there! I was looking on Internet and I saw this template from you guys!",
    time: "14:37",
  },
  {
    img: "/Icon.png",
    btext: "The #1 full-service Webflow Agency | BRIX Templates",
    stext: "Are you looking for a top-notch Webflow Agency?",
    url: "https://brixtemplates.com/webflow-design-agency",
    time: "14:38",
    icon: <Icon icon="charm:tick-double" width="16" height="16" />,
  },
];
const arrow = [
  { icon: <Icon icon="mdi:arrow-right-top-bold" width="24" height="24" /> },
];

const rsms=[
    {text:"Hi there! Nice to meet you!.", time:"14:40",icon:<Icon icon="charm:tick-double" width="16" height="16" />},
     {text:"I'm John and today I'm going to help you to find your perfect Webflow Template 🙋🏻‍♂️", time:"14:40",icon:<Icon icon="charm:tick-double" width="16" height="16" />},
      {text:"Sure! We have over 150+ templates fully customizable for any project", time:"14:58",icon:<Icon icon="charm:tick-double" width="16" height="16" />},
        {text:"Our templates are based on blocks, so you can re-use these to create the perfect layout for your website.", time:"14:58",icon:<Icon icon="charm:tick-double" width="16" height="16" />},
]



const Page = () => {
  return (
    <div className=" w-full  h-[1025px] opacity-100 gap-[10px]">
      <div
        className="w-[100%] h-[64px] flex justify-between items-center"
        style={{ borderBottom: "1px solid #EAECF0" }}
      >
        <div className="flex items-center  gap-[20px] text-[#121217] ">
          <span className="font-semi font-bold text-[20px] pl-[20px] ml-[10px]">
            Space
          </span>
        </div>
        <div className="mr-[20px]">
          <li className="flex w-[98px] gap-[23px] justify-center items-center ">
            <div className="w-[46px] flex gap-[10px] border-r-[2px]  border-[#F2F4F7]">
              <Icon
                icon="mynaui:search"
                width="24"
                height="24"
                style={{ color: "#000" }}
              />
            </div>
            <div className="w-[16px] flex gap-[10px]">
              <svg
                width="24"
                height="20"
                viewBox="0 0 16 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99255 15.0123C10.3499 16.346 9.55845 17.7168 8.22478 18.0742C6.89112 18.4315 5.52028 17.6401 5.16292 16.3064M7.07633 4.78404C7.32983 4.32796 7.41334 3.77671 7.26762 3.23288C6.96983 2.12149 5.82746 1.46194 4.71607 1.75974C3.60468 2.05753 2.94514 3.1999 3.24293 4.31129C3.38865 4.85512 3.73659 5.29076 4.18418 5.55899M11.53 7.87107C11.2325 6.76096 10.4384 5.83266 9.32236 5.29038C8.2063 4.74811 6.8597 4.63627 5.5788 4.97949C4.2979 5.32271 3.18763 6.09285 2.49223 7.12051C1.79683 8.14817 1.57327 9.34915 1.87072 10.4593C2.36287 12.296 2.2673 13.7613 1.95651 14.8747C1.60229 16.1438 1.42518 16.7783 1.47302 16.9057C1.52777 17.0515 1.56737 17.0915 1.71256 17.1478C1.83947 17.1969 2.37261 17.0541 3.4389 16.7684L13.3265 14.119C14.3927 13.8333 14.9259 13.6904 15.0112 13.5844C15.1088 13.4631 15.1231 13.4086 15.0976 13.255C15.0754 13.1208 14.6047 12.6598 13.6634 11.7379C12.8375 10.929 12.0221 9.70778 11.53 7.87107Z"
                  stroke="#101828"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </li>
        </div>
      </div>

      <div className="h-auto w-full bg-[#ffffff] relative mt-[15px] flex flex-col gap-5  items-center">
        <div
          className="w-[100%]  items-center mt-[-17px]   flex flex-row h-[64px] "
          style={{ borderBottom: "1px solid #EAECF0" }}
        >
          <img
            src="/arrow.png"
            alt="arrow"
            className="h-[20px] ml-[10px] m-[-1px] w-[20px]"
          />
          <div className="w-[48px] ml-[10px] h-[48px]">
            <img
              src="/facebg.png"
              alt="face imge"
              className="w-[48px] h-[48px] top-[8px]"
            ></img>
          </div>
          <div className="w-[50%] sm:w-[70%] text-[13px] sm:text-[1.125rem] text-[#101828] ml-[18px] font-sans font-semibold text-lg leading-7 tracking-normal align-middle h-[28px]">
            Space Name
          </div>
          <div className="w-[180px] sm:w-[211px] right-[0px] flex flex-row  gap-[8px] h-[36px]">
            <button className="w-[50%] sm:w-[103px] h-[50px] sm:h-[36px]  flex flex-row  pt-2 pr-4 pb-2 bg-[#EAECF0] pl-4 gap-[10px] rounded-[8px] border-[0]">
              <div className="font-sans font-semibold text-[10px] sm:text-[12px] w-[100%] leading-5 tracking-normal text-center  text-[#685BC7] h-[20px]">
                Spaces IQ
              </div>
            </button>
            <button className="w-[50%] sm:w-[103px] h-[50px] sm:h-[36px] flex flex-row pt-2 pr-4 pb-2 pl-4 gap-[10px] bg-[#685BC7] rounded-[8px]">
              <div className="w-[100%] font-sans  text-[10px] sm:text-[12px] font-semibold text-sm leading-5 tracking-normal text-center text-[#FFFFFF] h-[50px] sm:h-[20px]">
                Run Agent
              </div>
            </button>
          </div>
        </div>

        <div className=" flex flex-row flex-wrap gap-[20px] justify-center w-[100%]   rounded-lg">
          {table.map((tables, index) => (
            <div
              key={index}
              className="w-[260px] rounded-[16px] border border-gray-300 h-[160px]"
            >
              <div className="w-[100%] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]">
                <img src={tables.img} />
                <div className="w-[212px] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] ">
                  {tables.heading}
                </div>
              </div>
              <div className=" text-center text-[#101828] flex items-center justify-center w-[100%] h-[70%]  font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]">
                {tables.num}
              </div>
            </div>
          ))}
        </div>

        <section className="w-full h-auto  items-center  sm:h-[655px] opacity-100 flex flex-col gap-[16px] rotate-0">
          <div className="w-full max-w-full sm:w-[1088px] h-auto sm:h-[36px] flex flex-col sm:flex-row items-start sm:items-center bg-[#ffffff] gap-2 px-2 sm:px-0">
  <div className="w-full sm:w-[936px] h-auto sm:h-[36px] gap-4 flex flex-col sm:flex-row items-start sm:items-center">
    <div className="w-full sm:w-[165px] h-auto sm:h-[36px] pt-1 pr-[10px] pb-1 pl-1 bg-[#EFF6FF] border-[#BFDBFE] flex flex-row rounded-3xl border border-solid">
      <div className="w-full sm:w-[165px] h-auto sm:h-[36px] gap-2 pr-[6px] pb-1 pl-[6px] flex items-center">
        <span className="font-inter font-normal text-[16px] leading-4 tracking-[-0.1px]">
          😎
        </span>
        <span className="w-auto sm:w-[80px] h-[20px] font-sans font-semibold text-xs leading-5 tracking-normal text-[#18181B] ml-1">
          Main Account
        </span>
      </div>
      <div className="w-[35px] h-[20px] flex justify-center items-center mt-1 text-center rounded-3xl bg-[#DC2626]">
        <span className="w-[19px] h-[16px] font-sans font-semibold text-[10px] leading-4 tracking-normal text-[#ffffff]">
          99+
        </span>
      </div>
    </div>
  </div>

  <div className="hidden sm:block w-[14px] mt-1 border-[#E4E4E7] h-0 border border-solid rotate-[-90deg]"></div>

  <div className="w-full sm:w-[136px] h-[36px] gap-[10px] text-center py-1 rounded-lg border border-[#E4E4E7] bg-[#F4F4F5] flex justify-center items-center">
    <span className="w-full h-[20px] font-sans font-semibold text-sm leading-5 tracking-normal text-center text-[#18181B]">
      Add new space
    </span>
  </div>
</div>


          <section className="w-full h-auto sm:h-[603px] flex flex-col  sm:flex-row flex-wrap  justify-center bg-[#ffffff] opacity-100 gap-4">
            <section className="w-full sm:w-[320px] h-auto sm:h-[603px] opacity-100 rounded-[16px] border border-[#E4E4E7]">
              <div className="w-full sm:w-[320px] h-[56px] rotate-0 opacity-100 gap-2 border-b pb-[12px] pt-[12px] pl-[12px] pr-[12px] border-[#E4E4E7]">
                <div className="w-full sm:w-[296px] h-[20px] flex items-center rotate-0 opacity-100 gap-3">
                  <span className="rotate-0 w-[16px] h-[16px] text-[#18181B]">
                    <Icon
                      icon="lucide:message-circle-more"
                      width="24"
                      height="24"
                    />
                  </span>
                  <span className="w-auto h-[20px] mt-3 font-semibold text-sm leading-5 align-bottom text-[#18181B]">
                    Live Chats{" "}
                  </span>
                </div>
              </div>

              <section className="w-full sm:w-[320px] h-auto sm:h-[547px] rotate-0 opacity-100">
                <div className="h-[547px]  overflow-y-hidden  overflow-x-hidden scrollbar-hide">
                  {users.map((user, index) => {
                    const isDull = [2, 3, 4, 6].includes(index); // Make boxes 3,4,6 dull

                    return (
                      <div
                        key={index}
                        className={`w-full sm:w-[320px] h-[84px] flex gap-2 pt-[15px] pl-[15px] pr-[10px] rotate-0 ${
                          isDull ? "opacity-50 grayscale" : "opacity-100"
                        }`}
                      >
                        {/* Fixed-size image container */}
                        <div className="w-[32px] h-[32px] rounded-full overflow-hidden flex-shrink-0 bg-[#E4E4E7]">
                          {user.img && (
                            <img
                              src={user.img}
                              alt="user"
                              className="w-full h-full object-cover rounded-full"
                            />
                          )}
                        </div>

                        {/* Flexible text container */}
                        <div className="flex-1 flex flex-col gap-[2px] border-b border-zinc-200">
                          <div className="font-sans font-semibold text-sm leading-[100%] text-[#0A0A0A] truncate">
                            {user.number}
                          </div>
                          <div className="font-sans font-normal text-xs leading-5 truncate">
                            {user.sms}
                          </div>
                          <div className="font-sans font-normal text-xs leading-4 text-[#71717A]">
                            <span
                              className={`w-[54px] h-[20px] opacity-100 gap-[10px] pt-[2px] pr-[5px] pb-[2px] pl-[5px] rounded-[4px] font-sans font-normal text-xs leading-4 
              ${user.batton === "General" ? "bg-[#F4F4F5] text-[#767779]" : ""}
              ${user.batton === "Enquiry" ? "bg-[#FEF3C7] text-[#78350F]" : ""}
              ${user.batton === "Broken" ? "bg-[#FEE2E2] text-[#7F1D1D]" : ""}
              ${
                user.batton === "Complete Sale"
                  ? "bg-[#DCFCE7] text-[#14532D]"
                  : ""
              }  
              ${
                user.batton === " Enquiry" ? "bg-[#FEF3C7] text-[#78350F]" : ""
              } 
            `}
                            >
                              {user.batton}
                            </span>
                          </div>
                        </div>

                        {/* Fixed Time Column */}
                        <div className="w-[50px] h-[36px] flex flex-col items-end border-zinc-200">
                          <span
                            className={`font-sans font-normal text-xs leading-4 
            ${user.batton === "General" ? "text-[#1DAB61]" : ""}
            ${user.batton === "Enquiry" ? "text-[#1DAB61]" : ""}
            ${user.batton === "Broken" ? "text-[#71717A]" : ""}
            ${user.batton === "Complete Sale" ? "text-[#14532D]" : ""}
            ${user.batton === " Enquiry" ? "text-[#71717A]" : ""}
          `}
                          >
                            {user.time}
                          </span>

                          {user.count && (
                            <div className="w-[35px] flex justify-end mt-auto">
                              <div className="font-sans w-[16px] h-[16px] min-w-[16px] text-center flex justify-center items-center rounded-[8px] text-white bg-[#1DAB61] font-normal text-xs leading-5 truncate">
                                {user.count}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </section>

    <section className="w-full   sm:w-[752px] h-auto sm:h-[603px] flex justify-center flex-col rounded-[16px] rotate-0 border border-[#E4E4E7] 
  ">



  <div className="w-full h-[56px] opacity-100 gap-2 rounded-t-[16px] flex items-center  border-none border border-b-[1px] p-[12px]">
    <img className="w-[32px] h-[32px]" src="/Profiledummy.png" />
    <div className="w-[628px] h-[14px] flex items-center opacity-100">
      <span className="font-sans font-semibold text-sm leading-[100%] text-[#0A0A0A] tracking-normal">
        +233847048730
      </span>
    </div>
    <div className="w-[52px] h-[20px] opacity-100 gap-[2px]">
      <div className="w-[52px] h-[20px] opacity-100 gap-[10px] flex items-center justify-center   bg-[#FEF3C7] rounded-[4px]">
        <span className="w-[46px] h-[16px] font-sans font-normal text-[#78350F] text-center flex items-center justify-center not-italic text-xs  ">
          Enquiry
        </span>
      </div>
    </div>
  </div>
  <section className=" max-w-[752px] bg-[#F5F5F4] h-[547px] opacity-100 gap-6 pt-6 pr-3 pb-3 pl-3] super-thin-scrollbar overflow-y-auto scrollbar-hidden ">
    <section className="max-w-[728px]   h-[367.81px] flex-col flex gap-2 pl-3 opacity-100]">
      {message.map((mss, index) => (
        <div
          key={index}
          className="relative group max-w-[298px] w-fit font-sans font-medium text-base leading-6 tracking-normal text-[#262628]"
        >
          {/* ✅ Arrow icon - outside right, vertically centered */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
            <Icon
             icon="f7:arrowshape-turn-up-right-fill" width="2em" height="2em"
              className="w-[35px] h-[35px] rounded-full bg-[#C9C4BB] text-[#E9E9EB] text-[16px] flex items-center justify-center"
            />
          </div>

          {/* ✅ Message bubble content */}
          <div className="shadow rounded-lg px-2 py-2 w-full bg-white">
            {mss.text && <div>{mss.text}</div>}

            {(mss.img || mss.btext || mss.stext) && (
              <section className="rounded-[8px] rounded-tl-lg rounded-bl-lg flex flex-row gap-0  mt-2">
                {mss.img && (
                  <img
                    src={mss.img}
                    className={
                      index === 2 ? "w-[80px] h-[80px]" : "w-[40px] h-[40px] "
                    }
                    alt="preview"
                  />
                )}
                {(mss.btext || mss.stext) && (
                  <span className="inline-block bg-[#F2F2F2] rounded-tr-lg rounded-br-lg pt-2 pr-[10px] pb-2 pl-[10px]">
                    <section className="max-w-[210px] flex flex-col gap-y-[8px]">
                      {mss.btext && (
                        <span className="font-medium max-w-[190px] text-[14px] leading-[14px] font-[SF Pro Text]">
                          {mss.btext}
                        </span>
                      )}
                      {mss.stext && (
                        <span className="font-normal text-[13px] leading-[13px] font-[SF Pro Text]">
                          {mss.stext}
                        </span>
                      )}
                    </section>
                  </span>
                )}
              </section>
            )}

            {mss.url && (
              <span className="font-normal text-[14px] text-[#468CF7] leading-[16px] tracking-[-0.41px] font-[SF Pro Text] underline underline-offset-[2px] mt-2 block">
                {mss.url}
              </span>
            )}

            <span className="w-full h-[16px] font-normal text-[13px] leading-[16px] tracking-[-0.41px] gap-2 text-[#9C9CA3] flex justify-end mt-2">
              {mss.time} {mss.icon}
            </span>
          </div>
        </div>
      ))}
    </section>
     <section className="flex flex-col gap-1">
    <section className="w-full h-auto opacity-100 gap-[4px] pr-[10px]  flex-col flex items-end ">
        {rsms.map((sms, index)=>(
        <div key={index} className="relative group max-w-[298px] rounded-[11px] w-fit flex  h-fit font-sans font-medium bg-[#E7FED8] text-base leading-6 tracking-normal text-[#262628]">
         <div className="w-auto h-auto pt-[6px] flex  flex-col pr-[10px] pb-[8px] pl-[8px] rounded-[11px] opacity-100">
       <span  className="font-sans font-normal text-base leading-6 text-[#171717] tracking-normal">{sms.text}</span>
      <div className="relative w-full h-[16px]">
  {/* Other content inside this container */}

 
   <span className="w-auto h-[16px] font-normal text-[13px] leading-[16px] tracking-[-0.41px] gap-2 text-[#9C9CA3] flex justify-end mt-2">
              {sms.time} {sms.icon}
            </span>
</div>

      
</div>

        </div>
        ))}
    </section>
  
     </section>
  </section>


<section className="w-full  h-[64px] flex items-center opacity-100 pt-[12px] pr-[4px] pb-[12px] pl-[4px] rounded-b-[12px] border-[#E4E4E7] border-t-[1px] rotate-0">
    <div className="w-[32px] h-[32px] text-[#71717A] opacity-100 flex justify-center items-center rotate-0 gap-2 rounded-md p-2">
<Icon icon="fa6-solid:plus" width="20" height="20" />
</div>
<div className="w-[90%] h-[40px] opacity-100 border-[#E4E4E7] border-[2px] rotate-0 gap-1 pt-1 pr-3 pb-1 pl-3 rounded-3xl  border-solid">
<span className="w-[90%] h-[20px] rotate-0 opacity-100 flex gap-[12px]">

</span>
</div>
<div className="w-[40px] h-[40px] opacity-100 rotate-0 gap-2 rounded-md p-2">
    <Icon icon="eva:mic-outline" width="24" height="24"  className="border-[#71717A] text-[#71717A]" />

</div>

</section>
</section>

          </section>
        </section>
      </div>
    </div>
  );
};

export default Page;
