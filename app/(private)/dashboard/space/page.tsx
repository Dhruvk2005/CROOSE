import React from "react";
// import Navbar from '@/app/(public)/component/page'

const Page = () => {
  return (
    <>
      <div className="h-[900px] w-full bg-[#FFFFFF] relative flex flex-col gap-5  ">
        <div className="w-[100%] border border-b-1px items-center mt-[-17px]   flex flex-row h-[64px] ">
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
          <div className="w-[70%] text-[#101828] ml-[18px] font-sans font-semibold text-lg leading-7 tracking-normal align-middle h-[28px]">
            Space Name
          </div>
          <div className="w-[211px] right-[0px] flex flex-row  gap-[8px] h-[36px]">
            <div className="w-[103px] h-[36px] flex flex-row border pt-2 pr-4 pb-2 bg-[#EAECF0] pl-4 gap-[10px] rounded-[8px]">
              <div className="font-sans font-semibold text-sm w-[71px] leading-5 tracking-normal text-center  text-[#685BC7] h-[20px]">
                Spaces IQ
              </div>
            </div>
            <div className="w-[103px] h-[36px] flex flex-row pt-2 pr-4 pb-2 pl-4 gap-[10px] bg-[#685BC7] rounded-[8px]">
              <div className="w-[71px] font-sans font-semibold text-sm leading-5 tracking-normal text-center text-[#FFFFFF] h-[20px]">
                Run Agent
              </div>
            </div>
          </div>
        </div>
        {/* <Navbar /> */}

        {/* Top Cards Row */}
        <div className=" flex flex-row flex-wrap gap-[20px] justify-center w-[100%]   rounded-lg">
          {/* Card 1 */}
          <div className="w-[260p] rounded-[16px] border border-gray-300 h-[160px]">
            <div className="w-[260px] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]">
              <img src="/chat.png" />
              <div className="w-[212px] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] ">
                Total Chats
              </div>
            </div>
            <div className="h-[116px] text-center text-[#101828]  p-[24px] g-[24px] w-[260px] font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]">
              0
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[260p] rounded-[16px] border border-gray-300 h-[160px]">
            <div className="w-[260px] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]">
              <img src="/message.png" />
              <div className="w-[212px] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] ">
                {" "}
                Live Chats
              </div>
            </div>
            <div className="h-[116px] text-center text-[#101828]  p-[24px] g-[24px] w-[260px] font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]">
              0
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-[260p] rounded-[16px] border border-gray-300 h-[160px]">
            <div className="w-[260px] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]">
              <img src="/timer.png" />
              <div className="w-[212px] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] ">
                {" "}
                Avg. Response Time
              </div>
            </div>
            <div className="h-[116px] text-center text-[#101828]  p-[24px] g-[24px] w-[260px] font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]">
              0
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-[260p] rounded-[16px] border border-gray-300 h-[160px]">
            <div className="w-[260px] border-b border-gray-300 p-[12px] gap-[8px] flex text-[#EAECF0] h-[44px]">
              <img src="/party-popper.png" />
              <div className="w-[212px] h-[20px] font-sans font-medium text-xs leading-5 tracking-normal text-[#475467] ">
                {" "}
                Sales
              </div>
            </div>
            <div className="h-[116px] text-center text-[#101828]  p-[24px] g-[24px] w-[260px] font-sans font-semibold text-4xl leading-[100%] tracking-[-0.025em]">
              0
            </div>
          </div>
        </div>

        <section className="flex justify-center">
          <div className="w-[89%] h-[486px]   bottom-0  rounded-lg border border-[#EAECF0]">
            <div className="w-[100%] flex flex-row items-center justify-center  border border-b-[#EAECF0] gap-[10px]  rounded-t-[10px] h-[60px]">
              <div className="h-[32px] bg-[#F2F4F7] border border-[#F2F4F7] p-[8px] flex  gap-[10px]  rounded-[8px] w-[32px]">
                <img
                  src="/message-circle.png"
                  alt="circle-sms"
                  className="bg-[#EAECF0] height-[16px] w-[16px]  flex rounded-lg "
                />
              </div>
              <p className="font-sans w-[937px] h-[24px] text-[#101828]  font-semibold text-base leading-6 tracking-normal align-middle">
                Live Chats
              </p>

              <div className="w-[79px] rounded-[8px] border pt-[2px] pr-[4px] pb-[2px] pl-[4px]   border-gray-100 gap-[10px] h-[36px]"></div>
            </div>

            <div className="h-[307px]  p-[24px] flex justify-center items-center gap-[24px] [1088px]">
              <div className="w-[256px] h-[208px] flex items-center justify-center flex-wrap  rounded-[8px] gap-[20px]">
                <div className="h-[48px] w-[48px] flex  gap-[10px] flex-row bg-[#F2F4F7] rounded-[12px] p-[12px] ">
                  <img
                    src="/adda.png"
                    alt="circle-sms"
                    className=" h-[24px] w-[24px]"
                  />
                </div>

                <div className="h-[84px] gap-[4px] flex flex-col w-[256px]">
                  <div className="w-[256px] h-[20px] text-[#101828] font-sans    font-semibold text-sm leading-5 tracking-normal text-center">
                    No live chats yet
                  </div>
                  <div className="w-[256px] text-[#475467] font-sans font-normal text-sm leading-5 tracking-normal text-center align-bottom h-[60px]">
                    Connect your chat accounts, and customize them, to see live
                    chats and conversations
                  </div>
                </div>
                <div className="w-[148px] flex flex-row rounded-[8px] pt-[8px] pr-[16px] border border-gray-200 pl-[16px] pb-[8px] gap-[10px] bg-[#F2F4F7] h-[36px]">
                  <div className="w-[116px] h-[20px] font-sans font-semibold text-sm leading-5 tracking-normal text-center text-[#101828]">
                    Connect account
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>



{/* 

<div className="relative z-10">
  <div className="fixed inset-0 bg-gray-500/75 transition-opacity flex justify-center items-center">
    <div className="w-full flex justify-center px-4 sm:px-6">
      <div className="w-full max-w-4xl h-auto flex flex-col items-center border rounded-2xl bg-white">

         
        <div className="w-[90%] flex items-center justify-between h-16">
          <img src="/arrow-left.png" className="h-5 w-5" />
          <div className="text-[#121217] font-sans font-semibold text-xl leading-none tracking-tight text-center">
            Scan QR code
          </div>
          <img src="/x.png" className="h-5 w-5" />
        </div>

        
        <div className="bg-white flex flex-col border-b px-4 pb-12 gap-8 w-full items-center">
          
          
          <div className="w-full flex flex-col justify-center items-center gap-2 text-center">
            <span className="text-[#121217] font-sans font-semibold text-xl leading-none tracking-tight">
              Increase Space IQ
            </span>
            <span className="text-[#71717A] font-sans text-sm leading-5 w-full sm:w-[47%]">
              Set custom instructions and guidance for the agent to follow. Enter plain text, upload or link documents.
            </span>
          </div>

          
          <div className=" sm:w-[80%] h-[396px]  flex flex-col items-center px-4 py-6 rounded-lg gap-6">

            
            
            <div className="w-[80%] h-[186px]  ml-[60px] flex flex-col gap-3">
              <span className="text-[#18181B] font-sans font-medium text-base leading-6">
                Plain Text
              </span>
              
              <div className="w-[80%] h-[150px] rounded-xl border border-gray-300 p-4  flex flex-col gap-3 bg-white">
                <div className="text-[#71717A] font-sans text-sm leading-5">
                  Enter custom instructions
                </div>
                <div className="flex items-center mt-[20%] justify-end gap-2">
                  <span className="text-[10px] text-[#71717A] font-sans">Write with</span>
                  <span className="text-[10px] text-[#71717A] font-sans">Cactus AI</span>
                  <img src="/sms.png" alt="sms" className="h-4 w-4" />
                </div>
              </div>
            
            </div>

          
            <div className="w-[70%]">
              <img src="/Line 10.png" alt="line" className="w-[90%]" />
            </div>

            
            <div className="w-[80%] h-[116px] ml-[60px] flex flex-col gap-3">
              <span className="text-[#18181B] h-[24px] font-sans font-medium text-base leading-6">
                Documents
              </span>
              <div className="w-[80%] h-[80px] rounded-lg border p-4 flex flex-col gap-2 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap gap-2">
                      <span className="font-sans font-semibold text-sm text-[#020617]">Click to upload</span>
                      <span className="font-sans text-sm text-[#475467]">or drag and drop</span>
                    </div>
                    <span className="font-sans text-xs text-[#71717A]">CSV, PDF, DOCX</span>
                  </div>
                  <img src="/Featured icon.png" className="h-10 w-10" />
                </div>
              </div>
            </div>
          </div>

          
          <div className="w-[390px] flex flex-col sm:flex-row items-center gap-3 mt-6 px-4">
            <button className=" w-[315px] py-2 bg-[#685BC7] text-white font-sans font-semibold text-sm rounded-md text-center">
              Finish
            </button>
            <button className=" w-[63px] py-2 border border-zinc-200 bg-[#F4F4F5] text-[#685BC7] font-sans font-semibold text-sm rounded-md text-center">
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>  */}


<div className="relative  z-10">
  <div className="fixed inset-0 bg-gray-500/75 transition-opacity flex justify-center items-center">
    <div className="w-full flex justify-center   px-4 sm:px-6">
      <div className="w-full max-w-4xl h-[700px]  flex flex-col items-center border rounded-2xl bg-white">

        {/* Header */}  
        <div className="w-[97%] h-[100px] flex text-center p-[30px]  items-center justify-between ">
          <img src="/arrow-left.png" className="h-5 w-5" />
          <div className="text-[#121217] font-sans font-semibold text-xl leading-none tracking-tight text-center">
            Scan QR code
          </div>
          <img src="/x.png" className="h-5 w-5" />
        </div>

        {/* Content Wrapper */}
        <div className="bg-white flex flex-col border-b px-4 pb-12 gap-8 w-full items-center">
          
          {/* Intro */}
          <div className="w-full h-[100px]  flex flex-col justify-center items-center gap-2 text-center">
            <img src="/Frame.png" className="w-[105px] h-[16px] flex gap-[4px]" />
            <span className="text-[#121217] font-sans font-semibold text-xl leading-none tracking-tight">
              Increase Space IQ
            </span>
            <span className="text-[#71717A] font-sans text-sm leading-5 w-full sm:w-[47%]">
              Set custom instructions and guidance for the agent to follow. Enter plain text, upload or link documents.
            </span>
          </div>

          {/* Input Section */}
          <div className=" sm:w-[80%] h-[396px]  flex flex-col items-center px-4 py-6 rounded-lg gap-6">

            {/* Plain Text */}
            
            <div className="w-[80%] h-[186px]  ml-[60px] flex flex-col gap-3">
              <span className="text-[#18181B] font-sans font-medium text-base leading-6">
                Plain Text
              </span>
              
              <div className="w-[80%] h-[150px] rounded-xl border border-gray-300 p-4   flex flex-col gap-3 text-[#101828]">
     
                <div className="w-[100%]  h-[216px] font-sans font-normal text-[15px] leading-5 tracking-normal overflow-y-auto ">
               <ul className="list-disc">  
                <li> Summarize long articles into bullet points.</li>
                <li>  Always respond in a casual, friendly tone.</li>
                <li>Include emojis at the end of key points.</li>
                <li>Translate responses into French.</li>
                <li>Use examples relevant to graphic designers.</li>
                <li>Format outputs in Markdown.</li>
                <li>Keep answers under 100 words unless specified.</li>
                <li>Prioritize mobile app design in suggestions.</li>
                <li>Cite sources whenever facts are mentioned.</li>
                <li>Focus on Gen Z communication styles.</li>
                     </ul>
                </div>
               
              </div>
            
            </div>

            {/* Divider */}
            <div className="w-[70%]">
              <img src="/Line 10.png" alt="line" className="w-[90%]" />
            </div>

            {/* Document Upload */}
            <div className="w-[80%] h-[116px]  ml-[60px] flex flex-col gap-3">
              <span className="text-[#18181B] h-[24px] font-sans font-medium text-base leading-6">
                Documents
              </span>
              <div className="w-[80%] h-[56px] rounded-lg border p-4 flex flex-col gap-2 ">
                <div className="h-[24px] w-[100%] flex flex-row justify-between ">
                  <span className="h-[24px] w-[135px] font-sans font-semibold text-sm leading-6 tracking-normal text-[#101828]">4 documents added</span>
                  <span className="w-[81px] h-[24px] flex flex-row gap-[4px]">
                    <span className="w-[57px] h-[24px] font-sans font-normal text-sm leading-6 tracking-normal text-[#475467]">See files</span>
                    <img className="w-[11.33px] h-[13.33px] mt-[3.33px]" src="/files.png" />
                  </span>
                </div>
                <div className="w-[95px] h-[28px] mt-[10px] border rounded-[8px] pt-[4px]  pb-[4px]  flex gap-[10px] ml-[-10px]">
                  <span className="w-[95px] h-[20px] text-[#685BC7] font-sans font-normal text-sm leading-5 tracking-normal text-center">Add more</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-[390px] flex flex-col sm:flex-row items-center gap-3 mt-6 px-4">
            <button className=" w-[315px] py-2 bg-[#685BC7] text-white font-sans font-semibold text-sm rounded-md text-center">
              Finish
            </button>
            <button className=" w-[63px] py-2 border border-zinc-200 bg-[#F4F4F5] text-[#685BC7] font-sans font-semibold text-sm rounded-md text-center">
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 








      
    </>
  );
};

export default Page;
