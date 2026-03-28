import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export default function TermsOfUse() {
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
              <FileText className="h-8 w-8 text-brand-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-brand-dark serif italic">
              Điều Khoản <span className="not-italic font-normal">Sử Dụng</span>
            </h1>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-brand-dark serif mb-4">1. Chấp thuận điều khoản</h2>
              <p>
                Bằng việc truy cập và sử dụng website của Công ty Cổ phần Tư vấn Xây dựng T&T Quảng Bình, bạn đồng ý tuân thủ và bị ràng buộc bởi các điều khoản sử dụng này. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, vui lòng không sử dụng website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark serif mb-4">2. Quyền sở hữu trí tuệ</h2>
              <p>
                Toàn bộ nội dung trên website này, bao gồm nhưng không giới hạn ở văn bản, hình ảnh, logo, biểu tượng, tài liệu kỹ thuật và bản vẽ thiết kế, là tài sản của T&T Quảng Bình hoặc các bên cấp phép và được bảo vệ bởi luật sở hữu trí tuệ Việt Nam và quốc tế.
              </p>
              <p>
                Việc sao chép, sửa đổi, phân phối hoặc sử dụng bất kỳ nội dung nào từ website này cho mục đích thương mại mà không có sự đồng ý bằng văn bản của chúng tôi là nghiêm cấm.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark serif mb-4">3. Sử dụng website</h2>
              <p>
                Bạn đồng ý sử dụng website cho các mục đích hợp pháp và không vi phạm quyền của bất kỳ bên thứ ba nào. Bạn không được thực hiện bất kỳ hành động nào có thể làm gián đoạn hoặc can thiệp vào hoạt động bình thường của website hoặc hệ thống máy chủ của chúng tôi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark serif mb-4">4. Miễn trừ trách nhiệm</h2>
              <p>
                Thông tin trên website này được cung cấp cho mục đích thông tin chung. Mặc dù chúng tôi nỗ lực đảm bảo tính chính xác của thông tin, T&T Quảng Bình không chịu trách nhiệm về bất kỳ sai sót, thiếu sót hoặc thiệt hại nào phát sinh từ việc sử dụng thông tin này.
              </p>
              <p>
                Các tài liệu kỹ thuật và tiêu chuẩn (TCVN) được cung cấp trên website chỉ mang tính chất tham khảo. Bạn nên liên hệ trực tiếp với đội ngũ kỹ sư của chúng tôi để được tư vấn chính xác cho từng dự án cụ thể.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark serif mb-4">5. Liên kết bên thứ ba</h2>
              <p>
                Website có thể chứa các liên kết đến các trang web của bên thứ ba. Chúng tôi không kiểm soát và không chịu trách nhiệm về nội dung hoặc chính sách bảo mật của các trang web đó.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark serif mb-4">6. Luật áp dụng</h2>
              <p>
                Các điều khoản sử dụng này được điều chỉnh và giải thích theo pháp luật của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam. Mọi tranh chấp phát sinh từ việc sử dụng website sẽ được giải quyết tại tòa án có thẩm quyền tại Việt Nam.
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
