import type { Metadata } from "next";
import { Geist, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oprec HIMARPL 2026",
  description: "Open Recruitment HIMARPL 2026",
  icons: [{ rel: "icon", url: "/icon.svg" }],
};

import { fontE, fontI, fontJ } from "./fonts";
import { ReactLenis } from "@/components/react-lenis";
import { Loading } from "@/components/providers/loading";
import Header from "@/components/common/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${montserrat.variable} ${fontE.variable} ${fontI.variable} ${fontJ.variable}`}>
      <body className="bg-[#072359]">
        <Header />
        <Loading>
          <ReactLenis>{children}</ReactLenis>
        </Loading>
      </body>
    </html>
  );
}
