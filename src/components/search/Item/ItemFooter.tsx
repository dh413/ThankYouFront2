import React from "react";
import { SearchResultDto } from "@/types/search/dtos";

interface ItemFooterProps {
  selectedItem: SearchResultDto | null;
}

const ItemFooter: React.FC<ItemFooterProps> = ({ selectedItem }) => {
  const formatSelectedItem = (item: SearchResultDto | null) => {
    if (!item) return "";
    const formatted = [
      `제목: ${item.title}`,
      `ItemId: ${item.itemId}`,
      `저자: ${item.author}`,
      `출판사: ${item.publisher}`,
      `정가: ${item.priceStd}`,
      `판매가: ${item.priceSales}`,
      `ISBN: ${item.isbn}`,
      `상태: ${item.stockStatus}`,
      `판매수량: ${item.salesQty}`,
      `재고: ${item.stockAlarm}`,
    ];

    return formatted.join("\n");
  };

  return (
    <div className="mt-5 p-3 border rounded bg-light">
      <div className="d-flex align-items-center mb-3">
        <div className="btn-group me-3">
          <button type="button" className="btn btn-primary">
            ++
          </button>
          <button type="button" className="btn btn-primary">
            --
          </button>
        </div>
        <span className="ms-3">0 건 찾음</span>
        <div
          className="btn-group ms-3"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="buttonRadio"
            id="radio1"
            autoComplete="off"
          />
          <label className="btn btn-outline-primary" htmlFor="radio1">
            전체
          </label>
          <input
            type="radio"
            className="btn-check"
            name="buttonRadio"
            id="radio2"
            autoComplete="off"
          />
          <label className="btn btn-outline-primary" htmlFor="radio2">
            체크
          </label>
        </div>
      </div>
      <div className="d-flex mb-3">
        <button type="button" className="btn btn-secondary me-2">
          파일저장
        </button>
        <button type="button" className="btn btn-secondary">
          복사
        </button>
      </div>
      <textarea
        className="form-control mb-3"
        rows={3}
        placeholder="클릭한 항목들의 상세정보가 여기에 표시됩니다."
        value={selectedItem ? JSON.stringify(selectedItem, null, 2) : ""}
        readOnly
      ></textarea>
      <div className="input-group">
        <div className="form-check me-3">
          <input className="form-check-input" type="checkbox" id="option1" />
          <label className="form-check-label" htmlFor="option1">
            옵션 1
          </label>
        </div>
        <input
          type="text"
          className="form-control me-2"
          placeholder="옵션 입력"
          aria-label="옵션 입력"
        />
        <button className="btn btn-primary">바코드 출력</button>
      </div>
    </div>
  );
};

export default ItemFooter;
