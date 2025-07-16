'use client'

import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import DeletePopup from './settingoverview3'
import { useModal } from '@/app/context/modelcontext' // ✅ import useModal for navigation

const SettingTwo = ({ closeSettingTwo }: any) => {
  const [openDeletePopup, setOpenDeletePopup] = useState(false)
  const { openSpecificSetting } = useModal(); // ✅ use global modal context

  useEffect(() => {
    if (openDeletePopup) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [openDeletePopup])

  const handleBillingClick = () => {
    openSpecificSetting('setting4'); // ✅ open billing modal globally
  }

  const handleProfileClick = () => {
    openSpecificSetting('setting1'); // ✅ navigate back to Profile modal
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 p-4 sm:p-6">
      <div className="relative w-full max-w-[717px] bg-white rounded-[16px] border border-[#E2E4E84D] shadow-lg">
        {/* Header */}
        <section className="w-full flex justify-between items-center border-b border-[#F6F6F6] rounded-t-[16px] px-4 py-3 sm:px-[20px] sm:py-[12px]">
          <span className="font-inter font-semibold text-[18px] sm:text-[20px] text-[#1D2939]">
            Settings
          </span>
          <span
            onClick={closeSettingTwo}
            className="w-9 h-9 rounded-full border p-2 flex items-center justify-center border-[#F1F2F3] bg-[#F6F8FA] cursor-pointer"
          >
            <Icon icon="iconamoon:close-bold" width="24" height="24" color="#000" />
          </span>
        </section>

        {/* Tabs */}
        <section className="w-full px-4 py-6 sm:px-[64px] sm:py-[32px] flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              <button onClick={handleProfileClick} className="rounded-sm text-sm px-3 py-2">
                <span className="font-semibold text-[14px] text-[#667085]">Profile</span>
              </button>
              <button className="rounded-sm text-sm px-3 py-2 bg-[#F9F5FF]">
                <span className="font-semibold text-[14px] text-[#685BC7]">Security</span>
              </button>
              <button onClick={handleBillingClick} className="rounded-sm text-sm px-3 py-2">
                <span className="font-semibold text-[14px] text-[#667085]">Billing</span>
              </button>
            </div>
            <div className="text-[18px] font-semibold text-[#101828]">Security</div>
          </div>

          {/* Password Form */}
          <section className="flex flex-col gap-4">
            {['Current Password', 'New Password', 'Repeat New Password'].map((label, i) => (
              <div key={i} className="flex flex-col">
                <label className="block font-medium text-sm text-[#344054] mb-1">{label}</label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder={`Enter ${label.toLowerCase()}`}
                    className="w-full h-[44px] text-[#98A2B3] text-sm rounded-[12px] border border-[#D0D5DD] p-4"
                  />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Icon icon="tabler:eye-filled" width="20" height="20" />
                  </button>
                </div>
              </div>
            ))}

            {/* Delete Account */}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setOpenDeletePopup(true)}
                className="bg-[#FFEBEE] text-[#DE2525] text-[12px] font-semibold rounded-[64px] px-5 py-2"
              >
                Delete Account
              </button>
            </div>
          </section>
        </section>

        {/* Footer */}
        <section className="w-full flex justify-end border-t border-[#F6F6F6] px-4 py-3 sm:px-[20px] sm:py-[12px]">
          <button className="rounded-lg bg-[#685BC7] text-white text-sm font-semibold px-7 py-2">Save changes</button>
        </section>
      </div>

      {/* Delete Popup */}
      {openDeletePopup && <DeletePopup setOpen={setOpenDeletePopup} />}
    </div>
  )
}

export default SettingTwo
