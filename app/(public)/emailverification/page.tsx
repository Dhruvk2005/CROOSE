import React from 'react'
import Link from 'next/link';
const Emailverification = () => {
    return (

        <div className='flex flex-wrap flex-col min-h-screen' >
            <div>
                <div className=' flex justify-between w-full h-auto -mt-[0px] border-b-[1px] border-b-[#EAECF0] pt-[14px] pb-[30px] pl-[20px] pr-[20px]' >
                    <div>
                        <img className='w-[173.52877807617188px] mt-[11px] ml-[8px]' src="Vector.png" alt='crooselogo' />
                    </div>
                    <div className='flex items-center ' >
                        <p className='flex' >Sign Up</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto flex flex-col items-center absolute top-[250px] ' >

                <div className='w-[358px] h-auto flex gap-[24px] flex-col ' >
                    <div className='flex flex-col gap-[24px]'>
                        <h1 className='text-[#201E1F] font-Inter text-center font-bold text-[36px] ' >Email Verification</h1>
                        <p className=' text-[#201E1F] text-[14px] font-Inter text-center font-medium' >We sent an email to <b>business@gmail.com </b>  click the link inside to continue</p>
                    </div>

                    <div>
                        <div className='flex justify-center gap-[24px] flex-col' >
                            <button className='flex justify-center items-center w-[358px] h-[54px] pt-[10px] pb-[10px] pl-[16px] pr-[16px] bg-[#F2F4F7] text-[#344054] gap-[12px] rounded-[12px] ' >
                                <img src="gmail.png" alt='gmail' className='w-[21px]' /> Open Gmail
                            </button>

                            <Link
                            href="" className='flex justify-center  w-[358px] font-normal text-[#2655FC] '  >
                                Resend email
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default Emailverification
