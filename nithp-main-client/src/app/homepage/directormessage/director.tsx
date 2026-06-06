import Image from 'next/image';
import { getHomepageData, type Homepage } from '../../../../lib/prisma';

export default async function Director() {
  // Get homepage data from database only
  const homepage: Homepage = await getHomepageData();

  const DirectorName = homepage.DirectorName || '';
  const DirectorMessage = homepage.DirectorMessage || '';
  const DirectorDesignation = homepage.DirectorDesignation || '';
  // Email and phone are available in the data but not displayed in this component
  // const Directoremail = homepage.Directoremail || '';
  // const Directorphone = homepage.Directorphone || '';

  // Don't render the section if no director data is available
  if (!DirectorName && !DirectorMessage && !DirectorDesignation) {
    return null;
  }

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
                &ldquo;{DirectorMessage}&rdquo;
              </blockquote>

              {/* Divider line */}
              <hr className="border-t-2 border-gray-400 w-full" />

              {/* Attribution */}
              <div className="space-y-1">
                <p className="text-xl font-bold text-gray-900">
                  {DirectorName}
                </p>
                <p className="text-gray-700">{DirectorDesignation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
