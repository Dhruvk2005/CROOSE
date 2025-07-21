'use client';
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import SettingTwo from '../settingoverview2/page';



const DeletePopup = (props:any) => {
  return (
    
    <div className=' '>
      
      <div className="  fixed inset-0 z-50 bg-[#19191b1f] w-full min-h-screen   flex justify-center items-center px-4">
        <div className="absolute z-10 w-full   max-w-[420px] h-auto shadow-lg rounded-lg p-0 bg-white">
          <section className="w-full h-[60px] flex items-center justify-between border-b border-[#E5E5E5] px-4 sm:px-[12px] py-2 opacity-100">
            <span className="flex-1 font-inter font-semibold text-[18px] sm:text-[20px] leading-[150%] tracking-[-0.04em] text-[#111015]">
              Delete account
            </span>
            <span 
            onClick={() => props.setOpen(false)}
            className="w-9 h-9 rounded-full border flex items-center justify-center border-[#F1F2F3] bg-[#F6F8FA] ml-2">
              <Icon icon="iconamoon:close-bold" width="24" height="24" style={{ color: '#000' }} />
            </span>
          </section>

          <section className="w-full opacity-100 pt-8 px-4 sm:px-[20px] flex flex-col gap-8">
            <span className="text-[14px] font-inter font-normal leading-[150%] text-[#344054] tracking-[0] space-y-2">
              <p>Are you certain you want to delete your account?</p>
              <p>Please note that this action is permanent and cannot be reversed.</p>
              <p>Once your account is deleted, you will no longer have access to Croose services.</p>
              <p>Additionally, you won't be able to create a new account with the same email address.</p>
              <p>Your data will be removed within 30 days, but we may keep some information for a longer period if required or allowed by law.</p>
            </span>

            <section className="w-full flex flex-col sm:flex-row gap-4 sm:gap-[12px] mb-6">
              <button className="w-full sm:w-[184px] h-[36px] rounded-[8px] px-[20px] py-[10px] justify-center flex items-center gap-[4px] bg-[#F6F6F6]">
                <span  onClick={() => props.setOpen(false)} className="font-inter font-semibold text-[12px] leading-[150%] tracking-[0] text-[#0D0600] text-center">
                  Cancel
                </span>
              </button>
              <button className="w-full sm:w-[184px] h-[36px] rounded-[8px] px-[20px] py-[10px] justify-center flex items-center gap-[4px] bg-[#DE2525]">
                <span className="font-inter font-semibold text-[12px] leading-[150%] tracking-[0] text-white text-center">
                  Delete
                </span>
              </button>
            </section>
          </section>
        </div>
      </div>
    </div>
  )
}

export default DeletePopup

