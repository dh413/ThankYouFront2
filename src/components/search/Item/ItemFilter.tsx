"use client";

import Checkbox from "@/components/common/CheckBox";
import Radio from "@/components/common/Radio";
import {
  BRANCH_TYPE,
  MD_LEVEL,
  SEARCH_TYPE,
  SORT_ORDER,
  SearchItemState,
} from "@/types/search/item/type";
import { useState } from "react";

const Itemfilter = () => {
  const [searchItemState, setSearchItemState] = useState<SearchItemState>({
    searchType: 0,
    includeOutOfStock: true,
    branchType: 0,
    mdLevel: 0,
    isDirectDelivery: true,
    sortOrder: 0,
  });

  const itemChange = (key: keyof SearchItemState, value: any): void => {
    setSearchItemState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const itemCheckBoxChange = (key: keyof SearchItemState): void => {
    setSearchItemState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="row">
      <Radio
        options={SEARCH_TYPE}
        name="searchType"
        selectedValue={searchItemState.searchType}
        onChange={(value) => itemChange("searchType", value)}
      />
      <Radio
        options={MD_LEVEL}
        name="mdLevel"
        selectedValue={searchItemState.mdLevel}
        onChange={(value) => itemChange("mdLevel", value)}
      />
      <Radio
        options={SORT_ORDER}
        name="sortOrder"
        selectedValue={searchItemState.sortOrder}
        onChange={(value) => itemChange("sortOrder", value)}
      />
      <Radio
        options={BRANCH_TYPE}
        name="branchType"
        selectedValue={searchItemState.branchType}
        onChange={(value) => itemChange("branchType", value)}
      />
      <Checkbox
        label="보유"
        checked={searchItemState.includeOutOfStock}
        onChange={() => itemCheckBoxChange("includeOutOfStock")}
      />
      <Checkbox
        label="직배송"
        checked={searchItemState.isDirectDelivery}
        onChange={() => itemCheckBoxChange("isDirectDelivery")}
      />
    </div>
  );
};

export default Itemfilter;
