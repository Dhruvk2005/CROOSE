
// "use client";

// import React, { useState } from "react";

// const mockData = [
//   {
//     id: 1,
//     customerName: "John Doe",
//     phoneNumber: "+91-9876543210",
//     appointmentTime: "2025-06-28 14:00",
//     serviceType: "Consultation",
//     status: "Scheduled",
//     notes: "First-time visitor",
//     createdAt: "2025-06-27 10:00",
//   },
//   {
//     id: 2,
//     customerName: "Jane Smith",
//     phoneNumber: "+91-9123456789",
//     appointmentTime: "2025-06-28 15:30",
//     serviceType: "Therapy",
//     status: "Completed",
//     notes: "Follow-up session",
//     createdAt: "2025-06-26 09:30",
//   },
//   {
//     id: 3,
//     customerName: "Ali Khan",
//     phoneNumber: "+91-9988776655",
//     appointmentTime: "2025-06-29 11:00",
//     serviceType: "Counseling",
//     status: "Scheduled",
//     notes: "",
//     createdAt: "2025-06-27 11:00",
//   },
// ];

// const AppointmentPage = () => {
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [dateFilter, setDateFilter] = useState("");

//   const filteredAppointments = mockData.filter((appointment) => {
//     const matchesSearch =
//       appointment.customerName.toLowerCase().includes(search.toLowerCase()) ||
//       appointment.phoneNumber.includes(search);

//     const matchesStatus =
//       statusFilter === "All" || appointment.status === statusFilter;

//     const matchesDate =
//       dateFilter === "" ||
//       appointment.appointmentTime.startsWith(dateFilter); // Match by YYYY-MM-DD

//     return matchesSearch && matchesStatus && matchesDate;
//   });

//   return (
//     <div className="">
//       <h1 className="text-2xl font-bold mb-4">Appointments</h1>

//       {/* Filters */}
//       <div className="flex flex-col md:flex-row gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search by name or phone..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
//         />
//         <select
//           value={statusFilter}
//           onChange={(e) => setStatusFilter(e.target.value)}
//           className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/4"
//         >
//           <option value="All">All Status</option>
//           <option value="Scheduled">Scheduled</option>
//           <option value="Completed">Completed</option>
//           <option value="Cancelled">Cancelled</option>
//           <option value="No-show">No-show</option>
//         </select>
//         <input
//           type="date"
//           value={dateFilter}
//           onChange={(e) => setDateFilter(e.target.value)}
//           className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/4"
//         />
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full border text-sm">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border px-4 py-2 text-left">Customer Name</th>
//               <th className="border px-4 py-2 text-left">Phone Number</th>
//               <th className="border px-4 py-2 text-left">Appointment Time</th>
//               <th className="border px-4 py-2 text-left">Service</th>
//               <th className="border px-4 py-2 text-left">Status</th>
//               <th className="border px-4 py-2 text-left">Notes</th>
//               <th className="border px-4 py-2 text-left">Created At</th>
//               <th className="border px-4 py-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredAppointments.map((appointment) => (
//               <tr key={appointment.id}>
//                 <td className="border px-4 py-2">{appointment.customerName}</td>
//                 <td className="border px-4 py-2">{appointment.phoneNumber}</td>
//                 <td className="border px-4 py-2">{appointment.appointmentTime}</td>
//                 <td className="border px-4 py-2">{appointment.serviceType}</td>
//                 <td className="border px-4 py-2">{appointment.status}</td>
//                 <td className="border px-4 py-2">{appointment.notes}</td>
//                 <td className="border px-4 py-2">{appointment.createdAt}</td>
//                 <td className="border px-4 py-2">
//                   <button className="text-blue-600 hover:underline mr-2">View</button>
//                   <button className="text-green-600 hover:underline mr-2">Reschedule</button>
//                   <button className="text-red-600 hover:underline">Cancel</button>
//                 </td>
//               </tr>
//             ))}
//             {filteredAppointments.length === 0 && (
//               <tr>
//                 <td colSpan={8} className="text-center py-4 text-gray-500">
//                   No appointments found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AppointmentPage;
"use client";

