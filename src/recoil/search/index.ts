import { atom } from "recoil";

export const searchedKeywordState = atom<string>({
  key: "searchedKeywordState",
  default: "",
});
