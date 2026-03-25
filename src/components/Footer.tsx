import { Building2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-400 pt-24 pb-12 border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/#home" className="flex items-center gap-2 mb-8 w-fit">
              <img src="/logo.png" alt="T&T Quang Binh Logo" className="h-20 w-auto bg-white p-3 rounded-2xl hover:opacity-90 transition-opacity shadow-xl shadow-brand-gold/5" />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-8 font-light italic serif text-lg">
              "Đơn vị hàng đầu trong lĩnh vực thí nghiệm vật liệu xây dựng, giám sát thi công và kiểm định công trình xây dựng."
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-gray-500 hover:text-brand-gold transition-all transform hover:scale-110">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-gold transition-all transform hover:scale-110">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-gold transition-all transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-gold transition-all transform hover:scale-110">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-brand-gold mb-8 uppercase tracking-[0.3em]">LIÊN KẾT</h3>
            <ul className="space-y-5">
              <li><Link to="/#home" className="text-gray-400 hover:text-white transition-colors font-light text-sm uppercase tracking-widest">Trang chủ</Link></li>
              <li><Link to="/#about" className="text-gray-400 hover:text-white transition-colors font-light text-sm uppercase tracking-widest">Về chúng tôi</Link></li>
              <li><Link to="/#services" className="text-gray-400 hover:text-white transition-colors font-light text-sm uppercase tracking-widest">Dịch vụ</Link></li>
              <li><Link to="/#projects" className="text-gray-400 hover:text-white transition-colors font-light text-sm uppercase tracking-widest">Dự án tiêu biểu</Link></li>
              <li><Link to="/#documents" className="text-gray-400 hover:text-white transition-colors font-light text-sm uppercase tracking-widest">Tài liệu</Link></li>
              <li><Link to="/#news" className="text-gray-400 hover:text-white transition-colors font-light text-sm uppercase tracking-widest">Tin tức</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-brand-gold mb-8 uppercase tracking-[0.3em]">DỊCH VỤ</h3>
            <ul className="space-y-5">
              <li><Link to="/services/thi-nghiem-vat-lieu-xay-dung" className="text-gray-400 hover:text-white transition-colors font-light text-sm uppercase tracking-widest">Thí nghiệm vật liệu xây dựng</Link></li>
              <li><Link to="/services/giam-sat-thi-cong" className="text-gray-400 hover:text-white transition-colors font-light text-sm uppercase tracking-widest">Giám sát Thi công</Link></li>
              <li><Link to="/services/kiem-dinh-cong-trinh-xay-dung" className="text-gray-400 hover:text-white transition-colors font-light text-sm uppercase tracking-widest">Kiểm định công trình xây dựng</Link></li>
              <li><Link to="/services/tu-van-thiet-ke" className="text-gray-400 hover:text-white transition-colors font-light text-sm uppercase tracking-widest">Tư vấn Thiết kế</Link></li>
              <li><Link to="/services/quan-ly-du-an" className="text-gray-400 hover:text-white transition-colors font-light text-sm uppercase tracking-widest">Quản lý Dự án</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-brand-gold mb-8 uppercase tracking-[0.3em]">THÔNG TIN</h3>
            <ul className="space-y-6 text-gray-400 font-light">
              <li className="flex items-start">
                <span className="font-bold text-white mr-2 text-xs uppercase tracking-widest">Địa chỉ:</span>
                <span className="text-sm">54 đường Nguyễn Hữu Cảnh, Phường Đồng Hới, tỉnh Quảng Trị</span>
              </li>
              <li className="flex items-center">
                <span className="font-bold text-white mr-2 text-xs uppercase tracking-widest">Điện thoại:</span>
                <a href="tel:0912881202" className="hover:text-brand-gold transition-colors text-sm">0912 881 202</a>
              </li>
              <li className="flex items-center">
                <span className="font-bold text-white mr-2 text-xs uppercase tracking-widest">Email:</span>
                <a href="mailto:tuvanxaydung@truongthinh.com" className="hover:text-brand-gold transition-colors text-sm">tuvanxaydung@truongthinh.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] text-center md:text-left">
            &copy; {new Date().getFullYear()} CÔNG TY CỔ PHẦN TƯ VẤN XÂY DỰNG T&T QUẢNG BÌNH. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-600 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
