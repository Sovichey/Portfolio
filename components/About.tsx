"use client";

import { motion } from "framer-motion";

export function About() {
  const education = [
    {
      year: "May 2023 – 2027",
      degree: "B.Sc. in Information & Communication Technology",
      school: "American University of Phnom Penh",
      gpa: "3.55 / 4.00",
      skills: ["Web Development", "Frontend Design", "Software Development"],
    },
    {
      year: "2017 – 2022",
      degree: "High School Diploma (BAC II)",
      school: "Sovannaphumi School, Chumpouvorn I Campus",
      gpa: "Grade B",
      skills: [],
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 md:px-8 bg-background scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-center">
            <span className="text-primary">[</span> About_Me{" "}
            <span className="text-primary">]</span>
          </h2>
          <p className="text-sm text-primary font-mono mb-6 text-center">
            INITIALIZATION... SUCCESS
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full aspect-square bg-gray-900 border border-gray-700 overflow-hidden rounded">
                <img
                  src="/my-pic.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-2"
            >
              <div className="bg-gray-900 border border-gray-700 p-6 rounded space-y-4 flex-shrink-0">
                <p className="text-gray-300 leading-relaxed">
                  I am a{" "}
                  <span className="text-primary font-semibold">
                    senior Information and Communication Technology (ICT)
                  </span>{" "}
                  student at the{" "}
                  <span className="text-primary font-semibold">
                    American University of Phnom Penh (AUPP)
                  </span>
                  , where I have spent the last four years honing my technical
                  expertise and problem-solving skills. My academic journey has
                  fueled a deep-seated passion for{" "}
                  <span className="text-primary font-semibold">
                    Web Development
                  </span>{" "}
                  and{" "}
                  <span className="text-primary font-semibold">
                    Frontend Design
                  </span>
                  , focusing on the intersection of{" "}
                  <span className="text-primary font-semibold">clean code</span>{" "}
                  and{" "}
                  <span className="text-primary font-semibold">
                    intuitive user experiences
                  </span>
                  .
                </p>
                <p className="text-gray-300 leading-relaxed">
                  As I approach the completion of my degree, my drive to evolve
                  alongside the fast-paced tech industry remains stronger than
                  ever. I am committed to{" "}
                  <span className="text-primary font-semibold">
                    continuous learning
                  </span>
                  , constantly exploring{" "}
                  <span className="text-primary font-semibold">
                    modern frameworks
                  </span>{" "}
                  and{" "}
                  <span className="text-primary font-semibold">
                    design trends
                  </span>{" "}
                  to build{" "}
                  <span className="text-primary font-semibold">
                    digital solutions
                  </span>{" "}
                  that are both functional and visually compelling. I am now
                  eager to transition my academic foundation into{" "}
                  <span className="text-primary font-semibold">
                    professional environments
                  </span>{" "}
                  where I can contribute to{" "}
                  <span className="text-primary font-semibold">
                    impactful projects
                  </span>{" "}
                  while further refining my craft.
                </p>
              </div>

              {/* Highlight Boxes */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 flex-1">
                <motion.div
                  whileHover={{ borderColor: "#3b82f6" }}
                  className="bg-gray-900 border-2 border-gray-700 p-4 rounded text-center transition-all duration-300 hover:border-primary cursor-pointer flex flex-col items-center justify-center"
                >
                  <p className="text-primary font-mono text-xl md:text-2xl font-bold mb-1">
                    4+
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm font-mono">
                    Years Student
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ borderColor: "#3b82f6" }}
                  className="bg-gray-900 border-2 border-gray-700 p-4 rounded text-center transition-all duration-300 hover:border-primary cursor-pointer flex flex-col items-center justify-center"
                >
                  <p className="text-primary font-mono text-xl md:text-2xl font-bold mb-1">
                    10+
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm font-mono">
                    Projects Built
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ borderColor: "#3b82f6" }}
                  className="bg-gray-900 border-2 border-gray-700 p-4 rounded text-center transition-all duration-300 hover:border-primary cursor-pointer flex flex-col items-center justify-center"
                >
                  <p className="text-primary font-mono text-xl md:text-2xl font-bold mb-1">
                    10+
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm font-mono">
                    Technologies
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold font-mono mb-12 text-center">
            <span className="text-primary">[</span> Academic_Timeline{" "}
            <span className="text-primary">]</span>
          </h3>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/30"></div>

            <div className="space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative pl-16 py-4 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-4 w-7 h-7 bg-background border-2 border-primary rounded-full flex items-center justify-center group-hover:scale-125 transition-transform">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-4 group-hover:border-primary/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 md:gap-4 mb-2">
                      <div>
                        <p className="text-primary text-sm font-mono mb-1">
                          {edu.year}
                        </p>
                        <h4 className="text-xl font-bold text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-400 text-sm">{edu.school}</p>
                      </div>
                      {edu.gpa && (
                        <div className="bg-gray-900 border border-primary px-3 py-2 rounded w-fit whitespace-nowrap group-hover:bg-primary/10 transition-colors">
                          <p className="text-primary font-mono text-xs md:text-sm">
                            {edu.gpa.includes("/")
                              ? `GPA: ${edu.gpa}`
                              : edu.gpa}
                          </p>
                        </div>
                      )}
                    </div>
                    {edu.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {edu.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/5 border border-primary/30 text-gray-300 text-xs rounded font-mono group-hover:border-primary/60 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
