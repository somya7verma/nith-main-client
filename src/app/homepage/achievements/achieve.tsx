'use client';

import React, { useState } from 'react';
import Image from 'next/image';

function Achieve() {
  const baseAchievements = [
    {
      id: 1,
      title: 'Excellence in Research',
      image: '/admin.jpg',
      description:
        'Recognized for groundbreaking research contributions and innovative solutions that advance our field.',
      category: 'Research',
    },
    {
      id: 2,
      title: 'Academic Excellence',
      image: '/direct.jpg',
      description:
        'Outstanding academic performance and commitment to educational excellence.',
      category: 'Academic',
    },
    {
      id: 3,
      title: 'Innovation Award',
      image: '/window.svg',
      description:
        'Pioneering innovative projects that showcase creativity and technical excellence.',
      category: 'Innovation',
    },
    {
      id: 4,
      title: 'Community Service',
      image: '/glob.svg',
      description:
        'Dedicated service and positive impact on the community and society.',
      category: 'Service',
    },
    {
      id: 5,
      title: 'Student Achievement',
      image: '/admin.jpg',
      description:
        'Exceptional performance and dedication to excellence in student endeavors.',
      category: 'Student',
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrev = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + baseAchievements.length) % baseAchievements.length
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % baseAchievements.length);
  };

  // Get visible cards for carousel
  const getVisibleCards = () => {
    const result = [];
    for (let i = -2; i <= 2; i++) {
      const idx =
        (selectedIndex + i + baseAchievements.length) % baseAchievements.length;
      result.push({
        achievement: baseAchievements[idx],
        index: idx,
        offset: i,
      });
    }
    return result;
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#631012] mb-12 border-b-4 border-[#631012] pb-2 inline-block">
          Achievements
        </h2>

        {/* Carousel with navigation buttons */}
        <div className="flex items-center gap-8">
          {/* Left navigation button */}
          <button
            onClick={handlePrev}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-[#631012] text-white font-bold text-xl hover:bg-red-900 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110"
          >
            ←
          </button>

          {/* Carousel container */}
          <div className="flex-1 overflow-hidden">
            <div className="relative h-100 flex items-center justify-center">
              {/* Scrollable cards container */}
              <div className="relative w-full h-full flex items-center justify-center perspective">
                {visibleCards.map(({ achievement, index, offset }) => {
                  const isCenter = offset === 0;
                  let scale = 0.7;
                  let opacity = 0.4;
                  let zIndex = 10 + offset;

                  if (offset === -1 || offset === 1) {
                    scale = 0.85;
                    opacity = 0.7;
                    zIndex = 20;
                  } else if (isCenter) {
                    scale = 1;
                    opacity = 1;
                    zIndex = 30;
                  }

                  return (
                    <div
                      key={achievement.id}
                      onClick={() => setSelectedIndex(index)}
                      className="absolute cursor-pointer transition-all duration-500 ease-out"
                      style={{
                        transform: `translateX(${offset * 280}px) scale(${scale})`,
                        opacity: opacity,
                        zIndex: zIndex,
                      }}
                    >
                      {/* Card */}
                      <div
                        className={`w-72 bg-white rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                          isCenter
                            ? 'border-[#631012] shadow-xl'
                            : 'border-gray-200 shadow-md hover:shadow-lg'
                        }`}
                      >
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden bg-gray-100">
                          <Image
                            src={achievement.image}
                            alt={achievement.title}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          {/* Category badge */}
                          <div className="mb-3">
                            <span className="inline-block px-3 py-1 bg-[#631012]/10 text-[#631012] text-xs font-bold rounded-full border border-[#631012]/30">
                              {achievement.category}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-bold text-[#631012] mb-3 line-clamp-2">
                            {achievement.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-700 text-sm leading-relaxed line-clamp-2">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right navigation button */}
          <button
            onClick={handleNext}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-[#631012] text-white font-bold text-xl hover:bg-red-900 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110"
          >
            →
          </button>
        </div>

        {/* Counter */}
        <div className="flex justify-center mt-8">
          <p className="text-gray-600 font-semibold text-sm">
            <span className="text-[#631012] font-bold">
              {selectedIndex + 1}
            </span>{' '}
            / {baseAchievements.length}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Achieve;
