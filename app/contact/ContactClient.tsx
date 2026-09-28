"use client";

import React, { useState } from "react";
import { trackWhatsAppClick, createWhatsAppLink } from "../utils/trackWhatsapp";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "Koregaon Park",
    serviceType: "Hotel Outcall Companion",
    preferredTime: "Tonight (ASAP)",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setResponseMsg(data.message || "Your booking inquiry has been received successfully! Our team will contact you shortly.");
        setFormData({
          name: "",
          phone: "",
          area: "Koregaon Park",
          serviceType: "Hotel Outcall Companion",
          preferredTime: "Tonight (ASAP)",
          message: "",
        });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Failed to submit inquiry. Please contact us directly on WhatsApp or Call.");
      }
    } catch (err: any) {
      setStatus("error");
      setResponseMsg("Network error. Please try reaching us directly on WhatsApp (+91 82941 07610).");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-zinc-800 font-sans">
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10 w-full flex-1">
        
        {/* Header Section */}
        <div className="text-center space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-[#ff2d55]">
            GET IN TOUCH
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="text-zinc-900">Contact </span>
            <span className="text-[#ff2d55]">Us</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 max-w-xl mx-auto pt-1 font-semibold">
            We&apos;re available 24/7 to assist you with bookings and inquiries
          </p>
          <p className="text-sm sm:text-base text-zinc-500 max-w-2xl mx-auto pt-1 leading-relaxed">
            Whether you are looking for premier escort companionship in Pune or have questions regarding our verified profiles, pricing, or service areas, our dedicated support team is here to assist you. Contact us directly via WhatsApp, Phone, or submit the confidential inquiry form below.
          </p>
        </div>

        {/* Contact Action Cards Grid (WhatsApp & Phone Call) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto w-full">
          
          {/* WhatsApp Card */}
          <a
            href={createWhatsAppLink("Contact Page Inquiry", "Pune", "918294107610")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackWhatsAppClick({
                name: "Contact Page Inquiry",
                city: "Pune",
                whatsappNumber: "918294107610",
              })
            }
            className="bg-white border border-emerald-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center group cursor-pointer hover:border-emerald-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-100/80 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-zinc-900">WhatsApp</h2>
            <p className="text-sm text-zinc-500 mt-1">Chat with us instantly</p>
            <span className="mt-3 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              +91 82941 07610
            </span>
          </a>

          {/* Phone Call Card */}
          <a
            href="tel:+918294107610"
            className="bg-white border border-pink-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center group cursor-pointer hover:border-pink-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-rose-100/80 text-[#ff2d55] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-[#ff2d55]">Phone Call</h2>
            <p className="text-sm text-zinc-500 mt-1">Call us directly 24/7</p>
            <span className="mt-3 text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
              +91 82941 07610
            </span>
          </a>

        </div>

        {/* Online Confidential Booking / Callback Form */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 shadow-sm max-w-2xl mx-auto w-full">
          <div className="text-center space-y-1 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff2d55] bg-rose-50 px-3 py-1 rounded-full">
              CONFIDENTIAL INQUIRY
            </span>
            <h2 className="text-2xl font-extrabold text-zinc-900 pt-2">
              Send a Booking / Callback Request
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500">
              Leave your details below and our customer manager will discretely reach out to you within 5 minutes.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Your Name / Alias
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul / Guest"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:border-[#ff2d55] focus:ring-1 focus:ring-[#ff2d55] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:border-[#ff2d55] focus:ring-1 focus:ring-[#ff2d55] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Pune Preferred Location
                </label>
                <select
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:border-[#ff2d55] focus:ring-1 focus:ring-[#ff2d55] transition-colors bg-white"
                >
                  <option value="Koregaon Park">Koregaon Park</option>
                  <option value="Kalyani Nagar">Kalyani Nagar</option>
                  <option value="Viman Nagar">Viman Nagar</option>
                  <option value="Hinjewadi IT Park">Hinjewadi IT Park</option>
                  <option value="Baner">Baner</option>
                  <option value="Wakad">Wakad</option>
                  <option value="Kothrud">Kothrud</option>
                  <option value="Shivajinagar">Shivajinagar</option>
                  <option value="Pune Railway Station">Pune Railway Station</option>
                  <option value="Swargate">Swargate</option>
                  <option value="Magarpatta City">Magarpatta City</option>
                  <option value="Kharadi">Kharadi</option>
                  <option value="Pimpri Chinchwad (PCMC)">Pimpri Chinchwad (PCMC)</option>
                  <option value="Other Pune Area">Other Pune Area</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Service Type
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:border-[#ff2d55] focus:ring-1 focus:ring-[#ff2d55] transition-colors bg-white"
                >
                  <option value="Hotel Outcall Companion">Hotel Outcall Companion</option>
                  <option value="Incall Service">Incall Service</option>
                  <option value="VIP Dinner Date Companion">VIP Dinner Date Companion</option>
                  <option value="Overnight Stay Booking">Overnight Stay Booking</option>
                  <option value="Corporate / Event Companion">Corporate / Event Companion</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                Preferred Date &amp; Time
              </label>
              <input
                type="text"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                placeholder="e.g. Today evening 9:00 PM / Immediate"
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:border-[#ff2d55] focus:ring-1 focus:ring-[#ff2d55] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">
                Special Requests / Model Preference (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us any specific companion preference or questions..."
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:border-[#ff2d55] focus:ring-1 focus:ring-[#ff2d55] transition-colors resize-none"
              ></textarea>
            </div>

            {status === "success" && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-semibold flex items-center gap-2">
                <span>✓</span>
                <span>{responseMsg}</span>
              </div>
            )}

            {status === "error" && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-semibold flex items-center gap-2">
                <span>⚠️</span>
                <span>{responseMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#ff2d55] hover:bg-rose-600 disabled:opacity-70 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              {status === "loading" ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                  <span>Submitting Inquiry...</span>
                </>
              ) : (
                <>
                  <span>🔒 Submit Confidential Booking Inquiry</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-zinc-400 text-center">
              100% Privacy &amp; Data Protection Guaranteed. Zero upfront payment required.
            </p>
          </form>
        </div>

        {/* Essential Client Guidelines / Important Information Box */}
        <div className="max-w-7xl mx-auto mt-10 p-6 bg-rose-50/60 border border-rose-200/70 rounded-2xl text-center space-y-4">
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-rose-500 flex items-center justify-center gap-2">
            <span>ℹ️</span> Essential Client Guidelines
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-zinc-700 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 bg-white p-3.5 rounded-xl border border-rose-100/80 shadow-2xs text-center">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Adults Only (18+):</strong> Exclusively for consenting legal adults.</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white p-3.5 rounded-xl border border-rose-100/80 shadow-2xs text-center">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Discretion:</strong> Guaranteed privacy &amp; total confidentiality.</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white p-3.5 rounded-xl border border-rose-100/80 shadow-2xs text-center">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>24/7 Availability:</strong> Full coverage across all Pune areas.</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white p-3.5 rounded-xl border border-rose-100/80 shadow-2xs text-center">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Zero Pre-payment:</strong> Pay safely in person — no upfront deposits.</span>
            </div>
          </div>
        </div>

        {/* Additional Defined Contact Information Card */}
        <div className="bg-gray-50 border border-pink-200/80 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#ff2d55]">
            Why Contact Anjali Escort Service?
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
            <p>
              <strong className="font-bold text-zinc-800">Fast 24/7 Response:</strong> Our dedicated customer care representatives are available around the clock to respond to your queries on WhatsApp, Phone, or callback requests.
            </p>
            <p>
              <strong className="font-bold text-zinc-800">Confidential Booking:</strong> Every inquiry is kept strictly confidential. Your personal details and booking conversations are protected with end-to-end privacy.
            </p>
            <p>
              <strong className="font-bold text-zinc-800">Pune Local Coverage:</strong> We serve clients across all prime areas in Pune including Koregaon Park, Kalyani Nagar, Viman Nagar, Hinjewadi, Baner, Wakad, Kothrud, and Shivajinagar.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
