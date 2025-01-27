"use client";
import React, { useState } from "react";
import Image from "next/image";
import bgImage from "../../../../img/backgeoundimae.jpg"; 

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    accountType: "Driver",
    lastName: "",
    firstName: "",
    licenseNumber: "",
    email: "",
    password: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="relative h-screen w-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Form Container */}
      <div className="flex items-center justify-center h-full">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="accountType"
                className="block text-sm font-medium text-gray-700"
              >
                Choose Account Type
              </label>
              <select
                id="accountType"
                name="accountType"
                value={formData.accountType}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md py-4 border-gray-300 bg-gray-100 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Driver</option>
                <option>vendor</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md bg-gray-100 text-gray-800 placeholder-gray-400 border border-gray-300"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md bg-gray-100 text-gray-800 placeholder-gray-400 border border-gray-300"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="licenseNumber"
                placeholder="License Number"
                value={formData.licenseNumber}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md bg-gray-100 text-gray-800 placeholder-gray-400 border border-gray-300"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md bg-gray-100 text-gray-800 placeholder-gray-400 border border-gray-300"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md bg-gray-100 text-gray-800 placeholder-gray-400 border border-gray-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700"
            >
              Register
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/auth/login" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
