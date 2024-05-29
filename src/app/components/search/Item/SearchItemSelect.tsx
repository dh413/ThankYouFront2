"use client";

import {
  BranchType,
  MDLevel,
  SearchType,
  SortOrder,
} from "@/app/type/search/type";
import "../custom-radio.css"; // 커스텀 CSS 파일 import
import { useState } from "react";
// import { useState } from "react";

interface SearchItemState {
  searchType: number;
  includeOutOfStock: boolean;
  branchType: number;
  mdLevel: number;
  isDirectDelivery: boolean;
  sortOrder: number;
}

// includeOutOfStock
// isDirectDelivery

const SearchItemSelect = () => {
  const [SearchItemState, setSearchItemState] = useState<SearchItemState>({
    searchType: 0,
    includeOutOfStock: true,
    branchType: 0,
    mdLevel: 0,
    isDirectDelivery: true,
    sortOrder: 0,
  });

  const itemCheckBoxChange = (key: keyof SearchItemState): void => {
    itemChange(key, !SearchItemState[key]);
  };

  const itemChange = (key: keyof SearchItemState, value: any): void => {
    setSearchItemState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div className="row">
      <div className="d-flex flex-wrap">
        {SearchType.map((option) => (
          <label
            key={option.value}
            className="form-check form-check-inline custom-radio"
          >
            <input
              type="radio"
              className="form-check-input"
              value={option.value}
              checked={SearchItemState.searchType === option.value}
              onChange={(e) => itemChange("searchType", Number(e.target.value))}
            />
            <span className="custom-radio-span">{option.label}</span>
          </label>
        ))}
      </div>
      <div className="d-flex flex-wrap">
        {MDLevel.map((option) => (
          <label
            key={option.value}
            className="form-check form-check-inline custom-radio"
          >
            <input
              type="radio"
              className="form-check-input"
              value={option.value}
              checked={SearchItemState.mdLevel === option.value}
              onChange={(e) => itemChange("mdLevel", Number(e.target.value))}
            />
            <span className="custom-radio-span">{option.label}</span>
          </label>
        ))}
      </div>
      <div className="d-flex flex-wrap">
        {SortOrder.map((option) => (
          <label
            key={option.value}
            className="form-check form-check-inline custom-radio"
          >
            <input
              type="radio"
              className="form-check-input"
              value={option.value}
              checked={SearchItemState.sortOrder === option.value}
              onChange={(e) => itemChange("sortOrder", Number(e.target.value))}
            />
            <span className="custom-radio-span">{option.label}</span>
          </label>
        ))}
      </div>
      <div className="d-flex flex-wrap">
        {BranchType.map((option) => (
          <label
            key={option.value}
            className="form-check form-check-inline custom-radio"
          >
            <input
              type="radio"
              className="form-check-input"
              value={option.value}
              checked={SearchItemState.branchType === option.value}
              onChange={(e) => itemChange("branchType", Number(e.target.value))}
            />
            <span className="custom-radio-span">{option.label}</span>
          </label>
        ))}
      </div>
      <div className="d-flex flex-wrap">
        <label className="form-check form-check-inline custom-radio">
          <input
            type="checkbox"
            className="form-check-input"
            checked={SearchItemState.includeOutOfStock}
            onChange={() => itemCheckBoxChange("includeOutOfStock")}
          />
          <span className="custom-radio-span">보유</span>
        </label>
      </div>
      <div className="d-flex flex-wrap">
        <label className="form-check form-check-inline custom-radio">
          <input
            type="checkbox"
            className="form-check-input"
            checked={SearchItemState.isDirectDelivery}
            onChange={() => itemCheckBoxChange("isDirectDelivery")}
          />
          <span className="custom-radio-span">직배송</span>
        </label>
      </div>
    </div>
  );
};

export default SearchItemSelect;
