'use client';

import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { updateAppointmentStatus, appointmentList } from '@/app/Apis/publicapi';

const AppointmentTable = () => {
  const [appointments, setAppointments] = useState([]);
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

  const statusColorMap: any = {
    confirmed: 'bg-green-500',
    pending: 'bg-yellow-400',
    cancelled: 'bg-red-500',
    completed: 'bg-blue-500',
  };

  const handleStatusUpdate = async (id: number, newStatus: string) => {
    try {
      const res = await updateAppointmentStatus(id, newStatus);
      console.log("Status updated successfully:", res);

      const updatedList = await appointmentList();

      const formatted = updatedList.data.map((appt: any) => ({
        ...appt,
        statusColor: statusColorMap[appt.status?.toLowerCase()] || 'bg-gray-300',
      }));

      setAppointments(formatted);
    } catch (err) {
      console.error("Failed to update appointment status", err);
    }
  };

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const res = await appointmentList();
        if (res?.data) {
          const formattedAppointments = res.data.map((appt: any) => ({
            ...appt,
            statusColor: statusColorMap[appt.status?.toLowerCase()] || 'bg-gray-300',
          }));
          setAppointments(formattedAppointments);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchAppointment();
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newAppointment = {
      ...formData,
      id: appointments.length + 1,
      createdAt: new Date().toISOString().split('T')[0],
      statusColor: statusColorMap[formData.status?.toLowerCase()] || 'bg-gray-300',
      customer_name: formData.name,
      service_name: formData.service,
      date: formData.appointmentTime,
      status: formData.status.toLowerCase()
    };
    setAppointments([ ...appointments]);
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

  const filteredAppointments = appointments.filter((appt: any) => {
    const searchTerm = search.toLowerCase();
    const matchesSearch =
      appt.customer_name?.toLowerCase().includes(searchTerm) ||
      appt.phone?.toLowerCase().includes(searchTerm) ||
      appt.service_name?.toLowerCase().includes(searchTerm);

    const matchesStatus = statusFilter ? appt.status?.toLowerCase() === statusFilter.toLowerCase() : true;
    const matchesService = serviceFilter ? appt.service_name?.toLowerCase() === serviceFilter.toLowerCase() : true;

    const apptDate = new Date(appt.date);
    const matchesDateFrom = dateFrom ? apptDate >= new Date(dateFrom) : true;
    const matchesDateTo = dateTo ? apptDate <= new Date(dateTo) : true;

    return matchesSearch && matchesStatus && matchesService && matchesDateFrom && matchesDateTo;
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
            <option value="Completed">Completed</option>
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
                <th className="px-4 py-3">Service Name</th>
                <th className="px-4 py-3">Appointment Time</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Status Tag</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appt: any) => (
                <tr key={appt?.id} className="hover:bg-gray-50 border-b border-[#EAECF0]">
                  <td className="px-4 py-3">{appt?.customer_name}</td>
                  <td className="px-4 py-3">{appt?.service_name}</td>
                  <td className="px-4 py-3">{appt?.date}</td>
                  <td className="px-4 py-3 capitalize">{appt?.status}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1 ${appt.statusColor} text-white text-xs px-2 py-1 rounded-full`}>
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                      {appt.status}
                    </span>
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
    </div>
  );
};

export default AppointmentTable;
