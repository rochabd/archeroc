import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik_Storm } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubikStorm = Rubik_Storm({
  weight: ["400"],
  variable: "--font-rubik-storm",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArcheROC",
  description: "Ground work for basic disciplines of focused living!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubikStorm.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
