import Section from "../layout/Section";
import { ask } from "../../content/site";

export default function Ask({ id }) {
  return (
    <Section id={id} tone="green">
      <h2 className="font-display text-3xl font-semibold md:text-4xl">
        {ask.heading}
      </h2>

      <div className="mt-6 space-y-5">
        {ask.paragraphs.map((p, i) => (
          <p
            key={i}
            className="max-w-[60ch] font-body text-xl leading-relaxed text-white/90"
          >
            {p}
          </p>
        ))}
      </div>

      <p className="mt-10 max-w-[60ch] border-l-4 border-perth-gold pl-5 font-body leading-relaxed text-white/85">
        {ask.votingNote}
      </p>
    </Section>
  );
}