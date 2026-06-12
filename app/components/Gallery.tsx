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
    <section id="gallery" className="py-24 px-6 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#a8c48a] text-sm tracking-[0.3em] uppercase mb-3">
            See It For Yourself
          </p>
          <h2 className="text-4xl font-bold text-[#f5f0e8]">Gallery</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <div
              key={photo.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              style={{ aspectRatio: "4/3", minHeight: 280 }}
              onClick={() => setActive(i)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
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
              className="relative w-full max-w-3xl aspect-video rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[active].src}
                alt={photos[active].alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
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
      </div>
    </section>
  );
}
