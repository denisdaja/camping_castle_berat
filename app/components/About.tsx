"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "2,400+", label: "Years of History" },
  { value: "UNESCO", label: "World Heritage Site" },
  { value: "500+", label: "Happy Campers" },
  { value: "4.9★", label: "Guest Rating" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden py-28"
      style={{ background: "#f5f0e8" }}
    >
      {/* Decorative background text */}
      <div
        className="absolute right-[-40px] top-1/2 -translate-y-1/2 select-none pointer-events-none font-bold uppercase whitespace-nowrap"
        style={{
          fontSize: "clamp(80px,15vw,160px)",
          color: "rgba(61,43,31,0.04)",
          letterSpacing: "0.1em",
        }}
      >
        BERAT
      </div>

      <div className="max-w-6xl mx-auto px-6 about-grid grid gap-16 items-center" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {/* Logo / image side */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
          className="flex items-center justify-center"
        >
          {/* Replace with <Image src="/images/logo_camping.webp" ...> when logo is ready */}
          <div
            className="relative w-full flex items-center justify-center rounded"
            style={{
              maxWidth: 420,
              aspectRatio: "1",
              background: "#ede6d9",
              border: "2px dashed #d4b896",
            }}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">⛺</div>
              <p className="text-sm tracking-widest uppercase" style={{ color: "#8b7d6b" }}>
                Logo coming soon
              </p>
            </div>
            {/* Offset border accent */}
            <div
              className="absolute rounded pointer-events-none"
              style={{ inset: 0, border: "2px solid #d4b896", transform: "translate(10px, 10px)" }}
            />
          </div>
        </div>

        {/* Text side */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(40px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          <p className="text-[#5a6b3a] text-sm tracking-[0.3em] uppercase mb-3">Our Story</p>
          <h2 className="text-4xl font-bold leading-snug mb-4" style={{ color: "#3d2b1f" }}>
            Where Ancient Walls<br />
            <em className="not-italic" style={{ color: "#d4b896" }}>Meet Open Skies</em>
          </h2>
          <div className="w-12 h-[2px] mb-6" style={{ background: "#d4b896" }} />

          <p className="text-sm leading-[1.9] mb-5" style={{ color: "#6b5344" }}>
            Welcome to Camping Castle Berat, your peaceful escape at the foot of one of
            Albania's most iconic landmarks. Surrounded by nature and nestled in the historic
            Gorica quarter, our campsite is the perfect base for travellers seeking relaxation,
            adventure, and authentic Albanian hospitality.
          </p>
          <p className="text-sm leading-[1.9] mb-8" style={{ color: "#6b5344" }}>
            We welcome campers from all over the world — whether you pitch a tent on the grass,
            sleep under the stars on one of our wooden platforms, or settle into a stone bungalow.
            Come as a guest, leave as a friend. Camping Castle Berat — Experience Nature,
            Adventure & Tradition!
          </p>

          {/* Stats */}
          <div
            className="grid pt-8"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gap: "20px 32px",
              borderTop: "1px solid #e0d5c5",
            }}
          >
            {stats.map((s, i) => (
              <div key={i}>
                <span className="block text-3xl font-bold leading-none mb-1" style={{ color: "#5a6b3a" }}>
                  {s.value}
                </span>
                <span className="text-xs tracking-[0.06em]" style={{ color: "#8b7d6b" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
