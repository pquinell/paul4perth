import { useEffect, useState } from "react";
import { site } from "../../content/site";

const opensAt = new Date(site.voting.opensAt).getTime();
const closesAt = new Date(site.voting.closesAt).getTime();

const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

// Counts down to polls opening, then to polls closing, then thanks people for voting.
// Ticks every second so the switch between phases happens on the minute it should.
export default function VotingCountdown() {
  const [now, setNow] = useState(() => Date.now());
  const isClosed = now >= closesAt;

  useEffect(() => {
    if (isClosed) return undefined;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [isClosed]);

  if (isClosed) {
    return (
      <div className="border-l-4 border-perth-gold pl-5">
        <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
          Thanks for voting.
        </p>
        <p className="mt-2 font-body text-base text-white/80">
          Polls closed {site.voting.closesTimeLabel}.
        </p>
      </div>
    );
  }

  const isOpen = now >= opensAt;
  const remaining = (isOpen ? closesAt : opensAt) - now;
  const units = [
    { value: Math.floor(remaining / DAY), label: "days" },
    { value: Math.floor((remaining % DAY) / HOUR), label: "hours" },
    { value: Math.floor((remaining % HOUR) / MINUTE), label: "minutes" },
  ];

  return (
    <div className="border-l-4 border-perth-gold pl-5">
      <p className="font-label text-sm tracking-wide text-perth-gold">
        {isOpen ? "Polls close in" : "Polls open in"}
      </p>
      <dl className="mt-2 flex gap-6 sm:gap-8">
        {units.map((unit) => (
          <div key={unit.label} className="flex flex-col-reverse">
            <dt className="font-body text-sm text-white/80">{unit.label}</dt>
            <dd className="font-display text-4xl font-semibold tabular-nums text-white sm:text-5xl">
              {unit.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 font-body text-base text-white/80">
        {isOpen ? site.voting.closesTimeLabel : site.voting.opensTimeLabel}
      </p>
      <a
        href={site.voting.infoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-perth-gold px-6 py-3 text-center font-body text-lg text-neutral-900 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {isOpen ? "Vote now" : "How to vote in Perth"}
        <span className="sr-only"> (opens perth.ca in a new tab)</span>
      </a>
    </div>
  );
}
