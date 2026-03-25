import { PenTool, HardHat, ClipboardCheck, Ruler, Building, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      icon: <PenTool className="h-8 w-8" />,
      title: 'Thí nghiệm vật liệu xây dựng',
      description: 'Đánh giá chính xác chất lượng nguyên vật liệu thi công và đảm bảo an toàn công trình.',
      href: '/services/thi-nghiem-vat-lieu-xay-dung'
    },
    {
      icon: <HardHat className="h-8 w-8" />,
      title: 'Giám sát Thi công',
      description: 'Đảm bảo chất lượng, tiến độ và an toàn lao động tại công trường theo đúng bản vẽ và tiêu chuẩn.',
      href: '/services/giam-sat-thi-cong'
    },
    {
      icon: <ClipboardCheck className="h-8 w-8" />,
      title: 'Kiểm định công trình xây dựng',
      description: 'Thí nghiệm vật liệu, kiểm định khả năng chịu lực, đánh giá hiện trạng công trình xây dựng.',
      href: '/services/kiem-dinh-cong-trinh-xay-dung'
    },
    {
      icon: <Ruler className="h-8 w-8" />,
      title: 'Tư vấn Thiết kế',
      description: 'Cung cấp giải pháp thiết kế kiến trúc và kết cấu tối ưu, đảm bảo tính thẩm mỹ, an toàn và hiệu quả kinh tế cho công trình.',
      href: '/services/tu-van-thiet-ke'
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: 'Quản lý Dự án',
      description: 'Lập kế hoạch, điều phối các nhà thầu, quản lý chi phí và rủi ro trong suốt vòng đời dự án.',
      href: '/services/quan-ly-du-an'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Lập Dự toán',
      description: 'Tính toán chi phí xây dựng, lập hồ sơ mời thầu, đánh giá hồ sơ dự thầu chuyên nghiệp.',
      href: '/services/lap-du-toan'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs mb-4">DỊCH VỤ CỦA CHÚNG TÔI</h2>
          <h3 className="text-4xl md:text-5xl font-light text-brand-dark mb-6 serif italic">Giải Pháp Xây Dựng <span className="not-italic font-normal">Toàn Diện</span></h3>
          <p className="text-lg text-gray-600 font-light">
            T&T cung cấp chuỗi dịch vụ khép kín từ khâu khảo sát, thiết kế đến giám sát và kiểm định, mang lại sự an tâm tuyệt đối cho chủ đầu tư.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.15 }}
              className="h-full"
            >
              <Link 
                to={service.href}
                className="group block h-full bg-brand-paper border border-gray-100 rounded-2xl p-10 hover:bg-brand-dark transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-gold transition-all duration-500">
                  <div className="text-brand-gold group-hover:text-white transition-colors duration-500">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-white transition-colors serif">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-400 transition-colors font-light">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-brand-gold font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  Xem chi tiết <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
