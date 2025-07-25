'use client';

import React, { useEffect, useState } from 'react';
import { appointmentList, updateAppointmentStatus } from '@/app/Apis/publicapi';
import { Icon } from "@iconify/react";
import Navbar from './component/Navbar';
import { DateSelectButton } from '../../components/DateSelectButton';

const AppointmentTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [serviceFilter, setServiceFilter] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formDate, setDate] = useState<{ appointmentTime: string }>({
    appointmentTime: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const defaultTypography: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0',
    color: '#475467',
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appointmentTime: '',
    service: 'Dental Cleaning',
    status: 'pending',
    notes: ''
  });

  const statusColorMap: any = {
    confirmed: 'bg-green-500',
    pending: 'bg-yellow-400',
    cancelled: 'bg-red-500',
    completed: 'bg-blue-500',
  };

  const fetchAppointments = async () => {
    try {
      const res = await appointmentList();
      const formatted = res.data.map((appt: any) => ({
        ...appt,
        statusColor: statusColorMap[appt.status?.toLowerCase()] || 'bg-gray-300',
      }));
      setAppointments(formatted);
    } catch (err) {
      console.log('Error fetching appointments:', err);
    }
  };

  const handleStatusUpdate = async (id: number, newStatus: string) => {
    const current: any = appointments.find((appt: any) => appt.id === id);
    if (current?.status === newStatus) return;

    try {
      await updateAppointmentStatus(id, newStatus);
      const updatedAppointments: any = appointments.map((appt: any) =>
        appt.id === id
          ? {
              ...appt,
              status: newStatus,
              statusColor: statusColorMap[newStatus.toLowerCase()] || 'bg-gray-300',
            }
          : appt
      );
      setAppointments(updatedAppointments);
    } catch (err) {
      console.error('Failed to update appointment status', err);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const filteredAppointments = appointments.filter((appt: any) => {
    const searchTerm = search.toLowerCase();
    const matchesSearch =
      appt.customer_name?.toLowerCase().includes(searchTerm) ||
      appt.customer_number?.toLowerCase().includes(searchTerm) ||
      appt.service_name?.toLowerCase().includes(searchTerm);

    const matchesStatus = statusFilter ? appt.status?.toLowerCase() === statusFilter.toLowerCase() : true;
    const matchesService = serviceFilter ? appt.service_name?.toLowerCase() === serviceFilter.toLowerCase() : true;

    const apptDate = new Date(appt.date);
    const matchesDateFrom = dateFrom ? apptDate >= new Date(dateFrom) : true;
    const matchesDateTo = dateTo ? apptDate <= new Date(dateTo) : true;

    return matchesSearch && matchesStatus && matchesService && matchesDateFrom && matchesDateTo;
  });

  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);
  const paginatedAppointments = filteredAppointments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const statusOptions = [
    { value: 'pending', label: '🟡 Pending' },
    { value: 'confirmed', label: '🟢 Confirmed' },
    { value: 'cancelled', label: '🔴 Cancelled' },
    { value: 'completed', label: '🔵 Completed' },
  ];

  return (
    <div>
      <Navbar />
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-start px-8">
          <div>
            <h2 className="text-xl font-semibold">Appointments</h2>
            <p className="text-sm text-gray-500">Dive deep into who your customers are</p>
          </div>
          <div className='border-none'>
            <DateSelectButton appointmentTime={formData.appointmentTime} setDate={setDate} />
          </div>
        </div>


         <div className='w-full h-full flex flex-wrap flex-col gap-[64px]  ' >
        <div className='w-full h-auto p-[32px] flex flex-col gap-[24px] '>

          <ul className=' w-[full] flex flex-wrap gap-[16px] ' >
            <li className='w-full  lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
              <p className='text-[#475467] text-[14px] font-medium font-Inter' >New Appointments</p>
              <div className='flex items-center gap-[16px] justify-between  '>
                <p className='font-semibold text-[#101828] text-[30px] ' >12</p>
                <img className='w-[71px] ' src={"/100.png"} alt='badge' />
              </div>
            </li>



            <li className='w-full  lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
              <p className='text-[#475467] text-[14px] font-medium font-Inter' >Total Appointments</p>
              <div className='flex items-center gap-[16px] justify-between  '>
                <p className='font-semibold text-[#101828] text-[30px] ' >50</p>
                <img className='w-[71px] ' src={"/100.png"} alt='badge' />
              </div>
            </li>

            <li className='w-full  lg:w-[32.2%] border-[2px] rounded-[12px] border-[#EAECF0] p-[24px] ' >
              <p className='text-[#475467] text-[14px] font-medium font-Inter' >Canceled Appointments</p>
              <div className='flex items-center gap-[16px] justify-between  '>
                <p className='font-semibold text-[#101828] text-[30px] ' >$28</p>

                <img className='w-[71px] ' src={"/35.png"} alt='badge' />
              </div>
            </li>
          </ul>


        </div>


        {/* <div className="p-6">
      <div className="flex justify-between items-center border-b border-[#EAECF0] pb-4">
       <h2 className="text-xl font-semibold text-[#121217]">Appointment</h2> */}
        {/* <button
          onClick={() => setShowModal(true)}
          className="border px-4 py-2 rounded-md text-sm font-medium text-white bg-[#685BC7] hover:bg-[#5a4bb3]"
        >
          Create Appointment
        </button> */}
      </div>

        <div className="flex flex-wrap gap-2 justify-between mb-4 px-8">
          <div className="flex gap-2">
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border-2  border-[#EAECF0] px-2 py-1 rounded">
              <option value="">All Status</option>
              {statusOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <select value={serviceFilter} onChange={(e) => setServiceFilter(e.target.value)} className="border-2  border-[#EAECF0] px-2 py-1 rounded">
              <option value="">All Services</option>
              <option value="Dental Cleaning">Dental Cleaning</option>
              <option value="Eye Checkup">Eye Checkup</option>
              <option value="Skin Consultation">Skin Consultation</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="border-2  border-[#EAECF0] px-2 py-1 rounded w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="mt-6 overflow-x-auto bg-white border border-[#EAECF0] rounded-lg">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3">Space Name</th>
                <th className="px-4 py-3">Customer Name</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Phone Number</th>
                <th className="px-4 py-3">Service Name</th>
                <th className="px-4 py-3">Appointment Time</th>
              </tr>
            </thead>
            <tbody>
              {paginatedAppointments.map((appt: any) => (
                <tr key={appt.id} className="hover:bg-gray-50 border-b">
                  <td className="px-4 py-3" style={defaultTypography}>{appt.space_name || "_"}</td>
                  <td className="px-4 py-3" style={defaultTypography}>{appt.customer_name}</td>
                  <td className="px-4 py-3">
                    <select
                      value={appt.status}
                      onChange={(e) => handleStatusUpdate(appt.id, e.target.value)}
                      className="border p-1 rounded text-sm"
                    >
                      {statusOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3" style={defaultTypography}>{appt.customer_number}</td>
                  <td className="px-4 py-3" style={defaultTypography}>{appt.service_name || '-'}</td>
                  <td className="px-4 py-3" style={defaultTypography}>{appt.date || '-'}</td>
                </tr>
              ))}
              {paginatedAppointments.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-400">No appointments found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {/* <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-[#685BC7]   text-white rounded disabled:bg-gray-300"
          >
            First
          </button> */}
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-[#685BC7]  text-white rounded disabled:bg-gray-300"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`px-3 py-1 rounded ${currentPage === number ? 'bg-[#685BC7]  text-white' : 'bg-gray-200'}`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-[#685BC7] text-white rounded disabled:bg-gray-300"
          >
            Next
          </button>
          {/* <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-[#685BC7]  text-white rounded disabled:bg-gray-300"
          >
            Last
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;
