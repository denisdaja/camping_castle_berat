"use client";

import { useState } from "react";

// Placeholder gallery items — replace src with real images
const photos = [
  { id: 1, src: "", alt: "Berat Castle at sunrise", label: "Castle at Sunrise", aspect: "tall" },
  { id: 2, src: "", alt: "Campfire under the stars", label: "Campfire Nights", aspect: "wide" },
  { id: 3, src: "", alt: "Tent pitch with castle view", label: "Tent Pitches", aspect: "square" },
  { id: 4, src: "", alt: "Glamping platform view", label: "Glamping Platforms", aspect: "wide" },
  { id: 5, src: "", alt: "Stone bungalow terrace", label: "Stone Bungalows", aspect: "square" },
  { id: 6, src: "", alt: "Osum river morning", label: "Osum River", aspect: "tall" },
];

const bgColors = [
  "#5a6b3a",
  "#4a3728",
  "#8b7d6b",
  "#2d3e1f",
  "#6b5344",
  "#3d5a34",
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#5a6b3a] text-sm tracking-[0.3em] uppercase mb-3">
            See It For Yourself
          </p>
          <h2 className="text-4xl font-bold text-[#3d2b1f]">Gallery</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={photo.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              style={{
                aspectRatio: photo.aspect === "tall" ? "3/4" : photo.aspect === "wide" ? "4/3" : "1",
              }}
              onClick={() => setActive(i)}
            >
              {/* Placeholder colour block until real photos are added */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: bgColors[i] }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-sm font-semibold">{photo.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {active !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-6 right-6 text-white text-3xl hover:text-[#d4b896]"
              onClick={() => setActive(null)}
            >
              ✕
            </button>
            <div
              className="w-full max-w-2xl aspect-video rounded-lg flex items-center justify-center"
              style={{ background: bgColors[active] }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-white text-xl font-bold">{photos[active].label}</p>
            </div>
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-[#d4b896]"
              onClick={(e) => { e.stopPropagation(); setActive((active - 1 + photos.length) % photos.length); }}
            >
              ‹
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-[#d4b896]"
              onClick={(e) => { e.stopPropagation(); setActive((active + 1) % photos.length); }}
            >
              ›
            </button>
          </div>
        )}

        <p className="text-center text-[#8b7d6b] text-sm mt-8">
          📸 Real photos coming soon — contact us or follow us on Instagram.
        </p>
      </div>
    </section>
  );
}
