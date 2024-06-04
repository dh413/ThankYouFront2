import { useMemo } from "react";
import useGetSearchItem from "@/hooks/search/item/useGetSearchItem";
import { operatorCodeState } from "@/recoil/search";
import { COLUMN_TITLES } from "@/types/search/item/type";
import { useSearchParams } from "next/navigation";
import { useRecoilValue } from "recoil";
import { SearchResultDto } from "@/types/search/dtos";
import { SEARCH } from "@/constants/search";

const ItemResult = () => {
  const params = useSearchParams();
  const keyword = params.get(SEARCH.KEYWORD);
  const searchType = params.get(SEARCH.SEARCH_TYPE);
  const includeOutOfStock = params.get(SEARCH.INCLUDE_OUT_OF_STOCK);
  const branchType = params.get(SEARCH.BRANCH_TYPE);
  const isDirectDelivery = params.get(SEARCH.IS_DIRECT_DELIVERY);
  const sortOrder = params.get(SEARCH.SORT_ORDER);
  const mdLevel = params.get(SEARCH.MD_LEVEL);
  const operatorCode = useRecoilValue(operatorCodeState);

  const searchData = useMemo(
    () => ({
      searchType: searchType,
      operatorCode: operatorCode,
      searchValue: keyword,
      sortOrder: sortOrder,
      branchType: branchType,
      includeOutOfStock: includeOutOfStock,
      mdLevel: mdLevel,
      isDirectDelivery: isDirectDelivery,
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

  const { searchResult, isLoading, error } = useGetSearchItem(searchData);

  if (isLoading) {
    return <div>검색중</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="horizontal-scroll-container">
            <ul
              className="list-inline horizontal-scroll"
              style={{ display: "flex", flexWrap: "nowrap" }}
            >
              {COLUMN_TITLES.map((title) => (
                <li className="list-inline-item" key={title}>
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {searchResult?.data.map((item: SearchResultDto) => (
        <div className="row" key={item.itemId}>
          <div className="col-12">
            <div className="horizontal-scroll-container">
              <ul
                className="list-inline horizontal-scroll"
                style={{ display: "flex", flexWrap: "nowrap" }}
              >
                {Object.entries(item).map(([key, value]) => (
                  <li className="list-inline-item" key={key}>
                    {typeof value === "object" ? JSON.stringify(value) : value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemResult;
