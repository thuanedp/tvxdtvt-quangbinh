import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { news } from '../data/news';
import { useEffect } from 'react';

export default function NewsDetail() {
  const { id } = useParams();
  const newsItem = news.find((n) => n.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy tin tức</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  const recentNews = news.filter(n => n.id !== newsItem.id).slice(0, 4);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <Link to="/#news" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors w-fit">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Quay lại tin tức
          </Link>
          <div className="flex flex-wrap items-center text-gray-300 text-sm mb-4 gap-4">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white font-semibold rounded-full uppercase tracking-wider">
              {newsItem.category}
            </span>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {newsItem.date}
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              T&T Quang Binh
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl leading-tight">
            {newsItem.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl font-medium text-gray-900 mb-8 leading-relaxed border-l-4 border-blue-600 pl-4">
                  {newsItem.description}
                </p>
                {newsItem.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Tin tức liên quan</h3>
              <div className="space-y-6">
                {recentNews.map((item) => (
                  <Link to={`/news/${item.id}`} key={item.id} className="group block">
                    <div className="flex gap-4">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-20 h-20 object-cover rounded-lg shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1 text-sm">
                          {item.title}
                        </h4>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.date}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4">Liên hệ tư vấn</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Bạn cần tư vấn về dịch vụ kiểm định, thí nghiệm vật liệu xây dựng?
                </p>
                <Link
                  to="/#contact"
                  className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Nhận tư vấn ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
