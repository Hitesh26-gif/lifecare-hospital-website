import { BadgeHelp } from "lucide-react";

export function PlaceholderPill({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800 ${className ?? ""}`}
      title="Unverified — requires confirmation with the hospital"
    >
      <BadgeHelp size={12} aria-hidden />
      Unverified
    </span>
  );
}