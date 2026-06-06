
'use client';
import React, { useState, useEffect } from 'react';
import { EventInput } from '../../../types';

type AddEventProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (event: EventInput) => void;
};

const AddEvent: React.FC<AddEventProps> = ({ isOpen, onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [file, setFile] = useState('');

  useEffect(() => {
    if (isOpen) {
      setTitle('');
      setDescription('');
      setDate('');
      setVenue('');
      setFile('');
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ title, description, date, venue, file });
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-[95vw] p-5 relative">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Add Event</h2>
          <button className="text-2xl" onClick={onClose} aria-label="Close">&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Event Title</label>
            <input
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Enter event title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Description</label>
            <textarea
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring"
              rows={3}
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Enter description"
            />
          </div>
          <div className="mb-4 flex gap-2">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring"
                value={date}
                onChange={e => setDate(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Venue</label>
              <input
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring"
                value={venue}
                onChange={e => setVenue(e.target.value)}
                placeholder="Enter venue"
              />
            </div>
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 mb-1">Attach File</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring"
              value={file}
              onChange={e => setFile(e.target.value)}
              placeholder="File name or path"
            />
          </div>
          <div className="flex gap-3">
            <button type="submit" className="flex-1 bg-[#75181d] text-white py-2 rounded-lg font-medium">Add Event</button>
            <button type="button" className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg font-medium" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
