export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
  content: string;
}

export const news: NewsItem[] = [
  {
    id: 1,
    title: 'Tiêu chuẩn và quy chuẩn Việt Nam hiện hành về Kiểm định xây dựng',
    date: '20/03/2026',
    category: 'Kiến thức chuyên ngành',
    image: '/images/news/tieu-chuan-quy-chuan-vn-hien-hanh-ve-kiem-dinh-xay-dung.jpg',
    description: 'Tổng hợp các tiêu chuẩn, quy chuẩn Việt Nam mới nhất áp dụng trong lĩnh vực kiểm định chất lượng công trình xây dựng.',
    content: 'Kiểm định xây dựng là hoạt động đánh giá chất lượng, sự phù hợp với thiết kế, quy chuẩn kỹ thuật, tiêu chuẩn kỹ thuật áp dụng cho công trình. Để thực hiện công tác này một cách chính xác và khách quan, các đơn vị kiểm định phải tuân thủ nghiêm ngặt hệ thống Tiêu chuẩn và Quy chuẩn Việt Nam (TCVN & QCVN) hiện hành.\n\nBài viết này tổng hợp các tiêu chuẩn quan trọng nhất đang được áp dụng, bao gồm các tiêu chuẩn về vật liệu xây dựng (bê tông, cốt thép, gạch, xi măng...), tiêu chuẩn về phương pháp thử nghiệm, và quy chuẩn về an toàn sinh mạng và sức khỏe trong công trình xây dựng.'
  },
  {
    id: 2,
    title: 'Hướng dẫn xác định yếu tố ảnh hưởng tuổi thọ công trình và bảo trì khi sử dụng',
    date: '15/03/2026',
    category: 'Hướng dẫn kỹ thuật',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Chi tiết các yếu tố tác động đến tuổi thọ công trình và quy trình bảo trì chuẩn giúp kéo dài thời gian sử dụng an toàn.',
    content: 'Tuổi thọ của một công trình xây dựng phụ thuộc vào rất nhiều yếu tố, từ khâu thiết kế, thi công cho đến quá trình vận hành và bảo trì. Việc xác định đúng các yếu tố này giúp chủ đầu tư và đơn vị quản lý có kế hoạch bảo trì hiệu quả, tiết kiệm chi phí và đảm bảo an toàn.\n\nCác yếu tố chính bao gồm: điều kiện môi trường (nhiệt độ, độ ẩm, hóa chất...), chất lượng vật liệu ban đầu, tải trọng khai thác thực tế so với thiết kế, và tần suất bảo dưỡng định kỳ. Quy trình bảo trì chuẩn cần được lập ngay từ khi công trình đưa vào sử dụng và tuân thủ nghiêm ngặt theo hướng dẫn của nhà thầu và các tiêu chuẩn hiện hành.'
  },
  {
    id: 3,
    title: 'Quy định mới nhất năm 2026 về quản lý chất lượng dự án đầu tư xây dựng',
    date: '10/03/2026',
    category: 'Văn bản pháp luật',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Cập nhật những thay đổi quan trọng trong quy định quản lý chất lượng, thi công xây dựng và bảo trì công trình năm 2026.',
    content: 'Năm 2026 đánh dấu nhiều thay đổi quan trọng trong các văn bản quy phạm pháp luật liên quan đến quản lý chất lượng công trình xây dựng. Các quy định mới tập trung vào việc nâng cao trách nhiệm của các chủ thể tham gia hoạt động xây dựng, đặc biệt là vai trò của tư vấn giám sát và đơn vị kiểm định độc lập.\n\nMột số điểm nhấn đáng chú ý bao gồm: siết chặt quy trình nghiệm thu vật liệu đầu vào, yêu cầu cao hơn về năng lực của phòng thí nghiệm chuyên ngành (LAS-XD), và quy định rõ ràng hơn về quy trình xử lý sự cố công trình. Các doanh nghiệp xây dựng cần cập nhật kịp thời để đảm bảo tuân thủ pháp luật và nâng cao chất lượng dự án.'
  }
];
