"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote: "We had a wonderful stay at this motorhome campsite. The people were incredibly kind and hospitable – they welcomed us with fresh fruit and a small shot, and they were so lovely to our little daughter. The location is very calm and quiet, yet close to the city center. We can highly recommend this place to everyone!",
    author: "Martin Held",
    location: "4 months ago · Google",
    stars: 5,
  },
  {
    id: 2,
    quote: "100% recommendation! Complete service, very well-maintained site, super-clean restrooms. But the best part: the hosts. We thank you from the bottom of our hearts for the great fruit, the many espressos, our conversations, the olives, and the great help with repairing our motorhome. It was like being part of a family!",
    author: "Thomas Rexrodt",
    location: "6 months ago · Google",
    stars: 5,
  },
  {
    id: 3,
    quote: "A beautiful campsite with spacious, level pitches, in a quiet location yet within easy walking distance of Berat. New and spotlessly clean sanitary facilities, wonderful showers. On top of that, incredibly friendly owners who provided us with freshly picked pomegranates daily. Camping couldn't be better.",
    author: "Florian Feichtmeier",
    location: "7 months ago · Google",
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden text-center py-24 px-6"
      style={{ background: "#2d3e1f" }}
    >
      {/* Background quote mark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-[360px] leading-none"
        style={{ color: "rgba(255,255,255,0.03)" }}
      >
        &ldquo;
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Stars */}
        <div className="text-base tracking-[4px] mb-7" style={{ color: "#D4AF37" }}>
          {"★".repeat(t.stars)}
        </div>

        {/* Quote */}
        <blockquote
          key={active}
          className="text-xl md:text-2xl font-light italic leading-[1.7] mb-9"
          style={{ color: "#f5f0e8", animation: "fadeIn 0.6s ease" }}
        >
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm font-medium tracking-[0.08em]" style={{ color: "#d4b896" }}>
            {t.author}
          </span>
          <span className="text-xs tracking-[0.12em] uppercase" style={{ color: "rgba(245,240,232,0.4)" }}>
            {t.location}
          </span>
        </div>

        {/* Dots */}
        <div className="flex gap-2.5 justify-center mt-9">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="py-4 px-1.5 flex items-center justify-center bg-transparent border-0 cursor-pointer"
              aria-label={`Review ${i + 1}`}
            >
              <span
                className="block rounded"
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === active ? "#d4b896" : "rgba(255,255,255,0.2)",
                  transition: "all 0.3s ease",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  );
}
