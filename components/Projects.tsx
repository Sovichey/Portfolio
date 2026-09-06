"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Award,
  Palette,
  ArrowUpRight,
  Calendar,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { projects } from "@/lib/projects-data";

const certifications = [
  {
    id: "1",
    title: "AUPP Alumni Connect App Challenge",
    issuer: "American University of Phnom Penh",
    date: "April 27, 2026",
    image: "/certificate/alumini-app.png",
    description:
      "1st place winner in AUPP's alumni networking app competition.",
  },
  {
    id: "2",
    title: "AWS Cloud Operations",
    issuer: "Amazon Web Services",
    date: "April 1, 2025",
    image: "/certificate/aws2.jpg",
    description: "Cloud operations and management on AWS.",
  },
  {
    id: "3",
    title: "AWS Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "November 26, 2024",
    image: "/certificate/aws1.jpg",
    description: "Cloud computing fundamentals and AWS services.",
  },
  {
    id: "4",
    title: "IT Career Development Path for Gen Z",
    issuer: "ONE FRATERNITY",
    date: "March 30, 2024",
    image: "/certificate/workshop1.png",
    description:
      "In recognition of participation in the IT Career Development Path for Gen Z workshop.",
  },
  {
    id: "5",
    title: "Introduction to Front-End Development",
    issuer: "Meta (Coursera)",
    date: "July 3, 2025",
    image: "/certificate/meta1.jpg",
    description:
      "An online course authorized by Meta and offered through Coursera",
  },
  {
    id: "6",
    title: "Introduction to Back-End Development",
    issuer: "Meta (Coursera)",
    date: "July 3, 2025",
    image: "/certificate/meta2.jpg",
    description:
      "An online course authorized by Meta and offered through Coursera",
  },
];

const visualDesigns = [
  { image: "/Design/iP17.jpg" },
  { image: "/Design/Ferrari.png" },
  { image: "/Design/demonslayer.jpg" },
  { image: "/Design/ANGKORWAT.png" },
  { image: "/Design/AKAZA.jpg" },
  { image: "/Design/new year.jpg" },
  { image: "/Design/Merry christmas.jpg" },
  { image: "/Design/Mango Ice-cream.jpg" },
  { image: "/Design/PreahVihear.jpg" },
  { image: "/Design/white monster.jpg" },
  { image: "/Design/Lamborghini.png" },
  { image: "/Design/starbuck.png" },
];

const hoverSpring = {
  type: "spring",
  stiffness: 260,
  damping: 24,
  mass: 0.7,
} as const;

