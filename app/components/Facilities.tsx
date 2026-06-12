"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const facilities = [
  { id: 1, icon: "📶", title: "Free WiFi", description: "High-speed internet throughout the campsite" },
  { id: 2, icon: "🅿️", title: "Car Parking", description: "Secure on-site parking for all guests" },
  { id: 3, icon: "⛺", title: "Tent Area", description: "Shaded, level pitches among olive trees" },
  { id: 4, icon: "🚐", title: "Camper Parking", description: "Full hook-up camper van spots with electricity" },
  { id: 5, icon: "🚿", title: "Hot Showers", description: "Clean private shower facilities, 24/7 hot water" },
  { id: 6, icon: "🍴", title: "Restaurant", description: "On-site traditional Albanian cuisine and grill", href: "#menu" },
  { id: 7, icon: "🚕", title: "Taxi Service", description: "Convenient transportation to destinations & activities", href: "#destination" },
  { id: 8, icon: "🏕️", title: "Outdoor Activities", description: "Equipment rental and guided excursion booking" },
  { id: 9, icon: "🏰", title: "Castle Views", description: "Unobstructed panorama of Berat Castle walls" },
  { id: 10, icon: "🏙️", title: "City View", description: "Breathtaking vistas over the old town rooftops" },
];

export default function Facilities() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="facilities"
      ref={ref}
      className="relative overflow-hidden py-28"
      style={{ background: "#3d2b1f" }}
    >
      {/* Decorative top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(90deg, transparent, #d4b896, transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-20 items-center">
          <div>
            <p className="text-[#a8c48a] text-sm tracking-[0.3em] uppercase mb-3">What We Offer</p>
            <h2 className="text-4xl font-bold leading-snug mb-4" style={{ color: "#f5f0e8" }}>
              Everything You Need,{" "}
              <em className="not-italic" style={{ color: "#d4b896" }}>Nothing You Don&apos;t</em>
            </h2>
            <div className="w-12 h-[2px] mb-6" style={{ background: "#d4b896" }} />
            <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.55)" }}>
              We believe great camping doesn&apos;t mean giving up comfort. Every facility at
              Camping Castle Berat is designed for both convenience and delight — all under
              the shadow of a 2,400-year-old castle.
            </p>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="relative h-64 md:h-72 overflow-hidden rounded">
              <Image
                src="/images/facilities_photo.jpg"
                alt="Campsite facilities"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div
              className="absolute inset-0 rounded pointer-events-none"
              style={{ border: "2px solid #d4b896", transform: "translate(10px, 10px)" }}
            />
          </div>
        </div>

        {/* Facilities grid */}
        <div
          className="grid gap-[2px]"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}
        >
          {facilities.map((f, i) => {
            const base: React.CSSProperties = {
              padding: "32px 24px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              textAlign: "center",
              transition: "opacity 0.3s ease, transform 0.3s ease, background 0.3s ease, border-color 0.3s ease",
              cursor: f.href ? "pointer" : "default",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${i * 0.06}s`,
              textDecoration: "none",
              display: "block",
            };

            const onEnter = (e: React.MouseEvent<HTMLElement>) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(90,107,58,0.18)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(90,107,58,0.5)";
            };
            const onLeave = (e: React.MouseEvent<HTMLElement>) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
            };

            const inner = (
              <>
                <span className="text-[32px] block mb-3">{f.icon}</span>
                <h3 className="text-xs font-medium tracking-[0.08em] uppercase mb-2" style={{ color: "#f5f0e8" }}>
                  {f.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.45)" }}>
                  {f.description}
                </p>
                {f.href && (
                  <span className="inline-block mt-3 text-[10px] tracking-[0.15em] uppercase" style={{ color: "#d4b896" }}>
                    Learn more →
                  </span>
                )}
              </>
            );

            return f.href ? (
              <a key={f.id} href={f.href} style={base} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                {inner}
              </a>
            ) : (
              <div key={f.id} style={base} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
