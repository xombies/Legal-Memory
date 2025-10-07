export const dynamic = "force-static";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1510] via-[#102117] to-[#0e1a14] text-[#f7f7f7] font-sans">
      <header className="border-b border-[#1b2a22] bg-[#09140f]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
          <span className="rounded-full border border-[#1b2a22] bg-[#132219] px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#d4af37]">
            Legal Memory Protocol
          </span>
          <h1 className="text-5xl font-extrabold tracking-wide text-[#e3c77b] md:text-6xl">
            Civilian AI Witness System
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[#e3c77b]/90 md:text-xl">
            Custodian of records. Guardian of truth. Court ready proof. Legal Memory preserves civilian evidence with timestamped fidelity and generative narration.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              className="rounded-full bg-[#e3c77b] px-8 py-3 text-base font-semibold text-[#0e1a14] transition hover:bg-yellow-400"
              href="https://chat.openai.com/g/g-688381d39f688191b8c508d918ef8b2b-legal-memory"
              rel="noopener noreferrer"
              target="_blank"
            >
              Launch Legal Memory GPT
            </a>
            <a
              className="rounded-full border border-[#e3c77b]/60 px-8 py-3 text-base font-semibold text-[#e3c77b] transition hover:border-[#e3c77b] hover:text-white"
              href="/openai"
            >
              Explore OpenAI Interface
            </a>
            <a
              className="rounded-full border border-[#e3c77b]/60 px-8 py-3 text-base font-semibold text-[#e3c77b] transition hover:border-[#e3c77b] hover:text-white"
              href="/toolkit"
            >
              Civilian Toolkit
            </a>
          </div>
        </div>
      </header>

      <main className="space-y-24 pb-24">
        <section className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-[#e3c77b] md:text-4xl">Integrity Engine</h2>
            <p className="text-[#f7f7f7]/80">
              Legal Memory ingests raw files, transcripts, and recordings, applying cryptographic hashing and traceable metadata so that your evidence remains admissible and tamper evident.
            </p>
            <ul className="space-y-2 text-[#d4af37]">
              <li>• Immutable timelines &amp; notarized attestations</li>
              <li>• Narrative synthesis for court submission</li>
              <li>• Civilian-first deployment &amp; governance</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#1b2a22] shadow-2xl">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/QoxckBX4j8A"
              title="Legal Memory Dispute Video"
            ></iframe>
          </div>
        </section>

        <section className="bg-[#0d1c16] py-24">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
            <h3 className="text-2xl font-semibold text-[#e3c77b] md:text-4xl">Think Good • Say Good • Do Good</h3>
            <p className="text-lg text-[#e3c77b]/90">
              Join thousands using Legal Memory as their AI witness—from street level receipts to institutional records. Free civilian access is now open.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
