import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import CommonLayout from "@/layouts/CommonLayout";

export const metadata: Metadata = {
  title: "땡큐1",
  description: "description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}
