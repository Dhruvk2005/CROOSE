'use client'
import Link from 'next/link'
import Documentpopup from './documentpopup'
import { BussinessCategories, GetSpaceId, getSpacePrompt, updateSpacePrompt } from '@/app/Apis/publicapi'
import { useState, useEffect } from 'react'

interface Category {
  id: number,
  name: string,
  description: string,
  template: string,
  created_at: string,
  updated_at: string,
  deleted_at: null;
  uuid: any;

}
const Spaceiqcolor = (props: any) => {

  const [spaceData, setSpaceData] = useState<Category[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  useEffect(() => {
    const SpaceCategories = async () => {


      try {
        const res = await BussinessCategories()
        setSpaceData(res.data)
        console.log(res.data)


      } catch (err) {
        console.log(err)

      }
    }
    SpaceCategories()

  }, [])

  const [spaceId, setSpaceId] = useState<number | null>(null);
  const [description, setDescription] = useState('');
  useEffect(() => {
    const fetchPrompt = async () => {
      try {
        const spaceRes = await GetSpaceId();
        const id = spaceRes?.spaces?.[0]?.id;
        if (!id) throw new Error("No space ID found!");

        setSpaceId(id); // Save ID for later use
        const promptRes = await getSpacePrompt(id);
        const promptContent = promptRes?.data?.prompt_content || "";
        setDescription(promptContent);
      } catch (err) {
        console.error("Error fetching prompt:", err);
      }
    };

    fetchPrompt();
  }, []);



  return (
    <div>
      <div className="relative  z-[40]">
        <div className="fixed inset-0 bg-[#18181B66] transition-opacity flex justify-center items-center">
          <div className="w-full flex justify-center   px-4 sm:px-6">
            <div className="w-full max-w-4xl h-[700px]  flex flex-col items-center border-2 border-[#EAECF0] rounded-2xl bg-white">


              <div className="w-[97%] h-[100px] flex text-center p-[10px]  items-center justify-between ">
                <img src="/arrow-left.png" className="h-5 w-5" />
                <div className="text-white font-sans font-semibold text-xl leading-none tracking-tight text-center">
                  Scan QR code
                </div>
                <img onClick={() => props.setSpaceiqcoloropen(false)} src="/x.png" className="h-5 w-5" />
              </div>

              <div className="bg-white flex flex-col border-b px-4 pb-12 gap-8 w-full items-center">


                <div className="w-full h-[100px]  flex flex-col justify-center items-center gap-2 text-center">
                  <img src="/Frame.png" className="w-[105px] h-[16px] flex gap-[4px]" />
                  <span className="text-[#121217] font-sans font-semibold text-xl leading-none tracking-tight">
                    Increase Space IQ
                  </span>
                  <span className="text-[#475467] font-sans text-sm leading-5 w-full sm:w-[47%]">
                    Set custom instructions and guidance for the agent to follow. Enter plain text, upload or link documents.
                  </span>
                </div>


                <div className=" sm:w-[80%] h-[396px]  flex flex-col items-center px-4 py-6 rounded-lg gap-6">


                  <div className="w-[80%] h-[186px] items-center flex  flex-col gap-3">
                    <span className="text-[#18181B] font-sans font-medium text-base leading-6">
                      Plain Text
                    </span>

                    <div className="w-[80%] h-[150px] rounded-[16px] border border-[#EAECF0] p-4 flex flex-col gap-3 bg-white overflow-y-auto scrollbar-thin">
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="text-[#71717A] font-sans text-sm leading-5 bg-transparent resize-none outline-none w-full h-full"
                      />
                      <div className="flex items-center justify-end gap-2 mt-auto">
                        <span className="text-[10px] text-[#71717A] font-sans">Write with</span>
                        <span className="text-[10px] text-[#71717A] font-sans">Cactus AI</span>
                        <img src="/sms.png" alt="sms" className="h-4 w-4" />
                      </div>
                    </div>
                  </div>


                  <div className="w-[70%]">
                    <img src="/Line 10.png" alt="line" className="w-[90%]" />
                  </div>


                  <div className="w-[80%] h-[116px] items-center flex flex-col gap-3">
                    <span className="text-[#18181B] h-[24px] font-sans font-medium text-base leading-6">
                      Documents
                    </span>




                    <div className="w-[80%] max-h-[56px] rounded-lg border-[#EAECF0] border-2  bg-[#ffffff]   flex flex-col gap-2 ">
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






                      <div>
                        <Link
                          href={""}
                          className='text-[#685BC7]  '
                          onClick={() => props.setDocopen(true)}
                        >
                          Add more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="w-[55%] ml-6 flex flex-col gap-[7px] sm:flex-row items-center  gap-[8px] px-4">
                 <button
  onClick={async () => {
    try {
      if (!spaceId) {
        console.error("spaceId not found");
        return;
      }

      await updateSpacePrompt(spaceId, description);
      console.log("Prompt updated successfully");

      // Close all modals and go to next
      props.setDocopen(false);
      props.setSpaceiqcoloropen(false);
      props.setSpaceiqopen(false);
      props.setProopen(true);
    } catch (err) {
      console.error("Failed to update prompt:", err);
    }
  }}
  className=" w-[70%] py-2 bg-[#685BC7] text-white font-sans font-semibold text-sm rounded-md text-center"
>
  Finish
</button>

                  <button className=" w-[23%] py-2 border border-zinc-200 bg-[#F4F4F5] text-[#685BC7] font-sans font-semibold text-sm rounded-md text-center">
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
