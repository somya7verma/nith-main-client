'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Nav from '@/app/components/header';
import Footer from '@/app/components/footer';

interface Functionary {
  id: number;
  name: string;
  responsibility: string;
  phone: string;
  email: string;
}

interface FunctionarySection {
  id: string;
  title: string;
  data: Functionary[];
}

const sampleData: FunctionarySection[] = [
  {
    id: 'dean',
    title: 'Office of the Dean (Academics)',
    data: [
      {
        id: 1,
        name: 'Dr. Siddhartha Sharma',
        responsibility: 'Dean (Academics)',
        phone: '254006',
        email: 'dac@nith.ac.in',
      },
      {
        id: 2,
        name: 'Dr. Ravinder Nath Sharma',
        responsibility: 'Associate Dean (UG-PG Establishment)',
        phone: '254532',
        email: 'nath@nith.ac.in',
      },
      {
        id: 3,
        name: 'Dr. Rohit Dhiman',
        responsibility: 'Associate Dean (Examination & Evaluation)',
        phone: '254601',
        email: 'ad-ee@nith.ac.in',
      },
      {
        id: 4,
        name: 'Dr. Amit Kaul',
        responsibility: 'Associate Dean (Admission & Registration)',
        phone: '254544',
        email: 'ad-ar@nith.ac.in, amitkaul@nith.ac.in',
      },
    ],
  },
  {
    id: 'senate',
    title: 'Chairpersons – Senate Programme Committees',
    data: [
      {
        id: 1,
        name: 'Dr. U.K. Pandey',
        responsibility: 'Chairperson (SDPC)',
        phone: '254342',
        email: 'ukp@nith.ac.in',
      },
      {
        id: 2,
        name: 'Dr. Gargi Khanna',
        responsibility: 'Chairperson (SMPC)',
        phone: '254634',
        email: 'gargi@nith.ac.in',
      },
      {
        id: 3,
        name: 'Dr. Rajeevan Chandel',
        responsibility: 'Chairperson (SBPC)',
        phone: '254624',
        email: 'rchandel@nith.ac.in',
      },
    ],
  },
  {
    id: 'admissions',
    title: 'Admission, Registration & Automation',
    data: [
      {
        id: 1,
        name: 'Dr. Jiwanjot Singh',
        responsibility: 'Faculty Incharge (Registration)',
        phone: '254501',
        email: 'jiwanjot@nith.ac.in',
      },
      {
        id: 2,
        name: 'Dr. Ajoy Debbarma',
        responsibility: 'Faculty Incharge (Admission & Automation)',
        phone: '254702',
        email: 'adebbarma@nith.ac.in',
      },
      {
        id: 3,
        name: 'Dr. Nitin Gupta',
        responsibility: 'Admission Incharge / Coordinator (DASA)',
        phone: '254416',
        email: 'nitin@nith.ac.in',
      },
      {
        id: 4,
        name: 'Dr. Khalid Mohamad Pandit',
        responsibility: 'Assistant Faculty Incharge (Admission & Automation)',
        phone: '254402',
        email: 'mkhalid@nith.ac.in',
      },
    ],
  },
  {
    id: 'timetable',
    title: 'Institute Time Table',
    data: [
      {
        id: 1,
        name: 'Dr. Chandra Shekhar Prasad',
        responsibility: 'Faculty Incharge',
        phone: '254601',
        email: 'csprasad@nith.ac.in',
      },
    ],
  },
  {
    id: 'nep',
    title: 'National Education Policy (NEP)',
    data: [
      {
        id: 1,
        name: 'Dr. Om Prakash Yadav',
        responsibility: 'Faculty Incharge',
        phone: '254101',
        email: 'opyadav@nith.ac.in',
      },
      {
        id: 2,
        name: 'Dr. Katam Nishanth',
        responsibility: 'Faculty Incharge',
        phone: '254501',
        email: 'katam@nith.ac.in',
      },
    ],
  },
  {
    id: 'results',
    title: 'Result Processing',
    data: [
      {
        id: 1,
        name: 'Dr. Jyoti Srivasatava',
        responsibility: 'Faculty Incharge',
        phone: '254401',
        email: 'jyoti.s@nith.ac.in',
      },
      {
        id: 2,
        name: 'Dr. Preeti Soni',
        responsibility: 'Assistant Faculty Incharge',
        phone: '254402',
        email: 'preeti@nith.ac.in',
      },
    ],
  },
  {
    id: 'exam',
    title: 'Examination & Evaluation',
    data: [
      {
        id: 1,
        name: 'Dr. Rajeev Kumar',
        responsibility: 'Faculty Incharge',
        phone: '254434',
        email: 'rajeev@nith.ac.in',
      },
      {
        id: 2,
        name: 'Dr. Suket Kumar',
        responsibility: 'Faculty Incharge (Examination)',
        phone: '–',
        email: 'suket@nith.ac.in',
      },
      {
        id: 3,
        name: 'Dr. Shampy Kamboj',
        responsibility: 'Assistant Faculty Incharge',
        phone: '254150',
        email: 'shampy@nith.ac.in',
      },
      {
        id: 4,
        name: 'Dr. Sandeep Kumar Singh',
        responsibility: 'Assistant Faculty Incharge (Evaluation)',
        phone: '254601',
        email: 'sksingh@nith.ac.in',
      },
    ],
  },
  {
    id: 'nad',
    title: 'National Academic Depository (NAD)',
    data: [
      {
        id: 1,
        name: 'Dr. Siddhartha Sharma',
        responsibility: 'Nodal Officer',
        phone: '254006',
        email: 'nad@nith.ac.in',
      },
      {
        id: 2,
        name: 'Dr. Nitin Gupta',
        responsibility: 'Assistant Nodal Officer',
        phone: '254416',
        email: 'nitin@nith.ac.in',
      },
      {
        id: 3,
        name: 'Dr. Priyanka',
        responsibility: 'Assistant Nodal Officer',
        phone: '254401',
        email: 'dr.priyanka@nith.ac.in',
      },
      {
        id: 4,
        name: 'Dr. Arun Kumar Yadav',
        responsibility: 'Faculty Incharge (NAD-Uploading)',
        phone: '254402',
        email: 'ayadav@nith.ac.in',
      },
      {
        id: 5,
        name: 'Dr. Manender Singh',
        responsibility: 'Faculty Incharge (NAD-Verification)',
        phone: '254301',
        email: 'manendra@nith.ac.in',
      },
      {
        id: 6,
        name: 'Dr. Ram Prakash Sharma',
        responsibility: 'Faculty Incharge (NAD-Verification)',
        phone: '254402',
        email: 'ram.sharma@nith.ac.in',
      },
    ],
  },
  {
    id: 'staff',
    title: 'Academic Section Staff',
    data: [
      {
        id: 1,
        name: 'Sh. Satish Chander Sharma',
        responsibility: 'Deputy Registrar (All General Academic Matters)',
        phone: '254026',
        email: 'dracademic@nith.ac.in',
      },
      {
        id: 2,
        name: '–',
        responsibility: '–',
        phone: '–',
        email: 'ar-acad@nith.ac.in',
      },
      {
        id: 3,
        name: 'Sh. Gulab Singh Thakur',
        responsibility: 'Senior PA (Certification Matters)',
        phone: '–',
        email: 'certificate-acad@nith.ac.in',
      },
      {
        id: 4,
        name: 'Sh. Vinod Kumar',
        responsibility: 'Stenographer SG-II (UG/PG Results)',
        phone: '–',
        email: 'result-acad@nith.ac.in',
      },
      {
        id: 5,
        name: 'Sh. Abhishek',
        responsibility: 'Superintendent (Examination/Evaluation)',
        phone: '–',
        email: 'exam-acad@nith.ac.in',
      },
      {
        id: 6,
        name: 'Smt. Pushpa Devi',
        responsibility: 'Stenographer SG-I / PA (RTI, Hindi, Statistics)',
        phone: '–',
        email: 'pushpa@nith.ac.in',
      },
      {
        id: 7,
        name: 'Smt. Meera Devi',
        responsibility: 'Assistant SG-II (UG Programmes)',
        phone: '–',
        email: 'ug-acad@nith.ac.in',
      },
      {
        id: 8,
        name: 'Sh. Shashi Kant Ratnakar',
        responsibility: 'Sr. Assistant (PhD Programmes)',
        phone: '254073',
        email: 'phd-acad@nith.ac.in',
      },
      {
        id: 9,
        name: 'Sh. Lav Sharma',
        responsibility: 'Sr. Assistant (Senate & Convocation)',
        phone: '–',
        email: 'senate-acad@nith.ac.in',
      },
      {
        id: 10,
        name: 'Ms. Sonia Yadav',
        responsibility: 'Jr. Assistant (PG Programmes)',
        phone: '254018',
        email: 'pg-acad@nith.ac.in',
      },
      {
        id: 11,
        name: 'Sh. Suresh Chand',
        responsibility: 'Office Attendant SG-I',
        phone: '–',
        email: '–',
      },
      {
        id: 12,
        name: 'Sh. Balwant Singh',
        responsibility: 'Office Attendant SG-II',
        phone: '–',
        email: '–',
      },
    ],
  },
];

const TableSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-6 bg-gray-200 rounded w-1/3 mb-6"></div>
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-4 py-4 border-b border-gray-100">
          <div className="h-4 bg-gray-200 rounded w-8"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/6"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
      ))}
    </div>
  </div>
);

const EmptyState = ({ title }: { title: string }) => (
  <div className="text-center py-12">
    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
      <svg
        className="w-8 h-8 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </div>
    <p className="text-gray-500 text-sm">
      No {title.toLowerCase()} data available
    </p>
  </div>
);

const FunctionaryTable = ({
  section,
  loading,
}: {
  section: FunctionarySection;
  loading: boolean;
}) => {
  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
      >
        <TableSkeleton />
      </motion.div>
    );
  }

  if (!section.data || section.data.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-100">
          {section.title}
        </h3>
        <EmptyState title={section.title} />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-sm overflow-hidden"
    >
      <div className="px-6 md:px-8 py-5 border-b border-gray-100 bg-white">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 flex items-center gap-3">
          <span className="w-1.5 h-6 bg-[#631012] rounded-full"></span>
          {section.title}
        </h3>
      </div>

      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full table-fixed" aria-label={section.title}>
          <thead>
            <tr className="bg-gray-50/50">
              <th className="sticky top-0 z-10 px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-[8%] bg-white">
                Sl. No.
              </th>
              <th className="sticky top-0 z-10 px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-[22%] bg-white">
                Name
              </th>
              <th className="sticky top-0 z-10 px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-[25%] bg-white">
                Responsibility
              </th>
              <th className="sticky top-0 z-10 px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-[18%] bg-white">
                Phone No.
              </th>
              <th className="sticky top-0 z-10 px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-[27%] bg-white">
                Email
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {section.data.map((person, index) => (
              <tr
                key={person.id}
                className="hover:bg-gray-50/80 transition-colors duration-200 group odd:bg-white even:bg-gray-50"
              >
                <td className="px-6 py-5 whitespace-nowrap">
                  <span className="text-sm text-gray-600">{index + 1}</span>
                </td>
                <td className="px-6 py-5">
                  <span className="font-medium text-gray-900 group-hover:text-[#631012] transition-colors">
                    {person.name}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-gray-600">{person.responsibility}</span>
                </td>
                <td className="px-6 py-5">
                  {person.phone && person.phone !== '–' ? (
                    <a
                      href={`tel:${person.phone.replace(/[^+\d]/g, '')}`}
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-[#631012] transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {person.phone}
                    </a>
                  ) : (
                    <span className="text-gray-500">–</span>
                  )}
                </td>
                <td className="px-6 py-5">
                  {person.email && person.email !== '–' ? (
                    <a
                      href={`mailto:${person.email}`}
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-[#631012] transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="truncate max-w-[220px]">
                        {person.email}
                      </span>
                    </a>
                  ) : (
                    <span className="text-gray-500">–</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="lg:hidden divide-y divide-gray-100">
        {section.data.map((person, index) => (
          <div
            key={person.id}
            className="p-5 hover:bg-gray-50/50 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 mb-1">
                  <span className="text-gray-400 font-normal mr-2">
                    {index + 1}.
                  </span>
                  {person.name}
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  {person.responsibility}
                </p>

                <div className="space-y-2">
                  {person.phone && person.phone !== '–' ? (
                    <a
                      href={`tel:${person.phone.replace(/[^+\d]/g, '')}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#631012] transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {person.phone}
                    </a>
                  ) : (
                    <div className="text-sm text-gray-500">–</div>
                  )}

                  {person.email && person.email !== '–' ? (
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#631012] transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="truncate">{person.email}</span>
                    </a>
                  ) : (
                    <div className="text-sm text-gray-500">–</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Functionaries() {
  const [sections, setSections] = useState<FunctionarySection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 600));
        setSections(sampleData);
        setError(null);
      } catch (err) {
        console.error('Error fetching functionaries:', err);
        setError('Failed to load functionaries data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gray-50 py-4 px-6 md:px-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link
                href="/"
                className="hover:text-[#800000] transition-colors duration-200"
              >
                Home
              </Link>
              <span>›</span>
              <span className="text-gray-400">Academics</span>
              <span>›</span>
              <span className="text-[#800000] font-medium">Functionaries</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-br from-[#631012] via-[#7a1a1d] to-[#4a0c0e] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Functionaries
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Key academic administrative authorities and supporting staff of
                the Institute.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-8 md:py-10 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center mb-8"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-red-800 font-medium">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  Try Again
                </button>
              </motion.div>
            )}

            <div className="space-y-8">
              {loading ? (
                <>
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl shadow-sm p-6 md:p-8"
                    >
                      <TableSkeleton />
                    </div>
                  ))}
                </>
              ) : (
                sections.map((section) => (
                  <FunctionaryTable
                    key={section.id}
                    section={section}
                    loading={loading}
                  />
                ))
              )}
            </div>

            {!loading && !error && sections.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12 bg-white rounded-2xl shadow-sm p-6 md:p-8"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {sections.map((section) => (
                    <div key={section.id} className="text-center">
                      <div className="text-3xl font-bold text-[#631012] mb-1">
                        {section.data.length}
                      </div>
                      <div className="text-sm text-gray-600">
                        {section.title.split('(')[0].trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
