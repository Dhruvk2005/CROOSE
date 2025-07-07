





import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

const users = [
  { products: "Brazillian Wig 12’’", paymentMethod: "stripe", link: "https:stripe.....", Date: "12/03/2024, 1:00pm", phone: "0241763214" },
  { products: "Wig Installation", paymentMethod: "stripe", link: "+233 241 235 6834", Date: "12/03/2024, 2:00pm", phone: "0241763214" },
  { products: "Wig Revamp", paymentMethod: "stripe", link: "+233 241 235 6834", Date: "12/03/2024, 3:00pm", phone: "0241763214" },
  { products: "Frontal Install", paymentMethod: "stripe", link: "https:stripe.....", Date: "12/03/2024, 4:00pm", phone: "0241763214" },
  { products: "Hair Styling", paymentMethod: "stripe", link: "https:stripe.....", Date: "12/03/2024, 5:00pm", phone: "0241763214" },
];

const Page = () => {
  return (
    <div className='flex justify-center items-center h-[900px] px-4'>
      <section className='w-full max-w-[773px] h-[760px] border rounded-[20px] border-none bg-[#ffffff] overflow-y backdrop-blur-xl'>

        <div className="absolute">
          <div>
            <img
              src="/dollars.png"
              className="w-full rounded-[20px] flex flex-row h-[176px] border-none"
            />
          </div>
        </div>

        <div className="h-[120px]"></div>

        <section className="flex flex-wrap gap-2 sm:m-[40px] m-[20px] relative">
          <div className="absolute"></div>

          <div className="flex justify-between flex-wrap w-full gap-4">
            <section className="text-[14px] w-full sm:w-[65%]">
              <div className="w-full sm:w-[60%] h-[28px] font-inter font-semibold text-[18px] leading-[28px] text-[#101828]">
                Manage Payment Methods
              </div>
              <div className="flex justify-center gap-[10px]">
                <span className='w-full h-[20px] font-inter font-normal text-[14px] leading-[20px] text-[#475467]'>
                  Create a payment gateway for your customers
                </span>
              </div>
            </section>

            <div className="w-full sm:w-[28%] h-[52px] bg-[#F1F0FA] rounded-lg px-[16px] py-[12px]">
              <button
                type="button"
                className="w-full h-[20px] text-[#685BC7] font-sans font-semibold text-sm leading-5 text-center"
              >
                Edit Customer
              </button>
            </div>
          </div>
        </section>

        {/* Scrollable Table Container */}
        <section className='w-full h-[472px] px-4'>
          <div className='w-full overflow-x-auto max-w-full sm:overflow-x-visible'>
      

<table className="w-full table-fixed border-collapse">

  
   <thead>
    <tr className="bg-[#F9FAFB] text-left">
      <th className="w-[200px] px-4 py-4 border-b border-[#EAECF0] text-[12px] font-medium text-[#475467] rounded-tl-[20px]">
        Product/Service
      </th>
      <th className="w-[140px] px-4 py-4 border-b border-[#EAECF0] text-[12px] font-medium text-[#475467]">
        Payment Method
      </th>
      <th className="w-[200px] px-4 py-4 border-b border-[#EAECF0] text-[12px] font-medium text-[#475467]">
        Link/Number
      </th>
      <th className="w-[140px] px-4 py-4 border-b border-[#EAECF0] text-[12px] font-medium text-[#475467]">
        Date
      </th>
      <th className="w-[60px] px-4 py-4 border-b border-[#EAECF0] text-[12px] font-medium text-[#475467] rounded-tr-[20px]">
        
      </th>
    </tr>
  </thead>

  <tbody>
    {users.map((user, index) => (
      <tr key={index} className="bg-white text-left">
        <td className="px-4 py-4 border-b border-[#EAECF0] text-[14px] text-[#475467]">{user.products}</td>
        <td className="px-4 py-4 border-b border-[#EAECF0] text-[14px] text-[#475467]">{user.paymentMethod}</td>
        <td className="px-4 py-4 border-b border-[#EAECF0] text-[14px] text-[#475467]">{user.link}</td>
        <td className="px-4 py-4 border-b border-[#EAECF0] text-[14px] text-[#475467]">{user.Date}</td>
        <td className="px-4 py-4 border-b border-[#EAECF0] text-[#475467]">
          <Icon icon="bi:three-dots-vertical" width="16" height="16" />
        </td>
      </tr>
    ))}
  </tbody>

  <tfoot>
  <tr className=" w-full border-none border-t border-[#EAECF0]">
    {/* Previous button - Left aligned */}
    <td  className="px-[10px] w-[400px] py-3 text-left">
      <div className="flex justify-start">
        <button className="flex items-center gap-1 border border-[#D0D5DD] rounded-md px-2 py-1 text-[#344054]">
          <Icon icon="material-symbols:arrow-back-rounded" width="20" height="20" />
          <span>Previous</span>
        </button>
      </div>
    </td>

    {/* Page numbers - Centered */}
    <td colSpan={1} className="px-[10px] py-3">
      <div className="flex flex-row w-[771px]   gap-2">
        {[1, 2, 3, '...', 8, 9, 10].map((item, idx) => (
          <span
            key={idx}
            className="w-[40px] h-[40px]   flex items-center justify-center text-[#182230] text-sm" >
            {item}
          </span>
        ))}
      </div>
    </td>

    {/* Next button - Right aligned */}
    <td colSpan={3} className="px-[10px]  text-right">
      <div className="flex justify-end">
        <button className="flex items-center gap-1 border border-[#D0D5DD] rounded-md px-2 py-1 text-[#344054]">
          <span>Next</span>
          <Icon icon="charm:arrow-right" width="16" height="16" />
        </button>
      </div>
    </td>
  </tr>
</tfoot>



     
  
</table> 




          </div>
        </section>
      </section>
    </div>
  );
};

