export interface Document {
  id: number;
  title: string;
  date: string;
  category: string;
  fileUrl: string;
  description?: string;
}

export const documents: Document[] = [
  {
    id: 1,
    title: 'TCVN 14134-5:2024 – Đất dùng trong xây dựng đường bộ – Phương pháp thử – Phần 5: Xác định đương lượng cát',
    date: '15/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN-14134_5_2024.pdf',
    description: 'Tiêu chuẩn quốc gia TCVN 14134-5:2024 về Đất dùng trong xây dựng đường bộ - Phương pháp thử - Phần 5: Xác định đương lượng cát.'
  },
  {
    id: 2,
    title: 'TCVN 5575:2024 – Thiết kế kết cấu thép',
    date: '10/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/tcvn-5575-2024-thiet-ke-ket-cau-thep.pdf',
    description: 'Tiêu chuẩn thiết kế kết cấu thép TCVN 5575:2024 sắp được ban hành, đánh dấu một bước chuyển quan trọng so với TCVN 5575:2012 hiện hành. Tiêu chuẩn mới này được xây dựng dựa trên nền tảng tiêu chuẩn SP 16.13330.2017 của Liên bang Nga, đồng thời bổ sung thêm các nội dung từ SP 294.1325800.2017.'
  },
  {
    id: 3,
    title: 'TCVN 9343:2012 kết cấu bê tông và bê tông cốt thép – Hướng dẫn công tác bảo trì',
    date: '05/03/2026',
    category: 'Hướng dẫn',
    fileUrl: '/tai-lieu/TCVN-9343-2012.pdf',
    description: 'Tiêu chuẩn quốc gia TCVN 9343:2012 về Kết cấu bê tông và bê tông cốt thép - Hướng dẫn công tác bảo trì.'
  },
  {
    id: 4,
    title: 'TCVN 13455:2022 – Ống mềm bằng kim loại kết nối đầu phun trong hệ thống sprinkler tự động',
    date: '01/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/1211671197445_8291.pdf',
    description: 'Tiêu chuẩn quốc gia TCVN 13455:2022 về Ống mềm bằng kim loại kết nối đầu phun trong hệ thống sprinkler tự động - Yêu cầu kỹ thuật và phương pháp thử.'
  },
  {
    id: 5,
    title: 'Công bố năng lực Phòng thí nghiệm LAS 164',
    date: '25/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Cong-bo-nang-luc-Phong-thi-nghiem-LAS 164.pdf',
    description: 'Tài liệu công bố năng lực của Phòng thí nghiệm chuyên ngành xây dựng LAS-XD 164.'
  },
  {
    id: 6,
    title: 'Mục lục Hồ sơ công bố',
    date: '25/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Muc-luc-Ho-so-cong-bo.pdf',
    description: 'Mục lục chi tiết các tài liệu trong hồ sơ công bố năng lực.'
  }
];
