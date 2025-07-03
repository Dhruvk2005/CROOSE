'use client'
import React from 'react'
import Customerspace from '../customerspace/page'
import { Icon } from "@iconify/react";
import UserTable from '../../components/table';
import { useState } from 'react';
import Customerpopup from '../../components/customerpopup';

const Customers = () => {
     const [open,setOpen] = useState(false)
    return (
        <div>
            <div>

                <div className='w-[100%] h-[64px]  flex justify-between items-center' style={{borderBottom:"1px solid #EAECF0"}}>
                    <div className='flex items-center  gap-[20px] text-[#121217] '>
                        <span className='font-semi font-bold text-[20px] pl-[20px] ml-[10px]' >Customers</span>

                    </div>
                    <div className='mr-[20px]' >
                        <li className='flex w-[98px] gap-[23px] justify-center items-center '>
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
            <div>
                <div className='w-full h-auto' >
                    <div className='w-full h-full flex flex-wrap flex-col gap-[64px] ' >
                        <div className='w-full h-auto p-[32px] flex flex-col gap-[24px] '>
                            <div className='flex items-center ' >
                                <div className='flex flex-col gap-[8px] w-full h-auto ' >
                                    <p className='font-Inter tetx-[16px] font-semibold text-[#101828] ' >Customer Insights</p>
                                    <p className='text-[#475467] font-Inter font-normal text-[14px]' >Dive deep into who your customers are</p>

                                </div>
                                <div>
                                    <button className=' w-[161px] gap-[8px] rounded-[8px] border-[2px] border-[#EAECF0] flex items-center  px-[14px] py-[10px] ' >
                                        <Icon icon="uil:calender" width="24" height="24" style={{ color: "#344054" }} />
                                        <p className='font-semibold text-[16px]  text-[#667085] ' >Select dates</p>
                                    </button>

                                </div>
                            </div>
                            <ul className=' w-[full] flex flex-wrap gap-[16px] ' >
                                <li className='w-full  lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
                                    <p className='text-[#475467] text-[14px] font-medium font-Inter' >New Customers</p>
                                    <div className='flex items-center gap-[16px] justify-between  '>
                                        <p className='font-semibold text-[#101828] text-[30px] ' >12</p>
                                        <img className='w-[71px] ' src={"/100.png"} alt='badge' />
                                    </div>
                                </li>
                                <li className='w-full  lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
                                    <p className='text-[#475467] text-[14px] font-medium font-Inter' >New Customers</p>
                                    <div className='flex items-center gap-[16px] justify-between  '>
                                        <p className='font-semibold text-[#101828] text-[30px] ' >700</p>
                                        <img className='w-[71px] ' src={"/100.png"} alt='badge' />
                                    </div>
                                </li>
                                <li className='w-full  lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
                                    <p className='text-[#475467] text-[14px] font-medium font-Inter' >New Customers</p>
                                    <div className='flex items-center gap-[16px] justify-between  '>
                                        <p className='font-semibold text-[#101828] text-[30px] ' >68%</p>
                                        <img className='w-[71px] ' src={"/90.png"} alt='badge' />
                                    </div>
                                </li>
                            </ul>
                            <ul className='flex flex-wrap gap-[16px]' >
                                <li className='w-full  lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
                                    <p className='text-[#475467] text-[14px] font-medium font-Inter' >New Customers</p>
                                    <div className='flex items-center gap-[16px] justify-between  '>
                                        <p className='font-semibold text-[#101828] text-[30px] ' >50</p>
                                        <img className='w-[71px] ' src={"/35.png"} alt='badge' />
                                    </div>
                                </li>
                                <li className='w-full  lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
                                    <p className='text-[#475467] text-[14px] font-medium font-Inter' >New Customers</p>
                                    <div className='flex items-center gap-[16px] justify-between  '>
                                        <p className='font-semibold text-[#101828] text-[30px] ' >$1700</p>
                                        <img className='w-[71px] ' src={"/100.png"} alt='badge' />
                                    </div>
                                </li>
                                <li className='w-full  lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
                                    <p className='text-[#475467] text-[14px] font-medium font-Inter' >New Customers</p>
                                    <div className='flex items-center gap-[16px] justify-between  '>
                                        <p className='font-semibold text-[#101828] text-[30px] ' >$28</p>
                                        <img className='w-[71px] ' src={"/100.png"} alt='badge' />
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className='w-full h-auto '  >
                    <div className=' flex flex-col gap-[24px] w-[full] p-[32px] h-auto ' >
                        <div className='flex flex-col gap-[8px] w-full h-auto ' >
                            <p className='font-Inter tetx-[16px] font-semibold text-[#101828] ' >Customer Insights</p>
                            <p className='text-[#475467] font-Inter font-normal text-[14px]' >All the details about your customers</p>

                        </div>
                        <div className='w-full flex items-center  ' >
                            <ul className='w-full flex  items-center justify-between ' >
                                <li className=' w-full  flex items-center ' >
                                    <button className='px-[14px] py-[10px] flex gap-[4px] border-[2px] rounded-[8px] border-[#EAECF0]  ' >
                                        <Icon icon="mynaui:filter-solid" width="20" height="20" style={{ color: "#667085" }} />
                                        <p className='text-[#344054] font-Inter font-semibold text-[14px] ' >Filters</p>
                                    </button>
                                </li>
                                <li className='flex gap-[12px] ' >
                                    <div className="w-full max-w-[320px] flex items-center gap-2 border-[2px] border-[#EAECF0] bg-white px-3 py-2 rounded-[8px]">
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            className="outline-none text-sm text-[#101828] placeholder-[#667085] font-Inter bg-transparent"
                                        />
                                        <Icon icon="mynaui:search" width="20" height="20" style={{ color: "#344054" }} />
                                    </div>
                                    <div onClick={()=>setOpen(true)}  className=' w-full  flex items-center ' >
                                        <button className=' items-center px-[14px] py-[10px] flex gap-[4px] border-[2px] rounded-[8px] border-[#EAECF0]  ' >
                                            <Icon icon="bitcoin-icons:export-outline" width="24" height="24" style={{ color: '#344054' }} />
                                            <p className='text-[#344054] font-Inter font-semibold text-[14px] ' >Export</p>
                                        </button>
                                    </div>
                                </li>

                            </ul>
                            <div>

                            </div>
                        </div>
                    </div>
                    <UserTable/>

                    <div>
                        

                    </div>

                </div>



            </div>
            {open? <Customerpopup setOpen={setOpen} />:""}
        </div>
    )
}

export default Customers
