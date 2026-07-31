import { Briefcase, Users, TrendingUp, Activity, Clipboard } from 'lucide-react'

export default function Audience() {
  const audience = [
    {
      role: 'Trưởng phòng Nhân sự',
      description: 'Tổ chức khám sức khỏe định kỳ và quản lý phúc lợi',
      Icon: Briefcase
    },
    {
      role: 'Phụ trách Vận hành & Hành chính',
      description: 'Quản lý hồ sơ sức khỏe và liên kết bệnh viện',
      Icon: Clipboard
    },
    {
      role: 'Lãnh đạo / Giám đốc',
      description: 'Quyết định ngân sách chương trình khám sức khỏe',
      Icon: TrendingUp
    },
    {
      role: 'Chuyên viên Phúc lợi (C&B / HRBP)',
      description: 'Thiết kế gói phúc lợi dựa trên dữ liệu',
      Icon: Users
    },
    {
      role: 'Chuyên viên An toàn & Y tế Doanh nghiệp',
      description: 'Phân tích dữ liệu sức khỏe workforce',
      Icon: Activity
    }
  ]

  return (
    <section id="audience" className="w-full py-16 lg:py-24 bg-slate-50/60 font-['Bai_Jamjuree'] relative overflow-hidden">
      {/* Hiệu ứng đốm mờ nền */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100/80 text-phenikaa-dark-blue text-xs md:text-sm font-semibold mb-3 border border-blue-200/50">
            DÀNH CHO AI?
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-phenikaa-dark-blue leading-tight mb-4">
            Đối Tượng Tham Dự
          </h2>
          <div className="w-16 h-1 bg-phenikaa-orange rounded-full mx-auto"></div>
        </div>

        {/* Audience Cards Grid - Bố cục cân bằng: Hàng trên 3 ô, hàng dưới 2 ô căn giữa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {audience.map((item, index) => {
            // Tính toán class để 3 ô đầu chiếm 2 cột (3x2=6), 2 ô sau chiếm 3 cột (2x3=6) -> Cân bằng tuyệt đối!
            const colSpanClass = index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'

            return (
              <div
                key={index}
                className={`group relative bg-white p-7 md:p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden ${colSpanClass}`}
              >
                {/* Thanh dải màu viền top khi hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-phenikaa-dark-blue via-blue-600 to-phenikaa-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Số thứ tự trang trí */}
                <span className="absolute top-4 right-5 text-3xl font-extrabold text-slate-100 group-hover:text-blue-100/80 transition-colors pointer-events-none font-mono">
                  0{index + 1}
                </span>

                <div>
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-blue-50/80 text-phenikaa-dark-blue flex items-center justify-center mb-6 group-hover:bg-phenikaa-dark-blue group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-2xs border border-blue-100">
                    <item.Icon className="w-7 h-7 stroke-[2]" />
                  </div>

                  {/* Role Title */}
                  <h3 className="font-bold text-phenikaa-dark-blue text-lg md:text-xl mb-3 leading-snug group-hover:text-phenikaa-orange transition-colors">
                    {item.role}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}