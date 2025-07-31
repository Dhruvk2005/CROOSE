'use client';

import React, { useEffect, useState } from 'react';
import { Icon } from "@iconify/react";
import Navbar from "../../components/Navbar";
import {
    fetchOrders,
    OrderStatistics,
    ordersApi,
} from '@/app/Apis/publicapi';

const OrdersTable = () => {
    const [orders, setOrders] = useState<any>([]);
    const [OrdersStatistics, setOrdersStatistics] = useState<any>({});

    
    useEffect(() => {
        const fetchOrderStatistics = async () => {
            try {
                const res = await OrderStatistics({});
                setOrdersStatistics(res?.data || {});
                console.log("Fetched order stats:", res);
            } catch (err) {
                console.error("Failed to fetch order stats:", err);
            }
        };

        fetchOrderStatistics();
    }, []);

    
    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await fetchOrders();
                console.log('yoooo data:',res)
                if (res) {
                    setOrders(res);
                } else {
                    console.error("fetchOrders returned unexpected structure:", res);
                }
            } catch (err) {
                console.error("Failed to fetch orders:", err);
            }
        };

        getOrders();
    }, []);

    // Handle status update
    const handleOrderStatusUpdate = async (orderId: any) => {
        const payload = {
            orderId,
            status: 'delivered',
        };

        try {
            const res = await ordersApi(payload);
            if (res?.data?.success) {
                console.log("Order status updated:", res);
                // Refresh the order list
                const refreshed = await fetchOrders();
                if (refreshed?.data?.data) {
                    setOrders(refreshed.data.data);
                }
            } else {
                console.error("Failed to update order status");
            }
        } catch (err) {
            console.error("Order update error:", err);
        }
    };

    return (
        <div>
            <Navbar heading="Orders" />

            <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex justify-between items-start px-8">
                    <div>
                        <h2 className="text-xl font-semibold">Orders</h2>
                        <p className="text-sm text-gray-500">
                            Dive deep into your orders and manage them efficiently.
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="w-full flex flex-wrap gap-6 px-8">
                    <div className="w-full lg:w-[31%] border rounded-[12px] border-[#EAECF0] p-[24px]">
                        <p className="text-[#475467] text-[14px] font-medium">New Orders</p>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-[#101828] text-[30px]">
                                {OrdersStatistics?.total_new_orders || 0}
                            </p>
                            <div className="flex items-center text-[#067647] bg-[#ECFDF3] border border-[#ABEFC6] px-2 py-1 rounded-full text-sm">
                                <Icon icon="jam:arrow-up" className="mr-1" />
                                {OrdersStatistics?.total_new_orders_growth || 0}
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[32%] border rounded-[12px] border-[#EAECF0] p-[24px]">
                        <p className="text-[#475467] text-[14px] font-medium">Total Orders</p>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-[#101828] text-[30px]">
                                {OrdersStatistics?.total_orders || 0}
                            </p>
                            <div className="flex items-center text-[#B42318] bg-[#FEF3F2] border border-[#FECDCA] px-2 py-1 rounded-full text-sm">
                                <Icon icon="charm:arrow-down" className="mr-1" />
                                {OrdersStatistics?.total_orders_growth || 0}
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[32%] border rounded-[12px] border-[#EAECF0] p-[24px]">
                        <p className="text-[#475467] text-[14px] font-medium">Cancelled Orders</p>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-[#101828] text-[30px]">
                                {OrdersStatistics?.cancelled_orders || 0}
                            </p>
                            <div className="flex items-center text-[#B42318] bg-[#FEF3F2] border border-[#FECDCA] px-2 py-1 rounded-full text-sm">
                                <Icon icon="charm:arrow-down" className="mr-1" />
                                {OrdersStatistics?.cancelled_orders_growth || 0}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Orders Table */}
                <div className="overflow-x-auto px-8">
                    <table className="min-w-full  border border-gray-200 text-sm text-left">
                        <thead className="bg-[#F9FAFB] text-[#475467] font-medium">
                            <tr>
                                <th className="px-4 py-3 border">ID</th>
                                <th className="px-4 py-3 border">Space</th>
                                <th className="px-4 py-3 border">Customer</th>
                                <th className="px-4 py-3 border">Phone</th>
                                <th className="px-4 py-3 border">Product</th>
                                <th className="px-4 py-3 border">Amount</th>
                                <th className="px-4 py-3 border">Payment</th>
                                <th className="px-4 py-3 border">Date</th>
                                <th className="px-4 py-3 border">Status</th>
                                <th className="px-4 py-3 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? (
                                orders.map((order: any) => (
                                    <tr key={order.id} className="border-t hover:bg-gray-50">
                                        <td className="px-4 py-2">{order.id}</td>

                                        <td className="px-4 py-2">{order.space_name}</td>
                                        <td className="px-4 py-2">{order.customer_name}</td>
                                        <td className="px-4 py-2">{order.customer_number}</td>
                                        <td className="px-4 py-2">{order.product_name}</td>
                                        <td className="px-4 py-2">₹{Number(order.order_amount).toLocaleString()}</td>
                                        <td className="px-4 py-2 capitalize">{order.payment_status}</td>
                                        <td className="px-4 py-2">{order.order_date}</td>
                                        <td className="px-4 py-2 capitalize">{order.order_status}</td>
                                        <td className="px-4 py-2">
                                            <button
                                                onClick={() => handleOrderStatusUpdate(order.id)}
                                                className="px-3 py-1 bg-[#685BC7] text-white rounded text-xs"
                                            >
                                                Mark as Delivered
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td className="px-4 py-6 text-center text-gray-400">
                                        No orders available.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrdersTable;
