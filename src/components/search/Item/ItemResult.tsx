import { CookieKey } from "@/constants/key";
import useGetSearchResult from "@/hooks/search/item/useGetSearchItem";
import { operatorCodeState } from "@/recoil/search";
import { COLUMN_TITLES } from "@/types/search/item/type";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const ItemResult = () => {
  // const [keyword, setKeyword] = useState<string | null>(null);

  const params = useSearchParams();
  const keyword = params.get("keyword");
  const searchType = params.get("searchType");
  const includeOutOfStock = params.get("includeOutOfStock");
  const branchType = params.get("branchType");
  const isDirectDelivery = params.get("isDirectDelivery");
  const sortOrder = params.get("sortOrder");
  const mdLevel = params.get("mdLevel");
  const operatorCode = useRecoilValue(operatorCodeState);

  const searchData = {
    searchType: searchType,
    operatorCode: operatorCode,
    searchValue: keyword,
    sortOrder: sortOrder,
    branchType: branchType,
    includeOutOfStock: includeOutOfStock,
    mdLevel: mdLevel,
    isDirectDelivery: isDirectDelivery,
  };
  const response = fetch("https://tkapi.aladin.co.kr/api/thankyousearch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(searchData),
  });

  console.log(keyword);
  console.log(searchType);
  console.log(includeOutOfStock);
  console.log(branchType);
  console.log(isDirectDelivery);
  console.log(sortOrder);
  console.log(operatorCode);
  // useEffect(() => {
  //   if (params) {
  //     params.forEach((value, key) => {
  //       console.log(`Key: ${key}, Value: ${value}`);
  //     });
  //   } else {
  //     console.log("parmas없음");
  //   }
  // }, [params]);
  // getKeyword(queryString.get("keyword"));

  // const keyword = queryString.get("keyword");

  // const { searchResult } = useGetSearchResult(queryString);

  // const params = useSearchParams();
  // if (params) {
  //   const keyword = params.get("keyword");
  //   console.log(keyword);
  // } else {
  //   console.log("No search parameters found.");
  // }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="horizontal-scroll-container">
            <ul
              className="list-inline horizontal-scroll"
              style={{ display: "flex", flexWrap: "nowrap" }}
            >
              {COLUMN_TITLES.map((title, index) => (
                <li className="list-inline-item" key={index}>
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* {searchResult.data.map((item) => (
        <div className="row" key={item.itemId}>
          <div className="col-12">
            <div className="horizontal-scroll-container">
              <ul
                className="list-inline horizontal-scroll"
                style={{ display: "flex", flexWrap: "nowrap" }}
              >
                {Object.keys(item).map((key, index) => (
                  <li className="list-inline-item" key={index}>
                    {item[key]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default ItemResult;
