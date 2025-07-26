


import React from 'react';
import Messaging from '../../components/material/messaging';
import { Icon } from '@iconify/react/dist/iconify.js';

const Page = () => {
  return (
    <div className="relative w-full h-screen bg-[#8a95a7]">
      <div className="absolute inset-0 z-0">
        <Messaging />
      </div>

      <section className='w-full min-h-screen flex justify-center items-center px-4 py-8'>
        <div className="relative z-10 w-full max-w-[717px] rotate-0 opacity-100 rounded-[16px] border border-solid bg-[#ffffff] border-[#E2E4E84D]">

          {/* Header */}
          <section className="w-full h-[60px] flex justify-between items-center rounded-t-[16px] border-b border-[#F6F6F6] px-[20px] py-[12px] bg-[#fff]">
            <span className="font-semibold text-[20px] leading-[150%] tracking-[-0.04em] font-sans text-[#1D2939]">
              New Broadcast
            </span>
            <span className="w-[36px] h-[36px] flex items-center justify-center rounded-full border bg-[#F6F8FA] border-[#F1F2F3]">
              <Icon icon="charm:cross" width="20" height="20" className='text-[#1D2939]' />
            </span>
          </section>

          {/* Form Body */}
          <section className='w-full flex flex-col px-4 sm:px-[64px] py-[32px] gap-[32px]'>
            <div className="flex flex-col gap-[16px] w-full">
              <div className="flex flex-col sm:flex-row w-full gap-[12px]">
                {/* Target */}
                <div className="flex-1">
                  <label className="block mb-1 font-medium text-[14px] leading-[20px] text-[#344054]">Target</label>
                  <input
                    placeholder='Select target'
                    className='w-full h-[44px] rounded-[12px] border border-[#D0D5DD] px-[16px] font-normal text-[14px] leading-[20px] font-sans focus:outline-none'
                  />
                </div>

                {/* Frequency */}
                <div className="flex-1">
                  <label className="block mb-1 font-medium text-[14px] leading-[20px] text-[#344054]">Frequency</label>
                  <div className="flex items-center h-[44px] rounded-[12px] border border-[#D0D5DD] px-3">
                    <input
                      type="text"
                      name="Select"
                      placeholder="Select account type"
                      className="flex-1 bg-transparent outline-none border-none font-normal text-[14px] leading-[20px] font-sans"
                    />
                    <Icon icon="ri:arrow-down-s-line" width="24" height="24" className='text-[#344054]' />
                  </div>
                </div>
              </div>

              {/* Schedule Date */}
              <div>
                <label className="block mb-1 font-medium text-[14px] leading-[20px] text-[#344054]">Schedule date</label>
                <div className='flex items-center h-[44px] rounded-[12px] border border-[#D0D5DD] px-[16px]'>
                  <input
                    type='text'
                    name='Select date'
                    placeholder='Select date'
                    className="flex-1 bg-transparent outline-none border-none font-normal text-[14px] leading-[20px] font-sans"
                  />
                  <Icon icon="uil:calender" width="20" height="20" className='text-[#475467]' />
                </div>
              </div>

              {/* Content */}
              <div>
                <label className='block mb-1 font-medium text-[14px] leading-[20px] text-[#344054]'>Content</label>
                <textarea
                  placeholder='Add notes'
                  className='w-full h-[79px] resize-none rounded-[12px] border border-[#D0D5DD] px-[16px] py-2 font-normal text-[14px] leading-[20px] font-sans focus:outline-none '
                />
              </div>
            </div>

            {/* Button Row */}
            <div className="flex w-full  justify-end gap-[32px]">
              <button className="w-[161px] h-[40px] rounded-lg bg-[#EAECF0] px-[16px] font-semibold text-sm leading-5 text-center font-sans text-[#1D2939]">
                Cancel
              </button>
              <button className="w-[161px] h-[40px] rounded-lg bg-[#685BC7] px-[16px] font-semibold text-sm leading-5 text-center font-sans text-white">
                Schedule
              </button>
            </div>
          </section>

        </div>
      </section>
    </div>
  );
};

export default Page;
