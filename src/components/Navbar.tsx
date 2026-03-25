import { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '/#home' },
    { name: 'Giới thiệu', href: '/#about' },
    { name: 'Dịch vụ', href: '/#services' },
    { name: 'Dự án', href: '/#projects' },
    { name: 'Tài liệu', href: '/#documents' },
    { name: 'Tin tức', href: '/#news' },
    { name: 'Liên hệ', href: '/#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/#home" className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="T&T Quang Binh Logo" 
              className={`w-auto bg-white rounded-xl shadow-sm transition-all duration-300 ${
                isScrolled ? 'h-12 p-1.5' : 'h-16 md:h-20 p-2'
              }`} 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-semibold text-brand-dark hover:text-brand-gold transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="bg-brand-gold text-brand-dark px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-gold-dark transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Nhận tư vấn
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-dark hover:text-brand-gold focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-brand-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-brand-dark hover:text-brand-gold hover:bg-brand-paper"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
