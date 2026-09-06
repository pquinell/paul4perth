import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { visibleSections } from "./sections";

export default function App() {
  return (
    <>
      <Header />
      <main>
        {visibleSections.map(({ id, Component }) => (
          <Component key={id} id={id} />
        ))}
      </main>
      <Footer />
    </>
  );
}
