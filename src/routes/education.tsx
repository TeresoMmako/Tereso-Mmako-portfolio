import { createFileRoute } from "@tanstack/react-router";
import { Award, GraduationCap } from "lucide-react";
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
          <ol className="relative space-y-10 border-l border-border pl-1">
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
          description="HubSpot Academy certifications. Add more here as you complete them."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course) => (
              <article
                key={course}
                className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
              >
                <Award className="h-6 w-6 text-accent" />
                <div className="mt-5">
                  <h3 className="font-display text-lg font-bold text-primary">
                    {course} Certification
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">HubSpot Academy</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <NextPageButton to="/contact" label="Contact Me" />
      </main>
      <SiteFooter />
    </div>
  );
}
