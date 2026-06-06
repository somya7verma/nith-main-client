'use client';
import React from 'react';
import { EventType} from '../../../types';

type DeleteEventProps = {
  isOpen: boolean;
  event: EventType | null;
  onClose: () => void;
  onDelete: (eventId: number) => void;
};

const DeleteEvent: React.FC<DeleteEventProps> = ({ isOpen, event, onClose, onDelete }) => {
  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 max-w-sm w-[90vw] shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Delete Event</h2>
        <p className="mb-6">Are you sure you want to delete the event "{event.title}"?</p>
        <div className="flex gap-3">
          <button className="flex-1 bg-red-600 text-white py-2 rounded-lg font-medium"
            onClick={() => onDelete(event.id)}>
            Delete
          </button>
          <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg font-medium" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteEvent;
