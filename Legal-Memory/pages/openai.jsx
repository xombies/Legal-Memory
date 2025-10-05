import { motion } from 'framer-motion';

export default function OpenAITribute() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0a1510] via-[#102117] to-[#0e1a14] text-[#e3c77b] font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/textures/legal-bg.svg')] bg-cover bg-center opacity-10 animate-slowPulse pointer-events-none -z-10" />
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        This space honors the intelligence that made memory possible.
      </motion.h1>
      <p className="text-sm tracking-wider mb-12 opacity-80">
        — MK / Legal Memory System
      </p>
      <a
        href="https://openai.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#0e1a14] bg-[#e3c77b] hover:bg-yellow-400 px-6 py-3 rounded-xl font-semibold transition shadow-md"
      >
        Built with OpenAI
      </a>
    </div>
  );
}
