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

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link
              href={APP_ROUTES.URL.EXIT}
              className={`nav-link ${
                path === APP_ROUTES.URL.EXIT ? "text-primary" : ""
              }`}
            >
              {APP_ROUTES.NAME.EXIT}
            </Link>
          </li>

          <li className="nav-item">
            {isLoggedIn ? (
              <Link
                href={APP_ROUTES.URL.LOGOUT}
                className={`nav-link ${
                  path === APP_ROUTES.URL.LOGOUT ? "text-primary" : ""
                }`}
                onClick={handleLogout}
              >
                {APP_ROUTES.NAME.LOGOUT}
              </Link>
            ) : (
              <Link
                href={APP_ROUTES.URL.LOGIN}
                className={`nav-link ${
                  path === APP_ROUTES.URL.LOGIN ? "text-primary" : ""
                }`}
              >
                {APP_ROUTES.NAME.LOGIN}
              </Link>
            )}
          </li>
          <li className="nav-item">
            <Link
              href={APP_ROUTES.URL.SEARCH}
              className={`nav-link ${
                path === APP_ROUTES.URL.SEARCH ? "text-primary" : ""
              }`}
            >
              {APP_ROUTES.NAME.SEARCH}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href={APP_ROUTES.URL.INBOUND}
              className={`nav-link ${
                path === APP_ROUTES.URL.INBOUND ? "text-primary" : ""
              }`}
            >
              {APP_ROUTES.NAME.INBOUND}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href={APP_ROUTES.URL.STOCK}
              className={`nav-link ${
                path === APP_ROUTES.URL.STOCK ? "text-primary" : ""
              }`}
            >
              {APP_ROUTES.NAME.STOCK}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href={APP_ROUTES.URL.ORDER}
              className={`nav-link ${
                path === APP_ROUTES.URL.ORDER ? "text-primary" : ""
              }`}
            >
              {APP_ROUTES.NAME.ORDER}
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              href={APP_ROUTES.URL.OTHER}
              className={`nav-link dropdown-toggle ${
                path === APP_ROUTES.URL.OTHER ? "text-primary" : ""
              }`}
              id="orderDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {APP_ROUTES.NAME.OTHER}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href={APP_ROUTES.URL.CUSTOMERSERVICE}
              className={`nav-link ${
                path === APP_ROUTES.URL.CUSTOMERSERVICE ? "text-primary" : ""
              }`}
            >
              {APP_ROUTES.NAME.CUSTOMERSERVICE}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
