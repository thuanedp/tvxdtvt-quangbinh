import { Phone, MapPin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex flex-row justify-around items-center p-3 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-[60] md:bottom-auto md:left-auto md:right-4 md:top-1/2 md:-translate-y-1/2 md:w-auto md:flex-col md:gap-3 md:bg-transparent md:border-none md:shadow-none md:p-0">
      {/* Phone */}
      <a 
        href="tel:0912881202" 
        className="w-10 h-10 md:w-12 md:h-12 bg-[#1A1613] hover:bg-[#4CAF50] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
        aria-label="Gọi điện thoại"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
      </a>
      
      {/* Zalo */}
      <a 
        href="https://zalo.me/0912881202" 
        target="_blank" 
        rel="noreferrer" 
        className="group w-10 h-10 md:w-12 md:h-12 bg-[#1A1613] hover:bg-[#0068FF] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
        aria-label="Chat Zalo"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.895 3 3 3.895 3 5v10c0 1.105.895 2 2 2h2v4l4-4h8c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2z"/>
          <text x="12" y="13" textAnchor="middle" fontSize="8" className="fill-[#1A1613] group-hover:fill-[#0068FF] transition-colors duration-300" fontWeight="900" fontFamily="Arial, sans-serif">Zalo</text>
        </svg>
      </a>

      {/* Email */}
      <a 
        href="mailto:tuvanxaydung@truongthinh.com" 
        className="w-10 h-10 md:w-12 md:h-12 bg-[#1A1613] hover:bg-[#EA4335] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
        aria-label="Gửi Email"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      </a>

      {/* Location */}
      <Link 
        to="/#contact" 
        className="w-10 h-10 md:w-12 md:h-12 bg-[#1A1613] hover:bg-[#EA4335] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
        aria-label="Bản đồ"
      >
        <MapPin className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
      </Link>

      {/* Messenger */}
      <a 
        href="https://m.me/ttquangbinh" 
        target="_blank" 
        rel="noreferrer" 
        className="w-10 h-10 md:w-12 md:h-12 bg-[#1A1613] hover:bg-[#0084FF] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
        aria-label="Chat Messenger"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.91 1.498 5.5 3.824 7.182v3.313c0 .393.447.618.76.38l3.18-2.39c1.028.288 2.12.446 3.236.446 5.523 0 10-4.145 10-9.259C23 6.145 18.523 2 12 2zm1.08 9.38l-2.61-2.78c-.28-.3-.75-.3-1.03 0l-3.82 4.07c-.36.38.16.94.63.66l2.84-1.66c.26-.15.58-.15.84 0l2.61 2.78c.28.3.75.3 1.03 0l3.82-4.07c.36-.38-.16-.94-.63-.66l-2.84 1.66c-.26.15-.58.15-.84 0z"/>
        </svg>
      </a>

      {/* Instagram */}
      <a 
        href="https://instagram.com/ttquangbinh" 
        target="_blank" 
        rel="noreferrer" 
        className="w-10 h-10 md:w-12 md:h-12 bg-[#1A1613] hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5 md:w-7 md:h-7" />
      </a>
    </div>
  );
}
