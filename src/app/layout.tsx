import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { schoolInfo } from "@/content/school";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const splineSansMono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-archive",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://standardschoolsilorin.com"),
  title: {
    default: `${schoolInfo.name} | Primary & Secondary School in Ilorin`,
    template: `%s | ${schoolInfo.name}`,
  },
  description: schoolInfo.description,
  openGraph: {
    title: schoolInfo.name,
    description: schoolInfo.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: schoolInfo.name,
    description: schoolInfo.description,
  },
  icons: {
    icon: schoolInfo.logo,
    shortcut: schoolInfo.logo,
    apple: schoolInfo.logo,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSans.variable} ${splineSansMono.variable}`}
    >
      <body suppressHydrationWarning>
        <SmoothScroll>
          <Header />
          <main id="content">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
