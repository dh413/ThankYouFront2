import { UserCookieConfig } from "@/types/common/api";

export const userCookieSetting: UserCookieConfig = {
  expires: 7, //쿠키 7일
  secure: false, // HTTPS에서만 임시로 false
  sameSite: "None", //동일한 사이트 내에서만 전송 Cross 임시로 none
  path: "/", //사이트 전체에서 쿠키유효
};
