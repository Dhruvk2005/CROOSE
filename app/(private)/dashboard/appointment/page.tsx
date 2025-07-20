'use client';
// import { formatDbDate } from '@/app/(private)/utils/date';
import React, { useEffect, useState, useRef } from 'react';
import { appointmentList, updateAppointmentStatus } from '@/app/Apis/publicapi';
import { Calendar, ArrowUpRight, ArrowDownRight, Filter, Plus, Search, Download } from "lucide-react";
import { DateSelectButton } from '../../components/DateSelectButton';
import { Icon } from "@iconify/react";
import { HiOutlineDotsVertical } from "react-icons/hi";

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const payload = {
        customer_name: formData.name,
        customer_number: formData.phone,
        service_name: formData.service,
        date: formData.appointmentTime,
        status: formData.status,
        notes: formData.notes,
      };

      await fetchAppointments();
      setShowModal(false);
      setFormData({
        name: '',
        phone: '',
        appointmentTime: '',
        service: 'Dental Cleaning',
        status: 'pending',
        notes: ''
      });
    } catch (err) {
      console.log('Failed to create appointment:', err);
    }
  };

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

  const statusOptions = [
    { value: 'pending', label: '🟡 Pending' },
    { value: 'confirmed', label: '🟢 Confirmed' },
    { value: 'cancelled', label: '🔴 Cancelled' },
    { value: 'completed', label: '🔵 Completed' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-start px-8">
        <div>
          <h2 className="text-xl font-semibold">Appointments</h2>
          <p className="text-sm text-gray-500">Dive deep into who your customers are</p>
        </div>
        <div className='border-none' >
        <DateSelectButton


          appointmentTime={formData.appointmentTime}
          setDate={setDate}
        />
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

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <h3 className="text-lg font-semibold mb-4">New Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" required placeholder="Customer Name" className="w-full border p-2 rounded-md"
                value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <input type="text" required placeholder="Phone Number" className="w-full border p-2 rounded-md"
                value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />


              {/* DateTime input */}
              <select className="w-full border p-2 rounded-md"
                value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                <option>Dental Cleaning</option>
                <option>Eye Checkup</option>
                <option>Skin Consultation</option>
              </select>
              <select className="w-full border p-2 rounded-md"
                value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
                {statusOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <textarea placeholder="Notes" className="w-full border p-2 rounded-md"
                value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })}></textarea>
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-200 rounded-md">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-[#685BC7] text-white rounded-md">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}



      <div className="flex flex-wrap gap-2 justify-between mb-4 ">
        <h3 className="text-lg font-semibold mb-4 px-8">Appointments</h3>
        <ul className='w-full flex  items-center justify-between px-8' >
          <li className=' w-full gap-[12px] flex items-center ' >
            <button className='px-[14px] py-[10px] flex gap-[4px] border-[2px] rounded-[8px] border-[#EAECF0]  ' >
              <Icon icon="mynaui:filter-solid" width="20" height="20" style={{ color: "#667085" }} />
              <p className='text-[#344054] font-Inter font-semibold text-[14px] ' >Filters</p>
            </button>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-[14px] py-[10px] flex gap-[4px] border-[2px] rounded-[8px] border-[#EAECF0]">
              <option value="">All Status</option>
              {statusOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <select value={serviceFilter} onChange={(e) => setServiceFilter(e.target.value)} className="px-[14px] py-[10px] flex gap-[4px] border-[2px] rounded-[8px] border-[#EAECF0]">
              <option value="">All Services</option>
              <option value="Dental Cleaning">Dental Cleaning</option>
              <option value="Eye Checkup">Eye Checkup</option>
              <option value="Skin Consultation">Skin Consultation</option>
            </select>

          </li>
          <li className='flex gap-[12px] ' >
            <div className="w-full max-w-[320px] flex items-center gap-2 border-[2px] border-[#EAECF0] bg-white px-3 py-2 rounded-[8px]">
              <input
                type="text"
                placeholder="Search"
                className="outline-none text-sm text-[#101828] placeholder-[#667085] font-Inter bg-transparent"
                value={search} onChange={(e) => setSearch(e.target.value)}
              />
              <Icon icon="mynaui:search" width="20" height="20" style={{ color: "#344054" }} />
            </div>
            <div className=' w-full  flex items-center ' >
              <button className=' items-center px-[14px] py-[10px] flex gap-[4px] border-[2px] rounded-[8px] border-[#EAECF0]  ' >
                <Icon icon="bitcoin-icons:export-outline" width="24" height="24" style={{ color: '#344054' }} />
                <p className='text-[#344054] font-Inter font-semibold text-[14px] ' >Export</p>
              </button>
            </div>
          </li>

        </ul>
      </div>


      {/* <div class
      Name="mt-6 flex flex-wrap gap-4 items-end px-8">
        <input type="text" placeholder="Search..." className="border p-2 rounded-md w-64 text-sm"
          value={search} onChange={(e) => setSearch(e.target.value)} />
      
        
        <input type="date" className="border p-2 rounded-md text-sm" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />

      </div> */}

      <div className="mt-6 overflow-x-auto bg-white border-2 border-[#EAECF0] rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3">Customer Name</th>
              <th className="px-4 py-3">Service Name</th>
              <th className="px-4 py-3">Appointment Time</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appt: any) => (
              <tr key={appt.id} className="hover:bg-gray-50 border-b">
                <td className="px-4 py-3">{appt.customer_name}</td>
                <td className="px-4 py-3">{appt.service_name || '-'}</td>
                <td className="px-4 py-3">{appt.date}</td>
                <td className="px-4 py-3">{appt.customer_number}</td>
                <td className="px-4 py-3">
                  <select
                    value={appt.status}
                    onChange={(e) => handleStatusUpdate(appt.id, e.target.value)}
                    className="border p-1 rounded-md text-sm"
                  >
                    {statusOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
            {filteredAppointments.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-400">No appointments found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentTable;
