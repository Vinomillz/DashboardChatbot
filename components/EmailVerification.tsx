'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import bgImage from "../img/backgeoundimae.jpg";

const EmailVerification: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      setStatus("No verification token found in the URL.");
      return;
    }
    verifyEmail(token);
  }, [token]);

  const verifyEmail = async (token: string) => {
    setLoading(true);
    try {
      const response = await fetch("https://logistic-chatbot.onrender.com/api/v1/auth/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (response.ok) {
        setStatus("success");
        router.push("/auth/login"); 
      } else {
        const error = await response.json();
        setStatus(error.message || "Verification failed.");
      }
    } catch (error) {
      setStatus("An error occurred during verification.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src={bgImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="flex items-center justify-center h-full">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Email Verification
          </h2>

          {loading ? (
            <p className="text-center text-gray-600 mt-4">Verifying...</p>
          ) : status === "success" ? (
            <p role="alert" className="text-center text-green-600 font-semibold mt-4">
              Your email has been verified successfully!
            </p>
          ) : status ? (
            <p role="alert" className="text-center text-red-600 font-semibold mt-4">
              {status}
            </p>
          ) : (
            <p className="text-center text-gray-600 mt-4">
              Verifying your email. Please wait...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
