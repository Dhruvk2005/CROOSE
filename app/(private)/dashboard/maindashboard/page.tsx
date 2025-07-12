import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const maindashboard = () => {
  return (
    <div>
        <div className='w-full py-[18px] px-[24px] h-[64px] flex justify-between items-center border-b-2 border-[#EAECF0] ' >
            <div className='text-[#121217] text-[18px] font-semibold font-sans ' >Overview</div>
            <div className='border-2 border-[#EAECF0] rounded-[8px] p-[10px] ' ><Icon icon="mdi-light:bell" width="24" height="24"  style={{color: "#475467"}} /></div>
        </div>

        <div className='w-full h-auto px-[24px] py-[40px] gap-[20px] flex flex-col ' >
            <div className='w-full flex justify-between items-center ' >
                <ul>
                    <li className='font-sans text-[18px] text-[#1D2939] font-semibold   ' >Good Afternoon, Isaac</li>
                    <li className='text-[#667085] font-normal  ' >16 June, 2025 - 21:23 PM</li>
                </ul>

                <ul className='flex gap-[8px] items-center ' >
                    <li className=' flex justify-center  w-[60px] bg-[#F1F0FA] text-[#685BC7] py-[8px] px-[16px] rounded-[8px] ' >CTA</li>
                    <li className='  flex justify-center w-[60px] bg-[#685BC7] text-[#F1F0FA] py-[8px] px-[16px] rounded-[8px] ' >CTA</li>
                </ul>
            </div>

            <div className='w-full h-auto ' >
                <ul className='w-full h-auto flex flex-wrap gap-[16px]' >
                    <li className='w-[24%]  h-[160px] border-2 border-[#EAECF0] rounded-[16px] ' >
                        <div className='w-full font-sans flex gap-[8px] p-[12px] items-center h-[44px] border-b-2 border-[#EAECF0] text-[12px] font-semibold text-[#475467]  ' ><Icon icon="humbleicons:chat" width="24" height="24"  style={{color: "#475467"}} />Total Chats</div>
                        <div  className='flex h-[116px] text-[36px] justify-center items-center text-black font-bold' >0</div>

                    </li>
                    <li className='w-[24%]  h-[160px] border-2 border-[#EAECF0] rounded-[16px] ' >
                        <div className='w-full font-sans flex gap-[8px] p-[12px] items-center h-[44px] border-b-2 border-[#EAECF0] text-[12px] font-semibold text-[#475467]  ' ><Icon icon="humbleicons:chat" width="24" height="24"  style={{color: "#475467"}} />Total Chats</div>
                        <div  className='flex h-[116px] text-[36px] justify-center items-center text-black font-bold' >0</div>

                    </li>
                    <li className='w-[24%]  h-[160px] border-2 border-[#EAECF0] rounded-[16px] ' >
                        <div className='w-full font-sans flex gap-[8px] p-[12px] items-center h-[44px] border-b-2 border-[#EAECF0] text-[12px] font-semibold text-[#475467]  ' ><Icon icon="humbleicons:chat" width="24" height="24"  style={{color: "#475467"}} />Total Chats</div>
                        <div  className='flex h-[116px] text-[36px] justify-center items-center text-black font-bold' >0</div>

                    </li>
                    <li className='w-[24%]  h-[160px] border-2 border-[#EAECF0] rounded-[16px] ' >
                        <div className='w-full font-sans flex gap-[8px] p-[12px] items-center h-[44px] border-b-2 border-[#EAECF0] text-[12px] font-semibold text-[#475467]  ' ><Icon icon="humbleicons:chat" width="24" height="24"  style={{color: "#475467"}} />Total Chats</div>
                        <div  className='flex h-[116px] text-[36px] justify-center items-center text-black font-bold' >0</div>

                    </li>
                    
                </ul>
            </div>

        </div>

        <div>

        </div>

      
    </div>
  )
}

export default maindashboard
