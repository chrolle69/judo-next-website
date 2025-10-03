import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Anybody } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


const anybody = Anybody({
  variable: "--font-anybody",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Celina Guldbrandsen - Judo",
  description: "to be filled",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${anybody.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
