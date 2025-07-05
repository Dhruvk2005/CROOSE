
'use client'
import Link from 'next/link';
import { IM_Fell_Great_Primer_SC } from 'next/font/google';
import React, { useState } from 'react'
import Selectbox from '../component/selectbox';
import { loginApi } from '@/app/Apis/publicapi';
import { useFormik } from 'formik';


const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validate: (values) => {
      const errors: { email?: string; password?: string } = {};

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
      }

      return errors;
    },

    onSubmit: async (values) => {
      const data = await loginApi(values);
      console.log(data);
    },
  });
  return (

    <div className='flex flex-col md:flex-row w-full min-h-screen '>
      <div className=' hidden w-[685px]  flex flex-col gap-[40px] flex-wrap h-[900px] bg-[#EDEBF8] md:w-full lg:w-full md:block '>
        <div className="w-[190px] h-[67.05px] mt-[40.94px] ml-[45px]">
          <img
            className="w-[173.52px] h-[40.24px] mt-[11.05px] ml-[7.66px]"
            src="Vector.png"
            alt="Logo"
          />
        </div>
        <div className='flex flex-col justify-center items-center  '>
          {/* <img className='top-[0px] left-[0px]' src="image1.png" alt='croose'/> */}

          <img className=' mb-[40px] w-[260px] h-[463px] ' src="mobile.png" />
          <div className='w-[532px] mb-[100px] h-[184px]'>
            <p className='w-[532px] text-[#1D2939] font-bold text-center leading-[44px] tracking-[-0.02em] mb-[18px] text-[40px]  h-[88px]'>Log in. Ignite your enterprise.</p>
            <p className='font-inter font-medium text-[18px] leading-[28px] text-[#475467] tracking-normal text-center'>Access your Croose dashboard to manage your AI agent, automate your workflow, and keep your business running — all from one place.</p>
          </div>
        </div>
      </div>


      <div className="flex-1 flex bg-white h-[100%] md:-mt-[40px] md:p-[80px_160px] ">
        <section className=" w-[100%] md:w-[435px]  mt-[70px]  h-auto flex flex-col gap-[32px]">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="font-bold text-[32px] leading-[150%] tracking-[-0.04em] text-[#1D2939]">
              Welcome back!
            </h1>
            <form onSubmit={formik.handleSubmit} className="space-y-4 " action="#">


              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#344054]">
                  Email
                </label>
                <input


                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  className=" w-[100%] md:w-[435px] h-[44px] p-[16px] text-sm leading-[20px] font-normal text-[#98A2B3] border border-gray-300 rounded-[12px] outline-none"
                  required
                />

                {formik.touched.email && formik.errors.email &&(
                  <p className='text-500-red text-sm mt-1' >{formik.errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="account-password" className="block mb-2 text-sm font-medium text-[#344054]">
                  Password (Min of 8 characters)
                </label>
                <input

                  type="password"
                  name="account-password"
                  id="account-password"
                  placeholder="Enter Password"
                  className=" w-[100%] md:w-[435px] h-[44px] p-[16px] text-sm leading-[20px] font-normal text-[#98A2B3] border border-gray-300 rounded-[12px] outline-none"
                  required
                />
                {formik.touched.password && formik.errors.password && (
                  <p className='text-500-red text-sm mt-1' >{formik.errors.password}</p>
                )}
              </div>
              <div className='ml-[300px] w-[406px] h-auto flex flex-col gap-[16px]' >
                <Link
                  href="/forgotcard"
                  className='text-[#685BC7] font-semibold text-14px'
                >
                  Forgot Password?

                </Link>
              </div>

              <Link
                href="/dashboard/space"
                type="submit"
                className="bg-[#685BC7] text-white font-semibold text-[14px] leading-[21px] flex flex-row justify-center items-center  w-[100%] md:w-[435px] h-[48px] px-[20px] py-[10px] gap-[10px] rounded-[12px]"
              >
                Sign in
              </Link>
              <div className="flex flex-col items-center  w-[100%] md:w-[435px] " >
                <p className="font-normal text-sm leading-[20px] tracking-normal text-[#101828] text-center">
                  Don’t have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-medium text-[#685BC7] hover:underline"

                  >
                    Sign up
                  </Link>
                </p>
                <div className=" mt-[30px] flex items-center justify-center w-full gap-4 my-4">

                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="flex  -mt-[20px]  items-center justify-center gap-[10px]  w-[100%] md:w-[435px] h-[48px] rounded-[12px]  border-[#EAECF0] border-[1px]  text-sm font-medium text-[#344054]"
                >
                  <img src="google.png" alt="Google" className="w-5 h-5" />
                  Continue with Google
                </button>

                <button
                  type="button"
                  className="flex  mt-[10px] items-center justify-center gap-[10px]  w-[100%] md:w-[435px] h-[48px] rounded-[12px] border-[#EAECF0] border-[1px] text-sm font-medium text-[#344054]"
                >
                  <img src="apple.jpeg" alt="Apple" className="w-[35.442505836486816px] " />
                  Continue with Apple
                </button>
              </div>
            </form>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Login
















