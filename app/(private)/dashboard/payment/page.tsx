import React from 'react'
import { Icon } from '@iconify/react';

const Page = () => {
  return (
    <div>
        <div className="w-full h-[900px] flex items-center justify-center bg-[#FFFFFF] backdrop-blur-2xl   p-4">
  

  <div className="w-1/2 h-[732px] relative   border rounded-[20px] bg-[#ffffff] ">
  <img src="/girlbanner.jpeg" className='w-full h-[150px] border  rounded-[20px] flex flex-row'></img>
  
  <Icon icon="material-symbols:close-rounded" width="24" height="24" className='w-[18px] h-[18px] absolute top-7 right-7 text-black'/>
  <div className='h-[106px] absolute top-[17%] ml-[5%] w-[90%] flex flex-col gap-[12px]  bg-[#ffffff]'>
    <img src='/Avatar.png' className='h-[48px] w-[48px] border rounded-[50%] bg-[#F2F4F7]' />
    <div className='w-[100%]  flex flex-row justify-between h-[46px]'>
        <div className='w-[408px]   h-[46px] flex flex-col gap-[4px]'>
            <div className='w-[162px] h-[22px] flex gap-[4px]'>
                <div className='w-[101px] h-[20px] font-medium text-sm leading-5 tracking-normal text-[#101828]'>Chelsea Moore</div>
                <div className='px-3 py-1 text-sm font-medium text-green-800 border border-[#ABEFC6] bg-[#ECFDF3] flex flex-row w-[53px] h-[22px] rounded-full  border-solid pt-[2px] pb-[2px] '>
                    <div className='w-[37px] h-[18px] font-medium text-xs leading-[18px] tracking-normal text-[#067647] text-center'>Active</div>
                </div>
             
            </div>
               <div className='h-[20px] w-[100%]   flex flex-row gap-[8px]'>
                    <div className='w-[32%] h-[20px]  font-normal text-sm leading-5 tracking-normal text-[#475467]'>olivia@untitledui.com</div>
                    <span className='h-[4px] w-[4px] bg-[#475467] border rounded-[50%] mt-[7px]'></span>
                    <div  className='w-[19%] h-[20px] font-normal text-sm leading-5 tracking-normal text-[#475467]'>0241763214</div>
                    <span className='h-[4px] w-[4px] bg-[#475467] border rounded-[50%] mt-[7px] '></span>
                    <div className='h-[20px] w-[35%]  font-normal text-sm leading-5 text-[#475467] tracking-normal'>Atlanta, United States</div>
                </div>

                
        </div>
        <div className=' text-sm font-medium text-gray-700   rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 w-[111px] h-[34px]  gap-2 border border-[#EAECF0]'>
                    <button className=' w-[111px] mr-[5px] h-[18px] mt-[10px] ml-[8px] font-semibold text-[12px] leading-[18px] tracking-[0] font-inter text-[#344054] flex flex-row'>Edit Customer</button>
                </div>
    </div>
  </div>
  <div className='h-[168px] bg-[#ffffff] ml-[4.5%] mt-[19%] flex-wrap flex gap-[8px] w-[91%]'>
    <div className='w-full h-[80px] flex flex-row gap-[8px]'>
        <div className='w-[179px] h-[80px] border rounded-[12px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[4px] bg-gray-100 '>
            <div className='w-[81px] h-[20px] font-normal text-[12px] leading-[20px] tracking-[0] font-inter text-[#475467]'>First visit date</div>
            <div className='w-[147.33px] h-[28px] font-semibold text-[20px] leading-[28px] tracking-[0] font-inter text-[#101828]'>2 Jan, 2024</div>
        </div>

        <div className='w-[179px] h-[80px] border rounded-[12px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[4px] bg-gray-100 '>
            <div className='w-[81px] h-[20px] font-normal text-[12px] leading-[20px] tracking-[0] font-inter text-[#475467]'>Last seen</div>
            <div className='w-[147.33px] h-[28px] font-semibold text-[20px] leading-[28px] tracking-[0] font-inter text-[#101828]'>10 Jun, 2025</div>
        </div>

        <div className='w-[179px] h-[80px] border rounded-[12px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[4px] bg-gray-100 '>
            <div className='w-[81px] h-[20px] font-normal text-[12px] leading-[20px] tracking-[0] font-inter text-[#475467]'>No of visits</div>
            <div className='w-[147.33px] h-[28px] font-semibold text-[20px] leading-[28px] tracking-[0] font-inter text-[#101828]'>12</div>
        </div>

        
    </div>
    <div className='h-[80px] w-full flex gap-[8px] flex-row '>
           <div className='w-[179px] h-[80px] border rounded-[12px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[4px] bg-gray-100 '>
            <div className='w-[81px] h-[20px] font-normal text-[12px] leading-[20px] tracking-[0] font-inter text-[#475467]'>Total spent</div>
            <div className='w-[147.33px] h-[28px] font-semibold text-[20px] leading-[28px] tracking-[0] font-inter text-[#101828]'>$1200.60</div>
        </div>
          <div className='w-[179px] h-[80px] border rounded-[12px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[4px] bg-gray-100 '>
            <div className='w-[107px] h-[20px] font-normal text-[12px] leading-[20px] tracking-[0] font-inter text-[#475467]'>First amount spent</div>
            <div className='w-[147.33px] h-[28px] font-semibold text-[20px] leading-[28px] tracking-[0] font-inter text-[#101828]'>$219</div>
        </div>
          <div className='w-[179px] h-[80px] border rounded-[12px] pt-[14px] pr-[20px] pb-[14px] pl-[20px] gap-[4px] bg-gray-100 '>
            <div className='w-[106px] h-[20px] font-normal text-[12px] leading-[20px] tracking-[0] font-inter text-[#475467]'>Last amount spent</div>
            <div className='w-[147.33px] h-[28px] font-semibold text-[20px] leading-[28px] tracking-[0] font-inter text-[#101828]'>$430</div>
        </div>

    </div>
    <div className='w-full h-[218px] mt-[30px] gap-[10px] flex flex-col bg-[#F9FAFB]'>
        <span className='h-[172px] w-full flex flex-col justify-between border rounded-[12px] pt-[8px] pr-[20px] pb-[8px] bg-[#F9FAFB] pl-[20px]'>
          <div className='w-full h-[36px] flex flex-row'>
            <span className='w-full h-[20px]  font-inter font-inter font-semibold text-[12px] leading-[20px] tracking-[0] text-[#101828]'>Payments (4)</span>
            <img src="/downarrow.png" className='w-[12px] h-[12px]' /></div>
 {/* first */}
               <div className='w-full h-[22px] bg-amber-200 flex justify-between pr-[20px] pl-[20px]'>
                <span className='h-[20px] w-[85%] flex gap-[20px] flex-row'>
                  <span className='w-[40%] h-[18px] font-inter font-normal text-[12px] mt-[3px] leading-[18px] tracking-[0%] text-[#475467]'>10 Jan 2024, 13:00</span>
                  <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
                  <span className='h-[18px] w-[10%] font-inter font-normal text-[12px] mt-[3px] leading-[18px] tracking-[0] text-[#475467] font-inter'>₵200</span>
                   <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
                   <span className='h-[22px] w-[120px]'>
                   <span className='text-sm px-3 py-1 w-[77px] h-[22px] rounded-full pt-[2px]  pb-[2px]  border  font-medium text-[12px] text-[#175CD3] leading-[18px] tracking-[0px] text-center font-inter'>Kinky wig</span></span>
                    <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
                    <span className='w-[22px] h-[22px] rounded-full gap-[4px] border p-[5px] bg-[#ECFDF3] border-[#ABEFC6]'>
                      <Icon icon="qlementine-icons:check-tick-16" width="16" height="16"className='text-[#000] w-[12px] h-[12px]  text-[#17B26A]'  />
                      
                    </span>
                 
                </span>
                   <span className='w-[20px] h-[14px]'><Icon icon="bi:three-dots" width="16" height="16" className='text-[#98A2B3] mt-[3px]' /></span>
               </div>    
                       {/* second */}

                           <div className='w-full h-[22px] bg-amber-200 flex justify-between pr-[20px] pl-[20px]'>
                <span className='h-[20px]  w-[85%] flex gap-[20px] flex-row'>
                  <span className='w-[40%] h-[18px] font-inter font-normal text-[12px] mt-[3px] leading-[18px] tracking-[0%] text-[#475467]'>10 Dec 2023, 12:30</span>
                  <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
                  <span className='h-[18px] w-[10%] font-inter font-normal text-[12px] mt-[3px] leading-[18px] tracking-[0] text-[#475467] font-inter'>₵200</span>
                   <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
                   <span className='h-[22px] w-[120px]'>
                   <span className='text-sm px-3 py-1 w-[77px] h-[22px] rounded-full pt-[2px]  pb-[2px]  border  font-medium text-[12px] text-[#175CD3] leading-[18px] tracking-[0px] text-center font-inter'>Curl Hair</span></span>
                    <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
                    <span className='w-[22px] h-[22px] rounded-full gap-[4px] border p-[5px] bg-[#ECFDF3] border-[#ABEFC6]'>
                      <Icon icon="qlementine-icons:check-tick-16" width="16" height="16"className='text-[#000] w-[12px] h-[12px]  text-[#17B26A]'  />
                      
                    </span>
                 
                </span>
                   <span className='w-[20px] h-[14px]'><Icon icon="bi:three-dots" width="16" height="16" className='text-[#98A2B3] mt-[3px]' /></span>
               </div>
                     {/* third */}
                           <div className='w-full h-[22px] bg-amber-200 flex justify-between pr-[20px] pl-[20px]'>
                <span className='h-[20px] w-[85%] flex gap-[20px] flex-row'>
                  <span className='w-[40%] h-[18px] font-inter font-normal text-[12px] mt-[3px] leading-[18px] tracking-[0%] text-[#475467]'>10 Nov 2023, 15:45</span>
                  <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
                  <span className='h-[18px] w-[10%] font-inter font-normal text-[12px] mt-[3px] leading-[18px] tracking-[0] text-[#475467] font-inter'>₵200</span>
                   <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
                   <span className='h-[22px] bg-amber-700 w-[125px]'>
                       <span className='w-[123px] h-[22px] rounded-full pt-[2px] pr-4 pb-[2px] pl-4 border bg-[#EFF8FF] font-medium text-[12px] leading-[18px] tracking-[0] text-center font-inter  px-4  text-sm  text-[#175CD3] '>Expression Braid...</span>
                 </span>
                    <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
                    <span className='w-[22px] h-[22px] rounded-full gap-[4px] border p-[5px] bg-[#ECFDF3] border-[#ABEFC6]'>
                      <Icon icon="qlementine-icons:check-tick-16" width="16" height="16"className='text-[#000] w-[12px] h-[12px]  text-[#17B26A]'  />
                      
                    </span>
                 
                </span>
                   <span className='w-[20px] h-[14px]'><Icon icon="bi:three-dots" width="16" height="16" className='text-[#98A2B3] mt-[3px]' /></span>
               </div>
                       {/* fourth */}

                           <div className='w-full h-[22px] bg-amber-200 flex justify-between pr-[20px] pl-[20px]'>
                <span className='h-[20px] w-[85%] flex gap-[20px] flex-row'>
                  <span className='w-[40%] h-[18px] font-inter font-normal text-[12px] mt-[3px] leading-[18px] tracking-[0%] text-[#475467]'>10 Oct 2023, 13:15</span>
                  <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
                  <span className='h-[18px] w-[10%] font-inter font-normal text-[12px] mt-[3px] leading-[18px] tracking-[0] text-[#475467] font-inter'>₵200</span>
                   <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
                   <span className='h-[22px] bg-amber-900 w-[120px]'>
                   <span className='text-sm px-3 py-1 w-[77px] h-[22px] rounded-full pt-[2px]  pb-[2px]  border  font-medium text-[12px] text-[#175CD3] leading-[18px] tracking-[0px] text-center font-inter'>Bulb wig</span></span>
                    <span className='w-[4px] h-[4px] mt-[9px] border bg-[#475467] rounded-[50%] text-[#475467]'></span>
                    <span className='w-[22px] h-[22px] rounded-full gap-[4px] border p-[5px] bg-[#ECFDF3] border-[#ABEFC6]'>
                      <Icon icon="qlementine-icons:check-tick-16" width="16" height="16"className='text-[#000] w-[12px] h-[12px]  text-[#17B26A]'  />
                      
                    </span>
                 
                </span>
                   <span className='w-[20px] h-[14px]'><Icon icon="bi:three-dots" width="16" height="16" className='text-[#98A2B3] mt-[3px]' /></span>
               </div>
            
        </span>

         <span className='h-[36px] w-full flex flex-row justify-between border rounded-[12px] pt-[8px] pr-[20px] pb-[8px] bg-[#F9FAFB] pl-[20px]'>
            <span className='w-[98px] h-[20px]  font-inter font-inter font-semibold text-[12px] leading-[20px] tracking-[0] text-[#101828]'>Activity Timeline</span>
           <Icon icon="iconamoon:arrow-down-2-bold" width="24" height="24"  className='w-[12px] h-[12px] text-black material-icons font-bold '/>
            

            
        </span>
        
    </div>
    




  </div>
  
  

    
  </div>
</div>
      
    </div>
  )
}

export default Page