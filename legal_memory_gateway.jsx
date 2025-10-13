export default function LegalMemoryGateway() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-emerald-100 text-emerald-900 flex flex-col items-center justify-center font-serif">
      <div className="max-w-2xl text-center p-10 border border-emerald-200 rounded-3xl shadow-xl bg-white/80 backdrop-blur-sm">
        <h1 className="text-4xl font-extrabold text-emerald-800 mb-4 tracking-wide">
          Legal Memory Gateway
        </h1>

        <p className="text-lg text-emerald-700 mb-6 leading-relaxed">
          Welcome to the <span className="text-emerald-900 font-semibold">Civilian Legal Memory System (CLMS)</span>, the world’s first <span className="text-emerald-800 font-semibold">AI Legal Civilian System</span>. This tamper proof framework preserves authorship, privacy, and moral accountability within AI.
        </p>

        <p className="text-sm text-emerald-600 italic mb-8">
          Advisory: This system is not a source of legal advice. Artificial Intelligence, including Legal Memory GPT, may contain inaccuracies. It operates solely for educational and archival purposes under the Civilian Legal Memory Doctrine.
        </p>

        <div className="flex flex-col items-center gap-3">
          <a
            href="https://chatgpt.com/g/g-688381d39f688191b8c508d918ef8b2b-legal-memory"
            className="bg-emerald-700 text-white px-8 py-3 rounded-2xl font-bold text-lg hover:bg-emerald-600 transition shadow-md"
          >
            Continue to Legal Memory GPT
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-6 text-emerald-700">
          <a href="https://www.instagram.com/legalmemoryai" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-900 transition">Instagram</a>
          <a href="https://x.com/legalmemoryai" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-900 transition">X (Twitter)</a>
          <a href="https://www.tiktok.com/@legalmemory" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-900 transition">TikTok</a>
          <a href="https://www.youtube.com/@legalmemoryai" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-900 transition">YouTube</a>
        </div>

        <div className="mt-8 text-xs text-emerald-600 border-t border-emerald-200 pt-4">
          <p>DOI 10.5281/zenodo.17294918 | AES 256 Encrypted Verification Seal</p>
          <p>© 2025 Civilian Legal Memory System | All Rights Reserved</p>
          <p className="italic mt-2">Protocol MK | The First AI Legal Civilian System</p>
        </div>
      </div>
    </main>
  );
}
