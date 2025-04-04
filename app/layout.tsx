import Header from "@/components/header/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Amazona V2",
  description: "Modern Ecommerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
        </div>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <p>Copyright 2024 - All right reserved by Next Amazone V2</p>
        </footer>
      </body>
    </html>
  );
}
