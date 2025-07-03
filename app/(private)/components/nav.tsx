"use client"

import React from 'react'
import { Squares2X2Icon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Icon } from "@iconify/react";
import Link from 'next/link';



export const Nav = ({ show, setShow }: any) => {
  return (
    <div className={`${show ? "block" : "hidden"} ${show ? "fixed" : "relative"} xl:block  z-1 bg-[#13102E] w-[272px] h-[100%] max-w-[272px]`}>
      <div className="bg-[#13102E] w-[272px] h-[900px] max-w-[272px] fixed">
        <div className="flex w-[272px] h-[76px] justify-left gap-[12px] pt-[24px] pr-[32px] pd-[12px] pl-[32px] items-center " >
          <img className="w-[82.95893096923828px] h-[19.239667892456055px]" src="../logo.png" alt='logo' />
        </div>

        <div className="relative">
          <div className="flex justify-center flex-col items-center gap-[4px] mt-[20px] -ml-[10px]" >
            <ul>
              <Link href="/dashboard/space">
                <li className="flex  w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] items-center" >
                  <div>
                    <Squares2X2Icon className="w-5.6 h-5.5 text-gray-100" />

                  </div>
                  <div className='text-[14px] font-sans text-[#F2F4F7] font-normal' >
                    Overview

                  </div>

                </li>
              </Link>
              <Link href="/dashboard/createnewspace">
                <li className="flex  w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] items-center " >
                  <div>
                    <MagnifyingGlassIcon className="w-5.6 h-5.5 text-gray-100" />
                  </div>
                  <div className='text-[14px] font-sans text-[#F2F4F7] font-normal' >
                    Modules
                  </div>
                </li>
              </Link>
              <Link href="/dashboard/customers">

                <li className="flex  w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] items-center " >
                  <div>
                    <Icon icon="hugeicons:sparkles" className="w-5 h-5.5 text-gray-100" />
                  </div>
                  <div className='text-[14px] font-sans text-[#F2F4F7] font-normal' >
                    Your Space
                  </div>
                </li>
              </Link>

              <li className="flex w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] " >
                <div>
                  <Icon icon="solar:banknote-outline" className="w-5 h-5.5 text-gray-100" />
                </div>
                <div>
                  <span className=" text-[14px] font-sans text-[#F2F4F7] font-normal " >Payments</span>
                </div>

              </li>
              <Link href="/dashboard/customers">

                <li className="flex w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] " >
                  <div>
                    <Icon icon="lucide:book-user" className="w-5 h-5.5 text-gray-100" />
                  </div>
                  <div>
                    <span className="text-[14px] font-sans text-[#F2F4F7] font-normal " >Customers</span>
                  </div>

                </li>
              </Link>

              <li className="flex w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] " >
                <div>
                  <Icon icon="solar:chart-outline" className="w-5 h-5.5 text-gray-100" />
                </div>
                <div>
                  <span className=" text-[14px] font-sans text-[#F2F4F7] font-normal " >Analytics</span>
                </div>

              </li>

              <li className="flex w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] " >
                <div>
                  <Icon icon="uil:calender" width="24" height="24" style={{ color: "#e5e7e9" }} />
                </div>
                <div>
                  <span className=" text-[14px] font-sans text-[#F2F4F7] font-normal " >Appointments</span>
                </div>

              </li>

              <li className="flex w-[232px] h-[auto] pt-[8px] pb-[8px] pr-[12px] pl-[12px] gap-[8px] " >
                <div>
                  <Icon icon="uil:calender" width="24" height="24" style={{ color: "#e5e7e9" }} />
                </div>
                <div>
                  <span className=" text-[14px] font-sans text-[#F2F4F7] font-normal " >product/Services</span>
                </div>

              </li>




            </ul>
          </div>
          <section style={{ position: "fixed", bottom: "0" }}>
            <div className=" flex justify-center items-center flex-col w-full  gap-[4px] -ml-[12px] " >
              <ul className=" flex flex-col gap-[4px] w-[80%] h-auto " >
                <li className="flex w-[232px] h-auto gap-[8px] pt-[8px] pb-[8px] pl-[12px] pr-[12px] " >
                  <div>
                    <Icon icon="mingcute:settings-4-line" width="24" height="24" color="white" />
                  </div>
                  <div>
                    <span className=" text-[14px] font-sans text-[#F2F4F7] font-normal " >Settings</span>
                  </div>
                </li>
                <Link
                  href='/dashboard/support'

                >
                  <li className="flex w-[232px] h-auto gap-[8px] pt-[8px] pb-[8px] pl-[12px] pr-[12px]"> <div>
                    <Icon icon="tabler:headphones" width="24" height="24" color='white' />
                  </div>
                    <div>
                      <span className=" text-[14px] font-sans text-[#F2F4F7] font-normal " >Support</span>
                    </div>
                  </li>
                </Link>
              </ul>
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