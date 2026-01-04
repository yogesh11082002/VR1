import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "VR1 – Premium Services in Delhi NCR",
  description: "VR1: Your one-stop solution for Event Management, Cleaning, Manpower, Printing, AC & Electrical Services across Delhi NCR. Trusted by 10,000+ customers.",
  keywords: "Delhi NCR services, event management, cleaning services, manpower, electrician, plumber, AC repair, gardening, printing, packing moving",
  authors: [{ name: "VR1 Services" }],
  openGraph: {
    title: "VR1 – Premium Services in Delhi NCR",
    description: "Your one-stop solution for all home and business services",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#020617" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-dark-bg text-white antialiased overflow-x-hidden`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
