'use client'
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import Spacenav from './spacenav';
import { useParams, useSearchParams } from 'next/navigation';
import { spaceLiveChats } from '@/app/Apis/publicapi';


interface ChatUser {
  number: string;
  sms: string;
  button: string; 
  time: string;
  count?: string;
  img: string;
}

const LiveAgent2  = () => {
  const [spaceLiveChatsData, setSpaceLiveChatsData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { spaceId } = useParams();
    const searchParams: any = useSearchParams();
    const id = searchParams.get('id');
  


  useEffect(() => {
    const fetchSpaceLiveChats = async () => {
      try {
        setLoading(true);
        const res = await spaceLiveChats(Number(id));
        console.log("API Data:", res); 
        setSpaceLiveChatsData(res);
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };
    fetchSpaceLiveChats();
  }, [id]);


  const transformChatData = (data: any): ChatUser[] => {
    if (!data || typeof data !== 'object') return [];

    // Handle different possible response structures
    const rawData = data.data || data;
    
    return Object.entries(rawData).map(([phoneNumber, message], index) => ({
      number: phoneNumber,
      sms: typeof message === 'string' ? message : JSON.stringify(message),
      button: index < 2 ? (index === 0 ? 'General' : 'Enquiry') : 'General',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      count: index < 2 ? '5' : undefined,
      img: '/Profiledummy.png',
    }));
  };

  const transformedUsers = transformChatData(spaceLiveChatsData);
  const totalChats = transformedUsers.length;
  const liveChats = transformedUsers.filter((_, index) => index < 2).length;

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }
  return (
    <div className="w-full h-[900px] opacity-100 gap-[10px]">
     

        <section className="w-full h-auto items-center justify-center sm:h-[486px] opacity-100 flex flex-col gap-[16px] rotate-0">
          <div className="w-full sm:w-[1088px] h-auto sm:h-[36px] flex flex-col sm:flex-row items-start sm:items-center bg-[#ffffff] opacity-100 gap-2 px-4 sm:px-0">
            <div className="w-full sm:w-[936px] h-auto sm:h-[36px] opacity-100 gap-4 flex flex-col sm:flex-row items-start sm:items-center">
              <div className="w-full sm:w-[165px] h-auto sm:h-[36px] opacity-100 pt-1 pr-[10px] pb-1 pl-1 bg-[#EFF6FF] border-[#BFDBFE] flex flex-row rounded-3xl border border-solid">
                <div className="w-full sm:w-[165px] h-auto sm:h-[36px] opacity-100 gap-2 pr-[6px] pb-1 pl-[6px] rounded-none flex items-center">
                  <span className="font-inter font-normal text-[16px] leading-4 tracking-[-0.1px]">
                    😎
                  </span>
                  <span className="w-auto sm:w-[80px] h-[20px] font-sans font-semibold text-xs leading-5 tracking-normal text-[#18181B] ml-1">
                    Main Account
                  </span>
                </div>
                <div className="w-[35px] h-[20px] opacity-100 gap-0 flex justify-center items-center mt-1 text-center rounded-3xl bg-[#DC2626]">
                  <span className="w-[19px] h-[16px] font-sans font-semibold text-center text-[10px] leading-4 tracking-normal text-[#ffffff]">
                    {totalChats > 99 ? '99+' : totalChats}
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden sm:block w-[14px] mt-4 border-[#E4E4E7] h-0 opacity-100 border border-solid rotate-[-90deg]"></div>

            <div className="w-full sm:w-[136px] h-[36px] opacity-100 gap-[10px] text-center py-1 rounded-lg border border-[#E4E4E7] bg-[#F4F4F5] flex justify-center items-center">
              <span className="w-full h-[20px] font-sans font-semibold text-sm leading-5 tracking-normal text-center text-[#18181B]">
                Add new space
              </span>
            </div>
          </div>

          <section className="w-full h-auto sm:h-[434px] flex flex-col sm:flex-row flex-wrap justify-center items-center bg-[#ffffff] opacity-100 gap-4">
            <section className="w-full sm:w-[320px] h-auto sm:h-[434px] opacity-100 rounded-[16px] ">
              <div className="w-full sm:w-[320px] h-[56px] rotate-0 opacity-100 gap-2 border-b pb-[12px] border-[1px] rounded-t-[16px] border-[#E4E4E7] pt-[12px] pl-[12px] pr-[12px] border-[#E4E4E7]">
                <div className="w-full sm:w-[296px] h-[20px] flex items-center rotate-0 opacity-100 gap-3">
                  <span className="rotate-0 w-[16px] h-[16px] text-[#18181B]">
                    <Icon icon="lucide:message-circle-more" width="24" height="24" />
                  </span>
                  <span className="w-auto h-[20px] mt-3 font-semibold text-sm leading-5 align-bottom text-[#18181B]">
                    Live Chats
                  </span>
                </div>
              </div>

              <section className="w-full sm:w-[320px] h-auto sm:h-[378px] rotate-0 opacity-100">
                <div className="h-[378px] overflow-y-auto border-[1px] border-[#E4E4E7] rounded-b-[16px] overflow-x-hidden scrollbar-hide">
                  {transformedUsers.length > 0 ? (
                    transformedUsers.map((user, index) => (
                      <div
                        key={`${user.number}-${index}`}
                        className={`w-full sm:w-[320px] h-[87px] flex gap-2 pt-[15px] pl-[15px] pr-[10px] opacity-100 rotate-0 ${
                          index > 1 ? 'opacity-50' : ''
                        }`}
                      >
                        <div
                          className={`w-[32px] h-[32px] rounded-full overflow-hidden flex-shrink-0 bg-[#E4E4E7] ${
                            index > 1 ? 'opacity-50' : ''
                          }`}
                        >
                          {user.img && (
                            <img
                              src={user.img}
                              alt="user"
                              className="w-full h-full object-cover rounded-full"
                            />
                          )}
                        </div>

                        <div
                          className={`flex-1 flex flex-col border-b border-zinc-200 ${
                            index > 1 ? 'opacity-50' : ''
                          }`}
                        >
                          <div className="font-sans font-semibold text-sm leading-[100%] text-[#0A0A0A] truncate">
                            {user.number}
                          </div>
                          <div className="font-sans font-normal text-xs leading-5 truncate">
                            {user.sms}
                          </div>
                          <div className="font-sans font-normal text-xs leading-4 text-[#71717A]">
                            <span
                              className={`w-[54px] h-[20px] opacity-100 gap-[10px] pt-[2px] pr-[5px] pb-[2px] pl-[5px] rounded-[4px] font-sans font-normal text-xs leading-4 
                                ${user.button === 'General' ? 'bg-[#F4F4F5] text-black' : ''}
                                ${user.button === 'Enquiry' ? 'bg-[#FEF3C7] text-[#78350F]' : ''}
                                ${user.button === 'Broken' ? 'bg-[#FEE2E2] text-[#7F1D1D]' : ''}
                                ${user.button === 'Complete Sale' ? 'bg-[#DCFCE7] text-[#14532D]' : ''}
                              `}
                            >
                              {user.button}
                            </span>
                          </div>
                        </div>

                        <div className="w-[50px] h-[36px] flex flex-col items-end border-zinc-200">
                          <span
                            className={`font-sans font-normal text-xs leading-4 
                              ${user.button === 'General' ? 'text-[#1DAB61]' : ''}
                              ${user.button === 'Enquiry' ? 'text-[#1DAB61]' : ''}
                              ${user.button === 'Broken' ? 'text-[#71717A]' : ''}
                              ${user.button === 'Complete Sale' ? 'text-[#71717A]' : ''}
                            `}
                          >
                            {user.time}
                          </span>

                          {user.count && (
                            <div className="w-[35px] flex justify-end mt-auto">
                              <div className="font-sans w-[16px] h-[16px] min-w-[16px] text-center flex justify-center items-center rounded-[8px] text-white bg-[#1DAB61] font-normal text-xs leading-5 truncate">
                                {user.count}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex justify-center items-center h-full text-[#71717A]">
                      No live chats available
                    </div>
                  )}
                </div>
              </section>
            </section>

            <section className="w-full sm:w-[752px] h-auto sm:h-[434px] flex justify-center items-center opacity-100 rounded-[16px] rotate-0 border border-[#E4E4E7]">
              <div className="w-[256px] h-[132px] flex justify-center flex-col items-center opacity-100 gap-[20px] rounded-[8px] rotate-0">
                <div className="w-[48px] h-[48px] opacity-100 gap-[10px] rounded-[12px] flex justify-center items-center rotate-0 bg-[#F4F4F5]">
                  <span className="text-[#71717A]">
                    <Icon icon="lucide:message-circle-dashed" width="19" height="19" />
                  </span>
                </div>
                <div className="w-[256px] h-[64px] text-center opacity-100 gap-[4px] rotate-0">
                  <span className="w-[132px] h-[20px] font-sans font-semibold text-sm leading-5 text-[#18181B] tracking-normal text-center">
                    Conversation panel
                  </span>
                  <br />
                  <span className="w-[256px] h-[40px] font-sans font-normal text-sm leading-5 tracking-normal text-center align-bottom text-[#71717A]">
                    Select a conversation from the live chats to view full conversation details
                  </span>
                </div>
              </div>
            </section>
          </section>
        </section>
      </div>
   
  );
};

export default LiveAgent2 ;