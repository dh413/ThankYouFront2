import { Option } from "@/types/search/item/type";

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export interface RadioProps {
  options: Option[];
  name: string;
  selectedValue: number;
  onChange: (value: number) => void;
}

export interface SearchData {
  searchValue: string;
  searchType: string;
  operatorCode: string;
  sortOrder: string;
  branchType: string;
  includeOutOfStock: string;
  mdLevel: string;
  isDirectDelivery: string;
}
