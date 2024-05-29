"use client";

import { useState } from "react";
export default function SearchText() {
  const [searchedKeyword, setSearchedKeyword] = useState("");
  const handleKeywordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchedKeyword(event.target.value);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="input-group" style={{ width: "50%" }}>
        <input
          className="form-control"
          placeholder="검색어를 입력해 주세요"
          onChange={handleKeywordChange}
          autoFocus
        />
        <button className="btn btn-primary" type="submit">
          찾기
        </button>
        <button className="btn btn-secondary">외부입력(POS)</button>
        <button className="btn btn-secondary">Q...</button>
      </div>
    </div>
  );
}
