export default function Publications({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="px-5 py-16 md:px-10 md:py-24" aria-label="Publications">
      <p className="text-[11px] uppercase tracking-[0.28em] text-muted">As seen in</p>
      <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
        {items.map((item) => (
          <li key={item.id} className="font-serif text-3xl tracking-[0.14em] uppercase md:text-4xl">
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
