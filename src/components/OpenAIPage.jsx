/**
 * Legal Memory AI — OpenAI Interface
 * DOI: 10.5281/zenodo.17285795
 */
import { useState, useEffect } from "react";

export default function OpenAIPage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-900 via-black to-gray-900 text-emerald-50 p-8 text-center relative overflow-hidden">
      {!loaded && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
          <div className="w-20 h-20 border-4 border-emerald-400 rounded-full animate-pulse"></div>
          <p className="text-emerald-300 mt-4 text-lg">Activating OpenAI Interface...</p>
        </div>
      )}
      {loaded && (
        <section className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-400 drop-shadow-lg">
            ⚖️ Legal Memory — OpenAI Interface
          </h1>
          <p className="text-lg md:text-xl text-emerald-200 leading-relaxed">
            The Moral Engine of Civilian AI <br />
            DOI: <a href="https://doi.org/10.5281/zenodo.17285795" target="_blank" className="underline hover:text-emerald-400">10.5281/zenodo.17285795</a>
          </p>
        </section>
      )}
    </main>
  );
}
