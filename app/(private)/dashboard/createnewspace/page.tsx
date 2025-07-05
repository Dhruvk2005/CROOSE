'use client'
import React from 'react'
import { Icon } from "@iconify/react";
import Spacenav from '../../components/spacenav';
import { useState } from 'react';
import Customerpopup from '../../components/customerpopup';
const Newspace = () => {


  
  return (
    <div style={{ overflowX: "hidden" }} className='min-h-screen flex flex-col' >
      <div>
        <Spacenav/>
      </div>

      <section className='flex flex-wrap justify-center'>
        <div className='w-[90%] h-auto flex flex-col gap-[40px] mt-[30px]' >
          <div className=' flex ' >
            <button className='flex rounded-[8px] bg-[#685BC7] text-[14px] text-white font-[500]  items-center pt-[8px] pb-[8px] pr-[16px] pl-[16px] ' >
              Create New Space
            </button>
          </div>

          <div className='w-full flex flex-col justify-center -mt-[10px]'>
            <div className='flex justify-between items-center w-[100%] h-auto'>
              <h1 className='text-[#121217] font-[600] text-[24px] font-sans'>
                Agents you have created
              </h1>
              <ul className='flex gap-[10px] mr-[70px] items-center'>
                <li className='flex items-center justify-center gap-[10px] px-[16px] py-[8px] bg-[#F4F4F5] border border-[#E4E4E7] rounded-full font-sans font-[600] text-[14px] text-[#18181B]'>
                  <span>All</span>
                  <Icon icon="charm:tick" width="16" height="16" style={{ color: "black" }} />
                </li>
                <li className='text-[#71717A] font-sans font-[600] text-[14px] list-none'>
                  Active
                </li>
              </ul>
            </div>

          </div>


          <div className='w-full flex flex-col gap-[30px] '>
            <ul className='flex flex-wrap gap-[30px]' >
              <li className='w-[289px] list-none h-auto rounded-[16px] border-[1px] border-[#EAECF0] ' >
                <div>
                  <div className=' flex flex-col justify-end p-[20px] w-[289px]  h-[127px] bg-[#685BC70D] ' >
                    <ul className='flex  -space-x-4 rtl:space-x-reverse' >
                      <li><img src="/profile-picture-1.png" alt='profile-1' className='w-10 h-10 border-2  rounded-full ' /></li>
                      <li><img src="/profile-picture-2.png" alt='profile-2' className='w-10 h-10 border-2 border-white rounded-full ' /></li>
                      <li><img src="/profile-picture-3.png" alt='profile-3' className='w-10 h-10 border-1 rounded-full' /></li>
                      <li><img src="/profile-picture-4.png" alt='profile-4' className='w-10 h-10 border-2 border-white rounded-full ' /></li>
                    </ul>

                  </div>
                  <section>
                    <div>
                      <div className='w-[289px] h-auto p-[16px] flex flex-col gap-[16px] ' >
                        <ul className='flex justify-between items-center' >
                          <li className='list-none text-[#1D2939] font-normal text-[14px] ' > Space Name</li>
                          <li className=' flex justify-center items-center list-none w-[50px] h-auto rounded-[12px] border-[1px] border-[#FDA29B] text-[#D92D20] font-400 text-[12px] pt-[1px] pr-[4px] pb-[1px] pl-[4px]'  >Live</li>
                        </ul>


                        <ul className=' flex justify-center items-center p-[8px] bg-[#0097A714] w-[124px] h-auto gap-[3px] rounded-[30px]  ' >
                          <li className=' flex text-[#0097A7] font-500 text-[12px] font-Inter' >Business</li>
                          <li className=' flex text-[#0097A7] font-500 text-[12px] font-Inter' >Category</li>
                        </ul>

                        <div className='flex gap-[12px]' >
                          <ul>
                            <img src="/mainprofile.png" alt='profile-1' className='w-[48px] h-[48px]   rounded-full ' />
                          </ul>
                          <ul className='flex flex-col gap-[8px]' >
                            <li className='text-[#1D2939] font-bold text-[12px] font-Inter ' >Prince Osei</li>


                            <li className='font-normal text-[12px] text-[#101828] ' >Last update: 12th Aug, 2024</li>
                          </ul>
                        </div>
                      </div>


                    </div>
                  </section>
                </div>
              </li>

              <li className='w-[289px] list-none h-auto rounded-[16px] border-[1px] border-[#EAECF0] ' >
                <div>
                  <div className='flex flex-col justify-end p-[20px]  w-[289px] h-[127px] bg-[#685BC70D] ' >
                    <ul className='flex -space-x-4 rtl:space-x-reverse' >
                      <li><img src="/profile-picture-1.png" alt='profile-1' className='w-10 h-10 border-2  rounded-full ' /></li>
                      <li><img src="/profile-picture-2.png" alt='profile-2' className='w-10 h-10 border-2 border-white rounded-full ' /></li>
                      <li><img src="/profile-picture-3.png" alt='profile-3' className='w-10 h-10 border-1 rounded-full' /></li>
                      <li><img src="/profile-picture-4.png" alt='profile-4' className='w-10 h-10 border-2 border-white rounded-full ' /></li>
                    </ul>

                  </div>
                  <section>
                    <div>
                      <div className='w-[289px] h-auto p-[16px] flex flex-col gap-[16px] ' >
                        <ul className='flex justify-between items-center' >
                          <li className='list-none text-[#1D2939] font-normal text-[14px] ' > Space Name</li>
                          <li className=' flex justify-center items-center list-none w-[50px] h-auto rounded-[12px] border-[1px] border-[#FDA29B] text-[#D92D20] font-400 text-[12px] pt-[1px] pr-[4px] pb-[1px] pl-[4px]'  >Live</li>
                        </ul>


                        <ul className=' flex justify-center items-center p-[8px] bg-[#0097A714] w-[124px] h-auto gap-[3px] rounded-[30px]  ' >
                          <li className=' flex text-[#0097A7] font-500 text-[12px] font-Inter' >Business</li>
                          <li className=' flex text-[#0097A7] font-500 text-[12px] font-Inter' >Category</li>
                        </ul>

                        <div className='flex gap-[12px]' >
                          <ul>
                            <img src="/mainprofile.png" alt='profile-1' className='w-[48px] h-[48px]   rounded-full ' />
                          </ul>
                          <ul className='flex flex-col gap-[8px]' >
                            <li className='text-[#1D2939] font-bold text-[12px] font-Inter ' >Prince Osei</li>


                            <li className='font-normal text-[12px] text-[#101828] ' >Last update: 12th Aug, 2024</li>
                          </ul>
                        </div>
                      </div>


                    </div>
                  </section>
                </div>
              </li>


              <li className='w-[289px] list-none h-auto rounded-[16px] border-[1px] border-[#EAECF0] ' >
                <div>
                  <div className='flex flex-col justify-end p-[20px]  w-[289px] h-[127px] bg-[#685BC70D] ' >
                    <ul className='flex -space-x-4 rtl:space-x-reverse' >
                      <li><img src="/profile-picture-1.png" alt='profile-1' className='w-10 h-10 border-2  rounded-full ' /></li>
                      <li><img src="/profile-picture-2.png" alt='profile-2' className='w-10 h-10 border-2 border-white rounded-full ' /></li>
                      <li><img src="/profile-picture-3.png" alt='profile-3' className='w-10 h-10 border-1 rounded-full' /></li>
                      <li><img src="/profile-picture-4.png" alt='profile-4' className='w-10 h-10 border-2 border-white rounded-full ' /></li>
                    </ul>

                  </div>
                  <section>
                    <div>
                      <div className='w-[289px] h-auto p-[16px] flex flex-col gap-[16px] ' >
                        <ul className='flex justify-between items-center' >
                          <li className='list-none text-[#1D2939] font-normal text-[14px] ' > Space Name</li>
                          <li className=' flex justify-center items-center list-none w-[50px] h-auto rounded-[12px] border-[1px] border-[#FDA29B] text-[#D92D20] font-400 text-[12px] pt-[1px] pr-[4px] pb-[1px] pl-[4px]'  >Live</li>
                        </ul>


                        <ul className=' flex justify-center items-center p-[8px] bg-[#0097A714] w-[124px] h-auto gap-[3px] rounded-[30px]  ' >
                          <li className=' flex text-[#0097A7] font-500 text-[12px] font-Inter' >Business</li>
                          <li className=' flex text-[#0097A7] font-500 text-[12px] font-Inter' >Category</li>
                        </ul>

                        <div className='flex gap-[12px]' >
                          <ul>
                            <img src="/mainprofile.png" alt='profile-1' className='w-[48px] h-[48px]   rounded-full ' />
                          </ul>
                          <ul className='flex flex-col gap-[8px]' >
                            <li className='text-[#1D2939] font-bold text-[12px] font-Inter ' >Prince Osei</li>


                            <li className='font-normal text-[12px] text-[#101828] ' >Last update: 12th Aug, 2024</li>
                          </ul>
                        </div>
                      </div>


                    </div>
                  </section>
                </div>
              </li>
               <li className=' w-[289px] list-none h-auto rounded-[16px] border-[1px] border-[#EAECF0] ' >
                <div>
                  <div className='flex flex-col justify-end p-[20px]  w-[289px] h-[127px] bg-[#685BC70D] ' >
                    <ul className='flex -space-x-4 rtl:space-x-reverse' >
                      <li><img src="/profile-picture-1.png" alt='profile-1' className='w-10 h-10 border-2  rounded-full ' /></li>
                      <li><img src="/profile-picture-2.png" alt='profile-2' className='w-10 h-10 border-2 border-white rounded-full ' /></li>
                      <li><img src="/profile-picture-3.png" alt='profile-3' className='w-10 h-10 border-1 rounded-full' /></li>
                      <li><img src="/profile-picture-4.png" alt='profile-4' className='w-10 h-10 border-2 border-white rounded-full ' /></li>
                    </ul>

                  </div>
                  <section>
                    <div>
                      <div className='w-[289px] h-auto p-[16px] flex flex-col gap-[16px] ' >
                        <ul className='flex justify-between items-center' >
                          <li className='list-none text-[#1D2939] font-normal text-[14px] ' > Space Name</li>
                          <li className=' flex justify-center items-center list-none w-[50px] h-auto rounded-[12px] border-[1px] border-[#FDA29B] text-[#D92D20] font-400 text-[12px] pt-[1px] pr-[4px] pb-[1px] pl-[4px]'  >Live</li>
                        </ul>


                        <ul className=' flex justify-center items-center p-[8px] bg-[#0097A714] w-[124px] h-auto gap-[3px] rounded-[30px]  ' >
                          <li className=' flex text-[#0097A7] font-500 text-[12px] font-Inter' >Business</li>
                          <li className=' flex text-[#0097A7] font-500 text-[12px] font-Inter' >Category</li>
                        </ul>

                        <div className='flex gap-[12px]' >
                          <ul>
                            <img src="/mainprofile.png" alt='profile-1' className='w-[48px] h-[48px]   rounded-full ' />
                          </ul>
                          <ul className='flex flex-col gap-[8px]' >
                            <li className='text-[#1D2939] font-bold text-[12px] font-Inter ' >Prince Osei</li>


                            <li className='font-normal text-[12px] text-[#101828] ' >Last update: 12th Aug, 2024</li>
                          </ul>
                        </div>
                      </div>


                    </div>
                  </section>
                </div>
              </li>

              <li className='w-[289px] list-none h-auto rounded-[16px] border-[1px] border-[#EAECF0] ' >
                <div>
                  <div className='flex flex-col justify-end p-[20px]  w-[289px] h-[127px] bg-[#685BC70D] ' >
                    <ul className='flex -space-x-4 rtl:space-x-reverse' >
                      <li><img src="/profile-picture-1.png" alt='profile-1' className='w-10 h-10 border-2  rounded-full ' /></li>
                      <li><img src="/profile-picture-2.png" alt='profile-2' className='w-10 h-10 border-2 border-white rounded-full ' /></li>
                      <li><img src="/profile-picture-3.png" alt='profile-3' className='w-10 h-10 border-1 rounded-full' /></li>
                      <li><img src="/profile-picture-4.png" alt='profile-4' className='w-10 h-10 border-2 border-white rounded-full ' /></li>
                    </ul>

                  </div>
                  <section>
                    <div>
                      <div className='w-[289px] h-auto p-[16px] flex flex-col gap-[16px] ' >
                        <ul className='flex justify-between items-center' >
                          <li className='list-none text-[#1D2939] font-normal text-[14px] ' > Space Name</li>
                          <li className=' flex justify-center items-center list-none w-[50px] h-auto rounded-[12px] border-[1px] border-[#FDA29B] text-[#D92D20] font-400 text-[12px] pt-[1px] pr-[4px] pb-[1px] pl-[4px]'  >Live</li>
                        </ul>


                        <ul className=' flex justify-center items-center p-[8px] bg-[#0097A714] w-[124px] h-auto gap-[3px] rounded-[30px]  ' >
                          <li className=' flex text-[#0097A7] font-500 text-[12px] font-Inter' >Business</li>
                          <li className=' flex text-[#0097A7] font-500 text-[12px] font-Inter' >Category</li>
                        </ul>

                        <div className='flex gap-[12px]' >
                          <ul>
                            <img src="/mainprofile.png" alt='profile-1' className='w-[48px] h-[48px]   rounded-full ' />
                          </ul>
                          <ul className='flex flex-col gap-[8px]' >
                            <li className='text-[#1D2939] font-bold text-[12px] font-Inter ' >Prince Osei</li>


                            <li className='font-normal text-[12px] text-[#101828] ' >Last update: 12th Aug, 2024</li>
                          </ul>
                        </div>
                      </div>


                    </div>
                  </section>
                </div>
              </li>


              <li className='w-[289px] list-none h-auto rounded-[16px] border-[1px] border-[#EAECF0] ' >
                <div>
                  <div className='flex flex-col justify-end p-[20px]  w-[289px] h-[127px] bg-[#685BC70D] ' >
                    <ul className='flex -space-x-4 rtl:space-x-reverse' >
                      <li><img src="/profile-picture-1.png" alt='profile-1' className='w-10 h-10 border-2  rounded-full ' /></li>
                      <li><img src="/profile-picture-2.png" alt='profile-2' className='w-10 h-10 border-2 border-white rounded-full ' /></li>
                      <li><img src="/profile-picture-3.png" alt='profile-3' className='w-10 h-10 border-1 rounded-full' /></li>
                      <li><img src="/profile-picture-4.png" alt='profile-4' className='w-10 h-10 border-2 border-white rounded-full ' /></li>
                    </ul>

                  </div>
                  <section>
                    <div>
                      <div className='w-[289px] h-auto p-[16px] flex flex-col gap-[16px] ' >
                        <ul className='flex justify-between items-center' >
                          <li className='list-none text-[#1D2939] font-normal text-[14px] ' > Space Name</li>
                          <li className=' flex justify-center items-center list-none w-[50px] h-auto rounded-[12px] border-[1px] border-[#FDA29B] text-[#D92D20] font-400 text-[12px] pt-[1px] pr-[4px] pb-[1px] pl-[4px]'  >Live</li>
                        </ul>


                        <ul className=' flex justify-center items-center p-[8px] bg-[#0097A714] w-[124px] h-auto gap-[3px] rounded-[30px]  ' >
                          <li className=' flex text-[#0097A7] font-500 text-[12px] font-Inter' >Business</li>
                          <li className=' flex text-[#0097A7] font-500 text-[12px] font-Inter' >Category</li>
                        </ul>

                        <div className='flex gap-[12px]' >
                          <ul>
                            <img src="/mainprofile.png" alt='profile-1' className='w-[48px] h-[48px]   rounded-full ' />
                          </ul>
                          <ul className='flex flex-col gap-[8px]' >
                            <li className='text-[#1D2939] font-bold text-[12px] font-Inter ' >Prince Osei</li>


                            <li className='font-normal text-[12px] text-[#101828] ' >Last update: 12th Aug, 2024</li>
                          </ul>
                        </div>
                      </div>


                    </div>
                  </section>
                </div>
              </li>
            </ul>
           

          </div>


        </div>
      </section>
     
    </div>
  )
}

export default Newspace