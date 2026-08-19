import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowLeft } from "lucide-react";

type Path = "/" | "/about" | "/education" | "/contact";

type Props = {
  to: Path;
  label: string;
  back?: { to: Path; label: string };
};

export function NextPageButton({ to, label, back }: Props) {
  return (
    <div className="flex flex-col items-center gap-3 px-5 pb-16 pt-10 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
        Next
      </span>
      <Link
        to={to}
        className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 font-display text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:bg-primary-soft hover:shadow-[var(--shadow-lift)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {label}
        <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
      </Link>

      {back && (
        <Link
          to={back.to}
          className="group mt-2 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-display text-sm font-bold text-primary transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to {back.label}
        </Link>
      )}
    </div>
  );
}
