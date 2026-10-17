import { Building2, HeartPulse, Activity, ShieldCheck, Truck } from "lucide-react";
import { FACILITIES } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

const FACILITY_ICONS = [Building2, HeartPulse, Activity, ShieldCheck, Truck];

export function FacilitiesSection() {
  return (
    <section
      id="facilities"
      aria-labelledby="facilities-heading"
      className="section-primary bg-white"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Hospital Facilities"
          heading="Modern infrastructure for patient care"
          lede="Facility descriptions are placeholders for this independent concept. Confirm the full facility list, equipment, and operating hours with the hospital."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {FACILITIES.map((f, i) => {
            const Icon = FACILITY_ICONS[i % FACILITY_ICONS.length];
            return (
              <article
                key={f.label}
                className="group flex flex-col rounded-2xl border border-[#d9e4f2]/60 bg-[#fafbfc] p-6 transition-all duration-200 hover:border-[#1fa6a6]/30 hover:shadow-md"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#eafaf8] text-[#146f6d] transition-colors group-hover:bg-[#146f6d] group-hover:text-white">
                  <Icon size={22} aria-hidden />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-[#0f1f33]">
                  {f.label}
                </h3>
                <span className="badge-unverified mt-2 self-start">
                  Unverified
                </span>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-[#5c7fbf]">
                  Facility details, equipment specifications, and operating
                  hours to be confirmed with the hospital.
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-xl border border-dashed border-[#d9e4f2] bg-[#f0f4fa]/50 p-6 text-center">
          <p className="text-sm text-[#5c7fbf]">
            <span className="font-semibold text-[#1e3a5f]">No imagery included.</span>{" "}
            When real facility photos are available, they should be added here to
            showcase the hospital environment.
          </p>
        </div>
      </div>
    </section>
  );
}
