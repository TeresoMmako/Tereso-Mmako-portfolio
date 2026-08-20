import { createFileRoute } from "@tanstack/react-router";
import { Award, ExternalLink, GraduationCap } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { NextPageButton } from "@/components/site/NextPageButton";
import { PageHero, Section } from "@/components/site/Section";
import { TimelineItem } from "@/components/site/TimelineItem";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education and Certifications, Tereso Mmako" },
      {
        name: "description",
        content:
          "Schooling career from Germiston South Primary to the University of the Witwatersrand, plus HubSpot online courses and certifications.",
      },
      { property: "og:title", content: "Education and Certifications, Tereso Mmako" },
      {
        property: "og:description",
        content:
          "Schooling career, HubSpot online courses and certifications of Health Sciences student Tereso Mmako.",
      },
    ],
  }),
  component: Education,
});

const SCHOOLING = [
  {
    stage: "Primary school",
    institution: "Germiston South Primary School",
    period: "2013 – 2019",
  },
  {
    stage: "High school",
    institution: "Germiston High School",
    period: "2020 – 2024",
  },
  {
    stage: "Tertiary",
    institution: "University of the Witwatersrand",
    period: "2025 – present",
    detail: "Currently studying towards a qualification in Health Sciences.",
  },
];

const COURSES = [
  "Inbound",
  "Digital Marketing",
  "Digital Advertising",
  "Social Media",
  "Social Media Marketing",
];

const CERTIFICATIONS = [
  ...COURSES.map((course) => ({
    name: `${course} Certification`,
    issuer: "HubSpot Academy",
    year: "2026",
    progress: 100,
  })),
  {
    name: "Spirit of Youth Programme Certificate",
    issuer: "Spirit of Youth",
    year: "2023",
    progress: 100,
  },
  { name: "Canva Essentials Certificate", issuer: "Canva", year: "2025", progress: 100 },
  { name: "First Aid Level 1 Certificate", issuer: "First Aid Training", year: "2025", progress: 100 },
  { name: "Google AI Essentials", issuer: "Google", year: "2026", progress: 45 },
  {
    name: "Content Marketing Certification",
    issuer: "HubSpot Academy",
    year: "2026",
    progress: 60,
  },
];

function Education() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Education"
          title="My learning journey"
          description="From primary school in Germiston to university in Johannesburg, plus the online courses and certifications I have completed along the way."
        />

        <Section eyebrow="Schooling career" title="Where I've studied">
          <ol className="relative space-y-10 pl-1">
            <span
              className="pointer-events-none absolute left-[11px] top-3 bottom-3 w-px bg-border"
              aria-hidden
            />
            {SCHOOLING.map((item) => (
              <TimelineItem key={item.institution} {...item} />
            ))}
          </ol>
        </Section>

        <Section
          eyebrow="Online courses"
          title="HubSpot Academy"
          description="Courses completed through HubSpot Academy."
          tone="muted"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course) => (
              <div
                key={course}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
              >
                <GraduationCap className="h-5 w-5 shrink-0 text-accent" />
                <p className="font-display text-base font-bold text-primary">{course}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Certifications"
          title="Certifications earned"
          description="Certificates I have completed, plus the ones I am currently working through."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((cert) => (
              <article
                key={cert.name}
                className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <Award className="h-6 w-6 text-accent" />
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                    {cert.year}
                  </span>
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-lg font-bold text-primary">{cert.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                    <span>{cert.progress === 100 ? "Completed" : "In progress"}</span>
                    <span>{cert.progress}%</span>
                  </div>
                  <div
                    className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary"
                    role="progressbar"
                    aria-valuenow={cert.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${cert.name} progress`}
                  >
                    <span
                      className="block h-full rounded-full bg-primary"
                      style={{ width: `${cert.progress}%` }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Previous work" title="Previous portfolios" tone="muted">
          <a
            href="https://sites.google.com/students.wits.ac.za/mmako-tereso-portfolio-2?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1 sm:max-w-xl"
          >
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary-soft">
              <ExternalLink className="h-4 w-4" /> Google Sites
            </span>
            <span className="font-display text-lg font-bold text-primary group-hover:underline">
              Mmako Tereso Portfolio
            </span>
            <span className="text-sm text-muted-foreground">
              My earlier digital portfolio, built with Google Sites. Opens in a new tab.
            </span>
          </a>
        </Section>

        <NextPageButton to="/contact" label="Contact Me" back={{ to: "/about", label: "About Me" }} />
      </main>
      <SiteFooter />
    </div>
  );
}
