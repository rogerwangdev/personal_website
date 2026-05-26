"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
];

function normalize(p: string) {
  return p === "/" ? p : p.replace(/\/$/, "");
}

function isActive(pathname: string, href: string) {
  const p = normalize(pathname);
  if (href === "/") return p === "/";
  return p === href || p.startsWith(href + "/");
}

export default function Nav() {
  const pathname = usePathname() ?? "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-(--border) bg-(--background)/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-semibold tracking-tight text-(--foreground) hover:text-(--accent) transition-colors"
        >
          Roger Wang
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {links.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={
                      "rounded-md px-3 py-2 text-sm transition-colors " +
                      (active
                        ? "text-(--foreground)"
                        : "text-(--muted) hover:text-(--foreground)")
                    }
                  >
                    {l.label}
                    {active && (
                      <span className="ml-1.5 inline-block h-1 w-1 rounded-full bg-(--accent) align-middle" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-md border border-(--border) text-(--muted) sm:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-(--border) bg-(--background) sm:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-6 py-3">
            {links.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={
                      "block rounded-md px-3 py-3 text-base transition-colors " +
                      (active
                        ? "text-(--accent)"
                        : "text-(--foreground) hover:text-(--accent)")
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
