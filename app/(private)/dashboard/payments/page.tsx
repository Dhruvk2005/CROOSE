'use client';

import { fetchPaymentApi } from '@/app/Apis/publicapi';
import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useEffect, useState } from 'react';

type Payment = {
  type: string;
  reference_id: string;
  amount: number;
  payment_origin?: string;
  payment_method: string;
  transaction_status: string;
  transaction_id: string;
};

const Payments = () => {
  const [payments, setPayments] = useState<Payment[]>([]); // <-- add type here
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");


    // Filter Logic
  const filteredPayments = payments.filter((payment) => {
    if (filter === "All") return true;
    if (filter === "Successful")
      return payment.transaction_status === "paid" || payment.transaction_status === "success";
    if (filter === "Pending") return payment.transaction_status === "pending";
    if (filter === "Failed") return payment.transaction_status === "failed";
    if (filter === "Refunded") return payment.transaction_status === "refunded";
    return true;
  });
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const data = await fetchPaymentApi(); // <-- use renamed import

        if (!data || !Array.isArray(data)) {
          setPayments([]);
          return;
        }

        const mappedData: Payment[] = data.map((item: any) => ({
          type: item.type,
          reference_id: item.reference_id,
          amount: item.amount,
          payment_origin: item.payment_origin || "N/A",
          payment_method: item.payment_method,
          transaction_status: item.transaction_status,
          transaction_id: item.transaction_id,
        }));

        setPayments(mappedData);
      } catch (err: any) {
        setError(err.message || "Error fetching payments");
      } finally {
        setLoading(false);
      }
    };
    fetchPayments();
  }, []);
  return (
    <div className="w-full flex flex-col">
     
      <div className="w-full h-[64px] flex justify-between items-center border-b border-[#EAECF0] px-4 sm:px-6">
        <h1 className="text-[18px] sm:text-[20px] font-bold text-[#121217]">Payments</h1>
        <div className="flex items-center gap-4">
          <Icon icon="mynaui:search" width="24" height="24" className="text-black" />
          <Icon icon="tabler:bell" width="24" height="24" className="text-black" />
        </div>
      </div>

      
      <div className="p-4 sm:p-6 flex flex-col gap-2">
        <h2 className="text-[#101828] text-[16px] sm:text-[18px] font-semibold">All Transactions</h2>
        <p className="text-[#475467] text-[14px] sm:text-[15px]">View a history of all payments and associated details</p>
      </div>

      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4 sm:px-6">
     <ul className="flex flex-wrap items-center gap-3 sm:gap-6 mb-4">
        {["All", "Successful", "Pending", "Failed", "Refunded"].map((status) => (
          <li
            key={status}
            onClick={() => setFilter(status)}
            className={`cursor-pointer font-semibold text-[14px] px-3 py-2 rounded-[5px] 
              ${
                filter === status
                  ? "text-[#6941C6] bg-[#F9F5FF]" // Active Tab
                  : "text-[#667085] bg-transparent" // Inactive Tab
              }`}
          >
            {status}
          </li>
        ))}
      </ul>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center border-[2px] border-[#EAECF0] bg-white px-3 py-2 rounded-[8px] w-full sm:w-auto max-w-[320px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none text-sm text-[#101828] placeholder-[#667085] bg-transparent"
            />
            <Icon icon="mynaui:search" width="20" height="20" className="text-[#344054]" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border-[2px] border-[#EAECF0] rounded-[8px]">
            <Icon icon="mynaui:filter-solid" width="20" height="20" className="text-[#667085]" />
            <span className="text-[#344054] font-semibold text-[14px]">Filters</span>
          </button>
          {/* <button className="flex items-center gap-2 px-4 py-2 border-[2px] border-[#EAECF0] rounded-[8px]">
            <Icon icon="bitcoin-icons:export-outline" width="20" height="20" className="text-[#344054]" />
            <span className="text-[#344054] font-semibold text-[14px]">Export</span>
          </button> */}
        </div>
      </div>

      <div className='w-full p-6' >
      
      <div className="w-full overflow-x-auto  border-2  border-[#EAECF0]  rounded-[10px]  ">
       <table className="min-w-full text-sm text-left border  text-gray-900 bg-white rounded-md overflow-hidden p-4">
        <thead className="bg-[#F9FAFB] text-[#475467] text-xs font-medium">  
           <tr>
    <th className="px-6 py-3">Type</th>
    <th className="px-6 py-3">Reference ID</th>
    <th className="px-6 py-3">Amount</th>
    <th className="px-6 py-3">Payment Origin</th>
    <th className="px-6 py-3">Payment Method</th>
    <th className="px-6 py-3">Transaction Status</th>
    <th className="px-6 py-3">Transaction ID</th>
    {/* <th className="px-6 py-3">Actions</th> */}
  </tr>
          </thead>
         <tbody>
  {filteredPayments.map((payment, index) => (
    <tr key={index} className="hover:bg-gray-50 border-b border-[#EAECF0]">
      <td className="px-6 py-4">{payment.type}</td>
      <td className="px-6 py-4">{payment.reference_id}</td>
      <td className="px-6 py-4">₵{payment.amount}</td>
      <td className="px-6 py-4">{payment.payment_origin || "N/A"}</td>
      <td className="px-6 py-4">{payment.payment_method}</td>
      <td className="px-6 py-4 capitalize">
      <span
  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border 
    ${
      payment.transaction_status === 'paid' || payment.transaction_status === 'success'
        ? 'bg-[#ECFDF3] text-[#027A48] border-[#D1FADF]' // Green
        : payment.transaction_status === 'pending'
        ? 'bg-[#FFFAEB] text-[#B54708] border-[#FEDF89]' // Yellow
        : 'bg-[#FEE2E2] text-[#B91C1C] border-[#FECACA]' // Optional: Red for failed
    }`}
>
  {payment.transaction_status}
</span>

      </td>
      <td className="px-6 py-4">{payment.transaction_id}</td>
      {/* <td className="px-6 py-4 text-[#475467]">
        <Icon icon="bi:three-dots-vertical" width="16" height="16" />
      </td> */}
    </tr>
  ))}
</tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default Payments;
