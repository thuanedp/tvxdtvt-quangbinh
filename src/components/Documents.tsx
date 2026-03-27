import { useState, useMemo } from 'react';
import { FileText, Download, Calendar, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { documents } from '../data/documents';

export default function Documents() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [currentPage, setCurrentPage] = useState(1);
  const documentsPerPage = 6;

  // Get unique categories
  const categories = ['Tất cả', ...Array.from(new Set(documents.map(doc => doc.category)))];

  // Filter and search documents
  const filteredDocuments = useMemo(() => {
    return documents.filter(doc => {
      const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            (doc.description && doc.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'Tất cả' || doc.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredDocuments.length / documentsPerPage);
  const startIndex = (currentPage - 1) * documentsPerPage;
  const currentDocuments = filteredDocuments.slice(startIndex, startIndex + documentsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('documents')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Reset to first page when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const getPageNumbers = () => {
    const delta = 1;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <section id="documents" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Tài Liệu Chuyên Ngành</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cập Nhật Tiêu Chuẩn Mới Nhất</h3>
          <p className="text-lg text-gray-600">
            Tổng hợp các tiêu chuẩn Việt Nam (TCVN), quy chuẩn xây dựng và tài liệu chuyên ngành mới nhất phục vụ công tác tư vấn, thiết kế, giám sát.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Tìm kiếm tài liệu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-gray-50 focus:bg-white transition-colors"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          </div>
        </div>

        {/* Document List */}
        {currentDocuments.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {currentDocuments.map((doc) => (
              <div 
                key={doc.id} 
                onClick={() => navigate(`/documents/${doc.id}`)}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 group cursor-pointer block"
              >
                <div className="bg-blue-50 p-4 rounded-xl flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <FileText className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 text-sm text-gray-500">
                    <span className="bg-gray-100 px-2.5 py-0.5 rounded-full font-medium text-gray-700">
                      {doc.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {doc.date}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-3">
                    {doc.title}
                  </h4>
                  <a 
                    href={doc.fileUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Tải về
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-1">Không tìm thấy tài liệu</h3>
            <p className="text-gray-500">Vui lòng thử lại với từ khóa hoặc danh mục khác.</p>
          </div>
        )}
        
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-full flex items-center justify-center transition-colors ${
                currentPage === 1 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
              aria-label="Trang trước"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <div className="flex space-x-1">
              {getPageNumbers().map((page, index) => (
                page === '...' ? (
                  <span key={`dots-${index}`} className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-400">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => handlePageChange(Number(page))}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {page}
                  </button>
                )
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full flex items-center justify-center transition-colors ${
                currentPage === totalPages 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
              aria-label="Trang sau"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
