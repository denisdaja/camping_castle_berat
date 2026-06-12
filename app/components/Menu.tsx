"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const dishes = [
  {
    id: 1,
    name: "Homemade Pie",
    subtitle: "Byrek Shtëpiak",
    description: "Thin hand-rolled pastry filled with spinach and local white cheese, slowly baked to golden perfection. A staple of traditional Albanian home cooking.",
    image: "/images/home_pie.jpeg",
  },
  {
    id: 2,
    name: "Stuffed Peppers",
    subtitle: "Speca të Mbushur",
    description: "Fresh peppers filled with seasoned rice, local herbs and cheese, slow-cooked in a pot. A true classic of the Berat table, rich in authentic flavour.",
    image: "/images/stuffed_peppers.webp",
  },
  {
    id: 3,
    name: "Village Salad",
    subtitle: "Sallatë Fshati",
    description: "Sun-ripened tomatoes and cucumbers from local gardens, green peppers, red onion and crumbled local white cheese. Simple, wholesome and authentic.",
    image: "/images/village_salad.webp",
  },
  {
    id: 4,
    name: "Crispy Potatoes",
    subtitle: "Patate të Skuqura",
    description: "Golden and crunchy fried potatoes, served as a side alongside grilled meats and traditional Albanian specialities fresh from the grill.",
    image: "/images/french_fries.jpeg",
  },
  {
    id: 5,
    name: "Fresh Seasonal Fruits",
    subtitle: "Fruta të Freskëta",
    description: "Hand-picked seasonal fruits from the orchards surrounding Berat — peaches, figs, grapes and watermelon. A sweet and pure taste of Albanian nature.",
    image: "/images/fruits.jpeg",
  },
  {
    id: 6,
    name: "Sour Cream",
    subtitle: "Kos Shtëpiak",
    description: "Thick and creamy homemade sour cream prepared with fresh local milk — served as a side with traditional dishes or enjoyed on its own.",
    image: "/images/sour-cream.jpeg",
  },
];

export default function Menu() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
      id="menu"
      ref={ref}
      className="relative overflow-hidden py-28"
      style={{ background: "#f5f0e8" }}
    >
      {/* Decorative background text */}
      <div
        className="absolute left-[-40px] top-1/2 -translate-y-1/2 select-none pointer-events-none font-bold uppercase whitespace-nowrap"
        style={{
          fontSize: "clamp(80px,15vw,160px)",
          color: "rgba(61,43,31,0.04)",
          letterSpacing: "0.1em",
        }}
      >
        MENU
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#5a6b3a] text-sm tracking-[0.3em] uppercase mb-3">Our Kitchen</p>
          <h2 className="text-4xl font-bold" style={{ color: "#3d2b1f" }}>
            Traditional{" "}
            <em className="not-italic" style={{ color: "#8b5e3c" }}>Albanian Flavours</em>
          </h2>
          <div className="w-12 h-[2px] mx-auto mt-4 mb-5" style={{ background: "#d4b896" }} />
          <p className="text-sm leading-relaxed max-w-md mx-auto" style={{ color: "#6b5344" }}>
            Prepared with fresh local ingredients, our dishes bring the authentic taste of Berat straight to your table.
          </p>
        </div>

        {/* Dish cards */}
        <div
          className="grid gap-[2px] mb-[2px]"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))" }}
        >
          {dishes.map((dish, i) => (
            <div
              key={dish.id}
              className="flex overflow-hidden"
              style={{
                background: "white",
                border: "1px solid #e0d5c5",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              {/* Photo */}
              <div className="relative shrink-0" style={{ width: 160, minWidth: 160 }}>
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="160px"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center px-6 py-5">
                <span
                  className="block text-[10px] font-medium tracking-[0.18em] uppercase mb-1.5"
                  style={{ color: "#8b5e3c" }}
                >
                  {dish.subtitle}
                </span>
                <h3 className="text-xl font-bold leading-snug mb-2" style={{ color: "#3d2b1f" }}>
                  {dish.name}
                </h3>
                <p className="text-sm leading-[1.7]" style={{ color: "#6b5344" }}>
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Local products feature */}
        <div
          className="grid mt-14 overflow-hidden local-products-grid"
          style={{
            gridTemplateColumns: "1fr 1.4fr",
            background: "#3d2b1f",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
          }}
        >
          {/* Photo */}
          <div className="relative" style={{ minHeight: 320 }}>
            <Image
              src="/images/local_prouct.webp"
              alt="Local Products from Berat"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, transparent 60%, #3d2b1f 100%)" }}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-12 py-12">
            <span
              className="block text-[10px] font-medium tracking-[0.22em] uppercase mb-4"
              style={{ color: "#d4b896" }}
            >
              Shop Local
            </span>
            <h3 className="text-3xl font-bold leading-snug mb-4" style={{ color: "#f5f0e8" }}>
              Local Products <br />
              <em className="not-italic font-light text-2xl" style={{ color: "rgba(245,240,232,0.65)" }}>
                from Berat
              </em>
            </h3>
            <p className="text-sm leading-[1.9] mb-7 max-w-md" style={{ color: "rgba(245,240,232,0.65)" }}>
              Straight from the land of Berat — we offer a curated selection of the finest local
              products:{" "}
              <strong style={{ color: "rgba(245,240,232,0.9)" }}>cold-pressed olive oil</strong> from
              centuries-old groves,{" "}
              <strong style={{ color: "rgba(245,240,232,0.9)" }}>local white and red wine</strong> from
              the region&apos;s vineyards,{" "}
              <strong style={{ color: "rgba(245,240,232,0.9)" }}>Gliko Berati</strong> — a traditional
              candied fruit preserve, and homemade{" "}
              <strong style={{ color: "rgba(245,240,232,0.9)" }}>fruit jam</strong> and{" "}
              <strong style={{ color: "rgba(245,240,232,0.9)" }}>compote</strong> crafted with recipes
              passed down through generations.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {["Olive Oil", "Local Wine", "Gliko Berati", "Fruit Jam", "Compote"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium tracking-[0.14em] uppercase px-3.5 py-1.5"
                  style={{ color: "#d4b896", border: "1px solid rgba(212,184,150,0.4)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .local-products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
