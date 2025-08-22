import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VR1 – Services in Delhi NCR",
  description: "VR1: Event Management, Cleaning, Manpower, Printing, AC & Electrical Services in Delhi NCR",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
