'use Client'
import React from 'react'
import { Icon } from "@iconify/react";


const Documentpopup = (props:any) => {



  return (
    <div className=' fixed top-0 left-0 z-[50]  bg-gray-500/75  flex justify-center items-center w-full h-[100vh]' >
      <div className='w-[458px] bg-[#FFFFFF]  rounded-[16px] h-auto' >
        <div>
          <ul className=' flex justify-between py-[16px] px-[24px] w-[458px] border-b-[1px] border-b-[#FFFFFF] ' >
            <li className='font-bold font-Inter text-[16px] text-[#14151A]' >Documents</li>
            <li><Icon onClick={()=>props.setDocopen(false)} icon="charm:cross" width="16" height="26" style={{ color: "#71717A" }} className=' w-[30px] ' /></li>
          </ul>
          <div>
           <ul className='flex flex-col gap-[16px] w-[458px] h-auto py-[20px] px-[24px]'>
  <li className='w-[410px] h-auto border-[1px] border-[#E4E4E7] rounded-[12px] p-[16px]'>
    <div className='flex gap-[10px]'>
      <img className='w-[40px]' src={"/file.png"} alt='file' />
      <div className='flex items-center justify-between w-[326px]'>
        <div>
          <p className='text-[#020617] font-sans text-[14px]'>Products pricing.csv</p>
          <p className='text-[#71717A]'>200 KB</p>
        </div>
        <div>
          <Icon icon="mi:delete" width="24" height="24" style={{ color: '#71717A' }} />
        </div>
      </div>
    </div>
  </li>

  <li className='w-[410px] h-auto border-[1px] border-[#E4E4E7] rounded-[12px] p-[16px]'>
    <div className='flex gap-[10px]'>
      <img className='w-[40px]' src={"/filered.png"} alt='file' />
      <div className='flex items-center justify-between w-[326px]'>
        <div>
          <p className='text-[#020617] font-sans text-[14px]'>Products pricing.csv</p>
          <p className='text-[#71717A]'>200 KB</p>
        </div>
        <div>
          <Icon icon="mi:delete" width="24" height="24" style={{ color: '#71717A' }} />
        </div>
      </div>
    </div>
  </li>

  <li className='w-[410px] h-auto border-[1px] border-[#E4E4E7] rounded-[12px] p-[16px]'>
    <div className='flex gap-[10px]'>
      <img className='w-[40px]' src={"/file.png"} alt='file' />
      <div className='flex items-center justify-between w-[326px]'>
        <div>
          <p className='text-[#020617] font-sans text-[14px]'>Products pricing.csv</p>
          <p className='text-[#71717A]'>200 KB</p>
        </div>
        <div>
          <Icon icon="mi:delete" width="24" height="24" style={{ color: '#71717A' }} />
        </div>
      </div>
    </div>
  </li>
</ul>


          </div>
        </div>
        <div className='flex justify-center items-center w-[458px] border-t-[1px] p-[20px] gap-[12px] ' >
          <button className='py-[8px] w-[203px] text-[#DC2626] font-sans font-semibold px-[16px] rounded-[8px] bg-[#FEF2F2] text-[]' >Remove All</button>
          <button className='py-[8px] w-[203px] rounded-[8px] font-sans font-semibold px-[16px] bg-[#685BC7] text-[#FFFFFF] ' >Add more</button>
        </div>
      </div>

    </div>
  )
}

export default Documentpopup
