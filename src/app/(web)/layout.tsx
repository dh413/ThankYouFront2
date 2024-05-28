"use client";

import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { RecoilRoot } from "recoil";

//이부분 궁금해요
//recoil을 전역으로 쓰고싶어서 layout <RecoilRoot> 넣었는데요
//<RecoilRoot>가 클라이언트 컴포넌트기 때문에 "use client"를 사용했어요
//근데 Metadata이걸 사용하려면 서버컴포넌트여야지만 가능한 것으로 알고있는데
//어떻게 처리하나요?

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
