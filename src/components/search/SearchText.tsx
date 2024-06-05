"use client";

import { SEARCH } from "@/constants/search";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

interface SearchTextProps {
  searchedKeyword: string;
  searchKeywordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchSubmit: () => void;
}

const SearchText: FC<SearchTextProps> = ({
  searchedKeyword,
  searchKeywordChange,
  searchSubmit,
}) => {
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      searchSubmit();
    }
  };
  const params = useSearchParams();
  const keyword = params.get(SEARCH.KEYWORD);
  // const searchType = params.get(SEARCH.SEARCH_TYPE);
  // const includeOutOfStock = params.get(SEARCH.INCLUDE_OUT_OF_STOCK);
  // const branchType = params.get(SEARCH.BRANCH_TYPE);
  // const isDirectDelivery = params.get(SEARCH.IS_DIRECT_DELIVERY);
  // const sortOrder = params.get(SEARCH.SORT_ORDER);
  // const mdLevel = params.get(SEARCH.MD_LEVEL);
  // const operatorCode = useRecoilValue(operatorCodeState);
  // setSearchedKeyword = keyword
  // console.log(keyword);

  return (
    <div className="d-flex justify-content-center">
      <div className="input-group">
        <input
          className="form-control"
          placeholder="검색어를 입력해 주세요"
          value={searchedKeyword}
          onChange={searchKeywordChange}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={searchSubmit}
        >
          찾기
        </button>
        <button className="btn btn-secondary">외부입력(POS)</button>
        <button className="btn btn-secondary">Q...</button>
      </div>
    </div>
  );
};

export default SearchText;
