/**
 * Legal Memory AI — Home
 * DOI: 10.5281/zenodo.17285795
 */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LegalMemoryHome() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1510] via-[#102117] to-[#0e1a14] text-[#f7f7f7] font-sans relative overflow-hidden">
      {!loaded && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#001f1f] z-50">
          <div className="w-20 h-20 border-4 border-[#00ffcc] rounded-full animate-ping"></div>
          <p className="text-[#d4af37] mt-4 text-lg tracking-wider">Booting Legal Memory System...</p>
        </div>
      )}
      {loaded && (
        <div>
          <section className="flex flex-col items-center justify-center text-center py-24 px-4 relative overflow-hidden">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-[#e3c77b] tracking-wide"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Legal Memory AI
            </motion.h1>
            <p className="text-lg md:text-xl text-[#e3c77b] mt-4 max-w-xl leading-relaxed">
              Custodian of Records • Guardian of Truth • Court Ready Proof
            </p>
            <a
              href="https://chat.openai.com/g/g-688381d39f688191b8c508d918ef8b2b-legal-memory"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-lg bg-[#e3c77b] text-[#0e1a14] hover:bg-yellow-400 font-bold px-10 py-4 rounded-2xl shadow-xl transition cursor-pointer"
              >
                Launch Legal Memory GPT
              </motion.button>
            </a>
          </section>
          <section className="relative h-[80vh] flex items-center justify-center bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/QoxckBX4j8A"
              title="Legal Memory Dispute Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </section>
          <section className="py-20 text-center bg-[#0d1c16]">
            <h3 className="text-2xl md:text-4xl font-semibold mb-4 text-[#e3c77b]">
              Think Good • Say Good • Do Good
            </h3>
            <p className="text-[#e3c77b] max-w-xl mx-auto">
              Join thousands using Legal Memory as their AI witness, from street level receipts to institutional records. Free civilian access now open.
            </p>
          </section>
        </div>
      )}
    </div>
  );
}
