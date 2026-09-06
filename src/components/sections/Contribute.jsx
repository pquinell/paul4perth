import { pledge, contribute } from "../../content/support";

export default function Contribute() {
  const { target, amount, current, headline, body } = pledge;
  const pct = Math.min(100, Math.round((current / target) * 100));

  return (
    <div className="mt-14 grid gap-10 bg-perth-blue px-6 py-10 text-white sm:mt-16 sm:px-8 sm:py-12 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-16">
      <div>
        <h3 className="font-display text-3xl font-semibold text-balance md:text-4xl">
          {headline}
        </h3>

        <div className="mt-6 space-y-4">
          {body.map((p, i) => (
            <p key={i} className="font-body leading-relaxed text-white/85">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10">
          <div
            className="h-3 w-full bg-white/15"
            role="progressbar"
            aria-valuenow={current}
            aria-valuemin={0}
            aria-valuemax={target}
            aria-label={`${current} of ${target} contributors`}
          >
            <div className="h-full bg-perth-gold" style={{ width: `${pct}%` }} />
          </div>

          <p className="mt-4 font-body text-lg">
            <span className="font-display text-3xl font-semibold text-perth-gold">
              {current}
            </span>{" "}
            of {target} neighbours have chipped in {`$${amount}`}.
          </p>
        </div>
      </div>

      <div className="border-t-4 border-perth-gold pt-8 lg:border-t-0 lg:border-l-4 lg:pt-0 lg:pl-12">
        <h3 className="font-display text-2xl font-semibold">
          {contribute.heading}
        </h3>

        <p className="mt-3 font-body leading-relaxed text-white/85">
          {contribute.lead}
        </p>

        <p className="mt-6 bg-white/10 px-4 py-4 font-label text-sm break-words sm:px-5 sm:text-base">
          {contribute.etransferEmail}
        </p>

        <dl className="mt-6 space-y-5">
          {contribute.methods.map((m) => (
            <div key={m.name}>
              <dt className="font-display font-semibold">{m.name}</dt>
              <dd className="mt-1 font-body text-sm leading-relaxed text-white/80">
                {m.detail}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-8 space-y-3 border-t border-white/20 pt-6">
          {contribute.rules.map((r, i) => (
            <li key={i} className="font-body text-xs leading-relaxed text-white/70">
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}