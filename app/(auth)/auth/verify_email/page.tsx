'use client';

import React, { Suspense, useState } from "react";
import Image from "next/image";
import bgImage from "../../../../img/backgeoundimae.jpg";
import { useSearchParams } from "next/navigation";

// const EmailVerification: React.FC = () => {
//   const searchParams = useSearchParams();
//   const token = searchParams.get("token");

//   const [formData, setFormData] = useState({ email: "" });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!token) {
//       alert("Verification token is missing!");
//       return;
//     }

//     console.log("Form Submitted:", { email: formData.email, token });

//     // Add API call logic here
//   };

//   return (

//     <Suspense fallback={<div className="text-center text-gray-600 mt-20">Loading...</div>}>  <div className="relative h-screen w-screen">
//     {/* Background */}
//     <div className="absolute inset-0 -z-10 h-full w-full">
//       <Image
//         src={bgImage}
//         alt="Background"
//         layout="fill"
//         objectFit="cover"
//         priority
//       />
//     </div>

//     {/* Form */}
//     <div className="flex items-center justify-center h-full">
//       <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
//           Email Verification
//         </h2>
//         <p className="text-center text-gray-600 mb-4">
//           Token: <span className="font-mono text-blue-600">{token || "No token found"}</span>
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full p-3 rounded-md bg-gray-100 text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
//           >
//             Verify
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
//   </Suspense>
   
//   );
// };

const EmailVerification = ()=>{
  return (
    <div>Email Verification</div>
  )
}


export default EmailVerification;
