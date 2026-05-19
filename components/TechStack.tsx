"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code, Palette, Server, Cloud } from "lucide-react";

const technologies = {
  frontend: [
    {
      name: "React",
      category: "Framework",
      tags: ["UI Library"],
      image: "/techstack/reactjs.svg",
    },
    {
      name: "Next.js",
      category: "Meta-Framework",
      tags: ["Full-Stack"],
      image: "/techstack/next-js.png",
    },
    {
      name: "TypeScript",
      category: "Language",
      tags: ["Type Safety"],
      image: "/techstack/typescript.png",
    },
    {
      name: "JavaScript",
      category: "Language",
      tags: ["Scripting"],
      image: "/techstack/javascript.png",
    },
    {
      name: "Flutter",
      category: "Mobile Framework",
      tags: ["Cross-Platform"],
      image: "/techstack/flutter.png",
    },
    {
      name: "HTML",
      category: "Markup",
      tags: ["Structure"],
      image: "/techstack/html.svg",
    },
    {
      name: "CSS",
      category: "Styling",
      tags: ["Layout"],
      image: "/techstack/css.png",
    },
    {
      name: "Tailwind CSS",
      category: "Utility Framework",
      tags: ["Design System"],
      image: "/techstack/tailwindcss.png",
    },
  ],
  design: [
    {
      name: "Figma",
      category: "Design Tool",
      tags: ["UI/UX prototyping", "Wireframing", "Interactive Design"],
      image: "/techstack/figma.png",
    },
    {
      name: "Adobe Photoshop",
      category: "Design Tool",
      tags: ["Poster Design"],
      image: "/techstack/adobe-photoshop.png",
    },
  ],
  backend: [
    {
      name: "Node.js",
      category: "Runtime",
      tags: ["JavaScript"],
      image: "/techstack/nodejs.png",
    },
    {
      name: "Express",
      category: "Framework",
      tags: ["HTTP Server"],
      image: "/techstack/express.png",
    },
    {
      name: "MySQL",
      category: "Database",
      tags: ["Relational"],
      image: "/techstack/mysql.png",
    },
    {
      name: "MongoDB",
      category: "Database",
      tags: ["NoSQL"],
      image: "/techstack/mongodb.png",
    },
    {
      name: "Python",
      category: "Language",
      tags: ["Backend"],
      image: "/techstack/python.png",
    },
  ],
  cloud: [
    {
      name: "AWS",
      category: "Cloud Platform",
      tags: ["Infrastructure"],
      image: "/techstack/aws.png",
    },
    {
      name: "Vercel",
      category: "Deployment",
      tags: ["Serverless"],
      image: "/techstack/vercel.png",
    },
    {
      name: "GitHub",
      category: "Version Control",
      tags: ["CI/CD"],
      image: "/techstack/git.png",
    },
    {
      name: "Supabase",
      category: "Backend-as-a-Service",
      tags: ["PostgreSQL", "Auth"],
      image: "/techstack/supabase.png",
    },
    {
      name: "Firebase",
      category: "Backend-as-a-Service",
      tags: ["Realtime Database", "Auth", "Hosting"],
      image: "/techstack/firebase-colored.svg",
    },
  ],
};

type TabType = "frontend" | "design" | "backend" | "cloud";

export function TechStack() {
  const [activeTab, setActiveTab] = useState<TabType>("frontend");

  return (
    <section
      id="tech-stack"
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
            <span className="text-primary">[</span> Tech_Stack{" "}
            <span className="text-primary">]</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mb-12 text-center mx-auto">
            A comprehensive overview of the languages, frameworks, and
            infrastructure tools I use to build robust, scalable applications.
          </p>

          {/* Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mb-12">
            {(["frontend", "design", "backend", "cloud"] as TabType[]).map(
              (tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`py-4 font-mono text-base md:text-lg uppercase transition-all duration-300 border-b-2 rounded-t-lg font-bold text-center flex items-center justify-center gap-2 ${
                    activeTab === tab
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-400 hover:text-primary hover:border-primary/50"
                  }`}
                >
                  <span className="hidden md:inline">
                    {tab === "frontend" && <Code size={20} />}
                    {tab === "design" && <Palette size={20} />}
                    {tab === "backend" && <Server size={20} />}
                    {tab === "cloud" && <Cloud size={20} />}
                  </span>
                  <span className="md:hidden">
                    {tab === "frontend" && "Frontend"}
                    {tab === "design" && "Design"}
                    {tab === "backend" && "Backend"}
                    {tab === "cloud" && "Cloud"}
                  </span>
                  <span className="hidden md:inline">
                    {tab === "frontend" && "Frontend"}
                    {tab === "design" && "Design"}
                    {tab === "backend" && "Backend"}
                    {tab === "cloud" && "Cloud/Tools"}
                  </span>
                </motion.button>
              ),
            )}
          </div>

          {/* Tech Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {technologies[activeTab].map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 30px rgba(59, 130, 246, 0.3)",
                }}
                className="group border border-primary/30 bg-gradient-to-br from-gray-900/60 to-gray-900/30 backdrop-blur p-6 rounded-xl hover:border-primary/80 transition-all duration-300 flex justify-between items-start shadow-lg shadow-primary/5 hover:shadow-primary/30"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-cyan-400 text-sm font-mono mb-4 font-semibold">
                    {tech.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tech.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 border border-primary/40 text-cyan-300 text-xs rounded-lg font-mono group-hover:border-primary/70 group-hover:bg-primary/20 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {tech.image && (
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-16 h-16 ml-4 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Workflow Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-gray-900/80 to-gray-900/40 border border-primary/40 p-8 rounded-xl font-mono text-sm shadow-lg shadow-primary/10 hover:border-primary/70 transition-all duration-300 backdrop-blur"
          >
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
              <span
                className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"
                style={{ animationDelay: "0.1s" }}
              ></span>
              <span
                className="w-3 h-3 rounded-full bg-green-500 animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></span>
            </div>
            <p className="text-cyan-400 mb-2 font-bold">$ tech_workflow.yml</p>
            <pre className="text-gray-300 text-xs leading-relaxed overflow-x-auto">
              {`workflow:
  frontend: React + Next.js + TypeScript + Tailwind CSS
  design: Figma + Adobe Photoshop
  backend: Node.js + Express + MySQL + Python
  deployment: GitHub → Vercel + AWS
  status: active_development [enabled]`}
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
