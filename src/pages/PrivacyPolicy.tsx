import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 bg-brand-paper min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-brand-gold/10 p-3 rounded-2xl">
              <Shield className="h-8 w-8 text-brand-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-brand-dark serif italic">
              Chính Sách <span className="not-italic font-normal">Bảo Mật</span>
            </h1>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-brand-dark serif mb-4">1. Thu thập thông tin</h2>
              <p>
                Công ty Cổ phần Tư vấn Xây dựng T&T Quảng Bình cam kết bảo vệ quyền riêng tư của khách hàng. Chúng tôi chỉ thu thập các thông tin cần thiết để cung cấp dịch vụ tư vấn, giám sát và kiểm định xây dựng, bao gồm: họ tên, số điện thoại, email và thông tin liên quan đến dự án.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark serif mb-4">2. Sử dụng thông tin</h2>
              <p>
                Thông tin của bạn sẽ được sử dụng cho các mục đích sau:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Liên hệ tư vấn và giải đáp thắc mắc về dịch vụ.</li>
                <li>Thực hiện các hợp đồng tư vấn, giám sát và kiểm định.</li>
                <li>Gửi thông báo về tiến độ dự án hoặc các cập nhật quan trọng.</li>
                <li>Nâng cao chất lượng dịch vụ và trải nghiệm người dùng trên website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark serif mb-4">3. Bảo mật thông tin</h2>
              <p>
                Chúng tôi áp dụng các biện pháp bảo mật kỹ thuật và tổ chức nghiêm ngặt để bảo vệ dữ liệu cá nhân của bạn khỏi việc truy cập, sử dụng hoặc tiết lộ trái phép. Dữ liệu được lưu trữ trên hệ thống máy chủ an toàn và chỉ những nhân viên có thẩm quyền mới được phép truy cập.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark serif mb-4">4. Chia sẻ thông tin với bên thứ ba</h2>
              <p>
                Chúng tôi cam kết không bán, trao đổi hoặc cho thuê thông tin cá nhân của bạn cho bên thứ ba. Thông tin chỉ được chia sẻ khi có sự đồng ý của bạn hoặc theo yêu cầu của cơ quan pháp luật có thẩm quyền trong khuôn khổ pháp luật Việt Nam.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark serif mb-4">5. Quyền của người dùng</h2>
              <p>
                Bạn có quyền yêu cầu truy cập, chỉnh sửa hoặc xóa thông tin cá nhân mà chúng tôi đang lưu giữ. Mọi yêu cầu vui lòng gửi về email: <a href="mailto:tuvanxaydung@truongthinh.com" className="text-brand-gold hover:underline">tuvanxaydung@truongthinh.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark serif mb-4">6. Thay đổi chính sách</h2>
              <p>
                Chính sách bảo mật này có thể được cập nhật định kỳ để phù hợp với các thay đổi về dịch vụ hoặc quy định pháp luật. Chúng tôi sẽ thông báo về bất kỳ thay đổi quan trọng nào bằng cách đăng thông báo trên website.
              </p>
            </section>

            <div className="pt-8 border-t border-gray-200 text-sm italic">
              Cập nhật lần cuối: Ngày 28 tháng 03 năm 2026
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
