'use client'

import Image from 'next/image'
import { Heart, Briefcase, User } from 'lucide-react'

// Đường dẫn ảnh trong thư mục public/
const SPEAKER_1_IMAGE = "/speaker1.jpg" // Ảnh Chuyên gia 1
const SPEAKER_2_IMAGE = "/speaker2.jpg" // Ảnh Chuyên gia 2

export default function Speakers() {
  const speakers = [
    {
      name: 'Chuyên gia Sức khỏe',
      title: 'Phenikaa Medical Group',
      bio: 'Với hơn 10 năm kinh nghiệm trong lĩnh vực y tế doanh nghiệp & tư vấn giải pháp sức khỏe tập trung.',
      image: SPEAKER_1_IMAGE,
      Icon: Heart
    },
    {
      name: 'Chuyên gia Nhân sự',
      title: 'Phenikaa HR Solutions',
      bio: 'Giàu kinh nghiệm trong quản lý nhân sự, hoạch định ngân sách và tối ưu gói phúc lợi doanh nghiệp.',
      image: SPEAKER_2_IMAGE,
      Icon: Briefcase
    }
  ]

  return (
    <section id="speakers" className="w-full min-h-screen flex items-center py-20 lg:py-32 bg-white font-['Bai_Jamjuree']">
      <div className="w-full px-6 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-phenikaa-dark-blue mb-4">
            Diễn Giả Đồng Hành
          </h2>
          <div className="w-20 h-1 bg-phenikaa-orange rounded-full mx-auto"></div>
        </div>

        {/* Speakers Grid - Mở rộng full width cho 2 cột card diễn giả */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 w-full mb-16">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-blue-50/60 via-white to-white p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center flex flex-col items-center justify-between relative overflow-hidden"
            >
              {/* Vạch màu trang trí trên đỉnh card */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-phenikaa-blue to-phenikaa-dark-blue opacity-80"></div>

              <div className="w-full flex flex-col items-center">
                
                {/* KHUNG ẢNH SPEAKER */}
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Tự động chuyển sang Avatar Mặc định nếu chưa có ảnh
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  {/* Placeholder Avatar khi chưa chèn ảnh */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-phenikaa-blue opacity-40 -z-0">
                    <User className="w-20 h-20" />
                  </div>

                  {/* Small Icon Badge góc avatar */}
                  <div className="absolute bottom-2 right-2 w-10 h-10 bg-phenikaa-dark-blue text-white rounded-full flex items-center justify-center shadow-md border-2 border-white">
                    <speaker.Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Tên Diễn Giả */}
                <h3 className="font-bold text-phenikaa-dark-blue text-2xl md:text-3xl mb-2">
                  {speaker.name}
                </h3>

                {/* Role / Unit Badge */}
                <span className="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-blue-100/80 text-phenikaa-blue mb-4">
                  {speaker.title}
                </span>

                {/* Tiểu sử / Bio */}
                <p className="text-gray-600 leading-relaxed text-base md:text-lg font-normal mb-6">
                  {speaker.bio}
                </p>
              </div>

              {/* Dải phân cách & Cam kết */}
              <div className="w-full pt-5 border-t border-gray-100">
                <p className="text-sm text-gray-500 font-medium">
                  💡 Chia sẻ kiến thức thực tiễn & giải pháp cụ thể từ doanh nghiệp
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner Chốt Hạ - Tràn full width */}
        <div className="w-full bg-gradient-to-r from-blue-50 via-indigo-50/70 to-blue-50 p-8 md:p-12 rounded-3xl border border-blue-100/80 text-center shadow-sm relative overflow-hidden">
          
          {/* Vạch màu trang trí phía trên */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-phenikaa-orange rounded-b-full"></div>

          <p className="text-phenikaa-dark-blue text-lg md:text-2xl font-bold leading-relaxed max-w-5xl mx-auto">
            Các vị chuyên gia từ <span className="text-phenikaa-blue">Phenikaa</span> sẽ trực tiếp chia sẻ phương pháp làm việc với dữ liệu sức khỏe tổng quan một cách hiệu quả & tối ưu nhất cho Doanh Nghiệp.
          </p>
        </div>

      </div>
    </section>
  )
}