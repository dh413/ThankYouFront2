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
