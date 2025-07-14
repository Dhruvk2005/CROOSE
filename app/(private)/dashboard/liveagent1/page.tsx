import React from 'react'
    import { Icon } from '@iconify/react/dist/iconify.js';
   

const Page = () => {
  return (
    <div className=' w-full  h-[900px] opacity-100 gap-[10px]'>
     
                 <div className='w-[100%] h-[64px] flex justify-between items-center' style={{borderBottom:"1px solid #EAECF0"}}>
                   <div className='flex items-center  gap-[20px] text-[#121217] '>
                     <span className='font-semi font-bold text-[20px] pl-[20px] ml-[10px]' >Space</span>
           
                   </div>
                   <div className='mr-[20px]' >
                     <li className='flex w-[98px] gap-[23px] justify-center items-center '>
                       <div className='w-[46px] flex gap-[10px] border-r-[2px]  border-[#F2F4F7]' >
                         <Icon icon="mynaui:search" width="24" height="24" style={{ color: '#000' }} />
                       </div>
                       <div className='w-[16px] flex gap-[10px]'>
                         <svg width="24" height="20" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M9.99255 15.0123C10.3499 16.346 9.55845 17.7168 8.22478 18.0742C6.89112 18.4315 5.52028 17.6401 5.16292 16.3064M7.07633 4.78404C7.32983 4.32796 7.41334 3.77671 7.26762 3.23288C6.96983 2.12149 5.82746 1.46194 4.71607 1.75974C3.60468 2.05753 2.94514 3.1999 3.24293 4.31129C3.38865 4.85512 3.73659 5.29076 4.18418 5.55899M11.53 7.87107C11.2325 6.76096 10.4384 5.83266 9.32236 5.29038C8.2063 4.74811 6.8597 4.63627 5.5788 4.97949C4.2979 5.32271 3.18763 6.09285 2.49223 7.12051C1.79683 8.14817 1.57327 9.34915 1.87072 10.4593C2.36287 12.296 2.2673 13.7613 1.95651 14.8747C1.60229 16.1438 1.42518 16.7783 1.47302 16.9057C1.52777 17.0515 1.56737 17.0915 1.71256 17.1478C1.83947 17.1969 2.37261 17.0541 3.4389 16.7684L13.3265 14.119C14.3927 13.8333 14.9259 13.6904 15.0112 13.5844C15.1088 13.4631 15.1231 13.4086 15.0976 13.255C15.0754 13.1208 14.6047 12.6598 13.6634 11.7379C12.8375 10.929 12.0221 9.70778 11.53 7.87107Z" stroke="#101828" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                         </svg>
                       </div>
           
                     </li>
           
                   </div>
           
           
                 </div>

                 <div className="h-auto w-full bg-[#ffffff] relative mt-[15px] flex flex-col gap-5  items-center">
        <div className="w-[100%]  items-center mt-[-17px]   flex flex-row h-[64px] " style={{borderBottom:"1px solid #EAECF0"}}>
          <img
            src="/arrow.png"
            alt="arrow"
            className="h-[20px] ml-[10px] m-[-1px] w-[20px]"
          />
          <div className="w-[48px] ml-[10px] h-[48px]">
            <img
              src="/facebg.png"
              alt="face imge"
              className="w-[48px] h-[48px] top-[8px]"
            ></img>
          </div>
          <div className="w-[50%] sm:w-[70%] text-[13px] sm:text-[1.125rem] text-[#101828] ml-[18px] font-sans font-semibold text-lg leading-7 tracking-normal align-middle h-[28px]">
            Space Name
          </div>
          <div className="w-[180px] sm:w-[211px] right-[0px] flex flex-row  gap-[8px] h-[36px]">
            <button className="w-[50%] sm:w-[103px] h-[50px] sm:h-[36px]  flex flex-row  pt-2 pr-4 pb-2 bg-[#EAECF0] pl-4 gap-[10px] rounded-[8px] border-[0]">
              <div className="font-sans font-semibold text-[10px] sm:text-[12px] w-[100%] leading-5 tracking-normal text-center  text-[#685BC7] h-[20px]">
                Spaces IQ
              </div>
            </button>
            <button className="w-[50%] sm:w-[103px] h-[50px] sm:h-[36px] flex flex-row pt-2 pr-4 pb-2 pl-4 gap-[10px] bg-[#685BC7] rounded-[8px]">
              <div className="w-[100%] font-sans  text-[10px] sm:text-[12px] font-semibold text-sm leading-5 tracking-normal text-center text-[#FFFFFF] h-[50px] sm:h-[20px]">
                Run Agent
              </div>
            </button>
          </div>
        </div>
        

        <div className=" flex flex-row flex-wrap gap-[20px] justify-center w-[100%]   rounded-lg">
      
          <div className="w-[260px] rounded-[16px] border border-gray-300 h-[160px]">
            <div className="w-[100%] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]">
              <img src="/chat.png" />
              <div className="w-[212px] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] ">
                Total Chats
              </div>
            </div>
            <div className=" text-center text-[#101828] flex items-center justify-center w-[100%] h-[70%]  font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]">
              0
            </div>
          </div>

      
          <div className="w-[260px] rounded-[16px] border border-gray-300 h-[160px]">
            <div className="w-[100%] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]">
              <img src="/message.png" />
              <div className="w-[212px] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] ">
                {" "}
                Live Chats
              </div>
            </div>
            <div className=" text-center text-[#101828] flex items-center justify-center w-[100%] h-[70%]  font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]">
              0
            </div>
          </div>

          
          <div className="w-[260px] rounded-[16px] border border-gray-300 h-[160px]">
            <div className="w-[100%] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]">
              <img src="/timer.png" />
              <div className="w-[212px] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] ">
                {" "}
                Avg. Response Time
              </div>
            </div>
             <div className=" text-center text-[#101828] flex items-center justify-center w-[100%] h-[70%]  font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]">
              0
            </div>
          </div>

          
          <div className="w-[260px] rounded-[16px] border border-gray-300 h-[160px]">
            <div className="w-[100%] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]">
              <img src="/party-popper.png" />
              <div className="w-[100%] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] ">
                {" "}
                Sales
              </div>
            </div>
            <div className=" text-center text-[#101828] flex items-center justify-center w-[100%] h-[70%]  font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]">
              0
            </div>
          </div>
        </div>

  

       <section className='w-full h-auto  items-center justify-center sm:h-[486px] opacity-100 flex flex-col gap-[16px] rotate-0'>
  <div className='w-full sm:w-[1088px] h-auto sm:h-[36px] flex flex-col sm:flex-row items-start sm:items-center bg-[#ffffff] opacity-100 gap-2 px-4 sm:px-0'>
    <div className='w-full sm:w-[936px] h-auto sm:h-[36px] opacity-100 gap-4 flex flex-col sm:flex-row items-start sm:items-center'>
      <div className='w-full sm:w-[165px] h-auto sm:h-[36px] opacity-100 pt-1 pr-[10px] pb-1 pl-1 bg-[#EFF6FF] border-[#BFDBFE] flex flex-row rounded-3xl border border-solid'>
        <div className='w-full sm:w-[165px] h-auto sm:h-[36px] opacity-100 gap-2 pr-[6px] pb-1 pl-[6px] rounded-none flex items-center'>
          <span className='font-inter font-normal text-[16px] leading-4 tracking-[-0.1px]'>😎</span>
          <span className='w-auto sm:w-[80px] h-[20px] font-sans font-semibold text-xs leading-5 tracking-normal text-[#18181B] ml-1'>Main Account</span>
        </div>
        <div className='w-[35px] h-[20px] opacity-100 gap-0 flex justify-center items-center mt-1 text-center rounded-3xl bg-[#DC2626]'>
          <span className='w-[19px] h-[16px] font-sans font-semibold text-center text-[10px] leading-4 tracking-normal text-[#ffffff]'>99+</span>
        </div>
      </div>
    </div>

    <div className='hidden sm:block w-[14px] mt-4 border-[#E4E4E7] h-0 opacity-100 border border-solid rotate-[-90deg]'></div>

    <div className='w-full sm:w-[136px] h-[36px] opacity-100 gap-[10px] text-center py-1 rounded-lg border border-[#E4E4E7] bg-[#F4F4F5] flex justify-center items-center'>
      <span className='w-full h-[20px] font-sans font-semibold text-sm leading-5 tracking-normal text-center text-[#18181B]'>Add new space</span>
    </div>
  </div>

  <section className='w-full h-auto sm:h-[434px] flex flex-col  sm:flex-row flex-wrap justify-center items-center bg-[#ffffff] opacity-100 gap-4'>
    <section className='w-full sm:w-[320px] h-auto sm:h-[434px] opacity-100 rounded-[16px] border border-[#E4E4E7]'>
      <div className='w-full sm:w-[320px] h-[56px] rotate-0 opacity-100 gap-2 border-b pb-[12px] pt-[12px] pl-[12px] pr-[12px] border-[#E4E4E7]'>
        <div className='w-full sm:w-[296px] h-[20px] flex items-center rotate-0 opacity-100 gap-3'>
          <span className='rotate-90 w-[16px] h-[16px] text-[#18181B]'>
            <Icon icon="ri:loader-4-line" width="24" height="24" />
          </span>
          <span className='w-auto h-[20px] mt-3 font-medium text-sm leading-5 align-bottom text-[#18181B]'>Fetching chats</span>
        </div>
      </div>

      <section className='w-full sm:w-[320px] h-auto sm:h-[378px] rotate-0 opacity-100'>
        <div className="h-[378px] overflow-y-hidden overflow-x-hidden scrollbar-hide">
          {Array(6).fill(null).map((_, i) => (
            <div key={i} className='w-full sm:w-[320px] h-[69px] flex gap-2 pt-[15px] pl-[15px] opacity-100 rotate-0'>
              <div className='w-[32px] h-[32px] rounded-full opacity-100 rotate-0 bg-[#E4E4E7]'></div>
              <div className="space-y-2 w-full border-zinc-200 border-b-1 max-w-md">
                <div className="h-[12px] w-[250px] rounded-full bg-gradient-to-r from-gray-300 to-white/0"></div>
                <div className="h-[12px] w-[250px] rounded-full bg-gradient-to-r from-gray-300 to-white/0"></div>
                <div className="h-[12px] rounded-full bg-gradient-to-r from-gray-300 to-white/0 w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>

    <section className='w-full sm:w-[752px] h-auto sm:h-[434px] flex justify-center items-center opacity-100 rounded-[16px] rotate-0 border border-[#E4E4E7]'>
      <div className='w-[256px] h-[132px] flex justify-center flex-col items-center opacity-100 gap-[20px] rounded-[8px] rotate-0'>
        <div className='w-[48px] h-[48px] opacity-100 gap-[10px] rounded-[12px] flex justify-center items-center rotate-0 bg-[#F4F4F5]'>
          <span className='text-[#71717A]'><Icon icon="lucide:message-circle-dashed" width="19" height="19" /></span>
        </div>
        <div className='w-[256px] h-[64px] text-center opacity-100 gap-[4px] rotate-0'>
          <span className='w-[132px] h-[20px] font-sans font-semibold text-sm leading-5 text-[#18181B] tracking-normal text-center'>Conversation panel</span><br />
          <span className='w-[256px] h-[40px] font-sans font-normal text-sm leading-5 tracking-normal text-center align-bottom text-[#71717A]'>Select a conversation from the live chats to view full conversation details</span>
        </div>
      </div>
    </section>
  </section>
</section>

      </div>
    </div>
  )
}

export default Page
