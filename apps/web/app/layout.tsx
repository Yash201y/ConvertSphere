import "./globals.css";

import type { Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";

import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "ConvertSphere",
  description: "AI-powered document conversion platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-black text-white overflow-x-hidden">
          <Navbar />

          <main className="pt-24">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}