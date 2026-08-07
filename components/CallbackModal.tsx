"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { X } from "lucide-react";

export default function CallbackModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
  "service_07e8lvy",
  "template_4wjnds7",
  {
    from_name: form.name,
    phone: form.phone,
    location: form.location,
    service: form.service,
  },
  "4Qu2nCQ9dx4jbC8-_"
);

      alert("✅ Callback request sent!");

      setForm({
        name: "",
        phone: "",
        location: "",
        service: "",
      });

      setOpen(false);
   } catch (err: unknown) {
  console.error(err);

  if (
    typeof err === "object" &&
    err !== null &&
    "status" in err &&
    "text" in err
  ) {
    console.log(err);
  }
}

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-36 right-6 z-50 rounded-full bg-orange-500 px-6 py-4 font-semibold text-white shadow-xl transition hover:bg-orange-600"
      >
        Request Callback
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-black">
                Request Callback
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-black"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
                required
              />

              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
                required
              />

              <input
                name="location"
                placeholder="Project Location"
                value={form.location}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
                required
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
                required
              >
                <option value="">Select Service</option>
                <option>Building Demolition</option>
                <option>Industrial Demolition</option>
                <option>Excavation</option>
                <option>Site Clearance</option>
                <option>Rock Breaking</option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Request Callback"}
              </button>

            </form>

          </div>
        </div>
      )}
    </>
  );
}