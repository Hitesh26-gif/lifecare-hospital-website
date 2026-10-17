"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

export function AppointmentForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Enter your full name.";
    if (!/^\+?\d[\d\s-]{6,}$/.test(phone)) e.phone = "Enter a valid phone number.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email.";
    if (message.trim().length < 5) e.message = "Please share a brief message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-[#eafaf8] text-[#146f6d]">
          <CheckCircle2 size={28} aria-hidden />
        </span>
        <h3 className="text-lg font-semibold text-[#0f1f33]">Demo submission received</h3>
        <p className="max-w-sm text-sm text-[#5c7fbf]">
          This prototype does not send data to the hospital. Connect the form to
          a real booking system and verify contact details before launch.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
            setErrors({});
          }}
          className="btn-ghost mt-2"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <h3 className="text-base font-semibold text-[#0f1f33]">Appointment Request</h3>
      <p className="text-xs text-[#5c7fbf]">All fields marked with * are required.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#1e3a5f]">
            Full name *
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#1e3a5f]">
            Phone number *
          </label>
          <input
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input-field"
            placeholder="+91 98765 43210"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#1e3a5f]">
          Email (optional)
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          placeholder="your@email.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#1e3a5f]">
          Message *
        </label>
        <textarea
          id="message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input-field resize-none"
          placeholder="Describe your reason for visit or any specific requirements..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <div className="flex items-center justify-between gap-4 pt-2">
        <button type="submit" className="btn-cta">
          Submit Request
        </button>
        <p className="text-xs text-[#88ace7]">No data is sent. This is a UI prototype.</p>
      </div>
    </form>
  );
}
