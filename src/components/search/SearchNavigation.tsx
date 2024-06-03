"use client";

import { SEARCH_NAVIGATION_ITEMS } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SearchNavigation = () => {
  const path = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav mx-auto">
          {SEARCH_NAVIGATION_ITEMS.map((item) => (
            <li className="nav-item" key={item.url}>
              <Link
                href={item.url}
                className={`nav-link${path === item.url ? " text-primary" : ""}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SearchNavigation;
