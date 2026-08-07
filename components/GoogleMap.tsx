export default function GoogleMap() {
  return (
    <section className="bg-[#0f0f0f] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Our Location
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Visit IQRA Demolition
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            IQRA Demolition & Wrecking Co. provides professional demolition,
            excavation and site clearance services across Mumbai, Navi Mumbai
            and Maharashtra.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-800 shadow-2xl">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.3726361073004!2d72.89423081114559!3d19.091301751416694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c918dcccff9f%3A0x94f32d038e4a7d47!2sIqra%20demolition%20%26%20wrecking%20co.!5e0!3m2!1sen!2sin!4v1785912632772!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            title="IQRA Demolition Location"
          ></iframe>

        </div>

        <div className="mt-8 flex justify-center">

          <a
            href="https://maps.app.goo.gl/9KdckQLuvMDLBn648"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
          >
            📍 Get Directions
          </a>

        </div>

      </div>
    </section>
  );
}