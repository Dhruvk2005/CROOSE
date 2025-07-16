


import React from 'react'
import { Icon } from "@iconify/react";

const Page = () => {
  return (
    <div>
      <div className="relative min-h-screen bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="bg-[#FFFFFF] rounded-[16px] w-[90%] sm:w-[558px] h-auto sm:h-[418px] shadow-[0px_8px_8px_-5px_#14151A0D] max-w-md text-center">
            <span className="w-full h-[56px] border rounded-t-[16px] border-none flex justify-between opacity-100 px-4 py-4 border-b bg-[#ffffff]">
              <div className='h-[24px] w-[70%] sm:w-[202px] font-inter font-semibold text-sm leading-5 tracking-normal text-[#14151A]'>Add New Payment Method</div>
              <Icon icon="iconamoon:close-duotone" width="24" height="24" className='text-[#71717A]' />
            </span>

            <span className='w-full bg-[#ffffff] justify-center items-center flex gap-[16px] py-4'>
              <span className='w-[90%] bg-[#ffffff] flex gap-3 flex-col'>
                <div className='w-full bg-[#ffffff]'>
                  <p className='w-[109px] h-[30px] opacity-100 gap-[10px] pt-[5px] pb-[5px]'>
                     <span className='w-[109px] h-[20px] font-medium text-[14px] leading-[20px] align-middle text-[#344054]'>Product/Service</span>
               </p>
                  <input className='w-full h-[44px] border-[#D0D5DD] opacity-100 rounded-[12px] gap-[8px] p-[15px] border border-solid font-normal text-[14px] leading-[20px] align-middle text-[#98A2B3]' placeholder=' eg. Wig Installation' />
                </div>

                <div className='w-full bg-[#ffffff]'>
                    <p className='w-[109px] h-[30px] opacity-100 gap-[10px] pt-[5px] pb-[5px]'>
                     <span className='w-[109px] h-[20px] font-medium text-[14px] leading-[20px] align-middle text-[#344054]'>Payment Method</span>
               </p>
                  <input className='w-full h-[44px] border-[#D0D5DD] opacity-100 rounded-[12px] gap-[8px] p-[16px] border border-solid font-normal text-[14px] leading-[20px] align-middle text-[#98A2B3]' placeholder='Select payment method' />
                </div>

                <div className='w-full bg-[#ffffff]'>
                 <p className='w-[109px] h-[30px] opacity-100 gap-[10px] pt-[5px] pb-[5px]'>
                       <span className='w-[109px] h-[20px] font-medium text-[14px] leading-[20px] align-middle text-[#344054]'>Momo Number</span>
                   </p>
                  <input className='w-full h-[44px] border-[#D0D5DD] opacity-100 rounded-[12px] gap-[8px] p-[16px] border border-solid font-normal text-[14px] leading-[20px] align-middle text-[#98A2B3]' placeholder='Enter mobile number' />
                </div>
              </span>
            </span>

            <section className='w-full bg-[#ffffff] flex flex-wrap items-center justify-around border-none border rounded-b-[16px] h-[76px] px-4 py-2 gap-2'>
              <button className='w-full sm:w-[45%] h-[36px] opacity-100 rounded-lg gap-[4px] px-4 py-2 bg-[#FEF2F2] font-semibold text-sm leading-5 text-center text-[#DC2626]'>Cancel</button>
              <button className='w-full sm:w-[45%] h-[36px] opacity-100 rounded-lg gap-[10px] px-4 py-2 bg-[#685BC7] font-semibold text-sm leading-5 text-center text-[#FFFFFF]'>Add </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;







