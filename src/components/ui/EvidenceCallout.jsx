export default function EvidenceCallout({ claim, source, reference }) {
  return (
    <aside className="border-l-4 border-perth-blue bg-black/5 px-4 py-4 sm:px-5">
      <p className="font-body text-base text-neutral-900">{claim}</p>
      <p className="mt-2 font-label text-xs text-neutral-600">
        {source}, {reference}
      </p>
    </aside>
  );
}