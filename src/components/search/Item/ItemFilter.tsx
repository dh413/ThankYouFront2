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
import { FC } from "react";

interface ItemFilterProps {
  searchItemState: SearchItemState;
  filterChange: (key: keyof SearchItemState, value: any) => void;
  filterCheckBoxChange: (key: keyof SearchItemState) => void;
}

const Itemfilter: FC<ItemFilterProps> = ({
  searchItemState,
  filterChange,
  filterCheckBoxChange,
}) => {
  return (
    <div className="row">
      <div className="col-12 search-group">
        <Radio
          options={SEARCH_TYPE}
          name="searchType"
          selectedValue={searchItemState.searchType}
          onChange={(value) => filterChange("searchType", value)}
        />
      </div>
      <div className="col-12 search-group">
        <Radio
          options={MD_LEVEL}
          name="mdLevel"
          selectedValue={searchItemState.mdLevel}
          onChange={(value) => filterChange("mdLevel", value)}
        />
      </div>
      <div className="col-12 search-group">
        <Radio
          options={SORT_ORDER}
          name="sortOrder"
          selectedValue={searchItemState.sortOrder}
          onChange={(value) => filterChange("sortOrder", value)}
        />
      </div>
      <div className="col-12 search-group">
        <Radio
          options={BRANCH_TYPE}
          name="branchType"
          selectedValue={searchItemState.branchType}
          onChange={(value) => filterChange("branchType", value)}
        />
      </div>
      <div className="col-12 search-group">
        <Checkbox
          label="보유"
          checked={searchItemState.includeOutOfStock}
          onChange={() => filterCheckBoxChange("includeOutOfStock")}
        />
      </div>
      <div className="col-12 search-group">
        <Checkbox
          label="직배송"
          checked={searchItemState.isDirectDelivery}
          onChange={() => filterCheckBoxChange("isDirectDelivery")}
        />
      </div>
    </div>
  );
};

export default Itemfilter;
