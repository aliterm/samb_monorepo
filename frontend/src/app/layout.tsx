import type { Metadata } from 'next'
import './globals.css'

import { Nunito } from 'next/font/google'
import { BsBoxes } from 'react-icons/bs'
import SidebarComponent from './components/sidebar'

const nunito = Nunito({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: { default: 'SAMB Inventory', template: '%s | SAMB Inventory' },
  description: 'Simple Inventory Management System',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <main className="min-h-screen">
          <div className="flex shadow-lg mb-1">
            <div className="container mx-auto py-5">
              <h1 className="text-4xl font-bold">
                <BsBoxes className="inline align-top mr-2" />
                <span>SAMB Inventory</span>
              </h1>
              <h2 className="text-xl font-medium text-cyan-600">Simple Inventory Management System</h2>
            </div>
          </div>
          <div className="flex gap-x-5">
            <SidebarComponent />
            <div className="pt-2">{children}</div>
          </div>
        </main>
      </body>
    </html>
  )
}
