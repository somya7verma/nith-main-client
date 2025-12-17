import React from 'react';
import Nav from '@/app/components/header';

export default function ListOfAlumni() {
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">List of Alumni</h1>
        <div className="prose max-w-none">
          <p>Complete list of NITH alumni will be displayed here.</p>
        </div>
      </div>
    </>
  );
}
