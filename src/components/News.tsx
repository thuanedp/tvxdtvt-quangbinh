import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { news } from '../data/news';

export default function News() {
  return (
    <section id="news" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Tin Tức & Sự Kiện</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cập Nhật Mới Nhất</h3>
            <p className="text-lg text-gray-600">
              Những thông tin chuyên ngành, quy định pháp luật và hoạt động nổi bật của T&T Quang Binh.
            </p>
          </div>
          <Link to="/#news" className="hidden md:inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
            Xem tất cả tin tức
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <Link to={`/news/${item.id}`} key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full uppercase tracking-wider shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">
                  {item.description}
                </p>
                <div className="inline-flex items-center text-blue-600 font-medium text-sm mt-auto group-hover:translate-x-1 transition-transform">
                  Đọc tiếp <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/#news" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
            Xem tất cả tin tức
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
