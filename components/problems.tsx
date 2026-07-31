'use client'

import { TrendingUp, Users, Target, Zap, Brain, AlertCircle, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Problems() {
  const problems = [
    {
      title: 'Khai thác dữ liệu',
      description: 'Cách khai thác đúng giá trị của dữ liệu tổng quan đang có sẵn',
      Icon: TrendingUp
    },
    {
      title: 'Nhận diện tín hiệu sớm',
      description: 'Như bệnh chuyển hóa, cơ xương khớp, sức khỏe tinh thần chỉ được phát hiện khi đã thành chi phí.',
      Icon: AlertCircle
    },
    {
      title: 'Phân nhóm ưu tiên',
      description: 'Cách phân nhóm để ưu tiên đúng đối tượng, xác định nhóm nhân sự nào cần được quan tâm hơn.',
      Icon: Target
    },
    {
      title: 'Phúc lợi dựa trên bằng chứng',
      description: 'Giúp xây dựng phúc lợi đo lường được. Khắc phục việc thiết kế theo cảm tính và giúp HR dễ thuyết phục lãnh đạo duyệt ngân sách.',
      Icon: Zap
    },
    {
      title: 'Dự báo & Lập kế hoạch',
      description: 'Cách dùng xu hướng hiện tại để dự báo tác động đến chi phí và năng suất tương lai, tránh bị động trước chi phí y tế, phí bảo hiểm tăng.',
      Icon: Brain
    },
  ]

  return (
    <section id="problems" className="w-full py-16 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-orange-50/30 font-['Bai_Jamjuree'] relative overflow-hidden">
      
      {/* Đốm sáng nền trang trí tinh tế */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-100/80 text-phenikaa-dark-blue mb-3 border border-blue-200/50">
            NỘI DUNG TRỌNG TÂM
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-phenikaa-dark-blue mb-3 tracking-tight">
            Webinar Giải Quyết Vấn Đề Gì?
          </h2>
          <div className="w-16 h-1 bg-phenikaa-orange rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
            Những bài toán cốt lõi mà bất kỳ doanh nghiệp nào cũng gặp phải khi quản lý sức khỏe nhân sự.
          </p>
        </div>

        {/* Image Section - Tỉ lệ gọn gàng, bo góc tinh tế */}
        <div className="mb-14 relative w-full aspect-[21/9] lg:aspect-[24/9] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 group">
          <Image
            src="/cosovatchat.png"
            alt="Cơ sở vật chất Bệnh viện Phenikaa MEC"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
            <div>
              <p className="text-sm md:text-lg font-bold tracking-wide uppercase text-white drop-shadow-sm">Cơ Sở Vật Chất & Trang Thiết Bị Hiện Đại</p>
              <p className="text-xs md:text-sm text-blue-100 opacity-90">Bệnh viện / Phòng khám Đa khoa Phenikaa MEC</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-phenikaa-orange">
              <span>Chuẩn Quốc Tế</span>
            </div>
          </div>
        </div>

        {/* Problems Grid - Cấu trúc cân đối: Hàng trên 3 ô, hàng dưới 2 ô căn giữa */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-14 w-full">
          {problems.map((problem, index) => {
            // Logic phân chia grid thông minh: 3 ô đầu chiếm 2 cột (3x2=6), 2 ô sau chiếm 3 cột (2x3=6) -> Cân đối hoàn hảo
            const colSpanClass = index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'

            return (
              <div
                key={index}
                className={`group bg-white p-7 md:p-8 rounded-3xl border border-slate-200/80 hover:border-phenikaa-orange shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden ${colSpanClass}`}
              >
                {/* Dải màu viền top khi hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-phenikaa-dark-blue to-phenikaa-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Số thứ tự chìm góc phải */}
                <span className="absolute top-4 right-5 text-2xl font-extrabold text-slate-100 group-hover:text-blue-100/70 transition-colors pointer-events-none font-mono">
                  0{index + 1}
                </span>

                <div>
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 text-phenikaa-dark-blue rounded-2xl flex items-center justify-center mb-5 group-hover:bg-phenikaa-dark-blue group-hover:text-white transition-all duration-300 shadow-2xs border border-blue-100">
                    <problem.Icon className="w-6 h-6 md:w-7 md:h-7 stroke-[1.8]" />
                  </div>
                  
                  <h3 className="font-bold text-phenikaa-dark-blue mb-2.5 text-lg md:text-xl group-hover:text-phenikaa-orange transition-colors">
                    {problem.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-xs md:text-sm font-normal">
                    {problem.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Section Highlight - Tràn full rộng kết luận */}
        <div className="w-full bg-gradient-to-br from-phenikaa-dark-blue via-blue-900 to-slate-900 text-white rounded-3xl p-8 lg:p-12 text-center shadow-xl relative overflow-hidden border border-blue-800/50">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-phenikaa-orange/20 rounded-full blur-2xl"></div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-phenikaa-orange text-xs font-semibold mb-3 border border-white/10 backdrop-blur-md relative z-10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ĐỒNG HÀNH CHUYÊN SÂU</span>
          </div>

          <h3 className="font-bold text-xl lg:text-3xl mb-3 relative z-10 text-white tracking-wide uppercase">
            Giải Pháp Toàn Diện Từ Phenikaa
          </h3>
          
          <p className="text-blue-100 max-w-2xl mx-auto leading-relaxed text-xs md:text-sm lg:text-base relative z-10 opacity-90 font-light">
            Từ dữ liệu thô thành chiến lược sức khỏe hoàn chỉnh — Chúng tôi sẽ đồng hành và hướng dẫn bạn từng bước.
          </p>
        </div>

      </div>
    </section>
  )
}