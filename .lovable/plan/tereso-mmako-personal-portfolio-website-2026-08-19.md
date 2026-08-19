# Tereso Mmako — Personal Portfolio Website

A four-page, responsive portfolio built for job applications, in a deep forest green (#1D4533) and warm cream (#F7F2ED) palette with bold headings and Aptos body text.

## Pages

**Home (`/`)** — Welcome page: name "Tereso Mmako", headline "Health Sciences Student", short intro line, profile photo placeholder, and a "Download CV" button. Next button at bottom centre → About Me.

**About Me (`/about`)**
- Professional headline: Health Sciences Student
- Values: Honesty, Loyalty, Compassion, with the featured quote "umuntu ngumuntu ngabantu" — "I am because we are"
- Technical skills: Media & Design (Canva photo editing / graphics), Digital Presence & Communication (professional email in Outlook/Gmail — scheduling, filters, signatures; digital portfolio built with Google Sites)
- Soft skills: Communication (public speaking, active listening, dialogue), Teamwork & people skills (collaboration, conflict resolution)
- Fun facts: chess, hand sewing
- Next button → Education

**Education (`/education`)**
- Schooling timeline: Germiston South Primary School (2013–2019), Germiston High School (2020–2024), University of the Witwatersrand (2025–present)
- Online courses: HubSpot — Inbound, Digital Marketing, Digital Advertising, Social Media, Social Media Marketing
- Certifications: card grid using the HubSpot courses as placeholder entries, clearly easy to edit/extend later
- Next button → Contact

**Contact (`/contact`)**
- Email blessing.mmako1@gmail.com (mailto link) and phone 063 806 5713 (tel link), no form
- Bottom button loops back to Home

## Design

- Palette: #1D4533 as primary/dark sections, #F7F2ED as page background and highlight, plus supporting neutral tones — all defined as design tokens (oklch) in `src/styles.css`, no hardcoded colours in components.
- Aptos loaded as the body font with a graceful system fallback stack; headings bold and tightly tracked.
- Sticky top navigation with links to all four pages plus a mobile menu; consistent page-bottom "Next" button component centred on every page.
- Responsive layouts tuned for mobile, tablet, and desktop; subtle entrance/hover motion.

## Technical notes

- TanStack Router file routes: `index.tsx`, `about.tsx`, `education.tsx`, `contact.tsx`, each with its own SEO `head()` (title, description, og/twitter tags).
- Shared components: `SiteHeader`, `NextPageButton`, `Section`, `SkillCard`, `TimelineItem`.
- CV button points to a placeholder file in `public/` that you can replace with your real PDF.
- No backend needed. Deployment: publish from Lovable (or export to GitHub and deploy to Vercel/Netlify/GitHub Pages).