export default Page;















// import { Icon } from '@iconify/react/dist/iconify.js';

// const users = [
//   {
//     products: "Brazillian Wig 12’’",
//     paymentMethod: "stripe",
//     link: "https:stripe.....",
//     Date: "12/03/2024, 1:00pm",
//     phone: "0241763214",
//   },
//   {
//     products: "Wig Installation",
//     paymentMethod: "stripe",
//     link: "+233 241 235 6834",
//     Date: "12/03/2024, 2:00pm",
//     phone: "0241763214",
//   },
//   {
//     products: "Wig Revamp",
//     paymentMethod: "stripe",
//     link: "+233 241 235 6834",
//     Date: "12/03/2024, 3:00pm",
//     phone: "0241763214",
//   },
//   {
//     products: "Frontal Install",
//     paymentMethod: "stripe",
//     link: "https:stripe.....",
//     Date: "12/03/2024, 4:00pm",
//     phone: "0241763214",
//   },
//   {
//     products: "Hair Styling",
//     paymentMethod: "stripe",
//     link: "https:stripe.....",
//     Date: "12/03/2024, 5:00pm",
//     phone: "0241763214",
//   },
// ];

// const Page = () => {
//   return (
//     <div className='flex justify-center items-center h-[900px] px-4'>
//       <section className='w-full max-w-[773px] h-[760px] border rounded-[20px] border-none bg-[#ffffff] overflow-y backdrop-blur-xl'>

//         <div className="absolute">
//           <div>
//             <img
//               src="/dollars.png"
//               className="w-full rounded-[20px] flex flex-row h-[176px] border rounded-t-[20px] border-none"
//             />
//           </div>
//         </div>

//         <div className="h-[120px]"></div>

//         <section className="flex flex-wrap gap-2 sm:m-[40px] m-[20px] relative">
//           <div className="absolute"></div>

