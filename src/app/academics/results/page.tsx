import React from 'react';
import {
  Search,
  Download,
  FileText,
  Calendar,
  Award,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Filter,
} from 'lucide-react';

export default function ResultsPage() {
  const semesters = [
    {
      id: 'winter-2024',
      name: 'Winter Semester 2024',
      status: 'Published',
      date: 'Dec 20, 2024',
    },
    {
      id: 'autumn-2024',
      name: 'Autumn Semester 2024',
      status: 'Published',
      date: 'Nov 15, 2024',
    },
    {
      id: 'summer-2024',
      name: 'Summer Semester 2024',
      status: 'Published',
      date: 'Jun 10, 2024',
    },
    {
      id: 'winter-2023',
      name: 'Winter Semester 2023',
      status: 'Published',
      date: 'Dec 18, 2023',
    },
  ];

  const programmes = [
    {
      name: 'B.Tech',
      departments: [
        'Computer Science',
        'Electronics',
        'Mechanical',
        'Civil',
        'Electrical',
      ],
    },
    {
      name: 'M.Tech',
      departments: ['VLSI', 'Power Systems', 'Structural Engineering', 'CSE'],
    },
    { name: 'MCA', departments: ['Computer Applications'] },
    { name: 'MBA', departments: ['Management Studies'] },
    { name: 'M.Sc', departments: ['Chemistry', 'Mathematics', 'Physics'] },
    { name: 'Ph.D', departments: ['All Departments'] },
  ];

  const resultTypes = [
    {
      icon: FileText,
      title: 'Regular Results',
      description: 'End semester examination results for all programmes',
      color: 'from-[#7A0C0C] to-[#8B1E1E]',
    },
    {
      icon: AlertCircle,
      title: 'Supplementary Results',
      description: 'Re-examination and improvement results',
      color: 'from-amber-700 to-amber-900',
    },
    {
      icon: Award,
      title: 'Grade Cards',
      description: 'Download official grade cards and transcripts',
      color: 'from-[#8B1E1E] to-red-900',
    },
    {
      icon: CheckCircle,
      title: 'Result Verification',
      description: 'Apply for result verification and revaluation',
      color: 'from-yellow-700 to-amber-800',
    },
  ];

  const announcements = [
    {
      title: 'B.Tech 6th Semester Results Declared',
      date: 'December 20, 2024',
      type: 'New',
      description: 'Results for all branches now available on ERP portal',
    },
    {
      title: 'Revaluation Window Open',
      date: 'December 18, 2024',
      type: 'Important',
      description: 'Students can apply for revaluation till December 30, 2024',
    },
    {
      title: 'M.Tech Thesis Evaluation Results',
      date: 'December 15, 2024',
      type: 'Update',
      description: 'Final year M.Tech thesis evaluation results published',
    },
  ];

  const quickLinks = [
    { text: 'ERP Login', href: '#' },
    { text: 'How to Check Results', href: '#' },
    { text: 'Academic Calendar', href: '#' },
    { text: 'Examination Cell', href: '#' },
    { text: 'Contact Support', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#7A0C0C] via-[#8B1E1E] to-[#6B0000] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-10 h-10" />
            <h1 className="text-5xl md:text-6xl font-serif tracking-tight">
              Examination Results
            </h1>
          </div>
          <p className="text-xl text-white/90 font-light max-w-3xl">
            Access your academic results, grade cards, and examination records
          </p>
        </div>
      </div>

      {/* Search & Filter Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Search className="w-6 h-6 text-[#7A0C0C]" />
            Check Your Results
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Programme
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A0C0C] focus:border-transparent">
                <option>Select Programme</option>
                {programmes.map((prog, idx) => (
                  <option key={idx} value={prog.name}>
                    {prog.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Semester
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A0C0C] focus:border-transparent">
                <option>Select Semester</option>
                {semesters.map((sem, idx) => (
                  <option key={idx} value={sem.id}>
                    {sem.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Roll Number
              </label>
              <input
                type="text"
                placeholder="Enter your roll number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A0C0C] focus:border-transparent"
              />
            </div>
          </div>

          <button className="w-full md:w-auto bg-[#7A0C0C] hover:bg-[#8B1E1E] text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
            <Search className="w-5 h-5" />
            View Results
          </button>
        </div>
      </div>

      {/* Result Types */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-[#7A0C0C] mb-4">
            Result Services
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resultTypes.map((type, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${type.color} rounded-xl p-6 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group`}
            >
              <div className="bg-white/20 group-hover:bg-white/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-colors">
                <type.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Announcements */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-serif text-[#7A0C0C] mb-2">
                Latest Announcements
              </h2>
              <div className="w-20 h-1 bg-amber-600"></div>
            </div>
            <button className="text-[#7A0C0C] hover:text-[#8B1E1E] font-medium flex items-center gap-2">
              View All
              <TrendingUp className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {announcements.map((announcement, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-[#7A0C0C] bg-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      announcement.type === 'New'
                        ? 'bg-green-100 text-green-700'
                        : announcement.type === 'Important'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {announcement.type}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {announcement.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {announcement.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {announcement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programme-wise Results */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-[#7A0C0C] mb-4">
            Browse by Programme
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmes.map((programme, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#7A0C0C] hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#7A0C0C] group-hover:text-[#8B1E1E] transition-colors">
                  {programme.name}
                </h3>
                <FileText className="w-6 h-6 text-[#7A0C0C] group-hover:scale-110 transition-transform" />
              </div>
              <div className="space-y-2">
                {programme.departments.map((dept, deptIdx) => (
                  <div
                    key={deptIdx}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                    <span className="text-sm">{dept}</span>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full bg-gray-100 group-hover:bg-[#7A0C0C] text-gray-700 group-hover:text-white py-2 rounded-lg font-medium transition-colors">
                View Results
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Important Information */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-8 h-8 text-[#7A0C0C]" />
                <h3 className="text-2xl font-semibold text-[#7A0C0C]">
                  How to Check Results
                </h3>
              </div>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#7A0C0C] text-white rounded-full flex items-center justify-center font-semibold">
                    1
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">
                      Login to ERP Portal
                    </p>
                    <p className="text-sm text-gray-600">
                      Use your credentials to access the student portal
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#7A0C0C] text-white rounded-full flex items-center justify-center font-semibold">
                    2
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">
                      Navigate to Results Section
                    </p>
                    <p className="text-sm text-gray-600">
                      Find the examination results menu
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#7A0C0C] text-white rounded-full flex items-center justify-center font-semibold">
                    3
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">Select Semester</p>
                    <p className="text-sm text-gray-600">
                      Choose the appropriate semester and view results
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Download className="w-8 h-8 text-[#7A0C0C]" />
                <h3 className="text-2xl font-semibold text-[#7A0C0C]">
                  Quick Links
                </h3>
              </div>
              <div className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="flex items-center justify-between p-4 bg-gray-50 hover:bg-[#7A0C0C] hover:text-white rounded-lg transition-all group"
                  >
                    <span className="font-medium">{link.text}</span>
                    <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="bg-[#7A0C0C] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">
                98.5%
              </div>
              <div className="text-white/90">Pass Percentage</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">
                5000+
              </div>
              <div className="text-white/90">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">150+</div>
              <div className="text-white/90">Toppers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-white/90">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Help & Support */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Need Help with Results?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            For queries regarding results, revaluation, or grade cards, please
            contact the Examination Cell
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#7A0C0C] hover:bg-[#8B1E1E] text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Contact Examination Cell
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors">
              FAQs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
