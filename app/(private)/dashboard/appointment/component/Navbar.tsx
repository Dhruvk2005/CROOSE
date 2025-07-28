import React from 'react'

import { Icon } from "@iconify/react";
const Navbar = () => {
    return (
        <>
        <div className='w-[100%] h-[64px]  flex justify-between items-center' style={{ borderBottom: "1px solid #EAECF0" }}>
                    <div className='flex items-center  gap-[20px] text-[#121217] '>
                        <span className='font-semi font-bold text-[20px] pl-[20px] ml-[10px]' >Appointments</span>

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
     </>
    )
}

export default Navbar