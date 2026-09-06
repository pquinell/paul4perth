import Section from "../layout/Section";
import { about } from "../../content/about";

export default function About({ id }) {
  return (
    <Section id={id}>
      <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:items-start lg:gap-16">
        <img
          src={about.photo}
          srcSet="/paul-about-600.jpg 600w, /paul-about-1000.jpg 1000w, /paul-about-1400.jpg 1400w"
          sizes="(min-width: 1024px) 40vw, (min-width: 640px) 384px, 320px"
          alt={about.photoAlt}
          width={4032}
          height={3024}
          loading="lazy"
          decoding="async"
          className="aspect-4/5 w-full max-w-xs border-b-4 border-perth-gold bg-neutral-100 object-cover object-[15%_center] sm:max-w-sm lg:max-w-none"
        />

        <div>
          <h2 className="font-display text-3xl font-semibold text-balance text-perth-green md:text-4xl lg:text-5xl">
            {about.heading}
          </h2>

          <div className="mt-6 space-y-5">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="max-w-[62ch] font-body leading-relaxed text-neutral-700"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
