import type { Metadata } from "next";
import "./globals.css";
import { Nav, Footer } from "@/components/ui";
import { Source_Serif_4, Outfit } from "next/font/google";

/* ============================
   Fonts
============================ */
const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

/* ============================
   SEO Metadata
============================ */
export const metadata: Metadata = {
  metadataBase: new URL("https://archeon.netlify.app"),
  title: {
    default: "Archeon Property & Design — Property Intelligence. Designed for Endurance.",
    template: "%s | Archeon Property & Design",
  },
  description:
    "Archeon is an integrated property and design consultancy guiding clients from land and investment decisions through architectural vision to complete design execution. One team. One vision. One partner.",
  keywords: [
    "property consultancy",
    "architecture firm",
    "interior design",
    "exterior design",
    "property advisory",
    "real estate consulting",
    "integrated design consultancy",
    "architectural design",
    "property intelligence",
    "East Africa architecture",
    "Kampala architect",
    "Nairobi design",
    "property feasibility",
    "highest and best use analysis",
    "commercial property strategy",
    "residential architecture",
    "mixed-use development",
    "climate-responsive design",
  ],
  openGraph: {
    title: "Archeon Property & Design — Property Intelligence. Designed for Endurance.",
    description:
      "An integrated consultancy that guides clients from land and investment decisions through architectural vision to complete design execution. We turn property potential into enduring value.",
    url: "https://archeon.netlify.app",
    siteName: "Archeon Property & Design",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Archeon Property & Design — Property Intelligence. Designed for Endurance.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Archeon Property & Design",
    description:
      "An integrated property and design consultancy. Property intelligence, architectural thinking, and design execution — unified under one accountable team.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ============================
   Root Layout
============================ */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSerif4.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-[#FAF8F4] text-[#1E1E1E]" style={{ fontFamily: "var(--font-body)" }}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
