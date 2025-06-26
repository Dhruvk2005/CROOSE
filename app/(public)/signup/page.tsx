'use client'
import React from "react";
import Selectbox from "../component/selectbox";
import Link from 'next/link';



const Signupform = () => {
  return (
    <div className="flex ">

      <div className=" hidden  pt-[11px] pl-[7px] w-[684px] h-[900px] bg-[#685BC71F] md:block">
        <div className="w-[190px] h-[67.05px] mt-[40.94px] ml-[45px]">
          <img
            className="w-[173.52px] h-[40.24px] mt-[11.05px] ml-[7.66px]"
            src="Vector.png"
            alt="Logo"
          />
        </div>
        <div className="flex justify-center items-center flex-col gap-[47px] mt-[20px] w-full h-auto">
          <div>
            <img
              className="w-[440px] h-[431px]"
              src="cover.png"
              alt="cover"
            />
          </div>
          <div className="flex items-center flex-col w-[532px] h-auto gap-[16px]">
            <p className="text-[#1D2939] font-bold text-[40px] leading-[40px] tracking-normal text-center">
              The fastest way to automate your business
            </p>
            <p className="font-normal text-center text-[18px] mb-[18px] tracking-normal leading-[28px] text-[#344054]">
              Croose helps you run your business on WhatsApp with an AI agent
              that handles bookings, payments, messages, and more — all in one
              place
            </p>
          </div>
        </div>
      </div>


      <div className="flex-1 flex   h-[900px] md:-mt-[40px] md:p-[80px_160px] ">
        <section className=" w-[100%] md:w-[435px] h-auto flex flex-col gap-[32px]">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="font-bold text-[32px] leading-[150%] tracking-[-0.04em] text-[#1D2939]">
              Create an account
            </h1>
            <form className="space-y-4 " action="#">
              <div>
                <label htmlFor="full-name" className="block mb-2 text-sm font-medium text-[#344054]">
                  Full Name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  placeholder="Enter Name"
                  className=" w-[100%] md:w-[435px] h-[44px] p-[16px] text-sm leading-[20px] font-normal text-[#98A2B3] border border-gray-300 rounded-[12px] outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="business-name" className="block mb-2 text-sm font-medium text-[#344054]">
                  Business Name
                </label>
                <input
                  type="text"
                  name="business-name"
                  id="business-name"
                  placeholder="Enter Business Name"
                  className=" w-[100%] md:w-[435px] h-[44px] p-[16px] text-sm leading-[20px] font-normal text-[#98A2B3] border border-gray-300 rounded-[12px] outline-none"
                  required
                />
              </div>

              <div>

                <Selectbox />
                {/* <div className="  w-[100%] md:w-[435px] flex justify-center items-center border-[1px] rounded-[12px]  border-[#D0D5DD] " >
                  <div className=" flex w-[50px] text-center justify-center " >
                    <img className="w-[20px]" src="GH.png" alt="Gh" />
                  </div>
                <input
                  type="text"
                  name="business-location"
                  id="business-location"
                  placeholder="Ghana 🇬🇭"
                  className=" outline-none border-none  w-[100%] md:w-[435px] h-[44px] p-[16px] text-sm leading-[20px] font-normal text-[#98A2B3] border border-gray-300 rounded-[12px] outline-none"
                  required
                />
                </div> */}
              </div>

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
              </div>

              <button
              
                type="submit"
                className="bg-[#685BC7] text-white font-semibold text-[14px] leading-[21px] flex flex-row justify-center items-center  w-[100%] md:w-[435px] h-[48px] px-[20px] py-[10px] gap-[10px] rounded-[12px]"
              >
                Sign up
              </button>
              <div className="flex flex-col items-center  w-[100%] md:w-[435px] " >
                <p className="font-normal text-sm leading-[20px] tracking-normal text-[#101828] text-center">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-[#685BC7] hover:underline"
                  >
                    Log In
                  </Link>
                </p>
                <div className=" mt-[30px] flex items-center justify-center w-full gap-4 my-4">
                  <hr className="flex-grow border-t border-gray-300" />
                  <span className="text-gray-500 text-sm font-medium">OR</span>
                  <hr className="flex-grow border-t border-gray-300" />
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
};

export default Signupform;
