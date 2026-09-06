import { contribute, support } from "../../content/support";

export default function DonateHow() {
  return (
    <div className="mt-8">
      <ol className="space-y-6">
        <li className="flex gap-5">
          <span aria-hidden="true" className="font-label text-sm text-perth-green">1</span>
        
        </li>

        <li className="flex gap-5">
          <span aria-hidden="true" className="font-label text-sm text-perth-green">2</span>
          <div className="max-w-[60ch]">
            <h4 className="font-display text-lg font-semibold text-neutral-900">
              Send the money
            </h4>
            <p className="mt-1 font-body text-sm leading-relaxed text-neutral-700">
              The form finishes with the e-transfer address and the posting
              address. Choose whichever suits you.
            </p>
            <p className="mt-3 border-l-4 border-perth-gold bg-neutral-50 py-3 pl-4 font-label text-base text-neutral-900">
      {contribute.etransferEmail}
    </p>
          </div>
        </li>

        <li className="flex gap-5">
          <span aria-hidden="true" className="font-label text-sm text-perth-green">3</span>
          <div className="max-w-[60ch]">
            <h4 className="font-display text-lg font-semibold text-neutral-900">
              You get a receipt
            </h4>
            <p className="mt-1 font-body text-sm leading-relaxed text-neutral-700">
              Issued by the campaign once the contribution is received and
              recorded.
            </p>
          </div>
        </li>
      </ol>

      <dl className="mt-10 space-y-4 border-l-4 border-perth-blue pl-5">
        {contribute.methods.map((m) => (
          <div key={m.name}>
            <dt className="font-display font-semibold text-neutral-900">{m.name}</dt>
            <dd className="mt-1 max-w-[60ch] font-body text-sm leading-relaxed text-neutral-700">
              {m.detail}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-10">
        <a
          href={support.forms.contribute}
          className="inline-block bg-perth-green px-8 py-4 font-body text-lg text-white underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-perth-green"
        >
          Open the contribution form
        </a>
      </p>
    </div>
  );
}