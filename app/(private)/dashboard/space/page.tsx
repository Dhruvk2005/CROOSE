import React from 'react'
import Navbar from '@/app/(public)/component/page'

const Page = () => {
  return (
    <>
      <div className="h-[900px] w-full bg-[#FFFFFF] relative">
        <Navbar />

        {/* Top Cards Row */}
        <div className="h-[160px] flex flex-row justify-between w-[1088px]  absolute top-0 left-1/2 -translate-x-1/2 mt-24 shadow-lg rounded-lg">
          {/* Card 1 */}
          <div className='w-[260p] rounded-[16px] border border-gray-300 h-[160px]'>
            <div className='w-[260px] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]'>
              <img src="/chat.png" />
              <div className='w-[212px] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] '>Total Chats</div>
            </div>
            <div className='h-[116px] text-center text-[#101828]  p-[24px] g-[24px] w-[260px] font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]'>0</div>
          </div>

          {/* Card 2 */}
         <div className='w-[260p] rounded-[16px] border border-gray-300 h-[160px]'>
            <div className='w-[260px] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]'>
              <img src="/chat.png" />
              <div className='w-[212px] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] '> Live Chats</div>
            </div>
            <div className='h-[116px] text-center text-[#101828]  p-[24px] g-[24px] w-[260px] font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]'>0</div>
          </div>
          

          {/* Card 3 */}
      <div className='w-[260p] rounded-[16px] border border-gray-300 h-[160px]'>
            <div className='w-[260px] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]'>
              <img src="/chat.png" />
              <div className='w-[212px] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] '> Avg. Response Time</div>
            </div>
            <div className='h-[116px] text-center text-[#101828]  p-[24px] g-[24px] w-[260px] font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]'>0</div>
          </div>

          {/* Card 4 */}
           <div className='w-[260p] rounded-[16px] border border-gray-300 h-[160px]'>
            <div className='w-[260px] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]'>
              <img src="/chat.png" />
              <div className='w-[212px] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] '> Sales</div>
            </div>
            <div className='h-[116px] text-center text-[#101828]  p-[24px] g-[24px] w-[260px] font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]'>0</div>
          </div>
      
        </div>

        
        <div className="w-[1088px] h-[486px] bg-[#EAECF0] absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 rounded-lg shadow-xl">
        <div className='w-[1088px] flex flex-row items-center bg-[#EAECF0] border-b border-gray-300 h-[60px]'>
            <img src="/message-circle.png" alt='circle-sms' className='bg-[#EAECF0] flex rounded-lg gap-[10px]'/>
            <p className='font-sans w-[937px] h-[24px] text-[#101828] bg-[#EAECF0] font-semibold text-base leading-6 tracking-normal align-middle'>Live Chats</p>
            <div className='w-[79px] h-[36px] opacity-0 gap-[10px] bg-[#EAECF0] rounded-lg border pt-[2px] pr-[4px] pb-[2px] pl-[4px]'></div>
        </div>
        
        <div className='h-[307px] bg-amber-200 p-[24px] flex justify-center items-center gap-[24px] [1088px]'>
          <div className='w-[256px] h-[208px] rounded-8px gap-[20px]'>
            <div className='w-[256px] h-[60px] font-sans font-semibold text-sm leading-5 tracking-normal text-center'>No live chats yet</div>
          </div>
        </div>
          
        </div>
      </div>
    </>
  )
}

export default Page

