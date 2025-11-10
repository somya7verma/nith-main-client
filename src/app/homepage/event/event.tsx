'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Define the Event type based on your database schema
type EventData = {
  id: number;
  Heading: string;
  Subheading: string;
  Description: string;
  image: string;
  startedAt: string; // ISO date string from API
  endedAt: string; // ISO date string from API
  createdAt: string;
  updatedAt: string;
};

// Transform database event to display format
const transformEvent = (event: EventData) => ({
  id: event.id,
  title: event.Heading,
  subtitle: event.Subheading,
  image: event.image,
  description: event.Description,
  startDate: new Date(event.startedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }),
  endDate: new Date(event.endedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }),
  attendees: '500+', // Default attendees since it's not in schema
});

export default function Event() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Fetch events from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/users/event');
        const result = await response.json();

        if (result.success && result.data) {
          setEvents(result.data);
          setError(null);
        } else {
          setError(result.message || 'Failed to fetch events');
          setEvents([]); // Set empty array on error
        }
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to fetch events');
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Transform events for display
  const displayEvents = events.map(transformEvent);
  const selectedEvent = displayEvents[selectedIndex];

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
    } else {
      setShouldAnimate(true);
      const timer = setTimeout(() => setShouldAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [selectedIndex, isInitialRender]);

  const handlePrev = () => {
    if (displayEvents.length > 0) {
      setSelectedIndex(
        (prev) => (prev - 1 + displayEvents.length) % displayEvents.length
      );
    }
  };

  const handleNext = () => {
    if (displayEvents.length > 0) {
      setSelectedIndex((prev) => (prev + 1) % displayEvents.length);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex py-10 bg-gray-50">
        <section className="px-6 w-2/3 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold ml-24 text-[#631012] mt-5 border-b-4 border-[#631012] pb-2 inline-block">
              Latest Events
            </h2>
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#631012] mx-auto mb-4"></div>
                <p className="text-gray-600">Loading events...</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Error state
  if (error || displayEvents.length === 0) {
    return (
      <div className="flex py-10 bg-gray-50">
        <section className="px-6 w-2/3 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold ml-24 text-[#631012] mt-5 border-b-4 border-[#631012] pb-2 inline-block">
              Latest Events
            </h2>
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <p className="text-gray-600 text-lg mb-4">
                  {error || 'No events available at the moment'}
                </p>
                <p className="text-gray-500 text-sm">
                  Please check back later or contact support if this persists.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex py-10 bg-gray-50">
      <section className=" px-6 w-2/3 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold ml-24 text-[#631012] mt-5 border-b-4 border-[#631012] pb-2 inline-block">
            Latest Events
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 py-8 min-h-screen lg:min-h-96">
            {/* Left Side - Semi-Circular Positioned Thumbnails */}
            <div className="w-full lg:w-1/4 flex flex-col items-center justify-center relative h-96">
              <div className="relative w-full h-full">
                {/* Semi-circular positioned thumbnails */}
                {displayEvents.map((event, idx) => {
                  const offset =
                    (idx - selectedIndex + displayEvents.length) %
                    displayEvents.length;
                  const isCenter = offset === 0;

                  // Position thumbnails in a semi-circle on the left side
                  const angle =
                    (offset / displayEvents.length) * Math.PI - Math.PI / 2;
                  const radius = 140;
                  const x = Math.cos(angle) * radius - 60; // Offset to left
                  const y = Math.sin(angle) * radius;

                  let opacity = isCenter ? 1 : 0.6;
                  let zIndex = isCenter ? 30 : 20 - offset;
                  const scale = isCenter ? 1 : 0.7;

                  // Show all circles, hide none
                  if (offset > displayEvents.length) {
                    opacity = 0;
                    zIndex = 0;
                  }

                  return (
                    <div
                      key={event.id}
                      onClick={() => setSelectedIndex(idx)}
                      className="absolute cursor-pointer transition-all duration-300 ease-out"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`,
                        top: '50%',
                        left: '50%',
                        opacity: opacity,
                        zIndex: zIndex,
                      }}
                    >
                      <div
                        className={`relative w-20 h-20 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                          isCenter
                            ? 'border-[#631012] shadow-lg ring-2 ring-[#631012]/30'
                            : 'border-gray-300 hover:border-[#631012] shadow-md hover:shadow-lg'
                        }`}
                      >
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation buttons */}
              <div className="flex gap-3 mt-8 absolute bottom-0">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-[#631012] text-white font-bold hover:bg-red-900 transition-colors flex items-center justify-center shadow-md"
                >
                  ↑
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-[#631012] text-white font-bold hover:bg-red-900 transition-colors flex items-center justify-center shadow-md"
                >
                  ↓
                </button>
              </div>
            </div>

            {/* Center - Event Details Box */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-4">
              <div
                key={selectedEvent.id}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-[#631012]/30 p-10  shadow-xl max-w-lg w-full"
                style={{
                  animation: shouldAnimate
                    ? 'fadeInUp 0.5s ease-out forwards'
                    : 'none',
                }}
              >
                {/* Badge */}
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-[#631012]"></div>
                  <span className="px-4 py-1 bg-[#631012]/10 text-[#631012] text-xs font-bold rounded-full border border-[#631012]/30 uppercase tracking-wider">
                    Event Details
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-4xl font-bold text-[#631012] mb-6 leading-tight transition-all duration-500">
                  {selectedEvent.title}
                </h3>

                {/* Date */}
                <div className="flex items-center gap-3 mb-6 text-gray-700 transition-all duration-500">
                  <div className="w-5 h-5 rounded-full bg-[#631012]/20 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-[#631012]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                    </svg>
                  </div>
                  <span className="text-base font-semibold">
                    {selectedEvent.startDate}
                    {selectedEvent.endDate !== selectedEvent.startDate &&
                      ` - ${selectedEvent.endDate}`}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-8 text-sm max-h-[70px] transition-all duration-500">
                  {selectedEvent.description}
                </p>

                {/* Divider */}
                <div className="h-1 bg-gradient-to-r from-[#631012]/30 via-[#631012]/10 to-transparent mb-8 rounded-full"></div>

                {/* Attendees */}
                <div className="flex items-center justify-between transition-all duration-500">
                  <div>
                    <p className="text-xs text-gray-500 font-bold mb-2 uppercase tracking-wider">
                      Attendees Expected
                    </p>
                    <p className="text-3xl font-bold text-[#631012]">
                      {selectedEvent.attendees}
                    </p>
                  </div>
                  <button className="px-8 py-4 bg-[#631012] text-white font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base">
                    Register
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Large Circular Image */}
            <div
              className="w-full lg:w-1/4 flex flex-col items-center justify-center"
              style={{
                animation: shouldAnimate
                  ? 'fadeInRight 0.5s ease-out forwards'
                  : 'none',
              }}
            >
              <div className="relative group">
                {/* Main circular image */}
                <div
                  key={selectedEvent.id}
                  className="relative w-72 h-72 rounded-full overflow-hidden border-8 border-[#631012] shadow-2xl transform group-hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    fill
                    className="object-cover transition-all duration-500"
                    priority
                  />
                </div>

                {/* Event number badge */}
                <div className="absolute -top-4 right-0 w-16 h-16 bg-[#631012] text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white transition-all duration-500">
                  {selectedIndex + 1}
                </div>
              </div>

              {/* Counter text */}
              <p className="text-center text-gray-600 font-semibold text-sm mt-8 transition-all duration-500">
                <span className="text-[#631012] font-bold text-lg">
                  {selectedIndex + 1}
                </span>{' '}
                / {displayEvents.length}
              </p>
            </div>
          </div>

          <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
        </div>
      </section>
      <section className=" px-6 w-1/3 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold ml-24 text-[#631012] mt-5 border-b-4 border-[#631012] pb-2 inline-block">
            Upcoming Events
          </h2>
          <div className="flex flex-col items-start justify-start gap-6 my-8 max-h-[440px] overflow-auto ">
            {displayEvents.map((event, idx) => (
              <div
                key={event.id}
                className={`w-full p-4 rounded-2xl border-2 ${
                  idx === selectedIndex
                    ? 'border-[#631012] bg-[#631012]/10 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-[#631012] hover:shadow-md'
                } transition-all duration-300 cursor-pointer`}
                onClick={() => setSelectedIndex(idx)}
              >
                <h3
                  className={`text-xl font-bold mb-2 ${
                    idx === selectedIndex ? 'text-[#631012]' : 'text-gray-800'
                  }`}
                >
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                <div className="text-gray-500 text-xs flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[#631012]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                  </svg>
                  <span>{event.startDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
