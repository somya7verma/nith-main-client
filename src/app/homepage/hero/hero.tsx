import Image from 'next/image';
import { getHomepageData, type Homepage } from '../../../../lib/prisma';

export default async function Hero() {
  // Get homepage data from database only
  const homepage: Homepage = await getHomepageData();

  const HeroMain = homepage.HeroMain || '';
  const HeroSub = homepage.HeroSub || '';
  const HeroDesc = homepage.HeroDesc || '';
  const HeroBtnText = homepage.HeroBtnText || 'About Us';

  return (
    <div className="relative w-full h-full overflow-hidden top-2 z-0">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/admin.jpg"
          alt="NIT Hamirpur Campus"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark gradient overlay - strong from left to right */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Additional bottom overlay for text protection */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

      {/* Content overlay */}
      <div className="relative z-1 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-6">
          {/* Welcome badge */}
          <div className="mb-8 inline-block text-center">
            {HeroMain ? (
              <div className="mt-2 text-sm text-white/90 font-semibold">
                {HeroMain}
              </div>
            ) : (
              'Welcome to NIT Hamirpur'
            )}
          </div>

          {/* Main heading with better visibility */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-xl">
            {HeroSub || 'Good Education to Build A Better Future'}
          </h1>

          {/* Subtitle with improved visibility */}
          <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            {HeroDesc ||
              'To achieve academic excellence in engineering, technology, architecture and science by imparting quality and value based education.'}
          </p>

          {/* Navigation Buttons to Sections */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <a
              href="#hero"
              className="bg-[#631012] hover:bg-[#4a0c0e] text-white font-bold py-3 px-8 rounded-lg text-base transition-all duration-300 shadow-xl hover:shadow-2xl drop-shadow-lg inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              {HeroBtnText}
            </a>
            <a
              href="#events"
              className="bg-[#631012] hover:bg-[#4a0c0e] text-white font-bold py-3 px-8 rounded-lg text-base transition-all duration-300 shadow-xl hover:shadow-2xl drop-shadow-lg inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
              </svg>
              Events
            </a>
            <a
              href="#achievements"
              className="bg-[#631012] hover:bg-[#4a0c0e] text-white font-bold py-3 px-8 rounded-lg text-base transition-all duration-300 shadow-xl hover:shadow-2xl drop-shadow-lg inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Achievements
            </a>
            <a
              href="#gallery"
              className="bg-[#631012] hover:bg-[#4a0c0e] text-white font-bold py-3 px-8 rounded-lg text-base transition-all duration-300 shadow-xl hover:shadow-2xl drop-shadow-lg inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
              </svg>
              Gallery
            </a>
            <a
              href="#news"
              className="bg-[#631012] hover:bg-[#4a0c0e] text-white font-bold py-3 px-8 rounded-lg text-base transition-all duration-300 shadow-xl hover:shadow-2xl drop-shadow-lg inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54h2.5l1.96 2.36h2.5L13.5 12.6l4.96-6.6H16.46l-1.92 2.6-1.92-2.6h-2.5l3.92 5.29z" />
              </svg>
              News
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
