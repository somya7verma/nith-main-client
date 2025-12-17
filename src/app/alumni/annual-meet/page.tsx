import React from 'react';
import Nav from '@/app/components/header';

export default function AnnualAlumniMeet() {
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Annual Alumni Meet of NITH</h1>
        <div className="prose max-w-none">
          <p>
            Information about the annual alumni meet will be displayed here.
          </p>
        </div>
      </div>
    </>
  );
}
