import SearchNavigation from "@/components/search/SearchNavigation";
import SearchText from "@/components/search/SearchText";
import React from "react";

export default function SearchLayout() {
  return (
    <div>
      <SearchNavigation />
      <SearchText />
    </div>
  );
}
