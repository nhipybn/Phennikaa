import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="headline-primary text-3xl md:text-4xl lg:text-5xl mb-6">
              Webinar Online: Báo cáo tổng hợp sức khỏe nói cho Doanh Nghiệp biết điều gì?
            </h1>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Cách phòng ngừa rủi ro, tối ưu phúc lợi và cải thiện sức khỏe đội ngũ bằng dữ liệu sức khỏe tổng hợp.
            </p>
            <div className="bg-phenikaa-light-blue p-6 rounded-lg mb-8 space-y-3">
              <div>
                <p className="text-sm text-gray-600">Ngày:</p>
                <p className="font-bold text-phenikaa-blue text-lg">[Thời gian đang confirm]</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Hình thức:</p>
                <p className="font-bold text-phenikaa-blue">Webinar Online</p>
              </div>
            </div>
            <button className="btn-primary text-lg">
              Đăng ký ngay
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J2qAH4Pxfl7ZztSOtkDgRmNeD3rMlW.png"
              alt="Thành phần đó hoa hỗ trợ"
              width={400}
              height={500}
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
