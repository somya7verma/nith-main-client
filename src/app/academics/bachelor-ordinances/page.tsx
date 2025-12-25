import React from 'react';
import {
  BookOpen,
  Download,
  FileText,
  Scale,
  GraduationCap,
  CheckCircle,
  AlertTriangle,
  Clock,
  Award,
  Info,
  ExternalLink,
  Shield,
  BookMarked,
} from 'lucide-react';

export default function BachelorOrdinancesPage() {
  const ordinanceCategories = [
    {
      title: 'Admission & Registration',
      icon: GraduationCap,
      gradient: 'from-[#7A0C0C] to-[#8B1E1E]',
      topics: [
        'Eligibility Criteria for Admission',
        'Reservation Policy',
        'Registration Process',
        'Branch Allocation Rules',
        'Lateral Entry Provisions',
        'Transfer & Migration Guidelines',
      ],
    },
    {
      title: 'Academic Regulations',
      icon: BookOpen,
      gradient: 'from-amber-700 to-amber-900',
      topics: [
        'Credit System & Course Structure',
        'Minimum Academic Requirements',
        'Attendance Requirements',
        'Course Registration Guidelines',
        'Add/Drop Course Policy',
        'Academic Calendar Compliance',
      ],
    },
    {
      title: 'Examination & Evaluation',
      icon: FileText,
      gradient: 'from-[#8B1E1E] to-red-900',
      topics: [
        'Examination Conduct Rules',
        'Grading System & CGPA',
        'Supplementary Examinations',
        'Result Declaration Process',
        'Answer Script Review',
        'Unfair Means & Penalties',
      ],
    },
    {
      title: 'Degree Requirements',
      icon: Award,
      gradient: 'from-yellow-700 to-amber-800',
      topics: [
        'Credit Requirements for Degree',
        'Duration of Programme',
        'Project/Thesis Requirements',
        'Industrial Training Requirements',
        'Degree Conferment Criteria',
        'Gold Medal & Honors Criteria',
      ],
    },
    {
      title: 'Discipline & Conduct',
      icon: Shield,
      gradient: 'from-[#7A0C0C] to-red-800',
      topics: [
        'Code of Conduct',
        'Anti-Ragging Policy',
        'Disciplinary Actions',
        'Grievance Redressal',
        'Student Rights & Responsibilities',
        'Hostel Regulations',
      ],
    },
    {
      title: 'Special Provisions',
      icon: BookMarked,
      gradient: 'from-amber-800 to-yellow-900',
      topics: [
        'Leave of Absence',
        'Medical Leave Policy',
        'Branch Change Rules',
        'Semester Break Regulations',
        'Fee Waiver & Refund Policy',
        'International Student Guidelines',
      ],
    },
  ];

  const keyOrdinances = [
    {
      title: 'Bachelor of Technology Ordinances 2024',
      description:
        'Complete set of rules and regulations governing B.Tech programmes',
      version: 'Version 5.2',
      effectiveDate: 'January 1, 2024',
      pages: '85 pages',
      size: '3.2 MB',
      type: 'Primary Document',
    },
    {
      title: 'Amendment Notice - Credit System',
      description:
        'Recent amendments to credit requirements and course structure',
      version: 'Amendment 2.1',
      effectiveDate: 'August 2024',
      pages: '12 pages',
      size: '450 KB',
      type: 'Amendment',
    },
    {
      title: 'Examination Conduct Guidelines',
      description: 'Detailed guidelines for examination conduct and evaluation',
      version: 'Version 3.0',
      effectiveDate: 'June 2024',
      pages: '28 pages',
      size: '890 KB',
      type: 'Guidelines',
    },
  ];

  const quickReference = [
    {
      topic: 'Minimum CGPA Required',
      value: '5.0',
      description: 'To continue in the programme',
    },
    {
      topic: 'Attendance Requirement',
      value: '75%',
      description: 'Minimum attendance in each course',
    },
    {
      topic: 'Programme Duration',
      value: '4 Years',
      description: 'Maximum 6 years allowed',
    },
    {
      topic: 'Total Credits',
      value: '160+',
      description: 'Required for degree completion',
    },
  ];

  const importantUpdates = [
    {
      title: 'New Credit Requirements for 2024 Batch',
      date: 'December 15, 2024',
      type: 'Update',
      description:
        'Revised credit distribution across core and elective courses',
    },
    {
      title: 'Revised Examination Schedule Guidelines',
      date: 'November 30, 2024',
      type: 'Policy Change',
      description:
        'Updated guidelines for mid-semester and end-semester examinations',
    },
    {
      title: 'Branch Change Policy Amendment',
      date: 'October 20, 2024',
      type: 'Amendment',
      description: 'Modified criteria for branch change after first year',
    },
  ];

  const relatedDocuments = [
    'Academic Calendar 2024-25',
    'Fee Structure & Payment Guidelines',
    'Hostel Allocation Rules',
    'Anti-Ragging Policy Document',
    'Student Grievance Redressal Mechanism',
    'Scholarship & Financial Aid Guidelines',
    'Industrial Training Guidelines',
    'Project Evaluation Criteria',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#7A0C0C] via-[#8B1E1E] to-[#6B0000] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Scale className="w-12 h-12" />
            <h1 className="text-5xl md:text-6xl font-serif tracking-tight">
              Bachelor Ordinances
            </h1>
          </div>
          <p className="text-xl text-white/90 font-light max-w-3xl mb-6">
            Rules, regulations, and guidelines governing Bachelor of Technology
            programmes at NIT Hamirpur
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Updated for 2024-25</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Effective from January 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {quickReference.map((ref, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl font-bold text-[#7A0C0C] mb-2">
                {ref.value}
              </div>
              <div className="font-semibold text-gray-900 mb-1">
                {ref.topic}
              </div>
              <div className="text-sm text-gray-600">{ref.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Notice */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 flex gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Important Notice
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Students are required to familiarize themselves with all
              ordinances and regulations. Ignorance of rules will not be
              accepted as an excuse for non-compliance. All amendments are
              effective immediately unless stated otherwise.
            </p>
          </div>
        </div>
      </div>

      {/* Key Ordinance Documents */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="w-8 h-8 text-[#7A0C0C]" />
          <h2 className="text-3xl font-serif text-[#7A0C0C]">
            Key Ordinance Documents
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {keyOrdinances.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#7A0C0C] hover:shadow-xl transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-red-100 text-red-600 rounded-lg p-3">
                  <FileText className="w-8 h-8" />
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    doc.type === 'Primary Document'
                      ? 'bg-[#7A0C0C] text-white'
                      : doc.type === 'Amendment'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {doc.type}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#7A0C0C] transition-colors">
                {doc.title}
              </h3>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {doc.description}
              </p>

              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  <span>{doc.version}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Effective: {doc.effectiveDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>
                    {doc.pages} • {doc.size}
                  </span>
                </div>
              </div>

              <button className="w-full bg-[#7A0C0C] hover:bg-[#8B1E1E] text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Ordinance Categories */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-[#7A0C0C] mb-4">
              Ordinance Categories
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive coverage of all aspects of Bachelor programmes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ordinanceCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#7A0C0C] group cursor-pointer"
              >
                <div
                  className={`bg-gradient-to-br ${category.gradient} p-6 text-white`}
                >
                  <category.icon className="w-10 h-10 mb-4" />
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <div className="p-6">
                  <ul className="space-y-3">
                    {category.topics.map((topic, topicIdx) => (
                      <li
                        key={topicIdx}
                        className="flex items-start gap-2 text-gray-700 hover:text-[#7A0C0C] transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full mt-6 bg-gray-100 group-hover:bg-[#7A0C0C] text-gray-700 group-hover:text-white py-2.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Updates & Amendments */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <AlertTriangle className="w-8 h-8 text-[#7A0C0C]" />
          <h2 className="text-3xl font-serif text-[#7A0C0C]">
            Recent Updates & Amendments
          </h2>
        </div>

        <div className="space-y-4">
          {importantUpdates.map((update, idx) => (
            <div
              key={idx}
              className="bg-white border-l-4 border-[#7A0C0C] rounded-lg p-6 shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        update.type === 'Update'
                          ? 'bg-blue-100 text-blue-700'
                          : update.type === 'Policy Change'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {update.type}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {update.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {update.title}
                  </h3>
                  <p className="text-gray-600">{update.description}</p>
                </div>
                <button className="bg-[#7A0C0C] hover:bg-[#8B1E1E] text-white px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Documents */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-[#7A0C0C] mb-4">
              Related Documents
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedDocuments.map((doc, idx) => (
              <button
                key={idx}
                className="bg-white rounded-lg p-4 hover:shadow-lg transition-all border-2 border-transparent hover:border-[#7A0C0C] group text-left"
              >
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#7A0C0C] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 group-hover:text-[#7A0C0C] transition-colors mb-1">
                      {doc}
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      Download
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Help & Support Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-[#7A0C0C] to-[#8B1E1E] rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif mb-4">Need Clarification?</h2>
            <p className="text-white/90 text-lg">
              Our academic office is here to help you understand the ordinances
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <BookOpen className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Academic Office</h3>
              <p className="text-white/80 text-sm">For regulation queries</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <FileText className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Examination Cell</h3>
              <p className="text-white/80 text-sm">For exam-related rules</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <Info className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Student Helpdesk</h3>
              <p className="text-white/80 text-sm">General assistance</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-white text-[#7A0C0C] hover:bg-amber-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Academic Office
            </button>
          </div>
        </div>
      </div>

      {/* Footer Notice */}
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Disclaimer:</strong> The
                ordinances are subject to periodic review and amendments by the
                Academic Council and Board of Governors. Students are advised to
                regularly check for updates. In case of any discrepancy between
                the online version and official printed version, the latter
                shall prevail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
