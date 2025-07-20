 'use client'
 

import { useRouter } from 'next/router';



import React, { useState,useEffect } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import DeletePopup from '../settingoverview3/page';





const SettingTwo = (props:any) => {
   const [Open ,setOpen]=useState(false)
  


  useEffect(() => {
  if (Open) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}, [Open]);

  return (
    <div>
        <div className="relative flex items-center justify-center min-h-screen h-auto bg-gray-100 p-4 sm:p-6">
        <div className="relative z-10 flex justify-center items-center w-full">
          <div className="w-full max-w-[717px] h-[732px] opacity-100 border-[#E2E4E84D] bg-[#ffffff] rounded-[16px] border border-solid">
            <section className="w-full  h-[60px]  flex justify-between items-center border-b border-[#F6F6F6] rounded-t-[16px] px-4 py-3 sm:px-[20px] sm:py-[12px]">
                <span className="w-auto font-inter font-semibold text-[18px] sm:text-[20px] leading-[150%] tracking-[-0.04em] text-[#1D2939]">
                                Settings
                              </span>
                              <span className="w-9 h-9 rounded-full border p-2 flex items-center justify-center border-[#F1F2F3] bg-[#F6F8FA]">
                                <Icon icon="iconamoon:close-bold" width="24" height="24" style={{ color: '#000' }} />
                              </span>
            </section>

              <section className="w-full  px-4 py-6 sm:px-[64px] bg-[#ffffff] h-[611px] sm:py-[32px] flex flex-col gap-8">
                  <div className="w-full flex flex-col gap-6">
                <div className="w-full flex flex-wrap items-center gap-2 sm:gap-5">
                  <div className="flex flex-wrap gap-2 w-full">
                    <button className="rounded-sm text-sm px-3 py-2">
                      <span className="font-semibold text-[14px] text-[#667085]">Profile</span>
                    </button>
                       <button className="rounded-sm w-[131px]  bg-[#F9F5FF] text-sm px-3 py-2">
                      <span className="font-semibold text-[14px] text-[#685BC7] ">Security</span>
                    </button>
                      <button className="rounded-sm text-sm px-3 py-2">
                      <span className="font-semibold text-[14px] text-[#667085]">Billing</span>
                    </button>
                    </div>
                    </div>
                         <div className="text-[18px] font-inter font-semibold  leading-[28px] tracking-[0] text-[#101828]">Security</div>
                    </div>
                     <section className='w-full h-[314px] flex  gap-[32px]'>
                        <div className='w-full h-[74px] mt-2 flex flex-col'>
                           <label className="block font-medium text-sm leading-5 align-middle font-inter text-[#344054]">Current Password</label>
                        <div className="relative mt-1 w-full">
                           <input type="password" className="w-full h-[44px]  text-[#98A2B3] text-sm rounded-[12px] border border-[#D0D5DD] p-4" placeholder="Enter your password"/>
                          <button type="button"  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" >
                           <Icon icon="tabler:eye-filled" width="20" height="20" />
                             </button>
                         </div>
                         <div className='w-full h-[74px] mt-3 flex flex-col'>
                          <label className="block font-medium text-sm leading-5 align-middle font-inter text-[#344054]">New Password </label>
                           <div className="relative mt-1 w-full">
                           <input type="password" className="w-full h-[44px]  text-[#98A2B3] text-sm rounded-[12px] border border-[#D0D5DD] p-4" placeholder="Enter Password  "/>
                          <button type="button"  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" >
                           <Icon icon="tabler:eye-filled" width="20" height="20" />
                             </button>
                             </div>
                         </div>

                          <div className='w-full h-[74px] mt-3 flex flex-col'>
                          <label className="block font-medium text-sm leading-5 align-middle font-inter text-[#344054]">Repeat New Password  </label>
                           <div className="relative mt-1 w-full">
                           <input type="password" className="w-full h-[44px]  text-[#98A2B3] text-sm rounded-[12px] border border-[#D0D5DD] p-4" placeholder="Enter Password   "/>
                          <button type="button"  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" >
                           <Icon icon="tabler:eye-filled" width="20" height="20" />
                             </button>
                             </div>
                         </div>
          <section className="w-[130px] h-[36px] mt-11 rounded-[64px] gap-[4px] px-[20px] py-[10px] opacity-100 bg-[#FFEBEE] flex justify-end ml-auto">
  <button  onClick={() => setOpen(true)} className="font-inter font-semibold text-[12px] leading-[18px] tracking-[0] text-[#DE2525]">
    Delete Account
  </button>
</section>

                           </div>
                     </section>
              
              </section>
                     <section className="w-full flex justify-end  px-4 py-3 sm:px-[20px] sm:py-[12px]">
                
              <button  className="rounded-lg bg-[#685BC7] text-white text-sm font-semibold px-7 py-2">  Save changes  </button>
            </section>
             
            </div>
            </div>
            </div>
      

      {Open? <DeletePopup setOpen={setOpen}  />:   ''}
    </div>


  )
}

export default SettingTwo
