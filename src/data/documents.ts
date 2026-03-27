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
    title: '1. Công bố năng lực Phòng thí nghiệm LAS 164',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Cong-bo-nang-luc-Phong-thi-nghiem-LAS-164.pdf',
    description: 'Công bố năng lực Phòng thí nghiệm LAS 164'
  },
  {
    id: 2,
    title: '2.1 TVXD Giấy đăng ký kinh doanh Lần 6',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/TVXD-Giay-dang-ky-kinh-doanh-Lan-6.pdf',
    description: 'TVXD Giấy đăng ký kinh doanh Lần 6'
  },
  {
    id: 3,
    title: '2.2 Giấy chứng nhận hoạt động thí nghiệm',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Giay-chung-nhan-hoat-dong-thi-nghiem.pdf',
    description: 'Giấy chứng nhận hoạt động thí nghiệm'
  },
  {
    id: 4,
    title: '3.1 Quyết định thành lập Phòng TT',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Quyet-dinh-thanh-lap-Phong-TT.pdf',
    description: 'Quyết định thành lập Phòng TT'
  },
  {
    id: 5,
    title: '3.2 Quyết định thành lập Trạm TNHT số 1',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Quyet-dinh-thanh-lap-Tram-TNHT-so-1.pdf',
    description: 'Quyết định thành lập Trạm TNHT số 1'
  },
  {
    id: 6,
    title: '3.3 Quyết định thành lập Trạm TNHT số 2',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Quyet-dinh-thanh-lap-Tram-TNHT-so-2.pdf',
    description: 'Quyết định thành lập Trạm TNHT số 2'
  },
  {
    id: 7,
    title: '4. Quyết định TP và PP',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Quyet-dinh-TP-va-PP.pdf',
    description: 'Quyết định TP và PP'
  },
  {
    id: 8,
    title: '5.1 Danh sách nhân sự và Phân công công việc từng cá nhân',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Danh-sach-nhan-su-va-Phan-cong-cong-viec-tung-ca-nhan.pdf',
    description: 'Danh sách nhân sự và Phân công công việc từng cá nhân'
  },
  {
    id: 9,
    title: '5.2 Văn bằng, chứng chỉ TNV',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Van-bang-chung-chi-TNV.pdf',
    description: 'Văn bằng, chứng chỉ TNV'
  },
  {
    id: 10,
    title: '6.1 Chính sách chất lượng',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Chinh-sach-chat-luong.pdf',
    description: 'Chính sách chất lượng'
  },
  {
    id: 11,
    title: '6.2 Danh mục các tài liệu và tiêu chuẩn đã được duyệt',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Danh-muc-cac-tai-lieu-va-tieu-chuan-da-duoc-duyet.pdf',
    description: 'Danh mục các tài liệu và tiêu chuẩn đã được duyệt'
  },
  {
    id: 12,
    title: '6.3 Quyết định áp dụng IOS 17025',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Quyet-dinh-ap-dung-IOS-17025.pdf',
    description: 'Quyết định áp dụng IOS 17025'
  },
  {
    id: 13,
    title: '6.4 Quyết định ban hành và áp dung ISO 17025',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Quyet-dinh-ban-hanh-va-ap-dung-ISO-17025.pdf',
    description: 'Quyết định ban hành và áp dung ISO 17025'
  },
  {
    id: 14,
    title: '6.5 Quyết định thành lập Ban ISO 17025',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Quyet-dinh-thanh-lap-Ban-ISO-17025.pdf',
    description: 'Quyết định thành lập Ban ISO 17025'
  },
  {
    id: 15,
    title: '7.1 Hợp đồng mua thiết bị và BBBG thiết bị',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Hop-dong-mua-thiet-bi-va-BBBG-thiet-bi.pdf',
    description: 'Hợp đồng mua thiết bị và BBBG thiết bị'
  },
  {
    id: 16,
    title: '7.2 Hóa đơn mua thiết bị',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Hoa-don-mua-thiet-bi.pdf',
    description: 'Hóa đơn mua thiết bị'
  },
  {
    id: 17,
    title: '8. Chứng chỉ Kiểm định. hiệu chuẩn máy',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Chung-chi-Kiem-dinh-hieu-chuan-may.pdf',
    description: 'Chứng chỉ Kiểm định. hiệu chuẩn máy'
  },
  {
    id: 18,
    title: '9. Hợp đồng lao động CBNV',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Hop-dong-lao-dong-CBNV.pdf',
    description: 'Hợp đồng lao động CBNV'
  },
  {
    id: 19,
    title: '10 Giấy tờ chứng minh quyền sử dụng địa điểm đặt phòng TN và Sơ đồ PTN',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Giay-to-chung-minh-quyen-su-dung-dia-diem-dat-phong-TN-va-So-do-PTN.pdf',
    description: 'Giấy tờ chứng minh quyền sử dụng địa điểm đặt phòng TN và Sơ đồ PTN'
  },
  {
    id: 20,
    title: '11. Phiếu đánh giá PTN 050420',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Phieu-danh-gia-PTN-050420.pdf',
    description: 'Phiếu đánh giá PTN 050420'
  },
  {
    id: 21,
    title: '11.1.1 BM-01-01',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/BM-01-01.pdf',
    description: 'BM-01-01'
  },
  {
    id: 22,
    title: '11.1.2 BM-01-02',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/BM-01-02.pdf',
    description: 'BM-01-02'
  },
  {
    id: 23,
    title: '11.1.3 BM-01-03 Bìa sổ Danh sách TL',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/BM-01-03-Bia-so-Danh-sach-TL.pdf',
    description: 'BM-01-03 Bìa sổ Danh sách TL'
  },
  {
    id: 24,
    title: '11.1.4 QT01 Quy trinh qltl kt',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/QT01-Quy-trinh-qltl-kt.pdf',
    description: 'QT01 Quy trinh qltl kt'
  },
  {
    id: 25,
    title: '11.2.1. BBLM Hiện trường',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/BBLM-Hien-truong.pdf',
    description: 'BBLM Hiện trường'
  },
  {
    id: 26,
    title: '11.2.2. Phiếu nhận và trả mẫu',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Phieu-nhan-va-tra-mau.pdf',
    description: 'Phiếu nhận và trả mẫu'
  },
  {
    id: 27,
    title: '11.2.3 Sổ nhận và trả mẩu-1',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/So-nhan-va-tra-mau-1.pdf',
    description: 'Sổ nhận và trả mẩu-1'
  },
  {
    id: 28,
    title: '11.2.4 Phiếu yêu cầu hủy mẫu',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Phieu-yeu-cau-huy-mau.pdf',
    description: 'Phiếu yêu cầu hủy mẫu'
  },
  {
    id: 29,
    title: '11.2.5 BM  Tem mẫu',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/BM-Tem-mau.pdf',
    description: 'BM  Tem mẫu'
  },
  {
    id: 30,
    title: '11.2.6 Quy trình lấy mẫu và Quản lý mẫu',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Quy-trinh-lay-mau-va-Quan-ly-mau.pdf',
    description: 'Quy trình lấy mẫu và Quản lý mẫu'
  },
  {
    id: 31,
    title: '11.3.1 QT So sánh liên phòng',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/QT-So-sanh-lien-phong.pdf',
    description: 'QT So sánh liên phòng'
  },
  {
    id: 32,
    title: '11.3.2 Phiếu đánh giá kết quả TN liên phòng',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Phieu-danh-gia-ket-qua-TN-lien-phong.pdf',
    description: 'Phiếu đánh giá kết quả TN liên phòng'
  },
  {
    id: 33,
    title: '11.3.3 Phiếu đề xuất thử nghiệm liên phòng',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Phieu-de-xuat-thu-nghiem-lien-phong.pdf',
    description: 'Phiếu đề xuất thử nghiệm liên phòng'
  },
  {
    id: 34,
    title: '11.3.4 Theo dõi TN thành thạo',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Theo-doi-TN-thanh-thao.pdf',
    description: 'Theo dõi TN thành thạo'
  },
  {
    id: 35,
    title: '11.3.5 Phiếu đăng ký tham dự thành thạo',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Phieu-dang-ky-tham-du-thanh-thao.pdf',
    description: 'Phiếu đăng ký tham dự thành thạo'
  },
  {
    id: 36,
    title: '11.4.1 Quy trình truyển dụng và Đào tạo',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Quy-trinh-truyen-dung-va-Dao-tao.pdf',
    description: 'Quy trình truyển dụng và Đào tạo'
  },
  {
    id: 37,
    title: '11.4.2- Phiếu yêu cầu tuyển dụng',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Phieu-yeu-cau-tuyen-dung.pdf',
    description: 'Phiếu yêu cầu tuyển dụng'
  },
  {
    id: 38,
    title: '11.4.3 Ghi chép & DG ứng viên trong PV',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Ghi-chep-DG-ung-vien-trong-PV.pdf',
    description: 'Ghi chép & DG ứng viên trong PV'
  },
  {
    id: 39,
    title: '11.4.4 KH đào tạo nhân viên mới',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/KH-dao-tao-nhan-vien-moi.pdf',
    description: 'KH đào tạo nhân viên mới'
  },
  {
    id: 40,
    title: '11.4.5 BC Thử việc NV PTN',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/BC-Thu-viec-NV-PTN.pdf',
    description: 'BC Thử việc NV PTN'
  },
  {
    id: 41,
    title: '11.4.6 Phiếu đăng ký đào tạo cá nhân',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Phieu-dang-ky-dao-tao-ca-nhan.pdf',
    description: 'Phiếu đăng ký đào tạo cá nhân'
  },
  {
    id: 42,
    title: '11.4.7 KH đào tạo năm',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/KH-dao-tao-nam.pdf',
    description: 'KH đào tạo năm'
  },
  {
    id: 43,
    title: '11.5.1 QT QL TB',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/QT-QL-TB.pdf',
    description: 'QT QL TB'
  },
  {
    id: 44,
    title: '11.5.2 Danh Mục Thiết Bị',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Danh-Muc-Thiet-Bi.pdf',
    description: 'Danh Mục Thiết Bị'
  },
  {
    id: 45,
    title: '11.5.3 Kế Hoạch kiểm định hiệu chuẩn bảo trì thiết bị',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Ke-Hoach-kiem-dinh-hieu-chuan-bao-tri-thiet-bi.pdf',
    description: 'Kế Hoạch kiểm định hiệu chuẩn bảo trì thiết bị'
  },
  {
    id: 46,
    title: '11.5.4 Sổ theo dõi bảo dưỡng TH',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/So-theo-doi-bao-duong-TH.pdf',
    description: 'Sổ theo dõi bảo dưỡng TH'
  },
  {
    id: 47,
    title: '11.5.5 Sổ theo dõi thiết bị hiện trường',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/So-theo-doi-thiet-bi-hien-truong.pdf',
    description: 'Sổ theo dõi thiết bị hiện trường'
  },
  {
    id: 48,
    title: '11.5.6 Phiếu lý lịch thiết bị',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Phieu-ly-lich-thiet-bi.pdf',
    description: 'Phiếu lý lịch thiết bị'
  },
  {
    id: 49,
    title: '11.5.7 Phiếu theo dõi quá trình hiệu chuẩn thiết bị',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Phieu-theo-doi-qua-trinh-hieu-chuan-thiet-bi.pdf',
    description: 'Phiếu theo dõi quá trình hiệu chuẩn thiết bị'
  },
  {
    id: 50,
    title: '11.5.8 Sổ theo dõi vật tư hóa chất',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/So-theo-doi-vat-tu-hoa-chat.pdf',
    description: 'Sổ theo dõi vật tư hóa chất'
  },
  {
    id: 51,
    title: '11.5.9 Biên bản sự cố thiết bị',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Bien-ban-su-co-thiet-bi.pdf',
    description: 'Biên bản sự cố thiết bị'
  },
  {
    id: 52,
    title: '11.5.10 Mẫu đánh giá kết quả hiệu chuẩn',
    date: '26/03/2026',
    category: 'Hồ sơ năng lực',
    fileUrl: '/tai-lieu/Mau-danh-gia-ket-qua-hieu-chuan.pdf',
    description: 'Mẫu đánh giá kết quả hiệu chuẩn'
  },
  {
    id: 53,
    title: 'TCCS 09:2024/CĐBVN Xuất bản lần 2',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCCS 09 - 2024.pdf',
    description: 'TCCS 09:2024/CĐBVN Xuất bản lần 2'
  },
  {
    id: 54,
    title: 'TCCS 26:2019/TCĐBVN Xuất bản lần 1',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCCS 26 2019 TCĐBVN.pdf',
    description: 'TCCS 26:2019/TCĐBVN Xuất bản lần 1'
  },
  {
    id: 55,
    title: 'TCCS 38:2022/TCĐBVN Xuất bản lần 1',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCCS38.2022.TCĐBVN.pdf',
    description: 'TCCS 38:2022/TCĐBVN Xuất bản lần 1'
  },
  {
    id: 56,
    title: 'TCVN 12790:2020 - Xuất bản lần 1',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN 2790-2020.pdf',
    description: 'TCVN 12790:2020 - Xuất bản lần 1'
  },
  {
    id: 57,
    title: 'TCVN 3106:2022 - Xuất bản lần 3',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN 3106-2022.pdf',
    description: 'TCVN 3106:2022 - Xuất bản lần 3'
  },
  {
    id: 58,
    title: 'TCVN 3109:2022 - Xuất bản lần 3',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN 3109-2022.pdf',
    description: 'TCVN 3109:2022 - Xuất bản lần 3'
  },
  {
    id: 59,
    title: 'TCVN 3111:2022 - Xuất bản lần 3',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN 3111-2022.pdf',
    description: 'TCVN 3111:2022 - Xuất bản lần 3'
  },
  {
    id: 60,
    title: 'TCVN 3112:2022 - Xuất bản lần 3',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN 3112-2022.pdf',
    description: 'TCVN 3112:2022 - Xuất bản lần 3'
  },
  {
    id: 61,
    title: 'TCVN 3113:2022 - Xuất bản lần 3',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN 3113-2022.pdf',
    description: 'TCVN 3113:2022 - Xuất bản lần 3'
  },
  {
    id: 62,
    title: 'TCVN 3114:2022 - Xuất bản lần 3',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN 3114-2022.pdf',
    description: 'TCVN 3114:2022 - Xuất bản lần 3'
  },
  {
    id: 63,
    title: 'TCVN 3115:2022 - Xuất bản lần 3',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN 3115-2022.pdf',
    description: 'TCVN 3115:2022 - Xuất bản lần 3'
  },
  {
    id: 64,
    title: 'TCVN 3116:2022 - Xuất bản lần 3',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN 3116-2022.pdf',
    description: 'TCVN 3116:2022 - Xuất bản lần 3'
  },
  {
    id: 65,
    title: 'TCVN 3117:2022 - Xuất bản lần 3',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN 3117-2022.pdf',
    description: 'TCVN 3117:2022 - Xuất bản lần 3'
  },
  {
    id: 66,
    title: 'TCVN 3118:2022 - Xuất bản lần 3',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN 3118-2022.pdf',
    description: 'TCVN 3118:2022 - Xuất bản lần 3'
  },
  {
    id: 67,
    title: 'TCVN 3119:2022 - Xuất bản lần 3',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN 3119-2022.pdf',
    description: 'TCVN 3119:2022 - Xuất bản lần 3'
  },
  {
    id: 68,
    title: 'TCVN 3120:2022 - Xuất bản lần 3',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN 3120-2022.pdf',
    description: 'TCVN 3120:2022 - Xuất bản lần 3'
  },
  {
    id: 69,
    title: 'TCVN 3736:1982',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN 3736-1982.pdf',
    description: 'TCVN 3736:1982'
  },
  {
    id: 70,
    title: 'TCVN 5408:2007 - ISO 01461:1999',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN 5408-2007.pdf',
    description: 'TCVN 5408:2007 - ISO 01461:1999'
  },
  {
    id: 71,
    title: 'TCVN 5726:2022 - Xuất bản lần 3',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN 5726_2022.pdf',
    description: 'TCVN 5726:2022 - Xuất bản lần 3'
  },
  {
    id: 72,
    title: 'TCVN 5979:2021 - ISO 10390:2021- Xuất bản lần 3',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN 5979-2021.pdf',
    description: 'TCVN 5979:2021 - ISO 10390:2021- Xuất bản lần 3'
  },
  {
    id: 73,
    title: 'TCVN 7131:2016 - Xuất bản lần 2',
    date: '26/03/2026',
    category: 'Tiêu chuẩn',
    fileUrl: '/tai-lieu/TCVN 7131_2016.pdf',
    description: 'TCVN 7131:2016 - Xuất bản lần 2'
  }
];
