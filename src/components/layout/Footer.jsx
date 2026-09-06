import { site } from "../../content/site";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 px-6 py-12 text-neutral-300 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-site">
        <p className="max-w-[68ch] font-body text-sm">{site.authorization}</p>
      </div>
    </footer>
  );
}
