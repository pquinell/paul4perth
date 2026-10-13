import Section from "../layout/Section";
import { firstSixMonths } from "../../content/firstSixMonths";

export default function FirstSixMonths({ id }) {
  const { eyebrow, heading, intro, motions, closer } = firstSixMonths;

  return (
    <Section id={id} tone="sand">
      <p className="font-label text-sm text-perth-green">{eyebrow}</p>

      <h2 className="mt-3 font-display text-3xl font-semibold text-balance text-perth-green md:text-4xl lg:text-5xl">
        {heading}
      </h2>

      <p className="mt-6 max-w-[68ch] font-body text-lg leading-relaxed text-neutral-800 sm:text-xl">
        {intro}
      </p>

      <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {motions.map((m) => (
          <li key={m.slug}>
            <img
              src={`/motion-${m.slug}-1080.jpg`}
              srcSet={`/motion-${m.slug}-600.jpg 600w, /motion-${m.slug}-1080.jpg 1080w`}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              width={1080}
              height={1350}
              loading="lazy"
              decoding="async"
              alt={m.alt}
              className="h-auto w-full shadow-sm"
            />
          </li>
        ))}
      </ol>

      <p className="mt-10 max-w-[68ch] font-body text-lg leading-relaxed text-neutral-800">
        {closer}
      </p>
    </Section>
  );
}
