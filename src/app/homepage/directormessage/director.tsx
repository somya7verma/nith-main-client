import React from 'react';
import Image from 'next/image';

export default function Director() {
  return (
    <section className="py-16 px-6 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Director&apos;s Message heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#631012] border-b-4 border-[#631012] pb-2 inline-block">
            Director&apos;s Message
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl w-full">
            {/* Left side - Director photo */}
            <div className="flex justify-center">
              <div className="w-72 h-80 rounded-lg overflow-hidden shadow-lg bg-white">
                <Image
                  src="/direct.jpg"
                  alt="Dr. H.M. Suryavanshi, Director NIT Hamirpur"
                  width={288}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side - Quote and attribution */}
            <div className="space-y-6 flex flex-col justify-center">
              <blockquote className="text-lg leading-relaxed text-gray-800 text-left">
                &ldquo;NIT Hamirpur is a hub of innovation and learning, where
                we are committed to fostering a culture of excellence. Our focus
                is on nurturing the next generation of leaders and
                problem-solvers who can make a positive impact on
                society.&rdquo;
              </blockquote>

              {/* Divider line */}
              <hr className="border-t-2 border-gray-400 w-full" />

              {/* Attribution */}
              <div className="space-y-1">
                <p className="text-xl font-bold text-gray-900">
                  Dr. H.M. Suryavanshi
                </p>
                <p className="text-gray-700">Director, NIT Hamirpur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
