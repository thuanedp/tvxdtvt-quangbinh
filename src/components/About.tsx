import { CheckCircle2, Users, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Users className="h-6 w-6 text-brand-gold" />,
      title: 'Đội ngũ chuyên gia',
      description: 'Kỹ sư, kiến trúc sư giàu kinh nghiệm, am hiểu sâu sắc về chuyên môn.'
    },
    {
      icon: <Target className="h-6 w-6 text-brand-gold" />,
      title: 'Mục tiêu chất lượng',
      description: 'Cam kết mang đến những công trình an toàn, bền vững và thẩm mỹ cao.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand-gold" />,
      title: 'Uy tín hàng đầu',
      description: 'Được hàng trăm đối tác và khách hàng tin tưởng lựa chọn trong nhiều năm qua.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-gold rounded-3xl transform translate-x-6 translate-y-6 -z-10 opacity-10"></div>
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Đội ngũ kỹ sư T&T"
              className="rounded-3xl shadow-2xl w-full object-cover h-[600px]"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-brand-dark p-8 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-6">
              <div className="bg-brand-gold p-4 rounded-xl">
                <span className="text-4xl font-bold text-brand-dark">15+</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em] mb-1">Năm kinh nghiệm</p>
                <p className="text-xl font-bold text-white serif italic">Trong ngành xây dựng</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="mb-10">
              <h2 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs mb-4">VỀ CHÚNG TÔI</h2>
              <h3 className="text-4xl md:text-5xl font-light text-brand-dark leading-tight mb-8 serif italic">
                CÔNG TY CỔ PHẦN TƯ VẤN XÂY DỰNG <span className="not-italic font-normal">T&T QUẢNG BÌNH</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Tọa lạc tại trung tâm thành phố Đồng Hới, Quảng Trị, <span className="font-bold text-brand-dark">T&T Quảng Bình</span> tự hào là đơn vị tiên phong trong lĩnh vực thí nghiệm vật liệu xây dựng, giám sát thi công và kiểm định công trình xây dựng.
              </p>
              <p className="mt-6 text-gray-600 leading-relaxed font-light">
                Với phương châm "Chất lượng tạo nên Thương hiệu", chúng tôi không ngừng nỗ lực áp dụng các công nghệ tiên tiến nhất, tuân thủ nghiêm ngặt các tiêu chuẩn kỹ thuật (TCVN) để đảm bảo mỗi dự án đều đạt được sự hoàn hảo tuyệt đối.
              </p>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 mt-1 bg-white p-3 rounded-xl shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-2 serif">{feature.title}</h4>
                    <p className="text-gray-600 font-light">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a href="#contact" className="inline-flex items-center text-brand-gold font-bold hover:text-brand-gold-dark transition-all group uppercase tracking-widest text-sm">
                Liên hệ hợp tác ngay
                <CheckCircle2 className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
