"use client";

import { useEffect, useState } from "react";
import Itemfilter from "@/components/search/Item/ItemFilter";
import ItemFooter from "@/components/search/Item/ItemFooter";
import ItemResult from "@/components/search/Item/ItemResult";
import { SearchItemState } from "@/types/search/item/type";
import { API_ROUTES, SEARCH_ROUTES } from "@/constants/routes";
import SearchText from "@/components/search/SearchText";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { CookieKey } from "@/constants/key";
import useGetSearchItem from "@/hooks/search/item/useGetSearchItem";
import { useRecoilValue } from "recoil";
import { operatorCodeState } from "@/recoil/search";

export default function SearchItemPage() {
  const [searchedKeyword, setSearchedKeyword] = useState<string>("");
  const [searchItemState, setSearchItemState] = useState<SearchItemState>({
    searchType: 0,
    includeOutOfStock: true,
    branchType: 0,
    mdLevel: 0,
    isDirectDelivery: true,
    sortOrder: 0,
  });
  const [resultViewState, setResultViewState] = useState<boolean>(false);
  const operatorCode = useRecoilValue(operatorCodeState);

  const router = useRouter();
  const params = useSearchParams();

  const searchKeywordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchedKeyword(event.target.value);
  };

  const searchSubmit = (): void => {
    if (searchedKeyword) {
      const query = new URLSearchParams({
        keyword: searchedKeyword,
        searchType: searchItemState.searchType.toString(),
        includeOutOfStock: searchItemState.includeOutOfStock.toString(),
        branchType: searchItemState.branchType.toString(),
        mdLevel: searchItemState.mdLevel.toString(),
        isDirectDelivery: searchItemState.isDirectDelivery.toString(),
        sortOrder: searchItemState.sortOrder.toString(),
      }).toString();

      router.push(`${SEARCH_ROUTES.URL.ITEM}?${query}`);
    }
  };

  const changeFilter = (key: keyof SearchItemState, value: any): void => {
    setSearchItemState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const changeCheckBoxFilter = (key: keyof SearchItemState): void => {
    setSearchItemState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  useEffect(() => {
    if (params.get("keyword")) {
      setResultViewState(true);
    } else {
      setResultViewState(false);
    }
  }, [params]);

  return (
    <>
      <SearchText
        searchedKeyword={searchedKeyword}
        searchKeywordChange={searchKeywordChange}
        searchSubmit={searchSubmit}
      />
      <Itemfilter
        searchItemState={searchItemState}
        changeFilter={changeFilter}
        changeCheckBoxFilter={changeCheckBoxFilter}
      />
      {resultViewState && <ItemResult />}
      <ItemFooter />
    </>
  );
}
