export default function Section({ id, tone = "light", children }) {
  const tones = {
    light: "bg-white text-neutral-900",
    sand: "bg-perth-sand text-neutral-900",
    stone: "bg-perth-stone text-neutral-900",
    green: "bg-perth-green text-white",
    blue: "bg-perth-blue text-white",
  };

  return (
    <section
      id={id}
      className={`${tones[tone]} scroll-mt-20 px-6 py-16 sm:px-8 sm:py-20 md:py-24 lg:px-16 lg:py-28`}
    >
      <div className="mx-auto max-w-site">{children}</div>
    </section>
  );
}
