// import { useEffect, useState } from 'react';
// import { Listbox } from '@headlessui/react';
// import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

// const days = [
//   'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
// ];

// export default function MultiSelectDays({ formState, setFormState }: any) {
//   const [selectedDays, setSelectedDays] = useState<string[]>([]);

//   // Sync local state with formState
//   useEffect(() => {
//     if (formState?.available_days) {
//       setSelectedDays(formState.available_days.split(',').filter(Boolean));
//     }
//   }, [formState?.available_days]);

//   const handleSelect = (day: string) => {
//     let updated: string[];
//     if (selectedDays.includes(day)) {
//       updated = selectedDays.filter(d => d !== day);
//     } else {
//       updated = [...selectedDays, day];
//     }

//     setSelectedDays(updated);
//     setFormState((prev: any) => ({
//       ...prev,
//       available_days: updated.join(',')
//     }));
//   };

//   return (
//     <div className="w-72">
//       <label className="block text-sm font-medium text-gray-700 mb-1">
//         Available Days
//       </label>
//       <Listbox value={selectedDays} onChange={handleSelect} multiple>
//         <div className="relative mt-1">
//           <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm">
//             <span className="block truncate">
//               {selectedDays.length > 0
//                 ? selectedDays.join(', ')
//                 : 'Select days'}
//             </span>
//             <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//               <SelectorIcon
//                 className="h-5 w-5 text-gray-400"
//                 aria-hidden="true"
//               />
//             </span>
//           </Listbox.Button>

//           <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//             {days.map((day) => (
//               <Listbox.Option
//                 key={day}
//                 value={day}
//                 className={({ active }) =>
//                   `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
//                     active
//                       ? 'bg-indigo-600 text-white'
//                       : 'text-gray-900'
//                   }`
//                 }
//               >
//                 {({ selected }) => (
//                   <>
//                     <span
//                       className={`block truncate ${
//                         selected
//                           ? 'font-medium'
//                           : 'font-normal'
//                       }`}
//                     >
//                       {day}
//                     </span>
//                     {selectedDays.includes(day) && (
//                       <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
//                         <CheckIcon
//                           className="h-5 w-5"
//                           aria-hidden="true"
//                         />
//                       </span>
//                     )}
//                   </>
//                 )}
//               </Listbox.Option>
//             ))}
//           </Listbox.Options>
//         </div>
//       </Listbox>
//     </div>
//   );
// }