//           <div className="flex justify-between flex-wrap w-full gap-4">
//             <section className="text-[14px] w-full sm:w-[65%]">
//               <div className="w-full sm:w-[60%] h-[28px] font-inter font-semibold text-[18px] leading-[28px] text-[#101828] tracking-[0]">
//                 Manage Payment Methods
//               </div>

//               <div className="flex justify-center gap-[10px]">
//                 <span className='w-full h-[20px] font-inter font-normal text-[14px] leading-[20px] tracking-[0] text-[#475467]'>
//                   Create a payment gateway for your customers
//                 </span>
//               </div>
//             </section>

//             <div className="w-full sm:w-[28%] h-[52px] bg-[#F1F0FA] opacity-100 rounded-lg gap-[10px] px-[16px] py-[12px]">
//               <button
//                 type="button"
//                 className="w-full h-[20px] text-[#685BC7] font-sans font-semibold text-sm leading-5 tracking-[0] text-center"
//               >
//                 Edit Customer
//               </button>
//             </div>
//           </div>
//         </section>

//         <section className='w-full h-[472px] flex justify-center overflow-x-auto'>
//           <table className='w-full max-w-[95%] h-[472px] border rounded-[20px] border-none bg-[#ffffff]'>
//             <thead>
//               <tr className='bg-[#F9FAFB]'>
//                 <th className="w-[25%] h-[44px] border-[#EAECF0] rounded-tl-[20px] border-b-[1px] px-[10px] py-[16px] font-medium text-[12px] leading-[18px] font-inter text-[#475467]">Product/Service</th>
//                 <th className="w-[20%] h-[44px] border-[#EAECF0] border-b px-[10px] py-[16px] font-medium text-[12px] leading-[18px] font-inter text-[#475467]">Payment Method</th>
//                 <th className="w-[25%] h-[44px] border-[#EAECF0] border-b px-[10px] py-[16px] font-medium text-[12px] leading-[18px] font-inter text-[#475467]">Link/Number</th>
//                 <th className="w-[20%] h-[44px] border-[#EAECF0] border-b px-[10px] py-[16px] font-medium text-[12px] leading-[18px] font-inter text-[#475467]">Date</th>
//                 <th className="w-[10%] h-[44px] border-[#EAECF0] rounded-tr-[20px] border-b-[1px] px-[10px] py-[16px] font-medium text-[12px] leading-[18px] font-inter text-[#475467]"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={index} className="bg-white">
//                   <td className="w-[25%] h-[68px] px-[10px] py-[20px] border-b-[1px] border-[#EAECF0] font-normal text-[14px] leading-[20px] font-inter text-[#475467]">{user.products}</td>
//                   <td className="w-[20%] h-[68px] px-[10px] py-[20px] border-b-[1px] border-[#EAECF0] font-normal text-[14px] leading-[20px] font-inter text-[#475467]">{user.paymentMethod}</td>
//                   <td className="w-[25%] h-[68px] px-[10px] py-[20px] border-b-[1px] border-[#EAECF0] font-normal text-[14px] leading-[20px] font-inter text-[#475467]">{user.link}</td>
//                   <td className="w-[20%] h-[68px] px-[10px] py-[20px] border-b-[1px] border-[#EAECF0] font-normal text-[14px] leading-[20px] font-inter text-[#475467]">{user.Date}</td>
//                   <td className="w-[10%] px-6 py-4 border-b-[1px] border-[#EAECF0] text-[#475467]">
//                     <Icon icon="bi:three-dots-vertical" width="16" height="16" />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//             <tfoot>
//               <tr className="bg-[#F9FAFB] border-t border-[#EAECF0]">
//                 <td colSpan={5} className="px-4 py-4 rounded-bl-[20px] rounded-br-[20px]">
//                   <div className="flex flex-wrap justify-between items-center gap-2">
//                     <div className="w-[45%] sm:w-[25%]">
//                       <button className="flex items-center gap-1 border rounded-md px-2 py-1 text-[#475467]">
//                         <Icon icon="material-symbols:arrow-back-rounded" width="20" height="20" />
//                         <span>Previous</span>
//                       </button>
//                     </div>
//                     <div className="w-full sm:w-[40%] flex justify-center gap-2">
//                       {[1, 2, 3, '...', 8, 9, 10].map((item, idx) => (
//                         <span key={idx} className="w-[30px] h-[30px] flex items-center justify-center text-[#182230] text-sm">
//                           {item}
//                         </span>
//                       ))}
//                     </div>
//                     <div className="w-[45%] sm:w-[25%] flex justify-end">
//                       <button className="flex items-center gap-1 border rounded-md px-2 py-1 text-[#475467]">
//                         <span>Next</span>
//                         <Icon icon="charm:arrow-right" width="16" height="16" />
//                       </button>
//                     </div>
//                   </div>
//                 </td>
//               </tr>
//             </tfoot>
//           </table>
//         </section>
//       </section>
//     </div>
//   );
// };

