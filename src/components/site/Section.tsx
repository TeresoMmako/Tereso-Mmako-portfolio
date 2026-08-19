import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  tone?: "default" | "muted";
};

export function Section({ eyebrow, title, description, children, tone = "default" }: SectionProps) {
  return (
    <section className={tone === "muted" ? "bg-secondary/50" : "bg-background"}>
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary-soft">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl font-extrabold text-primary sm:text-3xl">{title}</h2>
          {description && (
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
        <h1 className="mt-4 text-3xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
