import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-phenikaa-dark-blue to-phenikaa-blue text-white relative overflow-hidden">
      {/* Decorative gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-phenikaa-orange to-transparent opacity-10 rounded-full blur-3xl"></div>
      
      <div className="w-full px-6 lg:px-12 py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            {/* Tăng padding và kích thước logo to rõ ràng */}
            <div className="bg-white p-4 md:p-5 rounded-xl w-fit mb-6 shadow-md">
              <Image
                src="/Logo.png"
                alt="Phenikaa Medical Clinic"
                width={260}
                height={80}
                className="h-14 md:h-16 w-auto object-contain"
                priority
              />
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Phòng khám đa khoa Phenikaa - Cung cấp dịch vụ y tế chất lượng cao với tầm nhìn chăm sóc sức khỏe toàn diện.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 capitalize">Về chúng tôi</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Chuyên khoa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dịch vụ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tìm bác sĩ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tin tức
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 capitalize">Dịch vụ</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Khám tổng quát
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Khám chuyên khoa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Xét nghiệm
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Chụp X-quang
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Siêu âm
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4 capitalize">Liên hệ</h4>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Phenikaa Medical Clinic</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="tel:1900886648" className="hover:text-white transition-colors">
                  1900 886648
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:info@phenikaamec.com" className="hover:text-white transition-colors">
                  info@phenikaamec.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>24/7</span>
              </li>
            </ul>
          </div>
        </div>

          <div className="border-t border-blue-400 border-opacity-30 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center text-blue-100 text-sm gap-6">
              <p>
                © 2024 Phenikaa Medical Clinic. Tất cả quyền được bảo lưu.
              </p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">
                  Chính sách bảo mật
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Điều khoản sử dụng
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Liên hệ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}