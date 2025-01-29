'use client';
import { Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';

type ChatProps = {
  name: string;
  time: string;
  message: string;
  sentByAdmin: boolean;
};

// ✅ Ensure correct WebSocket connection

const CustomerChat = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<ChatProps[]>([]);
  const [message, setMessage] = useState('');
  const [socketInstance, setSocketInstance] = useState<Socket | null>(null);

  // ✅ Connect to Socket.IO and listen for messages
  useEffect(() => {
    console.log('effect running');
    const socket = io('http://localhost:8080', {
      withCredentials: true,
      transports: ['websocket'],
    });

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
      setSocketInstance(socket);
    });

    // ✅ Listen for responses from the backend
    socket.on('response', (data) => {
      console.log('Received response:', data);
      setMessages((prevMessages) => [...prevMessages, data.message]);
    });

    return () => {
      console.log('Disconnecting from WebSocket server');

      socket.disconnect();
    };
  }, []);

  // ✅ Send message to backend
  const handleMessageSend = () => {
    if (message.trim() === '') return;

    // Add user's message to chat
    const newMessage: ChatProps = {
      name: 'You',
      message,
      time: new Date().toISOString(),
      sentByAdmin: false, // User message
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    socketInstance?.emit('message', message);

    // Emit message to backend

    // Clear input field
    setMessage('');
  };

  return (
    <div className="z-50 flex flex-1 items-center mt-4 justify-center h-full">
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
            <div
              key={`${chat.time}-${index}`}
              className={`relative flex w-10/12 flex-col gap-2 px-8 py-4 text-sm ${
                chat.sentByAdmin
                  ? 'self-start rounded-r-md rounded-bl-md bg-white'
                  : 'self-end rounded-l-md rounded-br-md bg-[#cacede]'
              }`}
            >
              {/* Chat Bubble Header */}
              <div className="flex justify-between">
                <h3 className="font-semibold">
                  {chat.sentByAdmin ? chat.name : 'You'}
                </h3>
                <p className="text-xs text-gray-500">
                  {new Date(chat.time).toLocaleString()}
                </p>
              </div>

              {/* Message Content */}
              <p className="text-sm text-gray-800">{chat.message}</p>
            </div>
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
              onClick={handleMessageSend}
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
