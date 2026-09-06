import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Consultation from "./components/sections/Consultation";
import TheQuestion from "./components/sections/TheQuestion";
import Pillars from "./components/sections/Pillars";
import ShowUp from "./components/sections/ShowUp";
import NotPromising from "./components/sections/NotPromising";
import HowToVote from "./components/sections/HowToVote";
import Gallery from "./components/sections/Gallery";
import Support from "./components/sections/Support";
import Ask from "./components/sections/Ask";

// The one place the page is assembled. App renders these in order and passes each
// section its id, so the anchor a nav link points at cannot drift from the section
// that owns it. Turning a section off removes its nav link in the same edit.
//
//   id        anchor for the section, and the href the nav link uses
//   navLabel  shown in the header nav; omit to render a section with no nav link
//   enabled   false keeps a section in the running order without rendering it
//   cta       renders this section's nav link as a button rather than a text link
export const sections = [
  { id: "top", Component: Hero },
  { id: "about", Component: About, navLabel: "About Paul" },
  { id: "consultation", Component: Consultation, enabled: false },
  { id: "question", Component: TheQuestion, navLabel: "The question" },
  { id: "platform", Component: Pillars, navLabel: "Platform" },
  { id: "show-up", Component: ShowUp, enabled: false },
  {
    id: "not-promising",
    Component: NotPromising,
    navLabel: "Not promising",
    enabled: false,
  },
  { id: "vote", Component: HowToVote, navLabel: "How to vote" },
  { id: "gallery", Component: Gallery, enabled: false },
  { id: "support", Component: Support, navLabel: "Help out", cta: true },
  { id: "ask", Component: Ask, enabled: false },
];

export const visibleSections = sections.filter((s) => s.enabled !== false);

export const navLinks = visibleSections
  .filter((s) => s.navLabel)
  .map((s) => ({ href: `#${s.id}`, label: s.navLabel, cta: s.cta === true }));
