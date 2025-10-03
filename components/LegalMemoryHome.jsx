import { motion } from "framer-motion";

function SocialLink({ platform, url, role }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={role}
      className="text-[#e3c77b] text-lg hover:text-yellow-400 transition inline-block"
    >
      {platform}
    </a>
  );
}

export default function LegalMemoryHome() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a1510] via-[#102117] to-[#0e1a14]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[url('/textures/legal-bg.svg')] bg-cover bg-center opacity-20 pointer-events-none -z-10"></div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-[#e3c77b]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Legal Memory AI
        </motion.h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#e3c77b] mt-4 max-w-xl leading-relaxed">
          Custodian of Records • Guardian of Truth • Court Ready Proof
        </p>

        {/* Launch Button */}
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

      {/* YouTube Section */}
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

      {/* CTA Section */}
      <section className="py-20 text-center bg-[#0d1c16]">
        <h3 className="text-2xl md:text-4xl font-semibold mb-4 text-[#e3c77b]">
          Think Good • Say Good • Do Good
        </h3>
        <p className="text-[#e3c77b] max-w-xl mx-auto">
          Join thousands using Legal Memory as their AI witness, from street level receipts to institutional records. Free civilian access now open.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <SocialLink
            platform="Instagram"
            url="https://www.instagram.com/legalmemoryai/"
            role="Follow us on Instagram"
          />
          <SocialLink
            platform="X"
            url="https://x.com/legalmemoryai"
            role="Visit our X profile"
          />
          <SocialLink
            platform="TikTok"
            url="https://www.tiktok.com/@legalmemory"
            role="Watch on TikTok"
          />
          <SocialLink
            platform="YouTube"
            url="https://www.youtube.com/@legalmemoryai"
            role="Subscribe on YouTube"
          />
        </div>
      </section>
    </main>
  );
}
