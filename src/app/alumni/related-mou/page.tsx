import React from 'react';
import Nav from '@/app/components/header';

export default function AlumniRelatedMoU() {
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Alumni Related MoU</h1>
        <div className="prose max-w-none">
          <p>
            Information about alumni related Memorandum of Understanding will be
            displayed here.
          </p>
        </div>
      </div>
    </>
  );
}
