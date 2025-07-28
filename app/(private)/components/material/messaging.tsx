'use client';
import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import Spacenav from '../spacenav';

const users = [
  {
    text: "Don't miss out on our exclusive discounts just for you!",
    Dates: 'Wed 14 Nov, 1:00pm',
    frequency: 'Daily',
    status: 'Sent',
    icon: <Icon icon="uil:arrow-up" width="20" height="20" />,
    target: 'Everyone',
  },
  {
    text: "Don't miss out on our exclusive discounts just for you!",
    Dates: 'Wed 14 Nov, 1:00pm',
    frequency: 'Once',
    status: 'Sent',
    icon: <Icon icon="uil:arrow-up" width="20" height="20" />,
    target: 'Everyone',
  },
  {
    text: 'Hey customer, we have new product availa...',
    Dates: 'Wed 14 Nov, 1:00pm',
    frequency: 'Weekly',
    status: 'Sent',
    icon: <Icon icon="uil:arrow-up" width="20" height="20" />,
    target: 'Everyone',
  },
  {
    text: 'Hey customer, we have new product availa...',
    Dates: 'Wed 14 Nov, 1:00pm',
    frequency: 'Monthly',
    status: 'Sent',
    icon: <Icon icon="uil:arrow-up" width="20" height="20" />,
    target: 'Recent customers',
  },
  {
    text: 'Check out our latest arrivals in the store today!',
    Dates: 'Wed 14 Nov, 1:00pm',
    frequency: 'Monthly',
    status: 'Scheduled',
    target: 'Recent customers',
  },
  {
    text: 'Join us for a special event this weekend with giveaways!',
    Dates: 'Wed 14 Nov, 1:00pm',
    frequency: 'Monthly',
    status: 'Scheduled',
    target: 'Recent customers',
  },
  {
    text: 'We appreciate your loyalty and have a surprise waiting for you!',
    Dates: 'Wed 14 Nov, 2:00pm',
    frequency: 'Monthly',
    status: 'Scheduled',
    target: 'Recent customers',
  },
];
const count = [
  { num: '1' },
  { num: '2' },
  { num: '3' },
  { num: '...' },
  { num: '8' },
  { num: '9' },
  { num: '10' },
];

const page = () => {
  return (
    <div className="flex flex-col  gap-2">
      <div>
        <Spacenav />
      </div>
      <section className="flex flex-col items-center gap-2 ">
        <section className="top-[88px] left-[306px] w-[95%] h-[52px] opacity-100 flex gap-[0px]">
          <div className="w-[75%]  h-[52px] opacity-100 flex-col flex gap-[4px]">
            <span className="font-Inter font-semibold text-[18px] leading-[28px] text-[#101828]">
              Broadcast Management
            </span>
            <span className="font-Inter font-normal text-[14px] leading-[20px] text-[#475467]">
              View a history of all payments and associated details
            </span>
          </div>
          <div className="w-[25%] flex flex-row  h-[52px] justify-end   opacity-100  gap-[8px]">
            <div className="w-[135px] h-[36px] opacity-100 flex items-center  bg-[#685BC7] gap-[10px] px-[16px] py-[8px] rounded-lg">
              <span className="font-Inter font-semibold text-sm leading-5 text-[#FFFFFF] text-center">
                New Broadcast
              </span>
            </div>
            <div className="w-[135px] h-[36px] opacity-100 flex items-center bg-[#F1F0FA] gap-[10px] px-[16px] py-[8px] rounded-lg">
              <span className="font-Inter font-semibold text-sm leading-5 text-[#685BC7] text-center">
                Send Message
              </span>
            </div>
          </div>
        </section>
        <div className="w-[95%] overflow-x-auto border-2 border-[#EAECF0] rounded-[10px]">
          <table className="min-w-[700px] w-full  border-[#EAECF0] text-sm text-left text-gray-500 bg-white rounded-[10px]">
            <thead className="text-xs text-[#475467] font-Inter rounded-[10px] bg-gray-50 font-medium">
              <tr>
                <th className="px-6 py-3">Content</th>
                <th className="px-6 py-3">Date Schedule</th>
                <th className="px-6 py-3">Frequency</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Target</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b rounded-[10px] border-[#EAECF0]">
                  <td className="px-6 py-4 w-fit m-w-[420px] whitespace-wrap">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 border-2 border-[#D0D5DD] rounded-[4px] checked:bg-[#D0D5DD] checked:border-[#D0D5DD]"
                      />

                      <div>
                        <div className="text-[#101828] font-Inter font-medium text-[14px] leading-[20px]">
                          {user.text}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{user.Dates}</td>
                  <td className="px-6 py-4 text-[#475467]">{user.frequency}</td>
                  <td className="px-6 py-4 text-[#475467]">
                    <div
                      className={`inline-flex w-fit items-center border gap-[0px] rounded-full font-inter font-semibold text-[12px] leading-[18px]
      ${
        user.status === 'Scheduled'
          ? 'bg-[#F9FAFB] text-[#344054] border-[#EAECF0]'
          : user.status === 'Sent'
            ? 'bg-[#ECFDF3] text-[#067647] pl-0 border-[#ABEFC6]'
            : 'bg-gray-100 text-gray-600 pl-0 border-gray-300'
      }`}
                    >
                      <span className=" h-full  flex items-center justify-center pl-[0px]">
                        {user.icon}
                      </span>

                      <span className="px-2 py-[2px] whitespace-wrap text-center">
                        {user.status}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-[#475467]">
                    <div
                      className={`inline-flex w-fit items-center border gap-[0px] rounded-full font-inter font-semibold text-[12px] leading-[18px]
      ${
        user.target === 'Everyone'
          ? 'bg-[#EFF8FF] text-[#175CD3] border-[#B2DDFF]'
          : user.target === 'Recent customers'
            ? 'bg-[#FEF6EE] text-[#B93815] pl-0 border-[#F9DBAF]'
            : ''
      }`}
                    >
                      <span className="px-2 py-[2px]"> {user.target}</span>{' '}
                    </div>
                  </td>

                  {/* <td className="px-6 py-4 text-[#475467]">{user.Status}</td> */}
                  <td className="px-6 py-4 text-[#475467]">
                    <Icon icon="bi:three-dots-vertical" width="16" height="16" />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={7} className="px-6 py-4">
                  <div className="flex justify-between items-center w-full">
                    {/* Left Button */}
                    <div className="">
                      <button className="px-4 py-2 bg-[#F2F4F7] text-sm text-[#344054] rounded-md hover:bg-[#E4E7EC] flex gap-2">
                        <Icon icon="meteor-icons:arrow-left" width="20" height="20" />
                        Previous
                      </button>
                    </div>

                    {/* Center Count */}
                    <span className="max-w-[292px] max-h-[40px] flex rotate-0 opacity-100 gap-[2px]">
                      {count.map((counts, index) => (
                        <div
                          key={index}
                          className={`h-[40px] w-[40px] text-center flex justify-center items-center bg-[#F9FAFB] 
        ${index === 0 ? 'text-[#182230]' : 'text-[#475467]'}`}
                        >
                          {counts.num}
                        </div>
                      ))}
                    </span>

                    {/* Right Button */}
                    <button className="px-4 py-2 bg-[#F2F4F7] text-sm text-[#344054] rounded-md hover:bg-[#E4E7EC] flex gap-2">
                      Next
                      <Icon icon="meteor-icons:arrow-right" width="20" height="20" />
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </div>
  );
};

export default page;
