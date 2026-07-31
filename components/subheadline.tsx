export default function Subheadline() {
  return (
    <section 
      id="subheadline" 
      className="w-full min-h-screen flex items-center py-16 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 font-['Bai_Jamjuree']"
    >
      <div className="w-full px-6 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-phenikaa-dark-blue leading-tight mb-4">
            Tại Sao Doanh Nghiệp Cần Webinar Này?
          </h2>

          <p className="text-gray-700 font-normal text-base md:text-lg">
            Trong những năm gần đây, dữ liệu sức khỏe tổng quan của nhân sự ngày càng được nhiều Doanh Nghiệp quan tâm.
          </p>
        </div>

        {/* 2-Column Comparison Grid - Tự động mở rộng Full chiều rộng */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 w-full">
          
          {/* Cột trái */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg shrink-0">
                !
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-800">
                Tuy nhiên, nhiều Doanh nghiệp chỉ đang dừng lại ở các dữ liệu như:
              </h3>
            </div>

            <ul className="space-y-4">
              {[
                "Chi phí y tế đang tăng hay giảm",
                "Tỷ lệ sử dụng bảo hiểm thay đổi theo từng năm",
                "Những nhóm bệnh đang xuất hiện phổ biến hơn trong workforce"
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                  <span className="text-gray-700 text-sm md:text-base font-normal">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột phải */}
          <div className="bg-gradient-to-br from-phenikaa-dark-blue to-blue-900 p-8 md:p-10 rounded-2xl text-white shadow-xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-phenikaa-orange/20 text-phenikaa-orange flex items-center justify-center font-bold text-lg shrink-0">
                ?
              </div>
              <h3 className="text-base md:text-xl font-bold text-white uppercase tracking-wide">
                NHƯNG ANH/CHỊ CÓ BIẾT DỮ LIỆU ĐÓ CÓ THỂ TRẢ LỜI ĐƯỢC CÁC CÂU HỎI QUAN TRỌNG HƠN?
              </h3>
            </div>

            <ul className="space-y-4 relative z-10">
              {[
                "Đâu là những rủi ro sức khỏe đang hình thành trong đội ngũ?",
                "Nhóm nhân sự nào cần được quan tâm nhiều hơn?",
                "Những xu hướng hiện tại sẽ tác động như thế nào đến chi phí và năng suất lao động trong tương lai"
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3 bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                  <span className="w-5 h-5 rounded-full bg-phenikaa-orange text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-blue-50 text-sm md:text-base font-normal">{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Callout Banner */}
        <div className="w-full bg-gradient-to-r from-blue-50 via-indigo-50/70 to-blue-50 p-8 lg:p-12 rounded-2xl border border-blue-100/80 shadow-sm text-center">
          
          {/* Đoạn phân tích */}
          <p className="text-gray-700 leading-relaxed text-base md:text-lg font-normal mb-6 max-w-5xl mx-auto">
            Khi được kết nối và phân tích đúng cách, dữ liệu không chỉ phản ánh những gì đã xảy ra mà còn giúp doanh nghiệp nhìn thấy các tín hiệu sớm của rủi ro, tối ưu chương trình phúc lợi và đưa ra các quyết định phù hợp hơn trong quản lý sức khỏe workforce.
          </p>

          <div className="w-20 h-1 bg-phenikaa-orange/50 mx-auto my-6 rounded-full"></div>

          {/* Đoạn HOOK chính */}
          <p className="text-phenikaa-dark-blue text-lg md:text-2xl font-bold leading-relaxed max-w-5xl mx-auto">
            Trong webinar chuyên sâu này, chuyên gia sức khỏe từ Phenikaa sẽ chia sẻ cách để các Doanh Nghiệp, Nhân sự, người phụ trách sức khỏe đội ngũ có thể làm việc với dữ liệu sức khỏe tổng quan một cách hiệu quả.
          </p>
        </div>

      </div>
    </section>
  )
}