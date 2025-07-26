




'use client';

import React, { useState, useEffect, useContext } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import DeletePopup from './settingDelete';
import { SettingContext } from '@/app/context/SettingContext';
import { logoutapi } from '@/app/Apis/publicapi';
import { useRouter } from 'next/navigation';

const SettingTwo = () => {
  const [Open, setOpen] = useState(false);
  const { setOpenSettingDelete, setOpenSetting3, setOpenSetting2, setOpenSetting1 } = useContext<any>(SettingContext);

  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const router = useRouter();

  const [currentPasswordInput, setCurrentPasswordInput] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    document.body.style.overflow = Open ? 'hidden' : 'auto';
  }, [Open]);

  const handlelogout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('No token found. Please login again.');
        router.push('/login');
        return;
      }

      await logoutapi({}); // You can pass token here if API expects it
      localStorage.removeItem('token');
      localStorage.removeItem('password'); // Optional: clear password
      setOpenSetting2(false);
      setSnackbarMessage('Logout successful');
      setOpenSnackbar(true);
      setTimeout(() => {
        router.push('/login');
      }, 1000);
    } catch (err: any) {
      setSnackbarMessage(err.message || 'Logout failed');
      setOpenSnackbar(true);
    }
  };

  

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-[#9999] p-4 sm:p-6">
        <div className="relative z-10 flex justify-center items-center w-full">
          <div className="w-full max-w-[717px] h-[732px] opacity-100 border-[#E2E4E84D] bg-[#ffffff] rounded-[16px] border border-solid">
            {/* Header */}
            <section className="w-full flex justify-between items-center border-b border-[#F6F6F6] rounded-t-[16px] px-4 py-3 sm:px-[20px] sm:py-[12px]">
              <span className="font-inter font-semibold text-[18px] sm:text-[20px] leading-[150%] tracking-[-0.04em] text-[#1D2939]">
                Settings
              </span>
              <span
                className="w-9 h-9 rounded-full border p-2 flex items-center justify-center border-[#F1F2F3] bg-[#F6F8FA]"
                onClick={() => setOpenSetting1(false)}
              >
                <Icon icon="iconamoon:close-bold" width="24" height="24" />
              </span>
            </section>

            {/* Tabs */}
            <section className="w-full px-4 py-6 sm:px-[64px] h-[611px] flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-5">
                  <button className="rounded-sm text-sm px-3 py-2" onClick={() => {
                    setOpenSetting1(true);
                    setOpenSetting2(false);
                    setOpenSetting3(false);
                  }}>
                    <span className="font-semibold text-[14px] text-[#667085]">Profile</span>
                  </button>
                  <button className="rounded-sm w-[131px] bg-[#F9F5FF] text-sm px-3 py-2">
                    <span className="font-semibold text-[14px] text-[#685BC7]">Security</span>
                  </button>
                  <button className="rounded-sm text-sm px-2 py-2" onClick={() => {
                    setOpenSetting3(true);
                    setOpenSetting2(false);
                    setOpenSetting1(false);
                  }}>
                    <span className="font-semibold text-[14px] text-[#667085]">Billing</span>
                  </button>
                  <button className="rounded-sm text-sm px-3 py-2" onClick={handlelogout}>
                    <span className="font-semibold text-[14px] text-[#667085]">Log Out</span>
                  </button>
                </div>
                <div className="text-[18px] font-inter font-semibold leading-[28px] text-[#101828]">Security</div>
              </div>

              {/* Password Form */}
              <section className="flex flex-col gap-3">
                {/* Current Password */}
                <div>
                  <label className="block font-medium text-sm text-[#344054]">Current Password</label>
                  <div className="relative mt-1">
                    <input
                      type="password"
                      className="w-full h-[44px] text-[#98A2B3] text-sm rounded-[12px] border border-[#D0D5DD] p-4"
                      placeholder="Enter your password"
                    
                    />
                  </div>
                </div>

                {/* New Password */}
                <div>
                  <label className="block font-medium text-sm text-[#344054]">New Password</label>
                  <div className="relative mt-1">
                    <input
                      type="password"
                      className="w-full h-[44px] text-[#98A2B3] text-sm rounded-[12px] border border-[#D0D5DD] p-4"
                      placeholder="Enter New Password"
                     
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block font-medium text-sm text-[#344054]">Repeat New Password</label>
                  <div className="relative mt-1">
                    <input
                      type="password"
                      className="w-full h-[44px] text-[#98A2B3] text-sm rounded-[12px] border border-[#D0D5DD] p-4"
                      placeholder="Repeat Password"
                    
                    />
                  </div>
                </div>
              </section>
            </section>

            {/* Update Password Button */}
            <section className="w-full flex justify-end px-4 py-3 sm:px-[20px] sm:py-[12px]">
              <button
              
                className="rounded-lg bg-[#685BC7] text-white text-sm font-semibold px-7 py-2"
              >
                Update Password
              </button>
            </section>
          </div>
        </div>
      </div>

      {Open ? <DeletePopup setOpen={setOpen} /> : null}
    </div>
  );
};

export default SettingTwo;

