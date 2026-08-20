import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, ExternalLink, Mail, Sparkles } from "lucide-react";
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
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
          <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-24 lg:py-28">
            <div className="rise max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                <Sparkles className="h-3.5 w-3.5" /> Welcome
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-6xl">
                Hi, I'm Tereso Mmako
              </h1>
              <p className="mt-4 font-display text-lg font-bold text-accent sm:text-xl">
                Health Sciences Student
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                I am a curious, people-centred student building a career in health sciences, guided by
                honesty, loyalty and compassion. This is my digital portfolio, where you can read about
                who I am, what I can do, and where I am headed.
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
                <a
                  href="https://sites.google.com/students.wits.ac.za/mmako-tereso-portfolio-2?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 font-display text-sm font-bold text-primary-foreground transition-colors hover:bg-cream/10"
                >
                  <ExternalLink className="h-4 w-4" /> View my projects
                </a>
              </div>
            </div>
          </div>
        </section>

        <NextPageButton to="/about" label="About Me" />
      </main>

      <SiteFooter />
    </div>
  );
}
