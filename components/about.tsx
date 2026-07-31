import Image from 'next/image'

export default function About() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1576091160399-0ff1dfc25cb7?w=600&h=400&fit=crop"
              alt="About Phenikaa Medical"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-phenikaa-dark-blue mb-4">
              Phòng Khám Đa Khoa Phenikaa
            </h2>
            <div className="w-12 h-1 bg-phenikaa-orange rounded mb-6"></div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Phòng khám đa khoa Phenikaa là một thành viên của tập đoàn Phenikaa, chuyên cung cấp các dịch vụ y tế chất lượng cao với đội ngũ bác sĩ giàu kinh nghiệm và trang thiết bị hiện đại.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Chúng tôi cam kết mang đến cho bệnh nhân những dịch vụ y tế tốt nhất, với phương châm "Tận tâm - Sáng tạo - Nâng tầm tri thức". Với môi trường sạch sẽ, thoáng nhìng và quy trình chuyên nghiệp, chúng tôi luôn sẵn sàng chăm sóc sức khỏe của bạn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Tìm hiểu thêm
              </button>
              <button className="btn-secondary">
                Liên hệ ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
