// /search/layout.tsx

import SearchNavigation from "@/components/search/SearchNavigation";
import SearchText from "@/components/search/SearchText";
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
