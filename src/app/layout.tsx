import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Footer";
import Script from "next/script";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plus_jakarta_sans",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: {
    default: "Zero1 Studio | Website Development, MVP, 3D Experiences & E-commerce Solutions",
    template: "%s | Zero1 Studio – Premium Web Development Agency",
  },
  description:
    "Zero1 Studio – Expert website development company building high-performance MVPs, interactive 3D web experiences, custom e-commerce sites, and intelligent web solutions. From idea to launch – fast, scalable, and conversion-focused.",
  keywords: [
    "zero1studio",
    "zero1 studio",
    "website development",
    "web development company",
    "mvp development",
    "mvp development company",
    "3d web experience",
    "3d website",
    "interactive 3d experience",
    "ecommerce development",
    "e commerce site",
    "custom ecommerce solutions",
    "next.js development",
    "web application development",
    "startup mvp",
  ],
  authors: [{ name: "Zero1 Studio", url: "https://zero1studio.lok1.dev" }],
  creator: "Zero1 Studio",
  publisher: "Zero1 Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://zero1studio.lok1.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Zero1 Studio",
    title: "Zero1 Studio | Website Development, MVP, 3D Experiences & E-commerce",
    description:
      "Professional website development agency specializing in fast MVP builds, immersive 3D web experiences, powerful e-commerce platforms, and modern web solutions.",
    images: [
      {
        url: "/og-image.jpg", // ← make sure this image clearly shows "Zero1 Studio" + services
        width: 1200,
        height: 630,
        alt: "Zero1 Studio - Website Development, MVP, 3D Web Experiences & E-commerce Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero1 Studio | Website, MVP, 3D & E-commerce Development",
    description:
      "Build your vision with Zero1 Studio: high-performance websites, startup MVPs, interactive 3D experiences, and conversion-driven e-commerce platforms.",
    images: ["/og-image.jpg"],
    creator: "@pixelflowui", // ← update to your real handle if different (you had @zero1studio before)
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
  // Add once you have them
  // verification: { google: "your-code-here" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteId = process.env.SILENT_PULSE_WEBSITE_ID;
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Optional: add favicon, manifest, etc. */}
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://silentpulse.vercel.app/script.js" data-website-id={websiteId} strategy="afterInteractive" />
      </head>
      <body className={`${plus_jakarta_sans.variable} ${syne.variable} font-sans antialiased`}>
        <div className="relative min-h-screen bg-background">
          <CustomCursor />
          <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <Navbar />
          {children}
          <div className="fixed bottom-0 left-0 right-0 z-0 h-screen">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}