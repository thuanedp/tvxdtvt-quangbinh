import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Info, Image as ImageIcon, Video, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data for services
const serviceData: Record<string, any> = {
  'thi-nghiem-vat-lieu-xay-dung': {
    title: 'Thí nghiệm vật liệu xây dựng',
    description: 'Thí nghiệm vật liệu xây dựng đóng vai trò rất quan trọng trong toàn bộ quá trình xây dựng thi công công trình – Công tác thí nghiệm sẽ giúp Chủ Đầu Tư đánh giá chính xác được chất lượng các nguyên vật liệu đang thi công trên công trình và đảm bảo chất lượng từng vật liệu, thiết bị mà nhà thầu sử dụng trên công trường có đúng theo cam kết hay không.',
    info: (
      <>
        <p>Ngoài ra, công tác thí nghiệm vật liệu xây dựng công trình còn có vai trò quan trọng trong việc đảm bảo chất lượng an toàn của công trình đang trong quá trình sử dụng thông qua công tác đánh giá kiểm định chất lượng công trình.</p>
        <h4 className="font-bold text-brand-dark mt-6 mb-2">Mục tiêu của công tác thí nghiệm vật liệu xây dựng</h4>
        <p>– Thí nghiệm vật liệu xây dựng để kiểm tra, đánh giá các chỉ tiêu theo quy chuẩn, quy định hiện hành nhằm đảm bảo chất lượng để đưa vào xây dựng công trình, làm cơ sở đánh giá nghiệm thu công việc và nghiệm thu đưa vào sử dụng.</p>
        <h4 className="font-bold text-brand-dark mt-6 mb-2">Thí nghiệm vật liệu xây dựng để thay đổi công năng sử dụng</h4>
        <p>Thực tế, công trình qua sử dụng đôi khi cần thay đổi công năng để phù hợp với nhu cầu sử dụng hiện tại như: Chuyển từ văn phòng thành xưởng, nhà ở thành văn phòng, nhà ở – văn phòng thành nhà hàng – khách sạn, nâng tầng. Khi đó, ICCI sẽ thực hiện thí nghiệm và kiểm định chất lượng công trình để trả lời cho Khách hàng câu hỏi:</p>
        <p>Nếu không đảm bảo cần có phương án gia cố để kết cấu đảm bảo khả năng an toàn chịu lực.</p>
        <h4 className="font-bold text-brand-dark mt-6 mb-2">Thí nghiệm vật liệu xây dựng để biết nguyên nhân sự cố công trình</h4>
        <p>Một số công trình bị sự cố như nứt, nghiêng, lún khi đang xây dựng hoặc khi đang sử dụng. Khi đó CÔNG TY CỔ PHẦN TƯ VẤN XÂY DỰNG T&T QUẢNG BÌNH sẽ thực hiện để trà lời cho Khách hàng câu hỏi:</p>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>Vì sao công trình xảy ra sự cố?</li>
          <li>Phương án khắc phục sự cố?</li>
        </ul>
        <p><strong>Thí nghiệm để giải quyết tranh chấp:</strong> Khi có sự tranh chấp giữa Chủ đầu tư và Nhà thầu về chất lượng thi công. Chúng tôi sẽ kiểm định chất lượng công trình để trả lời cho Khách hàng câu hỏi Nhà thầu đã làm đúng với hợp đồng và tiêu chuẩn hay chưa?</p>
        <p className="mt-4">CÔNG TY CỔ PHẦN TƯ VẤN XÂY DỰNG T&T QUẢNG BÌNH đã đăng ký ngành nghề hoạt động xây dựng được Sở Tài Chính tỉnh Quảng Trị cấp giấy chứng nhận đăng ký kinh doanh số 3100494206 cấp ngày 11 tháng 12 năm 2009</p>
        <p className="mt-4">Đến nay, tự hào là công ty thí nghiệm và kiểm định xây dựng uy tín với kinh nghiệm hơn 17 năm, CÔNG TY CỔ PHẦN TƯ VẤN XÂY DỰNG T&T QUẢNG BÌNH luôn bảo vệ quyền lợi của khách hàng ngay cả sau khi chúng tôi hoàn thành dự án. Sự an tâm, tín nhiệm của khách hàng chính là động lực để chúng tôi phát triển, hoàn thiện để đáp ứng được yêu cầu công việc.</p>
      </>
    ),
    images: Array.from({ length: 62 }, (_, i) => `/images/thi-nghiem-vat-lieu-xay-dung/${i + 1}.jpg`),
    videos: [
      '/videos/1.mp4',
      '/videos/2.mp4',
      '/videos/3.mp4',
      '/videos/4.mp4',
      '/videos/5.mp4'
    ]
  },
  'giam-sat-thi-cong': {
    title: 'Giám sát Thi công',
    description: 'Đảm bảo chất lượng, tiến độ và an toàn lao động tại công trường theo đúng bản vẽ và tiêu chuẩn.',
    info: 'Dịch vụ giám sát thi công của T&T giúp chủ đầu tư kiểm soát chặt chẽ mọi hoạt động trên công trường. Chúng tôi cam kết công trình được thi công đúng thiết kế, đạt tiêu chuẩn chất lượng, đảm bảo tiến độ và an toàn lao động tuyệt đối.',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80'
    ],
    videos: []
  },
  'kiem-dinh-cong-trinh-xay-dung': {
    title: 'Kiểm định công trình xây dựng',
    description: 'Thí nghiệm vật liệu, kiểm định khả năng chịu lực, đánh giá hiện trạng công trình xây dựng.',
    info: 'Chúng tôi cung cấp dịch vụ kiểm định chất lượng công trình độc lập, khách quan và chính xác. Từ việc thí nghiệm vật liệu đầu vào đến đánh giá khả năng chịu lực của kết cấu hiện hữu, T&T mang đến sự an tâm về độ bền vững của công trình.',
    images: [
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80'
    ],
    videos: []
  },
  'tu-van-thiet-ke': {
    title: 'Tư vấn Thiết kế',
    description: 'Cung cấp giải pháp thiết kế kiến trúc và kết cấu tối ưu, đảm bảo tính thẩm mỹ, an toàn và hiệu quả kinh tế cho công trình.',
    info: 'T&T cung cấp dịch vụ tư vấn thiết kế chuyên nghiệp, từ khâu lên ý tưởng kiến trúc đến thiết kế kết cấu chi tiết. Chúng tôi cam kết mang đến những giải pháp thiết kế tối ưu, đáp ứng các tiêu chuẩn kỹ thuật khắt khe nhất, đồng thời đảm bảo tính thẩm mỹ và hiệu quả kinh tế cho từng dự án.',
    images: [
      'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80'
    ],
    videos: []
  },
  'quan-ly-du-an': {
    title: 'Quản lý Dự án',
    description: 'Lập kế hoạch, điều phối các nhà thầu, quản lý chi phí và rủi ro trong suốt vòng đời dự án.',
    info: 'T&T đóng vai trò là đại diện chủ đầu tư, quản lý toàn diện dự án từ giai đoạn chuẩn bị đến khi bàn giao đưa vào sử dụng. Chúng tôi tối ưu hóa nguồn lực, kiểm soát chi phí và giảm thiểu rủi ro cho dự án.',
    images: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80'
    ],
    videos: []
  },
  'lap-du-toan': {
    title: 'Lập Dự toán',
    description: 'Tính toán chi phí xây dựng, lập hồ sơ mời thầu, đánh giá hồ sơ dự thầu chuyên nghiệp.',
    info: 'Dịch vụ lập dự toán của T&T giúp chủ đầu tư dự trúng chính xác chi phí xây dựng, tránh phát sinh ngoài ý muốn. Chúng tôi cung cấp bảng dự toán chi tiết, minh bạch và cập nhật theo đơn giá mới nhất của thị trường.',
    images: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80'
    ],
    videos: []
  }
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'info' | 'images' | 'videos'>('info');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const [imagePage, setImagePage] = useState(1);
  const [videoPage, setVideoPage] = useState(1);
  const imagesPerPage = 12;
  const videosPerPage = 4;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    setImagePage(1);
    setVideoPage(1);
    setActiveTab('info');
  }, [id]);

  const service = id ? serviceData[id] : null;

  const totalImagePages = service?.images ? Math.ceil(service.images.length / imagesPerPage) : 0;
  const currentImages = service?.images ? service.images.slice((imagePage - 1) * imagesPerPage, imagePage * imagesPerPage) : [];

  const totalVideoPages = service?.videos ? Math.ceil(service.videos.length / videosPerPage) : 0;
  const currentVideos = service?.videos ? service.videos.slice((videoPage - 1) * videosPerPage, videoPage * videosPerPage) : [];

  const handleImagePageChange = (page: number) => {
    setImagePage(page);
    document.getElementById('tab-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleVideoPageChange = (page: number) => {
    setVideoPage(page);
    document.getElementById('tab-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (!service) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-brand-dark mb-4">Không tìm thấy dịch vụ</h1>
        <p className="text-gray-600 mb-8">Dịch vụ bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
        <Link to="/#services" className="inline-flex items-center text-brand-gold hover:text-brand-gold-dark font-semibold">
          <ArrowLeft className="mr-2 h-5 w-5" /> Về danh mục dịch vụ
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-brand-paper">
      {/* Header */}
      <div className="bg-brand-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/#services" className="inline-flex items-center text-brand-gold hover:text-white transition-colors mb-8 text-sm font-semibold uppercase tracking-wider">
            <ArrowLeft className="mr-2 h-4 w-4" /> Quay lại
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 serif">{service.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl font-light">{service.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="flex sm:border-b border-gray-100 overflow-x-auto hide-scrollbar bg-gray-50/80 sm:bg-transparent p-2 sm:p-0 gap-2 sm:gap-0 rounded-t-2xl sm:rounded-none">
            <button
              onClick={() => setActiveTab('info')}
              className={`flex-1 sm:flex-none flex flex-col sm:flex-row items-center justify-center min-w-[90px] px-2 sm:px-6 py-3 sm:py-4 text-[11px] sm:text-sm font-semibold uppercase tracking-wider transition-all rounded-xl sm:rounded-none ${
                activeTab === 'info' 
                  ? 'text-brand-gold bg-white sm:bg-brand-gold/5 shadow-sm sm:shadow-none sm:border-b-2 sm:border-brand-gold' 
                  : 'text-gray-500 hover:text-brand-dark hover:bg-gray-100 sm:hover:bg-gray-50'
              }`}
            >
              <Info className="mb-1.5 sm:mb-0 sm:mr-2 h-5 w-5" /> 
              <span className="text-center leading-tight">Thông tin</span>
            </button>
            <button
              onClick={() => setActiveTab('images')}
              className={`flex-1 sm:flex-none flex flex-col sm:flex-row items-center justify-center min-w-[90px] px-2 sm:px-6 py-3 sm:py-4 text-[11px] sm:text-sm font-semibold uppercase tracking-wider transition-all rounded-xl sm:rounded-none ${
                activeTab === 'images' 
                  ? 'text-brand-gold bg-white sm:bg-brand-gold/5 shadow-sm sm:shadow-none sm:border-b-2 sm:border-brand-gold' 
                  : 'text-gray-500 hover:text-brand-dark hover:bg-gray-100 sm:hover:bg-gray-50'
              }`}
            >
              <ImageIcon className="mb-1.5 sm:mb-0 sm:mr-2 h-5 w-5" /> 
              <span className="text-center leading-tight">Hình ảnh<span className="hidden sm:inline"> thực tế</span></span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex-1 sm:flex-none flex flex-col sm:flex-row items-center justify-center min-w-[90px] px-2 sm:px-6 py-3 sm:py-4 text-[11px] sm:text-sm font-semibold uppercase tracking-wider transition-all rounded-xl sm:rounded-none ${
                activeTab === 'videos' 
                  ? 'text-brand-gold bg-white sm:bg-brand-gold/5 shadow-sm sm:shadow-none sm:border-b-2 sm:border-brand-gold' 
                  : 'text-gray-500 hover:text-brand-dark hover:bg-gray-100 sm:hover:bg-gray-50'
              }`}
            >
              <Video className="mb-1.5 sm:mb-0 sm:mr-2 h-5 w-5" /> 
              <span className="text-center leading-tight">Video<span className="hidden sm:inline"> công trình</span></span>
            </button>
          </div>

          {/* Tab Content */}
          <div id="tab-content" className="p-5 sm:p-8 md:p-12 min-h-[400px] scroll-mt-24">
            {/* Info Tab */}
            {activeTab === 'info' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-4 sm:mb-6 serif">Chi tiết dịch vụ</h3>
                <div className="prose prose-base sm:prose-lg max-w-none text-gray-600 font-light leading-relaxed">
                  {typeof service.info === 'string' ? <p>{service.info}</p> : service.info}
                  <p className="mt-4">
                    Với phương châm "Chất lượng tạo niềm tin", T&T luôn nỗ lực không ngừng để mang đến những giá trị tốt nhất cho khách hàng. Mọi quy trình đều được kiểm soát nghiêm ngặt bởi đội ngũ chuyên gia hàng đầu.
                  </p>
                </div>
              </div>
            )}

            {/* Images Tab */}
            {activeTab === 'images' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-4 sm:mb-6 serif">Hình ảnh từ công trình thực tế</h3>
                {service.images && service.images.length > 0 ? (
                  <>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                      {currentImages.map((img: string, idx: number) => {
                        const absoluteIndex = (imagePage - 1) * imagesPerPage + idx;
                        return (
                          <div 
                            key={absoluteIndex} 
                            className="group relative aspect-square sm:aspect-video rounded-xl overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-md transition-all"
                            onClick={() => setSelectedImageIndex(absoluteIndex)}
                          >
                            <img 
                              src={img} 
                              alt={`${service.title} - Hình ${absoluteIndex + 1}`} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              referrerPolicy="no-referrer"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                              <span className="text-white font-medium text-xs sm:text-sm">Hình {absoluteIndex + 1}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Image Pagination */}
                    {totalImagePages > 1 && (
                      <div className="mt-10 flex justify-center items-center space-x-2">
                        <button
                          onClick={() => handleImagePageChange(imagePage - 1)}
                          disabled={imagePage === 1}
                          className={`p-2 rounded-full flex items-center justify-center transition-colors ${
                            imagePage === 1 
                              ? 'text-gray-400 cursor-not-allowed' 
                              : 'text-gray-600 hover:text-brand-gold hover:bg-brand-gold/10'
                          }`}
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        
                        <div className="flex space-x-1 flex-wrap justify-center">
                          {Array.from({ length: totalImagePages }, (_, i) => i + 1).map((page) => (
                            <button
                              key={page}
                              onClick={() => handleImagePageChange(page)}
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                                imagePage === page
                                  ? 'bg-brand-gold text-white shadow-sm'
                                  : 'text-gray-600 hover:text-brand-gold hover:bg-brand-gold/10'
                              }`}
                            >
                              {page}
                            </button>
                          ))}
                        </div>

                        <button
                          onClick={() => handleImagePageChange(imagePage + 1)}
                          disabled={imagePage === totalImagePages}
                          className={`p-2 rounded-full flex items-center justify-center transition-colors ${
                            imagePage === totalImagePages 
                              ? 'text-gray-400 cursor-not-allowed' 
                              : 'text-gray-600 hover:text-brand-gold hover:bg-brand-gold/10'
                          }`}
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                    <ImageIcon className="mx-auto h-12 w-12 text-gray-300 mb-3" />
                    <p className="text-gray-500">Hình ảnh đang được cập nhật...</p>
                  </div>
                )}
              </div>
            )}

            {/* Videos Tab */}
            {activeTab === 'videos' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-4 sm:mb-6 serif">Video tiến độ & nghiệm thu</h3>
                {service.videos && service.videos.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                      {currentVideos.map((vid: string, idx: number) => {
                        const absoluteIndex = (videoPage - 1) * videosPerPage + idx;
                        return (
                          <div key={absoluteIndex} className="rounded-xl overflow-hidden bg-black shadow-lg">
                            <video 
                              controls 
                              className="w-full aspect-video"
                              poster="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80"
                            >
                              <source src={vid} type="video/mp4" />
                              Trình duyệt của bạn không hỗ trợ thẻ video.
                            </video>
                            <div className="p-4 bg-white border border-t-0 border-gray-100 rounded-b-xl">
                              <h4 className="font-semibold text-brand-dark">Video công trình {absoluteIndex + 1}</h4>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Video Pagination */}
                    {totalVideoPages > 1 && (
                      <div className="mt-10 flex justify-center items-center space-x-2">
                        <button
                          onClick={() => handleVideoPageChange(videoPage - 1)}
                          disabled={videoPage === 1}
                          className={`p-2 rounded-full flex items-center justify-center transition-colors ${
                            videoPage === 1 
                              ? 'text-gray-400 cursor-not-allowed' 
                              : 'text-gray-600 hover:text-brand-gold hover:bg-brand-gold/10'
                          }`}
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        
                        <div className="flex space-x-1 flex-wrap justify-center">
                          {Array.from({ length: totalVideoPages }, (_, i) => i + 1).map((page) => (
                            <button
                              key={page}
                              onClick={() => handleVideoPageChange(page)}
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                                videoPage === page
                                  ? 'bg-brand-gold text-white shadow-sm'
                                  : 'text-gray-600 hover:text-brand-gold hover:bg-brand-gold/10'
                              }`}
                            >
                              {page}
                            </button>
                          ))}
                        </div>

                        <button
                          onClick={() => handleVideoPageChange(videoPage + 1)}
                          disabled={videoPage === totalVideoPages}
                          className={`p-2 rounded-full flex items-center justify-center transition-colors ${
                            videoPage === totalVideoPages 
                              ? 'text-gray-400 cursor-not-allowed' 
                              : 'text-gray-600 hover:text-brand-gold hover:bg-brand-gold/10'
                          }`}
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                    <Video className="mx-auto h-12 w-12 text-gray-300 mb-3" />
                    <p className="text-gray-500">Video đang được cập nhật...</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && service.images && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-10"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          {service.images.length > 1 && (
            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => prev === 0 ? service.images.length - 1 : prev! - 1);
              }}
            >
              <ChevronLeft className="w-10 h-10 md:w-12 md:h-12" />
            </button>
          )}

          <img 
            src={service.images[selectedImageIndex]} 
            alt={`Full size ${selectedImageIndex + 1}`} 
            className="max-w-[95vw] max-h-[90vh] object-contain animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />

          {service.images.length > 1 && (
            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) => prev === service.images.length - 1 ? 0 : prev! + 1);
              }}
            >
              <ChevronRight className="w-10 h-10 md:w-12 md:h-12" />
            </button>
          )}
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-widest">
            {selectedImageIndex + 1} / {service.images.length}
          </div>
        </div>
      )}
    </div>
  );
}
