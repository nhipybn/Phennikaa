import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Montserrat, Bai_Jamjuree } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin', 'vietnamese'],
  variable: '--font-montserrat',
  weight: ['400', '700'],
})

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-bai-jamjuree',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Phenikaa Medical Clinic - Phòng khám đa khoa',
  description: 'Phòng khám đa khoa Phenikaa - Nơi tin cậy cho sức khỏe của bạn và công ty',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0066cc' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="vi"
      className={`${baiJamjuree.variable} ${montserrat.variable} bg-white`}
    >
      <body className="antialiased bg-white text-gray-800">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
