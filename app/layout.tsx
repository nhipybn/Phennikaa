import Script from 'next/script'
import './globals.css' // hoặc các import sẵn có của bạn

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        {/* Nhúng mã Tracking BowNow trực tiếp vào thẻ head */}
        <Script
          id="_bownow_ts"
          strategy="beforeInteractive" // Nạp ngay khi tải trang (ưu tiên thẻ head)
          src="https://contents.bownow.jp/js/UTC_1d9e0c1d1dcfe0dd1cba/trace.js"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}