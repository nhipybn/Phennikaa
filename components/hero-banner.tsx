'use client'

import Image from 'next/image'

export default function HeroBanner() {
  return (
    <section className="relative w-full bg-phenikaa-dark-blue overflow-hidden">
      {/* Khối Banner Tràn Màn Hình Giữ Nguyên Tỉ Lệ Không Bị Kéo Méo Ảnh */}
      <div className="w-full flex justify-center items-center">
        <Image
          src="/WEBINAR ONLINE.png"
          alt="WEBINAR ONLINE"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain block"
          priority
        />
      </div>
    </section>
  )
}