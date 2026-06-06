'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface DeleteNewsProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteNews = ({ isOpen, onClose, onDelete }: DeleteNewsProps) => {
  const [confirmText, setConfirmText] = useState('');

  const handleDelete = () => {
    if (confirmText.toLowerCase() === 'delete') {
      onDelete();
      setConfirmText('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Delete News</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-600 text-sm mb-6">
            To delete this news, type delete to confirm the deletion.
          </p>

          <input
            type="text"
            placeholder="delete"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-900 focus:border-transparent outline-none text-gray-900"
          />

          <div className="flex gap-3 mt-6">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-2.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              disabled={confirmText.toLowerCase() !== 'delete'}
              className="flex-1 px-6 py-2.5 bg-red-900 text-white rounded-md hover:bg-red-800 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteNews;
