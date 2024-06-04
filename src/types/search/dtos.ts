interface ThankYouProductDto {
  title?: string; // 제목
  itemId?: number; // 상품 ID
  author?: string; // 저자
  publisher?: string; // 출판사
  priceStd?: number; // 원가
  isbn?: string; // ISBN
  priceSales?: number; // 판매가
  stockStatus?: number; // 재고 상태
  stockAlarm?: boolean; // 재고 알람
  salesQty?: number; // 판매량
  realStock?: number; // 실재고 수량
  stockPolicy?: number; // 재고 정책 (직배송: 1, 무관: 0)
  stockMin?: number; // 최소 재고
  backOrderQty?: number; // 뒤로 구매하는 수량
  stockLocation?: number; // 재고 위치
  stockExplain?: string; // 재고 설명
  publishTime?: number; // 출판일
  stockPossession?: number; // 재고 소유권
  supplierOperatorType?: number; // 공급자 운영자 유형
  dcRate?: number; // 할인율
  mileageType?: number; // 마일리지 유형
  inPrice?: number; // 매입가
  isBulkBackOrder?: boolean; // 대량 주문 가능 여부
  validISBN?: boolean; // 유효한 ISBN 여부
  memo?: string; // 메모
  isHide?: number; // 숨김 여부
  seriesName?: string; // 시리즈명
  supplierCode?: number; // 공급사 코드
  regDate?: string; // 등록일
  stockLevel?: number; // 재고 수량
  supplierName?: string; // 공급사명
  autoOrderType?: number; // 자동 주문 유형
  passage?: number; // 등록 후 경과 기간
  stockBigo?: string; // 재고 설명
  barCode?: string; // 바코드
  wight?: boolean; // 무게
  mdLevel?: number; // MD 레벨
  isDirectDelivery?: boolean; // 직접 배송 여부
  hasLetsLook?: boolean; // 렛츠룩 보유 여부
  stockExhaustedDay?: number; // 재고 소진 예상 일수
  bulkBackOrderDate?: string; // 대량 주문일
  bulkBackOrderApporvalTypeDesc?: string; // 대량 주문 승인 유형 설명
  bulkBackOrderQty?: string; // 대량 주문 수량
  bulkBackOrderType?: number; // 대량 주문 유형
  amazonSalesRank?: number; // 아마존 판매 순위
  amazonPriceStd?: number; // 아마존 원가
  amazonPriceSales?: number; // 아마존 판매가
  amazonLowestUsedPrice?: number; // 아마존 최저 중고 가격
  amazoneInPrice?: number; // 아마존 판매가
  amazonExpectPriceSales?: number; // 아마존 예상 판매가
  amazonBinding?: string; // 아마존 바인딩
  priceUSStd?: number; // 원가 (미국)
  disposalPlan?: number; // 처분 계획
  publisherBookCode?: string; // 출판사 도서 코드
  isEventUsing?: boolean; // 이벤트 사용 여부
  eC_ConnectItemId?: number; // EC_ConnectItemId
  eC_SalesQty?: number; // EC_SalesQty
  eC_StockPosstio?: number; // EC_StockPosstio
  branchType?: number; // 지점 유형
  rebindQty?: number; // 재결합 수량
  rebindOrderQty?: number; // 재결합 주문 수량
}

export interface SearchResultDto {
  result: boolean;
  resultCode: number;
  errMsg: string;
  data: SearchResultDto[];
}
export interface SearchResultDto extends ThankYouProductDto {}
