// /search/layout.tsx
import SearchNavigation from "@/app/components/search/SearchNavigation";
import SearchText from "@/app/components/search/SearchText";
import React from "react";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SearchNavigation></SearchNavigation>
      <SearchText></SearchText>
      <main>{children}</main>
    </div>
  );
}
