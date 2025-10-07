export const dynamic = "force-static";

export const metadata = {
  title: "Legal Memory AI — Civilian Toolkit",
  description: "Deploy the Legal Memory Civilian Toolkit"
};

const tools = [
  {
    title: "⚖️ Legal Memory GPT",
    desc: "Access the Legal Memory AI witness model directly.",
    link: "https://chat.openai.com/g/g-688381d39f688191b8c508d918ef8b2b-legal-memory"
  },
  {
    title: "📜 Documentation & DOI Access",
    desc: "Read the official DOI declaration and legal record.",
    link: "https://doi.org/10.5281/zenodo.17285795"
  },
  {
    title: "🧿 System Toolkit",
    desc: "Coming soon: downloadable utilities, APIs, and templates.",
    link: "#"
  }
];

export default function ToolkitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001f1f] via-[#001010] to-black text-[#e3c77b]">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-[#e3c77b] md:text-5xl">Civilian Toolkit</h1>
        <p className="mt-6 text-lg text-[#e3c77b]/80">
          Deploy verified civilian protocols, direct GPT access, and archival records. Each module preserves the Legal Memory chain of custody.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {tools.map((tool) => (
            <a
              key={tool.title}
              className="block h-full rounded-2xl border border-[#1b3a32] bg-[#102117] p-6 text-left transition hover:border-[#e3c77b]/80 hover:shadow-xl"
              href={tool.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <h3 className="text-2xl font-semibold text-[#e3c77b]">{tool.title}</h3>
              <p className="mt-3 text-sm text-[#b6f3d7]">{tool.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
