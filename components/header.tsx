'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'

export default function Header() {
  useEffect(() => {
    const scriptId = '_bownow_cs_sid_1d9e0c1d1dcfe0dd1cba'

// Khởi tạo và nạp Script nhúng Form của BowNow sau khi div chứa đã sẵn sàng
   const bownowScript = document.createElement('script')
   bownowScript.id = '_bownow_cs_sid_1d9e0c1d1dcfe0dd1cba'
   bownowScript.charset = 'utf-8'
   bownowScript.src = 'https://contents.bownow.jp/forms/sid_1d9e0c1d1dcfe0dd1cba/trace.js'
   bownowScript.async = true


   // Đính thẳng vào đầu trang để kích hoạt luồng vẽ Form
   document.getElementsByTagName('head')[0].appendChild(bownowScript)


   return () => {
     // Dọn dẹp script khi hủy component để tránh trùng lặp dữ liệu
     const oldScript = document.getElementById('_bownow_cs_sid_1d9e0c1d1dcfe0dd1cba')
     if (oldScript && document.head.contains(oldScript)) {
       document.head.removeChild(oldScript)
     }
   }
 }, [])


 return (

    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/Logo.png"
              alt="PhenikaaMEC"
              width={260}
              height={80}
              className="h-12 md:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Navigation Menu - Right aligned, Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="#subheadline" className="text-gray-600 text-sm font-heading font-bold hover:text-phenikaa-blue transition">
              Về Webinar
            </Link>
            <Link href="#audience" className="text-gray-600 text-sm font-heading font-bold hover:text-phenikaa-blue transition">
              Đối tượng tham dự
            </Link>
            <Link href="#why" className="text-gray-600 text-sm font-heading font-bold hover:text-phenikaa-blue transition">
              Lý do không thể bỏ qua
            </Link>
            <Link href="#problems" className="text-gray-600 text-sm font-heading font-bold hover:text-phenikaa-blue transition">
              Giải quyết vấn đề về
            </Link>
            <Link href="#speakers" className="text-gray-600 text-sm font-heading font-bold hover:text-phenikaa-blue transition">
              Diễn giả
            </Link>
            <Link href="#agenda" className="text-gray-600 text-sm font-heading font-bold hover:text-phenikaa-blue transition">
              Nội dung Hội Thảo
            </Link>
            <button 
              onClick={() => {
                const formElement = document.getElementById('form-section') || document.getElementById('registration-form')
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-6 py-2 bg-phenikaa-blue text-white rounded-lg font-heading font-bold text-sm hover:bg-phenikaa-dark-blue transition duration-200 cursor-pointer"
            >
              Đăng ký
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition">
            <Menu className="w-6 h-6 text-phenikaa-blue" />
          </button>
        </div>
      </div>
    </header>
  )
}