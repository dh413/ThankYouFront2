"use client";

import type { Metadata } from "next";
import { RecoilRoot } from "recoil";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <Navigation />
          {children}
          <Footer />
        </RecoilRoot>
      </body>
    </html>
  );
}
