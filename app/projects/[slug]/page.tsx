import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-black text-white min-h-screen">

      {/* Hero */}
      <section className="relative h-[500px]">

        <Image
          src={project.hero}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">

            <Link
              href="/projects"
              className="text-orange-500 hover:underline"
            >
              ← Back to Projects
            </Link>

            <h1 className="text-5xl md:text-7xl font-bold mt-6">
              {project.title}
            </h1>

            <p className="text-xl text-gray-300 mt-6">
              {project.shortDescription}
            </p>

          </div>
        </div>

      </section>

      {/* Details */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-10 mb-16">

          <div className="bg-[#151515] rounded-xl p-6">
            <h3 className="text-orange-500 font-semibold">Location</h3>
            <p className="mt-2">{project.location}</p>
          </div>

          <div className="bg-[#151515] rounded-xl p-6">
            <h3 className="text-orange-500 font-semibold">Completed</h3>
            <p className="mt-2">{project.completed}</p>
          </div>

          <div className="bg-[#151515] rounded-xl p-6">
            <h3 className="text-orange-500 font-semibold">Project</h3>
            <p className="mt-2">{project.title}</p>
          </div>

        </div>

        <h2 className="text-4xl font-bold mb-10">
          Project Gallery
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {project.gallery.map((image) => (
            <div
              key={image}
              className="relative h-80 rounded-xl overflow-hidden"
            >
              <Image
                src={image}
                alt={project.title}
                fill
                sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                className="object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}