// export default Page;




















// import React from 'react';
// import { Icon } from '@iconify/react/dist/iconify.js';

// const users = [
//   {
//     products: "Brazillian Wig 12’’",
//     paymentMethod: "stripe",
//     link: "https:stripe.....",
//     Date: "12/03/2024, 1:00pm",
//     phone: "0241763214",
//   },
//   {
//     products: "Wig Installation",
//     paymentMethod: "stripe",
//     link: "+233 241 235 6834",
//     Date: "12/03/2024, 2:00pm",
//     phone: "0241763214",
//   },
//   {
//     products: "Wig Revamp",
//     paymentMethod: "stripe",
//     link: "+233 241 235 6834",
//     Date: "12/03/2024, 3:00pm",
//     phone: "0241763214",
//   },
//   {
//     products: "Frontal Install",
//     paymentMethod: "stripe",
//     link: "https:stripe.....",
//     Date: "12/03/2024, 4:00pm",
//     phone: "0241763214",
//   },
//   {
//     products: "Hair Styling",
//     paymentMethod: "stripe",
//     link: "https:stripe.....",
//     Date: "12/03/2024, 5:00pm",
//     phone: "0241763214",
//   },
// ];

// const Page = () => {
//   return (
//     <div className='flex justify-center items-center h-[900px] px-4'>
//       <section className='w-full max-w-[773px] h-[760px] border rounded-[20px] border-none bg-[#ffffff] overflow-y backdrop-blur-xl'>

//         <div className="absolute">
//           <div>
//             <img
//               src="/dollars.png"
//               className="w-full rounded-[20px] flex flex-row h-[176px] border rounded-t-[20px] border-none"
//             />
//           </div>
//         </div>

//         <div className="h-[120px]"></div>

//         <section className="flex flex-wrap gap-2 sm:m-[40px] m-[20px] relative">
//           <div className="absolute"></div>

//           <div className="flex justify-between flex-wrap w-full gap-4">
//             <section className="text-[14px] w-full sm:w-[65%]">
//               <div className="w-full sm:w-[60%] h-[28px] font-inter font-semibold text-[18px] leading-[28px] text-[#101828] tracking-[0]">
//                 Manage Payment Methods
//               </div>

//               <div className="flex justify-center gap-[10px]">
//                 <span className='w-full h-[20px] font-inter font-normal text-[14px] leading-[20px] tracking-[0] text-[#475467]'>
//                   Create a payment gateway for your customers
//                 </span>
//               </div>
//             </section>

//             <div className="w-full sm:w-[28%] h-[52px] bg-[#F1F0FA] opacity-100 rounded-lg gap-[10px] px-[16px] py-[12px]">
//               <button
//                 type="button"
//                 className="w-full h-[20px] text-[#685BC7] font-sans font-semibold text-sm leading-5 tracking-[0] text-center"
//               >
//                 Edit Customer
//               </button>
//             </div>
//           </div>
//         </section>

