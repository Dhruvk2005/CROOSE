'use client';

import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

const users = [
  {
    name: "Neil Sims",
    email: "neil.sims@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    status: "Online",
    statusColor: "bg-green-500",
    phone: "0241763214",
    totalSpent: "$1,250",
    visits: 8,
    lastTransaction: "Wed 14 Nov, 1:00pm"
  },
  {
    name: "Bonnie Green",
    email: "bonnie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    status: "Online",
    statusColor: "bg-green-500",
    phone: "0241763214",
    totalSpent: "$980",
    visits: 5,
    lastTransaction: "Wed 14 Nov, 1:00pm"
  },
  {
    name: "Jese Leos",
    email: "jese@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    status: "Online",
    statusColor: "bg-green-500",
    phone: "0241763214",
    totalSpent: "$1,100",
    visits: 7,
    lastTransaction: "Wed 14 Nov, 1:00pm"
  },
  {
    name: "Thomas Lean",
    email: "thomes@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    status: "Online",
    statusColor: "bg-green-500",
    phone: "0241763214",
    totalSpent: "$1,480",
    visits: 10,
    lastTransaction: "Wed 14 Nov, 1:00pm"
  },
  {
    name: "Leslie Livingston",
    email: "leslie@flowbite.com",
    img: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    status: "Offline",
    statusColor: "bg-red-500",
    phone: "0241763214",
    totalSpent: "$700",
    visits: 4,
    lastTransaction: "Wed 14 Nov, 1:00pm"
  }
];

const UserTable = () => {
  return (
    <div className="relative overflow-x-auto p-[30px] rounded-[5px]  border-black shadow-md sm:rounded-lg">
      <table className="w-full border-[2px] rounded-[5px] border-[#EAECF0] text-sm text-left text-gray-500">
        <thead className="text-xs  text-gray-700  bg-gray-50">
          <tr>
            <th className="px-6 font-medium text-[14px] font-Inter text-[#475467] py-3">Customer</th>
            <th className="px-6 font-medium text-[14px] font-Inter text-[#475467] py-3">Status</th>
            <th className="px-6 font-medium text-[14px] font-Inter text-[#475467] py-3">Phone Number</th>
            <th className="px-6 font-medium text-[14px] font-Inter text-[#475467] py-3">Total Spent</th>
            <th className="px-6 font-medium text-[14px] font-Inter text-[#475467] py-3">No of Visits</th>
            <th className="px-6 font-medium text-[14px] font-Inter text-[#475467] py-3">Date of Last Transaction</th>
            <th className="px-6 font-medium text-[14px] font-Inter text-[#475467] py-3"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="bg-white border-b-2 border-b-[#EAECF0]">
              {/* Customer */}
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex gap-[5px] items-center">
                    <input className=' appearance-none border-[2px] border-[#D0D5DD] ' type='checkbox' />
                  <img className="w-10 h-10 rounded-full" src={user.img} alt={user.name} />
                  <div className="ps-3">
                    <div className="text-base font-semibold text-[#101828]">{user.name}</div>
                    <div className="font-normal text-gray-500">{user.email}</div>
                  </div>
                </div>
              </td>

              {/* Status */}
              <td className="px-6 py-4">
                <div className="flex items-center">
                 
                  {user.status}
                </div>
              </td>

              {/* Phone Number */}
              <td className="px-6 py-4 text-[#101828]">{user.phone}</td>

              {/* Total Spent */}
              <td className="px-6 py-4 text-[#475467]">{user.totalSpent}</td>

              {/* No of Visits */}
              <td className="px-6 py-4 text-[#475467]">{user.visits}</td>

              {/* Date of Last Transaction */}
              <td className="px-6 py-4 text-[#475467]">{user.lastTransaction}</td>

              {/* More Options Icon */}
              <td className="px-6 py-4 text-[#475467]">
                <Icon icon="bi:three-dots-vertical" width="16" height="16" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
