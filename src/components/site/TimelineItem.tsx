type Props = {
  stage: string;
  institution: string;
  period: string;
  detail?: string;
};

export function TimelineItem({ stage, institution, period, detail }: Props) {
  return (
    <li className="relative pl-8 sm:pl-10">
      <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-soft">{stage}</p>
      <h3 className="mt-1.5 font-display text-lg font-bold text-primary sm:text-xl">
        {institution}
      </h3>
      <p className="mt-1 text-sm font-medium text-muted-foreground">{period}</p>
      {detail && <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground/80">{detail}</p>}
    </li>
  );
}
