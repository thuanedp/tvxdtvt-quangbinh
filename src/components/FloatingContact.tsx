import { Phone, MapPin, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function FloatingContact() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const tooltipClass = "absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-gray-900 text-white text-xs font-medium rounded-lg whitespace-nowrap px-3 py-2 shadow-xl pointer-events-none " +
    "bottom-full mb-3 left-1/2 -translate-x-1/2 " +
    "md:bottom-auto md:mb-0 md:left-auto md:translate-x-0 md:right-full md:mr-4 md:top-1/2 md:-translate-y-1/2 " +
    "after:content-[''] after:absolute after:border-4 after:border-transparent after:border-t-gray-900 after:top-full after:left-1/2 after:-translate-x-1/2 " +
    "md:after:border-t-transparent md:after:border-l-gray-900 md:after:left-full md:after:top-1/2 md:after:-translate-y-1/2 md:after:translate-x-0";

  return (
    <div className="fixed bottom-0 left-0 w-full flex flex-row justify-around items-center p-3 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-[60] md:bottom-auto md:left-auto md:right-4 md:top-1/2 md:-translate-y-1/2 md:w-auto md:flex-col md:gap-3 md:bg-transparent md:border-none md:shadow-none md:p-0">
      {/* Phone 1 (Primary) */}
      <a 
        href="tel:0919012636" 
        className="group relative w-10 h-10 md:w-12 md:h-12 bg-[#4CAF50] hover:bg-[#45a049] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg shadow-[#4CAF50]/40 animate-bounce"
        aria-label="Gọi điện thoại 1"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">1</span>
        <span className={tooltipClass}>Gọi ngay cho tôi</span>
      </a>

      {/* Phone 2 (Secondary) */}
      <a 
        href="tel:0912881202" 
        className="group relative w-10 h-10 md:w-12 md:h-12 bg-[#1A1613] hover:bg-[#4CAF50] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
        aria-label="Gọi điện thoại 2"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
        <span className="absolute -top-1 -right-1 bg-gray-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">2</span>
        <span className={tooltipClass}>Gọi ngay cho tôi</span>
      </a>
      
      {/* Zalo */}
      <a 
        href="https://zalo.me/0919012636" 
        target="_blank" 
        rel="noreferrer" 
        className="group relative w-10 h-10 md:w-12 md:h-12 bg-[#1A1613] hover:bg-[#0068FF] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[#0068FF]/40"
        aria-label="Chat Zalo"
      >
        <span className="text-white font-bold text-[12px] md:text-[14px] tracking-tight">Zalo</span>
        <span className={tooltipClass}>Chat với chúng tôi qua zalo</span>
      </a>

      {/* Email */}
      <a 
        href="mailto:tuvanxaydung@truongthinh.com" 
        className="group relative w-10 h-10 md:w-12 md:h-12 bg-[#1A1613] hover:bg-[#EA4335] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
        aria-label="Gửi Email"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
        <span className={tooltipClass}>Đăng ký thông tin và để lại tin nhắn</span>
      </a>

      {/* Location */}
      <Link 
        to="/#contact" 
        className="group relative w-10 h-10 md:w-12 md:h-12 bg-[#1A1613] hover:bg-[#EA4335] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
        aria-label="Bản đồ"
      >
        <MapPin className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
        <span className={tooltipClass}>Chỉ đường đến công ty</span>
      </Link>

      {/* WhatsApp */}
      <a 
        href="https://wa.me/84919012636" 
        target="_blank" 
        rel="noreferrer" 
        className="group relative w-10 h-10 md:w-12 md:h-12 bg-[#1A1613] hover:bg-[#25D366] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
        aria-label="Chat WhatsApp"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className={tooltipClass}>Chat với chúng tôi qua WhatsApp</span>
      </a>

      {/* Messenger Widget */}
      <div className="relative">
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="group relative w-10 h-10 md:w-12 md:h-12 bg-[#1A1613] hover:bg-[#0084FF] rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg"
          aria-label="Mở cửa sổ chat Messenger"
        >
          {isChatOpen ? (
            <X className="w-5 h-5 md:w-6 md:h-6" />
          ) : (
            <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.91 1.498 5.5 3.824 7.182v3.313c0 .393.447.618.76.38l3.18-2.39c1.028.288 2.12.446 3.236.446 5.523 0 10-4.145 10-9.259C23 6.145 18.523 2 12 2zm1.08 9.38l-2.61-2.78c-.28-.3-.75-.3-1.03 0l-3.82 4.07c-.36.38.16.94.63.66l2.84-1.66c.26-.15.58-.15.84 0l2.61 2.78c.28.3.75.3 1.03 0l3.82-4.07c.36-.38-.16-.94-.63-.66l-2.84 1.66c-.26.15-.58.15-.84 0z"/>
            </svg>
          )}
          {!isChatOpen && <span className={tooltipClass}>Chat với chúng tôi qua Messenger</span>}
        </button>

        {/* Chat Window Popup */}
        {isChatOpen && (
          <div className="absolute bottom-full right-0 mb-4 w-[280px] md:w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col origin-bottom-right animate-in fade-in zoom-in duration-200 z-50">
            {/* Header */}
            <div className="bg-[#0084FF] p-4 flex items-center gap-3">
              <div className="relative">
                <img src="/logo.png" alt="T&T Quang Binh" className="w-10 h-10 rounded-full bg-white p-1 object-contain" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0084FF] rounded-full"></div>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">T&T Quảng Bình</h4>
                <p className="text-blue-100 text-xs">Thường trả lời ngay lập tức</p>
              </div>
            </div>
            
            {/* Body */}
            <div className="p-4 bg-gray-50 h-48 overflow-y-auto flex flex-col gap-3">
              <div className="text-center text-xs text-gray-400 my-2">Hôm nay</div>
              <div className="flex gap-2">
                <img src="/logo.png" alt="T&T Quang Binh" className="w-6 h-6 rounded-full bg-white p-0.5 object-contain flex-shrink-0" />
                <div className="bg-gray-200 text-gray-800 text-sm p-3 rounded-2xl rounded-tl-none max-w-[85%]">
                  Xin chào! 👋<br/>T&T Quảng Bình có thể giúp gì cho bạn hôm nay?
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-white border-t border-gray-100">
              <a 
                href="https://m.me/nguyen.hung.619922"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#0084FF] hover:bg-[#0073e6] text-white font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors md:hidden"
              >
                <MessageCircle className="w-4 h-4" />
                Bắt đầu chat
              </a>
              <a 
                href="https://www.messenger.com/t/nguyen.hung.619922"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#0084FF] hover:bg-[#0073e6] text-white font-medium py-2.5 px-4 rounded-xl hidden md:flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Bắt đầu chat
              </a>
              <p className="text-center text-[10px] text-gray-400 mt-2">
                Được cung cấp bởi Messenger
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
