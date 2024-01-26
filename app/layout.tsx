import type { Metadata } from "next";
import { Inter, Montserrat, Lato, Nunito, Figtree } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const figTree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "OpenInApp - URL Shortener & Best App Opener",
  description: "URL Shortener & Best App Opener",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} ${lato.variable} ${nunito.variable} ${figTree.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
