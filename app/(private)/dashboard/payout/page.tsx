



'use client'
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Selectbox from '@/app/(public)/component/selectbox'
import { useFormik } from 'formik'

const Page = () => {
  const formik = useFormik({
    initialValues: {
      accountType: '',
      accountNumber: '',
      sortCode: '',
      businessName: '',
    },
    onSubmit: values => {
      console.log('Form Submitted:', values)
    },
  })

  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-gray-50 px-4'>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-[458px] sm:h-[504px] bg-white rounded-[16px] shadow-[0px_8px_8px_-5px_#14151A0D,0px_18px_24px_-5px_#14151A1A] flex flex-col"
      >
        {/* Header */}
        <section className="w-full h-[56px] rounded-t-[16px] bg-[#FFFFFF] px-6 py-4 border-b border-b-[#E4E4E7] flex justify-between items-center">
          <span className='font-inter font-semibold text-sm leading-5 text-[#14151A]'>Add Payment Account</span>
          <Icon icon="iconamoon:close-bold" width="24" height="24" className='text-[#71717A]' />
        </section>

        {/* Form Fields */}
        <section className="flex-1 px-6 py-5 flex flex-col gap-4 ">
          {/* Account Type */}
          <div className='flex flex-col gap-1'>
            <label className="font-medium text-sm leading-5">Account Type</label>
            <div className="flex items-center justify-between h-[44px] rounded-[12px] border border-[#D0D5DD] px-3">
              <input
                type="text"
                name="accountType"
                value={formik.values.accountType}
                onChange={formik.handleChange}
                placeholder="Select account type"
                className="bg-transparent w-full outline-none text-sm text-[#98A2B3]"
              />
              <Icon icon="ri:arrow-down-s-line" width="24" height="24" className='text-[#344054]' />
            </div>
          </div>

          {/* Account Number */}
          <div className='flex flex-col gap-1'>
            <label className="font-medium text-sm leading-5">Account Number</label>
            <div className="h-[44px] rounded-[12px] border border-[#D0D5DD] px-3 flex items-center">
              <input
                type="text"
                name="accountNumber"
                value={formik.values.accountNumber}
                onChange={formik.handleChange}
                placeholder="Enter account number"
                className="bg-transparent w-full outline-none text-sm text-[#98A2B3]"
              />
            </div>
          </div>

          {/* Sort Code */}
          <div className='flex flex-col gap-1'>
            <label className="font-medium text-sm leading-5">Sort Code</label>
            <div className="h-[44px] rounded-[12px] border border-[#D0D5DD] px-3 flex items-center">
              <input
                type="text"
                name="sortCode"
                value={formik.values.sortCode}
                onChange={formik.handleChange}
                placeholder="Enter code"
                className="bg-transparent w-full outline-none text-sm text-[#98A2B3]"
              />
            </div>
          </div>

          {/* Custom Selectbox (if responsive inside) */}
          <Selectbox formik={formik} />
        </section>

        {/* Footer Buttons */}
        <section className="w-full flex flex-col sm:flex-row gap-3 sm:gap-[12px] px-5 py-5 border-t border-[#E4E4E7] rounded-b-[16px]">
          <button
            type="button"
            className="w-full sm:w-1/2 h-[36px] px-4 py-2 gap-[4px] rounded-lg bg-[#EAECF0] text-sm font-semibold text-[#667085] flex items-center justify-center"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full sm:w-1/2 h-[36px] px-4 py-2 gap-[4px] rounded-lg bg-[#685BC7] text-sm font-semibold text-white flex items-center justify-center"
          >
            Add
          </button>
        </section>
      </form>
    </div>
  )
}

export default Page
