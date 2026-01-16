'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Calendar, ChevronRight } from 'lucide-react'; // Ensure you have lucide-react or use SVGs

// --- Types & Transforms (Kept same as your code) ---
type NewsData = {
  id: number;
  Heading: string;
  Subheading: string;
  Description: string;
  image: string;
  startedAt: string;
  endedAt: string;
  createdAt: string;
  updatedAt: string;
};

const transformNews = (news: NewsData) => ({
  id: news.id,
  title: news.Heading,
  subtitle: news.Subheading,
  image: news.image,
  description: news.Description,
  date: new Date(news.startedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }),
  category: 'News',
});

// --- Main Component ---
function News() {
  const [newsData, setNewsData] = useState<NewsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/users/news');
        const result = await response.json();
        if (result.success && result.data) {
          setNewsData(result.data);
        } else {
          setError(result.message || 'Failed to fetch news');
        }
      } catch (err) {
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const displayNews = newsData.map(transformNews);

  // Split news into Featured (1st item) and List (Rest)
  const featuredNews = displayNews[0];
  const sidebarNews = displayNews.slice(1, 5); // Show next 4 items

  // --- Loading State ---
  if (loading) {
    return (
      <section className="py-12 px-6 bg-gray-50 min-h-[500px] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#631012] mb-4"></div>
          <p className="text-gray-600 font-medium">Loading updates...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* --- LEFT COLUMN: ADMISSIONS (Kept exactly as you had it) --- */}
          <div>
            <h3 className="text-3xl font-bold text-[#631012] mb-6 border-b-4 border-[#631012] pb-2 inline-block">
              Admissions
            </h3>
            <div className="space-y-4">
              <div className="group border border-gray-200 rounded-xl p-6 bg-white hover:border-[#631012] hover:shadow-lg transition-all cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-[#631012] group-hover:text-red-700 transition-colors mb-1">
                      B.Tech
                    </h4>
                    <p className="text-gray-500 text-sm font-medium">
                      Undergraduate Program
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#631012] transition-colors" />
                </div>
              </div>

              <div className="group border border-gray-200 rounded-xl p-6 bg-white hover:border-[#631012] hover:shadow-lg transition-all cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-[#631012] group-hover:text-red-700 transition-colors mb-1">
                      M.Tech, M.Sc, MBA
                    </h4>
                    <p className="text-gray-500 text-sm font-medium">
                      Postgraduate Program
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#631012] transition-colors" />
                </div>
              </div>

              <div className="group border border-gray-200 rounded-xl p-6 bg-white hover:border-[#631012] hover:shadow-lg transition-all cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-[#631012] group-hover:text-red-700 transition-colors mb-1">
                      Ph.D
                    </h4>
                    <p className="text-gray-500 text-sm font-medium">
                      Doctorate Program
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#631012] transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: REDESIGNED LATEST NEWS (Span 2 Columns) --- */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-end mb-6 border-b border-gray-200 pb-2">
              <h3 className="text-3xl font-bold text-[#631012] border-b-4 border-[#631012] -mb-3 inline-block pb-2">
                Latest News
              </h3>
              <a
                href="/news"
                className="text-sm font-bold text-[#631012] hover:text-red-800 flex items-center gap-1 group"
              >
                View Archive{' '}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {error || displayNews.length === 0 ? (
              <div className="p-8 bg-white rounded-lg border border-gray-200 text-center text-gray-500">
                {error || 'No news updates available at the moment.'}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 1. HERO NEWS ITEM (Left Side of News Grid) */}
                {featuredNews && (
                  <div className="group cursor-pointer flex flex-col h-full">
                    <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-md mb-4">
                      <Image
                        src={featuredNews.image}
                        alt={featuredNews.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-[#631012] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Featured
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs font-medium mb-2">
                      <Calendar className="w-3 h-3 text-[#631012]" />
                      {featuredNews.date}
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 group-hover:text-[#631012] transition-colors mb-3 leading-tight">
                      {featuredNews.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {featuredNews.description}
                    </p>
                    <span className="text-[#631012] font-bold text-sm flex items-center gap-2 mt-auto group-hover:gap-3 transition-all">
                      Read Full Story <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                )}

                {/* 2. SIDEBAR LIST (Right Side of News Grid) */}
                <div className="flex flex-col gap-4">
                  {sidebarNews.map((item) => (
                    <div
                      key={item.id}
                      className="group flex gap-4 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100 cursor-pointer"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Text */}
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#631012]"></span>
                          {item.date}
                        </div>
                        <h5 className="text-sm font-bold text-gray-800 group-hover:text-[#631012] transition-colors line-clamp-2 leading-snug mb-1">
                          {item.title}
                        </h5>
                        <p className="text-xs text-gray-500 line-clamp-1">
                          {item.subtitle || item.description}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* "More" link at bottom of list */}
                  {displayNews.length > 5 && (
                    <button className="w-full py-3 mt-2 text-sm font-semibold text-gray-500 hover:text-[#631012] hover:bg-gray-100 rounded-lg transition-colors border border-dashed border-gray-300">
                      View {displayNews.length - 5} more updates...
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
