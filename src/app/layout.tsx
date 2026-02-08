import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Footer";

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
    default: "Zero1 Studio | Web Dev Chatbot Generation & Power BI Solutions",
    template: "%s | Zero1 Studio",
  },
  description:
    "Professional web development chatbot generation services and Power BI solutions. Build intelligent chatbots for your web applications and leverage Power BI for data-driven insights.",
  keywords: [
    "web development chatbot",
    "chatbot generation",
    "Power BI",
    "business intelligence",
    "web dev chatbot",
    "AI chatbot development",
    "custom chatbot solutions",
    "Power BI consulting",
    "data analytics",
    "web development services",
  ],
  authors: [{ name: "Zero1 Studio" }],
  creator: "Zero1 Studio",
  publisher: "Zero1 Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://zero1studio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Zero1 Studio",
    title: "Zero1 Studio | Web Dev Chatbot Generation & Power BI Solutions",
    description:
      "Professional web development chatbot generation services and Power BI solutions. Build intelligent chatbots for your web applications and leverage Power BI for data-driven insights.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zero1 Studio - Web Dev Chatbot Generation & Power BI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero1 Studio | Web Dev Chatbot Generation & Power BI Solutions",
    description:
      "Professional web development chatbot generation services and Power BI solutions. Build intelligent chatbots for your web applications and leverage Power BI for data-driven insights.",
    images: ["/og-image.jpg"],
    creator: "@zero1studio",
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
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plus_jakarta_sans.variable} ${syne.variable} font-sans antialiased`}>
        <div className="relative min-h-screen bg-background">
          <CustomCursor />

          <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

          <Navbar />

          {/* Main Content Wrapper */}
          {children}

          {/* Footer Reveal Layer */}
          <div className="fixed bottom-0 left-0 right-0 z-0 h-screen">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
