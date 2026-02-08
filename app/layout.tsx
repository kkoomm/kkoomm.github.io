import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KKOOMM | Personal Website",
  description: "Personal website of KKOOMM",
};

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${libreBaskerville.variable}`}>
        <Header />
        <main style={{ minHeight: 'calc(100vh - var(--header-height))' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
