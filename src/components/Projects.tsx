import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2">Dự Án Tiêu Biểu</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Dấu Ấn T&T Trên Mọi Miền</h3>
            <p className="text-lg text-gray-400">
              Hàng trăm công trình lớn nhỏ đã được T&T tư vấn, giám sát và kiểm định, góp phần kiến tạo nên diện mạo đô thị hiện đại.
            </p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group">
            Xem tất cả dự án
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="group relative overflow-hidden rounded-2xl cursor-pointer block">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="inline-block px-3 py-1 bg-blue-600 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group">
            Xem tất cả dự án
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
