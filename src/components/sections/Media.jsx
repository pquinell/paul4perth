import Section from "../layout/Section";
import { media } from "../../content/media";

const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-CA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const facebookEmbedSrc = (url) =>
  `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&show_text=true&width=500`;

export default function Media({ id }) {
  const { heading, intro, items, posts } = media;

  return (
    <Section id={id}>
      <h2 className="font-display text-3xl font-semibold text-balance text-perth-green md:text-4xl lg:text-5xl">
        {heading}
      </h2>

      <p className="mt-6 max-w-[68ch] font-body text-lg leading-relaxed text-neutral-800 sm:text-xl">
        {intro}
      </p>

      <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.url}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col border-t-4 border-perth-gold bg-perth-sand px-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-perth-green sm:px-6"
            >
              <p className="font-label text-sm text-perth-green">
                {item.type} · {item.outlet}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-neutral-900 group-hover:underline group-hover:underline-offset-4">
                {item.title}
              </h3>
              {item.note && (
                <p className="mt-3 font-body text-sm leading-relaxed text-neutral-700">
                  {item.note}
                </p>
              )}
              <p className="mt-auto pt-4 font-body text-sm text-neutral-600">
                <time dateTime={item.date}>{formatDate(item.date)}</time>
                <span className="sr-only"> (opens in a new tab)</span>
              </p>
            </a>
          </li>
        ))}
      </ul>

      {posts.length > 0 && (
        <ul className="mt-12 grid justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <li key={post.url} className="w-full max-w-[500px]">
              <iframe
                src={facebookEmbedSrc(post.url)}
                title="Facebook post from Paul for Perth"
                width="500"
                height={post.height ?? 680}
                loading="lazy"
                className="w-full border-0 bg-white"
                scrolling="no"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
