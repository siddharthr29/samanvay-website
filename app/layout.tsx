import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BottomNav } from "@/components/layout/bottom-nav"
import { Providers } from "@/components/providers"
import { TooltipProvider } from "@/components/ui/tooltip"
import { siteConfig } from "@/data/site-config"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Samanvay Foundation — Open Source Technology for Social Good",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Building open-source digital infrastructure for India's social sector. 60+ nonprofits. 500,000+ lives. 6 products.",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Samanvay Foundation — Open Source Technology for Social Good",
    description:
      "Building open-source digital infrastructure for India's social sector.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samanvay Foundation",
    description:
      "Open-source digital infrastructure for India's social sector.",
  },
  robots: { index: true, follow: true },
  alternates: { types: { "text/plain": "/llms.txt" } },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        <Providers>
          <TooltipProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <BottomNav />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  )
}
