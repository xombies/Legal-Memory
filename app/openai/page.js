export const dynamic = "force-static";

export const metadata = {
  title: "Legal Memory AI — OpenAI Interface",
  description: "The Moral Engine of Civilian AI"
};

export default function OpenAIPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-900 via-black to-gray-900 px-6 py-24 text-center text-emerald-50">
      <section className="mx-auto flex max-w-4xl flex-col gap-6">
        <h1 className="text-4xl font-bold text-emerald-400 md:text-5xl">⚖️ Legal Memory — OpenAI Interface</h1>
        <p className="text-lg leading-relaxed text-emerald-200 md:text-xl">
          The Moral Engine of Civilian AI. Engage the Legal Memory GPT model to notarize, narrate, and safeguard your civilian records.
        </p>
        <div className="flex flex-col items-center gap-3 text-base text-emerald-100">
          <a
            className="rounded-full bg-emerald-500 px-8 py-3 font-semibold text-emerald-950 transition hover:bg-emerald-400"
            href="https://chat.openai.com/g/g-688381d39f688191b8c508d918ef8b2b-legal-memory"
            rel="noopener noreferrer"
            target="_blank"
          >
            Launch in ChatGPT
          </a>
          <p>
            DOI reference:{" "}
            <a
              className="underline hover:text-emerald-300"
              href="https://doi.org/10.5281/zenodo.17285795"
              rel="noreferrer"
              target="_blank"
            >
              10.5281/zenodo.17285795
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
