import React, { useState } from 'react'
import Spacenav from '../../components/spacenav'
import Customerpopup from '../../components/customerpopup'

const Customerspace = () => {

   
    return (
        <div>
            <div><Spacenav /></div>
            <div className='w-full h-auto' >
                <div className='w-full h-full flex flex-wrap flex-col gap-[64px] ' >
                    <div className='w-full h-auto p-[32px] flex flex-col gap-[24px] '>
                        <div className='flex flex-col gap-[8px] w-full h-auto ' >
                            <p className='font-Inter tetx-[16px] font-semibold text-[#101828] ' >Customer Insights</p>
                            <p className='text-[#475467] font-Inter font-normal text-[14px]' >Dive deep into who your customers are</p>

                        </div  >
                        <ul className=' w-full flex flex-wrap gap-[16px] ' >
                            <li className='w-full lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
                                <p className='text-[#475467] text-[14px] font-medium font-Inter' >New Customers</p>
                                <div className='flex items-center gap-[16px] justify-between  '>
                                    <p className='font-semibold text-[#101828] text-[30px] ' >0</p>
                                    <img className='w-[41px] ' src={"/badge.png"} alt='badge' />
                                </div>
                            </li>
                            <li className='w-full lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
                                <p className='text-[#475467] text-[14px] font-medium font-Inter' >New Customers</p>
                                <div className='flex items-center gap-[16px] justify-between  '>
                                    <p className='font-semibold text-[#101828] text-[30px] ' >0</p>
                                    <img className='w-[41px] ' src={"/badge.png"} alt='badge' />
                                </div>
                            </li>
                            <li className='w-full lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
                                <p className='text-[#475467] text-[14px] font-medium font-Inter' >New Customers</p>
                                <div className='flex items-center gap-[16px] justify-between  '>
                                    <p className='font-semibold text-[#101828] text-[30px] ' >0</p>
                                    <img className='w-[41px] ' src={"/badge.png"} alt='badge' />
                                </div>
                            </li>
                        </ul>
                        <ul className='flex flex-wrap gap-[16px]' >
                            <li className='w-full lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
                                <p className='text-[#475467] text-[14px] font-medium font-Inter' >New Customers</p>
                                <div className='flex items-center gap-[16px] justify-between  '>
                                    <p className='font-semibold text-[#101828] text-[30px] ' >0</p>
                                    <img className='w-[41px] ' src={"/badge.png"} alt='badge' />
                                </div>
                            </li>
                            <li className='w-full lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
                                <p className='text-[#475467] text-[14px] font-medium font-Inter' >New Customers</p>
                                <div className='flex items-center gap-[16px] justify-between  '>
                                    <p className='font-semibold text-[#101828] text-[30px] ' >0</p>
                                    <img className='w-[41px] ' src={"/badge.png"} alt='badge' />
                                </div>
                            </li>
                            <li className='w-full lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
                                <p className='text-[#475467] text-[14px] font-medium font-Inter' >New Customers</p>
                                <div className='flex items-center gap-[16px] justify-between  '>
                                    <p className='font-semibold text-[#101828] text-[30px] ' >0</p>
                                    <img className='w-[41px] ' src={"/badge.png"} alt='badge' />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className=' flex justify-center items-center w-full h-[424px]  ' >
                        <div className='flex flex-col gap-[16px] w-[443px] h-auto items-center   ' >
                            <p className='text-[#101828] font-semibold text-[18px] font-Inter  ' >This is where you’ll find your customers</p>
                            <p className='text-center  text-[#475467] font-normal text-[14px]  ' >To get started, add your first customer via our API.
                                Customers you’ve invited who haven’t yet signed up will appear after choosing. ‘Pending’ from the dropdown menu above</p>
                                <button className='py-[8px] px-[12px] border-[2px] border-[#EAECF0] font-semibold text-[12px] font-Inter rounded-[8px] text-[#344054] ' >Modify</button>

                        </div>

                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Customerspace
