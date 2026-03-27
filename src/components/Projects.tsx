import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to the top of the projects section smoothly
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
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
                <h4 className="text-xl font-bold mb-2 line-clamp-2">{project.title}</h4>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3 text-sm">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-full flex items-center justify-center transition-colors ${
                currentPage === 1 
                  ? 'text-gray-600 cursor-not-allowed' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
              aria-label="Trang trước"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <div className="flex space-x-1">
              {getPageNumbers().map((page, index) => (
                page === '...' ? (
                  <span key={`dots-${index}`} className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-600">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => handlePageChange(Number(page))}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
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
                  ? 'text-gray-600 cursor-not-allowed' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
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
