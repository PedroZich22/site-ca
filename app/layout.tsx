import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Merriweather_Sans } from "next/font/google";
import { MegaNav } from "@/components/layout/mega-nav";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Centro Acadêmico Tim Berners-Lee - IFSP",
  description:
    "Centro Acadêmico do curso de Sistemas de Informação do Instituto Federal de São Paulo",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${merriweather.variable}`}>
      <body className={`${inter.className} bg-zinc-50`}>
        <MegaNav />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
