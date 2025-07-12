import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const Page = () => {
  return (
    <div>
      <div className="relative min-h-screen h-[900px] bg-gray-100 flex justify-center md:justify-end items-center px-2 md:px-0">
        <div className="relative z-10 flex md:right-10 opacity-100 rounded-md flex-col bg-[#ffffff] h-auto md:h-[814px] max-w-[514px] w-full">
          <section className="w-full h-auto min-h-[54px] opacity-100 border-[#EAECF0] border-b flex justify-center items-center gap-[16px] px-3 py-3">
            <div className="w-full h-auto justify-between items-center opacity-100 flex flex-col sm:flex-row gap-[8px]">
              <span className="max-w-full md:max-w-[314px] font-bold text-[18px] md:text-[20px] leading-[28px] flex items-center tracking-[-0.04em] font-inter text-[#1E1518]">
                Notifications
              </span>
              <div className="w-auto h-[36px] opacity-100 rounded-md flex gap-[4px] items-center">
                <span className="font-semibold text-[12px] leading-[20px] tracking-normal font-inter">Mark all as read</span>
                <span className="w-9 h-9 rounded-[8px] border flex items-center justify-center border-[#F1F2F3] bg-[#F6F8FA] ml-2">
                  <Icon icon="iconamoon:close-bold" width="24" height="24" style={{ color: '#000' }} />
                </span>
              </div>
            </div>
          </section>

          <section className="w-full h-auto mt-4 md:mt-8">
            {/* === Block start === */}
            <div className="w-full h-auto opacity-100  flex gap-[16px] pt-6 pr-5 pb-6 pl-5">
              <div className="w-full flex justify-between opacity-100">
                <div className="w-[80%] flex gap-[12px]">
                    <div className="relative w-[40px] h-[40px] rounded-full bg-[#F2F4F7] flex items-center justify-center">
  <span className="font-semibold text-[16px] text-[#667085]">KP</span>
  <span className="absolute top-0 right-0 w-[10px] h-[10px] bg-red-600 rounded-full border-2 border-white"></span>
</div>
                 
                  <div className="max-w-[316px] flex flex-col gap-[4px]">
                    <div className="font-semibold text-[14px] text-[#101828] font-inter">Kojo Precious</div>
                    <div>
                      <p className="font-normal text-[14px] font-inter">subscription payment received for </p>
                      <p className="font-semibold text-[14px] font-inter">[Subscription package (Period)]</p>
                    </div>
                  </div>
                </div>
                <span className="w-[18%] text-[12px] font-normal font-inter text-[#101828]">2 days ago</span>
              </div>
            </div>

          

            {/* Block 2 */}
            <div className="w-full h-auto md:mt-[-14px] opacity-100  flex gap-[16px] pt-6 pr-5 pb-6 pl-5">
              <div className="w-full flex justify-between opacity-100">
                <div className="w-[80%] flex gap-[12px]">
                    <div className="relative w-[40px] h-[40px] rounded-full bg-[#F2F4F7] flex items-center justify-center">
  <span className="font-semibold text-[16px] text-[#667085]">BP</span>
  <span className="absolute top-0 right-0 w-[10px] h-[10px] bg-red-600 rounded-full border-2 border-white"></span>
</div>
               
                  <div className="max-w-[316px] flex flex-col gap-[4px]">
                    <div className="font-semibold text-[14px] text-[#101828] font-inter">Benjamin Patterson</div>
                    <div className="flex flex-row">
                      <p className="font-normal text-[14px] font-inter">purchased </p>
                      <p className="font-semibold ml-[2px] text-[14px] font-inter">[Subscription package (Period)]</p>
                    </div>
                  </div>
                </div>
                <span className="w-[18%] text-[12px] font-normal font-inter text-[#101828]">6 days ago </span>
              </div>
            </div>

            {/* Block 3 */}
            <div className="w-full h-auto mt-[4px] opacity-100  flex gap-[16px] pt-6 pr-5 pb-6 pl-5">
              <div className="w-full flex justify-between">
                <div className="w-[80%] flex gap-[12px]">
                  <div className="w-[40px] h-[40px] rounded-full bg-[#F2F4F7]">
                    <span className="w-[40px] h-[24px] font-semibold flex justify-center mt-[7px] text-[16px] text-center font-inter text-[#667085]">KP</span>
                  </div>
                  <div className="max-w-[316px] opacity-60 flex flex-col gap-[4px]">
                    <div className="font-semibold text-[14px] font-inter text-[#101828]">Kojo Precious</div>
                    <div>
                      <p className="font-normal text-[14px] font-inter">subscription payment received for </p>
                      <p className="font-semibold text-[14px] font-inter">[Subscription package (Period)]</p>
                    </div>
                  </div>
                </div>
                <span className="w-[18%] text-[12px] opacity-60 font-inter">2 days ago</span>
              </div>
            </div>

                  <div className="w-full h-auto md:mt-[-14px] opacity-100 flex gap-[16px] pt-6 pr-5 pb-6 pl-5">
              <div className="w-full flex justify-between opacity-100">
                <div className="w-[80%] flex gap-[12px]">
                  <div className="w-[40px] h-[40px] rounded-full bg-[#F2F4F7]">
                    <span className="w-[40px] h-[24px] font-semibold flex justify-center mt-[7px] text-[16px] leading-[24px] text-center font-inter text-[#667085]">MB</span>
                  
                    
                  </div>
                  <div className="max-w-[316px] opacity-60 flex flex-col gap-[4px]">
                    <div className="font-semibold text-[14px] text-[#101828] font-inter">Michael Blackson</div>
                    <div className="flex flex-row">
                      <p className="font-normal text-[14px] font-inter">purchased </p>
                      <p className="font-semibold ml-[2px] text-[14px] font-inter">[Subscription package (Period)]</p>
                    </div>
                  </div>
                </div>
                <span className="w-[18%] text-[12px] font-normal font-inter opacity-60 text-[#101828]">4 weeks ago </span>
              </div>
            </div>


                   <div className="w-full h-auto mt-[4px] opacity-100  flex gap-[16px] pt-6 pr-5 pb-6 pl-5">
              <div className="w-full flex justify-between">
                <div className="w-[80%] flex gap-[12px]">
                  <div className="w-[40px] h-[40px] rounded-full bg-[#F2F4F7]">
                    <span className="w-[40px] h-[24px] font-semibold flex justify-center mt-[7px] text-[16px] text-center font-inter text-[#667085]">EW</span>
                  </div>
                  <div className="max-w-[316px] opacity-60 flex flex-col gap-[4px]">
                    <div className="font-semibold text-[14px] font-inter text-[#101828]">Emeka Wilfred</div>
                    <div>
                      <p className="font-normal text-[14px] font-inter">subscription payment received for </p>
                      <p className="font-semibold text-[14px] font-inter">[Subscription package (Period)]</p>
                    </div>
                  </div>
                </div>
                <span className="w-[18%] text-[12px] opacity-60 font-inter">2 months ago</span>
              </div>
            </div>

            
                   <div className="w-full h-auto mt-[4px] opacity-100  flex gap-[16px] pt-6 pr-5 pb-6 pl-5">
              <div className="w-full flex justify-between">
                <div className="w-[80%] flex gap-[12px]">
                  <div className="w-[40px] h-[40px] rounded-full bg-[#F2F4F7]">
                    <span className="w-[40px] h-[24px] font-semibold flex justify-center mt-[7px] text-[16px] text-center font-inter text-[#667085]">KS</span>
                  </div>
                  <div className="max-w-[316px] opacity-60 flex flex-col gap-[4px]">
                    <div className="font-semibold text-[14px] font-inter text-[#101828]">Kweku Samuel</div>
                    <div>
                      <p className="font-normal text-[14px] font-inter">subscription payment received for </p>
                      <p className="font-semibold text-[14px] font-inter">[Subscription package (Period)]</p>
                    </div>
                  </div>
                </div>
                <span className="w-[18%] text-[12px] opacity-60 font-inter">5 months ago</span>
              </div>
            </div>

                   <div className="w-full h-auto md:mt-[-14px] opacity-100 flex gap-[16px] pt-6 pr-5 pb-6 pl-5">
              <div className="w-full flex justify-between opacity-100">
                <div className="w-[80%] flex gap-[12px]">
                  <div className="w-[40px] h-[40px] rounded-full bg-[#F2F4F7]">
                    <span className="w-[40px] h-[24px] font-semibold flex justify-center mt-[7px] text-[16px] leading-[24px] text-center font-inter text-[#667085]">KP</span>
                  
                    
                  </div>
                  <div className="max-w-[316px] opacity-60 flex flex-col gap-[4px]">
                    <div className="font-semibold text-[14px] text-[#101828] font-inter">Kojo Precious</div>
                    <div className="flex flex-row">
                      <p className="font-normal text-[14px] font-inter">purchased </p>
                      <p className="font-semibold ml-[2px] text-[14px] font-inter">[Subscription package (Period)]</p>
                    </div>
                  </div>
                </div>
                <span className="w-[18%] text-[12px] font-normal font-inter opacity-60 text-[#101828]">1 year ago </span>
              </div>
            </div>

         

          </section>
        </div>
      </div>
    </div>
  )
}

export default Page