//         <section className='w-full h-[472px] flex justify-center'>
//           <table className='w-full max-w-[95%] h-[472px] border rounded-[20px] border-none bg-[#ffffff]'>
//             <thead>
//               <tr className='bg-[#F9FAFB]'>
//                 <th className="w-[161px] h-[44px] border-[#EAECF0] rounded-tl-[20px] border-b-[1px] px-[35px] py-[16px] font-medium text-[12px] leading-[18px] font-inter text-[#475467]">Product/Service</th>
//                 <th className="w-[139px] h-[44px] border-[#EAECF0] border-b px-[30px] py-[16px] font-medium text-[12px] leading-[18px] font-inter text-[#475467]">Payment Method</th>
//                 <th className="w-[161px] h-[44px] border-[#EAECF0] border-b px-[20px] py-[16px] font-medium text-[12px] leading-[18px] font-inter text-[#475467]">Link/Number</th>
//                 <th className="w-[161px] h-[44px] border-[#EAECF0] border-b px-[0px] py-[16px] font-medium text-[12px] leading-[18px] font-inter text-[#475467]">Date</th>
//                 <th className="w-[68px] h-[44px] border-[#EAECF0] rounded-tr-[20px] border-b-[1px] px-[35px] py-[16px] font-medium text-[12px] leading-[18px] font-inter text-[#475467]"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={index} className="bg-white">
//                   <td className="w-[161px] h-[68px] px-[35px] py-[20px] border-b-[1px] border-[#EAECF0] font-normal text-[14px] leading-[20px] font-inter text-[#475467]">{user.products}</td>
//                   <td className="w-[139px] h-[68px] px-[35px] py-[20px] border-b-[1px] border-[#EAECF0] font-normal text-[14px] leading-[20px] font-inter text-[#475467]">{user.paymentMethod}</td>
//                   <td className="w-[161px] h-[68px] px-[20px] py-[20px] border-b-[1px] border-[#EAECF0] font-normal text-[14px] leading-[20px] font-inter text-[#475467]">{user.link}</td>
//                   <td className="w-[161px] h-[68px] px-[0px] py-[20px] border-b-[1px] border-[#EAECF0] font-normal text-[14px] leading-[20px] font-inter text-[#475467]">{user.Date}</td>
//                   <td className="px-6 py-4 border-b-[1px] border-[#EAECF0] text-[#475467]">
//                     <Icon icon="bi:three-dots-vertical" width="16" height="16" />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//               <tfoot>
//               <tr className="bg-[#F9FAFB] border-t border-[#EAECF0]">
//                 <td colSpan={5} className="px-4 py-4 rounded-bl-[20px] rounded-br-[20px]">
//                   <div className="flex flex-wrap justify-between items-center gap-2">
//                     <div className="w-[45%] sm:w-[25%]">
//                       <button className="flex items-center gap-1 border rounded-md px-2 py-1 text-[#475467]">
//                         <Icon icon="material-symbols:arrow-back-rounded" width="20" height="20" />
//                         <span>Previous</span>
//                       </button>
//                     </div>
//                     <div className="w-full sm:w-[40%] flex justify-center gap-2">
//                       {[1, 2, 3, '...', 8, 9, 10].map((item, idx) => (
//                         <span key={idx} className="w-[30px] h-[30px] flex items-center justify-center text-[#182230] text-sm">
//                           {item}
//                         </span>
//                       ))}
//                     </div>
//                     <div className="w-[45%] sm:w-[25%] flex justify-end">
//                       <button className="flex items-center gap-1 border rounded-md px-2 py-1 text-[#475467]">
//                         <span>Next</span>
//                         <Icon icon="charm:arrow-right" width="16" height="16" />
//                       </button>
//                     </div>
//                   </div>
//                 </td>
//               </tr>
//             </tfoot>

       
//           </table>
//         </section>
//       </section>
//     </div>
//   );
// };

// export default Page;
