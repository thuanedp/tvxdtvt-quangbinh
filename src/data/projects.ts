export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  content?: string;
  gallery?: string[];
  video?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Đường Hồ Chí Minh đoạn La Sơn - Túy Loan',
    category: 'Đường Cao Tốc',
    image: '/images/thi-nghiem-vat-lieu-xay-dung/du-an-duong-ho-chi-minh-la-son-tuy-loan.png',
    description: 'Dự án xây dựng đường Hồ Chí Minh đoạn La Sơn - Túy Loan.',
    content: 'Dự án xây dựng đường Hồ Chí Minh đoạn La Sơn - Túy Loan là một trong những dự án trọng điểm quốc gia, góp phần hoàn thiện mạng lưới giao thông khu vực miền Trung.',
    gallery: [
      '/images/thi-nghiem-vat-lieu-xay-dung/du-an-duong-ho-chi-minh-la-son-tuy-loan.png'
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: 'Cao tốc Cam Lộ - La Sơn (Gói XL4)',
    category: 'Đường Cao Tốc',
    image: '/images/thi-nghiem-vat-lieu-xay-dung/cao-toc-cam-lo.jpg',
    description: 'Xây lắp và khảo sát, thiết kế BVTC đoạn Km37+300 – Km46+200 (bao gồm các cầu: Nhi, Khe Mạ) thuộc dự án cao tốc Bắc – Nam phía Đông giai đoạn 2017-2020.',
    content: 'Gói thầu XL4 thuộc dự án thành phần đầu tư xây dựng đoạn Cam Lộ - La Sơn thuộc Dự án xây dựng một số đoạn đường bộ cao tốc trên tuyến Bắc - Nam phía Đông giai đoạn 2017 - 2020.',
    gallery: [
      '/images/thi-nghiem-vat-lieu-xay-dung/cao-toc-cam-lo.jpg'
    ]
  },
  {
    id: 3,
    title: 'Cao tốc Bắc Nam (Gói 13-XL)',
    category: 'Đường Cao Tốc',
    image: '/images/thi-nghiem-vat-lieu-xay-dung/cao-toc-bac-nam-ql45-mai-son.jpg',
    description: 'Xây lắp và khảo sát, thiết kế BVTC đoạn Km307 + 600 – Km318 + 00 thuộc Dự án xây dựng một số đoạn đường bộ cao tốc trên tuyến Bắc Nam phía đông giai đoạn 2017 – 2020.',
    content: 'Gói thầu 13-XL thi công xây dựng đoạn Km307+600 - Km318+000 thuộc dự án thành phần đầu tư xây dựng đoạn Mai Sơn - Quốc lộ 45.',
    gallery: [
      '/images/thi-nghiem-vat-lieu-xay-dung/cao-toc-bac-nam-ql45-mai-son.jpg'
    ]
  },
  {
    id: 4,
    title: 'Cao tốc Vạn Ninh - Cam Lộ (Gói XL1)',
    category: 'Đường Cao Tốc',
    image: '/images/thi-nghiem-vat-lieu-xay-dung/cao-toc-van-ninh-cam-lo-xl1.jpg',
    description: 'Thi công xây dựng đoạn Km675+400 - Km708+350 (bao gồm khảo sát, thiết kế bản vẽ thi công) thuộc Dự án cao tốc Bắc - Nam phía Đông giai đoạn 2021 – 2025.',
    content: 'Dự án thành phần đoạn Vạn Ninh - Cam Lộ thuộc Dự án xây dựng công trình đường bộ cao tốc Bắc - Nam phía Đông giai đoạn 2021 - 2025.',
    gallery: [
      '/images/thi-nghiem-vat-lieu-xay-dung/cao-toc-van-ninh-cam-lo-xl1.jpg'
    ]
  },
  {
    id: 5,
    title: 'Cao tốc Vạn Ninh - Cam Lộ (Gói XL2)',
    category: 'Đường Cao Tốc',
    image: '/images/thi-nghiem-vat-lieu-xay-dung/cao-toc-van-ninh-cam-lo-xl2.jpg',
    description: 'Thi công xây dựng đoạn Km708 + 350 - Km740 + 884,83 (bao gồm khảo sát, thiết kế bản vẽ thi công) thuộc Dự án cao tốc Bắc - Nam phía Đông giai đoạn 2021 – 2025.',
    content: 'Gói thầu XL2 thi công xây dựng đoạn Km708+350 - Km740+884,83 thuộc dự án thành phần đoạn Vạn Ninh - Cam Lộ.',
    gallery: [
      '/images/thi-nghiem-vat-lieu-xay-dung/cao-toc-van-ninh-cam-lo-xl2.jpg'
    ]
  },
  {
    id: 6,
    title: 'Đường giao thông Gio Linh - Cam Lộ',
    category: 'Đường Giao Thông',
    image: '/images/thi-nghiem-vat-lieu-xay-dung/duong-giao-thong-gio-linh-cam-lo.jpg',
    description: 'Gói thầu QT01: Xây dựng đường giao thông liên huyện Gio Linh - Cam Lộ. Dự án: Hạ tầng cơ bản cho phát triển toàn diện tỉnh Quảng Trị.',
    content: 'Dự án nhằm cải thiện hạ tầng giao thông, kết nối các vùng kinh tế trọng điểm của tỉnh Quảng Trị.',
    gallery: [
      '/images/thi-nghiem-vat-lieu-xay-dung/duong-giao-thong-gio-linh-cam-lo.jpg'
    ]
  },
  {
    id: 7,
    title: 'Đường nối trung tâm TP đi sân bay Đồng Hới',
    category: 'Đường Giao Thông',
    image: '/images/thi-nghiem-vat-lieu-xay-dung/tp-di-san-bay-dong-hoi.png',
    description: 'Xây lắp hệ thống đường giao thông (Bao gồm chi phí xây dựng + đảm bảo ATGT + di dời ống cáp, nước + dự phòng).',
    content: 'Dự án đường nối trung tâm thành phố Đồng Hới đi sân bay Đồng Hới nhằm giảm tải giao thông và tạo điều kiện thuận lợi cho việc di chuyển.',
    gallery: [
      '/images/thi-nghiem-vat-lieu-xay-dung/tp-di-san-bay-dong-hoi.png'
    ]
  },
  {
    id: 8,
    title: 'Tuyến đường du lịch Nam Quảng Bình (Gói QB01.2)',
    category: 'Đường Du Lịch',
    image: '/images/thi-nghiem-vat-lieu-xay-dung/dương-du-lich-nam-quang-binh-2.jpg',
    description: 'Cải thiện và nâng cấp Tuyến đường du lịch kết nối TP Đồng Hới với vùng Nam tỉnh Quảng Bình (Tuyến BOT - Ngư Thuỷ Bắc, tuyến An Sơn).',
    content: 'Dự án góp phần phát triển du lịch khu vực phía Nam tỉnh Quảng Bình, kết nối các điểm du lịch hấp dẫn.',
    gallery: [
      '/images/thi-nghiem-vat-lieu-xay-dung/dương-du-lich-nam-quang-binh-2.jpg'
    ]
  },
  {
    id: 9,
    title: 'Tuyến đường du lịch Nam Quảng Bình (Gói QB01.1)',
    category: 'Đường Du Lịch',
    image: '/images/thi-nghiem-vat-lieu-xay-dung/dương-du-lich-nam-quang-binh-1.jpg',
    description: 'Cải thiện nâng cấp tuyến đường du lịch kết nối thành phố Đồng Hới với vùng Nam tỉnh Quảng Bình (tuyến Bảo Ninh - Hải Ninh; điện chiếu sáng tuyến An Sơn).',
    content: 'Nâng cấp cơ sở hạ tầng giao thông phục vụ du lịch, tạo động lực phát triển kinh tế - xã hội địa phương.',
    gallery: [
      '/images/thi-nghiem-vat-lieu-xay-dung/dương-du-lich-nam-quang-binh-1.jpg'
    ]
  },
  {
    id: 10,
    title: 'Đường ven biển Quảng Bình (Gói XL-06)',
    category: 'Đường Ven Biển',
    image: '/images/thi-nghiem-vat-lieu-xay-dung/duong-ven-bien.png',
    description: 'Xây lắp đoạn từ Km27+123 - Km48+536 đoạn Hà Trung - Mạch Nước. Dự án thành phần 1 - Đường ven biển và cầu Nhật Lệ 3.',
    content: 'Dự án đường ven biển Quảng Bình là công trình trọng điểm, có ý nghĩa quan trọng trong việc phát triển kinh tế biển và du lịch.',
    gallery: [
      '/images/thi-nghiem-vat-lieu-xay-dung/duong-ven-bien.png'
    ]
  },
  {
    id: 11,
    title: 'Tuyến đường Phú Hải - Lương Ninh',
    category: 'Đường Giao Thông',
    image: '/images/thi-nghiem-vat-lieu-xay-dung/phu-hai-lhuong-ninh.webp',
    description: 'Xây dựng tuyến đường Phú Hải - Lương Ninh (Bao gồm: Chi phí xây dựng + Chi phí dự phòng + Chi phí đảm bảo an toàn giao thông).',
    content: 'Tuyến đường Phú Hải - Lương Ninh góp phần hoàn thiện mạng lưới giao thông khu vực, kết nối các khu dân cư và khu công nghiệp.',
    gallery: [
      '/images/thi-nghiem-vat-lieu-xay-dung/phu-hai-lhuong-ninh.webp'
    ]
  },
  {
    id: 12,
    title: 'Mở rộng cao tốc Cam Lộ - La Sơn (Gói XL2)',
    category: 'Đường Cao Tốc',
    image: '/images/thi-nghiem-vat-lieu-xay-dung/mo-rong-cao-toc.png',
    description: 'Thi công xây dựng đoạn Km37 + 300 - Km102 + 200 (bao gồm khảo sát, thiết kế bản vẽ thi công). Dự án đầu tư xây dựng mở rộng đường bộ cao tốc Bắc - Nam.',
    content: 'Dự án mở rộng cao tốc Cam Lộ - La Sơn nhằm đáp ứng nhu cầu vận tải ngày càng tăng, nâng cao năng lực thông hành và đảm bảo an toàn giao thông.',
    gallery: [
      '/images/thi-nghiem-vat-lieu-xay-dung/mo-rong-cao-toc.png'
    ]
  }
];
