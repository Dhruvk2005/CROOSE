'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';

const Croosehq = (): React.ReactElement => {
  const [open, setOpen] = useState(false);
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
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const botReply = {
        type: 'bot',
        text: 'Getting information from Croose HQ ...',
      };
      setMessages(prev => [...prev, botReply]);
      setIsLoading(false);
    }, 1200);
  };

  const createMessage = (msg: { type: 'user' | 'bot'; text: string }, idx: number) => {
    const isUser = msg.type === 'user';
    return React.createElement(
      'div',
      {
        key: idx,
        className: `flex ${isUser ? 'justify-end' : 'justify-start'}`
      },
      !isUser &&
        React.createElement('img', {
          src: 'https://cdn-icons-png.flaticon.com/512/4712/4712027.png',
          alt: 'Bot',
          className: 'w-8 h-8 rounded-full mr-2'
        }),
      React.createElement(
        'div',
        {
          className: `max-w-[70%] px-4 py-3 rounded-[12px] text-sm ${
            isUser
              ? 'bg-blue-500 text-white rounded-br-none'
              : 'bg-gray-100 text-gray-800 rounded-bl-none'
          }`
        },
        msg.text
      ),
      isUser &&
        React.createElement('img', {
          src: 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png',
          alt: 'User',
          className: 'w-8 h-8 rounded-full ml-2'
        })
    );
  };

  return React.createElement(
    React.Fragment,
    null,
    // Open Chat Button
    React.createElement(
      'button',
      {
        onClick: () => setOpen(true),
        className:
          'fixed bottom-6 right-6 z-50 px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg'
      },
      'Open Chat'
    ),

    // Overlay
    open &&
      React.createElement('div', {
        className: 'fixed inset-0 bg-black/30 z-40',
        onClick: () => setOpen(false)
      }),

    // Slide Panel
    React.createElement(
      'div',
      {
        className: `fixed top-0 right-0 h-full w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[38%] z-50 bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`
      },
      React.createElement(
        'div',
        { className: 'w-full h-full flex flex-col' },

        // Header
        React.createElement(
          'div',
          { className: 'p-4 border-b flex justify-between items-center' },
          React.createElement(
            'span',
            { className: 'flex gap-[8px] font-sans font-semibold text-gray-700' },
            React.createElement(Icon, {
              icon: 'material-symbols:menu-rounded',
              width: 20,
              height: 24,
              style: { color: '#71717A' }
            }),
            'Croose HQ'
          ),
          React.createElement(
            'button',
            {
              className: 'text-gray-400 hover:text-black',
              onClick: () => setOpen(false)
            },
            React.createElement(Icon, {
              icon: 'maki:cross',
              width: 15,
              height: 15,
              style: { color: '#71717A' }
            })
          )
        ),

        // Message Area
        React.createElement(
          'div',
          { className: 'flex-1 p-4 space-y-4 overflow-y-auto' },
          ...messages.map((msg, idx) => createMessage(msg, idx)),
          React.createElement('div', { ref: messagesEndRef })
        ),

        // Input
        React.createElement(
          'div',
          {
            className:
              'flex flex-col w-full rounded-b-[24px] h-auto p-3 gap-4 bg-white justify-end'
          },
          React.createElement(
            'div',
            {
              className:
                'w-full h-auto border-2 rounded-[16px] border-[#E4E4E7] p-4 flex items-center justify-between'
            },
            React.createElement('input', {
              type: 'text',
              placeholder: 'Ask a question, perform an action, or give instructions...',
              value: input,
              onChange: e => setInput(e.target.value),
              onKeyDown: e => {
                if (e.key === 'Enter') handleSend();
              },
              className:
                'flex-1 outline-none font-sans font-normal text-xs text-[#71717A] bg-transparent placeholder:text-[#71717A]'
            }),
            React.createElement(
              'div',
              { className: 'flex items-center gap-2 ml-4' },
              React.createElement(Icon, {
                icon: 'ic:round-plus',
                width: 24,
                height: 24,
                style: { color: '#71717A' }
              }),
              React.createElement(Icon, {
                icon: 'weui:mike-filled',
                width: 20,
                height: 24,
                style: { color: '#71717A' }
              }),
              React.createElement(Icon, {
                icon: 'solar:arrow-up-outline',
                width: 24,
                height: 24,
                className:
                  'bg-[#F4F4F5] p-1 rounded-full text-[#685BC7] cursor-pointer',
                onClick: handleSend
              })
            )
          )
        )
      )
    )
  );
};

export default Croosehq;
