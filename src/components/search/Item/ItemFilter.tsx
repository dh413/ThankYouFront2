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
  const radioConfigs = [
    {
      options: SEARCH_TYPE,
      name: SEARCH.SEARCH_TYPE,
      selectedValue: searchItemState.searchType,
    },
    {
      options: MD_LEVEL,
      name: SEARCH.MD_LEVEL,
      selectedValue: searchItemState.mdLevel,
    },
    {
      options: SORT_ORDER,
      name: SEARCH.SORT_ORDER,
      selectedValue: searchItemState.sortOrder,
    },
    {
      options: BRANCH_TYPE,
      name: SEARCH.BRANCH_TYPE,
      selectedValue: searchItemState.branchType,
    },
  ];

  const checkboxConfigs = [
    {
      label: "보유",
      checked: searchItemState.includeOutOfStock,
      name: SEARCH.INCLUDE_OUT_OF_STOCK,
    },
    {
      label: "직배송",
      checked: searchItemState.isDirectDelivery,
      name: SEARCH.IS_DIRECT_DELIVERY,
    },
  ];

  return (
    <div className="row">
      {radioConfigs.map((config) => (
        <div className="col-12 search-group" key={config.name}>
          <Radio
            options={config.options}
            name={config.name}
            selectedValue={config.selectedValue}
            onChange={(value) =>
              changeFilter(config.name as keyof SearchItemState, value)
            }
          />
        </div>
      ))}

      {checkboxConfigs.map((config) => (
        <div className="col-12 search-group" key={config.name}>
          <Checkbox
            label={config.label}
            checked={config.checked}
            onChange={() =>
              changeCheckBoxFilter(config.name as keyof SearchItemState)
            }
          />
        </div>
      ))}
    </div>
  );
};

export default Itemfilter;
