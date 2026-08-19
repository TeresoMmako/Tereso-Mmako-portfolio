import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Mail, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { NextPageButton } from "@/components/site/NextPageButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tereso Mmako, Health Sciences Student Portfolio" },
      {
        name: "description",
        content:
          "Personal portfolio of Tereso Mmako, a Health Sciences student at Wits. Skills, education, certifications and contact details.",
      },
      { property: "og:title", content: "Tereso Mmako, Health Sciences Student Portfolio" },
      {
        property: "og:description",
        content:
          "Personal portfolio of Tereso Mmako, a Health Sciences student at Wits. Skills, education, certifications and contact details.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0 surface-grid opacity-40" aria-hidden />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
            <div className="rise">
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                <Sparkles className="h-3.5 w-3.5" /> Welcome
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-6xl">
                Hi, I&apos;m Tereso Mmako
              </h1>
              <p className="mt-4 font-display text-lg font-bold text-accent sm:text-xl">
                Health Sciences Student
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                A curious, people-centred student building a career in health sciences — grounded in
                honesty, loyalty and compassion. This is my digital portfolio: who I am, what I can
                do, and where I&apos;m headed.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/tereso-mmako-cv.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 font-display text-sm font-bold text-primary transition-transform hover:-translate-y-0.5"
                >
                  <Download className="h-4 w-4" /> Download CV
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 font-display text-sm font-bold text-primary-foreground transition-colors hover:bg-cream/10"
                >
                  <Mail className="h-4 w-4" /> Get in touch
                </Link>
              </div>
            </div>

            <div className="rise justify-self-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] border border-cream/20" aria-hidden />
                <div className="flex h-64 w-64 items-center justify-center overflow-hidden rounded-[2rem] bg-cream/10 text-center sm:h-80 sm:w-80">
                  {/* Replace this placeholder with your photo: <img src="/profile.jpg" alt="Tereso Mmako" /> */}
                  <div>
                    <p className="font-display text-6xl font-extrabold text-cream/80">TM</p>
                    <p className="mt-3 px-6 text-xs uppercase tracking-[0.24em] text-primary-foreground/60">
                      Your photo here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { k: "Studying", v: "University of the Witwatersrand" },
              { k: "Focus", v: "Health Sciences" },
              { k: "Guided by", v: "Umuntu ngumuntu ngabantu" },
            ].map((item) => (
              <div
                key={item.k}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-soft">
                  {item.k}
                </p>
                <p className="mt-2 font-display text-lg font-bold text-primary">{item.v}</p>
              </div>
            ))}
          </div>
        </section>

        <NextPageButton to="/about" label="About Me" />
      </main>

      <SiteFooter />
    </div>
  );
}
