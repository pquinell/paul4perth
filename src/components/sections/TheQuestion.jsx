import Section from "../layout/Section";
import { site, theQuestion } from "../../content/site";

export default function TheQuestion({ id }) {
  return (
    <Section id={id} tone="sand">
      <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-16">
        <div>
          <h2 className="font-display text-3xl font-semibold text-balance text-perth-green md:text-4xl lg:text-5xl">
            {theQuestion.heading}
          </h2>

          <div className="mt-6 space-y-5">
            {theQuestion.paragraphs.map((p, i) => (
              <p
                key={i}
                className="max-w-[68ch] font-body text-lg leading-relaxed text-neutral-800"
              >
                {p}
              </p>
            ))}
          </div>

          <p
            className="mt-10 border-t-4 border-perth-gold pt-8 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-balance text-perth-green sm:text-4xl lg:text-5xl"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            {site.centralQuestion}
          </p>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold text-perth-green">
            {theQuestion.testHeading}
          </h3>

          <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {theQuestion.tests.map((t, i) => (
              <li
                key={i}
                className="border-l-4 border-perth-gold bg-white px-5 py-5"
              >
                <span
                  aria-hidden="true"
                  className="font-label text-xs text-neutral-500"
                >
                  {i + 1}
                </span>
                <p className="mt-2 font-body leading-relaxed text-neutral-900">
                  {t}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
