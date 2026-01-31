import React from "react"
import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/lib/auth-context'

const _poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
});
const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'choudhary Interiors | Premium Interior Design Solutions',
  description: 'End-to-end interior design solutions for residential and commercial spaces. Transform your space with our expert designers.',
  keywords: 'interior design, home interiors, modular kitchen, bedroom design, commercial interiors, interior designers',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
