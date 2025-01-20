"use client";
import { useState } from "react";
import Link from "next/link";
import Navchat from "./navchat";
import Carousel from "@/components/carousel";
import { Bot, ChevronLeft, PackageOpen } from "lucide-react";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="relative h-screen ">
      {/* Navbar (Always on top) */}
      <div className="fixed top-0 left-0 w-full z-50 ">
        <Navchat />
      </div>

      
      <div className="absolute inset-0 z-[-1] flex justify-center items-center w-full h-full sm:h-full md:h-auto">
  <Carousel />
</div>



      {/* Overlay Content */}
      <div className="bg-black bg-opacity-75 h-full flex flex-col items-center justify-between">
        {/* Heading Section */}
        <div className="text-center text-white mt-20 px-4">
          <h1 className="font-bold text-4xl md:text-6xl mb-4">
            STRESS FREE-SHIPPING
          </h1>
          <h3 className="font-light text-lg md:text-xl mt-2">
            Track your Goods & Deliveries
          </h3>
        </div>

        {/* Buttons Section */}
        <div className="absolute bottom-10 flex items-center justify-center space-x-4 ">
          {/* Back Button */}
          <span className="rounded-full bg-green-700 w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-green-600 transition duration-300">
            <Link href="/dashboard">
              <ChevronLeft className="text-white text-2xl" />
            </Link>
          </span>

          {/* Start Button */}
          <button
            onClick={openPopup}
            className="flex items-center bg-gray-800 text-white justify-center rounded-full px-4 py-2 space-x-3 hover:bg-gray-700 focus:outline-none transition duration-300"
          >
            {/* Green Circle with Icon */}
            <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center">
              <PackageOpen className="text-black text-xl" />
            </div>
            {/* Text */}
            <span className="text-lg font-bold">Start</span>
            {/* Arrows */}
            <div className="flex items-center space-x-1 text-gray-400">
              <span className="font-bold">{">"}</span>
              <span className="font-bold">{">"}</span>
            </div>
          </button>
        </div>

        {/* Popup Overlay */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-green-700 p-6 pb-28 rounded-lg w-96 relative">
              <h2 className="text-xl font-bold mb-4">
                Input Your Tracking ID
              </h2>
              <input
                className="text-gray-500 mb-4 p-4 rounded-sm bg-black"
                placeholder="ID:"
              />
              <Link href="/chatbotUser">
                <button className="flex items-center justify-center text-green-700 bg-white font-bold w-60 h-12 rounded-full shadow-md hover:bg-green-600 hover:text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500">
                  Enter
                </button>
              </Link>
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 bg-red-500 text-white py-2 px-4 rounded-sm"
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
       {/* Chatbot Icon */}
       <div className="absolute bottom-4 right-4 p-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-600 transition duration-300">
        <Bot className="text-white text-3xl" />

      </div>
    </div>
  );
};

export default Home;
