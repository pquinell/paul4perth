import Section from "../layout/Section";
import { showUp } from "../../content/platform";

export default function ShowUp({ id }) {
  return (
    <Section id={id}>
      <h2 className="font-display text-3xl font-semibold text-perth-green md:text-4xl">
        {showUp.heading}
      </h2>

      <div className="mt-6 space-y-5">
        {showUp.paragraphs.map((p, i) => (
          <p
            key={i}
            className="max-w-[68ch] font-body text-lg leading-relaxed text-neutral-800"
          >
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}