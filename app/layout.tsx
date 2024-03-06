import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://portfolio-site-brown-omega.vercel.app/"
  ),
  title: "Portfolio Adrien PEAN",
  description: "Developer Portfolio remix by Adrien PEAN",
  keywords: ["Developer", "Portfolio", "Developer Portflio", "Adrien PEAN"],
  openGraph: {
    title: "Adrien PEAN",
    description: "Web developer",
    images: "/OpenGraph.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
