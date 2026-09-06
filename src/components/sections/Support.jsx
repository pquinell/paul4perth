import Section from "../layout/Section";
import { support } from "../../content/support";
import Contribute from "./Contribute";
import Volunteer from "./Volunteer";

export default function Support({ id }) {
  return (
    <Section id={id} tone="stone">
      <h2 className="font-display text-3xl font-semibold text-balance text-perth-green md:text-4xl lg:text-5xl">
        Help out
      </h2>

      <p className="mt-6 max-w-[68ch] font-body text-lg leading-relaxed text-neutral-800 sm:text-xl">
        {support.intro}
      </p>

      <Contribute />
      <Volunteer />
    </Section>
  );
}