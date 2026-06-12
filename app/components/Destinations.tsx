"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const destinations = [
  {
    id: 1,
    title: "City Heritage Tours",
    subtitle: "Berat Castle · Mangalem · Gorica Bridge",
    category: "Heritage",
    description: "Expert-guided walking through Berat Castle, Mangalem, Gorica Bridge, and the National Museum.",
    image: "/images/berat.webp",
    duration: "2–3 hours",
    distance: "10 min walk",
    highlight: "Panoramic views at sunset",
  },
  {
    id: 2,
    title: "Rafting & Swimming",
    subtitle: "Kanioni i Osumit",
    category: "Nature",
    description: "Albania's 'Grand Canyon' — dramatic limestone gorges carved by the Osum River. Swim in turquoise pools, raft through rapids, or hike the canyon rim.",
    image: "/images/canione_foto.webp",
    duration: "Full day",
    distance: "45 min drive",
    highlight: "Rafting & swimming",
  },
  {
    id: 3,
    title: "Mountain Hiking",
    subtitle: "Tomori Mountain",
    category: "Adventure",
    description: "Trek the trails above Berat through ancient forests with panoramic castle views. Guides available for all levels.",
    image: "/images/hiking.jpeg",
    duration: "3–6 hours",
    distance: "From campsite",
    highlight: "Panoramic castle views",
  },
  {
    id: 4,
    title: "Wine Experiences",
    subtitle: "Gastronomia Shqiptare",
    category: "Culinary",
    description: "Albanian wine degustation, raki tasting, and guided visits to the best local wineries in Berat.",
    image: "/images/cobo_winery.webp",
    duration: "2–4 hours",
    distance: "Various locations",
    highlight: "Local wineries & raki",
  },
  {
    id: 5,
    title: "Bogova Waterfall",
    subtitle: "Ujëvara e Bogovës",
    category: "Nature",
    description: "Discover one of Albania's most breathtaking hidden gems — the stunning Bogova Waterfall, nestled in a lush gorge just a short drive from Berat.",
    image: "/images/Bogova-Waterfall.jpg",
    duration: "Half day",
    distance: "30 min drive",
    highlight: "Hidden natural wonder",
  },
  {
    id: 6,
    title: "Off Road Riding",
    subtitle: "4x4 Adventure",
    category: "Adventure",
    description: "Explore the rugged terrain around Berat in powerful 4x4 vehicles. Experience Albanian landscapes from a whole new perspective.",
    image: "/images/off-road.jpeg",
    duration: "Half / Full day",
    distance: "From campsite",
    highlight: "4x4 terrain adventure",
  },
];

export default function Destinations() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="destination"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#3d2b1f" }}
    >
      {/* Decorative top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, transparent, #d4b896, transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        {/* Header */}
        <div className="flex justify-between items-end flex-wrap gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-[#a8c48a] text-sm tracking-[0.3em] uppercase mb-3">Explore Berat</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#f5f0e8" }}>
              Activities &{" "}
              <em className="not-italic" style={{ color: "#d4b896" }}>Experiences</em>
            </h2>
            <div className="w-12 h-[2px] mt-4" style={{ background: "#d4b896" }} />
          </div>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(245,240,232,0.5)" }}>
            Every corner of Berat tells a story spanning centuries. Let us be your guide.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {destinations.map((dest, i) => (
            <article
              key={dest.id}
              className="relative overflow-hidden cursor-pointer"
              style={{
                height: "clamp(260px, 40vw, 380px)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={() => setActive(dest.id)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Image */}
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                  transform: active === dest.id ? "scale(1.08)" : "scale(1)",
                }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  background: active === dest.id
                    ? "linear-gradient(to top, rgba(36,24,16,0.95) 0%, rgba(36,24,16,0.45) 60%, transparent 100%)"
                    : "linear-gradient(to top, rgba(36,24,16,0.88) 0%, rgba(36,24,16,0.25) 60%, transparent 100%)",
                }}
              />

              {/* Category badge */}
              <span
                className="absolute top-5 left-5 z-10 text-[10px] font-medium tracking-[0.18em] uppercase backdrop-blur-sm px-2.5 py-1"
                style={{ color: "#d4b896", background: "rgba(0,0,0,0.45)" }}
              >
                {dest.category}
              </span>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-2xl font-bold leading-snug mb-1" style={{ color: "#f5f0e8" }}>
                  {dest.title}
                </h3>
                <span
                  className="block text-sm italic mb-0"
                  style={{ color: "rgba(245,240,232,0.55)" }}
                >
                  {dest.subtitle}
                </span>

                <div
                  style={{
                    maxHeight: active === dest.id ? 200 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <p className="text-sm leading-[1.7] mt-3 mb-4" style={{ color: "rgba(245,240,232,0.75)" }}>
                    {dest.description}
                  </p>
                  <div className="flex gap-5">
                    <span className="text-xs" style={{ color: "#d4b896" }}>⏱ {dest.duration}</span>
                    <span className="text-xs" style={{ color: "rgba(245,240,232,0.55)" }}>📍 {dest.distance}</span>
                  </div>
                </div>

                {active !== dest.id && (
                  <span className="inline-block mt-2.5 text-xs tracking-[0.08em]" style={{ color: "#d4b896" }}>
                    ✦ {dest.highlight}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
