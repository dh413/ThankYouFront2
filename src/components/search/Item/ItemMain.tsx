"use client";

import { useEffect, useMemo, useState } from "react";
import Itemfilter from "@/components/search/Item/ItemFilter";
import ItemFooter from "@/components/search/Item/ItemFooter";
import ItemResult from "@/components/search/Item/ItemResult";
import { SearchItemState } from "@/types/search/item/type";
import { SEARCH_ROUTES } from "@/constants/routes";
import SearchText from "@/components/search/SearchText";
import { useRouter, useSearchParams } from "next/navigation";
import { SEARCH } from "@/constants/search";
import { SearchResultDto } from "@/types/search/dtos";
import useGetSearchResults from "@/hooks/search/item/useGetSearchResults";
import { useRecoilValue } from "recoil";
import { operatorCodeState } from "@/recoil/search";
import { SearchData } from "@/types/search/common/type";
import { ClipLoader } from "react-spinners";

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
  const [selectedItem, setSelectedItem] = useState<SearchResultDto | null>(
    null
  );
  const [resultCount, setResultCount] = useState<number>(0);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const router = useRouter();
  const params = useSearchParams();
  const keyword = params.get(SEARCH.KEYWORD) ?? "";
  const searchType = params.get(SEARCH.SEARCH_TYPE) ?? 0;
  const includeOutOfStock = params.get(SEARCH.INCLUDE_OUT_OF_STOCK) ?? "true";
  const branchType = params.get(SEARCH.BRANCH_TYPE) ?? 0;
  const isDirectDelivery = params.get(SEARCH.IS_DIRECT_DELIVERY) ?? "true";
  const sortOrder = params.get(SEARCH.SORT_ORDER) ?? 0;
  const mdLevel = params.get(SEARCH.MD_LEVEL) ?? 0;

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

      setIsSearch(true);

      router.push(`${SEARCH_ROUTES.URL.ITEM}?${query}`);
    }
  };

  const operatorCode = useRecoilValue(operatorCodeState) ?? "";

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

  const clickItemInfo = (item: SearchResultDto) => {
    setSelectedItem(item);
  };
  const searchData: SearchData = useMemo(
    () => ({
      searchType: parseInt(searchType.toString(), 10),
      operatorCode,
      sortOrder: parseInt(sortOrder.toString(), 10),
      branchType: parseInt(branchType.toString(), 10),
      includeOutOfStock: includeOutOfStock.toString(),
      mdLevel: parseInt(mdLevel.toString(), 10),
      isDirectDelivery: isDirectDelivery.toString(),
      searchValue: keyword,
    }),
    [
      searchType,
      operatorCode,
      keyword,
      sortOrder,
      branchType,
      includeOutOfStock,
      mdLevel,
      isDirectDelivery,
    ]
  );

  const { searchResult, isLoading, errorMsg } = useGetSearchResults(
    searchData,
    isSearch
  );

  useEffect(() => {
    if (searchResult?.data) {
      setResultCount(searchResult?.data.length);
    }
  }, [searchResult?.data]);

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
    setIsSearch(true);
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
      {isSearch && isLoading ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <ClipLoader size={50} color={"#123abc"} loading={isLoading} />
        </div>
      ) : (
        <>
          {searchResult && searchResult.data && searchResult.data.length > 0 ? (
            <ItemResult
              searchResult={searchResult}
              clickItemInfo={clickItemInfo}
            />
          ) : (
            <div className="text-center mt-3">
              {errorMsg ?? "검색결과 없음"}
            </div>
          )}
        </>
      )}
      <ItemFooter selectedItem={selectedItem} resultCount={resultCount} />
    </>
  );
}
