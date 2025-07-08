import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
const Page = () => {
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

              <section className="w-full  px-4 py-6 sm:px-[64px] bg-[pink] h-[611px] sm:py-[32px] flex flex-col gap-8">
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
                    </div>
              </section>
            </div>
            </div>
            </div>
      
    </div>
  )
}

export default Page
