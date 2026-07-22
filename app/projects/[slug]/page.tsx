"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, Project } from "@/lib/projects-data";
import { useParams, useRouter } from "next/navigation";
import {
  User,
  Calendar,
  Wrench,
  ArrowUpRight,
  Mail,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const hoverSpring = {
  type: "spring",
  stiffness: 260,
  damping: 24,
  mass: 0.7,
} as const;

const hoverMotionStyle = { willChange: "transform, box-shadow" };
const techChipClass =
  "inline-flex min-h-9 items-center whitespace-nowrap px-4 py-2 bg-gradient-to-br from-primary/20 to-cyan-400/10 border border-primary/50 text-primary text-xs rounded-sm font-mono hover:border-primary transition-colors duration-300 font-bold transform-gpu";

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
      <div className="sticky top-0 z-40 bg-gradient-to-b from-background/90 to-background/70 backdrop-blur-xl border-b border-primary/20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-primary transition-colors duration-300 font-mono text-sm uppercase font-bold group leading-none"
          >
            <ArrowLeft
              size={16}
              className="flex-shrink-0 group-hover:-translate-x-1 transition-transform"
            />{" "}
            Back to Projects
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
            <div className="rounded-none overflow-hidden bg-white relative group shadow-2xl shadow-primary/20 transform-gpu">
              <div className="relative w-full aspect-video">
                <Image
                  src={displayImage}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03] transform-gpu"
                  priority
                />
              </div>
              {/* Image Carousel Dots */}
              {project.images && project.images.length > 1 && (
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                  {project.images.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      whileHover={{ scale: 1.2, transition: hoverSpring }}
                      className={`transition-colors duration-300 rounded-full transform-gpu ${
                        index === currentImageIndex
                          ? "bg-primary w-6 h-2"
                          : "bg-gray-400/60 hover:bg-gray-400 w-2 h-2"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Right: Project Info */}
            <div className="flex flex-col justify-start">
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-bold font-mono mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  <span className="text-primary">[</span> {project.title}{" "}
                  <span className="text-primary">]</span>
                </h1>
                {project.company && (
                  <p className="text-cyan-400 font-mono text-sm uppercase mb-4 font-bold">
                    @ {project.company}
                  </p>
                )}
              </div>

              {/* Role */}
              {project.role && (
                <div className="mb-8 pb-8 border-b border-primary/20">
                  <p className="text-xs font-mono text-cyan-300 uppercase mb-2 font-bold flex items-center gap-2 leading-none">
                    <User size={14} className="flex-shrink-0" /> Role
                  </p>
                  <p className="text-xl font-bold text-primary">
                    {project.role}
                  </p>
                </div>
              )}

              {/* Timeline */}
              {(project.startDate || project.endDate) && (
                <div className="mb-8">
                  <p className="text-xs font-mono text-cyan-300 uppercase mb-2 font-bold flex items-center gap-2 leading-none">
                    <Calendar size={14} className="flex-shrink-0" /> Timeline
                  </p>
                  <p className="text-gray-200 font-semibold">
                    {project.startDate}
                    {project.endDate ? ` - ${project.endDate}` : ""}
                  </p>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-6">
                <p className="text-xs font-mono text-cyan-300 uppercase mb-4 font-bold flex items-center gap-2 leading-none">
                  <Wrench size={14} className="flex-shrink-0" /> Tech Stack
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{
                        y: -4,
                        boxShadow: "0 8px 16px rgba(59, 130, 246, 0.3)",
                        transition: hoverSpring,
                      }}
                      style={hoverMotionStyle}
                      className={techChipClass}
                    >
                      {tech}
                    </motion.span>
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
          className="mt-16 pt-12 border-t border-primary/20"
        >
          <div className="text-center">
            <p className="text-gray-300 mb-8 text-lg font-semibold">
              Interested in collaborating or learning more?
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                    transition: hoverSpring,
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={hoverMotionStyle}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-cyan-400 text-background font-mono font-bold rounded-none shadow-primary/40 transition-shadow duration-300 uppercase text-sm leading-none transform-gpu"
                >
                  {project.link.includes("figma")
                    ? "View Figma Design"
                    : "View Website"}{" "}
                  <ArrowUpRight size={16} className="flex-shrink-0" />
                </motion.a>
              )}
              {project.secondaryLink && (
                <motion.a
                  href={project.secondaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                    transition: hoverSpring,
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={hoverMotionStyle}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-cyan-400 text-background font-mono font-bold rounded-none shadow-primary/40 transition-shadow duration-300 uppercase text-sm leading-none transform-gpu"
                >
                  {project.secondaryLinkLabel ?? "View Link"}{" "}
                  <ArrowUpRight size={16} className="flex-shrink-0" />
                </motion.a>
              )}
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.08, transition: hoverSpring }}
                whileTap={{ scale: 0.95 }}
                style={{ willChange: "transform" }}
                className="inline-block px-8 py-4 border-2 border-primary text-primary font-mono font-bold rounded-none hover:bg-primary/10 transition-colors duration-300 uppercase text-sm shadow-lg shadow-primary/20 leading-none transform-gpu"
              >
                Get in Touch <Mail size={16} className="inline flex-shrink-0" />
              </motion.a>
              <motion.a
                href="/#projects"
                whileHover={{ scale: 1.08, transition: hoverSpring }}
                whileTap={{ scale: 0.95 }}
                style={{ willChange: "transform" }}
                className="inline-block px-8 py-4 border-2 border-primary text-primary font-mono font-bold rounded-none hover:bg-primary/10 transition-colors duration-300 uppercase text-sm leading-none transform-gpu"
              >
                View More Projects{" "}
                <ArrowRight size={16} className="inline flex-shrink-0" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
