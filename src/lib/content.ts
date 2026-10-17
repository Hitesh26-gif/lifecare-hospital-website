/**
 * Shared content for the prototype.
 *
 * IMPORTANT: This is an independent, unofficial design concept. No doctor
 * names, departments, facilities, contact details, testimonials, or medical
 * outcomes have been verified with the hospital. Every entry is marked
 * `verified: false` and is a placeholder to be replaced with confirmed
 * information before any real website is built.
 */

export type Placeholder = { label: string; verified: false; id?: string };

export type NavItem = { label: string; href: string };

export const HOSPITAL_NAME = "Life Care Multispeciality Hospital";
export const LOCATION_LABEL = "Vichumbe, Panvel, Maharashtra, India";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Specialties", href: "#specialties" },
  { label: "Doctors", href: "#doctors" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact", href: "#contact" },
];

export const CONTACT = {
  phone: null as string | null,
  phoneDisplay: "To be confirmed",
  email: null as string | null,
  emailDisplay: "To be confirmed",
  address: "Vichumbe, Panvel, Maharashtra, India",
  mapEmbedUrl: null as string | null,
  directionsUrl: null as string | null,
};

export const HERO = {
  eyebrow: "Multispeciality Hospital",
  heading: "Compassionate care, close to home.",
  subheading:
    "An independent, unofficial website redesign concept for Life Care Multispeciality Hospital in Panvel. All content below is placeholder and requires confirmation with the hospital.",
  primaryCta: { label: "Request an Appointment", href: "#appointment" },
  secondaryCta: { label: "Get Directions", href: "#contact" },
};

export const SPECIALTIES: Placeholder[] = [
  { label: "Cardiology", verified: false, id: "specialty-1" },
  { label: "Orthopaedics", verified: false, id: "specialty-2" },
  { label: "Obstetrics & Gynaecology", verified: false, id: "specialty-3" },
  { label: "Paediatrics", verified: false, id: "specialty-4" },
  { label: "Neurology", verified: false, id: "specialty-5" },
  { label: "Gastroenterology", verified: false, id: "specialty-6" },
  { label: "Nephrology", verified: false, id: "specialty-7" },
  { label: "Dermatology", verified: false, id: "specialty-8" },
];

export const DOCTORS: Placeholder[] = [
  { label: "Doctor name — to be confirmed", verified: false, id: "doctor-1" },
  { label: "Doctor name — to be confirmed", verified: false, id: "doctor-2" },
  { label: "Doctor name — to be confirmed", verified: false, id: "doctor-3" },
];

export const FACILITIES: Placeholder[] = [
  { label: "Emergency & Trauma services — to be confirmed", verified: false, id: "facility-1" },
  { label: "Diagnostic Imaging — to be confirmed", verified: false, id: "facility-2" },
  { label: "ICU / Critical Care — to be confirmed", verified: false, id: "facility-3" },
  { label: "Pharmacy — to be confirmed", verified: false, id: "facility-4" },
  { label: "OPD / Outpatient services — to be confirmed", verified: false, id: "facility-5" },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "Specialties", href: "#specialties" },
  { label: "Doctors", href: "#doctors" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact", href: "#contact" },
];

export const LEGAL = {
  conceptStatement:
    "This website is an independent, unofficial design concept. It is not affiliated with, endorsed by, or approved by Life Care Multispeciality Hospital. All information displayed is placeholder and must be verified with the hospital before use.",
  noPatientData:
    "This prototype does not collect, store, or transmit real patient information. The appointment form is a demonstration of layout and validation only.",
};