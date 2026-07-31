export default function CTA() {
  return (
    <section className="bg-phenikaa-blue text-white py-16 md:py-24">
      <div className="container-max section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            Sẵn sàng để nâng cao quản lý sức khỏe doanh nghiệp của bạn?
          </h2>
          <p className="text-lg mb-8 text-blue-100 leading-relaxed">
            Đừng bỏ lỡ cơ hội học hỏi từ các chuyên gia. Đăng ký ngay hôm nay để đảm bảo chỗ của bạn.
          </p>

          <div className="space-y-4">
            <button className="w-full md:w-auto px-8 py-4 bg-phenikaa-orange text-white font-heading font-bold rounded-lg hover:bg-orange-600 transition-colors duration-200 text-lg">
              Đăng ký ngay
            </button>
            <p className="text-sm text-blue-100">
              Hoàn toàn miễn phí • Giới hạn chỗ • Xác nhận ngay lập tức
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
