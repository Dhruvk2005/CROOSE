


 import { IM_Fell_Great_Primer_SC } from 'next/font/google';
import React from 'react'



 const Login = () => {
 return (
  
   <div className='flex flex-col md:flex-row w-full min-h-screen   bg-[#EDEBF8] '>
    <div className='w-[685px]  flex flex-wrap h-[900px] bg-[#EDEBF8] md:w-full lg:w-full '>
      <div className='w-[190px] top-[37px] left-[33px] h-[67px]'>
        <img className=' mt-[37px] ml-[33px] ' src="croose.png" alt='croose'/>
        </div>
       <div className='flex flex-col justify-center items-center  w-[685px] h-[900px] '>
         {/* <img className='top-[0px] left-[0px]' src="image1.png" alt='croose'/> */}
    
        <img className=' w-[260px] h-[463px] ' src="mobile.png"/>
        <div className='w-[532px] mb-[100px] h-[184px]'>
          <p className='w-[532px] text-[#1D2939] font-bold text-center leading-[44px] tracking-[-0.02em] mb-[18px] text-[40px]  h-[88px]'>Log in. Ignite your enterprise.</p>
          <p className='font-inter font-medium text-[18px] leading-[28px] text-[#475467] tracking-normal text-center'>Access your Croose dashboard to manage your AI agent, automate your workflow, and keep your business running — all from one place.</p>
        </div>
     </div>
     </div>


   <div className='w-full bg-[#ffff] h-[900px]'>
     <div className='w-[755px] h-full flex-1 flex justify-center flex-wrap flex-col items-center bg-[#FFFFFF1A]'>
      <div className='w-[406px] h-[544px] gap-[48px]'>
       <p className='text-[#1D2939] h-[23px] w-[406px] font-inter font-bold text-[32px] mt-[20px] leading-[150%] tracking-[-4%]'>Welcome back!</p>

  <div className="w-[406px] h-[294px] mt-[50px] flex flex-col gap-6">
             <div className="flex flex-col w-[406px] h-[74px]">
               <label
                 htmlFor="email"
                 className="w-[406px] h-[30px] pt-1.5 pb-1.5 text-[#344054]  font-inter font-medium text-[14px] leading-[20px]"
               >
                 Email
               </label>
               <input
                 id="email"
                 type="email"
                 className="w-[406px] h-[44px]  rounded-[12px] border border-solid border-gray-300 p-[4px] text-[#cedaee]"
                 placeholder="Enter email"
               />
             </div>

             <div className="flex flex-col w-[406px] h-[74px]">
               <label
                 htmlFor="password"
                 className="w-[406px] h-[30px] text-[#344054] font-inter font-medium text-[14px] leading-[20px]"
               >
                 Password (Min of 8 characters)
               </label>
               <div className='relative flex items-center'>
                <img className='w-[21px] absolute right-[10px] mt-[3px] flex items-center h-[21px] pt-[2px]' src='Eye.png' />
               <input
                 id="password"
                 type="password"
                 className="w-[406px] h-[44px] rounded-[12px] border border-solid border-gray-300 p-[4px] mt-[3px] text-[#D0D5DD]"
                 placeholder="Enter password"
               />
               </div>
                  <p className="w-[200px] ml-[280px] mt-[10px] h-[10px] text-[#685BC7] font-inter font-semibold text-[14px] leading-[18px] cursor-pointer">
               Forgot Password?
             </p>
              <div className="w-[406px] h-[84px] mt-[35px] flex flex-col gap-1">
            <button className="w-[406px] h-[48px] bg-[#685BC7] rounded-[12px] text-white font-inter font-semibold text-[16px] leading-[24px] flex justify-center items-center">
              Submit
            </button>
            <p className="w-[350px] h-[20px] mt-[3px] text-center pl-[70px] font-inter font-normal text-[14px] leading-[20px] text-[#344054]">
              Don’t have an account? <span className='font-inter mt-[3px] font-medium text-[14px] text-center leading-[20px] tracking-normal space-y-[14px] text-[#685BC7]'> Sign up</span>
            </p>
          </div> 
             </div>

           </div>

 <div className="w-[406px] h-[131px] flex flex-col gap-[24px]">
            <div className="w-[406px] h-[7px] bg-transparent" />
            <img src="line.png" alt='line' />

             <div className="w-[406px] flex flex-col gap-[12px] h-[100px]">
              <div className='relative flex items-center'>
                <img className='w-[20px] absolute left-[95px] flex items-center h-[20px]' alt='google' src="google.png" />
               <button className="w-[406px]  h-[44px] rounded-[12px] border border-gray-300 bg-[#FCFCFD] text-[#000000] font-inter font-medium">
                 Continue with Google
               </button>
               </div>
          
               
<div className='relative flex items-center'>
  <img className='w-[21px] absolute left-[95px] mt-[3px] flex items-center h-[21px] pt-[2px]' src="apple.png" />
               <button className="w-[406px] mt-[10px] h-[44px] rounded-[12px] border border-gray-300 bg-[#FCFCFD] text-[#1D2939] font-aeonik font-medium text-[17px] leading-[24px] flex justify-center items-center gap-6">
                 Continue with Apple
               </button>
               </div>
             </div>
           </div>
        
      </div>
      </div> 
     </div>
   </div>
 );}

 export default Login
















