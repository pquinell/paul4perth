import Section from "../layout/Section";
import { howToVote } from "../../content/howToVote";

export default function HowToVote({ id }) {
  const { window, methods, steps, clerk } = howToVote;

  return (
    <Section id={id} tone="blue">
      <h2 className="font-display text-3xl font-semibold text-balance md:text-4xl lg:text-5xl">
        How to vote in Perth this year
      </h2>

      <p className="mt-6 max-w-[68ch] font-body text-lg leading-relaxed text-white/90 sm:text-xl">
        Voting is open {window}. There are no polling stations. Every ballot in
        this election is cast online or by telephone.
      </p>

      <div className="mt-10 grid max-w-[68ch] gap-8 sm:mt-12 sm:grid-cols-2">
        {methods.map((m) => (
          <div key={m.name} className="border-t-2 border-perth-gold pt-4">
            <h3 className="font-display text-xl font-semibold">{m.name}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-white/80">
              {m.detail}
            </p>
          </div>
        ))}
      </div>

      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="flex gap-4 border-t-4 border-perth-gold bg-white/10 px-5 py-6 sm:gap-5 sm:px-6"
          >
            <span
              aria-hidden="true"
              className="font-label text-sm text-perth-gold"
            >
              {i + 1}
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 font-body text-sm leading-relaxed text-white/80">
                {s.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-12 max-w-[68ch] font-body text-sm text-white/70 sm:mt-14">
        Questions about the voters' list, your PIN, or the voting process go to{" "}
        {clerk.name}, {clerk.role},{" "}
        <a
          href={`mailto:${clerk.email}`}
          className="break-words underline decoration-perth-gold underline-offset-4"
        >
          {clerk.email}
        </a>
        .
      </p>
    </Section>
  );
}
