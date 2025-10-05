import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0a1510] via-[#102117] to-[#0e1a14] text-[#e3c77b] font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/textures/legal-bg.svg')] bg-cover bg-center opacity-20 pointer-events-none -z-10"></div>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Legal Memory AI</h1>
      <p className="text-lg md:text-xl mb-8">Custodian of Records • Guardian of Truth • Court Ready Proof</p>
      <div className="w-full max-w-2xl aspect-video mb-6">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/QoxckBX4j8A"
          title="Legal Memory AI"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h2 className="text-2xl md:text-3xl mb-6">Think Good • Say Good • Do Good</h2>
      <p className="text-sm text-[#e3c77b]/70 max-w-xl">
        Join thousands using Legal Memory as their AI witness — from street-level receipts to institutional records.
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <a href="https://www.instagram.com/legalmemoryai/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">Instagram</a>
        <a href="https://x.com/legalmemoryai" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">X</a>
        <a href="https://www.tiktok.com/@legalmemory" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">TikTok</a>
        <a href="https://www.youtube.com/@legalmemoryai" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">YouTube</a>
      </div>
    </div>
  );
}
