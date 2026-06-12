const howToGet = [
  {
    icon: "🚗",
    method: "By Car",
    desc: "2.5 hours from Tirana. Take the SH4 highway south through Elbasan. Free parking on-site.",
  },
  {
    icon: "🚌",
    method: "By Bus",
    desc: "Daily buses from Tirana's Kombinat terminal to Berat (approx. 3h). We'll pick you up from the bus station.",
  },
  {
    icon: "✈️",
    method: "By Plane",
    desc: "Fly into Tirana International Airport (TIA), then take a bus or rent a car to Berat.",
  },
];

export default function Location() {
  return (
    <section id="location" className="py-24 px-6 bg-[#ede6d9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#5a6b3a] text-sm tracking-[0.3em] uppercase mb-3">
            Find Us
          </p>
          <h2 className="text-4xl font-bold text-[#3d2b1f]">Location</h2>
          <p className="text-[#6b5344] mt-4 max-w-lg mx-auto leading-relaxed">
            We&apos;re nestled at the foot of Berat Castle in the historic Gorica
            quarter — one of the most scenic spots in southern Albania.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map placeholder */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#d4b896]">
            <iframe
              title="Camping Castle Berat Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12034.!2d20.0!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134fcb7f5d4f0eb7%3A0x4b62a3bf3c9e3a0!2sBerat%2C%20Albania!5e0!3m2!1sen!2s!4v1"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Getting here */}
          <div>
            <h3 className="text-2xl font-bold text-[#3d2b1f] mb-6">Getting Here</h3>
            <div className="space-y-6 mb-10">
              {howToGet.map((item) => (
                <div key={item.method} className="flex gap-4">
                  <span className="text-2xl mt-1">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-[#3d2b1f] mb-1">{item.method}</h4>
                    <p className="text-[#6b5344] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-[#e0d5c5] rounded-lg p-6">
              <h4 className="font-bold text-[#3d2b1f] mb-3">Address</h4>
              <p className="text-[#6b5344] text-sm leading-relaxed">
                Camping Castle Berat<br />
                Gorica Quarter, Below the Castle<br />
                Berat, Albania<br />
                <br />
                <a
                  href="https://goo.gl/maps/berat"
                  className="text-[#5a6b3a] underline hover:text-[#4a5a2e]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
