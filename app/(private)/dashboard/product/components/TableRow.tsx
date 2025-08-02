// import { useEffect, useRef, useState } from "react";
// import { HiDotsVertical } from "react-icons/hi";

// const TableRow = ({ item, setFormState, setShowUpdateModal, setShowDeleteModal, activeMenuId, setActiveMenuId }) => {
//   const menuRef = useRef<HTMLDivElement>(null);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setActiveMenuId(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <td className="px-4 py-3 relative" ref={menuRef}>
//       {/* Three Dot Button */}
//       <button
//         onClick={() =>
//           setActiveMenuId(activeMenuId === item.id ? null : item.id)
//         }
//         className="p-2 rounded hover:bg-gray-100"
//       >
//         <HiDotsVertical size={20} />
//       </button>

//       {/* Dropdown Menu */}
//       {activeMenuId === item.id && (
//         <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-50">
//           <button
//             onClick={() => {
//               setFormState(item);
//               setShowUpdateModal(true);
//               setActiveMenuId(null);
//             }}
//             className="block w-full px-4 py-2 text-left hover:bg-gray-100"
//           >
//             Update
//           </button>
//           <button
//             onClick={() => {
//               setFormState(item);
//               setShowDeleteModal(true);
//               setActiveMenuId(null);
//             }}
//             className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-red-600"
//           >
//             Delete
//           </button>
//         </div>
//       )}
//     </td>
//   );
// };
