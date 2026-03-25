import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy dự án</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <Link to="/#projects" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors w-fit">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Quay lại danh sách dự án
          </Link>
          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4 w-fit uppercase tracking-wider">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tổng quan dự án</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>
              {project.content && (
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.content}
                </p>
              )}
            </div>

            {/* Video Section (if available) */}
            {project.video && (
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Video dự án</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-100">
                  <iframe
                    src={project.video}
                    title={`Video ${project.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            )}

            {/* Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Hình ảnh dự án</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${project.title} - Hình ${index + 1}`}
                      className="w-full h-64 object-cover rounded-xl shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Thông tin nhanh</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Hạng mục</p>
                  <p className="font-semibold text-gray-900">{project.category}</p>
                </div>
                {/* Add more project details here if needed in the future */}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4">Liên hệ tư vấn</h4>
                <p className="text-gray-600 mb-4">
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
