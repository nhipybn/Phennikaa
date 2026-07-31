'use client'

import { Stethoscope, HeartPulse, ShieldCheck, BarChart3, Sparkles } from 'lucide-react'

// Đường dẫn ảnh trong thư mục public/
const IMAGE_1_SRC = "/Image1.png" // IMAGE 1: Dữ liệu sức khỏe
const IMAGE_2_SRC = "/Image2.png" // IMAGE 2: Ngân sách phúc lợi

export default function WhyWebinar() {
  const reason1 = {
    title: 'Phát hiện tín hiệu sớm',
    description: 'Nhận diện vấn đề sức khỏe để giảm nghỉ ốm và cải thiện năng suất',
    Icon: Stethoscope
  }

  const reason2 = {
    title: 'Chi tiêu thông minh',
    description: 'Biết nhóm nhân sự nào cần gì để ngân sách tạo tác động thực',
    Icon: HeartPulse
  }

  const otherReasons = [
    {
      title: 'Trở thành chiến lược gia',
      description: 'Thay đổi vị thế HR từ vận hành sang chiến lược với dữ liệu',
      Icon: ShieldCheck
    },
    {
      title: 'Tăng tiếng nói HR',
      description: 'Đưa tiếng nói HR vào quyết định ngân sách với bằng chứng',
      Icon: BarChart3
    },
    {
      title: 'Phương pháp đơn giản',
      description: 'Áp dụng ngay mà không cần đội phân tích hay hệ thống phức tạp',
      Icon: Sparkles
    }
  ]

  return (
    <section id="why" className="py-16 lg:py-24 bg-gradient-to-b from-blue-50/50 via-white to-white font-['Bai_Jamjuree']">
      <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-phenikaa-blue mb-3 tracking-wide uppercase">
            Giá Trị Thực Tế
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-phenikaa-dark-blue mb-3">
            Lý Do Không Thể Bỏ Lỡ Webinar Này?
          </h2>
          <div className="w-20 h-1 bg-phenikaa-orange rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm md:text-base">
            5 lý do tại sao hàng ngàn HR leader đã chọn Phenikaa để chuyển đổi chiến lược sức khỏe
          </p>
        </div>

        {/* Alternating Layout */}
        <div className="space-y-12 lg:space-y-16 mb-16">

          {/* Section 1 - Text Left, Image 1 Right */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-phenikaa-blue to-phenikaa-dark-blue text-white rounded-2xl flex items-center justify-center shadow-md shrink-0">
                  <reason1.Icon className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-phenikaa-dark-blue">
                  {reason1.title}
                </h3>
              </div>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 font-normal">
                {reason1.description}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700 text-sm lg:text-base font-semibold">
                  <span className="w-2.5 h-2.5 bg-phenikaa-orange rounded-full shrink-0"></span>
                  Giảm 40% chi phí y tế không cần thiết
                </li>
                <li className="flex items-center gap-3 text-gray-700 text-sm lg:text-base font-semibold">
                  <span className="w-2.5 h-2.5 bg-phenikaa-orange rounded-full shrink-0"></span>
                  Tăng 25% năng suất làm việc
                </li>
              </ul>
            </div>

            {/* IMAGE 1 CONTAINER */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-blue-50/50 group">
              <img
                src={IMAGE_1_SRC}
                alt="Dữ liệu Sức khỏe Phenikaa MEC"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center')
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -z-10">
                <span className="text-4xl mb-2">📊</span>
                <p className="text-phenikaa-dark-blue font-bold text-sm">IMAGE 1: Dữ liệu Sức khỏe</p>
              </div>
            </div>
          </div>

          {/* Section 2 - Image 2 Left, Text Right */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* IMAGE 2 CONTAINER */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-orange-50/50 group order-2 lg:order-1">
              <img
                src={IMAGE_2_SRC}
                alt="Ngân sách Phúc lợi Phenikaa MEC"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'border-2', 'border-dashed', 'border-phenikaa-orange')
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -z-10">
                <span className="text-4xl mb-2">💰</span>
                <p className="text-phenikaa-orange font-bold text-sm">IMAGE 2: Ngân sách Phúc lợi</p>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-phenikaa-orange to-orange-600 text-white rounded-2xl flex items-center justify-center shadow-md shrink-0">
                  <reason2.Icon className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-phenikaa-dark-blue">
                  {reason2.title}
                </h3>
              </div>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 font-normal">
                {reason2.description}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700 text-sm lg:text-base font-semibold">
                  <span className="w-2.5 h-2.5 bg-phenikaa-orange rounded-full shrink-0"></span>
                  ROI rõ ràng cho từng chương trình phúc lợi
                </li>
                <li className="flex items-center gap-3 text-gray-700 text-sm lg:text-base font-semibold">
                  <span className="w-2.5 h-2.5 bg-phenikaa-orange rounded-full shrink-0"></span>
                  Giảm lãng phí ngân sách
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Grid Layout for Remaining Benefits */}
        <div className="bg-gradient-to-r from-phenikaa-blue via-phenikaa-dark-blue to-blue-900 text-white rounded-3xl p-8 lg:p-12 shadow-xl">

          <h3 className="text-2xl lg:text-3xl font-bold mb-10 text-center text-white tracking-wide">
            3 Lợi Ích Bổ Sung
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {otherReasons.map((reason, index) => {
              const Icon = reason.Icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md text-white rounded-2xl flex items-center justify-center mb-5 mx-auto border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="font-bold mb-3 text-lg lg:text-xl text-white">
                    {reason.title}
                  </h4>

                  <p className="text-white font-bold text-sm lg:text-base leading-relaxed opacity-95">
                    {reason.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}