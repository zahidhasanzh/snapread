import type { Metadata } from "next";
import { Source_Sans_3 as FontSans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
