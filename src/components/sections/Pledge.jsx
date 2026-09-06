import { pledge } from "../../content/support";

export default function Pledge() {
  const { target, amount, current, headline, body } = pledge;
  const pct = Math.min(100, Math.round((current / target) * 100));

  return (
    <div className="mt-16 bg-perth-blue px-8 py-12 text-white md:px-12">
      <h3 className="font-display text-3xl font-semibold md:text-4xl">
        {headline}
      </h3>

      <div className="mt-8 max-w-[60ch] space-y-4">
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
  );
}