export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #1a2e0d 0%, #2d3e1f 40%, #4a3728 100%)",
      }}
    >
      {/* Decorative tree silhouettes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ height: "40%" }}
        >
          <path
            d="M0,320 L0,180 L40,160 L60,120 L80,160 L120,100 L160,160 L180,130 L200,160 L240,80 L280,160 L300,140 L320,160 L360,100 L400,160 L420,150 L440,160 L480,90 L520,160 L540,130 L560,160 L600,110 L640,160 L660,140 L680,160 L720,95 L760,160 L780,145 L800,160 L840,105 L880,160 L900,135 L920,160 L960,85 L1000,160 L1020,150 L1040,160 L1080,100 L1120,160 L1140,130 L1160,160 L1200,90 L1240,160 L1260,145 L1280,160 L1320,110 L1360,160 L1400,140 L1440,160 L1440,320 Z"
            fill="#1a2e0d"
            opacity="0.6"
          />
          <path
            d="M0,320 L0,220 L80,200 L160,220 L240,190 L320,220 L400,200 L480,220 L560,195 L640,220 L720,205 L800,220 L880,198 L960,220 L1040,208 L1120,220 L1200,202 L1280,220 L1360,210 L1440,220 L1440,320 Z"
            fill="#2d3e1f"
            opacity="0.8"
          />
        </svg>

        {/* Stars */}
        {[
          { top: "10%", left: "15%", size: 3 },
          { top: "20%", left: "75%", size: 2 },
          { top: "8%", left: "45%", size: 2 },
          { top: "15%", left: "60%", size: 3 },
          { top: "25%", left: "30%", size: 2 },
          { top: "5%", left: "85%", size: 2 },
          { top: "18%", left: "90%", size: 3 },
          { top: "30%", left: "10%", size: 2 },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      {/* Castle silhouette */}
      <div className="absolute top-16 right-8 md:right-24 opacity-30">
        <svg width="120" height="140" viewBox="0 0 120 140">
          <rect x="10" y="80" width="100" height="60" fill="#d4b896" />
          <rect x="0" y="60" width="25" height="40" fill="#d4b896" />
          <rect x="95" y="60" width="25" height="40" fill="#d4b896" />
          <rect x="47" y="55" width="26" height="30" fill="#d4b896" />
          <rect x="0" y="50" width="8" height="15" fill="#d4b896" />
          <rect x="10" y="50" width="8" height="15" fill="#d4b896" />
          <rect x="95" y="50" width="8" height="15" fill="#d4b896" />
          <rect x="107" y="50" width="8" height="15" fill="#d4b896" />
          <rect x="47" y="45" width="8" height="15" fill="#d4b896" />
          <rect x="60" y="45" width="8" height="15" fill="#d4b896" />
          <rect x="40" y="100" width="20" height="40" fill="#3d2b1f" />
          <rect x="25" y="85" width="15" height="10" fill="#1a2e0d" />
          <rect x="80" y="85" width="15" height="10" fill="#1a2e0d" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#d4b896] opacity-60 animate-bounce">
        <svg width="20" height="28" viewBox="0 0 20 28">
          <rect x="7" y="0" width="6" height="16" rx="3" stroke="#d4b896" strokeWidth="1.5" fill="none" />
          <circle cx="10" cy="5" r="2" fill="#d4b896" />
          <path d="M6 20 L10 26 L14 20" stroke="#d4b896" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}
