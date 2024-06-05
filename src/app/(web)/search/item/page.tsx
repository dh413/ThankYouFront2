"use client";

import { Suspense } from "react";

import ItemMain from "@/components/search/Item/ItemMain";

export default function SearchItemPage() {
  return (
    <>
      <Suspense>
        <ItemMain />
      </Suspense>
    </>
  );
}
