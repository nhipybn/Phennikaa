'use client'

// Đường dẫn trỏ thẳng tới file trong thư mục public/
const AGENDA_AI_IMAGE = "/anhtuvan.png"

export default function Agenda() {
  const agendaItems = [
    {
      title: 'Dữ liệu sức khỏe là gì?',
      description: 'Những dữ liệu nào có thể khai thác để quản lý sức khỏe workforce'
    },
    {
      title: 'Khai thác giá trị dữ liệu',
      description: 'Cách khai thác hiệu quả dữ liệu sức khỏe đang có sẵn'
    },
    {
      title: 'Phân nhóm ưu tiên',
      description: 'Phân nhóm đúng đối tượng cần quan tâm hơn'
    },
    {
      title: 'Xây dựng phúc lợi',
      description: 'Chương trình phúc lợi dựa trên bằng chứng và đo lường'
    },
    {
      title: 'Dự báo xu hướng',
      description: 'Dùng xu hướng để dự báo và lập kế hoạch tương lai'
    },
    {
      title: 'Hỏi & Đáp',
      description: 'Phiên hỏi đáp trực tiếp với chuyên gia Phenikaa'
    }
  ]

  return (
    <section id="agenda" className="w-full min-h-screen flex items-center py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/20 to-white font-['Bai_Jamjuree']">
      <div className="w-full px-6 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-phenikaa-blue mb-3 tracking-wide uppercase">
            Nội Dung Chi Tiết
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-phenikaa-dark-blue mb-3">
            Chương Trình Webinar
          </h2>
          <div className="w-20 h-1 bg-phenikaa-orange rounded-full mx-auto"></div>
        </div>

        {/* SPLIT SCREEN LAYOUT - Full Width */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
          
          {/* CỘT TRÁI: ẢNH minh họa / anhtuvan.png */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-gradient-to-br from-blue-50 to-indigo-50/50 group flex items-center justify-center">
            
            <img
              src={AGENDA_AI_IMAGE}
              alt="Tư vấn dữ liệu sức khỏe Phenikaa MEC"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />

            {/* Placeholder dự phòng nếu chưa tìm thấy file ảnh */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center -z-10">
              <span className="text-6xl mb-4">📊</span>
              <p className="font-bold text-phenikaa-dark-blue text-base mb-1">Ảnh Tư Vấn</p>
              <p className="text-xs text-gray-500">Đang tìm file public/anhtuvan.png...</p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-phenikaa-dark-blue/20 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* CỘT PHẢI: DANH SÁCH 6 PHẦN CHỮ TO */}
          <div className="lg:col-span-7 space-y-4 lg:space-y-5">
            {agendaItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white p-6 lg:p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-phenikaa-blue transition-all duration-300 flex items-start gap-4 lg:gap-6"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-phenikaa-dark-blue text-white font-bold text-lg lg:text-xl flex items-center justify-center shrink-0 shadow-md group-hover:bg-phenikaa-orange transition-colors">
                  0{index + 1}
                </div>

                <div>
                  <h3 className="font-bold text-phenikaa-dark-blue text-lg lg:text-2xl mb-1.5 group-hover:text-phenikaa-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}