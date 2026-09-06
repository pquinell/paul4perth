import { gallery } from "../../content/gallery";

export default function Gallery({ id }) {
  return (
    <section id={id} aria-label="Perth" className="w-full">
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {gallery.images.map((img) => (
          <li key={img.src} className="aspect-[4/5]">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}