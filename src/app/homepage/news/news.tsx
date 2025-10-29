'use client';

import React, { useState } from 'react';
import Image from 'next/image';

function News() {
  const baseNews = [
    {
      id: 1,
      title: 'Campus Hosts International Tech Conference',
      image: '/nith.jpg',
      description:
        'Our campus recently hosted an international tech conference bringing together innovators and leaders from around the world. The event featured keynote speeches, panel discussions, and networking opportunities.',
      date: 'Oct 30, 2024',
      category: 'Academic',
      content:
        'Lorem ipsum dolor sit amet consectetur. Lacus risus dui est fringilla dis. Pellentesque risus habitasse turpis sit. Ornare convallis ut adipiscing ut tellus.',
    },
    {
      id: 2,
      title: 'New Research Center Inaugurated',
      image: '/direct.jpg',
      description:
        'The university inaugurated a state-of-the-art research center dedicated to sustainable technology and innovation. This facility will support cutting-edge research projects.',
      date: 'Oct 28, 2024',
      category: 'Infrastructure',
      content:
        'Lorem ipsum dolor sit amet consectetur. Lacus risus dui est fringilla dis. Pellentesque risus habitasse turpis sit. Ornare convallis ut adipiscing ut tellus.',
    },
    {
      id: 3,
      title: 'Student Achievement in National Olympiad',
      image: '/robosocnith_cover.jpg',
      description:
        'Our students secured top positions in the National Science Olympiad, showcasing their exceptional talent and dedication to excellence in academics.',
      date: 'Oct 25, 2024',
      category: 'Achievement',
      content:
        'Lorem ipsum dolor sit amet consectetur. Lacus risus dui est fringilla dis. Pellentesque risus habitasse turpis sit. Ornare convallis ut adipiscing ut tellus.',
    },
    {
      id: 4,
      title: 'Faculty Member Receives National Award',
      image: '/award.jpg',
      description:
        'Dr. Sharma received the prestigious National Research Award for her groundbreaking contributions to the field of biotechnology and innovation.',
      date: 'Oct 20, 2024',
      category: 'Recognition',
      content:
        'Lorem ipsum dolor sit amet consectetur. Lacus risus dui est fringilla dis. Pellentesque risus habitasse turpis sit. Ornare convallis ut adipiscing ut tellus.',
    },
    {
      id: 5,
      title: 'New Scholarship Program Launched',
      image: '/admin.jpg',
      description:
        'The university launched a comprehensive scholarship program to support deserving students from underprivileged backgrounds to pursue higher education.',
      date: 'Oct 18, 2024',
      category: 'Announcement',
      content:
        'Lorem ipsum dolor sit amet consectetur. Lacus risus dui est fringilla dis. Pellentesque risus habitasse turpis sit. Ornare convallis ut adipiscing ut tellus.',
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const selectedNews = baseNews[selectedIndex];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + baseNews.length) % baseNews.length);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % baseNews.length);
  };

  // Get visible cards (current + 2 on each side)
  const getVisibleCards = () => {
    const result = [];
    for (let i = -2; i <= 2; i++) {
      const idx = (selectedIndex + i + baseNews.length) % baseNews.length;
      result.push({
        news: baseNews[idx],
        index: idx,
        offset: i,
      });
    }
    return result;
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="pt-14 pb-5 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Be a NITHian Section */}
          <div>
            <h3 className="text-4xl font-bold text-[#631012] mb-6 border-b-4 border-[#631012] pb-2 inline-block">
              Admissions
            </h3>
            <div className="space-y-4">
              {/* B.Tech Card */}
              <div className="border border-gray-200 rounded-lg p-6 bg-white  hover:border-[#631012] hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-[#631012] mb-2">
                  B.Tech
                </h4>
                <p className="text-gray-600">Undergraduate Program</p>
              </div>

              {/* M.Tech, M.Sc, MBA Card */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-[#631012]  bg-white hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-[#631012] mb-2">
                  M.Tech, M.Sc, MBA
                </h4>
                <p className="text-gray-600">Postgraduate Program</p>
              </div>

              {/* Ph.D Card */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-[#631012]  bg-white hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-[#631012] mb-2">Ph.D</h4>
                <p className="text-gray-600">Doctorate Program</p>
              </div>
            </div>
          </div>

          {/* News Section - Featured and Carousel */}
          <div className="lg:col-span-2">
            <h3 className="text-4xl font-bold text-[#631012] mb-6 border-b-4 border-[#631012] pb-2 inline-block">
              Latest News
            </h3>

            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              {/* Left Side - Featured News */}
              <div className="w-full lg:w-1/2 flex flex-col">
                {/* Large Featured Card */}
                <div className="relative">
                  {/* Card Content */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-500 h-full border border-gray-200">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={selectedNews.image}
                        alt={selectedNews.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        priority
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-3 py-1 bg-[#631012] text-white text-xs font-semibold rounded">
                          {selectedNews.category}
                        </span>
                        <span className="text-gray-600 text-xs">
                          {selectedNews.date}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-[#631012] mb-2">
                        {selectedNews.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-4 text-sm line-clamp-2">
                        {selectedNews.description}
                      </p>

                      <div className="pt-4 border-t border-gray-200">
                        <button className="px-4 py-2 bg-[#631012] text-white font-semibold rounded text-sm hover:bg-red-900 transition-colors">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - News Stack Carousel */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                {/* 3D Stack Cards */}
                <div className="relative h-80 flex items-center justify-center perspective">
                  {visibleCards.map((card) => {
                    const isSelected = card.offset === 0;
                    const distance = Math.abs(card.offset);
                    const isHovered = hoveredIndex === card.index;

                    return (
                      <div
                        key={`${card.news.id}-${card.offset}`}
                        onClick={() => setSelectedIndex(card.index)}
                        onMouseEnter={() => setHoveredIndex(card.index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="absolute cursor-pointer transition-all duration-300 ease-out"
                        style={{
                          transform: `
                            translateY(${card.offset * 20}px)
                            translateX(${card.offset * 30}px)
                            scale(${1 - distance * 0.15})
                            rotateZ(${card.offset * 8}deg)
                          `,
                          opacity: distance > 1 ? 0.4 : 1,
                          zIndex: 50 - Math.abs(card.offset),
                        }}
                      >
                        <div
                          className={`w-56 h-72 rounded-lg overflow-hidden shadow-md transition-all duration-300 border border-gray-200 ${
                            isSelected
                              ? 'ring-3 ring-[#631012] shadow-lg'
                              : 'hover:shadow-md'
                          } ${isHovered && !isSelected ? 'ring-2 ring-gray-400' : ''}`}
                        >
                          {/* Card Image */}
                          <div className="relative h-40 overflow-hidden">
                            <Image
                              src={card.news.image}
                              alt={card.news.title}
                              fill
                              className={`object-cover transition-transform duration-500 ${
                                isHovered ? 'scale-110' : 'scale-100'
                              }`}
                              sizes="224px"
                            />
                            {/* Number Badge */}
                            <div className="absolute top-3 right-3 w-8 h-8 bg-[#631012] text-white rounded-full flex items-center justify-center font-bold shadow-md text-xs">
                              {card.index + 1}
                            </div>
                          </div>

                          {/* Card Info */}
                          <div className="p-4 bg-white h-32 flex flex-col justify-between">
                            <div>
                              <p className="text-xs text-gray-600 mb-1">
                                {card.news.date}
                              </p>
                              <h5 className="font-bold text-gray-800 line-clamp-2 text-sm">
                                {card.news.title}
                              </h5>
                            </div>
                            {isSelected && (
                              <div className="w-full h-1 bg-[#631012] rounded-full"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Navigation and Counter */}
                <div className="flex items-center justify-center gap-4 mt-10">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-lg bg-[#631012] text-white font-bold text-sm hover:bg-red-900 transition-colors flex items-center justify-center"
                  >
                    ←
                  </button>

                  <div className="flex gap-2">
                    {baseNews.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === selectedIndex
                            ? 'bg-[#631012] w-6'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-lg bg-[#631012] text-white font-bold text-sm hover:bg-red-900 transition-colors flex items-center justify-center"
                  >
                    →
                  </button>
                </div>

                {/* Progress Text */}
                <p className="text-center text-gray-600 mt-4 font-semibold text-sm">
                  News {selectedIndex + 1} of {baseNews.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
