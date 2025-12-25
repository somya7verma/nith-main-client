import React from 'react';
import {
  BookOpen,
  Download,
  FileText,
  Layers,
  GraduationCap,
  Code,
  FlaskConical,
  Calculator,
  Cpu,
  Building,
  Zap,
  ChevronRight,
  Search,
  Filter,
  Grid3x3,
  List,
  Clock,
  Award,
  Calendar,
} from 'lucide-react';

export default function CourseSyllabusPage() {
  const departments = [
    {
      name: 'Computer Science & Engineering',
      icon: Code,
      code: 'CSE',
      gradient: 'from-blue-600 to-blue-800',
      programs: ['B.Tech', 'M.Tech', 'Ph.D'],
      courses: 45,
    },
    {
      name: 'Electronics & Communication',
      icon: Cpu,
      code: 'ECE',
      gradient: 'from-purple-600 to-purple-800',
      programs: ['B.Tech', 'M.Tech', 'Ph.D'],
      courses: 42,
    },
    {
      name: 'Electrical Engineering',
      icon: Zap,
      code: 'EE',
      gradient: 'from-yellow-600 to-yellow-800',
      programs: ['B.Tech', 'M.Tech', 'Ph.D'],
      courses: 38,
    },
    {
      name: 'Mechanical Engineering',
      icon: Building,
      code: 'ME',
      gradient: 'from-gray-600 to-gray-800',
      programs: ['B.Tech', 'M.Tech', 'Ph.D'],
      courses: 40,
    },
    {
      name: 'Civil Engineering',
      icon: Building,
      code: 'CE',
      gradient: 'from-green-600 to-green-800',
      programs: ['B.Tech', 'M.Tech', 'Ph.D'],
      courses: 36,
    },
    {
      name: 'Chemical Engineering',
      icon: FlaskConical,
      code: 'CH',
      gradient: 'from-orange-600 to-orange-800',
      programs: ['B.Tech', 'M.Tech', 'Ph.D'],
      courses: 34,
    },
  ];

  const semesterStructure = [
    {
      semester: '1st Semester',
      credits: 22,
      courses: [
        { code: 'MA101', name: 'Mathematics-I', credits: 4, type: 'Core' },
        { code: 'PH101', name: 'Physics-I', credits: 4, type: 'Core' },
        { code: 'CH101', name: 'Chemistry-I', credits: 3, type: 'Core' },
        {
          code: 'EE101',
          name: 'Basic Electrical Engineering',
          credits: 3,
          type: 'Core',
        },
        {
          code: 'CS101',
          name: 'Introduction to Computing',
          credits: 3,
          type: 'Core',
        },
        {
          code: 'ME101',
          name: 'Engineering Graphics',
          credits: 3,
          type: 'Core',
        },
        {
          code: 'HS101',
          name: 'Communication Skills',
          credits: 2,
          type: 'Core',
        },
      ],
    },
    {
      semester: '2nd Semester',
      credits: 21,
      courses: [
        { code: 'MA102', name: 'Mathematics-II', credits: 4, type: 'Core' },
        { code: 'PH102', name: 'Physics-II', credits: 4, type: 'Core' },
        { code: 'CH102', name: 'Chemistry-II', credits: 3, type: 'Core' },
        {
          code: 'ME102',
          name: 'Engineering Mechanics',
          credits: 3,
          type: 'Core',
        },
        { code: 'CS102', name: 'Data Structures', credits: 4, type: 'Core' },
        {
          code: 'HS102',
          name: 'Professional Ethics',
          credits: 3,
          type: 'Core',
        },
      ],
    },
  ];

  const courseCategories = [
    {
      title: 'Core Courses',
      icon: BookOpen,
      color: 'bg-[#7A0C0C]',
      description: 'Mandatory courses forming the foundation of the programme',
      percentage: '60%',
    },
    {
      title: 'Elective Courses',
      icon: Layers,
      color: 'bg-amber-700',
      description: 'Specialized courses for focused learning',
      percentage: '25%',
    },
    {
      title: 'Project Work',
      icon: Award,
      color: 'bg-green-700',
      description: 'Final year project and research work',
      percentage: '10%',
    },
    {
      title: 'Open Electives',
      icon: Grid3x3,
      color: 'bg-blue-700',
      description: 'Interdisciplinary courses from other departments',
      percentage: '5%',
    },
  ];

  const syllabusDocuments = [
    {
      title: 'B.Tech CSE - Complete Syllabus 2024',
      department: 'Computer Science',
      year: '2024-25',
      semesters: 'All Semesters',
      pages: '120 pages',
      size: '4.2 MB',
      lastUpdated: 'Dec 2024',
    },
    {
      title: 'B.Tech ECE - Complete Syllabus 2024',
      department: 'Electronics & Communication',
      year: '2024-25',
      semesters: 'All Semesters',
      pages: '115 pages',
      size: '3.8 MB',
      lastUpdated: 'Dec 2024',
    },
    {
      title: 'B.Tech EE - Complete Syllabus 2024',
      department: 'Electrical Engineering',
      year: '2024-25',
      semesters: 'All Semesters',
      pages: '108 pages',
      size: '3.5 MB',
      lastUpdated: 'Nov 2024',
    },
  ];

  const creditDistribution = [
    { category: 'Core Courses', credits: 96, color: 'bg-[#7A0C0C]' },
    { category: 'Departmental Electives', credits: 30, color: 'bg-amber-600' },
    { category: 'Open Electives', credits: 12, color: 'bg-blue-600' },
    { category: 'Project Work', credits: 16, color: 'bg-green-600' },
    { category: 'Additional Learning', credits: 6, color: 'bg-purple-600' },
  ];

  const quickLinks = [
    'Academic Regulations',
    'Examination Schedule',
    'Course Registration Guidelines',
    'Credit Transfer Policy',
    'Minor Degree Programme',
    'Honors Programme',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#7A0C0C] via-[#8B1E1E] to-[#6B0000] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <BookOpen className="w-12 h-12" />
            <h1 className="text-5xl md:text-6xl font-serif tracking-tight">
              Course Structure & Syllabus
            </h1>
          </div>
          <p className="text-xl text-white/90 font-light max-w-3xl mb-8">
            Comprehensive curriculum details for all undergraduate and
            postgraduate programmes
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="bg-white rounded-lg p-2 flex gap-2">
              <input
                type="text"
                placeholder="Search by course name, code, or department..."
                className="flex-1 px-4 py-2 text-gray-900 outline-none"
              />
              <button className="bg-[#7A0C0C] hover:bg-[#8B1E1E] text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-[#7A0C0C] mb-2">160+</div>
            <div className="text-gray-600 font-medium">Total Credits</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-[#7A0C0C] mb-2">8</div>
            <div className="text-gray-600 font-medium">Semesters</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-[#7A0C0C] mb-2">45+</div>
            <div className="text-gray-600 font-medium">Core Courses</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-[#7A0C0C] mb-2">20+</div>
            <div className="text-gray-600 font-medium">Electives</div>
          </div>
        </div>
      </div>

      {/* Department Selection */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-[#7A0C0C] mb-4">
            Browse by Department
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Select your department to view detailed course structure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-[#7A0C0C] group cursor-pointer"
            >
              <div
                className={`bg-gradient-to-br ${dept.gradient} p-6 text-white`}
              >
                <div className="flex items-center justify-between mb-4">
                  <dept.icon className="w-12 h-12" />
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">
                    {dept.code}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{dept.name}</h3>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Programmes</div>
                    <div className="flex gap-2">
                      {dept.programs.map((prog, progIdx) => (
                        <span
                          key={progIdx}
                          className="text-xs bg-gray-100 px-2 py-1 rounded font-medium"
                        >
                          {prog}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#7A0C0C]">
                      {dept.courses}
                    </div>
                    <div className="text-xs text-gray-500">Courses</div>
                  </div>
                </div>

                <button className="w-full bg-gray-100 group-hover:bg-[#7A0C0C] text-gray-700 group-hover:text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                  View Structure
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Categories */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-[#7A0C0C] mb-4">
              Course Categories
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all hover:border-[#7A0C0C] group"
              >
                <div
                  className={`${category.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#7A0C0C]">
                    {category.percentage}
                  </span>
                  <span className="text-sm text-gray-500">of curriculum</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sample Semester Structure */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-[#7A0C0C] mb-4">
            Sample Course Structure
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            First year B.Tech curriculum (Common for all branches)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {semesterStructure.map((sem, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200"
            >
              <div className="bg-gradient-to-r from-[#7A0C0C] to-[#8B1E1E] p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{sem.semester}</h3>
                    <p className="text-white/80">Academic Year 2024-25</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{sem.credits}</div>
                    <div className="text-sm text-white/80">Credits</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-3">
                  {sem.courses.map((course, courseIdx) => (
                    <div
                      key={courseIdx}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors group"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-sm font-bold text-[#7A0C0C] bg-amber-100 px-2 py-1 rounded">
                            {course.code}
                          </span>
                          <span className="text-xs bg-gray-200 px-2 py-1 rounded font-medium">
                            {course.type}
                          </span>
                        </div>
                        <div className="font-semibold text-gray-900">
                          {course.name}
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-xl font-bold text-[#7A0C0C]">
                          {course.credits}
                        </div>
                        <div className="text-xs text-gray-500">Credits</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Credit Distribution */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-[#7A0C0C] mb-4">
              Credit Distribution
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">
              Total 160 credits required for B.Tech degree
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="space-y-6">
              {creditDistribution.map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">
                      {item.category}
                    </span>
                    <span className="text-lg font-bold text-[#7A0C0C]">
                      {item.credits} Credits
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                      className={`${item.color} h-full rounded-full transition-all duration-500`}
                      style={{ width: `${(item.credits / 160) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t-2 border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">
                  Total Credits
                </span>
                <span className="text-3xl font-bold text-[#7A0C0C]">160</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Syllabus Documents */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-serif text-[#7A0C0C] mb-2">
              Download Complete Syllabus
            </h2>
            <div className="w-20 h-1 bg-amber-600"></div>
          </div>
          <button className="flex items-center gap-2 text-[#7A0C0C] hover:text-[#8B1E1E] font-medium">
            <Filter className="w-5 h-5" />
            Filter by Department
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {syllabusDocuments.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#7A0C0C] hover:shadow-xl transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-red-100 text-red-600 rounded-lg p-3">
                  <FileText className="w-8 h-8" />
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Latest
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#7A0C0C] transition-colors">
                {doc.title}
              </h3>

              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>{doc.department}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {doc.year} • {doc.semesters}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>
                    {doc.pages} • {doc.size}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Updated: {doc.lastUpdated}</span>
                </div>
              </div>

              <button className="w-full bg-[#7A0C0C] hover:bg-[#8B1E1E] text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Syllabus Documents
          </button>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-[#7A0C0C] mb-4">
              Related Resources
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200 rounded-lg p-5 hover:border-[#7A0C0C] hover:shadow-lg transition-all group flex items-center justify-between"
              >
                <span className="font-semibold text-gray-900 group-hover:text-[#7A0C0C] transition-colors">
                  {link}
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#7A0C0C] group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-gradient-to-br from-[#7A0C0C] to-[#8B1E1E] py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">
            Need Help Understanding the Structure?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Contact the Academic Section for guidance on course selection and
            credit requirements
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-[#7A0C0C] hover:bg-amber-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Academic Office
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
              View FAQs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
