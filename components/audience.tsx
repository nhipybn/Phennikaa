import { Briefcase, Users, TrendingUp, Activity, Clipboard } from 'lucide-react'

export default function Audience() {
  const audience = [
    {
      role: 'HR Manager',
      description: 'Tổ chức khám sức khỏe định kỳ và quản lý phúc lợi',
      Icon: Briefcase
    },
    {
      role: 'HR Admin / GA',
      description: 'Quản lý hồ sơ sức khỏe và liên kết bệnh viện',
      Icon: Clipboard
    },
    {
      role: 'CEO / Giám đốc',
      description: 'Quyết định ngân sách chương trình khám sức khỏe',
      Icon: TrendingUp
    },
    {
      role: 'C&B / HRBP',
      description: 'Thiết kế gói phúc lợi dựa trên dữ liệu',
      Icon: Users
    },
    {
      role: 'Cán bộ HSE / Y tế',
      description: 'Phân tích dữ liệu sức khỏe workforce',
      Icon: Activity
    }
  ]

  return (
    <section id="audience" className="w-full min-h-screen flex items-center py-16 lg:py-24 bg-white font-['Bai_Jamjuree']">
      <div className="w-full px-6 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-phenikaa-dark-blue mb-4">
            Đối Tượng Tham Dự
          </h2>
          <div className="w-20 h-1 bg-phenikaa-orange rounded-full mx-auto"></div>
        </div>

        {/* Audience Cards Grid - Tràn rộng 5 cột trên màn hình lớn */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 w-full">
          {audience.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Trang trí nền phía trên khi hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-phenikaa-blue to-phenikaa-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Số thứ tự chìm tinh tế */}
              <span className="absolute top-3 right-4 text-3xl font-bold text-gray-100 group-hover:text-blue-50 transition-colors pointer-events-none">
                0{index + 1}
              </span>

              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-phenikaa-blue flex items-center justify-center mb-6 group-hover:bg-phenikaa-dark-blue group-hover:text-white transition-all duration-300 shadow-sm">
                  <item.Icon className="w-7 h-7 stroke-[1.8]" />
                </div>

                {/* Role Title */}
                <h3 className="font-bold text-phenikaa-dark-blue text-lg mb-3 group-hover:text-phenikaa-blue transition-colors">
                  {item.role}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}