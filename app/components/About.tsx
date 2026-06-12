const highlights = [
  { icon: "🏰", title: "Castle Views", desc: "Camp directly below the 2,400-year-old Berat Castle, a UNESCO World Heritage Site." },
  { icon: "🌿", title: "Nature Immersed", desc: "Surrounded by olive groves and wild herbs along the banks of the Osum River." },
  { icon: "🔥", title: "Campfire Nights", desc: "Designated fire pits, stargazing sessions, and stories shared under open skies." },
  { icon: "🚶", title: "Hiking Trails", desc: "Direct access to trails leading to the castle, the old city quarters, and scenic lookouts." },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-[#5a6b3a] text-sm tracking-[0.3em] uppercase mb-3">
              Our Story
            </p>
            <h2 className="text-4xl font-bold text-[#3d2b1f] mb-6 leading-snug">
              Where History Meets
              <br />
              the Wild
            </h2>
            <p className="text-[#6b5344] leading-relaxed mb-4">
              Camping Castle Berat sits in the oldest inhabited neighbourhood of one
              of Albania's most beautiful cities. We're not just a campsite — we're a
              gateway to centuries of history, warm Albanian hospitality, and
              landscapes that feel untouched by time.
            </p>
            <p className="text-[#6b5344] leading-relaxed mb-8">
              Whether you pitch a tent on the grass, sleep under the stars on one of
              our wooden platforms, or settle into a cosy bungalow, you'll fall asleep
              with castle walls glowing above you and wake to the sounds of birds and
              distant bells.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-[#4a3728] text-[#f5f0e8] rounded font-semibold tracking-wide hover:bg-[#3d2b1f] transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="bg-white border border-[#e0d5c5] rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{h.icon}</div>
                <h3 className="font-bold text-[#3d2b1f] mb-2">{h.title}</h3>
                <p className="text-[#6b5344] text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
