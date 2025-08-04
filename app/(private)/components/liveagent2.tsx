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
  customerName?: string | null;
  isTyping?: boolean;
}

const LiveAgent2 = () => {
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

    const rawData = data.data || data;
    
    // Handle if rawData is an array of chat objects
    if (Array.isArray(rawData)) {
      return rawData.map((chat, index) => ({
        number: chat.whatsapp_number || chat.number || `Unknown-${index}`,
        sms: chat.user_message || chat.message || 'No message',
        button: chat.category || 'General',
        time: chat.created_at ? new Date(chat.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        count: chat.unread_count ? chat.unread_count.toString() : undefined,
        img: '/Profiledummy.png',
        customerName: chat.customer_name || null,
        isTyping: false,
      }));
    }
    
    // Handle if rawData is an object with phone numbers as keys
    return Object.entries(rawData).map(([phoneNumber, chatData]: [string, any]) => ({
      number: chatData.whatsapp_number || phoneNumber,
      sms: chatData.user_message || chatData.message || (typeof chatData === 'string' ? chatData : 'No message'),
      button: chatData.category || 'General',
      time: chatData.created_at ? new Date(chatData.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      count: chatData.unread_count ? chatData.unread_count.toString() : undefined,
      img: '/Profiledummy.png',
      customerName: chatData.customer_name || null,
      isTyping: false,
    }));
  };

  const transformedUsers = transformChatData(spaceLiveChatsData);

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="w-full h-[900px] opacity-100 gap-[10px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex items-center bg-blue-50 border border-blue-200 px-3 py-1 rounded-full gap-2">
          <span>😎</span>
          <span className="text-sm font-semibold text-gray-800">Main Account</span>
          <span className="ml-2 bg-red-600 text-white text-xs px-2.5 py-0.5 rounded-full leading-5 min-w-[20px] text-center">
            {transformedUsers.length > 99 ? '99+' : transformedUsers.length}
          </span>
        </div>
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-4 w-full h-[calc(100vh-160px)]">
        {/* Live Chats */}
        <div className="w-full lg:w-[30%] border border-gray-200 rounded-lg shadow-sm flex flex-col">
          <div className="flex items-center gap-2 px-4 py-3 border-b bg-gray-50">
            <Icon icon="lucide:message-circle-more" className="text-gray-700" />
            <h2 className="text-sm font-semibold text-gray-700">Live Chats</h2>
          </div>
          <div className="flex-1 overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {transformedUsers.length > 0 ? (
              transformedUsers.map((user, index) => (
                <div
                  key={user.number}
                  className="flex items-start px-4 py-3 gap-3 border-b cursor-pointer transition-all duration-150 hover:bg-gray-50"
                >
                  <div className="relative">
                    <img
                      src={user.img}
                      alt="User"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    {/* Online indicator */}
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    {/* Display customer name if available, otherwise show phone number */}
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-sm font-semibold text-gray-900 truncate">
                        {user.customerName || user.number}
                      </div>
                      {user.customerName === 'Mom' && (
                        <span className="text-pink-500">💖</span>
                      )}
                    </div>
                    
                    {/* Show phone number below name if customer name exists */}
                    {user.customerName && (
                      <div className="text-xs text-gray-500 truncate mb-1">
                        {user.number}
                      </div>
                    )}
                    
                    {/* Message below name/number */}
                    <div className="text-xs text-gray-600 truncate mb-2">
                      {user.isTyping ? (
                        <span className="text-gray-500 italic">typing...</span>
                      ) : (
                        user.sms
                      )}
                    </div>
                    
                    {/* Category tag */}
                    <div className="mt-1">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          user.button === 'General'
                            ? 'bg-gray-100 text-gray-700'
                            : user.button === 'Enquiry'
                            ? 'bg-yellow-100 text-yellow-800'
                            : user.button === 'Broken'
                            ? 'bg-red-100 text-red-800'
                            : user.button === 'Complete Sale'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {user.button}
                      </span>
                    </div>
                  </div>
                  
                  {/* Time and count on the right */}
                  <div className="text-xs text-right text-gray-500 flex flex-col items-end gap-1">
                    <div className="text-green-600 font-medium">{user.time}</div>
                    {user.count && (
                      <div className="bg-green-600 text-white w-5 h-5 text-center rounded-full text-xs leading-5 font-medium">
                        {user.count}
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-sm text-gray-500 py-10">
                No live chats available
              </div>
            )}
          </div>
        </div>

        {/* Conversation Panel */}
        <div className="flex-1 border border-gray-200 rounded-lg shadow-sm flex items-center justify-center bg-gray-50">
          <div className="text-center space-y-4 px-4">
            <div className="w-16 h-16 rounded-xl bg-white border border-gray-200 flex items-center justify-center mx-auto shadow-sm">
              <Icon icon="lucide:message-circle-dashed" className="text-gray-400" width={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Conversation panel</h3>
            <p className="text-sm text-gray-500 max-w-sm">
              Select a conversation from the live chats to view full conversation details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveAgent2;