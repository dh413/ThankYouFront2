const setApiRoute = (route: string) => {
  const NEXT_PUBLIC_API_URL = "https://tkapi.aladin.co.kr";
  return `${NEXT_PUBLIC_API_URL}${route}`;
};

export const API_ROUTES = {
  LOGIN: setApiRoute("/api/thankyoulogin"),
};

export const APP_ROUTES = {
  URL: {
    EXIT: "/exit",
    LOGOUT: "/",
    LOGIN: "/login",
    SEARCH: "/search",
    INBOUND: "/inbound",
    STOCK: "/stock",
    ORDER: "/order",
    OTHER: "/other",
    CUSTOMERSERVICE: "/customerservice",
  },
  NAME: {
    EXIT: "종료",
    LOGOUT: "로그아웃",
    LOGIN: "로그인",
    SEARCH: "검색",
    INBOUND: "입고",
    STOCK: "재고",
    ORDER: "주문",
    OTHER: "기타",
    CUSTOMERSERVICE: "상담",
  },
};
