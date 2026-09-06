import { useState } from "react";
import { site } from "../../content/site";
import { navLinks } from "../../sections";

const linkClass =
  "font-body text-sm uppercase text-neutral-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-perth-green";

const ctaClass =
  "bg-perth-green font-body text-sm uppercase text-white hover:bg-perth-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-perth-green";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-perth-gold bg-white">
      <div className="mx-auto flex max-w-site items-center justify-between gap-6 px-6 py-3 sm:px-8 lg:px-16">
        <a
          href="#top"
          className="font-display text-lg font-semibold text-perth-green"
        >
          {site.candidate}
        </a>

        <nav aria-label="Main" className="hidden lg:flex lg:items-center lg:gap-x-6">
          {navLinks.map((l) =>
            l.cta ? (
              <a
                key={l.href}
                href={l.href}
                className={`px-4 py-2 ${ctaClass}`}
              >
                {l.label}
              </a>
            ) : (
              <a key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </a>
            ),
          )}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="site-menu"
          className="-mr-2 px-2 py-1 font-label text-sm uppercase text-perth-green focus-visible:outline-2 focus-visible:outline-perth-green lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav
        id="site-menu"
        aria-label="Main"
        className={`${open ? "block" : "hidden"} border-t border-neutral-200 lg:hidden`}
      >
        <ul className="mx-auto max-w-site px-6 py-3 sm:px-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              {l.cta ? (
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`mt-3 block px-4 py-3 text-center ${ctaClass}`}
                >
                  {l.label}
                </a>
              ) : (
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 ${linkClass}`}
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
