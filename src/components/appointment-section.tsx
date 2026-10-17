import { SectionHeading } from "@/components/section-heading";
import { AppointmentForm } from "@/components/appointment-form";
import { LEGAL } from "@/lib/content";

export function AppointmentSection() {
  return (
    <section
      id="appointment"
      aria-labelledby="appointment-heading"
      className="section-primary bg-[#0f1f33]"
    >
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — text */}
          <div>
            <p className="eyebrow">Request an Appointment</p>
            <h2 className="heading-lg mt-3 text-white">
              Schedule your <br />
              <span className="italic text-[#4fc2c0]">consultation today</span>
            </h2>
            <p className="lede mt-5 text-left text-[#b3c9e4]">
              Use the form to submit an appointment request. This is a prototype
              demonstration only — no data is transmitted to the hospital.
            </p>
            <div className="rule mt-8 bg-[#4fc2c0]/40" aria-hidden />
            <p className="mt-6 text-xs text-[#88ace7]">{LEGAL.noPatientData}</p>
          </div>

          {/* Right — form card on dark background */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
