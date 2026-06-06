'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

// Types
interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  file?: string;
}

interface EditNewsProps {
  isOpen: boolean;
  onClose: () => void;
  news: NewsItem | null;
  onEdit: (news: NewsItem) => void;
}

const EditNews = ({ isOpen, onClose, news, onEdit }: EditNewsProps) => {
  const [formData, setFormData] = useState({
    title: news?.title || '',
    description: news?.description || '',
    date: news?.date || '',
    file: news?.file || '',
  });

  React.useEffect(() => {
    if (news) {
      setFormData({
        title: news.title,
        description: news.description,
        date: news.date,
        file: news.file || '',
      });
    }
  }, [news]);

  const handleSubmit = () => {
    if (news && formData.title && formData.description) {
      onEdit({ ...news, ...formData });
      onClose();
    }
  };

  if (!isOpen || !news) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Edit News</h2>
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
            Edit the news details below and click save when done
          </p>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter title here"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-900 focus:border-transparent outline-none text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                placeholder="Enter description here"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-900 focus:border-transparent outline-none resize-none text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                File
              </label>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm">
                Choose file
              </button>
            </div>
          </div>

          <div className="flex gap-3 mt-8 pt-6 border-t">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-2.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-6 py-2.5 bg-red-900 text-white rounded-md hover:bg-red-800 transition-colors font-medium"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNews;
