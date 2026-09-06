import { volunteer, support } from "../../content/support";

export default function Volunteer() {
  return (
    <div className="mt-14 sm:mt-16">
      <h3 className="font-display text-2xl font-semibold text-perth-green">
        Give time
      </h3>

      <p className="mt-3 max-w-[60ch] font-body leading-relaxed text-neutral-700">
        {volunteer.lead}
      </p>

      <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {volunteer.ways.map((w) => (
          <div key={w.title} className="border-t border-neutral-300 pt-4">
            <dt className="font-display text-lg font-semibold text-neutral-900">
              {w.title}
            </dt>
            <dd className="mt-1 max-w-[46ch] font-body text-sm leading-relaxed text-neutral-700">
              {w.detail}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-10">
        <a
          href={support.forms.volunteer}
          className="inline-block border-2 border-perth-green px-6 py-4 font-body text-lg text-perth-green sm:px-8 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-perth-green"
        >
          Sign up to help
        </a>
      </p>
    </div>
  );
}