"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActive("#" + visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    links.forEach(({ href }) => {
      const element = document.getElementById(href.split("#")[1]);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className="container header-inner">
        <Link
          href="/#top"
          className="wordmark"
          aria-label="Justin Angelo Perez, return to top"
          onClick={() => setOpen(false)}
        >
          <span className="monogram" aria-hidden="true">JP<span>.</span></span>
          <span className="wordmark-copy">{profile.name}<small>{profile.title}</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={active === link.href ? "location" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          ref={toggleRef}
          className="menu-toggle has-tooltip tooltip-below"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          data-tooltip={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" className="mobile-nav container" aria-label="Mobile navigation" hidden={!open}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={active === link.href ? "location" : undefined}>
            {link.label} <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        ))}
      </nav>
    </header>
  );
}
