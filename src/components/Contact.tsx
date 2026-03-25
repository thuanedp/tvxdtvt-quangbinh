import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const subject = `Yêu cầu tư vấn từ ${formData.name}`;
    const body = `Họ và tên: ${formData.name}
Số điện thoại: ${formData.phone}
Email: ${formData.email}
Dịch vụ quan tâm: ${formData.service}

Nội dung yêu cầu:
${formData.message}`;

    // Simulate API call and open mail client
    setTimeout(() => {
      window.location.href = `mailto:tuvanxaydung@truongthinh.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs mb-4">LIÊN HỆ</h2>
          <h3 className="text-4xl md:text-5xl font-light text-brand-dark mb-6 serif italic">Kết Nối Với <span className="not-italic font-normal">T&T Quảng Bình</span></h3>
          <p className="text-lg text-gray-600 font-light">
            Chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp tối ưu nhất cho dự án của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="bg-brand-paper rounded-3xl p-8 lg:p-12 border border-gray-100 h-full">
              <h4 className="text-3xl font-bold text-brand-dark mb-10 serif">Thông Tin Liên Hệ</h4>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-gold">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark mb-2 uppercase tracking-wider text-sm">Trụ sở chính</h5>
                    <p className="text-gray-600 leading-relaxed font-light">
                      54 đường Nguyễn Hữu Cảnh, Phường Đồng Hới, tỉnh Quảng Trị
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-gold">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark mb-2 uppercase tracking-wider text-sm">Điện thoại</h5>
                    <a href="tel:0912881202" className="text-gray-600 hover:text-brand-gold transition-colors font-light">
                      0912 881 202
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-gold">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark mb-2 uppercase tracking-wider text-sm">Email</h5>
                    <a href="mailto:tuvanxaydung@truongthinh.com" className="text-gray-600 hover:text-brand-gold transition-colors font-light">
                      tuvanxaydung@truongthinh.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-gold">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark mb-2 uppercase tracking-wider text-sm">Giờ làm việc</h5>
                    <p className="text-gray-600 font-light">Thứ 2 - Thứ 7: 07:30 - 17:00</p>
                    <p className="text-gray-600 font-light">Chủ nhật: Nghỉ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-2xl shadow-gray-200/50">
              <h4 className="text-3xl font-bold text-brand-dark mb-10 serif">Gửi Yêu Cầu Tư Vấn</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-brand-dark mb-2 uppercase tracking-widest">Họ và tên *</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all outline-none bg-brand-paper/50"
                      placeholder="Nhập họ tên"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-brand-dark mb-2 uppercase tracking-widest">Số điện thoại *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all outline-none bg-brand-paper/50"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-brand-dark mb-2 uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all outline-none bg-brand-paper/50"
                    placeholder="Nhập địa chỉ email"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-brand-dark mb-2 uppercase tracking-widest">Dịch vụ quan tâm</label>
                  <select 
                    id="service" 
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all outline-none bg-brand-paper/50"
                  >
                    <option value="">Chọn dịch vụ</option>
                    <option value="testing-material">Thí nghiệm vật liệu xây dựng</option>
                    <option value="supervision">Giám sát Thi công</option>
                    <option value="testing">Kiểm định công trình xây dựng</option>
                    <option value="survey">Tư vấn Thiết kế</option>
                    <option value="management">Quản lý Dự án</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-brand-dark mb-2 uppercase tracking-widest">Nội dung yêu cầu *</label>
                  <textarea 
                    id="message" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all outline-none resize-none bg-brand-paper/50"
                    placeholder="Mô tả chi tiết yêu cầu của bạn..."
                  ></textarea>
                </div>

                {isSuccess && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 border border-green-100">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <p className="font-medium">Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ lại với bạn sớm nhất.</p>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-8 py-5 text-base font-bold rounded-full text-brand-dark transition-all shadow-xl ${
                    isSubmitting 
                      ? 'bg-brand-gold/50 cursor-not-allowed shadow-none' 
                      : 'bg-brand-gold hover:bg-brand-gold-dark shadow-brand-gold/20 transform hover:-translate-y-1'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-brand-dark border-t-transparent rounded-full animate-spin mr-2"></div>
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  {isSubmitting ? 'Đang gửi...' : 'Gửi Yêu Cầu'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
