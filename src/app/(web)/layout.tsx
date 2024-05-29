import type { Metadata } from "next";
import ClientLayout from "./layouts/ClientLayout";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: "땡큐",
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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
