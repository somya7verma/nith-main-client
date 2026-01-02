'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BwcCompositionPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/authorities');
  }, [router]);

  return null;
}
