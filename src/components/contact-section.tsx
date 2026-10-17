"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { CONTACT, LOCATION_LABEL, HOSPITAL_NAME } from "@/lib/content";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-primary bg-[#f0f4fa]"
    >
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — info cards */}
          <div>
            <p className="eyebrow">Location & Contact</p>
            <h2 className="heading-lg mt-3">
              Find us in <span className="italic text-[#146f6d]">Panvel</span>
            </h2>
            <p className="lede mt-5 text-left">
              Contact details below are placeholders. Verify phone, email, address,
              and opening hours with the hospital before publishing.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value: LOCATION_LABEL,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: CONTACT.phoneDisplay,
                  href: CONTACT.phone ? `tel:${CONTACT.phone}` : undefined,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: CONTACT.emailDisplay,
                  href: CONTACT.email ?? undefined,
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Opening hours — to be confirmed",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-xl border border-[#d9e4f2]/60 bg-white p-4 shadow-soft"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#eafaf8] text-[#146f6d]">
                    <Icon size={18} aria-hidden />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#88ace7]">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-[#1e3a5f] hover:text-[#146f6d] focus:outline-none focus:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#5c7fbf]">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={CONTACT.directionsUrl ?? undefined}
                aria-disabled={!CONTACT.directionsUrl}
                onClick={(e) => { if (!CONTACT.directionsUrl) e.preventDefault(); }}
                className={`btn-ghost ${!CONTACT.directionsUrl ? "pointer-events-none opacity-50" : ""}`}
              >
                Get directions
              </a>
              <a
                href={CONTACT.phone ? `tel:${CONTACT.phone}` : undefined}
                aria-disabled={!CONTACT.phone}
                onClick={(e) => { if (!CONTACT.phone) e.preventDefault(); }}
                className={`btn-cta ${!CONTACT.phone ? "pointer-events-none opacity-50" : ""}`}
              >
                Call now
              </a>
            </div>
          </div>

          {/* Right — map placeholder */}
          <div className="rounded-2xl border border-[#d9e4f2] bg-white shadow-md overflow-hidden">
            <div className="aspect-[4/3] w-full bg-[#d9e4f2] flex items-center justify-center">
              <div className="text-center px-6">
                <MapPin size={40} className="mx-auto text-[#88ace7] mb-3" aria-hidden />
                <p className="text-sm font-medium text-[#1e3a5f]">{HOSPITAL_NAME}</p>
                <p className="text-sm text-[#5c7fbf] mt-1">{LOCATION_LABEL}</p>
                <p className="text-xs text-[#88ace7] mt-3">
                  Map embed — add confirmed coordinates and embedding URL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
