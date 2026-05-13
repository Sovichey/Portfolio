"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, Project } from "@/lib/projects-data";
import { useParams, useRouter } from "next/navigation";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const slug = params.slug as string;
    const foundProject = getProjectBySlug(slug);

    if (!foundProject) {
      router.push("/");
      return;
    }

    setProject(foundProject);
    setIsLoading(false);
  }, [params.slug, router]);

  // Auto-switch images
  useEffect(() => {
    if (!project || !project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, [project]);

  if (isLoading || !project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 font-mono">Loading...</div>
        </div>
      </div>
    );
  }

  const displayImage =
    project.images && project.images.length > 0
      ? project.images[currentImageIndex]
      : project.image;

  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-fixed transition-colors font-mono text-sm uppercase"
          >
            <span>←</span> Back to Projects
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left: Project Image */}
            <div className="rounded-lg overflow-hidden bg-white relative">
              <div className="relative w-full aspect-video">
                <Image
                  src={displayImage}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="w-full h-full object-contain transition-opacity duration-500"
                  priority
                />
              </div>
              {/* Image Carousel Dots */}
              {project.images && project.images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-primary w-6"
                          : "bg-gray-500 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right: Project Info */}
            <div className="flex flex-col justify-start">
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold font-mono mb-2 text-white">
                  <span className="text-primary">[</span> {project.title}{" "}
                  <span className="text-primary">]</span>
                </h1>
                {project.company && (
                  <p className="text-primary font-mono text-sm uppercase mb-4">
                    {project.company}
                  </p>
                )}
              </div>

              {/* Role */}
              {project.role && (
                <div className="mb-6 pb-6 border-b border-gray-700">
                  <p className="text-xs font-mono text-gray-400 uppercase mb-2">
                    Role
                  </p>
                  <p className="text-lg font-semibold text-primary">
                    {project.role}
                  </p>
                </div>
              )}

              {/* Timeline */}
              {(project.startDate || project.endDate) && (
                <div className="mb-6">
                  <p className="text-xs font-mono text-gray-400 uppercase mb-2">
                    Timeline
                  </p>
                  <p className="text-gray-300">
                    {project.startDate}
                    {project.endDate ? ` - ${project.endDate}` : ""}
                  </p>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-6">
                <p className="text-xs font-mono text-gray-400 uppercase mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800 border border-primary/30 text-primary text-xs rounded font-mono hover:border-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold font-mono mb-6 text-white">
            <span className="text-primary">/</span> Overview
          </h2>
          <div className="space-y-4">
            {project.fullDescription.map((paragraph, idx) => (
              <p key={idx} className="text-gray-300 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Responsibilities Section */}
        {project.responsibilities && project.responsibilities.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold font-mono mb-6 text-white">
              <span className="text-primary">/</span> Key Responsibilities
            </h2>
            <ul className="space-y-4">
              {project.responsibilities.map((responsibility, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <span className="text-primary font-bold mt-1">▹</span>
                  <span className="text-gray-300 leading-relaxed">
                    {responsibility}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-gray-700"
        >
          <div className="text-center">
            <p className="text-gray-400 mb-6">
              Interested in collaborating or learning more?
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-background font-mono font-bold rounded hover:bg-primary-fixed transition-colors uppercase text-sm"
                >
                  {project.link.includes("figma")
                    ? "View Figma Design"
                    : "View Website"}
                </a>
              )}
              <Link
                href="/#contact"
                className={`px-6 py-3 ${
                  project.link
                    ? "border border-primary text-primary hover:bg-primary/10"
                    : "bg-primary text-background hover:bg-primary-fixed"
                } font-mono font-bold rounded transition-colors uppercase text-sm`}
              >
                Get in Touch
              </Link>
              <Link
                href="/#projects"
                className="px-6 py-3 border border-primary text-primary font-mono font-bold rounded hover:bg-primary/10 transition-colors uppercase text-sm"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
