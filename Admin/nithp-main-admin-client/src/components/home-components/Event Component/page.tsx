'use client';
import React, { useState } from 'react';
import AddEvent from './AddEvent';
import EditEvent from './EditEvent';
import DeleteEvent from './DeleteEvent';
import ShowFile from './ShowFile';
import { EventType, EventInput } from '../../../types';

// Dummy data for pagination demonstration
const initialEvents: EventType[] = [
  {
    id: 1,
    title: 'Heading',
    description:
      'Lorem Ipsum is simply dummy text of the printing ever Lorem Ipsum is simply dummy text of the printing ever ........',
    date: '2025-10-31',
    venue: 'Auditorium',
    file: 'Event.pdf',
    fileUrl: '/files/Event.pdf',
  },

  // Add more events as needed
];

const summaryStats = {
  totalEvents: 20,
  upcoming: 4,
  completed: 7,
  totalAttendees: '1.1K',
  percentChange: 12,
};

type StatBoxProps = {
  label: string;
  value: string | number;
  sub?: string;
  subColor?: string;
};

function StatBox({ label, value, sub, subColor }: StatBoxProps) {
  return (
    <div className="flex-1 min-w-[140px] bg-white p-5 rounded-xl shadow text-gray-800 mb-3 sm:mb-0">
      <div className="text-base text-gray-400">{label}</div>
      <div className="text-2xl sm:text-3xl font-bold my-2">{value}</div>
      <div className={`text-xs ${subColor ? subColor : 'text-gray-400'}`}>
        {sub}
      </div>
    </div>
  );
}

