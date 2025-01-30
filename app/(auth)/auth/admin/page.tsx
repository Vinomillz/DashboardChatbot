'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import bgImage from '../../../../img/backgeoundimae.jpg';
import { httpRequest } from '@/lib/api';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      email: formData.email,
      password: formData.password,
    };

    const { data, error } = await httpRequest(
      '/auth/admin-login',
      'POST',
      payload
    );

    if (error) {
      toast.error(error.message);
      console.log(error);
    }
    if (data) {
      router.push('/dashboard');
      console.log(data);
    }

    setIsLoading(false);
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
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
              {isLoading ? 'Loading...' : 'Login'}
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{' '}
            <a href="/auth/register" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
