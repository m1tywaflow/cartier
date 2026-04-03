import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FirstVisitLoader from "@/components/organisms/LoadingScreen/FirstVisitLoader";
import LenisProvider from "@/components/providers/LenisProvider";
import { Header } from "@/components/organisms/Header/Header";
import { Footer } from "@/components/organisms/Footer/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cartier",
  description: "Cartier web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
          <Header />
          <FirstVisitLoader>{children}</FirstVisitLoader>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
