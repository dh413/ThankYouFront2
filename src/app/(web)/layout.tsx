"use client";

import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { RecoilRoot } from "recoil";

// export const metadata: Metadata = {
//   title: "땡큐",
//   description: "description",
// };https://github.com/dh413/thankyoufront2.git

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <RecoilRoot>
    <html lang="en">
      <body>
        <RecoilRoot>
          <Navigation />
          {children}
          <Footer />
        </RecoilRoot>
      </body>
    </html>
    // </RecoilRoot>
  );
}
