'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FcCompositionPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/authorities');
  }, [router]);

  return null;
}
