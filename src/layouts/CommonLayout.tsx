"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { RecoilRoot } from "recoil";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <Navigation />
      {children}
      <Footer />
    </RecoilRoot>
  );
}
