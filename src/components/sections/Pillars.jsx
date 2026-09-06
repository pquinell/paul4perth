import { pillars } from "../../content/platform";
import EvidenceCallout from "../ui/EvidenceCallout";

const accents = {
  green: "border-perth-green",
  gold: "border-perth-gold",
  blue: "border-perth-blue",
};

export default function Pillars({ id }) {
  return (
    <div id={id} className="scroll-mt-20">
      {pillars.map((p, index) => {
        const accent = accents[p.tone] ?? accents.green;
        const onSand = index % 2 === 1;
        const field = onSand ? "bg-perth-sand" : "bg-white";
        const card = onSand ? "bg-white" : "bg-perth-sand";

        return (
          <section
            key={p.id}
            id={p.id}
            className={`${field} scroll-mt-20 px-6 py-16 sm:px-8 sm:py-20 md:py-24 lg:px-16 lg:py-28`}
          >
            <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-[1fr_2.2fr] lg:items-start lg:gap-16">
              <header className="lg:sticky lg:top-28">
                <p
                  aria-hidden="true"
                  className={`inline-block border-b-4 pb-1 font-label text-sm ${accent} text-neutral-500`}
                >
                  {String(p.number).padStart(2, "0")}
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-balance text-perth-green md:text-4xl">
                  {p.title}
                </h2>

                {p.image && (
                  <img
                    src={p.image.src}
                    srcSet={`/pillar-${p.image.slug}-600.jpg 600w, /pillar-${p.image.slug}-900.jpg 900w, /pillar-${p.image.slug}-1300.jpg 1300w`}
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    alt={p.image.alt}
                    width={1300}
                    height={867}
                    loading="lazy"
                    decoding="async"
                    className={`mt-8 aspect-3/2 w-full border-b-4 object-cover ${accent} bg-black/5`}
                  />
                )}
              </header>

              <div>
                <div className="space-y-6">
                  {p.position.map((para, i) =>
                    typeof para === "string" ? (
                      <p
                        key={i}
                        className="max-w-[64ch] font-body text-lg leading-relaxed text-neutral-800"
                      >
                        {para}
                      </p>
                    ) : (
                      <p
                        key={i}
                        className={`max-w-[52ch] border-l-4 py-1 pl-6 font-display text-2xl leading-snug font-semibold text-balance text-perth-green ${accent} sm:text-3xl`}
                      >
                        {para.quote}
                      </p>
                    ),
                  )}
                </div>

                {p.evidence.length > 0 && (
                  <div className="mt-8 max-w-[64ch] space-y-4">
                    {p.evidence.map((e, i) => (
                      <EvidenceCallout key={i} {...e} />
                    ))}
                  </div>
                )}

                <h3 className="mt-14 font-label text-sm tracking-wide text-neutral-500 uppercase">
                  {p.pushForLabel}
                </h3>

                <ul className="mt-6 grid gap-5 md:grid-cols-2">
                  {p.pushFor.map((item, i) => (
                    <li
                      key={i}
                      className={`border-t-4 ${accent} ${card} px-5 py-6 sm:px-6`}
                    >
                      <p className="font-display text-lg leading-snug font-semibold text-perth-green">
                        {item.lead}
                      </p>
                      <p className="mt-2 font-body text-base leading-relaxed text-neutral-700">
                        {item.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
