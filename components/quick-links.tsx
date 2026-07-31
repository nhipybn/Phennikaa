import { Heart, Users, Stethoscope, DollarSign } from 'lucide-react'

export default function QuickLinks() {
  const links = [
    {
      icon: Heart,
      title: 'Hướng Dẫn Khách Hàng',
      description: 'Cung cấp thông tin, hỗ trợ giải đáp mọi thắc mắc.',
      color: 'text-red-500',
    },
    {
      icon: Stethoscope,
      title: 'Danh Sách Chuyên Khoa',
      description: 'Cung cấp các dịch vụ y tế phù hợp với từng tình trạng sức khỏe.',
      color: 'text-blue-500',
    },
    {
      icon: Users,
      title: 'Tìm Bác Sĩ',
      description: 'Chọn theo tên, chuyên môn và nhiều hơn thế.',
      color: 'text-green-500',
    },
    {
      icon: DollarSign,
      title: 'Bảng Giá Dịch Vụ',
      description: 'Danh sách chi phí của từng dịch vụ.',
      color: 'text-purple-500',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={index}
                href="#"
                className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-phenikaa-blue transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-gray-50 rounded-lg group-hover:bg-phenikaa-light-blue transition-colors duration-300`}>
                    <Icon className={`w-6 h-6 ${link.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="headline-primary text-lg mb-2 group-hover:text-phenikaa-blue transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                      {link.description}
                    </p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
