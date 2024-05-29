"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { navItems } from "@/constants/navItems";

export default function SearchNavigation() {
  const path = usePathname();


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
