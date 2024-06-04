"use client";

import Checkbox from "@/components/common/CheckBox";
import Radio from "@/components/common/Radio";
import { SEARCH } from "@/constants/search";
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
  changeFilter: (key: keyof SearchItemState, value: any) => void;
  changeCheckBoxFilter: (key: keyof SearchItemState) => void;
}

const Itemfilter: FC<ItemFilterProps> = ({
  searchItemState,
  changeFilter,
  changeCheckBoxFilter,
}) => {
  return (
    <div className="row">
      <div className="col-12 search-group">
        <Radio
          options={SEARCH_TYPE}
          name={SEARCH.SEARCH_TYPE}
          selectedValue={searchItemState.searchType}
          onChange={(value) =>
            changeFilter(SEARCH.SEARCH_TYPE as keyof SearchItemState, value)
          }
        />
      </div>
      <div className="col-12 search-group">
        <Radio
          options={MD_LEVEL}
          name={SEARCH.MD_LEVEL}
          selectedValue={searchItemState.mdLevel}
          onChange={(value) =>
            changeFilter(SEARCH.MD_LEVEL as keyof SearchItemState, value)
          }
        />
      </div>
      <div className="col-12 search-group">
        <Radio
          options={SORT_ORDER}
          name={SEARCH.SORT_ORDER}
          selectedValue={searchItemState.sortOrder}
          onChange={(value) =>
            changeFilter(SEARCH.SORT_ORDER as keyof SearchItemState, value)
          }
        />
      </div>
      <div className="col-12 search-group">
        <Radio
          options={BRANCH_TYPE}
          name={SEARCH.BRANCH_TYPE}
          selectedValue={searchItemState.branchType}
          onChange={(value) =>
            changeFilter(SEARCH.BRANCH_TYPE as keyof SearchItemState, value)
          }
        />
      </div>
      <div className="col-12 search-group">
        <Checkbox
          label="보유"
          checked={searchItemState.includeOutOfStock}
          onChange={() =>
            changeCheckBoxFilter(
              SEARCH.INCLUDE_OUT_OF_STOCK as keyof SearchItemState
            )
          }
        />
      </div>
      <div className="col-12 search-group">
        <Checkbox
          label="직배송"
          checked={searchItemState.isDirectDelivery}
          onChange={() =>
            changeCheckBoxFilter(
              SEARCH.IS_DIRECT_DELIVERY as keyof SearchItemState
            )
          }
        />
      </div>
    </div>
  );
};

export default Itemfilter;
