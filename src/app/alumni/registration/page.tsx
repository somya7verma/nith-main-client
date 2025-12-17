import React from 'react';
import Nav from '@/app/components/header';

export default function AlumniRegistration() {
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Alumni Registration</h1>
        <div className="prose max-w-none">
          <p>
            Alumni registration form and information will be displayed here.
          </p>
        </div>
      </div>
    </>
  );
}
