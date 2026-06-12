"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkin: "",
    checkout: "",
    guests: "1",
    type: "tent",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your actual form submission logic (e.g. Formspree, EmailJS)
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#3d2b1f]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#a8c48a] text-sm tracking-[0.3em] uppercase mb-3">
            Reserve Your Spot
          </p>
          <h2 className="text-4xl font-bold text-[#f5f0e8]">Contact & Book</h2>
          <p className="text-[#c4b49a] mt-4 max-w-lg mx-auto leading-relaxed">
            Fill in the form and we&apos;ll confirm your booking within 24 hours. Or reach
            us directly via WhatsApp or email.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#d4b896] font-bold mb-3 uppercase text-sm tracking-wider">Direct Contact</h3>
              <div className="space-y-3 text-[#c4b49a] text-sm">
                <p>📱 <a href="tel:+355000000000" className="hover:text-white">+355 00 000 0000</a></p>
                <p>📧 <a href="mailto:hello@campingcastleberat.com" className="hover:text-white">hello@campingcastleberat.com</a></p>
                <p>💬 WhatsApp available</p>
              </div>
            </div>
            <div>
              <h3 className="text-[#d4b896] font-bold mb-3 uppercase text-sm tracking-wider">Season</h3>
              <p className="text-[#c4b49a] text-sm leading-relaxed">
                Open April – October.<br />
                Peak season: June – September.
              </p>
            </div>
            <div>
              <h3 className="text-[#d4b896] font-bold mb-3 uppercase text-sm tracking-wider">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-[#c4b49a] hover:text-white text-sm underline">Instagram</a>
                <a href="#" className="text-[#c4b49a] hover:text-white text-sm underline">Facebook</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            {sent ? (
              <div className="bg-[#5a6b3a]/30 border border-[#5a6b3a] rounded-xl p-10 text-center">
                <div className="text-5xl mb-4">🏕️</div>
                <h3 className="text-[#f5f0e8] text-2xl font-bold mb-2">We got your message!</h3>
                <p className="text-[#c4b49a]">
                  We&apos;ll confirm your booking details within 24 hours. See you at the castle!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#d4b896] text-sm mb-1.5">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#4a3728] border border-[#5a4535] rounded px-4 py-2.5 text-[#f5f0e8] text-sm placeholder-[#7a6555] focus:outline-none focus:border-[#d4b896]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#d4b896] text-sm mb-1.5">Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#4a3728] border border-[#5a4535] rounded px-4 py-2.5 text-[#f5f0e8] text-sm placeholder-[#7a6555] focus:outline-none focus:border-[#d4b896]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#d4b896] text-sm mb-1.5">Check-in *</label>
                    <input
                      name="checkin"
                      type="date"
                      value={form.checkin}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#4a3728] border border-[#5a4535] rounded px-4 py-2.5 text-[#f5f0e8] text-sm focus:outline-none focus:border-[#d4b896]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#d4b896] text-sm mb-1.5">Check-out *</label>
                    <input
                      name="checkout"
                      type="date"
                      value={form.checkout}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#4a3728] border border-[#5a4535] rounded px-4 py-2.5 text-[#f5f0e8] text-sm focus:outline-none focus:border-[#d4b896]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#d4b896] text-sm mb-1.5">Guests</label>
                    <input
                      name="guests"
                      type="number"
                      min="1"
                      max="20"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full bg-[#4a3728] border border-[#5a4535] rounded px-4 py-2.5 text-[#f5f0e8] text-sm focus:outline-none focus:border-[#d4b896]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#d4b896] text-sm mb-1.5">Accommodation</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full bg-[#4a3728] border border-[#5a4535] rounded px-4 py-2.5 text-[#f5f0e8] text-sm focus:outline-none focus:border-[#d4b896]"
                    >
                      <option value="tent">Tent Pitch</option>
                      <option value="glamping">Glamping Platform</option>
                      <option value="bungalow">Stone Bungalow</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#d4b896] text-sm mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-[#4a3728] border border-[#5a4535] rounded px-4 py-2.5 text-[#f5f0e8] text-sm placeholder-[#7a6555] focus:outline-none focus:border-[#d4b896] resize-none"
                    placeholder="Any questions or special requests..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#5a6b3a] text-[#f5f0e8] rounded font-bold tracking-wide hover:bg-[#4a5a2e] transition-colors"
                >
                  Send Booking Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
