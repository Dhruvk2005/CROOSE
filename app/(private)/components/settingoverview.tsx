'use client'

import React from 'react'
import { Icon } from '@iconify/react'
import Selectbox from '@/app/(public)/component/selectbox'
import { useFormik } from 'formik'
import { useModal } from '@/app/context/modelcontext' // ✅ import modal context

const Setting1 = ({ closeModal }: any) => {
  const { openSpecificSetting } = useModal(); // ✅ destructure function to open specific setting modals

  const formik = useFormik({
    initialValues: {
      fullName: '',
      businessName: '',
      businessLocation: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log('Form submitted:', values)
    },
  })

  const handleSecurityClick = () => {
    openSpecificSetting('setting2'); // ✅ open SettingTwo via context globally
  }

  const handleBillingClick = () => {
    openSpecificSetting('setting4'); // ✅ open Setting4 via context globally
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] p-4 sm:p-6">
      <div className="relative w-full max-w-[717px] bg-white rounded-[16px] border border-[#E2E4E84D] shadow-lg">
        {/* Header */}
        <section className="w-full flex justify-between items-center border-b border-[#F6F6F6] rounded-t-[16px] px-4 py-3 sm:px-[20px] sm:py-[12px]">
          <span className="font-inter font-semibold text-[18px] sm:text-[20px] text-[#1D2939]">
            Settings
          </span>
          <span
            onClick={closeModal}
            className="w-9 h-9 rounded-full border p-2 flex items-center justify-center border-[#F1F2F3] bg-[#F6F8FA] cursor-pointer"
          >
            <Icon icon="iconamoon:close-bold" width="24" height="24" color="#000" />
          </span>
        </section>

        {/* Content */}
        <section className="w-full px-4 py-6 sm:px-[64px] sm:py-[32px] flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              <button className="rounded-sm text-sm px-3 py-2 bg-[#F9F5FF]">
                <span className="font-semibold text-[14px] text-[#685BC7]">Profile</span>
              </button>
              <button onClick={handleSecurityClick} className="rounded-sm text-sm px-3 py-2">
                <span className="font-semibold text-[14px] text-[#667085]">Security</span>
              </button>
              <button onClick={handleBillingClick} className="rounded-sm text-sm px-3 py-2">
                <span className="font-semibold text-[14px] text-[#667085]">Billing</span>
              </button>
              <button className="rounded-sm text-sm px-3 py-2">
                <span className="font-semibold text-[14px] text-[#667085]">Log Out</span>
              </button>
            </div>
            <div className="text-[18px] font-semibold text-[#101828]">Account Profile</div>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img src="/userse.png" className="w-[100px] h-[100px] bg-[#F2F4F7] rounded-full" />
              <div className="rounded-[64px] bg-[#F2F4F7] px-5 py-2 text-center">
                <span className="text-[12px] font-semibold text-[#475467]">Upload Photo</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <label className="block text-sm font-medium text-[#344054] mb-1">Full Name</label>
                <input
                  name="fullName"
                  placeholder="Enter Name"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full h-[44px] text-[#98A2B3] text-sm rounded-[12px] border border-[#D0D5DD] p-4"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#344054] mb-1">Business Name</label>
                <input
                  name="businessName"
                  placeholder="Enter business name"
                  value={formik.values.businessName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full h-[44px] text-[#98A2B3] text-sm rounded-[12px] border border-[#D0D5DD] p-4"
                />
              </div>
              <div>
                <Selectbox formik={formik} />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#344054] mb-1">Email</label>
                <input
                  name="email"
                  placeholder="Enter email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full h-[44px] text-[#98A2B3] text-sm rounded-[12px] border border-[#D0D5DD] p-4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="w-full flex justify-end border-t border-[#F6F6F6] px-4 py-3 sm:px-[20px] sm:py-[12px]">
          <button
            onClick={() => formik.handleSubmit()}
            className="rounded-lg bg-[#685BC7] text-white text-sm font-semibold px-7 py-2"
          >
            Save changes
          </button>
        </section>
      </div>
    </div>
  )
}

export default Setting1
