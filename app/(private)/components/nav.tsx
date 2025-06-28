"use client"

import React from 'react'
import Link from 'next/link'; 
import { Squares2X2Icon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Icon } from "@iconify/react";



export const Nav = ({ show, setShow }: any) => {
  return (
  <div className={`${show?"block":"hidden"} ${show?"fixed":"relative"} xl:block  z-1 bg-[#13102E] w-fit pl-[10px] h-screen max-w-[272px]`}>
      <div className="bg-[#13102E] w-fit h-screen px-[4px]  max-w-[250px] fixed ml-[-5px]">
        {/* <div  className="flex w-[272px] h-[76px] justify-left gap-[12px] pt-[24px] pr-[32px] pd-[12px] pl-[32px] items-center " >
          <img className="w-[82.95893096923828px] h-[19.239667892456055px]" src="../logo.png" alt='logo' />
        </div> */}
        <div className="flex w-full max-w-[272px] h-[75px] items-center  px-[10px]">
          <img
            className="w-[50%] h-auto object-contain"
            src="../logo.png"
            alt="logo"
          />
        </div>


        <div className="relative">
          <div className="flex    " >
            <ul>
              <li className="flex  w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] items-center" >
                <div>
                  <Squares2X2Icon className="w-5.6 h-5.5 text-gray-100" />

                </div>
                <div className='text-[14px] font-sans text-[#F2F4F7] font-normal' >
                  Overview

                </div>
              </li>

              <li className="flex  w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] items-center " >
                <div>
                  <MagnifyingGlassIcon className="w-5.6 h-5.5 text-gray-100" />
                </div>
                <div className='text-[14px] font-sans text-[#F2F4F7] font-normal' >
                  Modules
                </div>
              </li>

              <li className="flex  w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] items-center " >
                <div>
                  <Icon icon="hugeicons:sparkles" className="w-5 h-5.5 text-gray-100" />
                </div>
                <div className='text-[14px] font-sans text-[#F2F4F7] font-normal' >
                  Your Space
                </div>
              </li>

              <li className="flex w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] " >
                <div>
                  <Icon icon="solar:banknote-outline" className="w-5 h-5.5 text-gray-100" />
                </div>
                <div>
                  <span className=" text-[14px] font-sans text-[#F2F4F7] font-normal " >Payments</span>
                </div>

              </li>

              <li className="flex w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] " >
                <div>
                  <Icon icon="lucide:book-user" className="w-5 h-5.5 text-gray-100" />
                </div>
                <div>
                  <span className="text-[14px] font-sans text-[#F2F4F7] font-normal " >Customers</span>
                </div>

              </li>

              <li className="flex w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] " >
                <div>
                  <Icon icon="solar:chart-outline" className="w-5 h-5.5 text-gray-100" />
                </div>
                <div>
                  <span className=" text-[14px] font-sans text-[#F2F4F7] font-normal " >Analytics</span>
                </div>

              
              <li className="flex items-center w-full px-3 py-2 gap-2 hover:bg-white/5 rounded-[6px] cursor-pointer transition">
                  <svg className="w-[15px] h-[15px]  mt-[2.5px] ml-[2.5px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.04147 0.0415053H8.95918C8.40514 0.0414757 7.92773 0.0414501 7.54546 0.0928461C7.13576 0.147929 6.74304 0.272144 6.4245 0.590683C6.10596 0.909222 5.98175 1.30194 5.92666 1.71164C5.87527 2.09392 5.87529 2.57131 5.87532 3.12536L5.87533 5.1482C5.67984 5.07911 5.46947 5.04151 5.25033 5.04151H2.75033C1.71479 5.04151 0.875326 5.88097 0.875326 6.91651V16.7082H0.666992C0.321814 16.7082 0.0419922 16.988 0.0419922 17.3332C0.0419922 17.6783 0.321814 17.9582 0.666992 17.9582H17.3337C17.6788 17.9582 17.9587 17.6783 17.9587 17.3332C17.9587 16.988 17.6788 16.7082 17.3337 16.7082H17.1253V11.0832C17.1253 10.0476 16.2859 9.20817 15.2503 9.20817H12.7503C12.5312 9.20817 12.3208 9.24577 12.1253 9.31487L12.1253 3.12537C12.1254 2.57131 12.1254 2.09393 12.074 1.71164C12.0189 1.30194 11.8947 0.909222 11.5761 0.590683C11.2576 0.272144 10.8649 0.147928 10.4552 0.0928461C10.0729 0.0414501 9.59551 0.0414757 9.04147 0.0415053ZM15.8753 16.7082V11.0832C15.8753 10.738 15.5955 10.4582 15.2503 10.4582H12.7503C12.4051 10.4582 12.1253 10.738 12.1253 11.0832V16.7082H15.8753ZM10.8753 16.7082V3.16651C10.8753 2.55958 10.874 2.16726 10.8351 1.8782C10.7987 1.60711 10.7398 1.52214 10.6923 1.47457C10.6447 1.42699 10.5597 1.36815 10.2886 1.3317C9.99957 1.29284 9.60725 1.29151 9.00033 1.29151C8.3934 1.29151 8.00108 1.29284 7.71202 1.3317C7.44093 1.36815 7.35596 1.42699 7.30838 1.47457C7.26081 1.52214 7.20196 1.60711 7.16552 1.8782C7.12665 2.16726 7.12533 2.55958 7.12533 3.16651V16.7082H10.8753ZM5.87533 16.7082V6.91651C5.87533 6.57133 5.5955 6.29151 5.25033 6.29151H2.75033C2.40515 6.29151 2.12533 6.57133 2.12533 6.91651V16.7082H5.87533Z" fill="#F2F4F7" />
              </svg>
                <span className="text-sm font-medium text-[#F2F4F7]">Analytics</span>
              </li>

              {/*Booking appointments*/}
              <li className="w-full">
                <Link href="/dashboard/appointment">
                  <div className="flex items-center w-full px-3 py-2 gap-2 hover:bg-white/5 rounded-[6px] cursor-pointer transition">
                    <svg className="w-[15px] h-[15px] mt-[2px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2V5M16 2V5M3 10H21M5 8H19C20.1046 8 21 8.89543 21 10V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V10C3 8.89543 3.89543 8 5 8Z" stroke="#F2F4F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm font-medium text-[#F2F4F7]">Appointments</span>
                  </div>
                </Link>
              </li>


            </ul>
          </div>
          <section style={{ position: "fixed", bottom: "0" }}>
            <div className=" flex justify-center items-center flex-col w-full  gap-[4px] -ml-[12px] " >
              <ul className=" flex flex-col gap-[4px] w-[80%] h-auto " >
                <li className="flex w-[232px] h-auto gap-[8px] pt-[8px] pb-[8px] pl-[12px] pr-[12px] " >
                  <div>
                    <Icon icon="mingcute:settings-4-line" width="24" height="24" />
                  </div>
                  <div>
                    <span className=" text-[14px] font-sans text-[#F2F4F7] font-normal " >Settings</span>
                  </div>
                </li>
                <li className="flex w-[232px] h-auto gap-[8px] pt-[8px] pb-[8px] pl-[12px] pr-[12px]"> <div>
                 <Icon icon="tabler:headphones" width="24" height="24" />
                </div>
                  <div>
                    <span className=" text-[14px] font-sans text-[#F2F4F7] font-normal " >Support</span>
                  </div></li>
              </ul>
            </div>

            {/*BLock ends here */}
          <div className="flex flex-col w-full h-auto p-[12px] gap-[10px] " >
            


            <div className="bg-[#FFFFFF1F] flex items-center p-[12px] gap-[12px] rounded-[10px] w-fit h-fit">
                <div>
                  {/* SVG ICON */}
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="#EAECF0" />
                    <rect width="40" height="40" rx="20" fill="#EAECF0" />
                  <g filter="url(#filter0_i_2361_12782)">
                    <g clipPath="url(#clip0_2361_12782)">
                      <rect width="40" height="40" rx="20" fill="#EAECF0" />
                      <g filter="url(#filter1_di_2361_12782)">
                        <ellipse cx="20" cy="38" rx="16" ry="12" fill="url(#paint0_radial_2361_12782)" shapeRendering="crispEdges" />
                        <path d="M20 26.5C24.3206 26.5 28.2128 27.8144 31.0137 29.915C33.8143 32.0156 35.5 34.879 35.5 38C35.5 41.121 33.8143 43.9844 31.0137 46.085C28.2128 48.1856 24.3206 49.5 20 49.5C15.6794 49.5 11.7872 48.1856 8.98633 46.085C6.18569 43.9844 4.5 41.121 4.5 38C4.5 34.879 6.18569 32.0156 8.98633 29.915C11.7872 27.8144 15.6794 26.5 20 26.5Z" stroke="url(#paint1_radial_2361_12782)" shapeRendering="crispEdges" />
                      </g>
                      <g filter="url(#filter2_di_2361_12782)">
                        <circle cx="20" cy="16" r="8" fill="url(#paint2_radial_2361_12782)" shapeRendering="crispEdges" />
                        <circle cx="20" cy="16" r="7.5" stroke="url(#paint3_radial_2361_12782)" shapeRendering="crispEdges" />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <filter id="filter0_i_2361_12782" x="0" y="-8" width="40" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="-8" />
                      <feGaussianBlur stdDeviation="8" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.7712 0 0 0 0 0.78 0 0 0 0 0.7888 0 0 0 0.48 0" />
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2361_12782" />
                    </filter>
                    <filter id="filter1_di_2361_12782" x="0" y="18" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0.560784 0 0 0 0 0.576471 0 0 0 0.16 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2361_12782" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2361_12782" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="-8" />
                      <feGaussianBlur stdDeviation="4" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2361_12782" />
                    </filter>
                    <filter id="filter2_di_2361_12782" x="8" y="0" width="24" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0.560784 0 0 0 0 0.576471 0 0 0 0.16 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2361_12782" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2361_12782" result="shape" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="-8" />
                      <feGaussianBlur stdDeviation="4" />
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2361_12782" />
                    </filter>
                    <radialGradient id="paint0_radial_2361_12782" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 26) rotate(90) scale(24 32)">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_2361_12782" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 26) rotate(90) scale(24 32)">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_2361_12782" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 8) rotate(90) scale(16)">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint3_radial_2361_12782" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 8) rotate(90) scale(16)">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <clipPath id="clip0_2361_12782">
                      <rect width="40" height="40" rx="20" fill="white" />
                    </clipPath>
                  </defs>
                  </svg>
                </div>

                <div className="flex flex-col w-full h-fit">
                  <p className="font-medium text-[14px] text-white">RoiTech</p>
                  <p className="font-normal text-[12px] text-white">Isaac Onyemah</p>
                </div>

                <div className="flex items-center">
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.833344 10.5002L5.00001 14.6668L9.16668 10.5002M0.833344 5.50016L5.00001 1.3335L9.16668 5.50016" stroke="#EAECF0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

            <div className="flex flex-col w-[272px] h-auto p-[12px] gap-[10px] " >
              <hr className="border-[#475467]" ></hr>

              <div className="bg-[#FFFFFF1F] flex w-[248px] h-auto p-[12px] gap-[12px] rounded-[10px] " >
                <div>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="#EAECF0" />
                    <g filter="url(#filter0_i_2361_12782)">
                      <g clipPath="url(#clip0_2361_12782)">
                        <rect width="40" height="40" rx="20" fill="#EAECF0" />
                        <g filter="url(#filter1_di_2361_12782)">
                          <ellipse cx="20" cy="38" rx="16" ry="12" fill="url(#paint0_radial_2361_12782)" shapeRendering="crispEdges" />
                          <path d="M20 26.5C24.3206 26.5 28.2128 27.8144 31.0137 29.915C33.8143 32.0156 35.5 34.879 35.5 38C35.5 41.121 33.8143 43.9844 31.0137 46.085C28.2128 48.1856 24.3206 49.5 20 49.5C15.6794 49.5 11.7872 48.1856 8.98633 46.085C6.18569 43.9844 4.5 41.121 4.5 38C4.5 34.879 6.18569 32.0156 8.98633 29.915C11.7872 27.8144 15.6794 26.5 20 26.5Z" stroke="url(#paint1_radial_2361_12782)" shapeRendering="crispEdges" />
                        </g>
                        <g filter="url(#filter2_di_2361_12782)">
                          <circle cx="20" cy="16" r="8" fill="url(#paint2_radial_2361_12782)" shapeRendering="crispEdges" />
                          <circle cx="20" cy="16" r="7.5" stroke="url(#paint3_radial_2361_12782)" shapeRendering="crispEdges" />
                        </g>
                      </g>
                    </g>
                    <defs>
                      <filter id="filter0_i_2361_12782" x="0" y="-8" width="40" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="-8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.7712 0 0 0 0 0.78 0 0 0 0 0.7888 0 0 0 0.48 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2361_12782" />
                      </filter>
                      <filter id="filter1_di_2361_12782" x="0" y="18" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0.560784 0 0 0 0 0.576471 0 0 0 0.16 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2361_12782" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2361_12782" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="-8" />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2361_12782" />
                      </filter>
                      <filter id="filter2_di_2361_12782" x="8" y="0" width="24" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0.560784 0 0 0 0 0.576471 0 0 0 0.16 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2361_12782" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2361_12782" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="-8" />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2361_12782" />
                      </filter>
                      <radialGradient id="paint0_radial_2361_12782" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 26) rotate(90) scale(24 32)">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient id="paint1_radial_2361_12782" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 26) rotate(90) scale(24 32)">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient id="paint2_radial_2361_12782" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 8) rotate(90) scale(16)">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient id="paint3_radial_2361_12782" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 8) rotate(90) scale(16)">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                      <clipPath id="clip0_2361_12782">
                        <rect width="40" height="40" rx="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
                <div className=" flex flex-col w-[136px] h-auto" >
                  <p className="font-medium  text-[14px]  " >RoiTech</p>
                  <p className="font-normal text-[12px]" >Isaac Onyemah</p>
                </div>
                <div className="flex items-center" >
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.833344 10.5002L5.00001 14.6668L9.16668 10.5002M0.833344 5.50016L5.00001 1.3335L9.16668 5.50016" stroke="#EAECF0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                </div>
              </div>

            </div>
          </section>
        </div>





      </div>
    </div>
  )
}
