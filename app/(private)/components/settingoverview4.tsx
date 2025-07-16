'use client';

import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useModal } from '@/app/context/modelcontext';

const Setting4 = ({ closeModal, backToSetting1, closeSetting4 }: any) => {
  // Tab data
  const tabs = [
    { name: "Profile", active: false },
    { name: "Security", active: false },
    { name: "Billing", active: true },
  ];

  // Billing history data
  const billingHistory = [
    { date: "Apr, 2025", amount: "GH₵ 50.00" },
    { date: "Mar 8, 2025", amount: "GH₵ 50.00" },
    { date: "Feb 8, 2025", amount: "$5.00" },
    { date: "Jan 8, 2025", amount: "GH₵ 50.00" },
    { date: "Dec 8, 2025", amount: "$5.00" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-30">
      <div className="relative w-full max-w-[717px] h-[671px] bg-white rounded-[16px] border border-[#E2E4E84D]">
        
        {/* Header */}
        <section className="w-full flex justify-between items-center border-b border-[#E5E5E5] px-4 py-2">
          <span className="font-inter font-semibold text-[18px] sm:text-[20px] text-[#111015]">
            Settings
          </span>
          <span
            onClick={() => {
              console.log("close clicked");
              closeModal();
            }}
            className="w-9 h-9 rounded-full border flex items-center justify-center border-[#F1F2F3] bg-[#F6F8FA] cursor-pointer"
          >
            <Icon icon="iconamoon:close-bold" width="24" height="24" style={{ color: "#000" }} />
          </span>
        </section>

        {/* Content */}
        <section className="w-full px-4 py-6 sm:px-[64px] bg-white h-[611px] sm:py-[32px] flex flex-col gap-8">
          
          {/* Tabs */}
          <div className="w-full flex flex-col gap-6">
            <div className="w-full flex flex-wrap items-center gap-2 sm:gap-5">
              <div className="flex flex-wrap gap-2 w-full">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`rounded-sm text-sm px-3 py-2 ${
                      tab.active ? "bg-[#F9F5FF] w-[131px]" : ""
                    }`}
                  >
                    <span
                      className={`font-semibold text-[14px] ${
                        tab.active ? "text-[#685BC7]" : "text-[#667085]"
                      }`}
                    >
                      {tab.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="text-[18px] font-inter font-semibold leading-[28px] text-[#101828]">
              Billing Details
            </div>
          </div>

          {/* Billing Sections */}
          <section className="h-[386px] flex flex-col gap-[40px] w-full">
            
            {/* Active Plan */}
            <section className="w-full flex flex-col gap-[8px]">
              <span className="font-medium text-[10px] leading-[18px] tracking-[0.02em] text-[#667085]">
                ACTIVE PLAN
              </span>
              <div className="flex flex-col gap-[4px]">
                <span className="font-bold text-[20px] leading-[30px] text-[#101828]">
                  $3.00 per month
                </span>
                <span className="text-[12px] leading-[18px] text-[#101828]">
                  Next billing date: May 8, 2024
                </span>
              </div>
            </section>

            {/* Payment Method */}
            <section className="w-full flex flex-col gap-[8px]">
              <span className="font-medium text-[10px] leading-[18px] tracking-[0.02em] text-[#667085]">
                PAYMENT METHOD
              </span>
              <div className="flex justify-between">
                <div className="flex items-center gap-[4px]">
                  <span className="text-[12px] text-[#101828]">••••</span>
                  <span className="text-[12px] text-[#101828]">8593</span>
                  <span className="w-[34px] h-[24px] border flex justify-center items-center rounded-[5px] border-[#EAECF0] bg-white">
                    <img src="/Mastercard.png" className="w-[23px] h-[14px]" alt="Mastercard" />
                  </span>
                  <span className="text-[12px] text-[#101828]">Expires 03/2026</span>
                </div>
                <span className="w-[24px] h-[24px] flex justify-center items-center">
                  <Icon icon="ph:dots-three-outline-fill" width="16" height="16" className="text-[#667085]" />
                </span>
              </div>
            </section>

            {/* Billing History */}
            <section className="w-full flex flex-col gap-[8px]">
              <span className="font-medium text-[10px] leading-[18px] tracking-[0.02em] text-[#667085]">
                BILLING HISTORY
              </span>
              {billingHistory.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <div className="flex items-center gap-[10px]">
                    <span className="text-[12px] text-[#101828]">{item.date}</span>
                    <span className="font-bold text-[12px]">{item.amount}</span>
                    
                    <span className="px-2 py-0.5 rounded-full border border-[#ABEFC6] bg-[#ECFDF3] text-[#067647] text-[12px] font-medium">
                      Paid
                    </span>
                  </div>
                  <span className="w-[24px] h-[24px] flex justify-center items-center">
                    <Icon icon="iconamoon:arrow-top-right-1-bold" width="16" height="16" className="text-[#667085]" />
                  </span>
                </div>
              ))}
            </section>

          </section>
        </section>
      </div>
    </div>
  );
};

export default Setting4;
