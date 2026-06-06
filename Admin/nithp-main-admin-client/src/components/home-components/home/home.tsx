'use client';

import React, { useState } from 'react';

import {
  Home as HomeIcon,
  Save,
  Image as ImageIcon,
  User,
  Award,
  Info,
} from 'lucide-react';

interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

interface AboutData {
  heading: string;
  description: string;
  mission: string;
  vision: string;
}

interface PlacementData {
  year: string;
  totalPlacements: string;
  highestPackage: string;
  averagePackage: string;
  topRecruiters: string;
}

interface DirectorData {
  name: string;
  designation: string;
  message: string;
  imageUrl: string;
  email: string;
  phone: string;
}

type TabType = 'hero' | 'about' | 'placement' | 'director';

export default function HomeComponent() {
  const [activeTab, setActiveTab] = useState<TabType>('hero');

  const [heroData, setHeroData] = useState<HeroData>({
    title: 'Welcome to NIT Hamirpur',
    subtitle: 'National Institute of Technology, Hamirpur (H.P.)',
    description:
      'An Institute of National Importance under the Ministry of Education, Government of India — fostering excellence in technical education, research, and innovation.',
    buttonText: 'Discover More',
    imageUrl: '',
  });

  const [aboutData, setAboutData] = useState<AboutData>({
    heading: 'About NIT Hamirpur',
    description:
      'National Institute of Technology Hamirpur (NITH), established in 1986 and designated as an NIT in 2002, is committed to high-quality technical education, research, and outreach with strong infrastructure and industry engagement.',
    mission:
      'To provide high quality technical education, promote research and innovation, and produce professionals with ethical values who contribute to national development.',
    vision:
      'To be a globally recognized centre of excellence in engineering, science and technology education, research and innovation.',
  });

  const [placementData, setPlacementData] = useState<PlacementData>({
    year: '2024–2025',
    totalPlacements: '798 (~92%)',
    highestPackage: '₹340 LPA',
    averagePackage: '₹10.6 LPA',
    topRecruiters: 'Google, Amazon, Adobe, Nvidia, Goldman Sachs, Microsoft',
  });

  const [directorData, setDirectorData] = useState<DirectorData>({
    name: 'Prof. Hiralal Murlidhar Suryawanshi',
    designation: 'Director, NIT Hamirpur',
    message:
      'It is my pleasure to welcome you to the National Institute of Technology Hamirpur. The institute is dedicated to academic excellence, cutting-edge research, and nurturing professionals who can serve society and industry with integrity. We strive to provide a multidisciplinary environment that encourages innovation, collaboration and lifelong learning.',
    imageUrl: '',
    email: 'director@nith.ac.in',
    phone: '+91-1972-254000',
  });

  const tabs = [
    {
      id: 'hero' as TabType,
      label: 'Hero Section',
      icon: <HomeIcon size={18} />,
    },
    { id: 'about' as TabType, label: 'About Us', icon: <Info size={18} /> },
    {
      id: 'placement' as TabType,
      label: 'Placement Records',
      icon: <Award size={18} />,
    },
    {
      id: 'director' as TabType,
      label: "Director's Message",
      icon: <User size={18} />,
    },
  ];

  const handleSave = () => {
    alert('Changes saved successfully!');
    console.log({
      hero: heroData,
      about: aboutData,
      placement: placementData,
      director: directorData,
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-2 sm:p-4 lg:p-0">
      <div className="bg-gradient-to-r from-[#631012] to-[#7a1214] rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <HomeIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Welcome to Admin Panel
          </h1>
        </div>
        <p className="text-sm sm:text-base text-white/90">
          Manage your NIT Hamirpur portal efficiently
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#631012]/10 p-2 sm:p-3 rounded-full text-[#631012] flex-shrink-0">
              <HomeIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] break-words">
                Home Page Management
              </h1>
              <p className="text-sm sm:text-base text-[#171717]/60 mt-1">
                Manage homepage content and sections
              </p>
            </div>
          </div>
          <button
            onClick={handleSave}
            className="bg-[#631012] hover:bg-[#7a1214] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 transition-colors shadow-md w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            <Save className="w-4 h-4 sm:w-5 sm:h-5" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-[#171717]/10">
          <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-[#631012]/30 scrollbar-track-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 font-medium transition-colors whitespace-nowrap text-sm sm:text-base flex-shrink-0
                  ${
                    activeTab === tab.id
                      ? 'bg-[#631012] text-white border-b-2 border-[#631012]'
                      : 'text-[#171717]/70 hover:bg-[#F9F9F9] hover:text-[#171717]'
                  }
                `}
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-6">
          {activeTab === 'hero' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <ImageIcon className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Hero Section Content
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Main Title
                  </label>
                  <input
                    type="text"
                    value={heroData.title}
                    onChange={(e) =>
                      setHeroData({ ...heroData, title: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter main title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={heroData.subtitle}
                    onChange={(e) =>
                      setHeroData({ ...heroData, subtitle: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter subtitle"
                  />
                </div>

                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    value={heroData.description}
                    onChange={(e) =>
                      setHeroData({ ...heroData, description: e.target.value })
                    }
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Button Text
                  </label>
                  <input
                    type="text"
                    value={heroData.buttonText}
                    onChange={(e) =>
                      setHeroData({ ...heroData, buttonText: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter button text"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Image URL
                  </label>
                  <input
                    type="text"
                    value={heroData.imageUrl}
                    onChange={(e) =>
                      setHeroData({ ...heroData, imageUrl: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter image URL"
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#171717] mb-2">
                    {heroData.title}
                  </h3>
                  <p className="text-base sm:text-lg text-[#631012] font-medium mb-3">
                    {heroData.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-[#171717]/70 mb-4">
                    {heroData.description}
                  </p>
                  <button className="bg-[#631012] text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base">
                    {heroData.buttonText}
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Info className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  About Us Content
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Section Heading
                  </label>
                  <input
                    type="text"
                    value={aboutData.heading}
                    onChange={(e) =>
                      setAboutData({ ...aboutData, heading: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter heading"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Description
                  </label>
                  <textarea
                    value={aboutData.description}
                    onChange={(e) =>
                      setAboutData({
                        ...aboutData,
                        description: e.target.value,
                      })
                    }
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter description"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Mission Statement
                    </label>
                    <textarea
                      value={aboutData.mission}
                      onChange={(e) =>
                        setAboutData({ ...aboutData, mission: e.target.value })
                      }
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Enter mission"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#171717] mb-2">
                      Vision Statement
                    </label>
                    <textarea
                      value={aboutData.vision}
                      onChange={(e) =>
                        setAboutData({ ...aboutData, vision: e.target.value })
                      }
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                      placeholder="Enter vision"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#171717] mb-3">
                    {aboutData.heading}
                  </h3>
                  <p className="text-sm sm:text-base text-[#171717]/70 mb-4">
                    {aboutData.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-4">
                    <div className="bg-[#F9F9F9] p-3 sm:p-4 rounded-lg">
                      <h4 className="font-bold text-[#631012] mb-2 text-sm sm:text-base">
                        Mission
                      </h4>
                      <p className="text-xs sm:text-sm text-[#171717]/70">
                        {aboutData.mission}
                      </p>
                    </div>
                    <div className="bg-[#F9F9F9] p-3 sm:p-4 rounded-lg">
                      <h4 className="font-bold text-[#631012] mb-2 text-sm sm:text-base">
                        Vision
                      </h4>
                      <p className="text-xs sm:text-sm text-[#171717]/70">
                        {aboutData.vision}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'placement' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Award className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Placement Statistics
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Academic Year
                  </label>
                  <input
                    type="text"
                    value={placementData.year}
                    onChange={(e) =>
                      setPlacementData({
                        ...placementData,
                        year: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="e.g., 2024-2025"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Total Placements
                  </label>
                  <input
                    type="text"
                    value={placementData.totalPlacements}
                    onChange={(e) =>
                      setPlacementData({
                        ...placementData,
                        totalPlacements: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Highest Package
                  </label>
                  <input
                    type="text"
                    value={placementData.highestPackage}
                    onChange={(e) =>
                      setPlacementData({
                        ...placementData,
                        highestPackage: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="e.g., ₹55 LPA"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Average Package
                  </label>
                  <input
                    type="text"
                    value={placementData.averagePackage}
                    onChange={(e) =>
                      setPlacementData({
                        ...placementData,
                        averagePackage: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="e.g., ₹12.5 LPA"
                  />
                </div>

                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Top Recruiters (comma-separated)
                  </label>
                  <textarea
                    value={placementData.topRecruiters}
                    onChange={(e) =>
                      setPlacementData({
                        ...placementData,
                        topRecruiters: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter company names separated by commas"
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#171717] mb-4">
                    Placement Statistics {placementData.year}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4">
                    <div className="bg-[#631012]/5 p-3 sm:p-4 rounded-lg border-l-4 border-[#631012]">
                      <p className="text-xs sm:text-sm text-[#171717]/60">
                        Total Placements
                      </p>
                      <p className="text-xl sm:text-2xl font-bold text-[#171717] break-words">
                        {placementData.totalPlacements}
                      </p>
                    </div>
                    <div className="bg-[#631012]/5 p-3 sm:p-4 rounded-lg border-l-4 border-[#631012]">
                      <p className="text-xs sm:text-sm text-[#171717]/60">
                        Highest Package
                      </p>
                      <p className="text-xl sm:text-2xl font-bold text-[#171717] break-words">
                        {placementData.highestPackage}
                      </p>
                    </div>
                    <div className="bg-[#631012]/5 p-3 sm:p-4 rounded-lg border-l-4 border-[#631012]">
                      <p className="text-xs sm:text-sm text-[#171717]/60">
                        Average Package
                      </p>
                      <p className="text-xl sm:text-2xl font-bold text-[#171717] break-words">
                        {placementData.averagePackage}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold text-[#171717] mb-2 text-sm sm:text-base">
                      Top Recruiters
                    </h4>
                    <p className="text-xs sm:text-sm text-[#171717]/70 break-words">
                      {placementData.topRecruiters}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'director' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <User className="text-[#631012] w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  Director&apos;s Profile & Message
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Director Name
                  </label>
                  <input
                    type="text"
                    value={directorData.name}
                    onChange={(e) =>
                      setDirectorData({ ...directorData, name: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Designation
                  </label>
                  <input
                    type="text"
                    value={directorData.designation}
                    onChange={(e) =>
                      setDirectorData({
                        ...directorData,
                        designation: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter designation"
                  />
                </div>

                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Director&apos;s Message
                  </label>
                  <textarea
                    value={directorData.message}
                    onChange={(e) =>
                      setDirectorData({
                        ...directorData,
                        message: e.target.value,
                      })
                    }
                    rows={6}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter director's message"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Profile Image URL
                  </label>
                  <input
                    type="text"
                    value={directorData.imageUrl}
                    onChange={(e) =>
                      setDirectorData({
                        ...directorData,
                        imageUrl: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter image URL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={directorData.email}
                    onChange={(e) =>
                      setDirectorData({
                        ...directorData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter email"
                  />
                </div>

                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-[#171717] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={directorData.phone}
                    onChange={(e) =>
                      setDirectorData({
                        ...directorData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#171717]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#631012] focus:border-transparent text-black text-sm sm:text-base"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-[#F9F9F9] rounded-lg border-2 border-dashed border-[#171717]/20">
                <p className="text-xs sm:text-sm font-medium text-[#171717]/60 mb-3">
                  Preview:
                </p>
                <div className="bg-white p-4 sm:p-6 rounded-lg">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#631012]/10 rounded-full flex items-center justify-center text-[#631012] font-bold text-2xl sm:text-3xl flex-shrink-0 mx-auto sm:mx-0">
                      {directorData.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div className="flex-1 w-full text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#171717] break-words">
                        {directorData.name}
                      </h3>
                      <p className="text-sm sm:text-base text-[#631012] font-medium mb-3">
                        {directorData.designation}
                      </p>
                      <p className="text-xs sm:text-sm lg:text-base text-[#171717]/70 mb-4 italic break-words">
                        &quot;{directorData.message}&quot;
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-[#171717]/60 items-center sm:items-start justify-center sm:justify-start">
                        <span className="break-all">
                          📧 {directorData.email}
                        </span>
                        <span className="break-all">
                          📞 {directorData.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
