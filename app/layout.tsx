import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thalys Group | Consultoría Comercial Estratégica',
  description: 'Transformamos desafíos comerciales en oportunidades de crecimiento. Metodologías probadas que han impulsado +200% en ventas para empresas en menos de 6 meses.',
  keywords: 'consultoría comercial, estrategia empresarial, transformación digital, Thalys Group',
  authors: [{ name: 'Thalys Group' }],
  openGraph: {
    title: 'Thalys Group | Consultoría Comercial Estratégica',
    description: 'Transformamos desafíos comerciales en oportunidades de crecimiento',
    type: 'website',
    locale: 'es_ES',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}