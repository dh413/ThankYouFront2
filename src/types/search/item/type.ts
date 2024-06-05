import { SearchResultDto } from "../dtos";

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

export const COLUMN_TITLES: { [key: string]: string } = {
  title: "제목",
  itemId: "ItemId",
  author: "저자(수수료율/액)",
  publisher: "출판사",
  priceStd: "정가",
  priceSales: "판매가",
  stockStatus: "상태",
  salesQty: "판매수량",
  stockAlarm: "재고",
  realStock: "필보유",
  publishTime: "출간일",
  stockPossession: "재고보유지수",
  inPrice: "입고가",
  isbn: "ISBN",
  seriesName: "시리즈",
  stockLocation: "로케이션",
  stockExplain: "일시품절안내일",
  supplierOperatorType: "담당자",
  stockPolicy: "매절",
  validISBN: "ISBN확인",
  stockLevel: "재고등급",
  supplierName: "도매상",
  regDate: "등록일",
  stockBigo: "비고",
  barCode: "바코드",
  supplierCode: "SupplierCode",
  stockExhaustedDay: "재고소진일수",
  amazonSalesRank: "아마존랭킹",
  amazonPriceStd: "아마존정가",
  amazonPriceSales: "아마존판매가",
  amazonLowestUsedPrice: "중고최저가",
  amazonInPrice: "예상 매입가",
  amazonExpectPriceSales: "예상 판매가",
  amazonBinding: "바인딩정보",
  priceUSStd: "US정가",
  disposalPlan: "재고처리계획",
  publisherBookCode: "출판사도서코드",
  isEventUsing: "이벤트사용여부",
  rebindQty: "분철설정권수",
  rebindOrderQty: "분철주문수량",
};

export interface SearchResultProps {
  onItemClick: (item: SearchResultDto) => void;
  setResultCount: (count: number) => void;
}
export interface ItemFooterProps {
  selectedItem: SearchResultDto | null;
  resultCount: number;
}

export interface ItemFilterProps {
  searchItemState: SearchItemState;
  changeFilter: (key: keyof SearchItemState, value: any) => void;
  changeCheckBoxFilter: (key: keyof SearchItemState) => void;
}
