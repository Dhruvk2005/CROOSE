'use client'
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Selectbox from '@/app/(public)/component/selectbox'
import { useFormik } from 'formik'

const Page = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      businessName: '',
      businessLocation: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log('Form submitted:', values)
    },
  })

  return (
    <div>
      <div className="relative flex items-center justify-center min-h-screen h-auto bg-gray-100 p-4 sm:p-6">
        <div className="relative z-10 flex justify-center items-center w-full">
          <div className="w-full max-w-[717px] h-auto opacity-100 border-[#E2E4E84D] bg-[#ffffff] rounded-[16px] border border-solid">
            <section className="w-full h-auto flex justify-between items-center border-b border-[#F6F6F6] rounded-t-[16px] px-4 py-3 sm:px-[20px] sm:py-[12px]">
              <span className="w-auto font-inter font-semibold text-[18px] sm:text-[20px] leading-[150%] tracking-[-0.04em] text-[#1D2939]">
                Settings
              </span>
              <span className="w-9 h-9 rounded-full border p-2 flex items-center justify-center border-[#F1F2F3] bg-[#F6F8FA]">
                <Icon icon="iconamoon:close-bold" width="24" height="24" style={{ color: '#000' }} />
              </span>
            </section>

            <section className="w-full h-auto px-4 py-6 sm:px-[64px] sm:py-[32px] flex flex-col gap-8">
              <div className="w-full flex flex-col gap-6">
                <div className="w-full flex flex-wrap items-center gap-2 sm:gap-5">
                  <div className="flex flex-wrap gap-2 w-full">
                    <button className="rounded-sm text-sm px-3 py-2 bg-[#F9F5FF]">
                      <span className="font-semibold text-[14px] text-[#685BC7]">Profile</span>
                    </button>
                    <button className="rounded-sm text-sm px-3 py-2">
                      <span className="font-semibold text-[14px] text-[#667085]">Security</span>
                    </button>
                    <button className="rounded-sm text-sm px-3 py-2">
                      <span className="font-semibold text-[14px] text-[#667085]">Billing</span>
                    </button>
                    <button className="rounded-sm text-sm px-3 py-2">
                      <span className="font-semibold text-[14px] text-[#667085]">Log Out</span>
                    </button>
                  </div>
                </div>
                <div className="text-[18px] font-semibold text-[#101828]">Account Profile</div>
              </div>

              <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <img src="/userse.png" className="w-[100px] h-[100px] bg-[#F2F4F7] rounded-full" />
                  <div className="rounded-[64px] bg-[#F2F4F7] px-5 py-2 text-center">
                    <span className="text-[12px] font-semibold text-[#475467]">Upload Photo</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#344054] mb-1">Full Name</label>
                    <input
                      name="fullName"
                      placeholder="Enter Name"
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full h-[44px] text-[#98A2B3] text-sm rounded-[12px] border border-[#D0D5DD] p-4"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#344054] mb-1">Business Name</label>
                    <input
                      name="businessName"
                      placeholder="Enter business name"
                      value={formik.values.businessName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full h-[44px] text-[#98A2B3] text-sm rounded-[12px] border border-[#D0D5DD] p-4"
                    />
                  </div>
                  <div>
                    
                    <div>
                      <Selectbox formik={formik} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#344054] mb-1">Email</label>
                    <input
                      name="email"
                      placeholder="Enter email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full h-[44px] text-[#98A2B3] text-sm rounded-[12px] border border-[#D0D5DD] p-4"
                    />
                  </div>
                </div>
              </div>
            </section>
             
             
            <section className="w-full flex justify-end border-t border-[#F6F6F6] px-4 py-3 sm:px-[20px] sm:py-[12px]">
                
              <button
                onClick={()=>{formik.handleSubmit()}}
                className="rounded-lg bg-[#685BC7] text-white text-sm font-semibold px-7 py-2"
              >
                Save changes
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page





















// 'use client'
// import React from 'react'
// import { Icon } from '@iconify/react/dist/iconify.js';
// import Selectbox from '@/app/(public)/component/selectbox';
// import { Formik, useFormik } from 'formik';

// const Page = () => {
//   return (
//     <div>
     

//       <div className="relative flex items-center justify-center min-h-screen h-[900px] bg-gray-100">
 


  
//   <div className="relative z-10 flex justify-center items-center min-h-screen">
//     <div className="w-[717px] h-[731px] opacity-100  top-[84px] left-[359px] border-[#E2E4E84D] bg-[#ffffff] rounded-[16px] border border-solid">
//      <section className='w-full  h-[60px] flex justify-between opacity-100 border-b border-[#F6F6F6] rounded-t-[16px] px-[20px] py-[12px]'>
//         <span className='w-[90%] h-[15px] font-inter font-semibold text-[20px] leading-[150%] tracking-[-0.04em] text-[#1D2939]'>Settings</span>
//         <span className='w-[36px] h-[36px] opacity-100 rounded-full border p-[8px] flex items-center justify-center gap-[12px] border-[#F1F2F3] bg-[#F6F8FA]'>
//          <Icon icon="iconamoon:close-bold" width="24" height="24"  style={{color:' #000'}} />
//         </span>
//      </section>
//      <section className='w-full h-[611px]  border-none opacity-100 border-l px-[64px] py-[32px] flex flex-col gap-[32px]  '>
//         <div className='w-[325px] h-[96px] flex-col opacity-100 flex   gap-[24px]'>
        
        
//     <div className="w-full h-[44px] opacity-100 flex flex- items-center gap-[20px]">
//                 <div className=' w-full h-[44px] rounded-md flex gap-[8px] p-[8px]'>
//                     <button className='w-[68px] h-[36px] opacity-100 rounded-sm gap-2 pt-2 pr-6 pb-4 pl-3 text-sm px-2 py-2 bg-[#F9F5FF]'>
//                         <span className='w-[44px] h-[20px] font-semibold text-[14px] leading-[20px] tracking-normal font-inter text-[#685BC7]'>Profile</span>
//                     </button>
//                     <button className='w-[81px] h-[36px] opacity-100  rounded-sm gap-2 pt-2 pr-6 pb-4 text-sm  pl-3'>
//                         <span className='w-[57px] h-[20px] font-semibold text-[14px] leading-[20px] tracking-normal font-inter text-[#667085]'>Security</span>
//                     </button>
//                     <button className='w-[66px] h-[36px] opacity-100 rounded-sm gap-2 pt-2 pr-6 pb-4 pl-3 text-sm px-2 py-2 '>
//                         <span className='w-[42px] h-[20px] font-semibold text-[14px] leading-[20px] tracking-normal font-inter text-[#667085]'>Billing</span>
//                     </button>
//                    <button className='w-[78px] h-[36px] opacity-100  mb-[10px] mt-[0px] rounded-sm gap-2  pr-2  pl-2 '>
//                     <span className='h-[20px] w-[54px] font-semibold text-[14px] leading-[20px] tracking-normal text-[#667085] font-inter'>Log Out</span>
//                    </button>
                  
//                 </div>
                
                 
 

//          </div>
        
            
//          <div className='h-[28px] w-[134px]  font-semibold text-[18px] leading-[28px] tracking-normal font-inter text-[#101828]'>Account Profile</div>
//          </div>

//          <div className='w-[100%] h-[489px]  flex flex-col gap-[16px]'>
//             <div className='w-full h-[100px] items-center flex gap-[12px]'>
//                 <img src="/userse.png" className=' w-[100px] h-[100px] bg-[#F2F4F7] rounded-full' />
//                 <div className='w-[119px] h-[36px] opacity-100 rounded-[64px] gap-1 pt-[6px] pr-[20px] pb-[10px] pl-[20px] bg-[#F2F4F7]'>
//                     <span className='w-[79px] h-[9px] font-semibold text-[12px] leading-[18px] tracking-normal font-inter text-[#475467]'>Upload Photo</span>
//                 </div>
//             </div>
//             <div className='w-full h-[332px] flex flex-col gap-[12px] '>
//                 <div className='w-full h-[74px]'>
//                     <div className='w-full h-[30px] opacity-100 gap-[10px] pt-[5px] pb-[5px]'>
//                         <span className='w-[66px] h-[20px] font-medium text-[14px] leading-[20px] tracking-normal align-middle font-inter text-[#344054]'>Full Name</span>
//                         <input placeholder='Enter Name' className='w-full  h-[44px] text-[#98A2B3] font-normal text-[14px] leading-[20px] tracking-normal align-middle font-inter border-[#D0D5DD] opacity-100 rounded-[12px] border border-solid gap-2 p-4'/>
                            
                        
//                     </div>
//                 </div>

//                    <div className='w-full h-[74px]'>
//                     <div className='w-full h-[30px] opacity-100 gap-[10px] pt-[5px] pb-[5px]'>
//                         <span className='w-[103px] h-[20px] font-medium text-[14px] leading-[20px] tracking-normal align-middle font-inter text-[#344054]'>Business Name</span>
//                         <input placeholder='Enter business name' className='w-full  h-[44px] text-[#98A2B3] font-normal text-[14px] leading-[20px] tracking-normal align-middle font-inter border-[#D0D5DD] opacity-100 rounded-[12px] border border-solid gap-2 p-4'/>
                            
                        
//                     </div>
//                 </div>

//                   <div className='w-full h-[74px]'>
//                     <div className='w-full h-[30px] opacity-100 gap-[10px] pt-[5px] pb-[5px]'>
//                         <span className='w-[103px] h-[20px] font-medium text-[14px] leading-[20px] tracking-normal align-middle font-inter text-[#344054]'>Business Name</span>
//                         <div>
//                     {/* <Selectbox formik={formik} /> */}
// </div>

//   <div className='w-full h-[74px]'>
//                     <div className='w-full h-[30px] opacity-100 gap-[10px] pt-[5px] pb-[5px]'>
//                         <span className='w-[36px] h-[20px] font-medium text-[14px] leading-[20px] tracking-normal align-middle font-inter text-[#344054]'>Email</span>
//                         <input placeholder='Enter email' className='w-full  h-[44px] text-[#98A2B3] font-normal text-[14px] leading-[20px] tracking-normal align-middle font-inter border-[#D0D5DD] opacity-100 rounded-[12px] border border-solid gap-2 p-4'/>
                            
                        
//                     </div>
//                 </div>
                            
                        
//                     </div>
//                 </div>
//             </div>
//          </div>
  
//      </section>
//      <section className='w-full h-[60px] opacity-100 justify-end flex  border border-[#F6F6F6] border-t-[1px] pt-[12px] pr-[20px] pb-[12px] pl-[20px]'>
//         <div className='w-[161px] h-[36px] opacity-100 rounded-lg gap-[10px] pt-[7px] pr-[16px] pb-[8px] pl-[28px] mr-[0px] bg-[#685BC7]'>
//             <span className='w-[94px] h-[20px] font-sans font-semibold text-sm leading-5 tracking-normal text-center text-[#FFFFFF]'>Save changes</span>
//         </div>

//      </section>
      



//     </div>
//   </div>
// </div>

//      </div>
//   )
// }

// export default Page

