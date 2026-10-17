import { AlertTriangle } from "lucide-react";

export function UnofficialNotice() {
  return (
    <div
      role="alert"
      aria-live="polite"
      className="bg-[#fef3c7] border-b border-[#fde68a] text-[#92400e]"
    >
      <div className="container-site flex items-start gap-3 py-2.5 text-sm">
        <AlertTriangle
          size={16}
          className="mt-0.5 shrink-0 text-[#d97706]"
          aria-hidden
        />
        <p>
          <span className="font-semibold">Unofficial concept prototype.</span>{" "}
          This is an independent design concept, not affiliated with, endorsed
          by, or approved by Life Care Multispeciality Hospital. All details
          shown are unverified and require confirmation with the hospital
          before use.
        </p>
      </div>
    </div>
  );
}
