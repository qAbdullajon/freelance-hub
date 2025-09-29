import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Freelance Hub IT - Biznesingizni Raqamli Kelajakka Olib Chiqamiz",
  description:
    "Biznes jarayonlarini avtomatlashtirish va samaradorlikni oshirish orqali muvaffaqiyatga erishish uchun ishonchli hamkoringiz.",
  keywords: [
    "Freelance Hub IT",
    "raqamli transformatsiya",
    "IT xizmatlari",
    "avtomatlashtirish",
    "veb dasturlash",
    "marketing yechimlari",
    "raqamli biznes",
  ],
  authors: [{ name: "Freelance Hub IT" }],
  generator: "Next.js",
  openGraph: {
    title: "Freelance Hub IT - Biznesingizni Raqamli Kelajakka Olib Chiqamiz",
    description:
      "Biznes jarayonlarini avtomatlashtirish va samaradorlikni oshirish orqali muvaffaqiyatga erishish uchun ishonchli hamkoringiz.",
    url: "https://freelancehub.uz",
    siteName: "Freelance Hub IT",
    images: [
      {
        url: "https://freelancehub.uz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Freelance Hub IT - Raqamli yechimlar",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Hub IT - Biznesingizni Raqamli Kelajakka Olib Chiqamiz",
    description:
      "Biznes jarayonlarini avtomatlashtirish va samaradorlikni oshirish orqali muvaffaqiyatga erishish uchun ishonchli hamkoringiz.",
    images: ["https://freelancehub.uz/og-image.png"],
    creator: "@freelancehub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://freelancehub.uz",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
