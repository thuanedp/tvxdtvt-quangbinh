import { ArrowRight, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 to-brand-charcoal/80 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold tracking-[0.2em] mb-8 border border-brand-gold/30 backdrop-blur-sm uppercase">
            T&T QUANG BINH CONSULTING
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.9] mb-8 tracking-tight serif italic">
            Kiến tạo <span className="text-brand-gold font-normal not-italic">Giá trị</span><br />
            Bền vững
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-light">
            Đơn vị thí nghiệm vật liệu xây dựng, giám sát thi công và kiểm định công trình xây dựng chuyên nghiệp, uy tín hàng đầu tại Quảng Trị và khu vực miền Trung.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-bold rounded-full text-brand-dark bg-brand-gold hover:bg-brand-gold-dark transition-all shadow-xl shadow-brand-gold/20 group transform hover:-translate-y-1"
            >
              Khám phá Dịch vụ
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0919012636"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-[#4CAF50] hover:bg-[#45a049] shadow-lg shadow-[#4CAF50]/30 transition-all group transform hover:-translate-y-1"
              >
                <PhoneCall className="mr-2 h-5 w-5 animate-pulse" />
                0919 012 636
              </a>
              <a
                href="tel:0912881202"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 transition-all group"
              >
                <PhoneCall className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                0912 881 202
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50"
      >
        <span className="text-xs uppercase tracking-widest mb-2">Cuộn xuống</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
