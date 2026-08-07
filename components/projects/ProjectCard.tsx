import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Project } from "@/lib/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl bg-[#151515] border border-neutral-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2"
    >
      {/* Image */}

      <div className="relative h-72 overflow-hidden">
       <Image
  src={project.hero}
  alt={project.title}
  fill
  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
  className="object-cover group-hover:scale-110 transition duration-500"
/>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-5 left-5">

          <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Completed Project
          </span>

        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-4 leading-7">
          {project.shortDescription}
        </p>

        <div className="flex items-center justify-between mt-6 text-sm text-gray-400">

          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-orange-500" />
            {project.location}
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-orange-500" />
            {project.completed}
          </div>

        </div>

        <div className="mt-8 flex items-center text-orange-500 font-semibold group-hover:gap-3 transition-all">

          View Project

          <ArrowRight
            size={20}
            className="ml-2"
          />

        </div>

      </div>

    </Link>
  );
}