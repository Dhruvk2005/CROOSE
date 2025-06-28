import React from 'react'

const Spaceiqcolor = () => {
  return (
    <div>
      <div className="relative  z-10">
  <div className="fixed inset-0 bg-gray-500/75  transition-opacity flex justify-center items-center">
    <div className="w-full flex justify-center   px-4 sm:px-6">
      <div className="w-full max-w-4xl h-[700px]  flex flex-col items-center border rounded-2xl bg-white">

        
        <div className="w-[97%] h-[100px] flex text-center p-[30px]  items-center justify-between ">
          <img src="/arrow-left.png" className="h-5 w-5" />
          <div className="text-[#121217] font-sans font-semibold text-xl leading-none tracking-tight text-center">
            Scan QR code
          </div>
          <img src="/x.png" className="h-5 w-5" />
        </div>

        <div className="bg-white flex flex-col border-b px-4 pb-12 gap-8 w-full items-center">
          
          
          <div className="w-full h-[100px]  flex flex-col justify-center items-center gap-2 text-center">
            <img src="/Frame.png" className="w-[105px] h-[16px] flex gap-[4px]" />
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

            
            <div className="w-[70%]">
              <img src="/Line 10.png" alt="line" className="w-[90%]" />
            </div>

            
            <div className="w-[80%] h-[116px]  ml-[60px] flex flex-col gap-3">
              <span className="text-[#18181B] h-[24px] font-sans font-medium text-base leading-6">
                Documents
              </span>




              <div className="w-[80%] max-h-[56px] rounded-lg border  bg-[#ffffff]   flex flex-col gap-2 ">
<div className="w-full max-w-md mx-auto px-4 py-2 bg-[#ffffff]   rounded-lg flex flex-col sm:flex-row sm:justify-between items-center text-center gap-2">
  <span className="font-sans font-semibold text-sm mt-[8px] leading-6 tracking-normal text-[#101828]">
    4 documents added
  </span>
  <span className="flex flex-row items-center justify-center gap-1">
    <span className="font-sans font-normal text-sm mt-[8px] leading-6 tracking-normal text-[#475467]">
      See files
    </span>
    <img className="w-4 h-4" src="/files.png" alt="Files icon" />
  </span>
</div>





                
                <div className="w-[95px] h-[28px] mt-[25px] pl-[4px] flex-row  border rounded-[8px] pt-[4px]  pb-[4px]  flex gap-[10px] ml-[12px]">
                  <span className="w-[95px] h-[20px] text-[#685BC7]  font-sans font-normal text-sm leading-5 tracking-normal text-center">Add more</span>
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
</div> 
    </div>
  )
}

export default Spaceiqcolor
