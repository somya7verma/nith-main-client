'use client';
import React from 'react';
import { EventType } from '../../../types';

type ShowFileProps = {
  isOpen: boolean;
  event: EventType | null;
  onClose: () => void;
  
};


const ShowFile: React.FC<ShowFileProps> = ({ isOpen, event, onClose }) => {
  if (!isOpen || !event) return null;

  // Example file details: Replace these with actual file info if available in your event object
  const fileName = event.file || 'No document';
  const fileUrl = event.fileUrl || ''; // Add fileUrl to your EventType if storing URLs
  const fileSize = '24 × 48'; // Replace with actual size if available
  const isFileAvailable = !!fileUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-[95vw] p-5 relative">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Event File Details</h2>
          <button className="text-2xl" onClick={onClose} aria-label="Close">&times;</button>
        </div>
        <div className="mb-3 py-3 border-b">
          <div className="font-semibold mb-1">Event Title</div>
          <div className="text-gray-700 text-sm">{event.description}</div>
        </div>
        <div className="mb-2 flex gap-2">
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Date</label>
            <input
              className="w-full p-2 border rounded-lg bg-gray-100"
              value={event.date}
              readOnly
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Venue</label>
            <input
              className="w-full p-2 border rounded-lg bg-gray-100"
              value={event.venue}
              readOnly
            />
          </div>
        </div>
        <div className="my-5 p-7 rounded-xl border-dashed border-2 border-gray-300 flex flex-col items-center">
          <svg className="w-8 h-8 text-gray-500 mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0 0l-3 3m3-3l3 3M4 7a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4V7z" />
          </svg>
          <div className="text-sm font-medium">{fileName}</div>
          <div className="text-xs text-gray-500 mb-4">Size: {fileSize}</div>
          {isFileAvailable ? (
            <a
              href={fileUrl}
              download={fileName}
              className="bg-[#75181d] text-white px-8 py-2 rounded-lg font-medium mt-2 text-center"
            >
              Download File
            </a>
          ) : (
            <button disabled className="bg-gray-300 text-gray-700 px-8 py-2 rounded-lg font-medium mt-2 text-center">
              No File Available
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowFile;
