'use client';

import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const users = [
  {
    name: "Neil Sims",
    email: "neil.sims@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    Amount: "₵250.42",
    PaymentMethod: "****3214",
    Payee: "Daniel Kolawole",
    Date: "Wed 14 Nov, 1:00pm",
    Status: "Successful"
  },
  {
    name: "Bonnie Green",
    email: "bonnie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    Amount: "₵250.42",
    PaymentMethod: "****3214",
    Payee: "Daniel Kolawole",
    Date: "Wed 14 Nov, 1:00pm",
    Status: "Successful"
  },
  {
    name: "Jese Leos",
    email: "jese@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    Amount: "₵250.42",
    PaymentMethod: "****3214",
    Payee: "Daniel Kolawole",
    Date: "Wed 14 Nov, 1:00pm",
    Status: "Successful"
  },
  {
    name: "Thomas Lean",
    email: "thomes@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    Amount: "₵250.42",
    PaymentMethod: "****3214",
    Payee: "Daniel Kolawole",
    Date: "Wed 14 Nov, 1:00pm",
    Status: "Successful"
  },
  {
    name: "Leslie Livingston",
    email: "leslie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    Amount: "₵250.42",
    PaymentMethod: "****3214",
    Payee: "Daniel Kolawole",
    Date: "Wed 14 Nov, 1:00pm",
    Status: "Successful"
  }
];

const Payments = () => {
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
        <ul className="flex flex-wrap items-center gap-3 sm:gap-6">
          <li className="text-[#6941C6] font-semibold text-[14px] bg-[#F9F5FF] px-3 py-2 rounded-[5px]">All</li>
          <li className="text-[#667085] font-semibold text-[14px]">Successful</li>
          <li className="text-[#667085] font-semibold text-[14px]">Pending</li>
          <li className="text-[#667085] font-semibold text-[14px]">Failed</li>
          <li className="text-[#667085] font-semibold text-[14px]">Refunded</li>
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
          <button className="flex items-center gap-2 px-4 py-2 border-[2px] border-[#EAECF0] rounded-[8px]">
            <Icon icon="bitcoin-icons:export-outline" width="20" height="20" className="text-[#344054]" />
            <span className="text-[#344054] font-semibold text-[14px]">Export</span>
          </button>
        </div>
      </div>

      
      <div className="w-full overflow-x-auto p-4 sm:p-6">
        <table className="min-w-[700px] w-full border border-[#EAECF0] text-sm text-left text-gray-500 bg-white rounded-[5px]">
          <thead className="text-xs text-[#475467] bg-gray-50 font-medium">
            <tr>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Payment Method</th>
              <th className="px-6 py-3">Payee</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b border-[#EAECF0]">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="appearance-none w-4 h-4 border-2 border-[#D0D5DD] rounded-[4px] checked:bg-[#D0D5DD] checked:border-[#D0D5DD]"
                    />
                    <img className="w-10 h-10 rounded-full" src={user.img} alt={user.name} />
                    <div>
                      <div className="text-[#101828] font-medium">{user.name}</div>
                      <div className="text-gray-500 text-sm">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">{user.Amount}</td>
                <td className="px-6 py-4 text-[#101828]">{user.PaymentMethod}</td>
                <td className="px-6 py-4 text-[#475467]">{user.Payee}</td>
                <td className="px-6 py-4 text-[#475467]">{user.Date}</td>
                <td className="px-6 py-4 text-[#475467]">{user.Status}</td>
                <td className="px-6 py-4 text-[#475467]">
                  <Icon icon="bi:three-dots-vertical" width="16" height="16" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
