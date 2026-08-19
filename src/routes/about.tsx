import { createFileRoute } from "@tanstack/react-router";
import { Code, Heart, Image, Mail, MessagesSquare, Quote, Users } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { NextPageButton } from "@/components/site/NextPageButton";
import { PageHero, Section } from "@/components/site/Section";
import { SkillCard } from "@/components/site/SkillCard";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tereso Mmako, Values, Skills and Fun Facts" },
      {
        name: "description",
        content:
          "Health Sciences student guided by honesty, loyalty and compassion. Technical skills in Canva and digital communication, plus strong communication and teamwork skills.",
      },
      { property: "og:title", content: "About Tereso Mmako, Values, Skills and Fun Facts" },
      {
        property: "og:description",
        content:
          "Health Sciences student guided by honesty, loyalty and compassion, with media, design and communication skills.",
      },
    ],
  }),
  component: About,
});

const VALUES = [
  { title: "Honesty", copy: "Doing the right thing, especially when nobody is watching." },
  { title: "Loyalty", copy: "Showing up consistently for the people and teams I commit to." },
  { title: "Compassion", copy: "Leading with empathy, which is at the heart of health sciences." },
];

function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="About Me"
          title="Health Sciences Student"
          description="I am Tereso Mmako, a Health Sciences student at the University of the Witwatersrand. I believe that people are at the centre of good care, good work and good design."
        />

        <Section
          eyebrow="What I stand for"
          title="My values"
          description="Three principles shape how I study, work and treat the people around me."
        >
          <div className="grid gap-5 sm:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <Heart className="h-5 w-5 text-accent" />
                <h3 className="mt-4 font-display text-lg font-bold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.copy}</p>
              </div>
            ))}
          </div>

          <figure className="mt-8 rounded-2xl bg-primary p-8 text-primary-foreground sm:p-10">
            <Quote className="h-7 w-7 text-accent" />
            <blockquote className="mt-4 font-display text-2xl font-extrabold leading-snug sm:text-3xl">
              &ldquo;Umuntu ngumuntu ngabantu&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm text-primary-foreground/80">
              An isiZulu phrase meaning &ldquo;I am because we are.&rdquo; It is a quote that holds all
              three of my values together.
            </figcaption>
          </figure>
        </Section>

        <Section
          eyebrow="Technical skills"
          title="What I can do with digital tools"
          tone="muted"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <SkillCard
              icon={Image}
              title="Media & Design"
              items={[
                "Editing photos and creating graphics using Canva",
                "Editing videos using Microsoft Clipchamp",
              ]}
            />
            <SkillCard
              icon={Mail}
              title="Digital Presence & Communication"
              items={[
                "Professional emails: mastering Outlook and Gmail features like scheduling, filters and professional signatures",
                "Digital portfolio: building a personal website using Google Sites to showcase projects",
              ]}
            />
            <SkillCard
              icon={Code}
              title="Computer & Programming Skills"
              items={["Writing basic code in Delphi"]}
            />
          </div>
        </Section>

        <Section eyebrow="Soft skills" title="How I work with people">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              icon={MessagesSquare}
              title="Communication skills"
              items={[
                "Public speaking: presenting ideas in front of a group of people",
                "Active listening: being present and actively engaging in a conversation",
                "Dialogue: holding balanced, two-way conversations",
              ]}
            />
            <SkillCard
              icon={Users}
              title="Teamwork & people skills"
              items={[
                "Collaboration: working seamlessly with people from different backgrounds",
                "Conflict resolution: finding a middle ground that favours all the parties involved",
              ]}
            />
            <SkillCard
              icon={Heart}
              title="Work ethic & self-management"
              items={[
                "Adaptability: adjusting to new tasks, tools and environments with ease",
                "Dependability: following through on commitments and being reliable",
                "Time management: planning and prioritising work to meet deadlines",
              ]}
            />
          </div>
        </Section>

        <Section eyebrow="Beyond the books" title="Fun facts about me" tone="muted">
          <div className="grid gap-5 sm:grid-cols-2">
            {["I can play chess", "I can hand sew"].map((fact) => (
              <div
                key={fact}
                className="rounded-2xl border border-border bg-card p-6 font-display text-lg font-bold text-primary shadow-[var(--shadow-soft)]"
              >
                {fact}
              </div>
            ))}
          </div>
        </Section>

        <NextPageButton to="/education" label="Education" />
      </main>
      <SiteFooter />
    </div>
  );
}
