export interface Option {
  label: string;
  value: number;
}

export interface SearchItemState {
  searchType: number;
  includeOutOfStock: boolean;
  branchType: number;
  mdLevel: number;
  isDirectDelivery: boolean;
  sortOrder: number;
}

export const SEARCH_TYPE: Option[] = [
  { label: "찾기", value: 0 },
  { label: "Itemid", value: 1 },
  { label: "Bookid", value: 2 },
  { label: "재고등급", value: 3 },
  { label: "도매상코드", value: 4 },
  { label: "시리즈", value: 5 },
  { label: "SID", value: 6 },
  { label: "필보유고정", value: 7 },
  { label: "반품보류", value: 8 },
  { label: "판특", value: 9 },
  { label: "ISBN", value: 10 },
  { label: "CID", value: 11 },
  { label: "알람", value: 12 },
  { label: "자동품절", value: 13 },
  { label: "재고지수", value: 14 },
  { label: "샵코드", value: 15 },
  { label: "출판사", value: 16 },
  { label: "자동일시품절", value: 17 },
  { label: "매절", value: 18 },
  { label: "입고알림", value: 19 },
  { label: "품절재고", value: 20 },
];

export const MD_LEVEL: Option[] = [
  { label: "MD등급", value: 0 },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
];

export const SORT_ORDER: Option[] = [
  { label: "상품명순", value: 0 },
  { label: "등록일순", value: 1 },
  { label: "판매량순", value: 2 },
  { label: "출간일순", value: 3 },
  { label: "재고지수순", value: 4 },
];

export const BRANCH_TYPE: Option[] = [
  { label: "ALL", value: 0 },
  { label: "Book", value: 1 },
  { label: "Music", value: 2 },
  { label: "DVD", value: 3 },
  { label: "GIFT", value: 5 },
  { label: "USED", value: 6 },
  { label: "FOREIGN", value: 7 },
  { label: "EBOOK", value: 9 },
  { label: "증정품", value: 10 },
  { label: "커피", value: 11 },
  { label: "Market", value: 12 },
];

export const COLUMN_TITLES = [
  "제목",
  "ItemId",
  "저자(수수료율/액)",
  "출판사",
  "정가",
  "판매가",
  "입고율",
  "할인율",
  "마일리지",
  "상태",
  "판매수량",
  "재고",
  "필보유",
  "출간일",
  "재고보유지수",
  "입고가",
  "ISBN",
  "시리즈",
  "로케이션",
  "일시품절안내일",
  "담당자",
  "매절",
  "ISBN확인",
  "재고등급",
  "도매상",
  "등록일",
  "등록경과일",
  "자동발주타입",
  "MD등급",
  "비고",
  "바코드",
  "SupplierCode",
  "도매상",
  "매절발주일",
  "매절구분",
  "매절상태",
  "매절단위",
  "미리보기",
  "재고소진일수",
  "아마존랭킹",
  "아마존정가",
  "아마존판매가",
  "중고최저가",
  "예상 매입가",
  "예상 판매가",
  "바인딩정보",
  "중고수",
  "US정가",
  "재고처리계획",
  "출판사도서코드",
  "이벤트사용여부",
  "분철설정권수",
  "분철주문수량",
];
