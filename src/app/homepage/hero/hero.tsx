import Image from 'next/image';
import { getHomepageData, type Homepage } from '../../../../lib/prisma';
import './hero.css';

export default async function Hero() {
  // Get homepage data from database only
  const homepage: Homepage = await getHomepageData();

  const HeroMain = homepage.HeroMain || 'NIT HAMIRPUR';
  const HeroSub = homepage.HeroSub || 'Shaping Minds. Building Futures.';
  const HeroDesc =
    homepage.HeroDesc ||
    'NIT Hamirpur is committed to academic excellence in engineering, technology, architecture, and sciences—empowering students through innovation, research, and a value-based learning environment.';

  return (
    <>
      {/* Hero Section - Full Screen */}
      <section className="relative w-full h-screen overflow-hidden mt-53">
        {/* Background Image with Subtle Parallax */}
        <div className="absolute inset-0">
          <Image
            src="/admin.jpg"
            alt="NIT Hamirpur Campus"
            fill
            className="object-cover scale-105 animate-hero-zoom"
            priority
            quality={95}
          />
        </div>

        {/* Directional Gradient Overlay - Left darker, right lighter */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20"></div>

        {/* Content Container - Left Aligned */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
            <div className="max-w-3xl">
              {/* Micro Heading - Institution Name */}
              <div className="mb-6 animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
                <p className="text-sm md:text-base tracking-[0.2em] uppercase text-white/80 font-light">
                  {HeroMain}
                </p>
              </div>

              {/* Main Heading - Premium Typography */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
                {HeroSub}
              </h1>

              {/* Supporting Subtext */}
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl font-light animate-fade-in-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
                {HeroDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in [animation-delay:1200ms] opacity-0 [animation-fill-mode:forwards]">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce"></div>
            </div>
            <p className="text-white/50 text-xs uppercase tracking-widest">
              Scroll
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section - Separate from Hero */}
      <section className="relative bg-white py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium mb-2">
              Quick Navigation
            </h2>
            <div className="w-16 h-0.5 bg-[#631012] mx-auto"></div>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {/* About Us */}
            <a
              href="#hero"
              className="group flex flex-col items-center justify-center p-6 md:p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <div className="w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-[#631012] to-[#8a1518] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                About Us
              </h3>
              <p className="text-xs text-gray-500 text-center">
                Learn our story
              </p>
            </a>

            {/* Events */}
            <a
              href="#events"
              className="group flex flex-col items-center justify-center p-6 md:p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <div className="w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-[#631012] to-[#8a1518] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                Events
              </h3>
              <p className="text-xs text-gray-500 text-center">
                Campus activities
              </p>
            </a>

            {/* Achievements */}
            <a
              href="#achievements"
              className="group flex flex-col items-center justify-center p-6 md:p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <div className="w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-[#631012] to-[#8a1518] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                Achievements
              </h3>
              <p className="text-xs text-gray-500 text-center">
                Our milestones
              </p>
            </a>

            {/* Gallery */}
            <a
              href="#gallery"
              className="group flex flex-col items-center justify-center p-6 md:p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <div className="w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-[#631012] to-[#8a1518] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                Gallery
              </h3>
              <p className="text-xs text-gray-500 text-center">Campus life</p>
            </a>

            {/* News */}
            <a
              href="#news"
              className="group flex flex-col items-center justify-center p-6 md:p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <div className="w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-[#631012] to-[#8a1518] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54h2.5l1.96 2.36h2.5L13.5 12.6l4.96-6.6H16.46l-1.92 2.6-1.92-2.6h-2.5l3.92 5.29z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                News
              </h3>
              <p className="text-xs text-gray-500 text-center">
                Latest updates
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
