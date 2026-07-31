'use client'

import { Stethoscope, HeartPulse, ShieldCheck, BarChart3, Sparkles } from 'lucide-react'

const IMAGE_1_SRC = "/Image1.png" // IMAGE 1: Dữ liệu sức khỏe
const IMAGE_2_SRC = "/Image2.png" // IMAGE 2: Ngân sách phúc lợi

export default function WhyWebinar() {
  const reason1 = {
    title: 'Phát hiện tín hiệu sớm',
    description: 'Nhận diện vấn đề sức khỏe để giảm nghỉ ốm và cải thiện năng suất',
    Icon: Stethoscope,
    highlights: [
      'Giảm 40% chi phí y tế không cần thiết',
      'Tăng 25% năng suất làm việc'
    ]
  }

  const reason2 = {
    title: 'Chi tiêu thông minh',
    description: 'Biết nhóm nhân sự nào cần gì để ngân sách tạo tác động thực',
    Icon: HeartPulse,
    highlights: [
      'ROI rõ ràng cho từng chương trình phúc lợi',
      'Giảm lãng phí ngân sách'
    ]
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
    <section id="why" className="py-14 lg:py-20 bg-slate-50/70 font-['Bai_Jamjuree'] relative overflow-hidden">
      <div className="w-full px-6 lg:px-8 max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-100/80 text-phenikaa-dark-blue mb-3 border border-blue-200/50">
            GIÁ TRỊ THỰC TẾ
          </span>
          <h2 className="text-2xl lg:text-4xl font-bold text-phenikaa-dark-blue mb-3">
            Lý Do Không Thể Bỏ Lỡ Webinar Này?
          </h2>
          <div className="w-16 h-1 bg-phenikaa-orange rounded-full mx-auto mb-3"></div>
          <p className="text-gray-600 text-sm md:text-base">
            Mỗi năm đều khám sức khỏe định kỳ, nhưng kết quả chỉ nằm trong tủ hồ sơ. 
          </p>
        </div>

        {/* 2 CỘT CHÍNH: HÌNH TRÊN - CHỮ DƯỚI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          
          {/* CỘT 1 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              {/* Hình ảnh phía trên */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-blue-50 border border-slate-100">
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
                  <span className="text-3xl mb-1">📊</span>
                  <p className="text-phenikaa-dark-blue font-bold text-xs">IMAGE 1: Dữ liệu Sức khỏe</p>
                </div>
              </div>

              {/* Chữ phía dưới */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-50 text-phenikaa-dark-blue rounded-xl flex items-center justify-center shrink-0 border border-blue-100">
                  <reason1.Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-phenikaa-dark-blue">
                  {reason1.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {reason1.description}
              </p>
            </div>

            <ul className="space-y-2 pt-4 border-t border-slate-100">
              {reason1.highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-gray-700 font-medium">
                  <span className="w-2 h-2 bg-phenikaa-orange rounded-full shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 2 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              {/* Hình ảnh phía trên */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-orange-50 border border-slate-100">
                <img
                  src={IMAGE_2_SRC}
                  alt="Ngân sách Phúc lợi Phenikaa MEC"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center')
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -z-10">
                  <span className="text-3xl mb-1">💰</span>
                  <p className="text-phenikaa-orange font-bold text-xs">IMAGE 2: Ngân sách Phúc lợi</p>
                </div>
              </div>

              {/* Chữ phía dưới */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-50 text-phenikaa-orange rounded-xl flex items-center justify-center shrink-0 border border-orange-100">
                  <reason2.Icon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl lg:text-xl font-bold text-phenikaa-dark-blue">
                  {reason2.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {reason2.description}
              </p>
            </div>

            <ul className="space-y-2 pt-4 border-t border-slate-100">
              {reason2.highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-gray-700 font-medium">
                  <span className="w-2 h-2 bg-phenikaa-orange rounded-full shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 3 LÝ DO BỔ SUNG: KHU VỰC TINH TẾ RÚT GỌN */}
        <div className="bg-gradient-to-br from-phenikaa-dark-blue via-blue-900 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden border border-blue-800/50">
          
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <h3 className="text-base md:text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-phenikaa-orange"></span>
              3 Lợi Ích Bổ Sung Dành Cho Doanh Nghiệp
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherReasons.map((reason, index) => {
              const Icon = reason.Icon
              return (
                <div 
                  key={index} 
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:bg-white/10 transition-all group relative overflow-hidden"
                >
                  <span className="absolute top-3 right-4 font-mono font-bold text-white/10 group-hover:text-phenikaa-orange/30 text-2xl transition-colors pointer-events-none">
                    0{index + 3}
                  </span>

                  <div className="w-10 h-10 bg-white/10 text-phenikaa-orange rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-white/10">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h4 className="font-bold mb-2 text-base text-white">
                    {reason.title}
                  </h4>

                  <p className="text-blue-100 text-xs md:text-sm leading-relaxed font-normal">
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