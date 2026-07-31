'use client'

import { TrendingUp, Users, Target, Zap, Brain, AlertCircle } from 'lucide-react'
import Image from 'next/image'

export default function Problems() {
  const problems = [
    {
      title: 'Khai thác dữ liệu',
      description: 'Cách khai thác đúng giá trị của dữ liệu tổng quan đang có sẵn',
      Icon: TrendingUp
    },
    {
      title: 'Tín hiệu sớm',
      description: 'Nhận diện tín hiệu sớm: Bệnh chuyển hóa, cơ xương khớp, sức khỏe tinh thần',
      Icon: AlertCircle
    },
    {
      title: 'Phân nhóm ưu tiên',
      description: 'Cách phân nhóm đúng đối tượng: Nhóm nhân sự nào cần quan tâm hơn',
      Icon: Target
    },
    {
      title: 'Xây dựng phúc lợi',
      description: 'Phúc lợi dựa trên bằng chứng và đo lường được',
      Icon: Zap
    },
    {
      title: 'Dự báo xu hướng',
      description: 'Dùng xu hướng hiện tại để dự báo và lập kế hoạch chủ động',
      Icon: Brain
    },
    {
      title: 'Tránh bị động',
      description: 'Từ dữ liệu lịch sử sang chiến lược chủ động và lựa chọn khôn ngoan',
      Icon: Users
    }
  ]

  return (
    <section id="problems" className="w-full min-h-screen flex items-center py-20 lg:py-32 bg-gradient-to-b from-white to-orange-50/40 font-['Bai_Jamjuree']">
      <div className="w-full px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-phenikaa-dark-blue mb-4">
            Webinar Giải Quyết Vấn Đề Gì?
          </h2>
          <div className="w-20 h-1 bg-phenikaa-orange rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            6 vấn đề cốt lõi mà bất kỳ doanh nghiệp nào cũng gặp phải khi quản lý sức khỏe nhân sự
          </p>
        </div>

        {/* Image Section - Tràn rộng chiều ngang */}
        <div className="mb-16 relative w-full aspect-[21/9] lg:aspect-[24/9] rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
          <Image
            src="/cosovatchat.png"
            alt="Cơ sở vật chất Bệnh viện Phenikaa MEC"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
          {/* Lớp phủ mờ hạt nhẹ giúp tăng tính thẩm mỹ */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
          {/* Badge mô tả đè lên góc ảnh */}
          <div className="absolute bottom-6 left-8 text-white">
            <p className="text-base md:text-lg font-bold tracking-wide uppercase">Cơ Sở Vật Chất & Trang Thiết Bị Modern</p>
            <p className="text-sm text-blue-100 opacity-90">Bệnh viện / Phòng khám Đa khoa Phenikaa MEC</p>
          </div>
        </div>

        {/* Problems Grid - Mở rộng 3 cột tràn viền */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 w-full">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-white p-8 lg:p-10 rounded-2xl border border-gray-100 hover:border-phenikaa-orange shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-phenikaa-orange to-orange-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <problem.Icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-phenikaa-dark-blue mb-3 text-xl group-hover:text-phenikaa-orange transition-colors">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Highlight - Tràn full rộng */}
        <div className="w-full bg-gradient-to-r from-phenikaa-dark-blue via-blue-900 to-phenikaa-dark-blue text-white rounded-3xl p-8 lg:p-14 text-center shadow-xl relative overflow-hidden">
          {/* Đốm màu trang trí chìm */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-phenikaa-orange/20 rounded-full blur-2xl"></div>

          <h3 className="font-bold text-2xl lg:text-4xl mb-4 relative z-10 text-white drop-shadow-md tracking-wide uppercase">
            Giải Pháp Toàn Diện Từ Phenikaa
          </h3>
          <p className="text-blue-100 max-w-3xl mx-auto leading-relaxed text-base md:text-lg relative z-10 opacity-90">
            Từ dữ liệu thô thành chiến lược sức khỏe hoàn chỉnh — Chúng tôi sẽ hướng dẫn từng bước.
          </p>
        </div>

      </div>
    </section>
  )
}