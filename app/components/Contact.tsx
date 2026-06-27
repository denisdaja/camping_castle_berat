"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", date: "", guests: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch("https://formspree.io/f/xnjkdyld", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", date: "", guests: "", phone: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const inputCls = "w-full px-4 py-3 text-sm border border-[#e0d5c5] bg-white text-[#3d2b1f] outline-none transition-colors focus:border-[#8b5e3c] placeholder-[#b0a090]";

  return (
    <section id="contact" className="py-20 md:py-28 px-6 relative" style={{ background: "#f5f0e8" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start contact-grid">

          {/* Left col */}
          <div>
            <p className="text-[#5a6b3a] text-sm tracking-[0.3em] uppercase mb-3">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug" style={{ color: "#3d2b1f" }}>
              Start Your{" "}
              <em className="not-italic" style={{ color: "#8b5e3c" }}>Berat Journey</em>
            </h2>
            <div className="w-12 h-[2px] mb-6" style={{ background: "#d4b896" }} />
            <p className="text-sm leading-[1.85] mb-10" style={{ color: "#6b5344" }}>
              Ready to experience the magic of Berat? Send us a message and our team will get back to you within 24 hours with a personalised itinerary.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-5 mb-10">
              {[
                { label: "Location", value: "Muzak Topia Street, Castle, Berat, Albania" },
                { label: "Phone", value: "+355 68 520 4000", href: "tel:+355685204000" },
                { label: "Email", value: "campingthecastleberat@gmail.com", href: "mailto:campingthecastleberat@gmail.com" },
              ].map((c) => (
                <div key={c.label} className="flex gap-4 items-start">
                  <span className="text-[10px] font-medium tracking-[0.18em] uppercase pt-0.5 min-w-[70px]" style={{ color: "#8b5e3c" }}>
                    {c.label}
                  </span>
                  {c.href ? (
                    <a href={c.href} className="text-sm hover:underline" style={{ color: "#3d2b1f" }}>{c.value}</a>
                  ) : (
                    <span className="text-sm" style={{ color: "#3d2b1f" }}>{c.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/355685204000?text=Hello%2C%20I%27d%20like%20to%20book%20at%20Camping%20The%20Castle%20Berat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white text-xs font-medium tracking-[0.08em] uppercase px-7 py-3.5 mb-10 transition-colors"
              style={{ background: "#25D366" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#20BA5A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#25D366")}
            >
              <span className="text-lg">💬</span>
              Chat on WhatsApp
            </a>

            {/* Map */}
            <div className="overflow-hidden border border-[#d4b896]" style={{ height: 240 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.3!2d19.9465877!3d40.7204178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135aa155a4807fe1%3A0x1cf6a6ca6a01d07b!2sCamping%20%22The%20Castle%20of%20Berat%22!5e0!3m2!1sen!2s!4v1"
                width="100%"
                height="240"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Camping The Castle of Berat"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 border border-[#e0d5c5]">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-5">✉️</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#3d2b1f" }}>Message Sent!</h3>
                <p className="text-sm leading-[1.7]" style={{ color: "#6b5344" }}>
                  Thank you for reaching out. We&apos;ll be in touch within 24 hours with your personalised Berat itinerary.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-xs tracking-[0.12em] uppercase px-5 py-2.5 cursor-pointer bg-transparent border transition-colors"
                  style={{ color: "#8b5e3c", borderColor: "#8b5e3c" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold mb-8" style={{ color: "#3d2b1f" }}>Book an Enquiry</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase mb-2" style={{ color: "#8b7d6b" }}>Full Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase mb-2" style={{ color: "#8b7d6b" }}>Email *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputCls} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase mb-2" style={{ color: "#8b7d6b" }}>Arrival Date</label>
                    <input name="date" type="date" value={form.date} onChange={handleChange} className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.15em] uppercase mb-2" style={{ color: "#8b7d6b" }}>No. of Guests</label>
                    <input name="guests" type="number" min={1} max={20} value={form.guests} onChange={handleChange} placeholder="2" className={inputCls} />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-[11px] tracking-[0.15em] uppercase mb-2" style={{ color: "#8b7d6b" }}>Phone Number</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+355 00 000 0000" className={inputCls} />
                </div>

                <div className="mb-7">
                  <label className="block text-[11px] tracking-[0.15em] uppercase mb-2" style={{ color: "#8b7d6b" }}>Message</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your stay..." className={`${inputCls} resize-y`} />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 text-xs font-medium tracking-[0.15em] uppercase text-white transition-colors"
                  style={{ background: sending ? "#8b7d6b" : "#3d2b1f", cursor: sending ? "not-allowed" : "pointer" }}
                  onMouseEnter={(e) => { if (!sending) (e.currentTarget as HTMLElement).style.background = "#8b5e3c"; }}
                  onMouseLeave={(e) => { if (!sending) (e.currentTarget as HTMLElement).style.background = "#3d2b1f"; }}
                >
                  {sending ? "Sending..." : "Send Enquiry →"}
                </button>

                {error && (
                  <p className="text-xs text-red-500 text-center mt-3">
                    Something went wrong. Please try again or contact us via WhatsApp.
                  </p>
                )}

                <p className="text-[11px] text-center mt-4 opacity-60" style={{ color: "#8b7d6b" }}>
                  We respond within 24 hours. No payment required to enquire.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
