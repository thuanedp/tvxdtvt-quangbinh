import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Download, ZoomIn, ZoomOut, AlertCircle, FileText, Search } from 'lucide-react';
import { documents } from '../data/documents';
import { news } from '../data/news';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF.js worker for Vite using CDN to fix deployment issues
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Suppress PDF.js console warnings for empty/invalid PDFs
const originalWarn = console.warn;
console.warn = (...args) => {
  if (args[0] && typeof args[0] === 'string' && args[0].includes('InvalidPDFException')) {
    return;
  }
  originalWarn(...args);
};

const originalError = console.error;
console.error = (...args) => {
  if (args[0] && typeof args[0] === 'string' && args[0].includes('InvalidPDFException')) {
    return;
  }
  if (args[0] && args[0].name === 'InvalidPDFException') {
    return;
  }
  originalError(...args);
};

export default function DocumentDetail() {
  const { id } = useParams();
  const document = documents.find((doc) => doc.id === Number(id));
  
  const [numPages, setNumPages] = useState<number | null>(null);
  const [scale, setScale] = useState(1.0);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    setScale(1.0);
    setError(null);
    setSearchTerm('');
  }, [id]);

  if (!document) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 bg-white">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Không tìm thấy tài liệu</h1>
        <p className="text-gray-600 mb-8">Tài liệu bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
        <Link to="/#documents" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
          Về danh mục tài liệu
        </Link>
      </div>
    );
  }

  const relatedDocuments = documents.filter(doc => doc.id !== document.id && doc.category === document.category);
  const searchResults = documents.filter(doc => doc.id !== document.id && doc.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const recentNews = news.slice(0, 3);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(err: Error) {
    if (err.message.includes('Invalid PDF structure') || err.message.includes('missing PDF header')) {
      setError('Tài liệu này hiện đang trống hoặc đang trong quá trình cập nhật. Bạn có thể thử tải về máy để kiểm tra.');
    } else {
      setError('Không thể hiển thị trực tiếp file PDF này trên trình duyệt do định dạng không được hỗ trợ.');
    }
  }

  const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 3.0));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1">
              <li className="inline-flex items-center">
                <Link to="/" className="hover:text-blue-600 transition-colors">Trang chủ</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2">»</span>
                  <Link to="/#documents" className="hover:text-blue-600 transition-colors">Tài liệu</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2">»</span>
                  <span className="text-gray-900 truncate max-w-[200px] sm:max-w-md">{document.title}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-6 leading-tight">
              {document.title}
            </h1>
            
            <div className="flex items-center text-gray-700 text-sm mb-4 font-medium">
              <Calendar className="w-4 h-4 mr-2" />
              {document.date}
            </div>

            {document.description && (
              <div className="text-gray-800 leading-relaxed mb-6 text-[15px]">
                <p>{document.description}</p>
              </div>
            )}

            {/* PDF Viewer */}
            <div className="w-full bg-gray-100 rounded-sm overflow-hidden mb-6 shadow-sm border border-gray-200">
              {/* Toolbar */}
              <div className="bg-gray-800 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium truncate max-w-[150px] sm:max-w-[250px]" title={document.title}>
                    {document.title}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="flex items-center space-x-2 bg-gray-700 rounded px-3 py-1.5">
                    <span className="text-sm text-center font-medium">
                      {numPages ? `${numPages} trang` : 'Đang tải...'}
                    </span>
                  </div>

                  <div className="flex items-center space-x-1 border-l border-gray-600 pl-2 sm:pl-4">
                    <button 
                      onClick={zoomOut}
                      className="p-1.5 hover:bg-gray-700 rounded transition-colors"
                      title="Thu nhỏ"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="text-sm w-12 text-center">{Math.round(scale * 100)}%</span>
                    <button 
                      onClick={zoomIn}
                      className="p-1.5 hover:bg-gray-700 rounded transition-colors"
                      title="Phóng to"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Document Container */}
              <div className="h-[600px] sm:h-[800px] overflow-auto bg-gray-200 p-4 sm:p-8 flex flex-col">
                {error ? (
                  <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-lg border border-gray-200 p-8 text-center shadow-sm m-auto max-w-lg w-full">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                      <AlertCircle className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Không thể xem trước tài liệu</h3>
                    <p className="mb-8 text-gray-600 leading-relaxed">{error}</p>
                    <a 
                      href={document.fileUrl} 
                      download 
                      className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm w-full sm:w-auto"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Tải tài liệu về máy
                    </a>
                  </div>
                ) : (
                  <Document
                    file={document.fileUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading={
                      <div className="flex items-center justify-center h-full">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      </div>
                    }
                    className="flex flex-col items-center"
                  >
                    {Array.from(new Array(numPages || 0), (el, index) => (
                      <div key={`page_${index + 1}`} className="mb-6 shadow-lg bg-white">
                        <Page 
                          pageNumber={index + 1} 
                          scale={scale} 
                          renderTextLayer={true}
                          renderAnnotationLayer={true}
                          loading={
                            <div className="flex items-center justify-center h-[800px] w-[600px] bg-white">
                              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                            </div>
                          }
                        />
                      </div>
                    ))}
                  </Document>
                )}
              </div>
            </div>

            {/* Download Button */}
            <div className="mb-10">
              <a 
                href={document.fileUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 border border-amber-600 text-amber-600 hover:bg-amber-50 rounded text-lg transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Tải về
              </a>
            </div>

            {/* Other Documents */}
            <div className="mt-8">
              <div className="bg-gray-100 py-3 px-4 mb-4">
                <h3 className="text-blue-500 font-semibold uppercase tracking-wider text-sm">TÀI LIỆU CÙNG CHUYÊN MỤC</h3>
              </div>
              <ul className="space-y-3 max-h-[500px] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin' }}>
                {relatedDocuments.length > 0 ? relatedDocuments.map(doc => (
                  <li key={doc.id} className="flex items-start">
                    <FileText className="w-5 h-5 mr-3 text-gray-800 shrink-0 mt-0.5" fill="currentColor" />
                    <Link to={`/documents/${doc.id}`} className="text-gray-800 hover:text-blue-600 transition-colors text-[15px] leading-snug">
                      {doc.title}
                    </Link>
                  </li>
                )) : (
                  <li className="text-gray-500 italic text-sm">Không có tài liệu cùng chuyên mục.</li>
                )}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Featured Services */}
            <div>
              <div className="bg-gray-100 py-3 px-4 mb-4">
                <h3 className="text-blue-500 font-semibold text-center uppercase tracking-wider text-sm">DỊCH VỤ NỔI BẬT</h3>
              </div>
              <ul className="divide-y divide-gray-100">
                <li>
                  <Link to="/services/kiem-dinh-cong-trinh-xay-dung" className="block py-3 text-gray-800 hover:text-blue-600 transition-colors text-[15px]">
                    Kiểm định công trình xây dựng
                  </Link>
                </li>
                <li>
                  <Link to="/services/thi-nghiem-vat-lieu-xay-dung" className="block py-3 text-gray-800 hover:text-blue-600 transition-colors text-[15px]">
                    Thí nghiệm vật liệu xây dựng
                  </Link>
                </li>
              </ul>
            </div>

            {/* Latest Documents / Search */}
            <div>
              <div className="bg-gray-100 py-3 px-4 mb-4">
                <h3 className="text-blue-500 font-semibold text-center uppercase tracking-wider text-sm">TÌM KIẾM TÀI LIỆU</h3>
              </div>
              <div className="mb-4 relative">
                <input
                  type="text"
                  placeholder="Nhập tên tài liệu..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
              </div>
              <ul className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin' }}>
                {searchResults.length > 0 ? searchResults.map(doc => (
                  <li key={doc.id}>
                    <Link to={`/documents/${doc.id}`} className="block py-3 hover:text-blue-600 transition-colors group">
                      <p className="text-gray-800 group-hover:text-blue-600 transition-colors text-[15px] leading-snug line-clamp-2">
                        {doc.title}
                      </p>
                    </Link>
                  </li>
                )) : (
                  <li className="py-3 text-gray-500 text-sm text-center">Không tìm thấy tài liệu phù hợp</li>
                )}
              </ul>
            </div>

            {/* Latest News */}
            <div>
              <div className="bg-gray-100 py-3 px-4 mb-4">
                <h3 className="text-blue-500 font-semibold text-center uppercase tracking-wider text-sm">TIN TỨC MỚI NHẤT</h3>
              </div>
              <ul className="divide-y divide-gray-100">
                {recentNews.map(item => (
                  <li key={item.id}>
                    <Link to={`/news/${item.id}`} className="block py-3 hover:text-blue-600 transition-colors group">
                      <p className="text-gray-800 group-hover:text-blue-600 transition-colors text-[15px] leading-snug">
                        {item.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
