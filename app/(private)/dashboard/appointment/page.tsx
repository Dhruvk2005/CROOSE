'use client';
import { formatDbDate } from '@/app/(private)/utils/date';
import React, { useEffect, useState } from 'react';
import { appointmentList, updateAppointmentStatus } from '@/app/Apis/publicapi';

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
    <div className="p-6">
      <div className="flex justify-between items-center border-b border-[#EAECF0] pb-4">
        <h2 className="text-xl font-semibold text-[#121217]">Appointment</h2>
        <button
          onClick={() => setShowModal(true)}
          className="border px-4 py-2 rounded-md text-sm font-medium text-white bg-[#685BC7] hover:bg-[#5a4bb3]"
        >
          Create Appointment
        </button>
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
<input
  type="datetime-local"
  required
  className="w-full border p-2 rounded-md"
  value={formData.appointmentTime}
  onChange={(e) =>{
  console.log('Selected raw value →', e.target.value)
   setFormData({ ...formData, appointmentTime: e.target.value })}}
/>



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

      <div className="mt-6 flex flex-wrap gap-4 items-end">
        <input type="text" placeholder="Search..." className="border p-2 rounded-md w-64 text-sm"
          value={search} onChange={(e) => setSearch(e.target.value)} />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border p-2 rounded-md text-sm">
          <option value="">All Status</option>
          {statusOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <select value={serviceFilter} onChange={(e) => setServiceFilter(e.target.value)} className="border p-2 rounded-md text-sm">
          <option value="">All Services</option>
          <option value="Dental Cleaning">Dental Cleaning</option>
          <option value="Eye Checkup">Eye Checkup</option>
          <option value="Skin Consultation">Skin Consultation</option>
        </select>
        <input type="date" className="border p-2 rounded-md text-sm" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />

      </div>

      <div className="mt-6 overflow-x-auto bg-white border rounded-lg">
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
                <td className="px-4 py-3">{formatDbDate(appt.date)}</td>
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
