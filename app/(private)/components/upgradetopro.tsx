'use client'
import React, { useEffect } from 'react'
import { Icon } from "@iconify/react";
import { PayApi, spaceChats } from '@/app/Apis/publicapi';
import { useParams, useSearchParams } from 'next/navigation';
import { useState } from 'react';



const Upgradetopro = (props: any) => {

  
 const searchParams = useSearchParams();
  const spaceId:any = searchParams.get('id');

  const [spaceUuid, setSpaceUuid] = useState(null);
    const [loading, setLoading] = useState(false);

  
useEffect(() => {
    const fetchSpaceStats = async () => {
      try {
        const res = await spaceChats(spaceId); 
        if (res?.space_uuid) {
          setSpaceUuid(res.space_uuid);
          console.log('Fetched UUID:', res.space_uuid);
        } else {
          console.error('No UUID found in response');
        }
      } catch (err) {
        console.error('Failed to fetch space stats:', err);
      }
    };

    if (spaceId) {
      fetchSpaceStats();
    }
  }, [spaceId]);

  const handlePayment = async () => {
    if (!spaceUuid) {
      console.error('spaceUuid not ready yet');
      return;
    }

    try {
      setLoading(true);
      const res = await PayApi(spaceUuid);
      console.log('Payment API response:', res?.data);
    } catch (err) {
      console.error('Payment failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenQrPage = () => {
  if (!spaceUuid) {
    console.error('UUID not available yet');
    return;
  }

  const qrUrl = `https://api.joincroose.com/croose/api/paystack/whapi/${spaceUuid}`;
  window.open(qrUrl, '_blank');
};


    return (
        <>
            <div className='fixed top-0 left-0 z-[50] w-full h-full bg-[#18181B66] flex items-center justify-center ' >
                <div className='  w-[400px] h-auto rounded-[16px] bg-[#FFFFFF] ' >
                    <div className='w-[400px]  rounded-t-[16px]  h-[89px] relative  bg-[#F3F0FA]' >

                        <Icon onClick={() => props.setProopen(false)} icon="charm:cross" width="16" height="26" style={{ color: "#000" }} className=' w-[30px] absolute top-[15px] left-[350px] ' />
                    </div>
                    <div className=' flex flex-col items-center w-[400px] h-auto p-[40px] gap-[16px]' >
                        <div className='w-[320px]' >
                            <ul className='flex flex-col gap-[16px]' >
                                <li className='text-[#101828] font-semibold text-[18px] font-sans  ' >Upgrade to Pro to Run your space</li>
                                <li className='w-[320px] rounded-[8px] p-[12px] bg-[#685BC71F] text-[#685BC7] font-sans font-400 text-[14px]  ' >This is a premium feature available exclusively on our Pro plan. Upgrade to Pro to unlock it.</li>
                                <hr className=" w-[320px] border-dotted border-t-2 border-[#EAECF0] " />

                                <li className='w-[320px] h-[40px] text-[#475467] font-400 text-[14px] font-sans ' >This is a premium feature available exclusively on our Pro plan. Upgrade to Pro to unlock it.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-center flex-col w-[400px] p-[20px] h-auto border-t-[1px] border-t-[#EAECF0]  gap-[12px]  ' >
                        <button onClick={() => {
                          
                           
                          handleOpenQrPage()

                        }} className=' justify-center font-sans w-[360px] text-[white] rounded-[8px]  bg-[#685BC7] flex pt-[8px] pr-[16px] pb-[8px] pl-[16px]  ' >Pay $199 </button>
                        {/* <button className='flex justify-center font-sans w-[360px]  rounded-[8px] text-white  bg-[#685BC7]  pt-[8px] pr-[16px] pb-[8px] pl-[16px]  ' >Pay $499 </button> */}
                    </div>
                    <div></div>


                </div>
            </div>

        </>
    )
}

export default Upgradetopro