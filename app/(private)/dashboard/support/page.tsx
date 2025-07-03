'use client'
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react'
import Croosehq from '../../components/croosehq'
import { Righteous } from 'next/font/google'
import CroosehqRigtFull from '../../components/croosehqright'

let Accordings = ({index,value,toggleaccordion,openindex}:any)=>{
    const [isopen, setIsopen] = useState(false)
   
    
    return(  <div key={index} className="w-[90%]  h-auto rounded-[8px] bg-[#F2F4F7] text-[#101828] font-semibold font-Inter text-[16px] p-[24px]">
                                    <ul onClick={()=>toggleaccordion(index)}
                                        className="flex justify-between items-center cursor-pointer"

                                    >
                                        <li>{value.title}</li>

                                        <li>
                                            {isopen ? (
                                                <Icon onClick={() => setIsopen((prev:any) => !prev)}
                                                    icon="majesticons:minus-line"
                                                    width="24"
                                                    height="24"
                                                    style={{ color: "#101828" }}
                                                />
                                            ) : (
                                                <Icon
                                                    onClick={() => setIsopen((prev:any) => !prev)}
                                                    icon="lucide:plus"
                                                    width="24"
                                                    height="24"
                                                    style={{ color: "#101828" }}
                                                />
                                            )}
                                        </li>
                                    </ul>

                                    {openindex == index && (
                                        <div className="  text-[#344054] font-normal">
                                            <p>
                                               {value.description}
                                            </p>
                                        </div>
                                    )}
                                </div>)
}
const Support = () => {
    const[crooseopen,setCrooseOpen]  = useState(false)
     const [open,setOpen] = useState(false)

    const [openindex,setOpenindex] =useState<number | null>(null) ;

    const toggleaccordion=(index:number)=>{
        setOpenindex(prev=>(prev === index ? null : index ))

    }


    let data = [
        {
            title: "What is CROOSE?",
            description: "sdfwqdvadcsscdasdcascascds"
        },
        {
            title: "How do I set up the automated response?",
            description: "sdfwqdvadcsscdasdcascascds"
        },
        {
            title: "How do I cancel subscription?",
            description: "sdfwqdvadcsscdasdcascascds"
        },
        {
            title: "What payment methods do you accept?",
            description: "sdfwqdvadcsscdasdcascascds"
        },
         {
            title: "How do I set up the automated response?",
            description: "sdfwqdvadcsscdasdcascascds"
        }

    ]

    return (
        <div className='w-full md:px-8 ' >

            <div>
                <div className='w-full h-[64px] flex-wrap  flex justify-between items-center' style={{ borderBottom: "1px solid #EAECF0" }}>
                    <div className='flex items-center  gap-[20px] text-[#121217] '>
                        <span className='font-semi font-bold text-[20px] pl-[20px] ml-[10px]' >Support</span>

                    </div>
                    <div className='mr-[20px]' >
                        <li className='flex flex-wrap w-[98px] gap-[23px] justify-center items-center '>
                            <div className='w-[46px] flex gap-[10px] border-r-[2px]  border-[#F2F4F7]' >
                                <Icon icon="mynaui:search" width="24" height="24" style={{ color: '#000' }} />
                            </div>
                            <div className='w-[16px] flex gap-[10px]'>
                                <svg width="24" height="20" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99255 15.0123C10.3499 16.346 9.55845 17.7168 8.22478 18.0742C6.89112 18.4315 5.52028 17.6401 5.16292 16.3064M7.07633 4.78404C7.32983 4.32796 7.41334 3.77671 7.26762 3.23288C6.96983 2.12149 5.82746 1.46194 4.71607 1.75974C3.60468 2.05753 2.94514 3.1999 3.24293 4.31129C3.38865 4.85512 3.73659 5.29076 4.18418 5.55899M11.53 7.87107C11.2325 6.76096 10.4384 5.83266 9.32236 5.29038C8.2063 4.74811 6.8597 4.63627 5.5788 4.97949C4.2979 5.32271 3.18763 6.09285 2.49223 7.12051C1.79683 8.14817 1.57327 9.34915 1.87072 10.4593C2.36287 12.296 2.2673 13.7613 1.95651 14.8747C1.60229 16.1438 1.42518 16.7783 1.47302 16.9057C1.52777 17.0515 1.56737 17.0915 1.71256 17.1478C1.83947 17.1969 2.37261 17.0541 3.4389 16.7684L13.3265 14.119C14.3927 13.8333 14.9259 13.6904 15.0112 13.5844C15.1088 13.4631 15.1231 13.4086 15.0976 13.255C15.0754 13.1208 14.6047 12.6598 13.6634 11.7379C12.8375 10.929 12.0221 9.70778 11.53 7.87107Z" stroke="#101828" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                        </li>

                    </div>


                </div>
            </div>

            <div className='w-full h-[808px] flex flex-col  gap-[24px] pr-[32px] pl-[32px] pt-[32px] ' >
                <div className='flex flex-col gap-[6px]' >
                    <p className='font-inter font-semibold text-[18px] text-[#101828] ' >The assistance you require</p>
                    <p className='text-[#475467] font-normal text-[14px] font-Inter ' >Explore the essential details that define your customer base.</p>

                </div>
                <div className='flex flex-wrap items-center  ' >
                    <button className='bg-[#F9F5FF] w-[52px] rounded-[6px] px-[12px] py-[8px] text-[14px] font-semibold font-Inter  text-[#685BC7]   ' >FAQ</button>
                    <button onClick={()=>setCrooseOpen(true)} className=' flex gap-[8px] w-[80px] font-Inter px-[12px] py-[8px] rounded-[6px] text-[#667085] font-semibold  text-[14px]  ' >Live Bot</button>
                </div>

                <div className='font-bold text-[30px] font-Inter text-[#101828]  ' >
                    Frequently Asked Questions
                </div>

                <section className="w-full flex flex-col flex-wrap gap-[16px] ">

                    {data.map((value,index) => {
                        return (
                            
                              
                            <Accordings value={value} index={index} openindex={openindex} toggleaccordion={toggleaccordion}/>
                            
                        )
                    })}

                </section>

            </div>
            

            {crooseopen? <Croosehq setCrooseOpen2={setCrooseOpen} setOpen={setOpen} />:""}
            {open? <CroosehqRigtFull open={open} setOpen = {setOpen} />:""}

        </div>
    )
}

export default Support