import React, { useState } from "react";

// Format datetime with time zone
const formatWithTimezone = (datetime: string) => {
  const date = new Date(datetime);
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(date) + " IST";
};

const mockData = [
  {
    id: 1,
    customerName: "John Doe",
    phoneNumber: "+91-9876543210",
    appointmentTime: "2025-06-28T14:00:00+05:30",
    serviceType: "Consultation",
    status: "Scheduled",
    notes: "First-time visitor",
    createdAt: "2025-06-27T10:00:00+05:30",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    phoneNumber: "+91-9123456789",
    appointmentTime: "2025-06-28T15:30:00+05:30",
    serviceType: "Therapy",
    status: "Completed",
    notes: "Follow-up session",
    createdAt: "2025-06-26T09:30:00+05:30",
  },
  {
    id: 3,
    customerName: "Ali Khan",
    phoneNumber: "+91-9988776655",
    appointmentTime: "2025-06-29T11:00:00+05:30",
    serviceType: "Counseling",
    status: "Scheduled",
    notes: "",
    createdAt: "2025-06-27T11:00:00+05:30",
  },
];

const AppointmentPage = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState<any | null>(null);

  const filteredAppointments = mockData.filter((appointment) => {
    const matchesSearch =
      appointment.customerName.toLowerCase().includes(search.toLowerCase()) ||
      appointment.phoneNumber.includes(search);

    const matchesStatus =
      statusFilter === "All" || appointment.status === statusFilter;

    const matchesDate =
      dateFilter === "" ||
      appointment.appointmentTime.startsWith(dateFilter); // YYYY-MM-DD match

    return matchesSearch && matchesStatus && matchesDate;
  });

  return (
    <div className="">
      

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/4"
        >
          <option value="All">All Status</option>
          <option value="Scheduled">Scheduled</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
          <option value="No-show">No-show</option>
        </select>
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/4"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Customer Name</th>
              <th className="border px-4 py-2 text-left">Phone Number</th>
              <th className="border px-4 py-2 text-left">Appointment Time</th>
              <th className="border px-4 py-2 text-left">Service</th>
              <th className="border px-4 py-2 text-left">Status</th>
              <th className="border px-4 py-2 text-left">Notes</th>
              <th className="border px-4 py-2 text-left">Created At</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="border px-4 py-2">{appointment.customerName}</td>
                <td className="border px-4 py-2">{appointment.phoneNumber}</td>
                <td className="border px-4 py-2">{formatWithTimezone(appointment.appointmentTime)}</td>
                <td className="border px-4 py-2">{appointment.serviceType}</td>
                <td className="border px-4 py-2">{appointment.status}</td>
                <td className="border px-4 py-2">{appointment.notes || "-"}</td>
                <td className="border px-4 py-2">{formatWithTimezone(appointment.createdAt)}</td>
                <td className="border px-4 py-2">
                  <button
                    className="text-blue-600 hover:underline mr-2"
                    onClick={() => setSelectedAppointment(appointment)}
                  >
                    View
                  </button>
                  <button className="text-green-600 hover:underline mr-2">
                    Reschedule
                  </button>
                  <button className="text-red-600 hover:underline">Cancel</button>
                </td>
              </tr>
            ))}
            {filteredAppointments.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center py-4 text-gray-500">
                  No appointments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Appointment Details</h2>
            <p><strong>Name:</strong> {selectedAppointment.customerName}</p>
            <p><strong>Phone:</strong> {selectedAppointment.phoneNumber}</p>
            <p><strong>Service:</strong> {selectedAppointment.serviceType}</p>
            <p><strong>Status:</strong> {selectedAppointment.status}</p>
            <p><strong>Time:</strong> {formatWithTimezone(selectedAppointment.appointmentTime)}</p>
            <p><strong>Notes:</strong> {selectedAppointment.notes || "None"}</p>
            <p><strong>Created:</strong> {formatWithTimezone(selectedAppointment.createdAt)}</p>

            <div className="mt-4 text-right">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => setSelectedAppointment(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentPage;
