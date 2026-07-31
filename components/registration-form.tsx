'use client'

export default function RegistrationForm() {
  return (
    <section id="register-form" className="section-padding bg-white py-16 md:py-24">
      <div className="container-max max-w-5xl mx-auto px-4">
        {/* Tiêu đề & thanh gạch trang trí */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-phenikaa-dark-blue mb-4">
            Đăng Ký Ngay
          </h2>
          <div className="w-16 h-1 bg-phenikaa-orange rounded mx-auto mb-4"></div>
          <p className="text-gray-600 text-base md:text-lg">
            Vui lòng điền thông tin bên dưới để hoàn tất đăng ký tham dự.
          </p>
        </div>

        {/* Khung chứa iFrame Form từ BowNow */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-6 md:p-12">
          <iframe
            src="https://contents.bownow.jp/forms/view?form_id=sid_28aa9f66e93e2d5d7e44"
            width="100%"
            height="800"
            frameBorder="0"
            scrolling="yes"
            style={{ display: 'block', border: 'none' }}
            title="Registration Form"
          >
            Đang tải form đăng ký...
          </iframe>
        </div>
      </div>
    </section>
  )
}