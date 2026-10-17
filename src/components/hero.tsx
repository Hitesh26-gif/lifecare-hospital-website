"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Phone, Calendar, Clock } from "lucide-react";
import { HERO, CONTACT, LOCATION_LABEL } from "@/lib/content";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-navy-900 text-white"
    >
      <div
        className="absolute inset-0 opacity-[0.04]" aria-hidden
      >
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="absolute left-0 top-0 h-1 w-full bg-teal-600" aria-hidden />

      <div className="container-site relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — editorial text */}
          <div className="max-w-xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" aria-hidden />
              {HERO.eyebrow}
            </span>

            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight text-white">
              {HERO.heading}
            </h1>

            <p className="mt-6 text-base leading-relaxed text-navy-200">
              {HERO.subheading}
            </p>

            <div className="mt-8 flex items-start gap-2">
              <div className="rounded-full bg-teal-500 w-8 h-8 flex items-center justify-center">
                <ArrowRight size={16} aria-hidden />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">
                  Quick access
                </p>
                <p className="text-sm font-medium text-white">
                  Call, directions, or appointment
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-2 text-navy-400">
                <MapPin size={15} className="text-teal-500" aria-hidden />
                <span>{LOCATION_LABEL}</span>
              </div>
              <div className="flex items-center gap-2 text-navy-400">
                <Phone size={15} className="text-teal-500" aria-hidden />
                <span>{CONTACT.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2 text-navy-400">
                <Clock size={15} className="text-teal-500" aria-hidden />
                <span>Opening hours — to be confirmed</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-8 flex items-center gap-8">
            <div className="w-px bg-navy-200" />
            <span className="text-sm text-navy-500 opacity-60">or</span>
            <div className="w-px bg-navy-200" />
          </div>
          <div className="mt-6 text-xs text-navy-500 opacity-60">
            This is an unofficial prototype — no data is sent to the hospital.
          </div>
        </div>

        {/* Right — solid info panel */}
        <div className="relative">
          <div className="rounded-xl bg-navy-950 p-6">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-navy-400">
                Quick access
              </p>
              <span className="badge-unverified">
                Prototype demo
              </span>
            </div>

            <div className="space-y-3">
              <a
                href={CONTACT.phone ? `tel:${CONTACT.phone}` : undefined}
                aria-disabled={!CONTACT.phone}
                onClick={(e) => { if (!CONTACT.phone) e.preventDefault(); }}
                className="flex items-center gap-4 rounded-xl border border-navy-200 px-4 py-3.5 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-500/20 text-teal-500">
                  <Phone size={18} aria-hidden />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">Call</p>
                  <p className="text-sm font-semibold text-white">{CONTACT.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={CONTACT.directionsUrl ?? undefined}
                aria-disabled={!CONTACT.directionsUrl}
                onClick={(e) => { if (!CONTACT.directionsUrl) e.preventDefault(); }}
                className="flex items-center gap-4 rounded-xl border border-navy-200 px-4 py-3.5 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-500/20 text-teal-500">
                  <MapPin size={18} aria-hidden />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-400">Directions</p>
                  <p className="text-sm font-semibold text-white">
                    {CONTACT.directionsUrl ? "Open map" : "To be confirmed"}
                  </p>
                </div>
              </a>

              <Link
                href="#appointment"
                className="btn-primary mt-4 w-full justify-center">
                Request an Appointment
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>

            {/* Decorative corner accent */}
            <div className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 rounded-full bg-teal-600/10" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}