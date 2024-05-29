"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SearchNavigation() {
  const path = usePathname();

  const navItems = [
    { href: "/search/customer", label: "고객" },
    { href: "/search/item", label: "아이템" },
    { href: "/search/wholesaler", label: "도매상" },
    { href: "/search/publisher", label: "출판사" },
    { href: "/search/distributor", label: "배본사" },
    { href: "/search/order", label: "주문" },
    { href: "/search/brand", label: "브랜드" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <ul className="navbar-nav mx-auto">
          {navItems.map((item) => (
            <li className="nav-item" key={item.href}>
            <Link href={item.href}
                className={`nav-link ${path === item.href ? "text-primary" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
}
