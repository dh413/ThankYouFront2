"use client";

import Footer from "@/app/components/Footer";
import Navigation from "@/app/components/Navigation";
import { RecoilRoot } from "recoil";

export default function ClientLayout({
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
