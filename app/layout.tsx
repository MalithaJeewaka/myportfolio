import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";
// import Navbar from "@/components/Navbar";
import Header from "@/components/Header/index";

import StickyCursor from "@/components/stickyCursor/StickyCursor";

import CustomFont from "next/font/local";

const clashDisplay = CustomFont({
  src: [
    {
      path: "fonts/clash-display/ClashDisplay-Extralight.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "fonts/clash-display/ClashDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "fonts/clash-display/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/clash-display/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/clash-display/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "fonts/clash-display/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display", // Optional: CSS variable for global usage
});

const poppins = Poppins({
  subsets: ["latin"], // Choose the subsets you need
  weight: ["300", "400", "500", "600", "700"], // Specify the font weights you want
});

const bebas = Bebas_Neue({
  subsets: ["latin"], // Choose the subsets you need
  weight: ["400"], // Specify the font weights you want
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Malitha Jeewaka | Portfolio",
  description: "Malitha Jeewaka Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LenisProvider>
        <body className={`${clashDisplay.className}  antialiased`}>
          {/* <StickyCursor /> */}

          {children}
        </body>
      </LenisProvider>
    </html>
  );
}
