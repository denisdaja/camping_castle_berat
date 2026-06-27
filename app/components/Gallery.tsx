"use client";

import { useState } from "react";
import Image from "next/image";

const photos = [
  { id: 1, src: "/images/gallery-1.webp", alt: "Camping Castle Berat" },
  { id: 2, src: "/images/gallery-2.webp", alt: "Camping Castle Berat" },
  { id: 3, src: "/images/gallery-3.webp", alt: "Camping Castle Berat" },
  { id: 4, src: "/images/gallery-4.webp", alt: "Camping Castle Berat" },
  { id: 5, src: "/images/gallery-5.webp", alt: "Camping Castle Berat" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-24 px-6" style={{ background: "#1a1a1a" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#a8c48a] text-sm tracking-[0.3em] uppercase mb-3">See It For Yourself</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f0e8]">Gallery</h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <div
              key={photo.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              style={{ aspectRatio: i === 0 || i === 3 ? "3/4" : "4/3" }}
              onClick={() => setActive(i)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {active !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-3xl hover:text-[#d4b896] transition-colors z-10"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div
              className="relative w-full max-w-4xl rounded-lg overflow-hidden"
              style={{ maxHeight: "85vh", aspectRatio: "4/3" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[active].src}
                alt={photos[active].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <button
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl hover:text-[#d4b896] transition-colors z-10 leading-none"
              onClick={(e) => { e.stopPropagation(); setActive((active - 1 + photos.length) % photos.length); }}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl hover:text-[#d4b896] transition-colors z-10 leading-none"
              onClick={(e) => { e.stopPropagation(); setActive((active + 1) % photos.length); }}
              aria-label="Next photo"
            >
              ›
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {active + 1} / {photos.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
