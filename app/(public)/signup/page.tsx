'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import Link from 'next/link';
import Selectbox from '../component/selectbox';
import { registerApi } from '@/app/Apis/publicapi';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor } from '@mui/material/Alert';
import PublicRoute from '../component/publiroute';
import { useRouter } from 'next/navigation';

type SignupFormValues = {
  name: string;
  business_name: string;
  business_location: any;
  phone_number: string;
  email: string;
  password: string;
};

const Signupform = () => {
  const router = useRouter();

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: AlertColor;
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    setSnackbar({ ...snackbar, open: false });
  };

  const formik = useFormik<SignupFormValues>({
    initialValues: {
      name: '',
      business_name: '',
      business_location: null,
      phone_number: '',
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors: Partial<SignupFormValues> = {};
      if (!values.name) errors.name = 'Name is required';
      if (!values.email) errors.email = 'Email is required';
      else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      if (!values.password || values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const res = await registerApi({
          ...values,
          business_location: values.business_location?.name,
        });

        if (res?.status) {
          setSnackbar({
            open: true,
            message: res.message || 'Registered Successfully!',
            severity: 'success',
          });

          console.log(res)
          

          if (res.token) {
            localStorage.setItem('token', res.token);
          }
          if(res.data){
            localStorage.setItem("user",JSON.stringify(res.data))
          }

          
          router.push('/dashboard/space');
        } else {
          setSnackbar({
            open: true,
            message: res.message || 'Registration error!',
            severity: 'error',
          });
        }
      } catch (err) {
        setSnackbar({
          open: true,
          message: 'Registration failed. Please try again.',
          severity: 'error',
        });
        console.error('Registration Error:', err);
      }
    },
  });

  return (
    <PublicRoute>
      <div className="flex">
        <div className="hidden pt-[11px] pl-[7px] w-[684px] h-[1000px] bg-[#685BC71F] md:block">
          <div className="w-[190px] h-[67.05px] mt-[40.94px] ml-[45px]">
            <img className="w-[173.52px] h-[40.24px] mt-[11.05px] ml-[7.66px]" src="Vector.png" alt="Logo" />
          </div>
          <div className="flex justify-center items-center flex-col gap-[47px] mt-[20px] w-full h-auto">
            <img className="w-[440px] h-[431px]" src="cover.png" alt="cover" />
            <div className="flex items-center flex-col w-[532px] h-auto gap-[16px]">
              <p className="text-[#1D2939] font-bold text-[40px] text-center leading-[40px]">
                The fastest way to automate your business
              </p>
              <p className="font-normal text-center text-[18px] leading-[28px] text-[#344054]">
                Croose helps you run your business on WhatsApp with an AI agent that handles bookings, payments, messages, and more — all in one place
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex h-[900px] md:-mt-[40px] md:p-[80px_160px]">
          <section className="w-full md:w-[435px] h-auto flex flex-col gap-[32px]">
            <div className="p-6 space-y-4 sm:p-8">
              <h1 className="font-bold text-[32px] text-[#1D2939]">Create an account</h1>

              <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#344054]">Full Name</label>
                  <input type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Name" className="w-full h-[44px] p-[16px] text-sm border border-gray-300 rounded-[12px] outline-none" />
                  {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="business_name" className="block mb-2 text-sm font-medium text-[#344054]">Business Name</label>
                  <input type="text" name="business_name" id="business_name" value={formik.values.business_name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Business Name" className="w-full h-[44px] p-[16px] text-sm border border-gray-300 rounded-[12px] outline-none" />
                </div>

                <div>
                  <Selectbox formik={formik} />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#344054]">Email</label>
                  <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Email" className="w-full h-[44px] p-[16px] text-sm border border-gray-300 rounded-[12px] outline-none" />
                  {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone_number" className="block mb-2 text-sm font-medium text-[#344054]">Mobile Number</label>
                  <input type="text" name="phone_number" id="phone_number" value={formik.values.phone_number} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Mobile Number" className="w-full h-[44px] p-[16px] text-sm border border-gray-300 rounded-[12px] outline-none" />
                </div>

                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#344054]">Password (Min of 8 characters)</label>
                  <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Password" className="w-full h-[44px] p-[16px] text-sm border border-gray-300 rounded-[12px] outline-none" />
                  {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>}
                </div>

                <button type="submit" className="bg-[#685BC7] text-white font-semibold text-sm flex justify-center items-center w-full h-[48px] rounded-[12px]">Sign up</button>

                <div className="text-center text-sm text-[#101828] mt-2">
                  Already have an account?{' '}
                  <Link href="/login" className="text-[#685BC7] font-medium hover:underline">Log In</Link>
                </div>

                <div className="flex items-center justify-center w-full gap-4 my-4">
                  <hr className="flex-grow border-t border-gray-300" />
                  <span className="text-gray-500 text-sm font-medium">OR</span>
                  <hr className="flex-grow border-t border-gray-300" />
                </div>

                <div>
                  <button type="button" className="flex items-center justify-center gap-2 w-full h-[48px] border rounded-[12px] text-sm font-medium text-[#344054] border-[#EAECF0]">
                    <img src="google.png" alt="Google" className="w-5 h-5" />
                    Continue with Google
                  </button>
                  <button type="button" className="flex items-center justify-center gap-2 w-full h-[48px] mt-2 border rounded-[12px] text-sm font-medium text-[#344054] border-[#EAECF0]">
                    <img src="apple.jpeg" alt="Apple" className="w-9 h-auto" />
                    Continue with Apple
                  </button>
                </div>
              </form>

              <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              >
                <MuiAlert
                  onClose={handleCloseSnackbar}
                  severity={snackbar.severity}
                  sx={{ width: '100%' }}
                  variant="filled"
                  elevation={6}
                >
                  {snackbar.message}
                </MuiAlert>
              </Snackbar>
            </div>
          </section>
        </div>
      </div>
    </PublicRoute>
  );
};

export default Signupform;
