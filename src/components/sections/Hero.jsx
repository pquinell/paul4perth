import { site } from "../../content/site";

export default function Hero({ id }) {
  return (
    <section
      id={id}
      className="relative isolate flex min-h-[85svh] items-end overflow-hidden bg-perth-green lg:min-h-[80svh] lg:items-center"
    >
      <img
        src="/paul-hero-1400.jpg"
        srcSet="/paul-hero-900.jpg 900w, /paul-hero-1400.jpg 1400w, /paul-hero-2000.jpg 2000w, /paul-hero-2800.jpg 2800w"
        sizes="100vw"
        alt="Paul Quinnell standing on a lawn at the edge of a treeline in Perth"
        width={4032}
        height={3024}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[35%_center] lg:object-top"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-black/85 via-black/50 to-black/15 lg:bg-linear-to-l lg:from-black/80 lg:via-black/55 lg:via-45% lg:to-transparent"
      />

      <div className="mx-auto w-full max-w-site px-6 py-16 sm:px-8 sm:py-20 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-24">
        <div className="lg:col-start-2">
          <h1
            className="font-display font-semibold leading-[0.95] tracking-tight text-balance text-white"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              fontVariationSettings: "'opsz' 144",
            }}
          >
            {site.centralQuestion}
          </h1>

          <p className="mt-6 max-w-[42ch] font-body text-lg leading-relaxed text-white/90 sm:mt-8 sm:text-xl">
            {site.heroLead}
          </p>

          <p className="mt-8 font-label text-sm tracking-wide text-perth-gold sm:mt-10">
            {site.candidate}, {site.office}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap">
            <a
              href="#platform"
              className="inline-block bg-white px-7 py-4 text-center font-body text-lg text-perth-green underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Read the platform
            </a>
            <a
              href="#support"
              className="inline-block border-2 border-white px-7 py-4 text-center font-body text-lg text-white underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Help out
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
