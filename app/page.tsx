"use client";
import { useState } from "react";
import Link from "next/link";
import Carousel from "@/components/carousel";
import { Bot, ChevronLeft, PackageOpen } from "lucide-react";
import LOGO from "../img/LOGOFLEETY.jpg";
import BG_IMAGE from "../img/backgeoundimae.jpg"; 
import Image from "next/image";


// sheet
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import CustomerChat from "@/components/CustomerChat";



// end of sheet

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
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={BG_IMAGE} 
          alt="Background"
          layout="fill"
          objectFit="cover" // Ensures the image covers the full screen
          priority
        />
      </div>

      {/* Navbar (Always on top) */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="bg-[#092948]">
          <div>
            <div className="py-2 px-5 flex justify-between z-10 sticky top-0 shadow-sm items-center">
              <Link href="/">
                <Image
                  src={LOGO}
                  alt="our website logo"
                  width={60}
                  className="rounded-full"
                />
              </Link>

                <button className="text-[#0c304d] bg-white font-bold w-44  h-12 rounded-full">  <Link href="/auth/register">Get started </Link></button>

            
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col justify-start items-center">
        {/* Text Section */}
        <div className="relative z-20 text-center text-white mt-10 px-4 top-[22%] md:top-[10%]">
          <h1 className="font-bold text-4xl md:text-6xl mb-4">
            STRESS FREE-SHIPPING
          </h1>
          <h3 className="font-light text-lg md:text-xl mt-2">
            Track your Goods & Deliveries
          </h3>
        </div>

        {/* Carousel Section */}
        <div className="absolute inset-0 z-10 top-[20%]">
          <Carousel />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="absolute bottom-5 flex items-center justify-center w-full space-x-4 z-30">
        <span className="rounded-full bg-[#0c304d] w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-green-600 transition duration-300">
          <Link href="/dashboard">
            <ChevronLeft className="text-white text-2xl" />
          </Link>
        </span>
        <button
          onClick={openPopup}
          className="flex items-center bg-gray-800 text-white justify-center rounded-full px-4 py-2 space-x-3 hover:bg-gray-700 focus:outline-none transition duration-300"
        >
          <div className="bg-[#0c304d] rounded-full w-12 h-12 flex items-center justify-center">
            <PackageOpen className="text-black text-xl" />
          </div>
          <span className="text-lg font-bold">Start</span>
          <div className="flex items-center space-x-1 text-gray-400">
            <span className="font-bold">{">"}</span>
            <span className="font-bold">{">"}</span>
          </div>
        </button>
      </div>

      {/* Popup Overlay */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-30 z-50 flex justify-center items-center">
          <div className="bg-[#092948] p-6 pb-28  rounded-lg w-96 relative">
            <h2 className="text-xl font-bold mb-4">Input Your Tracking ID</h2>
            <input
              className="text-gray-500 mb-4 p-4 rounded-sm bg-black w-full"
              placeholder="your tracking id:"
            />
            <Link href="/chatbotUser">
              <button className="flex items-center justify-center w-full text-[#0c304d] bg-white font-bold  h-12 rounded-full shadow-md hover:bg-green-600 hover:text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500">
                Enter
              </button>
            </Link>
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 bg-red-500 text-white py-2 px-4 rounded-sm"
            >
              X
            </button>
          </div>
        </div>
      )}

      {/* Chatbot Icon */}
      <div className="absolute bottom-4 right-4 p-3 bg-[#0c304d] rounded-lg cursor-pointer hover:bg-blue-800 transition duration-300 z-30">
       

        <Sheet>
  <SheetTrigger> <Bot className="text-white text-3xl" /> </SheetTrigger>
  <SheetContent >
    <SheetHeader>
      <SheetTitle></SheetTitle>
    
    </SheetHeader>



    <CustomerChat  />

  </SheetContent>
</Sheet>
      </div>

   




    </div>
  );
};

export default Home;
