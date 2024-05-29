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

interface InternalState {
  searchType: number;
  includeOutOfStock: boolean;
  branchType: number;
  mdLevel: number;
  isDirectDelivery: boolean;
  sortOrder: number;
  operatorCode: number;
}

const SearchItemSelect = () => {
  const [internalState, setInternalState] = useState<InternalState>({
    searchType: 0,
    includeOutOfStock: true,
    branchType: 0,
    mdLevel: 0,
    isDirectDelivery: true,
    sortOrder: 0,
    operatorCode: 0,
  });
  const handleChange = (key: keyof InternalState, value: any): void => {
    setInternalState((prevState) => ({
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
              checked={internalState.searchType === option.value}
              onChange={(e) =>
                handleChange("searchType", Number(e.target.value))
              }
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
              checked={internalState.mdLevel === option.value}
              onChange={(e) => handleChange("mdLevel", Number(e.target.value))}
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
              checked={internalState.sortOrder === option.value}
              onChange={(e) =>
                handleChange("sortOrder", Number(e.target.value))
              }
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
              checked={internalState.branchType === option.value}
              onChange={(e) =>
                handleChange("branchType", Number(e.target.value))
              }
            />
            <span className="custom-radio-span">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
  // return (
  //   <div className="container">
  //     <div className="row">
  //       <div className="d-flex">
  //         <div className="col-auto">
  //           <select className="form-select" value="1">
  //             {SearchType.map((option) => (
  //               <option key={option.value} value={option.value}>
  //                 {option.label}
  //               </option>
  //             ))}
  //           </select>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="row">
  //       <div className="d-flex">
  //         {SearchType.map((option) => (
  //           <label
  //             key={option.value}
  //             className="form-check form-check-inline custom-radio"
  //           >
  //             <input
  //               type="radio"
  //               className="form-check-input"
  //               value={option.value}
  //               // checked={selectedOption === option.value}
  //               // onChange={() => handleChange(option.value)}
  //             />
  //             <span className="custom-radio-span">{option.label}</span>
  //           </label>
  //         ))}
  //       </div>
  //     </div>
  //     <div className="col-auto">
  //       <input type="checkbox" className="form-check-input" value="1" />
  //       <label className="form-check-label">보유</label>
  //     </div>
  //   </div>
  // );
};

export default SearchItemSelect;
