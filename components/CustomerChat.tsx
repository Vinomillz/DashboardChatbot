'use client';
import {  Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';


type ChatProps = {
  name: string;
  time: string;
  message: string;
  sentByAdmin: boolean;
};

const chatMessages = [
  {
    name: 'John Doe',
    message: "Hi, I need help with my order. It hasn't arrived yet.",
    time: '10:15 AM',
    sentByAdmin: false, // Client
  },
  {
    name: 'Admin',
    message:
      "Hello! I'm sorry to hear that. Could you please provide your order number?",
    time: '10:17 AM',
    sentByAdmin: true, // Admin
  },
  // More messages here...
];

const ChatContent = ({ name, time, message, sentByAdmin }: ChatProps) => {
  return (
    <div
    className={`relative flex w-10/12 flex-col gap-2 px-8 py-4 text-sm ${
      sentByAdmin
        ? 'self-start rounded-r-md rounded-bl-md bg-white'
        : 'self-end rounded-l-md rounded-br-md bg-[#cacede]'
    }`}
  >
    {/* Chat Bubble Header */}
    <div className="flex justify-between">
      <h3 className="font-semibold">{sentByAdmin ? name : 'You'}</h3>
      <p className="text-xs text-gray-500">{time}</p>
    </div>
  
    {/* Message Content */}
    <p className="text-sm text-gray-800">{message}</p>
  
    {/* Tail Effect */}
    {sentByAdmin ? (
      <div className="absolute -left-2 bottom-2 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px] border-transparent border-r-white"></div>
    ) : (
      <div className="absolute -right-2 bottom-2 w-0 h-0 border-t-[10px] border-b-[10px] border-l-[10px] border-transparent border-l-[#cacede]"></div>
    )}
  </div>
  
  );
};

const CustomerChat = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState(chatMessages);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (textAreaRef.current) {
      if (textAreaRef.current.scrollHeight > 100) {
        textAreaRef.current.style.height = '100px';
      } else {
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      }
    }
  }, [message]);

  const handleMessageSend = (text: string) => {
    const newMessage = {
      name: 'John Doe',
      message: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sentByAdmin: false, // Client
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  if (!open) return null;

  return (
    <div className=" z-50 flex flex-1 items-center mt-4 justify-center  h-full">
      <div className="relative flex h-full w-full max-w-lg flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between bg-gray-200 px-4 py-2">
          <h2 className="text-lg font-semibold">Live Chat</h2>
        
        </div>

        {/* Chat Messages */}
        <div
          ref={containerRef}
          className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-6"
        >
          {messages.map((chat, index) => (
            <ChatContent
              key={`${chat.time}-${index}`}
              name={chat.name}
              time={chat.time}
              message={chat.message}
              sentByAdmin={chat.sentByAdmin}
            />
          ))}
        </div>

        {/* Input Area */}
        <div className="flex items-center gap-3 bg-gray-200 px-3 py-3 sm:gap-4 sm:px-4 sm:py-4">
  
  <div className="flex flex-1 items-center gap-2 rounded-2xl bg-white px-3 py-2 sm:px-4 sm:py-3">
    <textarea
      ref={textAreaRef}
      rows={1}
      className="flex-1 resize-none bg-transparent text-xs outline-none placeholder:text-gray-400 sm:text-sm"
      placeholder="Type Your Message Here"
      onChange={(e) => setMessage(e.target.value)}
      value={message}
    />
    <button
      onClick={() => handleMessageSend(message)}
      disabled={!message.trim()}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-black p-2 sm:h-10 sm:w-10 disabled:opacity-50"
    >
      <Send size={16} color="white" className="sm:size-20" />
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default CustomerChat;
