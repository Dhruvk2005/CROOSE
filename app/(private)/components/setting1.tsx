'use client'
import React, { useEffect } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Selectbox from '@/app/(public)/component/selectbox'
import { useFormik } from 'formik'
import { SettingContext } from '@/app/context/SettingContext'
import Snackbar from '@mui/material/Snackbar';
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { useContext } from 'react'
import { logoutapi, registerApi } from '@/app/Apis/publicapi'


 



  
const Setting1 = () => {

  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const router = useRouter()



  const { setOpenSetting2 } = useContext<any>(SettingContext)
  const { setOpenSetting1 } = useContext<any>(SettingContext)
  const { setOpenSetting3 } = useContext<any>(SettingContext)
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

  const handlelogout = async () => {


    try {
      await logoutapi({});
      localStorage.removeItem("token");
      setOpenSetting1(false);
      setSnackbarMessage('Logout successful');
      setOpenSnackbar(true);


      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (err: any) {
      setSnackbarMessage(err.message || "Logout failed");
      setOpenSnackbar(true);
    }

  };
  

  
  
   const [registerData, setUser] = useState<any>()
 
 
   useEffect(() => {
     const storedUser = localStorage.getItem('userdata')
     if (storedUser) {
       setUser(JSON.parse(storedUser))

       console.log(storedUser)
     }
     
 
 
   }, [])


 
 

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-[#9999] p-4 sm:p-6">

        <div className="relative z-10  flex justify-center items-center w-full">
          <div className="w-full max-w-[717px] h-[732px] opacity-100 border-[#E2E4E84D] bg-[#ffffff] rounded-[16px] border border-solid">

            <section className="w-full h-auto flex justify-between items-center border-b border-[#F6F6F6] rounded-t-[16px] px-4 py-3 sm:px-[20px] sm:py-[12px]">
              <span className="w-auto font-inter font-semibold text-[18px] sm:text-[20px] leading-[150%] tracking-[-0.04em] text-[#1D2939]">
                Settings
              </span>
              <span className="w-9 h-9 rounded-full border p-2 flex items-center justify-center border-[#F1F2F3] bg-[#F6F8FA]" onClick={() => setOpenSetting1(false)} >
                <Icon icon="iconamoon:close-bold" width="24" height="24" style={{ color: '#000' }} />
              </span>
            </section>

            <section className="w-full h-auto px-4 py-6 sm:px-[64px] sm:py-[32px] flex flex-col gap-8">
              <div className="w-full flex flex-col gap-6">
                <div className="w-full flex flex-wrap items-center gap-2 sm:gap-5">
                  <div className="flex flex-wrap gap-2 w-full">
                    <button className="rounded-sm text-sm px-3 py-2 bg-[#F9F5FF]">
                      <span className="font-semibold text-[14px] text-[#685BC7]">Profile</span>
                    </button>
                    <button className="rounded-sm text-sm px-3 py-2" onClick={() => {
                      setOpenSetting2(true)
                      setOpenSetting1(false)
                      setOpenSetting3(false)
                    }} >
                      <span className="font-semibold text-[14px] text-[#667085]">Security</span>
                    </button>
                    <button className="rounded-sm text-sm px-3 py-2" onClick={() => {
                      setOpenSetting3(true)
                      setOpenSetting1(false)
                      setOpenSetting2(false)
                    }}  >
                      <span className="font-semibold text-[14px] text-[#667085]">Billing</span>
                    </button>
                    <button className="rounded-sm text-sm px-3 py-2" onClick={handlelogout} >
                      <span className="font-semibold text-[14px] text-[#667085]">Log Out</span>
                    </button>
                  </div>
                </div>
                <div className="text-[18px] font-semibold text-[#101828]">Account Profile</div>
              </div>

              <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <img src="/userse.png" className="w-[100px] h-[100px] bg-[#F2F4F7] rounded-full" />
                  <div className="rounded-[64px] bg-[#F2F4F7] px-5 py-2 text-center">
                    <span className="text-[12px] font-semibold text-[#475467]">Upload Photo</span>
                  </div>
                </div>

                <div className="flex flex-col mt-[50px] gap-3">
                  <div>
                    <label className="block  text-sm font-medium text-[#344054] mb-1">Full Name  </label>
                
                    
                       <div className="w-full h-[44px] text-[#98A2B3] flex items-center text-sm rounded-[12px] border border-[#D0D5DD] p-4">
                     
                     {registerData?.data?.name}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#344054] mb-1">Business Name </label>
                       <div className="w-full h-[44px] text-[#98A2B3] flex items-center text-sm rounded-[12px] border border-[#D0D5DD] p-4">
                     
                      {registerData?.data?.business_name}
                    </div>
                    
                  </div>
                  <div>

                    <div>
                      <label className="block  text-sm font-medium text-[#344054] mb-1" >Business location  </label>
                      {/* <Selectbox formik={formik} /> */}
                       <div className="w-full h-[44px] text-[#98A2B3] flex items-center text-sm rounded-[12px] border border-[#D0D5DD] p-4">
                     
                      {registerData?.data?.business_location}
                    </div>
                    </div>
                  </div>
                  <div>
                    <label className="block  text-sm font-medium text-[#344054] mb-1">Email </label>
                    <div className="w-full h-[44px] text-[#98A2B3] text-sm rounded-[12px] flex items-center border border-[#D0D5DD] p-4">
                     
                       {registerData?.data?.email}
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="w-full flex justify-end border-t border-[#F6F6F6] px-4 py-3 sm:px-[20px] sm:py-[12px]">

              <button
                onClick={() => { formik.handleSubmit() }}
                className="rounded-lg bg-[#685BC7] text-white text-sm font-semibold px-7 py-2"
              >
                Save changes
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting1




















