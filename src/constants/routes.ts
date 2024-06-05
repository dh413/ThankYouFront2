import { NavgationInfo, NavgationType } from "@/types/common/navigation";

const setApiRoute = (route: string) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}${route}`;
  const url = `${route}`;
  return `${process.env.NEXT_PUBLIC_API_URL}${route}`;
};

export const API_ROUTES = {
  LOGIN: setApiRoute("/api/thankyoulogin"),
  SEARCH_ITEM: setApiRoute("/api/thankyousearch"),
};

export const APP_ROUTES: NavgationType = {
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

export const MAIN_NAVIGATION_ITEMS: NavgationInfo[] = [
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

export const SEARCH_ROUTES: NavgationType = {
  URL: {
    CUSTOMER: "/search/customer",
    ITEM: "/search/item",
    WHOLESALER: "/search/wholesaler",
    PUBLISHER: "/search/publisher",
    DISTRIBUTOR: "/search/distributor",
    ORDER: "/search/order",
    BRAND: "/search/brand",
  },
  NAME: {
    CUSTOMER: "고객",
    ITEM: "아이템",
    WHOLESALER: "도매상",
    PUBLISHER: "출판사",
    DISTRIBUTOR: "배본사",
    ORDER: "주문",
    BRAND: "브랜드",
  },
};

export const SEARCH_NAVIGATION_ITEMS: NavgationInfo[] = [
  {
    url: SEARCH_ROUTES.URL.CUSTOMER,
    name: SEARCH_ROUTES.NAME.CUSTOMER,
  },
  {
    url: SEARCH_ROUTES.URL.ITEM,
    name: SEARCH_ROUTES.NAME.ITEM,
  },
  {
    url: SEARCH_ROUTES.URL.WHOLESALER,
    name: SEARCH_ROUTES.NAME.WHOLESALER,
  },
  {
    url: SEARCH_ROUTES.URL.PUBLISHER,
    name: SEARCH_ROUTES.NAME.PUBLISHER,
  },
  {
    url: SEARCH_ROUTES.URL.DISTRIBUTOR,
    name: SEARCH_ROUTES.NAME.DISTRIBUTOR,
  },
  {
    url: SEARCH_ROUTES.URL.ORDER,
    name: SEARCH_ROUTES.NAME.ORDER,
    dropdown: true,
  },
  {
    url: SEARCH_ROUTES.URL.BRAND,
    name: SEARCH_ROUTES.NAME.BRAND,
  },
];
