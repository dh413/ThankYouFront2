"use client";
import SearchNavigation from "@/components/search/SearchNavigation";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SearchNavigation />
      {children}
    </>
  );
}
