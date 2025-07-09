import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const Page = () => {
  return (
    <div>
      <div className="relative min-h-screen h-[900px]  bg-gray-100 flex justify-center items-center">
   
      <div className="absolute  w-full max-w-[717px] h-[671px] bg-[#ffffff] z-10 rounded-[16px] border-[#E2E4E84D] border-1 ">
       <section className="w-full h-[60px] flex items-center justify-between border-b border-[#E5E5E5] px-4 sm:px-[12px] py-2 opacity-100">
                   <span className="flex-1 font-inter font-semibold text-[18px] sm:text-[20px] leading-[150%] tracking-[-0.04em] text-[#111015]">
                     Settings
                   </span>
                   <span className="w-9 h-9 rounded-full border flex items-center justify-center border-[#F1F2F3] bg-[#F6F8FA] ml-2">
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
                      <button className="rounded-sm    text-sm px-3 py-2">
                      <span className="font-semibold text-[14px] text-[#667085] ">Security</span>
                    </button>
                     <button className="rounded-sm w-[131px] text-sm px-3 bg-[#F9F5FF] py-2">
                      <span className="font-semibold text-[14px] text-[#685BC7]">Billing</span>
                    </button>
                          </div>
                      </div>
                        <div className="text-[18px] font-inter font-semibold  leading-[28px] tracking-[0] text-[#101828]">Billing Details</div>
                     </div>
                        <section className='h-[386px] flex gap-[40px] flex-col w-[100%] '>
                          <section className='w-full h-[78px] flex-col flex gap-[8px]'>
                            <span className='w-[68px] h-[18px] font-medium text-[10px] leading-[18px] tracking-[0.02em] font-inter text-[#667085]'>ACTIVE PLAN</span>
                            <div className='w-[170px] h-[52px] flex-col flex gap-[4px]'>
                              <span className='w-full h-[30px] font-bold text-[20px] leading-[30px] tracking-normal font-inter text-[#101828]'>$3.00 per month</span>
                              <span className='w-full h-[18px] font-normal text-[12px] leading-[18px] tracking-normal font-inter text-[#101828] '>Next billing date: May 8, 2024</span>
                            </div>
                          </section>
                          <section className='w-full h-[50px] flex-col flex gap-[8px]'>
                            <span className='w-[97px] h-[18px] font-medium text-[10px] leading-[18px] tracking-[0.02em] font-inter text-[#667085]'>PAYMENT METHOD</span>
                            <div className='w-full h-[24px]  flex justify-between'>
                              <div className='w-full h-[18px] flex  items-center flex-row gap-[4px]'>
                                <span className='w-[20px] h-[18px] font-normal text-[12px] leading-[18px] tracking-[0.04em] text-[#101828] font-inter'>••••</span>
                                <span className='w-[28px] h-[18px] font-normal text-[12px] leading-[18px] tracking-normal font-inter text-[#101828]'>8593</span>
                                <span className='w-[34px] h-[24px] border-[1px] flex justify-center items-center rounded-[5px] border-[#EAECF0] bg-[#FFFFFF]'>
                                  <img src="/Mastercard.png" className='w-[23px] h-[14px]' />
                                </span>
                                <span className='w-[94px] h-[18px] font-normal text-[12px] leading-[18px] tracking-normal font-inter text-[#101828]'>Expires 03/2026</span>
                                
                              </div>
                              <span className='w-[24px] h-[24px] flex justify-center items-center'>
                                <Icon icon="ph:dots-three-outline-fill" width="16" height="16" className='text-[#667085]' />
                              </span>
                            </div>
                          </section>
                          <section className='w-full h-[178px] flex-col flex gap-[8px]'>
                            <span className='w-[97px] h-[18px] font-medium text-[10px] leading-[18px] tracking-[0.02em] font-inter text-[#667085]'>BILLING HISTORY</span>
                                              <div className='w-full h-[24px]  flex justify-between'>
                              <div className='w-full h-[18px] flex  items-center flex-row gap-[4px]'>
                              
                                <span className='w-[76px] h-[18px] font-normal text-[12px] leading-[18px] tracking-normal font-inter text-[#101828]'>Apr, 2025</span>
                                <span className='w-[77px] h-[18px] font-bold text-[12px] leading-[18px] tracking-normal font-inter'>
                                  GH₵ 50.00
                                </span>
                                <span className='w-[41px] h-[22px] opacity-100 rounded-full border border-solid flex justify-center border-[#ABEFC6] items-center bg-[#ECFDF3]'>
                                  <span className='w-[25px] h-[18px] font-medium text-[12px] leading-[18px] tracking-normal text-center font-inter text-[#067647]'>Paid</span>
                                </span>
                                
                              </div>
                              <span className='w-[24px] h-[24px] flex justify-center items-center'>
                              
                                <Icon icon="iconamoon:arrow-top-right-1-bold" width="16" height="16" className='text-[#667085]' />
                              </span>
                            </div>
                              

                               <div className='w-full h-[24px]  flex justify-between'>
                              <div className='w-full h-[18px] flex  items-center flex-row gap-[4px]'>
                              
                                <span className='w-[76px] h-[18px] font-normal text-[12px] leading-[18px] tracking-normal font-inter text-[#101828]'>Mar 8, 2025</span>
                                <span className='w-[77px] h-[18px] font-bold text-[12px] leading-[18px] tracking-normal font-inter'>
                                  GH₵ 50.00
                                </span>
                                <span className='w-[41px] h-[22px] opacity-100 rounded-full border border-solid flex justify-center border-[#ABEFC6] items-center bg-[#ECFDF3]'>
                                  <span className='w-[25px] h-[18px] font-medium text-[12px] leading-[18px] tracking-normal text-center font-inter text-[#067647]'>Paid</span>
                                </span>
                                
                              </div>
                              <span className='w-[24px] h-[24px] flex justify-center items-center'>
                              
                                <Icon icon="iconamoon:arrow-top-right-1-bold" width="16" height="16" className='text-[#667085]' />
                              </span>
                            </div>

                            
                      

                            
                               <div className='w-full h-[24px]  flex justify-between'>
                              <div className='w-full h-[18px] flex  items-center flex-row gap-[4px]'>
                              
                                <span className='w-[76px] h-[18px] font-normal text-[12px] leading-[18px] tracking-normal font-inter text-[#101828]'>Feb 8, 2025</span>
                                <span className='w-[77px] h-[18px] font-bold text-[12px] leading-[18px] tracking-normal font-inter'>
                                  $5.00
                                </span>
                                <span className='w-[41px] h-[22px] opacity-100 rounded-full border border-solid flex justify-center border-[#ABEFC6] items-center bg-[#ECFDF3]'>
                                  <span className='w-[25px] h-[18px] font-medium text-[12px] leading-[18px] tracking-normal text-center font-inter text-[#067647]'>Paid</span>
                                </span>
                                
                              </div>
                              <span className='w-[24px] h-[24px] flex justify-center items-center'>
                              
                                <Icon icon="iconamoon:arrow-top-right-1-bold" width="16" height="16" className='text-[#667085]' />
                              </span>
                            </div>


                                     <div className='w-full h-[24px]  flex justify-between'>
                              <div className='w-full h-[18px] flex  items-center flex-row gap-[4px]'>
                              
                                <span className='w-[76px] h-[18px] font-normal text-[12px] leading-[18px] tracking-normal font-inter text-[#101828]'>Jan 8, 2025</span>
                                <span className='w-[77px] h-[18px] font-bold text-[12px] leading-[18px] tracking-normal font-inter'>
                                  GH₵ 50.00
                                </span>
                                <span className='w-[41px] h-[22px] opacity-100 rounded-full border border-solid flex justify-center border-[#ABEFC6] items-center bg-[#ECFDF3]'>
                                  <span className='w-[25px] h-[18px] font-medium text-[12px] leading-[18px] tracking-normal text-center font-inter text-[#067647]'>Paid</span>
                                </span>
                                
                              </div>
                              <span className='w-[24px] h-[24px] flex justify-center items-center'>
                              
                                <Icon icon="iconamoon:arrow-top-right-1-bold" width="16" height="16" className='text-[#667085]' />
                              </span>
                            </div>

                                     <div className='w-full h-[24px]  flex justify-between'>
                              <div className='w-full h-[18px] flex  items-center flex-row gap-[4px]'>
                              
                                <span className='w-[76px] h-[18px] font-normal text-[12px] leading-[18px] tracking-normal font-inter text-[#101828]'>Dec 8, 2025</span>
                                <span className='w-[77px] h-[18px] font-bold text-[12px] leading-[18px] tracking-normal font-inter'>
                                $5.00
                                </span>
                                <span className='w-[41px] h-[22px] opacity-100 rounded-full border border-solid flex justify-center border-[#ABEFC6] items-center bg-[#ECFDF3]'>
                                  <span className='w-[25px] h-[18px] font-medium text-[12px] leading-[18px] tracking-normal text-center font-inter text-[#067647]'>Paid</span>
                                </span>
                                
                              </div>
                              <span className='w-[24px] h-[24px] flex justify-center items-center'>
                              
                                <Icon icon="iconamoon:arrow-top-right-1-bold" width="16" height="16" className='text-[#667085]' />
                              </span>
                            </div>

                            
                          </section>
                        </section>

                   </section>
                



      </div>

    
    </div>
  
    </div>
  )
}

export default Page
