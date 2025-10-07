/**
 * Legal Memory AI — Civilian Toolkit
 * DOI: 10.5281/zenodo.17285795
 */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Toolkit() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001f1f] via-[#001010] to-black text-[#e3c77b] font-sans relative overflow-hidden">
      {!loaded && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#001f1f] z-50">
          <div className="w-20 h-20 border-4 border-[#00ffcc] rounded-full animate-ping"></div>
          <p className="text-[#d4af37] mt-4 text-lg">Deploying Civilian Toolkit...</p>
        </div>
      )}
      {loaded && (
        <div className="max-w-5xl mx-auto py-24 px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#e3c77b] mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Civilian Toolkit
          </motion.h1>
          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool, i) => (
              <motion.a
                key={i}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#102117] border border-[#e3c77b] p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.2, duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold mb-2">{tool.title}</h3>
                <p className="text-emerald-100">{tool.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
