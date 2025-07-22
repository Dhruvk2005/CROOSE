'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import { loginApi, verifyToken } from '@/app/Apis/publicapi';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import Loader from '@/app/(private)/components/loading';

const Login = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const [loginData, setLoginData] = useState({})
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const isLogin = async () => {
    try {

      setLoading(true)

      let res: any = await verifyToken()
      console.log(res,28)
      // router.push("/dashboard/space")
      setLoading(false)

      if(res?.err?.status){
        console.log("inif")

        return router.push("/login")
      }
        router.push("/dashboard/maindashboard")
    }
    catch (err) {
      router.push("/login")
    }
  }
  useEffect(() => {
    isLogin()
  }, [loginData])




  

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

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
      try {
        const data = await loginApi(values);
        if (data?.status) {
          setLoginData(data)
          setSnackbarMessage(data.message || 'Login successful');
          setSnackbarSeverity('success');
          setSnackbarOpen(true);


          
        }
        if(data?.data){
          localStorage.setItem('userdata',JSON.stringify(data))
        }
        
        else {
          throw new Error(data?.message || 'Login failed');
        }
      } catch (error: any) {
        setSnackbarMessage(error?.message || 'Something went wrong');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    },
  });



  return (
    <>
      {

        loading ?  <Loader/>
: <>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={5000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity={snackbarSeverity}
              variant="filled"
              sx={{ width: '100%' }}
            >
              {snackbarMessage}
            </Alert>
          </Snackbar>

          <div className='flex flex-col md:flex-row w-full min-h-screen'>
            <div className='hidden w-[685px] h-[900px] bg-[#EDEBF8] md:block'>
              <div className="w-[190px] h-[67.05px] mt-[40.94px] ml-[45px]">
                <img className="w-[173.52px] h-[40.24px]" src="Vector.png" alt="Logo" />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <img className='mb-[40px] w-[260px] h-[463px]' src="mobile.png" />
                <div className='w-[532px] mb-[100px] h-[184px]'>
                  <p className='text-[#1D2939] font-bold text-center text-[40px] leading-[44px]'>
                    Log in. Ignite your enterprise.
                  </p>
                  <p className='text-[#475467] text-center text-[18px] leading-[28px]'>
                    Access your Croose dashboard to manage your AI agent, automate your workflow, and keep your business running — all from one place.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 flex bg-white md:-mt-[40px] md:p-[80px_160px]">
              <section className="w-full md:w-[435px] mt-[70px]">
                <div className="p-6 space-y-4 sm:p-8">
                  <h1 className="font-bold text-[32px] text-[#1D2939]">Welcome back!</h1>
                  <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#344054]">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder="Enter email"
                        className="w-full h-[44px] p-[16px] text-sm border border-gray-300 rounded-[12px]"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p className='text-red-500 text-sm mt-1'>{formik.errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#344054]">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        placeholder="Enter password"
                        className="w-full h-[44px] p-[16px] text-sm border border-gray-300 rounded-[12px]"
                      />
                      {formik.touched.password && formik.errors.password && (
                        <p className='text-red-500 text-sm mt-1'>{formik.errors.password}</p>
                      )}
                    </div>

                    <div className='text-right'>
                      <Link href="/forgotcard" className='text-[#685BC7] text-sm font-semibold'>Forgot Password?</Link>
                    </div>

                    <button
                      type="submit"
                      className="bg-[#685BC7] text-white w-full h-[48px] rounded-[12px] font-semibold text-sm"
                    >
                      Sign in
                    </button>

                    <div className="text-center text-sm text-[#101828] mt-2">
                      Don’t have an account?{' '}
                      <Link href="/signup" className="text-[#685BC7] font-medium hover:underline">Sign up</Link>
                    </div>

                    <div className="flex items-center justify-center gap-4 my-4">
                      <hr className="flex-grow border-t border-gray-300" />
                      <span className="text-gray-500 text-sm font-medium">OR</span>
                      <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    <button type="button" className="flex items-center justify-center gap-2 w-full h-[48px] border rounded-[12px] text-sm text-[#344054] border-[#EAECF0]">
                      <img src="google.png" alt="Google" className="w-5 h-5" />
                      Continue with Google
                    </button>
                    <button type="button" className="flex items-center justify-center gap-2 w-full h-[48px] mt-2 border rounded-[12px] text-sm text-[#344054] border-[#EAECF0]">
                      <img src="apple.jpeg" alt="Apple" className="w-9 h-auto" />
                      Continue with Apple
                    </button>
                  </form>
                </div>
              </section>
            </div>
          </div>

        </>}
    </>
  );
};

export default Login;
