import { atom } from "recoil";

export const loginInfoState = atom<UserInfo>({
  key: "loginInfoState",
  default: {
    operatorCode: 0,
    operatorName: "",
    operatorAcl: false,
    passwordExpireDate: "",
    pkId: 0,
    operatorId: "",
    operatorHandPhone: "",
    deptDesc: "",
    operatorMailAddr: "",
    isLockedCheck: true,
    pwdFailedCnt: 0,
    isLocked: false,
  },
});

// export const isLoggedInState = atom<boolean>({
//   key: "isLoggedInState",
//   default: false,
// });
