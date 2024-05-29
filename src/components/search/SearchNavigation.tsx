"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SearchNavigation() {
  const path = usePathname();
  // const [searchedKeyword, setSearchedKeyword] =
  //   useRecoilState(searchedKeywordState);

  // const handleKeywordChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ): void => {
  //   setSearchedKeyword(event.target.value);
  // };

  // const handleKeyDown = (
  //   event: React.KeyboardEvent<HTMLInputElement>
  // ): void => {
  //   if (event.key === "Enter") {
  //     handleSearch(event);
  //   }
  // };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link
              href="/search/customer"
              className={`nav-link ${
                path === "/search/customer" ? "text-primary" : ""
              }`}
            >
              고객
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/search/item"
              className={`nav-link ${
                path === "/search/item" ? "text-primary" : ""
              }`}
            >
              아이템
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/search/wholesaler"
              className={`nav-link ${
                path === "/search/wholesaler" ? "text-primary" : ""
              }`}
            >
              도매상
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/search/publisher"
              className={`nav-link ${
                path === "/search/publisher" ? "text-primary" : ""
              }`}
            >
              출판사
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/search/distributor"
              className={`nav-link ${
                path === "/search/distributor" ? "text-primary" : ""
              }`}
            >
              배본사
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/search/order"
              className={`nav-link ${
                path === "/search/order" ? "text-primary" : ""
              }`}
            >
              주문
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/search/brand"
              className={`nav-link ${
                path === "/search/brand" ? "text-primary" : ""
              }`}
            >
              브랜드
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
