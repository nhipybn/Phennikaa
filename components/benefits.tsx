export default function Benefits() {
  const benefits = [
    {
      title: 'Chăm sóc sức khỏe toàn diện',
      description: 'Cung cấp các dịch vụ khám chữa bệnh đầy đủ và chuyên sâu từ các bác sĩ giàu kinh nghiệm.'
    },
    {
      title: 'Trang thiết bị hiện đại',
      description: 'Sử dụng các công nghệ y tế tiên tiến để chẩn đoán và điều trị bệnh một cách hiệu quả.'
    },
    {
      title: 'Môi trường sạch sẽ, thoáng mát',
      description: 'Phòng khám được thiết kế theo tiêu chuẩn quốc tế với hệ thống vệ sinh tuyệt đối.'
    },
    {
      title: 'Giá dịch vụ cạnh tranh',
      description: 'Cung cấp các dịch vụ y tế với mức giá hợp lý, phù hợp với mọi tầng lớp xã hội.'
    }
  ]

  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-phenikaa-dark-blue mb-4 text-center">
          Lợi ích khi chọn PhenikaaMEC
        </h2>
        <div className="w-16 h-1 bg-phenikaa-orange rounded mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-phenikaa-light-blue to-white p-8 rounded-lg border border-phenikaa-blue border-opacity-30 hover:shadow-lg hover:border-opacity-50 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-phenikaa-blue text-white rounded-full flex items-center justify-center font-heading font-bold text-2xl mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="headline-primary text-lg mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
