import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { SpecialtiesSection } from "@/components/specialties-section";
import { DoctorsSection } from "@/components/doctors-section";
import { FacilitiesSection } from "@/components/facilities-section";
import { AppointmentSection } from "@/components/appointment-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SpecialtiesSection />
        <DoctorsSection />
        <FacilitiesSection />
        <AppointmentSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
