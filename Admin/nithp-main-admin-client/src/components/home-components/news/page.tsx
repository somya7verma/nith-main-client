'use client';

import React, { useState } from 'react';
import {
  Search,
  Filter,
  Plus,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import AddNews from './add';
import EditNews from './edit';
import DeleteNews from './delete';

// Types
interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  file?: string;
}

// Main News Page Component
const NewsPage = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([
    {
      id: 1,
      title: 'Heading',
      description: 'Lorem Ipsum is simply dummy text of the printing ever ...',
      date: '31/10/2025',
      file: 'Doc file',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const itemsPerPage = 10;

  const handleAddNews = (news: Omit<NewsItem, 'id'>) => {
    const newNews = {
      ...news,
      id: newsItems.length + 1,
      date: news.date || new Date().toLocaleDateString('en-GB'),
    };
    setNewsItems([...newsItems, newNews]);
  };

  const handleEditNews = (updatedNews: NewsItem) => {
    setNewsItems(
      newsItems.map((item) => (item.id === updatedNews.id ? updatedNews : item))
    );
  };

  const handleDeleteNews = () => {
    if (selectedNews) {
      setNewsItems(newsItems.filter((item) => item.id !== selectedNews.id));
    }
  };

  const openEditModal = (news: NewsItem) => {
    setSelectedNews(news);
    setShowEditModal(true);
  };

  const openDeleteModal = (news: NewsItem) => {
    setSelectedNews(news);
    setShowDeleteModal(true);
  };

  const filteredNews = newsItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filteredNews.length / itemsPerPage));

  React.useEffect(() => {
    const computedTotal = Math.max(
      1,
      Math.ceil(filteredNews.length / itemsPerPage)
    );
    if (currentPage > computedTotal) {
      setCurrentPage(computedTotal);
    } else if (currentPage < 1) {
      setCurrentPage(1);
    }
  }, [filteredNews.length]);

  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="p-8">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Header */}
          <div className="border-b px-6 py-4">
            <div className="flex items-center justify-between mb-1">
              <h1 className="text-2xl font-semibold text-gray-900">News</h1>
              <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center text-white font-medium">
                {newsItems.length}
              </div>
            </div>
            <p className="text-sm text-gray-600">
              All news will be displayed on home page
            </p>
          </div>

          {/* Search and Actions */}
          <div className="px-6 py-4 border-b">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-900 focus:border-transparent outline-none text-gray-900"
                />
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  <span className="text-sm font-medium">Filter</span>
                </button>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-900 text-white rounded-md hover:bg-red-800 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-medium">Add News</span>
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-red-900 text-white">
                  <th className="px-6 py-4 text-left text-sm font-medium">
                    Sr.No.
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium">
                    File
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedNews.map((item, index) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {(currentPage - 1) * itemsPerPage + index + 1}.
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {item.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {item.description}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {item.date}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs rounded">
                        {item.file || 'Doc file'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openEditModal(item)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => openDeleteModal(item)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            {[...Array(Math.min(totalPages, 5))].map((_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={i}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 text-sm rounded ${
                    currentPage === pageNum
                      ? 'bg-red-900 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {totalPages > 5 && currentPage < totalPages - 2 && (
              <>
                <span className="text-gray-400">...</span>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className="w-8 h-8 text-sm text-gray-600 hover:bg-gray-100 rounded"
                >
                  {totalPages}
                </button>
              </>
            )}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AddNews
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddNews}
      />
      <EditNews
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        news={selectedNews}
        onEdit={handleEditNews}
      />
      <DeleteNews
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onDelete={handleDeleteNews}
      />
    </div>
  );
};

export default NewsPage;
