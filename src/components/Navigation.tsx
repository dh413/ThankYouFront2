"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { APP_ROUTES, MAIN_NAVIGATION_ITEMS } from "@/constants/routes";
import { CookieKey } from "@/constants/key";
import { NavgationInfo } from "@/types/common/navigation";

export default function Navigation() {
  const path = usePathname();

  const storedUser = Cookies.get(CookieKey.User);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, [storedUser]);

  const handleLogout = () => {
    Cookies.remove(CookieKey.User);
    setIsLoggedIn(false);
    router.push(APP_ROUTES.URL.LOGIN);
  };

  const LOGIN_CHECK_NAV_ITEM: NavgationInfo = isLoggedIn
    ? {
        url: APP_ROUTES.URL.LOGOUT,
        name: APP_ROUTES.NAME.LOGOUT,
        requiresAuth: true,
        onClick: handleLogout,
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
          {MAIN_NAVIGATION_ITEMS.map((item) => {
            const isDisabled = !isLoggedIn && item.requiresAuth;
            const linkClassName = `nav-link${item.dropdown ? " dropdown-toggle" : ""}${path === item.url ? " text-primary" : ""}${isDisabled ? " disabled" : ""}`;

            return (
              <li
                className={`nav-item${item.dropdown ? " dropdown" : ""}`}
                key={item.url}
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
              onClick={LOGIN_CHECK_NAV_ITEM.onClick ?? undefined}
            >
              {LOGIN_CHECK_NAV_ITEM.name}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
