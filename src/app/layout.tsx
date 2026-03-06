import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { RouteLoader } from "@/components/layout/route-loader";
import { RevealOnScroll } from "@/components/layout/reveal-on-scroll";
import { schoolInfo } from "@/content/school";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://standardschoolsilorin.vercel.app"),
  title: {
    default: `${schoolInfo.name} | Primary & Secondary School in Ilorin`,
    template: `%s | ${schoolInfo.name}`,
  },
  description: schoolInfo.description,
  openGraph: {
    title: schoolInfo.name,
    description: schoolInfo.description,
    type: "website",
    images: [schoolInfo.logo],
  },
  icons: {
    icon: schoolInfo.logo,
    shortcut: schoolInfo.logo,
    apple: schoolInfo.logo,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <RouteLoader />
        <RevealOnScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
