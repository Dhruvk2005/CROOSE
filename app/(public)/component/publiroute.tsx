'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { verifyToken } from '@/app/Apis/publicapi';

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await verifyToken();
        if (!res?.err?.status) {
         
          router.replace('/dashboard/space');
        } else {
        
          setIsChecking(false);
        }
      } catch (err) {
        setIsChecking(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isChecking) return null; 

  return <>{children}</>;
};

export default PublicRoute;
