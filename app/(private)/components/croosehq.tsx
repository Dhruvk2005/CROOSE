'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';

const Croosehq = (props:any) => {
    const [messages, setMessages] = useState<{ type: 'user' | 'bot'; text: string }[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { type: 'user', text: input };
        setMessages((prev:any) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        setTimeout(() => {
            const botReply = {
                type: 'bot',
                text: 'Getting information from Croose HQ ...',
            };
            setMessages((prev:any) => [...prev, botReply]);
            setIsLoading(false);
        }, 1200);
    };
  const closeTab = ()=>{
     console.log(props)
    props.setCrooseOpen2(false)
    props.setOpen(true)
                        }
    return (
        // <div className='w-full min-h-screen bg-[#18181B1F] flex items-end justify-end p-4 md:p-6'>
            <div className="w-[90%] sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[38%] h-[600px] rounded-[16px] shadow-xl border flex flex-col overflow-hidden bg-white fixed bottom-[20px] right-[20px]  ">
                
                <div className="p-4 border-b flex justify-between items-center">
                    <span className="flex gap-[8px] font-sans font-semibold text-gray-700">
                        <Icon icon="material-symbols:menu-rounded" width="20" height="24" style={{ color: "#71717A" }} />
                        Croose HQ
                    </span>
                    <div className="flex gap-[16px]">
                        <button onClick={closeTab} className="text-gray-400 hover:text-black">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6667 2H14.0001V5.33333" stroke="#71717A" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.33333 13.9993H2V10.666" stroke="#71717A" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.9999 2L9.33325 6.66667" stroke="#71717A" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.66667 9.33398L2 14.0007" stroke="#71717A" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="text-gray-400 hover:text-black">
                            <Icon onClick={()=>props.setCrooseOpen2(false)} icon="maki:cross" width="15" height="15" style={{ color: "#71717A" }} />
                        </button>
                    </div>
                </div>

                
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            {msg.type === 'bot' && (
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
                                    alt="Bot"
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                            )}
                            <div
                                className={`max-w-[70%] px-4 py-3 rounded-[12px] text-sm ${msg.type === 'user'
                                    ? 'bg-blue-500 text-white rounded-br-none'
                                    : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}
                            >
                                {msg.text}
                            </div>
                            {msg.type === 'user' && (
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                                    alt="User"
                                    className="w-8 h-8 rounded-full ml-2"
                                />
                            )}
                        </div>
                    ))}
                    <div ref={messagesEndRef} /> 
                </div>

                
                <div className='flex flex-col w-full rounded-b-[24px] h-auto p-3 gap-4 bg-white justify-end'>
                    <div className='w-full h-auto border-2 rounded-[16px] border-[#E4E4E7] p-4 flex items-center justify-between'>
                        <input
                            type="text"
                            placeholder="Ask a question, perform an action, or give instructions..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleSend();
                            }}
                            className='flex-1 outline-none font-sans font-normal text-xs text-[#71717A] bg-transparent placeholder:text-[#71717A]'
                        />

                        <div className='flex items-center gap-2 ml-4'>
                            <Icon icon="ic:round-plus" width="24" height="24" style={{ color: "#71717A" }} />
                            <Icon icon="weui:mike-filled" width="20" height="24" style={{ color: "#71717A" }} />
                            <Icon
                                icon="solar:arrow-up-outline"
                                width="24"
                                height="24"
                                className='bg-[#F4F4F5] p-1 rounded-full text-[#685BC7] cursor-pointer'
                                onClick={handleSend}
                            />
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default Croosehq;
