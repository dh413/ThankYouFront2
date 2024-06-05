"use client";

import { useEffect, useState } from "react";
import Itemfilter from "@/components/search/Item/ItemFilter";
import ItemFooter from "@/components/search/Item/ItemFooter";
import ItemResult from "@/components/search/Item/ItemResult";
import { SearchItemState } from "@/types/search/item/type";
import { SEARCH_ROUTES } from "@/constants/routes";
import SearchText from "@/components/search/SearchText";
import { useRouter, useSearchParams } from "next/navigation";
import { SEARCH } from "@/constants/search";
import { SearchResultDto } from "@/types/search/dtos";

export default function ItemMain() {
  const [searchedKeyword, setSearchedKeyword] = useState<string>("");
  const [searchItemState, setSearchItemState] = useState<SearchItemState>({
    searchType: 0,
    includeOutOfStock: true,
    branchType: 0,
    mdLevel: 0,
    isDirectDelivery: true,
    sortOrder: 0,
  });
  const [hasResult, setHasResult] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<SearchResultDto | null>(
    null
  );
  const [resultCount, setResultCount] = useState<number>(0);

  const router = useRouter();
  const params = useSearchParams();
  const keyword = params.get(SEARCH.KEYWORD) ?? "";
  const searchType = params.get(SEARCH.SEARCH_TYPE) ?? "";
  const includeOutOfStock = params.get(SEARCH.INCLUDE_OUT_OF_STOCK) ?? "";
  const branchType = params.get(SEARCH.BRANCH_TYPE) ?? "";
  const isDirectDelivery = params.get(SEARCH.IS_DIRECT_DELIVERY) ?? "";
  const sortOrder = params.get(SEARCH.SORT_ORDER) ?? "";
  const mdLevel = params.get(SEARCH.MD_LEVEL) ?? "";

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
      setHasResult(true);

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

  const onItemInfoClick = (item: SearchResultDto) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    setSearchedKeyword(keyword);
    setSearchItemState({
      searchType: searchType ? parseInt(searchType, 10) : 0,
      includeOutOfStock: includeOutOfStock === "true",
      branchType: branchType ? parseInt(branchType, 10) : 0,
      mdLevel: mdLevel ? parseInt(mdLevel, 10) : 0,
      isDirectDelivery: isDirectDelivery === "true",
      sortOrder: sortOrder ? parseInt(sortOrder, 10) : 0,
    });

    if (keyword) {
      setHasResult(true);
    } else {
      setHasResult(false);
    }
  }, [
    keyword,
    searchType,
    includeOutOfStock,
    branchType,
    isDirectDelivery,
    sortOrder,
    mdLevel,
  ]);

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
      {hasResult && (
        <ItemResult
          onItemInfoClick={onItemInfoClick}
          setResultCount={setResultCount}
        />
      )}
      <ItemFooter selectedItem={selectedItem} resultCount={resultCount} />
    </>
  );
}
