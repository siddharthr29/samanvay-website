import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Providers } from "@/components/providers"
import { TooltipProvider } from "@/components/ui/tooltip"
import { siteConfig } from "@/data/site-config"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Variable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-clash",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "ai-content-declaration": "This website represents Samanvay Research and Development Foundation, a non-profit technology organization building open-source products for social impact in India.",
  },
  alternates: {
    types: {
      "text/plain": "/llms.txt",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${clashDisplay.variable} font-sans antialiased`}
      >
        <Providers>
          <TooltipProvider>
            <Navbar />
            <main className="min-h-screen pt-16">{children}</main>
            <Footer />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  )
}
