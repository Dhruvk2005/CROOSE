'use client'
import React, { useState, useEffect } from 'react'
import { Icon } from "@iconify/react";
import Customerpopup from '../../components/customerpopup';
import { fetchCustomerStatistics, getCustomer } from '@/app/Apis/publicapi';

interface SimplifiedCustomer {
    id: number;
    name: string;
    whatsapp_number: string;
    address: string;
    pin_code: number;
    createdAt: string;
    updatedAt: string;
}

const Customers = () => {
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState<SimplifiedCustomer[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const data = await getCustomer();
                console.log("API response:", data);
                const customerArray = data?.data || [];
                const simplified: SimplifiedCustomer[] = customerArray.map((item: any) => ({
                    id: item.id,
                    name: item.name,
                    whatsapp_number: item.whatsapp_number,
                    address: item.address,
                    pin_code: item.pin_code,
                    createdAt: item.created_at,
                    updatedAt: item.updated_at,
                }));
                setUsers(simplified);
            } catch (err) {
                console.error("Failed to load customers", err);
            }
        };
        fetchCustomers();
    }, []);

    // Pagination logic
    const indexOfLastUser = currentPage * rowsPerPage;
    const indexOfFirstUser = indexOfLastUser - rowsPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(users.length / rowsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };


    const [customerStatistic, setCustomerStatistic] = useState<any>({});
    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                let res = await fetchCustomerStatistics()
                console.log("Customer Statistics:", res)
                setCustomerStatistic(res)
                


            } catch (err) {
                console.error("Error in Customers component:", err);
            }
        }
        fetchCustomers()
    },[])

    return (
        <div>
            {/* Header */}
            <div className='w-full h-[64px] flex justify-between items-center border-b border-[#EAECF0]'>
                <span className='font-bold text-[20px] pl-[30px] text-[#121217]'>Customers</span>
                <div className='mr-[20px]'>
                    <li className='flex w-[98px] gap-[23px] justify-center items-center'>
                        <div className='w-[46px] flex gap-[10px] border-r-[2px] border-[#F2F4F7]'>
                            <Icon icon="mynaui:search" width="24" height="24" style={{ color: '#000' }} />
                        </div>
                        <div className='w-[16px] flex gap-[10px]'>
                            <Icon icon="carbon:notification" width="20" height="20" style={{ color: '#000' }} />
                        </div>
                    </li>
                </div>
            </div>

            <div>
                <div className='w-full h-auto' >
                    <div className='w-full h-full flex flex-wrap flex-col gap-[64px] ' >
                        <div className='w-full h-auto p-[32px] flex flex-col gap-[24px] '>
                            <div className='flex items-center ' >
                                <div className='flex flex-col gap-[8px] w-full h-auto ' >
                                    <p className='font-Inter tetx-[16px] font-semibold text-[#101828] ' >Customer Insights</p>
                                    <p className='text-[#475467] font-Inter font-normal text-[14px]' >Dive deep into who your customers are</p>

                                </div>

                            </div>
                            <ul className=' w-[full] flex flex-wrap gap-[16px] ' >
                                <li className='w-full  lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
                                    <p className='text-[#475467] text-[14px] font-medium font-Inter' >New Customers</p>
                                    <div className='flex items-center gap-[16px] justify-between  '>
                                        <p className='font-semibold text-[#101828] text-[30px] ' >{customerStatistic.new_customers
}</p>
                                        <img className='w-[71px] ' src={"/100.png"} alt='badge' />
                                    </div>
                                </li>
                                <li className='w-full  lg:w-[32.1%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
                                    <p className='text-[#475467] text-[14px] font-medium font-Inter' >Returning Customers</p>
                                    <div className='flex items-center gap-[16px] justify-between  '>
                                        <p className='font-semibold text-[#101828] text-[30px] ' >{customerStatistic.returning_customer}</p>
                                        <img className='w-[71px] ' src={"/100.png"} alt='badge' />
                                    </div>
                                </li>
                                <li className='w-full  lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
                                    <p className='text-[#475467] text-[14px] font-medium font-Inter' >Return Customer Rate</p>
                                    <div className='flex items-center gap-[16px] justify-between  '>
                                        <p className='font-semibold text-[#101828] text-[30px] ' >{customerStatistic.return_customer_rate}</p>
                                        <img className='w-[71px] ' src={"/90.png"} alt='badge' />
                                    </div>
                                </li>
                            </ul>
                            <ul className='flex flex-wrap gap-[16px]' >
                                <li className='w-full  lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
                                    <p className='text-[#475467] text-[14px] font-medium font-Inter' >Inactive Customers</p>
                                    <div className='flex items-center gap-[16px] justify-between  '>
                                        <p className='font-semibold text-[#101828] text-[30px] ' >{customerStatistic.inactive_customers}</p>
                                        <img className='w-[71px] ' src={"/35.png"} alt='badge' />
                                    </div>
                                </li>
                                <li className='w-full  lg:w-[32.1%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
                                    <p className='text-[#475467] text-[14px] font-medium font-Inter' >Dormant Customers</p>
                                    <div className='flex items-center gap-[16px] justify-between  '>
                                        <p className='font-semibold text-[#101828] text-[30px] ' >{customerStatistic.highest_order_value}</p>
                                        <img className='w-[71px] ' src={"/100.png"} alt='badge' />
                                    </div>
                                </li>
                                <li className='w-full  lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
                                    <p className='text-[#475467] text-[14px] font-medium font-Inter' >Average Customer Value</p>
                                    <div className='flex items-center gap-[16px] justify-between  '>
                                        <p className='font-semibold text-[#101828] text-[30px] ' >{customerStatistic.average_customer_value
}</p>
                                        <img className='w-[71px] ' src={"/100.png"} alt='badge' />
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className='p-[32px]'>
                <p className='font-semibold text-[#101828] text-[16px] mb-2'>Customer Insights</p>
                <p className='text-[#475467] text-[14px] mb-4'>All the details about your customers</p>

                <div className="overflow-x-auto rounded-[10px]">
                    <table className="min-w-[700px] w-full border border-[#EAECF0] text-sm text-left bg-white">
                        <thead className="text-xs text-[#475467] bg-[#F9FAFB] font-medium">
                            <tr>
                                <th className="px-6 py-3">Customer</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">Phone Number</th>
                                <th className="px-6 py-3">Address</th>
                                <th className="px-6 py-3">Pin Code</th>
                                <th className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUsers.map((user) => (
                                <tr key={user.id} className="border-b border-[#EAECF0]">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                className="appearance-none w-4 h-4 border-2 border-[#D0D5DD] rounded-[4px] checked:bg-[#D0D5DD]"
                                            />
                                            <div className="text-[#101828] font-medium">{user.name}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">Active</td>
                                    <td className="px-6 py-4 text-[#101828]">{user.whatsapp_number}</td>
                                    <td className="px-6 py-4 text-[#475467]">{user.address}</td>
                                    <td className="px-6 py-4 text-[#475467]">{user.pin_code}</td>
                                    <td className="px-6 py-4 text-[#475467]">
                                        <Icon icon="bi:three-dots-vertical" width="16" height="16" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-[20px] items-center mt-4">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-[#685BC7] text-white rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="text-[#344054] font-medium">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-[#685BC7] text-white rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Customer popup */}
            {open && <Customerpopup setOpen={setOpen} />}
        </div>
    )
}

export default Customers;
