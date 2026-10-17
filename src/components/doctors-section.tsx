import { UserRound } from "lucide-react";
import { DOCTORS } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function DoctorsSection() {
  return (
    <section
      id="doctors"
      aria-labelledby="doctors-heading"
      className="section-primary bg-[#f0f4fa]"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Our Medical Team"
          heading="Dedicated healthcare professionals"
          lede="Doctor names, qualifications, and specialties below are placeholders for this independent concept. Replace each entry with verified details from the hospital before use."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((d) => (
            <article
              key={d.id!}
              className="group rounded-2xl border border-[#d9e4f2]/60 bg-white p-6 shadow-soft transition-shadow duration-200 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-[#0f1f33] text-white">
                  <UserRound size={24} aria-hidden />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#0f1f33]">
                    {d.label}
                  </h3>
                  <span className="badge-unverified mt-1.5">Unverified</span>
                </div>
              </div>
              <div className="rule-wide mt-5" aria-hidden />
              <p className="mt-4 text-sm leading-relaxed text-[#5c7fbf]">
                Qualification, specialty, and consultation details to be confirmed
                with the hospital.
              </p>
              <button
                type="button"
                className="mt-5 text-sm font-semibold text-[#146f6d] transition-colors hover:text-[#1a6f6d] focus:outline-none focus:underline"
                disabled
              >
                View profile →
              </button>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[#88ace7]">
          {DOCTORS.length} placeholder profiles shown. Add verified doctor information when available.
        </p>
      </div>
    </section>
  );
}
