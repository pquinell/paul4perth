import { consultation } from "../../content/platform";

export default function Consultation({ id }) {
  const closed = new Date() > new Date(`${consultation.date}T23:59:59`);
  if (closed) return null;

  return (
    <aside id={id} className="bg-perth-blue px-6 py-12 sm:px-8 sm:py-14 lg:px-16">
      <div className="mx-auto max-w-site">
        <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">
          {consultation.heading}
        </h2>

        <div className="mt-5 space-y-4">
          {consultation.body.map((p, i) => (
            <p
              key={i}
              className="max-w-[68ch] font-body leading-relaxed text-white/85"
            >
              {p}
            </p>
          ))}
        </div>

        <p className="mt-6">
          <a
            href={consultation.linkUrl}
            className="font-label text-base text-perth-gold underline decoration-perth-gold underline-offset-4"
          >
            {consultation.linkLabel}
          </a>
        </p>
      </div>
    </aside>
  );
}