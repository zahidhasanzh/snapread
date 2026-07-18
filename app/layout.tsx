import type { Metadata } from "next";
import { Source_Sans_3 as FontSans, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});
const fontDocMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-doc-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Snapread — AI-Powered Visual PDF Summaries",
  description:
    "Skim any PDF in seconds — AI-generated visual summaries, no scrolling through pages.",
  keywords: [
    "AI PDF summarizer",
    "AI summary tool",
    "document to visual",
    "study tool",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${fontSans.variable} ${fontDisplay.variable} ${fontDocMono.variable} antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
