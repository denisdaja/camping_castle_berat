const options = [
  {
    icon: "⛺",
    title: "Tent Pitch",
    price: "€8",
    unit: "/ person / night",
    color: "#5a6b3a",
    features: [
      "Level grassy pitches",
      "Access to shared bathrooms",
      "Electricity hookup available",
      "Fire pit access",
      "Shade trees",
    ],
  },
  {
    icon: "🌙",
    title: "Glamping Platform",
    price: "€35",
    unit: "/ night",
    color: "#8b5e3c",
    featured: true,
    features: [
      "Raised wooden deck",
      "Double mattress & bedding",
      "Private lantern lighting",
      "Breakfast basket included",
      "Castle-view positioning",
    ],
  },
  {
    icon: "🏠",
    title: "Stone Bungalow",
    price: "€60",
    unit: "/ night",
    color: "#4a3728",
    features: [
      "Traditional stone walls",
      "Private en-suite bathroom",
      "Air conditioning",
      "Mini fridge & kettle",
      "Terrace with castle views",
    ],
  },
];

export default function Accommodation() {
  return (
    <section id="accommodation" className="py-24 px-6 bg-[#ede6d9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#5a6b3a] text-sm tracking-[0.3em] uppercase mb-3">
            Where You&apos;ll Sleep
          </p>
          <h2 className="text-4xl font-bold text-[#3d2b1f]">Accommodation</h2>
          <p className="text-[#6b5344] mt-4 max-w-xl mx-auto leading-relaxed">
            From budget tent pitches to rustic bungalows, there&apos;s a place for
            every kind of traveller.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {options.map((opt) => (
            <div
              key={opt.title}
              className={`relative bg-white rounded-xl overflow-hidden border transition-transform hover:-translate-y-1 hover:shadow-xl ${
                opt.featured
                  ? "border-[#8b5e3c] shadow-lg"
                  : "border-[#e0d5c5]"
              }`}
            >
              {opt.featured && (
                <div className="absolute top-0 left-0 right-0 text-center py-1.5 text-xs font-bold tracking-wider text-white uppercase" style={{ background: opt.color }}>
                  Most Popular
                </div>
              )}
              <div className={`px-8 ${opt.featured ? "pt-12 pb-8" : "pt-8 pb-8"}`}>
                <div className="text-4xl mb-4">{opt.icon}</div>
                <h3 className="text-xl font-bold text-[#3d2b1f] mb-1">{opt.title}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold" style={{ color: opt.color }}>
                    {opt.price}
                  </span>
                  <span className="text-[#8b7d6b] text-sm">{opt.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {opt.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[#6b5344] text-sm">
                      <span className="text-[#5a6b3a] mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block text-center py-3 rounded font-semibold text-sm tracking-wide transition-colors"
                  style={{
                    background: opt.color,
                    color: "#f5f0e8",
                  }}
                >
                  Book This
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#8b7d6b] text-sm mt-10">
          All prices include access to shared kitchen, bathrooms, and Wi-Fi. · Minimum stay 2 nights in peak season.
        </p>
      </div>
    </section>
  );
}
