import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Kiroku",
  description: "Your Personal Anime Library",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
