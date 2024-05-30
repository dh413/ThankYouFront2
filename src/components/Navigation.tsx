"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

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
    Cookies.remove("user");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link
              href=""
              className={`nav-link ${path === "" ? "text-primary" : ""}`}
            >
              종료
            </Link>
          </li>
          <li className="nav-item">
            {isLoggedIn ? (
              <Link
                href="/login"
                className={`nav-link ${
                  path === "/login" ? "text-primary" : ""
                }`}
                onClick={handleLogout}
              >
                로그아웃
              </Link>
            ) : (
              <Link
                href="/login"
                className={`nav-link ${
                  path === "/login" ? "text-primary" : ""
                }`}
              >
                로그인
              </Link>
            )}
          </li>
          <li className="nav-item">
            <Link
              href="/search"
              className={`nav-link ${path === "/search" ? "text-primary" : ""}`}
            >
              검색
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href=""
              className={`nav-link ${path === "" ? "text-primary" : ""}`}
            >
              입고
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href=""
              className={`nav-link ${path === "" ? "text-primary" : ""}`}
            >
              재고
            </Link>
          </li>

          <li className="nav-item">
            <Link
              href=""
              className={`nav-link ${path === "" ? "text-primary" : ""}`}
            >
              주문
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              href=""
              className={`nav-link dropdown-toggle ${
                path === "" ? "text-primary" : ""
              }`}
              id="orderDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              기타
            </Link>
          </li>

          <li className="nav-item">
            <Link
              href=""
              className={`nav-link ${path === "" ? "text-primary" : ""}`}
            >
              상담원
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
