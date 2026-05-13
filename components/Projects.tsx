"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Award } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { projects } from "@/lib/projects-data";

const certifications = [
  {
    id: "04/01/2025",
    title: "AWS Cloud Operations",
    issuer: "Amazon Web Services",
    date: "April 1, 2025",
    image: "/certificate/aws2.jpg",
    description: "Cloud operations and management on AWS.",
  },
  {
    id: "11/26/2024",
    title: "AWS Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "November 26, 2024",
    image: "/certificate/aws1.jpg",
    description: "Cloud computing fundamentals and AWS services.",
  },
  {
    id: "03/30/2024",
    title: "IT Career Development Path for Gen Z",
    issuer: "ONE FRATERNITY",
    date: "March 30, 2024",
    image: "/certificate/workshop1.png",
    description:
      "In recognition of participation in the IT Career Development Path for Gen Z workshop.",
  },
  {
    id: "07/03/2025",
    title: "Introduction to Front-End Development",
    issuer: "Meta (Coursera)",
    date: "July 3, 2025",
    image: "/certificate/meta1.jpg",
    description:
      "An online course authorized by Meta and offered through Coursera",
  },
  {
    id: "07/03/2025",
    title: "Introduction to Back-End Development",
    issuer: "Meta (Coursera)",
    date: "July 3, 2025",
    image: "/certificate/meta2.jpg",
    description:
      "An online course authorized by Meta and offered through Coursera",
  },
];

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"projects" | "certificates">(
    "projects",
  );

  return (
    <section
      id="projects"
      className="py-12 px-4 md:px-8 bg-background scroll-mt-16"
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
          <div className="grid grid-cols-2 gap-2 md:gap-6 mb-12">
            <motion.button
              onClick={() => setActiveTab("projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`py-4 font-mono text-base md:text-lg uppercase transition-all duration-300 border-b-2 rounded-t-lg font-bold text-center flex items-center justify-center gap-2 ${
                activeTab === "projects"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-400 hover:text-primary hover:border-primary/50"
              }`}
            >
              <Briefcase size={20} />
              <span>Projects</span>
            </motion.button>
            <motion.button
              onClick={() => setActiveTab("certificates")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`py-4 font-mono text-base md:text-lg uppercase transition-all duration-300 border-b-2 rounded-t-lg font-bold text-center flex items-center justify-center gap-2 ${
                activeTab === "certificates"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-400 hover:text-primary hover:border-primary/50"
              }`}
            >
              <Award size={20} />
              <span>Certifications</span>
            </motion.button>
          </div>

          {/* Content */}
          {activeTab === "certificates" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="border border-gray-700 bg-gray-900 rounded p-6 hover:border-primary transition-colors cursor-pointer group flex flex-col h-full"
                >
                  <div className="mb-4 rounded overflow-hidden bg-gray-800 aspect-video">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono text-primary uppercase">
                      Date: {cert.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {cert.description}
                  </p>
                  <button
                    onClick={() => setSelectedImage(cert.image)}
                    className="text-primary font-mono text-sm uppercase hover:text-primary-fixed transition-colors flex items-center gap-2 group/btn"
                  >
                    View Certificate
                    <span className="group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </motion.div>
              ))}
            </div>
          )}

          {/* Projects Tab Placeholder */}
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="border border-gray-700 bg-gray-900 rounded p-6 hover:border-primary transition-colors cursor-pointer group flex flex-col h-full"
                >
                  <div className="mb-4 rounded overflow-hidden bg-white h-48 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-auto h-auto max-w-full max-h-full object-contain"
                      priority
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-800 border border-gray-600 text-gray-300 text-xs rounded2xl font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {(project.startDate || project.endDate) && (
                    <div className="mb-6">
                      <p className="text-xs font-mono text-gray-400 uppercase mb-2">
                        Timeline
                      </p>
                      <p className="text-gray-300 text-sm">
                        {project.startDate}
                        {project.endDate ? ` - ${project.endDate}` : ""}
                      </p>
                    </div>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-primary font-mono text-sm uppercase hover:text-primary-fixed transition-colors flex items-center gap-2 group/btn"
                  >
                    View Project
                    <span className="group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
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
        <DialogContent className="w-screen h-screen max-w-none max-h-none p-0 border-none bg-black/50 flex items-center justify-center [&>button]:hidden">
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
                className="w-auto h-auto max-w-[75vw] max-h-[75vh] object-contain"
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
