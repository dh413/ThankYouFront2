"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { APP_ROUTES, MAIN_NAV_ITEMS } from "@/constants/routes";
import { COOKIE_NAME } from "@/constants/cookie";
import { NavList } from "@/types/common/app";
import classNames from "classnames";

export default function Navigation() {
  const path = usePathname();
  const storedUser = Cookies.get(COOKIE_NAME);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
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

  const LOGIN_CHECK_NAV_ITEM: NavList = isLoggedIn
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
          {MAIN_NAV_ITEMS.map((item, index) => {
            const isDisabled = !isLoggedIn && item.requiresAuth;

            const linkClassName = classNames("nav-link", {
              "dropdown-toggle": item.dropdown,
              "text-primary": path === item.url,
              disabled: isDisabled,
            });

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
                  {...(item.dropdown && {
                    "data-bs-toggle": "dropdown",
                    "aria-expanded": "false",
                  })}
                  aria-disabled={isDisabled}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}

          <li className="nav-item">
            <Link
              href={LOGIN_CHECK_NAV_ITEM.url}
              className={`nav-link ${
                path === LOGIN_CHECK_NAV_ITEM.url ? "text-primary" : ""
              }`}
              onClick={
                LOGIN_CHECK_NAV_ITEM.onClick === "handleLogout"
                  ? handleLogout
                  : undefined
              }
            >
              {LOGIN_CHECK_NAV_ITEM.name}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
