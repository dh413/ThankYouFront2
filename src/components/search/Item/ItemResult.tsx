import { useEffect, useMemo } from "react";
import useGetSearchResults from "@/hooks/search/item/useGetSearchResults";
import { operatorCodeState } from "@/recoil/search";
import { COLUMN_TITLES, SearchResultProps } from "@/types/search/item/type";
import { useSearchParams } from "next/navigation";
import { useRecoilValue } from "recoil";
import { SearchResultDto } from "@/types/search/dtos";
import { SEARCH } from "@/constants/search";
import { SearchData } from "@/types/search/common/type";

const ItemResult: React.FC<SearchResultProps> = ({
  clickItemInfo,
  searchResult,
  errorMsg,
}) => {
  if (errorMsg) {
    console.log(errorMsg);
    return false;
  }
  if (!searchResult?.data.length) {
    console.log("검색결과값 없음");
    return null;
  }

  return (
    <div>
      <div className="d-flex bg-light p-2">
        {Object.values(COLUMN_TITLES).map((title) => (
          <div
            key={title}
            style={{
              minWidth: "300px",
              padding: "0 10px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </div>
        ))}
      </div>

      {searchResult?.data.map((item: SearchResultDto) => (
        <div
          className="row mb-2"
          key={item.itemId}
          onClick={() => clickItemInfo(item)}
          style={{ cursor: "pointer" }}
        >
          <div className="col-12">
            <div className="d-flex">
              {Object.entries(item)
                .filter(([key]) => COLUMN_TITLES.hasOwnProperty(key))
                .map(([key, value]) => (
                  <div
                    key={key}
                    style={{
                      minWidth: "300px",
                      padding: "0 10px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {typeof value === "object" ? JSON.stringify(value) : value}
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemResult;
