


import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

let boxes = [
  { title: "First visit date", value: "2 Jan, 2024" },
  { title: "Last seen", value: "10 Jun, 2025" },
  { title: "No of visits", value: "12" },
  { title: "First visit date", value: "2 Jan, 2024" },
  { title: "Last seen", value: "10 Jun, 2025" },
  { title: "No of visits", value: "12" }
];

let accordings = [
  {
    title: "Payments (4)",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    title: "Activity Timeline",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  }
]

const Notes = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-full text-[#101828] bg-[#0009] fixed left-0 z-2 top-0">
        <section className="bg-white w-[90%] sm:w-[658px] h-auto sm:h-[90%] flex flex-col gap-[10px] rounded-[20px] relative overflow-y-auto max-h-screen">
          <div className="absolute w-full">
            <div>
              <img
                src="/calendergirl.png"
                className="w-full h-[150px] rounded-[20px]"
              />
              {/* <Icon
                icon="material-symbols:close-rounded"
                width="24"
                height="24"
                className="absolute top-[18px] right-[18px]"
              /> */}
            </div>
          </div>

          <div className="h-[80px]"></div>

          <section className="flex flex-col gap-2 m-[20px] sm:m-[30px] relative">
            <div className="absolute">
              <img
                src="/Avatar.png"
                className="h-[48px] w-[48px] border rounded-full border-none bg-[#F2F4F7]"
              />
            </div>
            <div className="h-[48px]"></div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
              <section className="text-[14px]">
                <div className="text-[14px] flex gap-2 items-center">
                  Chelsea Moore
                </div>
                <div className="flex flex-wrap gap-[10px]">
                  <div className="text-[#475467]">olivia@untitledui.com</div>
                  <div className="w-[4px] mt-[10px] h-[4px] bg-[#475467] border rounded-full"></div>
                  <div className="text-[#475467]">0241763214</div>
                  <div className="w-[4px] mt-[10px] h-[4px] bg-[#475467] border rounded-full"></div>
                  <div className="text-[#475467]">Atlanta, United States</div>
                </div>
              </section>
              <div>
                <button
                  type="button"
                  className="w-[63px] h-[22px] rotate-0 opacity-100 rounded-full border px-2 py-0 border-[#FEDF89] font-semibold text-[12px] leading-[18px] tracking-normal text-center font-inter text-[#B54708]"
                >
                  Pending
                </button>
              </div>
            </div>
          </section>

          <section className="w-full">
            <div className="w-full flex flex-col gap-[30px] items-center justify-center px-4">
              <div className="w-full sm:w-[90%] flex flex-col gap-[30px]">
                <div className="w-full bg-[#F2F4F7] min-h-[108px] flex flex-col sm:flex-row sm:justify-between rounded-[8px] opacity-100 p-[16px] sm:pr-[24px] sm:pl-[24px] gap-4 sm:gap-0">
                  <div className="w-full sm:w-[136px] h-auto opacity-100 flex flex-col gap-[8px]">
                    <span className='font-medium text-[14px] leading-[20px] text-[#1D2939]'>Appointment Day</span>
                    <span className='font-normal text-[14px] leading-[20px] text-[#475467]'>Wed 14 Nov, 1:00pm</span>
                  </div>
                  <div className="w-full sm:w-[136px] h-auto opacity-100 flex flex-col gap-[8px]">
                    <span className='font-medium text-[14px] leading-[20px] text-[#1D2939]'>Date created</span>
                    <span className='font-normal text-[14px] leading-[20px] text-[#475467]'>Wed 14 Nov, 1:00pm</span>
                  </div>
                  <div className="w-full sm:w-[136px] h-auto opacity-100 flex flex-col gap-[8px]">
                    <span className='font-medium text-[14px] leading-[20px] text-[#1D2939]'>Service type</span>
                    <span className='font-normal text-[14px] leading-[20px] text-[#475467]'>Wig Installation</span>
                    <span className='font-normal text-[14px] leading-[20px] text-[#475467]'>Hair washing</span>
                  </div>
                </div>

                <div className="w-full h-auto opacity-100 rotate-0 flex flex-col gap-[12px]">
                  <span className='font-medium text-[14px] leading-[20px] text-[#101828]'>Notes</span>
                  <span className='font-normal text-[14px] leading-[20px] text-[#344054]'>
                    Animated splash screens can make loading times feel less tedious, as users are engaged with the animation while the app loads. Animated splash screens can make loading times feel less tedious, as users are engaged with the animation while the app loads
                  </span>
                </div>

                <section className='w-full sm:w-[554px] h-auto opacity-100 rotate-0 flex-col flex gap-[8px]'>
                  <span className='font-medium text-[14px] leading-[20px] text-[#1D2939]'>Images shared</span>
                  <div className="w-full h-auto flex flex-wrap gap-2">
                    <img src="/appointgirl.jpg" className='w-[109px] h-[109px] opacity-100 rounded-[16px]' />
                    <img src="/appointgirl2.jpg" className='w-[109px] h-[109px] opacity-100 rounded-[16px]' />
                    <img src="/appointhair2.jpg" className='w-[109px] h-[109px] opacity-100 rounded-[16px]' />
                    <img src="/appointhair.jpg" className='w-[109px] h-[109px] opacity-100 rounded-[16px]' />
                  </div>
                </section>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  )
}

export default Notes

