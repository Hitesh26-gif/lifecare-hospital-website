import { Stethoscope } from "lucide-react";
import { SPECIALTIES } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function SpecialtiesSection() {
  return (
    <section
      id="specialties"
      aria-labelledby="specialties-heading"
      className="section-primary bg-white"
    >
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — editorial column */}
          <div>
            <p className="eyebrow">Medical Specialties</p>
            <h2 className="heading-lg mt-3">
              Comprehensive care across <br className="hidden sm:block" />
              <span className="italic text-[#146f6d]">specialised departments</span>
            </h2>
            <p className="lede mt-5 text-left">
              The specialties listed below are placeholders for this independent
              redesign concept. Each must be confirmed with Life Care
              Multispeciality Hospital before publication.
            </p>
            <div className="rule mt-8" aria-hidden />
          </div>

          {/* Right — asymmetric grid, not uniform cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {SPECIALTIES.slice(0, 4).map((s, i) => (
              <article
                key={s.label}
                className={`rounded-xl border border-[#d9e4f2]/60 bg-[#fafbfc] p-5 transition-shadow duration-200 hover:shadow-md ${
                  i === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#eafaf8] text-[#146f6d]">
                      <Stethoscope size={18} aria-hidden />
                    </span>
                    <h3 className="text-sm font-semibold text-[#0f1f33]">
                      {s.label}
                    </h3>
                  </div>
                  <span className="badge-unverified shrink-0">Unverified</span>
                </div>
                {i === 0 && (
                  <p className="mt-3 text-xs text-[#5c7fbf]">
                    Featured specialty — details to be confirmed with the hospital.
                  </p>
                )}
              </article>
            ))}
            {SPECIALTIES.slice(4).map((s) => (
              <article
                key={s.label}
                className="rounded-xl border border-[#d9e4f2]/60 bg-[#fafbfc] p-4 transition-shadow duration-200 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#eafaf8] text-[#146f6d]">
                    <Stethoscope size={14} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-sm font-medium text-[#0f1f33]">
                      {s.label}
                    </h3>
                    <span className="badge-unverified mt-1">Unverified</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
