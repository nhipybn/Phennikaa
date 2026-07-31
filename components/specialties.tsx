import { Heart, Eye, Pill, Smile, Bone, Brain } from 'lucide-react'

export default function Specialties() {
  const specialties = [
    {
      icon: Heart,
      title: 'Tim Mạch',
      description: 'Chuyên khoa quản lý và điều trị các bệnh liên quan đến tim mạch.',
    },
    {
      icon: Eye,
      title: 'Mắt',
      description: 'Cung cấp các dịch vụ khám và điều trị bệnh về mắt chuyên sâu.',
    },
    {
      icon: Pill,
      title: 'Ngoại Khoa',
      description: 'Các can thiệp ngoại khoa với kỹ thuật và dụng cụ hiện đại.',
    },
    {
      icon: Smile,
      title: 'Nha Khoa',
      description: 'Dịch vụ chăm sóc và điều trị các bệnh về răng miệng.',
    },
    {
      icon: Bone,
      title: 'Chấn Thương Chỉnh Hình',
      description: 'Điều trị các bệnh liên quan đến xương khớp cột sống.',
    },
    {
      icon: Brain,
      title: 'Thần Kinh',
      description: 'Khám chữa bệnh chuyên khoa thần kinh và tâm thần.',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-phenikaa-dark-blue mb-4 text-center">
          Các Chuyên Khoa
        </h2>
        <div className="w-16 h-1 bg-phenikaa-orange rounded mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg hover:border-phenikaa-blue transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-phenikaa-light-blue rounded-lg group-hover:bg-phenikaa-blue transition-colors duration-300">
                    <Icon className="w-6 h-6 text-phenikaa-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-bold text-phenikaa-dark-blue mb-2 group-hover:text-phenikaa-blue transition-colors">
                      {specialty.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
