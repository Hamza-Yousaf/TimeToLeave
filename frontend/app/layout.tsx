import type { Metadata } from "next";
import { Arimo, Geist_Mono } from "next/font/google";
import "./globals.css";

const ArimoFont = Arimo({
  variable: "--font-Arimo",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart Leave",
  description: "The go to solution for managing commutes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ArimoFont.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
