import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from "@/components/layout/Footer";
import React from "react";
import Providers from "@/utils/Providers";
import localFont from 'next/font/local'

const notoSansJP = localFont({ src: '../asset/fonts/NotoSansJP.ttf' })
export const metadata: Metadata = {
  title: 'Health App',
  description: 'for Arent'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
      <Providers>
          <Header/>
            {children}
          <Footer/>
      </Providers>
      </body>
    </html>
  )
}
