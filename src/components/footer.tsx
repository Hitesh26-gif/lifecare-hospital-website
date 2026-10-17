import Link from "next/link";
import { HOSPITAL_NAME, LOCATION_LABEL, FOOTER_LINKS } from "@/lib/content";
import { LEGAL } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-[#0f1f33] text-white">
      <div className="container-site py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <span className="font-serif text-base font-bold leading-none">LC</span>
              </span>
              <div>
                <p className="text-sm font-semibold">{HOSPITAL_NAME}</p>
                <p className="text-xs text-[#88ace7]">{LOCATION_LABEL}</p>
              </div>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-[#88ace7]">
              {LEGAL.conceptStatement}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#4fc2c0]">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#b3c9e4] transition-colors hover:text-white focus:outline-none focus:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Prototype notice */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#4fc2c0]">
              Prototype notice
            </p>
            <p className="mt-4 text-xs leading-relaxed text-[#88ace7]">
              {LEGAL.noPatientData}
            </p>
          </div>

          {/* Disclaimer */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#4fc2c0]">
              Disclaimer
            </p>
            <p className="mt-4 text-xs leading-relaxed text-[#88ace7]">
              This is an independent, unofficial redesign concept. All information
              requires confirmation with Life Care Multispeciality Hospital before
              any real use.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#88ace7]">
          <p>© 2026 Life Care Multispeciality Hospital Website Redesign Concept</p>
          <p>Independent prototype — not affiliated with the hospital</p>
        </div>
      </div>
    </footer>
  );
}
