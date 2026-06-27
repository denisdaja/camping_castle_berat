export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/video_camping_castle.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(26,46,13,0.55) 0%, rgba(45,62,31,0.5) 50%, rgba(74,55,40,0.7) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative text-center px-6 max-w-3xl" style={{ zIndex: 2 }}>
        <p className="text-[#a8c48a] text-sm tracking-[0.3em] uppercase mb-4">
          Berat, Albania
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#f5f0e8] leading-tight mb-6">
          Camp Beneath
          <br />
          <span className="text-[#d4b896]">the Castle</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-3 bg-[#5a6b3a] text-[#f5f0e8] rounded font-semibold tracking-wide hover:bg-[#4a5a2e] transition-colors"
          >
            Explore Stays
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[#d4b896] text-[#d4b896] rounded font-semibold tracking-wide hover:bg-[#d4b896]/10 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#d4b896] opacity-60 animate-bounce" style={{ zIndex: 2 }}>
        <svg width="20" height="28" viewBox="0 0 20 28">
          <rect x="7" y="0" width="6" height="16" rx="3" stroke="#d4b896" strokeWidth="1.5" fill="none" />
          <circle cx="10" cy="5" r="2" fill="#d4b896" />
          <path d="M6 20 L10 26 L14 20" stroke="#d4b896" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}
