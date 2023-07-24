import './globals.css'
import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import { Footer } from '@/components/footer'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