export default function EventsDashboard() {
  const [activeTab, setActiveTab] = useState('Upcoming Events');
  const [eventsData, setEventsData] = useState<EventType[]>(initialEvents);

  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [showFileOpen, setShowFileOpen] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(eventsData.length / PAGE_SIZE));
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const pagedEvents = eventsData.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handleAddEvent = (event: EventInput) => {
    const newEvent: EventType = { ...event, id: eventsData.length + 1 };
    setEventsData((prev) => [...prev, newEvent]);
    setAddOpen(false);
  };

  const handleUpdateEvent = (updatedEvent: EventType) => {
    setEventsData(
      eventsData.map((ev) => (ev.id === updatedEvent.id ? updatedEvent : ev))
    );
    setEditOpen(false);
  };

  const handleDeleteEvent = (eventId: number) => {
    setEventsData(eventsData.filter((ev) => ev.id !== eventId));
    setDeleteOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-10 px-2 sm:px-6 font-sans">
      <AddEvent
        isOpen={addOpen}
        onClose={() => setAddOpen(false)}
        onAdd={handleAddEvent}
      />
      <EditEvent
        event={selectedEvent}
        isOpen={editOpen}
        onClose={() => setEditOpen(false)}
        onUpdate={handleUpdateEvent}
      />
      <DeleteEvent
        event={selectedEvent}
        isOpen={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onDelete={handleDeleteEvent}
      />
      <ShowFile
        isOpen={showFileOpen}
        event={selectedEvent}
        onClose={() => setShowFileOpen(false)}
      />

      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1 text-gray-900">
          Events
        </h1>
        <p className="mb-6 text-gray-500 text-sm sm:text-base">
          Manage and organize all institute events
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            className="px-3 py-2 border text-gray-900 border-gray-300 rounded-lg outline-none"
            placeholder="Search events..."
          />
          <button className="bg-gray-200 text-gray-700 rounded-lg px-4 py-2">
            Filter
          </button>
          <button
            className="bg-[#75181d] text-white rounded-lg px-5 py-2 font-medium"
            onClick={() => setAddOpen(true)}
          >
            + Add Event
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <StatBox
            label="Total Events"
            value={summaryStats.totalEvents}
            sub={`↑ ${summaryStats.percentChange}% from last month`}
            subColor="text-green-500"
          />
          <StatBox
            label="Upcoming"
            value={summaryStats.upcoming}
            sub="Next 30 days"
          />
          <StatBox
            label="Completed"
            value={summaryStats.completed}
            sub="This Month"
          />
          <StatBox
            label="Total Attendees"
            value={summaryStats.totalAttendees}
            sub="All time"
          />
        </div>
        <div>
          <div className="flex border-b border-gray-200 mb-2 text-sm">
            <button
              onClick={() => setActiveTab('Latest Events')}
              className={`px-4 sm:px-7 py-3 transition whitespace-nowrap ${activeTab === 'Latest Events' ? 'border-b-2 border-[#75181d] text-[#75181d]' : 'text-gray-500'}`}
            >
              Latest Events
            </button>
            <button
              onClick={() => setActiveTab('Upcoming Events')}
              className={`px-4 sm:px-7 py-3 transition whitespace-nowrap ${activeTab === 'Upcoming Events' ? 'border-b-2 border-[#75181d] text-[#75181d]' : 'text-gray-500'}`}
            >
              Upcoming Events
            </button>
          </div>
          <div className="overflow-x-auto bg-white rounded-xl shadow">
            <table className="w-full min-w-[600px] sm:min-w-full table-auto">
              <thead className="bg-[#75181d] text-white">
                <tr>
                  <th className="py-4 px-2 sm:px-3 text-left font-normal">
                    Sr.No.
                  </th>
                  <th className="text-left font-normal px-2 sm:px-3">Title</th>
                  <th className="hidden md:table-cell text-left font-normal px-4">
                    Description
                  </th>
                  <th className="text-left font-normal px-2 sm:px-3">Date</th>
                  <th className="hidden sm:table-cell text-left font-normal px-2 sm:px-3">
                    Venue
                  </th>
                  <th className="text-left font-normal px-2 sm:px-3">File</th>
                  <th className="text-left font-normal pl-6">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pagedEvents.map((event, idx) => (
                  <tr key={event.id} className="border-b last:border-0">
                    <td className="py-2 px-2 sm:px-3 whitespace-nowrap">
                      {(currentPage - 1) * PAGE_SIZE + idx + 1}
                    </td>
                    <td className="py-2 px-2 sm:px-3 whitespace-normal">
                      <span className="font-semibold text-[#75181d]">
                        {event.title}
                      </span>
                    </td>
                    <td className="hidden md:table-cell text-gray-900 px-4 py-2 max-w-xl whitespace-normal text-ellipsis overflow-hidden">
                      {event.description}
                    </td>
                    <td className="px-2 py-2 sm:px-3 text-gray-900 whitespace-nowrap">
                      {event.date}
                    </td>
                    <td className="hidden sm:table-cell text-gray-900 py-2 px-2 sm:px-3 whitespace-normal">
                      {event.venue}
                    </td>
                    <td className="py-2 px-2 sm:px-3 whitespace-nowrap">
                      <button
                        className="bg-black text-white px-2 py-1 rounded text-xs"
                        onClick={() => {
                          setSelectedEvent(event);
                          setShowFileOpen(true);
                        }}
                      >
                        Show File
                      </button>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <div className="flex gap-2 justify-start sm:justify-center items-center">
                        <button
                          className="text-black px-3 py-1 rounded text-xl flex items-center gap-1 transform rotate-90"
                          onClick={() => {
                            setSelectedEvent(event);
                            setEditOpen(true);
                          }}
                          aria-label="Edit"
                        >
                          &#9998;
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700 text-xl px-2 transition"
                          onClick={() => {
                            setSelectedEvent(event);
                            setDeleteOpen(true);
                          }}
                          aria-label="Delete"
                        >
                          &#128465;
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex flex-wrap px-6 py-4 justify-center gap-2 mt-8">
              <button
                className="px-3 py-2 rounded border border-gray-300 bg-gray-100 text-gray-500"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
              >
                Previous
              </button>
              {pageNumbers.map((num) => (
                <button
                  key={num}
                  className={`px-3 py-2 rounded border border-gray-300 ${
                    num === currentPage
                      ? 'bg-[#75181d] text-white'
                      : 'bg-white text-gray-700'
                  }`}
                  onClick={() => setCurrentPage(num)}
                >
                  {num}
                </button>
              ))}
              <button
                className="px-3 py-2 rounded border border-gray-300 bg-white text-gray-700"
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage(Math.min(currentPage + 1, totalPages))
                }
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
