import { FileText, Download, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { documents } from '../data/documents';

export default function Documents() {
  const navigate = useNavigate();

  return (
    <section id="documents" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Tài Liệu & Tin Tức</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cập Nhật Tiêu Chuẩn Mới Nhất</h3>
          <p className="text-lg text-gray-600">
            Tổng hợp các tiêu chuẩn Việt Nam (TCVN), quy chuẩn xây dựng và tài liệu chuyên ngành mới nhất phục vụ công tác tư vấn, thiết kế, giám sát.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {documents.map((doc) => (
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
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm">
            Xem thêm tài liệu
          </button>
        </div>
      </div>
    </section>
  );
}
