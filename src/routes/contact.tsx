import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { NextPageButton } from "@/components/site/NextPageButton";
import { PageHero } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tereso Mmako" },
      {
        name: "description",
        content:
          "Get in touch with Tereso Mmako by email at blessing.mmako1@gmail.com or by phone on 063 806 5713.",
      },
      { property: "og:title", content: "Contact Tereso Mmako" },
      {
        property: "og:description",
        content: "Email blessing.mmako1@gmail.com or call 063 806 5713.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Contact"
          title="Let's connect"
          description="I'd love to hear about opportunities, collaborations or anything else. The quickest ways to reach me are below."
        />

        <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <div className="grid gap-5 md:grid-cols-2">
            <a
              href="mailto:blessing.mmako1@gmail.com"
              className="group rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-soft">
                Email
              </p>
              <p className="mt-2 break-all font-display text-lg font-bold text-primary group-hover:underline">
                blessing.mmako1@gmail.com
              </p>
            </a>

            <a
              href="tel:+27638065713"
              className="group rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-soft">
                Contact number
              </p>
              <p className="mt-2 font-display text-lg font-bold text-primary group-hover:underline">
                063 806 5713
              </p>
            </a>
          </div>

          <div className="mt-8 rounded-2xl bg-primary p-8 text-primary-foreground sm:p-10">
            <h2 className="font-display text-2xl font-extrabold">Thank you for visiting</h2>
            <p className="mt-3 max-w-2xl text-primary-foreground/80">
              Umuntu ngumuntu ngabantu — I am because we are. I look forward to connecting with you.
            </p>
          </div>
        </section>

        <NextPageButton to="/" label="Back to Home" />
      </main>
      <SiteFooter />
    </div>
  );
}
