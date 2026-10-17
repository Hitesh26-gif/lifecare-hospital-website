import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { UnofficialNotice } from "@/components/unofficial-notice";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Life Care Multispeciality Hospital — Website Redesign Concept",
  description:
    "An independent, unofficial website redesign concept for Life Care Multispeciality Hospital, Vichumbe, Panvel, Maharashtra. All details shown are unverified and require confirmation with the hospital before use.",
  keywords: [
    "Life Care Multispeciality Hospital",
    "Panvel",
    "hospital website",
    "redesign concept",
    "unofficial prototype",
  ],
  authors: [{ name: "Independent design concept — not affiliated with the hospital" }],
  robots: "noindex, nofollow",
  openGraph: {
    title: "Life Care Multispeciality Hospital — Website Redesign Concept",
    description:
      "An independent, unofficial website redesign concept. All details are unverified and require confirmation with the hospital.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-cream text-ink antialiased">
        <UnofficialNotice />
        {children}
      </body>
    </html>
  );
}
