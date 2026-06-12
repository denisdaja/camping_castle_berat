"use client";

import { useState } from "react";
import Image from "next/image";

const photos = [
  { id: 1, src: "/images/gallery-1.webp", alt: "Camping Castle Berat", label: "The Campsite", aspect: "tall" },
  { id: 2, src: "/images/gallery-2.webp", alt: "Camping Castle Berat", label: "Views & Nature", aspect: "wide" },
  { id: 3, src: "/images/gallery-3.webp", alt: "Camping Castle Berat", label: "Around the Camp", aspect: "square" },
  { id: 4, src: "/images/gallery-4.webp", alt: "Camping Castle Berat", label: "Castle & History", aspect: "wide" },
  { id: 5, src: "/images/gallery-5.webp", alt: "Camping Castle Berat", label: "Life at the Camp", aspect: "square" },
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
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
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
