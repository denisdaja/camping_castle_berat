
export default function Location() {
  return (
    <section id="location" className="py-20 md:py-24 px-6 bg-[#ede6d9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#5a6b3a] text-sm tracking-[0.3em] uppercase mb-3">Find Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3d2b1f]">Location</h2>
          <p className="text-[#6b5344] mt-4 max-w-lg mx-auto leading-relaxed">
            Nestled at the foot of Berat Castle in the historic Gorica quarter —
            one of the most scenic spots in southern Albania.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Real map embed */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#d4b896]">
            <iframe
              title="Camping The Castle of Berat Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.3!2d19.9465877!3d40.7204178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135aa155a4807fe1%3A0x1cf6a6ca6a01d07b!2sCamping%20%22The%20Castle%20of%20Berat%22!5e0!3m2!1sen!2s!4v1"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Address */}
          <div>
            <div className="bg-white border border-[#e0d5c5] rounded-lg p-6">
              <h4 className="font-bold text-[#3d2b1f] mb-3">Address</h4>
              <p className="text-[#6b5344] text-sm leading-relaxed">
                Camping &ldquo;The Castle of Berat&rdquo;<br />
                Muzak Topia Street, Gorica Quarter<br />
                Berat 5001, Albania<br />
                <br />
                <span className="block">📍 40.7204178, 19.9491626</span>
              </p>
              <a
                href="https://www.google.com/maps/place/Camping+%22The+Castle+of+Berat%22/@40.7204178,19.9491626,17z"
                className="inline-block mt-4 text-[#5a6b3a] underline hover:text-[#4a5a2e] text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
