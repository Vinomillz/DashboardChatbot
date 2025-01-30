'use client';

import { Button } from '@/components/ui/button';
import { httpRequest } from '@/lib/api';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function Protected({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const { data, error } = await httpRequest('/auth/admin-session', 'GET');
      if (error) {
        console.log(error);
      }
      if (data) {
        console.log(data);
        setIsLoggedIn(true);
      }
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return (
      <div className="flex flex-1 justify-center flex-col items-center min-h-screen">
        <h1 className="text-2xl font-bold text-center mb-6 pt-2">
          You are not logged in
        </h1>
        <Button onClick={() => router.push('/auth/admin')}>Login</Button>
      </div>
    );
  }

  return children;
}

export default Protected;
