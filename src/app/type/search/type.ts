export interface Option {
  label: string;
  value: number;
}

export const SearchType: Option[] = [
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

export const MDLevel: Option[] = [
  { label: "MD등급", value: 0 },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
];

export const SortOrder: Option[] = [
  { label: "상품명순", value: 0 },
  { label: "등록일순", value: 1 },
  { label: "판매량순", value: 2 },
  { label: "출간일순", value: 3 },
  { label: "재고지수순", value: 4 },
];

export const BranchType: Option[] = [
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
