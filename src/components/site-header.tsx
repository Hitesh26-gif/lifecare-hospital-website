"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { NAV_ITEMS, CONTACT, HOSPITAL_NAME } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#d9e4f2]/60 bg-white/95 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-white"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between sm:h-18">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f1f33] text-white">
            <span className="font-serif text-base font-bold leading-none">LC</span>
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold text-[#0f1f33]">
              {HOSPITAL_NAME}
            </span>
            <span className="text-[11px] text-[#5c7fbf]">Panvel, Maharashtra</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={CONTACT.phone ? `tel:${CONTACT.phone}` : undefined}
            aria-disabled={!CONTACT.phone}
            onClick={(e) => { if (!CONTACT.phone) e.preventDefault(); }}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#1fa6a6] focus:ring-offset-2 ${
              CONTACT.phone
                ? "text-[#1e3a5f] hover:bg-[#f0f4fa]"
                : "cursor-not-allowed text-[#88ace7]"
            }`}
          >
            <Phone size={15} aria-hidden />
            {CONTACT.phoneDisplay}
          </a>
          <Link href="#appointment" className="btn-cta">
            <Calendar size={15} aria-hidden />
            Appointment
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#d9e4f2] text-[#1e3a5f] md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      <div className={`md:hidden ${open ? "block" : "hidden"}`}>
        <div className="container-site border-t border-[#d9e4f2] py-4">
          <nav aria-label="Mobile" className="grid gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-[#1a3350] hover:bg-[#f0f4fa] focus:outline-none focus:ring-2 focus:ring-[#1fa6a6]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex gap-3">
            <a
              href={CONTACT.phone ? `tel:${CONTACT.phone}` : undefined}
              aria-disabled={!CONTACT.phone}
              onClick={(e) => { if (!CONTACT.phone) e.preventDefault(); }}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#d9e4f2] px-4 py-2.5 text-sm font-medium text-[#1e3a5f]"
            >
              <Phone size={15} aria-hidden />
              {CONTACT.phoneDisplay}
            </a>
            <Link
              href="#appointment"
              onClick={() => setOpen(false)}
              className="btn-cta flex-1"
            >
              <Calendar size={15} aria-hidden />
              Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
