"use client";

import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const initialAppointments = [
  {
    id: 1,
    name: "Neil Sims",
    phone: "0241763214",
    service: "Dental Cleaning",
    status: "Confirmed",
    statusColor: "bg-green-500",
    notes: "First-time visit",
    appointmentTime: "2025-07-10 10:30 AM",
    createdAt: "2025-07-01"
  },
  {
    id: 2,
    name: "Bonnie Green",
    phone: "0241763214",
    service: "Eye Checkup",
    status: "Pending",
    statusColor: "bg-yellow-400",
    notes: "Needs translator",
    appointmentTime: "2025-07-12 02:00 PM",
    createdAt: "2025-07-03"
  },
  {
    id: 3,
    name: "Thomas Lean",
    phone: "0241763214",
    service: "Skin Consultation",
    status: "Cancelled",
    statusColor: "bg-red-500",
    notes: "Reschedule needed",
    appointmentTime: "2025-07-11 11:15 AM",
    createdAt: "2025-07-02"
  }
];

const AppointmentTable = () => {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [serviceFilter, setServiceFilter] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appointmentTime: '',
    service: 'Dental Cleaning',
    status: 'Confirmed',
    notes: ''
  });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const statusColorMap:any = {
      Confirmed: 'bg-green-500',
      Pending: 'bg-yellow-400',
      Cancelled: 'bg-red-500'
    };
    const newAppointment = {
      ...formData,
      id: appointments.length + 1,
      createdAt: new Date().toISOString().split('T')[0],
      statusColor: statusColorMap[formData.status] || 'bg-gray-300'
    };
    setAppointments([newAppointment, ...appointments]);
    setShowModal(false);
    setFormData({
      name: '',
      phone: '',
      appointmentTime: '',
      service: 'Dental Cleaning',
      status: 'Confirmed',
      notes: ''
    });
  };

  const filtered = appointments.filter(a => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.phone.includes(search) ||
      a.service.toLowerCase().includes(search.toLowerCase());
    const  matchStatus = statusFilter ? a.status === statusFilter : true;
    const matchService = serviceFilter ? a.service === serviceFilter : true;
    const matchDate = (!dateFrom || new Date(a.createdAt) >= new Date(dateFrom)) &&
      (!dateTo || new Date(a.createdAt) <= new Date(dateTo));
    return matchSearch && matchStatus && matchService && matchDate;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center border-b border-[#EAECF0] pb-4">
        <h2 className="text-xl font-semibold text-[#121217]">Appointment</h2>
        <div className="flex gap-4">
          <button onClick={() => setShowModal(true)} className="border px-4 py-2 rounded-md text-sm font-medium text-white bg-[#685BC7] hover:bg-[#685BC7]-300">Create Appointment</button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <h3 className="text-lg font-semibold mb-4">New Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" required placeholder="Customer Name" className="w-full border border-gray-300 p-2 rounded-md" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <input type="text" required placeholder="Phone Number" className="w-full border border-gray-300 p-2 rounded-md" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              <input type="datetime-local" required className="w-full text-[#71717A] border border-gray-300 p-2 rounded-md" value={formData.appointmentTime} onChange={(e) => setFormData({ ...formData, appointmentTime: e.target.value })} />
              <select className="w-full text-[#71717A] border border-gray-300 p-2 rounded-md" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                <option>Dental Cleaning</option>
                <option>Eye Checkup</option>
                <option>Skin Consultation</option>
              </select>
              <select className="w-full border text-[#71717A] border-gray-300 p-2 rounded-md" value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
                <option>Confirmed</option>
                <option>Pending</option>
                <option>Cancelled</option>
              </select>
              <textarea placeholder="Notes" className="w-full border border-gray-300 p-2 rounded-md" value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })}></textarea>
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-200 rounded-md">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-[#685BC7] text-white rounded-md">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="mt-6 space-y-6">
        <div className="flex flex-wrap gap-4 items-end">
          <input
            type="text"
            placeholder="Search name, phone, service..."
            className="border-2 border-[#EAECF0] text-[#667085] rounded-md p-2 text-sm w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border-2 border-[#EAECF0] text-[#667085] rounded-md p-2 text-sm"
          >
            <option value="">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="border-2 border-[#EAECF0] text-[#667085] rounded-md p-2 text-sm"
          >
            <option value="">All Services</option>
            <option value="Dental Cleaning">Dental Cleaning</option>
            <option value="Eye Checkup">Eye Checkup</option>
            <option value="Skin Consultation">Skin Consultation</option>
          </select>

          <input
            type="date"
            className="border-2 border-[#EAECF0] text-[#667085] rounded-md p-2 text-sm"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          />
          <input
            type="date"
            className="border-2 border-[#EAECF0] text-[#667085] rounded-md p-2 text-sm"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto bg-white rounded-lg border border-[#EAECF0] shadow-sm">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3">Customer Name</th>
                <th className="px-4 py-3">Phone Number</th>
                <th className="px-4 py-3">Appointment Time</th>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Notes</th>
                <th className="px-4 py-3">Created At</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((appt) => (
                <tr key={appt.id} className="hover:bg-gray-50 border-b border-[#EAECF0]">
                  <td className="px-4 py-3">{appt.name}</td>
                  <td className="px-4 py-3">{appt.phone}</td>
                  <td className="px-4 py-3">{appt.appointmentTime}</td>
                  <td className="px-4 py-3">{appt.service}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1 ${appt.statusColor} text-white text-xs px-2 py-1 rounded-full`}>
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                      {appt.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{appt.notes}</td>
                  <td className="px-4 py-3">{appt.createdAt}</td>
                  <td className="px-4 py-3">
                    <button className="text-gray-600 hover:text-black">
                      <Icon icon="bi:three-dots-vertical" />
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center py-6 text-gray-400">No appointments found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;
