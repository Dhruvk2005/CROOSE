"use client";

import React, { useEffect } from 'react';
import { Squares2X2Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { logoutapi } from '@/app/Apis/publicapi';
import { useRouter } from 'next/navigation';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import { useContext } from 'react';
import Settingprovider, { SettingContext } from '@/app/context/SettingContext';
const navItems = [
  { label: 'Overview', href: '/dashboard/maindashboard', icon: <Squares2X2Icon className="w-5.6 h-5.5 text-gray-100" /> },
  // { label: 'Modules', href: '/dashboard/createnewspace', icon: <MagnifyingGlassIcon className="w-5.6 h-5.5 text-gray-100" /> },
  { label: 'Your Space', href: '/dashboard/createnewspace', icon: <Icon icon="hugeicons:sparkles" className="w-5 h-5.5 text-gray-100" /> },
  // { label: 'Payments', href: '/dashboard/payments', icon: <Icon icon="solar:banknote-outline" className="w-5 h-5.5 text-gray-100" /> },
  { label: 'Customers', href: '/dashboard/customers', icon: <Icon icon="lucide:book-user" className="w-5 h-5.5 text-gray-100" /> },
  // { label: 'Analytics', href: '#', icon: <Icon icon="solar:chart-outline" className="w-5 h-5.5 text-gray-100" /> },
  { label: 'Appointments', href: '/dashboard/appointment', icon: <Icon icon="uil:calender" width="24" height="24" style={{ color: "#e5e7e9" }} /> },
  { label: 'Product/Services', href: '/dashboard/product', icon: <Icon icon="uil:calender" width="24" height="24" style={{ color: "#e5e7e9" }} /> },
];


export const Nav = ({ show, setShow }: any) => {
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [userdata, setUser] = useState<any>()
  const { setOpenSetting1 } = useContext<any>(SettingContext);
  const [showNAv, SetShowNav] = useState(false)


  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem('userdata')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }


  }, [])

  const handlelogout = async () => {
    try {
      await logoutapi({});
      localStorage.removeItem("token");
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

  return (


    <div className={`${show ? "block" : "hidden"} ${show ? "fixed" : "relative"} xl:block z-1 bg-[#13102E] w-[272px] h-[100%] max-w-[272px]`}>
      
     
      
      <div className="bg-[#13102E] w-[272px] h-[100vh] max-w-[272px] fixed">




        <div className="flex w-[272px] h-[76px] justify-left gap-[12px] pt-[24px] pr-[32px] pd-[12px] pl-[32px] items-center">
          <img className="w-[82.95893096923828px] h-[19.239667892456055px]" src="../logo.png" alt='logo' />
        </div>

        <div className="relative">
          <div className="flex justify-center flex-col items-center gap-[4px] mt-[20px] -ml-[10px]">
            <ul>
              {navItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <li className="flex w-[232px] items-center gap-[8px] px-[12px] py-[8px] hover:bg-[#1a173b] hover:border-l-4 hover:border-[#7367CB] transition-all">
                    <div>{item.icon}</div>
                    <div className='text-[14px] font-sans text-[#F2F4F7] font-normal'>{item.label}</div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <section style={{ position: "fixed", bottom: "0" }}>
            <div className="flex justify-center items-center flex-col w-full gap-[4px] -ml-[12px]">
              <ul className="flex flex-col gap-[4px] w-[80%] h-auto">
                <li className="flex w-[232px] h-auto gap-[8px] pt-[8px] pb-[8px] pl-[12px] pr-[12px] hover:bg-[#1a173b] hover:cursor-pointer hover:border-l-4 hover:border-[#7367CB]  transition-all" onClick={() => {
                  console.log('clicked setting');
                  setOpenSetting1(true);
                }} >
                  <div>
                    <Icon icon="mingcute:settings-4-line" width="24" height="24" color="white" />
                  </div>
                  <div>

                    <span className="text-[14px] font-sans text-[#F2F4F7] font-normal">Settings</span>
                  </div>
                </li>
                <Link href='/dashboard/support'>
                  <li className="flex w-[232px] h-auto gap-[8px] pt-[8px] pb-[8px] pl-[12px] pr-[12px] hover:bg-[#1a173b] hover:border-l-4 hover:border-[#7367CB]  transition-all">
                    <div>
                      <Icon icon="tabler:headphones" width="24" height="24" color='white' />
                    </div>
                    <div>
                      <span className="text-[14px] font-sans text-[#F2F4F7] font-normal">Support</span>
                    </div>
                  </li>
                </Link>

                {/* 
                <li onClick={handlelogout} className="flex w-[232px] h-auto gap-[8px] pt-[8px] pb-[8px] pl-[12px] pr-[12px] hover:bg-[#1a173b] hover:border-l-4 hover:border-[#7367CB]  transition-all">
                  <div>
                    <Icon icon="material-symbols:logout" width="24" height="24" color="white" />
                  </div>
                  <div>
                    <span className="text-[14px] font-sans text-[#F2F4F7] font-normal">Logout</span>
                  </div>
                </li> */}

              </ul>
            </div>

            <div className="flex flex-col w-[272px] h-auto p-[12px] gap-[10px]">
              <hr className="border-[#475467]" />
              <div className="bg-[#FFFFFF1F] flex w-[248px] h-auto p-[12px] gap-[12px] rounded-[10px]">
                <div className='w-[40px] h-[40px] bg-[#EAECF0] rounded-full flex items-center justify-center text-[#475467] font-semibold text-[14px] uppercase'>
                  {userdata?.data?.name
                    ? userdata.data.name
                      .split(' ')
                      .map((word: any) => word[0])
                      .slice(0, 2)
                      .join('')
                    : 'NA'}
                </div>

                <div className="flex flex-col w-[136px] h-auto">
                  <p className="font-medium text-[14px] text-[#F2F4F7] ">{userdata?.data?.name || "naem"}</p>
                  <p className="font-normal text-[12px] text-[#F2F4F7] ">{userdata?.data?.email || "email"}</p>
                </div>
                <div className="flex items-center">
                  <button>
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.833344 10.5002L5.00001 14.6668L9.16668 10.5002M0.833344 5.50016L5.00001 1.3335L9.16668 5.50016" stroke="#EAECF0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
