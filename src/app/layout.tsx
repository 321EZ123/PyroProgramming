import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "PyroProgramming - Dark Fire Docs",
  description: "Documentation site with a dark fire theme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body suppressHydrationWarning className="antialiased font-sans bg-background text-foreground flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          <ClientBody>{children}</ClientBody>
        </main>
        <Footer />
      </body>
    </html>
  );
}
