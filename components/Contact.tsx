"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.phone || !form.message) {
    alert("Please fill in all fields.");
    return;
  }

  setLoading(true);

  try {
    const result = await emailjs.send(
      "service_07e8lvy", // Your Service ID
      "template_4wjnds7", // Your Template ID
      {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        message: form.message,
      },
      "4Qu2nCQ9dx4jbC8-_" // Your Public Key
    );

    console.log(result);

    alert("✅ Inquiry sent successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  } catch (error) {
    console.error("EMAILJS ERROR:", error);
    alert("❌ Failed to send inquiry.");
  }

  setLoading(false);
};

  return (
    <section
      id="contact"
      className="bg-[#111111] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-orange-500 uppercase tracking-[4px] font-semibold">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Get a Free Quote
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Need demolition, excavation or site clearance?
            Contact IQRA Demolition today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Contact Information */}

          <div className="space-y-8">

            <div className="flex gap-5">
              <Phone className="text-orange-500" size={28}/>
              <div>
                <h3 className="font-bold text-xl">Phone</h3>
                <a
                  href="tel:+919768888198"
                  className="text-gray-300 hover:text-orange-500"
                >
                  +91 97688 88198
                </a>
              </div>
            </div>

            <div className="flex gap-5">
              <Mail className="text-orange-500" size={28}/>
              <div>
                <h3 className="font-bold text-xl">Email</h3>
                <a
                  href="mailto:info@iqrademolition.com"
                  className="text-gray-300 hover:text-orange-500"
                >
                  info@iqrademolition.com
                </a>
              </div>
            </div>

            <div className="flex gap-5">
              <MapPin className="text-orange-500" size={28}/>
              <div>
                <h3 className="font-bold text-xl">Location</h3>
                <p className="text-gray-300">
                  Mumbai, Maharashtra, India
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/919768888198"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-green-600 px-8 py-4 hover:bg-green-700 transition"
            >
              <MessageCircle />
              Chat on WhatsApp
            </a>

          </div>

          {/* Contact Form */}

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg bg-[#1b1b1b] border border-gray-700 p-4 outline-none focus:border-orange-500"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg bg-[#1b1b1b] border border-gray-700 p-4 outline-none focus:border-orange-500"
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-lg bg-[#1b1b1b] border border-gray-700 p-4 outline-none focus:border-orange-500"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg bg-[#1b1b1b] border border-gray-700 p-4 outline-none focus:border-orange-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-orange-500 py-4 font-semibold hover:bg-orange-600 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Inquiry"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}