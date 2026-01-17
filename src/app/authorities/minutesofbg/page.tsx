'use client';
import Header31 from '@/app/components/header3';
import { div } from 'motion/react-client';
import { useState } from 'react';

interface Meeting {
  id: number;
  particulars: string;
  dateOfMeeting: string;
}

const meetingsData: Meeting[] = [
  {
    id: 1,
    particulars: '52nd meeting of the Board of Governors',
    dateOfMeeting: '30.05.2024',
  },
  {
    id: 2,
    particulars: '51st meeting of the Board of Governors',
    dateOfMeeting: '06.03.2024',
  },
  {
    id: 3,
    particulars: '50th meeting of the Board of Governors',
    dateOfMeeting: '17.11.2023',
  },
  {
    id: 4,
    particulars: '49th meeting of the Board of Governors',
    dateOfMeeting: '20.03.2023',
  },
  {
    id: 5,
    particulars: '48th meeting of the Board of Governors',
    dateOfMeeting: '15.12.2022',
  },
  {
    id: 6,
    particulars: '47th meeting of the Board of Governors',
    dateOfMeeting: '12.04.2022',
  },
  {
    id: 7,
    particulars: '46th meeting of the Board of Governors',
    dateOfMeeting: '30.12.2021',
  },
  {
    id: 8,
    particulars: '45th meeting of the Board of Governors',
    dateOfMeeting: '28.09.2021',
  },
];

export default function MinutesBWC() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  return (
    <>
      <Header31 />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Minutes of the Meetings
            </h1>
            <p className="text-lg text-gray-600 mb-2">Board of Governors</p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#631012] to-[#8a1518] mx-auto rounded-full"></div>
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Table Container */}
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Table Header */}
                <thead>
                  <tr className="bg-gradient-to-r from-[#631012] to-[#8a1518] text-white">
                    <th className="px-6 py-5 text-left text-sm font-semibold">
                      Sl. No
                    </th>
                    <th className="px-6 py-5 text-left text-sm font-semibold">
                      Particulars
                    </th>
                    <th className="px-6 py-5 text-left text-sm font-semibold">
                      Date of Meeting
                    </th>
                    <th className="px-6 py-5 text-center text-sm font-semibold">
                      Action
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {meetingsData.map((meeting, index) => (
                    <>
                      <tr
                        key={meeting.id}
                        className={`border-b transition-all duration-300 hover:bg-gray-50 ${
                          index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        }`}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {meeting.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <span className="font-medium text-[#631012]">
                            {meeting.particulars}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {meeting.dateOfMeeting}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() =>
                              setExpandedRow(
                                expandedRow === meeting.id ? null : meeting.id
                              )
                            }
                            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#631012] to-[#8a1518] text-white text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                          >
                            {expandedRow === meeting.id ? 'Hide' : 'View'}
                          </button>
                        </td>
                      </tr>

                      {/* Expanded Row Details */}
                      {expandedRow === meeting.id && (
                        <tr className="bg-gradient-to-r from-gray-100 to-gray-50 border-b">
                          <td colSpan={4} className="px-6 py-6">
                            <div className="space-y-4">
                              <div>
                                <h4 className="text-sm font-semibold text-gray-900 mb-2">
                                  Meeting Details
                                </h4>
                                <p className="text-sm text-gray-600">
                                  <strong className="text-gray-900">
                                    {meeting.particulars}
                                  </strong>
                                </p>
                                <p className="text-sm text-gray-600 mt-2">
                                  <strong>Date:</strong> {meeting.dateOfMeeting}
                                </p>
                              </div>

                              {/* Download Links */}
                              <div className="flex flex-wrap gap-3">
                                <a
                                  href="#"
                                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-sm font-medium transition-all duration-300"
                                >
                                  <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                                  </svg>
                                  Download PDF
                                </a>
                                <a
                                  href="#"
                                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg text-sm font-medium transition-all duration-300"
                                >
                                  <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                  </svg>
                                  View Details
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer Stats */}
            <div className="px-6 py-4 bg-gray-50 border-t">
              <p className="text-sm text-gray-600">
                Showing <strong>{meetingsData.length}</strong> meetings of the
                Board of Governors
              </p>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#631012] to-[#8a1518] flex items-center justify-center text-white text-xl">
                  📋
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {meetingsData.length} Meetings
                  </h3>
                  <p className="text-sm text-gray-600">Available records</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#631012] to-[#8a1518] flex items-center justify-center text-white text-xl">
                  📅
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Latest</h3>
                  <p className="text-sm text-gray-600">
                    {meetingsData[0].dateOfMeeting}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#631012] to-[#8a1518] flex items-center justify-center text-white text-xl">
                  📄
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Documents</h3>
                  <p className="text-sm text-gray-600">Ready to download</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