const hoverMotionStyle = { willChange: "transform, box-shadow" };
const techChipClass =
  "inline-flex min-h-8 items-center whitespace-nowrap px-3 py-1 bg-primary/10 border border-primary/40 text-cyan-300 text-xs rounded-sm font-mono group-hover:border-primary/70 group-hover:bg-primary/20 transition-colors duration-300";

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<
    "projects" | "design" | "certificates"
  >("projects");

  return (
    <section
      id="projects"
      className="py-12 px-4 md:px-8 bg-background scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-center">
            <span className="text-primary">[</span> My Works{" "}
            <span className="text-primary">]</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mb-8 text-center mx-auto">
            Showcasing my projects and professional certifications that
            demonstrate expertise and commitment to continuous learning.
          </p>

          {/* Tabs */}
          <div className="grid grid-cols-3 gap-2 md:gap-6 mb-12">
            <motion.button
              onClick={() => setActiveTab("projects")}
              whileHover={{ scale: 1.04, transition: hoverSpring }}
              whileTap={{ scale: 0.95 }}
              className={`py-4 font-mono text-base md:text-lg uppercase transition-colors duration-300 border-b-2 rounded-none font-bold text-center flex items-center justify-center gap-2 transform-gpu ${
                activeTab === "projects"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-400 hover:text-primary hover:border-primary/50"
              }`}
            >
              <Briefcase size={20} className="hidden sm:block" />
              <span>Development</span>
            </motion.button>
            <motion.button
              onClick={() => setActiveTab("design")}
              whileHover={{ scale: 1.04, transition: hoverSpring }}
              whileTap={{ scale: 0.95 }}
              className={`py-4 font-mono text-sm md:text-lg uppercase transition-colors duration-300 border-b-2 rounded-none font-bold text-center flex items-center justify-center gap-2 transform-gpu ${
                activeTab === "design"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-400 hover:text-primary hover:border-primary/50"
              }`}
            >
              <Palette size={20} className="hidden sm:block" />
              <span>Artworks</span>
            </motion.button>
            <motion.button
              onClick={() => setActiveTab("certificates")}
              whileHover={{ scale: 1.04, transition: hoverSpring }}
              whileTap={{ scale: 0.95 }}
              className={`py-4 font-mono text-base md:text-lg uppercase transition-colors duration-300 border-b-2 rounded-none font-bold text-center flex items-center justify-center gap-2 transform-gpu ${
                activeTab === "certificates"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-400 hover:text-primary hover:border-primary/50"
              }`}
            >
              <Award size={20} className="hidden sm:block" />
              <span>Certifications</span>
            </motion.button>
          </div>

          {/* Content */}
          {activeTab === "certificates" && (
            <div className="mt-8 mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{
                    y: -10,
                    scale: 1.015,
                    boxShadow: "0 20px 40px rgba(0, 218, 243, 0.25)",
                    transition: hoverSpring,
                  }}
                  style={hoverMotionStyle}
                  className="border border-primary/30 bg-gradient-to-br from-gray-900/60 to-gray-900/30 backdrop-blur rounded-none p-6 hover:border-primary/80 transition-colors duration-300 cursor-pointer group flex flex-col h-full shadow-lg shadow-primary/5 transform-gpu"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedImage(cert.image)}
                    className="mb-4 rounded-none overflow-hidden bg-gray-800 aspect-video group-hover:scale-[1.03] transition-transform duration-500 ease-out transform-gpu relative w-full text-left"
                    aria-label={`View certificate for ${cert.title}`}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white font-mono text-center font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                        [view certificate]
                      </span>
                    </div>
                  </button>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase font-bold flex items-center gap-1 leading-none">
                      <Calendar size={12} className="flex-shrink-0" />{" "}
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-semibold mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {cert.description}
                  </p>
                  <motion.button
                    onClick={() => setSelectedImage(cert.image)}
                    whileHover={{ x: 3, transition: hoverSpring }}
                    className="text-cyan-400 font-mono text-sm uppercase hover:text-primary transition-colors flex items-center gap-2 group/btn font-bold leading-none"
                  >
                    View Certificate
                    <ArrowUpRight
                      size={14}
                      className="flex-shrink-0 group-hover/btn:translate-x-1 transition-transform"
                    />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "design" && (
            <div className="mt-8 mb-8 columns-2 gap-1 md:columns-3 md:gap-2">
              {visualDesigns.map((design, idx) => (
                <motion.div
                  key={design.image}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.04 }}
                  whileHover={{
                    scale: 1.06,
                    zIndex: 50,
                    transition: hoverSpring,
                  }}
                  className="group relative z-0 mb-1 block w-full overflow-visible border border-primary/0 bg-gray-900 transition-[box-shadow,border-color] duration-200 hover:border-primary/75 hover:shadow-[0_0_20px_rgba(0,218,243,0.45)] after:pointer-events-none after:absolute after:inset-0 after:shadow-[inset_0_0_28px_rgba(0,0,0,0.75)] after:opacity-0 after:transition-opacity after:duration-200 group-hover:after:opacity-100 md:mb-2"
                >
                  <Image
                    src={design.image}
                    alt={design.title}
                    width={1200}
                    height={1200}
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="block h-auto w-full"
                  />
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{
                    y: -10,
                    scale: 1.015,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                    transition: hoverSpring,
                  }}
                  style={hoverMotionStyle}
                  className="border border-primary/30 bg-gradient-to-br from-gray-900/60 to-gray-900/30 backdrop-blur rounded-none p-6 hover:border-primary/80 transition-colors duration-300 cursor-pointer group flex flex-col h-full shadow-lg shadow-primary/5 transform-gpu"
                >
                  <Link href={`/projects/${project.slug}`}>
                    <div className="mb-4 rounded-none overflow-hidden bg-white h-48 flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-500 ease-out cursor-pointer relative transform-gpu">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-auto h-auto max-w-full max-h-full object-contain"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white font-mono text-center font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                          [view project detail]
                        </span>
                      </div>
                    </div>
                  </Link>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={techChipClass}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {(project.startDate || project.endDate) && (
                    <div className="mb-6">
                      <p className="text-xs font-mono text-cyan-400 uppercase mb-2 font-bold flex items-center gap-1 leading-none">
                        <Calendar size={14} className="flex-shrink-0" />{" "}
                        Timeline
                      </p>
                      <p className="text-gray-300 text-sm font-semibold">
                        {project.startDate}
                        {project.endDate ? ` - ${project.endDate}` : ""}
                      </p>
                    </div>
                  )}
                  <motion.div whileHover={{ x: 3, transition: hoverSpring }}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-cyan-400 font-mono text-sm uppercase hover:text-primary transition-colors flex items-center gap-2 group/btn font-bold leading-none"
                    >
                      View Project
                      <ArrowUpRight
                        size={14}
                        className="flex-shrink-0 group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent
          overlayClassName="!z-[9999] bg-black/60 backdrop-blur-md"
          className="!z-[10000] w-screen h-screen max-w-none max-h-none p-0 border-none bg-transparent flex items-center justify-center [&>button]:hidden"
        >
          <DialogTitle className="sr-only">Image Viewer</DialogTitle>
          <DialogDescription className="sr-only">
            Full screen image display
          </DialogDescription>
          {selectedImage && (
            <div className="relative">
              <Image
                src={selectedImage}
                alt="Full view"
                width={1200}
                height={800}
                className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors text-3xl font-bold"
              >
                ✕
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
