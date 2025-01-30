'use client';
import Navchat from '../navchat';
import Image from 'next/image';
import map from '../../img/mapping.png';
import { Bot } from 'lucide-react';

import { useAppStore } from '@/store/app_store';

const ChatbotUser = () => {
  const { order } = useAppStore();
  return (
    <div className="bg-white h-screen relative">
      <Navchat />

      <div className="ml-4 text-center">
        <h1 className="font-bold text-4xl md:text-6xl mb-4 mt-10 text-black">
          Welcome {`${order?.contact.firstName} ${order?.contact.lastName}`}
        </h1>

        <h3 className="font-light text-green-700 text-lg md:text-xl mt-2">
          RECENTLY SHIPPING
        </h3>

        <div className="flex justify-center items-center mt-6">
          <Image
            src={map} // Path relative to the `public` folder
            alt="Map visualization"
            width={400} // Adjust width as needed
            height={400} // Adjust height as needed
            className="rounded-md"
          />
        </div>

        <div className="flex justify-center flex-col items-center mt-6 bg-gray-100 rounded-lg w-1/3 mx-auto p-4">
          <p className="text-lg">Order Status</p>
          <div>
            {order?.status === 'pending' ? (
              <span className="bg-yellow-100 text-yellow-700 text-lg px-3 py-1 rounded-full">
                Pending
              </span>
            ) : order?.status === 'assigned' ? (
              <span className="bg-yellow-100 text-yellow-700 text-lg px-3 py-1 rounded-full">
                Assigned to driver
              </span>
            ) : order?.status === 'in transit' ? (
              <span className="bg-yellow-100 text-yellow-700 text-lg px-3 py-1 rounded-full">
                In transit
              </span>
            ) : (
              <span className="bg-green-100 text-green-700 text-lg px-3 py-1 rounded-full">
                Delivered
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Chatbot Icon */}
      <div className="absolute bottom-4 right-4 p-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-600 transition duration-300">
        <Bot className="text-white text-3xl" />
      </div>
    </div>
  );
};

export default ChatbotUser;
