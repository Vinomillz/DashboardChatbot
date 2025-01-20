import Navchat from "../navchat";
import Image from "next/image"; 
import map from "../../img/mapshit.png";
import { Bot } from "lucide-react"; 

const ChatbotUser = () => {
  return (
    <div className="bg-black h-screen relative">
      <Navchat />
      
      <div className="ml-4 text-center">
        <h1 className="font-bold text-4xl md:text-6xl mb-4 mt-10 text-white">
          Welcome Vincent
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
      </div>

      {/* Chatbot Icon */}
      <div className="absolute bottom-4 right-4 p-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-600 transition duration-300">
        <Bot className="text-white text-3xl" />

      </div>
    </div>
  );
};

export default ChatbotUser;
