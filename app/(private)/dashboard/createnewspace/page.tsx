import React from 'react'
import { Icon } from "@iconify/react";
const Newspace = () => {
  return (
    <div style={{ overflowX: "hidden" }} className='min-h-screen flex flex-col' >

      <div className='w-[100%] h-[64px] border-b-[2px]  flex justify-between items-center' >
        <div className='flex items-center  gap-[20px] text-[#121217] '>
          <span className='font-semi font-bold text-[20px] pl-[20px] ml-[10px]' >Space</span>

        </div>
        <div className='mr-[20px]' >
          <li className='flex w-[98px] gap-[23px] justify-center items-center '>
            <div className='w-[46px] flex gap-[10px] border-r-[2px]  border-[#F2F4F7]' >
              <Icon icon="mynaui:search" width="24" height="24" style={{ color: '#000' }} />
            </div>
            <div className='w-[16px] flex gap-[10px]'>
              <svg width="24" height="20" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99255 15.0123C10.3499 16.346 9.55845 17.7168 8.22478 18.0742C6.89112 18.4315 5.52028 17.6401 5.16292 16.3064M7.07633 4.78404C7.32983 4.32796 7.41334 3.77671 7.26762 3.23288C6.96983 2.12149 5.82746 1.46194 4.71607 1.75974C3.60468 2.05753 2.94514 3.1999 3.24293 4.31129C3.38865 4.85512 3.73659 5.29076 4.18418 5.55899M11.53 7.87107C11.2325 6.76096 10.4384 5.83266 9.32236 5.29038C8.2063 4.74811 6.8597 4.63627 5.5788 4.97949C4.2979 5.32271 3.18763 6.09285 2.49223 7.12051C1.79683 8.14817 1.57327 9.34915 1.87072 10.4593C2.36287 12.296 2.2673 13.7613 1.95651 14.8747C1.60229 16.1438 1.42518 16.7783 1.47302 16.9057C1.52777 17.0515 1.56737 17.0915 1.71256 17.1478C1.83947 17.1969 2.37261 17.0541 3.4389 16.7684L13.3265 14.119C14.3927 13.8333 14.9259 13.6904 15.0112 13.5844C15.1088 13.4631 15.1231 13.4086 15.0976 13.255C15.0754 13.1208 14.6047 12.6598 13.6634 11.7379C12.8375 10.929 12.0221 9.70778 11.53 7.87107Z" stroke="#101828" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

          </li>

        </div>


      </div>
      <section className='flex flex-wrap justify-center'>
        <div className='w-[80%] h-auto flex flex-col gap-[40px] mt-[30px]' >
          <div className=' flex ' >
            <button className='flex rounded-[8px] bg-[#685BC7] text-[14px] font-[500]  items-center pt-[8px] pb-[8px] pr-[16px] pl-[16px] ' >
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
            </ul>
            <ul className='flex gap-[30px]' >
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