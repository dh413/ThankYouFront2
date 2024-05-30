"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { APP_ROUTES } from "@/constants/routes";
import { COOKIE_NAME } from "@/constants/cookie";

export default function Navigation() {
  const path = usePathname();
  const storedUser = Cookies.get("user");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, [storedUser]);

  const handleLogout = () => {
    Cookies.remove(COOKIE_NAME);
    setIsLoggedIn(false);
    router.push(APP_ROUTES.URL.LOGIN);
  };

  const mainNavItems = [
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

  const loginCheckNaviItem = isLoggedIn
    ? {
        url: APP_ROUTES.URL.LOGOUT,
        name: APP_ROUTES.NAME.LOGOUT,
        requiresAuth: true,
        onClick: "handleLogout",
      }
    : {
        url: APP_ROUTES.URL.LOGIN,
        name: APP_ROUTES.NAME.LOGIN,
        requiresAuth: false,
      };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav mx-auto">
          {mainNavItems.map((item, index) => {
            const isDisabled = !isLoggedIn && item.requiresAuth;

            const linkClassName = `nav-link ${
              item.dropdown ? "dropdown-toggle" : ""
            } ${path === item.url ? "text-primary" : ""} ${
              isDisabled ? "disabled" : ""
            }`;

            return (
              <li
                className={`nav-item${item.dropdown ? " dropdown" : ""}`}
                key={index}
              >
                <Link
                  href={isDisabled ? "#" : item.url}
                  className={linkClassName}
                  id={item.dropdown ? "orderDropdown" : undefined}
                  role={item.dropdown ? "button" : undefined}
                  data-bs-toggle={item.dropdown ? "dropdown" : undefined}
                  aria-expanded={item.dropdown ? "false" : undefined}
                  aria-disabled={isDisabled}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}

          <li className="nav-item">
            <Link
              href={loginCheckNaviItem.url}
              className={`nav-link ${
                path === loginCheckNaviItem.url ? "text-primary" : ""
              }`}
              onClick={
                loginCheckNaviItem.onClick === "handleLogout"
                  ? handleLogout
                  : undefined
              }
            >
              {loginCheckNaviItem.name}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
