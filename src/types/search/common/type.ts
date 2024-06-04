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
  searchType: string | null;
  operatorCode: string;
  sortOrder: string | null;
  branchType: string | null;
  includeOutOfStock: string | null;
  mdLevel: string | null;
  isDirectDelivery: string | null;
}