import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  heading,
  lede,
  align = "center",
}: {
  eyebrow?: string;
  heading: string;
  lede?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="heading-md">{heading}</h2>
      {lede ? <p className="lede mx-auto mt-4">{lede}</p> : null}
    </div>
  );
}
