export default function Subheadline() {
  return (
    <section 
      id="subheadline" 
      className="w-full py-16 lg:py-24 bg-slate-50/80 font-['Bai_Jamjuree'] relative overflow-hidden"
    >
      {/* Hiệu ứng đốm màu trang trí nền chuẩn Phenikaa */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* 1. HEADER - Mở đầu câu chuyện */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-phenikaa-dark-blue text-sm font-semibold mb-4 border border-blue-200/50">
            <span className="w-2.5 h-2.5 rounded-full bg-phenikaa-orange animate-pulse"></span>
            GÓC NHÌN QUẢN TRỊ NHÂN SỰ
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-phenikaa-dark-blue leading-tight mb-4">
            Tại Sao Doanh Nghiệp Cần Webinar Này?
          </h2>
          
          {/* Câu dẫn nhập - Cỡ chữ to vừa tầm, hiển thị đẹp trên 1 dòng ở desktop */}
          <p className="text-gray-700 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-4xl mx-auto">
            Trong những năm gần đây, dữ liệu sức khỏe tổng quan của nhân sự ngày càng được nhiều Doanh Nghiệp quan tâm.
          </p>
        </div>

        {/* 2. DÒNG CHẢY HÀNH TRÌNH LIỀN MẠCH (Timeline) */}
        <div className="relative border-l-2 border-blue-200 pl-6 md:pl-10 space-y-10 ml-2 md:ml-6 max-w-4xl mx-auto">
          
          {/* Trạm 1: Thực trạng */}
          <div className="relative group">
            {/* Điểm mốc timeline */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-amber-500 ring-4 ring-slate-50"></div>
            
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4">
              Tuy nhiên, nhiều Doanh nghiệp chỉ đang dừng lại ở các dữ liệu như:
            </h3>

            <div className="space-y-3">
              {[
                "Chi phí y tế đang tăng hay giảm",
                "Tỷ lệ sử dụng bảo hiểm thay đổi theo từng năm",
                "Những nhóm bệnh đang xuất hiện phổ biến hơn trong workforce"
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-amber-300 transition-all">
                  <span className="text-amber-500 font-mono text-base md:text-lg font-bold">0{index + 1}.</span>
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg font-normal">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trạm 2: Điểm bứt phá (Khối nhấn màu Xanh Phenikaa) */}
          <div className="relative group">
            {/* Điểm mốc timeline */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-phenikaa-orange ring-4 ring-slate-50"></div>
            
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-phenikaa-dark-blue to-blue-900 text-white shadow-xl relative overflow-hidden">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-phenikaa-orange uppercase tracking-wide mb-4 leading-snug">
                NHƯNG ANH/CHỊ CÓ BIẾT DỮ LIỆU ĐÓ CÓ THỂ TRẢ LỜI ĐƯỢC CÁC CÂU HỎI QUAN TRỌNG HƠN?
              </h3>

              <div className="space-y-3.5">
                {[
                  "Đâu là những rủi ro sức khỏe đang hình thành trong đội ngũ?",
                  "Nhóm nhân sự nào cần được quan tâm nhiều hơn?",
                  "Những xu hướng hiện tại sẽ tác động như thế nào đến chi phí và năng suất lao động trong tương lai"
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-phenikaa-orange font-bold text-base md:text-lg leading-none mt-1">➔</span>
                    <span className="text-blue-50 text-sm sm:text-base md:text-lg font-normal leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trạm 3: Giá trị & Hook chốt */}
          <div className="relative group">
            {/* Điểm mốc timeline */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-phenikaa-dark-blue ring-4 ring-slate-50"></div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg font-normal">
                Khi được kết nối và phân tích đúng cách, dữ liệu không chỉ phản ánh những gì đã xảy ra mà còn giúp doanh nghiệp nhìn thấy các tín hiệu sớm của rủi ro, tối ưu chương trình phúc lợi và đưa ra các quyết định phù hợp hơn trong quản lý sức khỏe workforce.
              </p>

              <div className="p-5 md:p-6 rounded-2xl bg-orange-50/90 border-l-4 border-phenikaa-orange border-y border-r border-orange-200/70 shadow-sm">
                <p className="text-phenikaa-dark-blue text-base sm:text-lg md:text-xl font-bold leading-relaxed">
                  Trong webinar chuyên sâu này, chuyên gia sức khỏe từ Phenikaa sẽ chia sẻ cách để các Doanh Nghiệp, Nhân sự, người phụ trách sức khỏe đội ngũ có thể làm việc với dữ liệu sức khỏe tổng quan một cách hiệu quả.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}