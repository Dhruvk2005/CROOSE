import React from 'react'
import Link from 'next/link';

const Forgotcard = () => {
  return (
    <div className='h-full md:flex-row ' >
      <div className=' flex justify-between w-full h-auto -mt-[0px] border-b-[1px] border-b-[#EAECF0] pt-[14px] pb-[30px] pl-[20px] pr-[20px]' >
        <div>
          <img className='w-[173.52877807617188px] mt-[11px] ml-[8px]' src="Vector.png" alt='crooselogo' />
        </div>
        <div className='flex items-center ' >
          <p className='flex' >Sign Up</p>
        </div>
      </div>
      <div className='w-full h-auto md:w-[100%]  ' >
        <div className='w-[358px] h-auto flex flex-col gap-[25px] absolute top-[210px] left-[570px] '>
          <div>
            <h1 className='text-[36px] font-bold text-[#201E1F] ' >Forgot Password?</h1>
          </div>
          <div className=''>

            <form className="space-y-4 " action="#">
              <div className='flex flex-col w-[358px] h-auto  ' >
                <label htmlFor="password" className=" flex w-[358px] pt-[5px] pb-[5px] gap=[10px] h-auto text-[#344054] text-[14px] font-medium">
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  className=" w-[358px] h-[44px] p-[16px] text-sm leading-[20px] font-normal text-[#98A2B3] border border-gray-300 rounded-[12px] outline-none"
                  required
                />
              </div>

              <div className='flex flex-col w-[358px] h-auto' >
                <label htmlFor="Password" className=" flex w-[358px] pt-[5px] pb-[5px] gap=[10px] h-auto text-[#344054] text-[14px] font-medium">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="confirm-password"
                  placeholder="Enter Password"
                  className=" w-[358px] h-[44px] p-[16px] text-sm leading-[20px] font-normal text-[#98A2B3] border border-gray-300 rounded-[12px] outline-none"
                  required
                />
              </div>

              <div className='mt-[35px]' >
                <button

                  type="submit"
                  className=" flex justify-center items-center gap-[10px] bg-[#685BC71F] text-[#FFFFFFE5] w-[358px] h-[44px] pt-[10px] pb-[10px] pl-[20px] pr-[20px]  rounded-[12px]"
                >
                  Reset Password
                </button>
              </div>


            </form>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Forgotcard
