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
    MAIN: "/main",
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
    MAIN: "메인",
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

export const MAIN_NAV_ITEMS = [
  {
    url: APP_ROUTES.URL.EXIT,
    name: APP_ROUTES.NAME.EXIT,
    requiresAuth: false,
  },
  {
    url: APP_ROUTES.URL.SEARCH,
    name: APP_ROUTES.NAME.SEARCH,
    requiresAuth: true,
  },
  {
    url: APP_ROUTES.URL.INBOUND,
    name: APP_ROUTES.NAME.INBOUND,
    requiresAuth: true,
  },
  {
    url: APP_ROUTES.URL.STOCK,
    name: APP_ROUTES.NAME.STOCK,
    requiresAuth: true,
  },
  {
    url: APP_ROUTES.URL.ORDER,
    name: APP_ROUTES.NAME.ORDER,
    requiresAuth: true,
  },
  {
    url: APP_ROUTES.URL.OTHER,
    name: APP_ROUTES.NAME.OTHER,
    dropdown: true,
    requiresAuth: true,
  },
  {
    url: APP_ROUTES.URL.CUSTOMERSERVICE,
    name: APP_ROUTES.NAME.CUSTOMERSERVICE,
    requiresAuth: true,
  },
];
