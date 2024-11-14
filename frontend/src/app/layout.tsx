import type { Metadata } from 'next'
import './globals.css'

import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'SAMB Inventory',
  description: 'Simple Inventory Management System',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  )
}
