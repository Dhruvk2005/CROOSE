import React from 'react'
import { Icon } from "@iconify/react";
const Scanqrpage = () => {
    return (
        <>
            <div className=' flex flex-wrap justify-center items-center w-full h-[900px] bg-[#9999]  ' >
                <div className=' flex flex-col items-center w-[859px] h-[700px] rounded-[16px] bg-[#FFFFFF] ' >
                    <div className=' flex items-center px-[24px] py-[20px] border-[1px] border-[#FFFFFF] rounded-t-[16px] justify-end w-full h-[60px] '>
                        <Icon icon="charm:cross" width="16" height="26" style={{ color: "#000" }} className=' w-[30px] ' />
                    </div>
                    <div className='flex flex-col gap-[32px] items-center ' >
                        <div className='' >
                            <ul className='flex flex-col items-center w-[827px] h-auto gap-[12px]' >
                                <li className='w-[104px]' ><img src='/123.png' alt="123" /></li>
                                <li className='font-bold text-[20px] text-[#121217] font-sans' >Scan QR code</li>
                                <li className='w-[378px] h-[40px] ' ><p className='text-center text-[#475467] font-normal text-[14px]' >Scan this code with WhatsApp app on your mobile device,
                                    to link your account to the Agent.</p></li>
                            </ul>

                        </div>
                        <div>
                            <ul className='flex flex-col items-center gap-[8px]' >
                                <li className='flex flex-col items-center bg-[#FAFAFA] border-[#F4F4F5]  w-[357px] rounded-[16px] border-[1px] p-[24px] ' ><img className='w-[214px] h-[214px]' src={"/qr.png"} alt='qr' /></li>
                                <li className=' flex w-[357px] border-[1px] border-[#F4F4F5] flex-col bg-[#FAFAFA] rounded-[16px] p-[24px] ' >
                                    <p className='font-sans text-[14px] font-normal text-[#18181B] '>• Open your <b> WhatsApp</b> on your phone.</p>
                                    <p className='font-sans text-[14px] font-normal text-[#18181B]'>• Tap <b>Menu</b> on Android, or <b>Settings</b> on iPhone</p>
                                    <p className='font-sans text-[14px] font-normal text-[#18181B]'>• Tap <b>Linked devices </b> and then <b>Link a device</b>.</p>
                                    <p className='font-sans text-[14px] font-normal text-[#18181B]'>• Now Scan the code.</p>
                                    </li>
                            </ul>
                            <p className='text-[10px] text-center mt-[30px] font-sans font-normal text-[#71717A] ' >Cactustalent is requesting your data on WhatsApp to complete connection </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Scanqrpage