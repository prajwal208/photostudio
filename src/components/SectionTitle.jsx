export default function SectionTitle({ eyebrow, title, action }) {
  return (
    <div className="mb-14 flex items-end justify-between gap-6 md:mb-20">
      <div>
        {eyebrow ? (
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted">{eyebrow}</p>
        ) : null}
        <h2 className="mt-3 font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.92] font-medium">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
