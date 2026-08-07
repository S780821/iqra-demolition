import { projects } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#111] to-black">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <Link
            href="/"
            className="text-orange-500 hover:text-orange-400"
          >
            ← Back Home
          </Link>

          <h1 className="text-5xl md:text-7xl font-bold mt-8">
            Our Projects
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-3xl leading-8">
           {"Explore some of IQRA Demolition's completed projects."} From
            commercial buildings to factories and RCC structures, we deliver
            safe, efficient and professional demolition solutions.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#141414] rounded-xl p-6 text-center border border-neutral-800">
            <h2 className="text-4xl font-bold text-orange-500">
              {projects.length}+
            </h2>
            <p className="text-gray-400 mt-2">
              Featured Projects
            </p>
          </div>

          <div className="bg-[#141414] rounded-xl p-6 text-center border border-neutral-800">
            <h2 className="text-4xl font-bold text-orange-500">
              15+
            </h2>
            <p className="text-gray-400 mt-2">
              Years Experience
            </p>
          </div>

          <div className="bg-[#141414] rounded-xl p-6 text-center border border-neutral-800">
            <h2 className="text-4xl font-bold text-orange-500">
              500+
            </h2>
            <p className="text-gray-400 mt-2">
              Completed Projects
            </p>
          </div>

          <div className="bg-[#141414] rounded-xl p-6 text-center border border-neutral-800">
            <h2 className="text-4xl font-bold text-orange-500">
              100%
            </h2>
            <p className="text-gray-400 mt-2">
              Safety Commitment
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold">
            Planning Your Next Demolition Project?
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Contact IQRA Demolition for a free consultation and detailed quotation.
          </p>

          <Link
            href="/#contact"
            className="inline-block mt-10 bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
}