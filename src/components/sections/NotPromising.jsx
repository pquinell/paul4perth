import Section from "../layout/Section";
import { notPromising } from "../../content/notPromising";

export default function NotPromising({ id }) {
  const { eyebrow, heading, intro, items, closer } = notPromising;

  return (
    <Section id={id} tone="green">
      <p className="font-label text-sm text-perth-gold">{eyebrow}</p>

      <h2 className="mt-3 font-display text-3xl font-semibold text-balance md:text-4xl lg:text-5xl">
        {heading}
      </h2>

      <p className="mt-6 max-w-[68ch] font-body text-lg leading-relaxed text-white/90 sm:text-xl">
        {intro}
      </p>

      <dl className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.claim}
            className="border-t-4 border-perth-gold bg-white/10 px-5 py-6 sm:px-6"
          >
            <dt className="font-display text-xl font-semibold leading-snug">
              {item.claim}
            </dt>
            <dd className="mt-3 space-y-3">
              {item.reason.map((r, i) => (
                <p
                  key={i}
                  className="font-body text-sm leading-relaxed text-white/80"
                >
                  {r}
                </p>
              ))}
            </dd>
          </div>
        ))}

        <div className="border-t-4 border-white bg-perth-gold/20 px-5 py-6 sm:px-6">
          <dt className="font-display text-xl font-semibold leading-snug">
            {closer.claim}
          </dt>
          <dd className="mt-3 space-y-3">
            {closer.reason.map((r, i) => (
              <p
                key={i}
                className="font-body text-sm leading-relaxed text-white/90"
              >
                {r}
              </p>
            ))}
          </dd>
        </div>
      </dl>
    </Section>
  );
}