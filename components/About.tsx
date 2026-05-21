"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle } from "lucide-react";

const hoverSpring = {
  type: "spring",
  stiffness: 260,
  damping: 24,
  mass: 0.7,
} as const;

const hoverMotionStyle = { willChange: "transform, box-shadow" };
const skillTagClass =
  "px-3 py-1 bg-primary/10 border border-primary/50 text-cyan-300 text-xs rounded-sm font-mono group-hover:border-primary/80 group-hover:bg-primary/20 transition-colors duration-300 inline-flex items-center gap-1 leading-none";

export function About() {
  const education = [
    {
      year: "May 2023 – 2027",
      degree: "B.Sc. in Information & Communication Technology",
      school: "American University of Phnom Penh",
      gpa: "3.55 / 4.00",
      skills: ["Web Development", "Frontend Design", "Software Development"],
      logo: "/AUPP Block Logo.png",
      logoAlt: "American University of Phnom Penh logo",
    },
    {
      year: "2017 – 2022",
      degree: "High School Diploma (BAC II)",
      school: "Sovannaphumi School, Chumpouvorn I Campus",
      gpa: "Grade B",
      skills: [],
      logo: "/sovannaphumi-school-logo.png",
      logoAlt: "Sovannaphumi School logo",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 px-4 md:px-8 bg-background scroll-mt-16"
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

          <div className="mx-auto grid w-fit md:grid-cols-[auto_minmax(0,1fr)] gap-3 md:gap-5 items-start md:items-stretch">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group md:justify-self-end"
            >
              <div className="relative mx-auto h-80 w-full max-w-xs bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-primary/50 overflow-hidden rounded-none group-hover:border-primary transition-colors duration-300 md:mx-0 md:h-[460px] md:w-[420px] lg:w-[440px]">
                <img
                  src="/my-pic.png"
                  alt="Profile"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out transform-gpu"
                />
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex h-full max-w-3xl flex-col gap-3 md:h-[460px]"
            >
              <div className="flex-1 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-primary/30 backdrop-blur-sm p-5 rounded-none space-y-3 hover:border-primary/60 transition-colors duration-300 group shadow-lg shadow-primary/10">
                <p className="text-gray-200 leading-relaxed text-base">
                  I am a{" "}
                  <span className="text-primary font-bold">
                    senior Information and Communication Technology (ICT)
                  </span>{" "}
                  student at the{" "}
                  <span className="text-cyan-400 font-bold">
                    American University of Phnom Penh (AUPP)
                  </span>
                  , where I have spent the last four years honing my technical
                  expertise and problem-solving skills. My academic journey has
                  fueled a deep-seated passion for{" "}
                  <span className="text-primary font-bold">
                    Web Development
                  </span>{" "}
                  and{" "}
                  <span className="text-cyan-400 font-bold">
                    Frontend Design
                  </span>
                  .
                </p>
                <p className="text-gray-200 leading-relaxed text-base">
                  As I approach graduation, my drive to evolve with the
                  fast-paced tech industry remains stronger than ever. I am
                  committed to{" "}
                  <span className="text-primary font-bold">
                    continuous learning
                  </span>
                  , constantly exploring{" "}
                  <span className="text-cyan-400 font-bold">
                    modern frameworks
                  </span>{" "}
                  and design trends to build{" "}
                  <span className="text-primary font-bold">
                    impactful digital solutions
                  </span>
                  .
                </p>
              </div>

              {/* Highlight Boxes */}
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                <motion.div
                  whileHover={{
                    y: -5,
                    borderColor: "#00daf3",
                    boxShadow: "0 10px 20px rgba(0, 218, 243, 0.3)",
                    transition: hoverSpring,
                  }}
                  style={hoverMotionStyle}
                  className="min-h-20 bg-gradient-to-br from-gray-900/60 to-gray-900/30 border-2 border-primary/40 backdrop-blur px-3 py-2 rounded-none text-center transition-colors duration-300 cursor-pointer flex flex-col items-center justify-center hover:border-cyan-400 transform-gpu"
                >
                  <p className="text-primary font-mono text-xl md:text-2xl font-bold mb-1">
                    4+
                  </p>
                  <p className="text-gray-300 text-[11px] md:text-xs font-mono font-semibold">
                    Years in Tech
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -5,
                    borderColor: "#00daf3",
                    boxShadow: "0 10px 20px rgba(0, 218, 243, 0.3)",
                    transition: hoverSpring,
                  }}
                  style={hoverMotionStyle}
                  className="min-h-20 bg-gradient-to-br from-gray-900/60 to-gray-900/30 border-2 border-primary/40 backdrop-blur px-3 py-2 rounded-none text-center transition-colors duration-300 cursor-pointer flex flex-col items-center justify-center hover:border-cyan-400 transform-gpu"
                >
                  <p className="text-cyan-400 font-mono text-xl md:text-2xl font-bold mb-1">
                    10+
                  </p>
                  <p className="text-gray-300 text-[11px] md:text-xs font-mono font-semibold">
                    Projects Built
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -5,
                    borderColor: "#00daf3",
                    boxShadow: "0 10px 20px rgba(0, 218, 243, 0.3)",
                    transition: hoverSpring,
                  }}
                  style={hoverMotionStyle}
                  className="min-h-20 bg-gradient-to-br from-gray-900/60 to-gray-900/30 border-2 border-primary/40 backdrop-blur px-3 py-2 rounded-none text-center transition-colors duration-300 cursor-pointer flex flex-col items-center justify-center hover:border-cyan-400 transform-gpu"
                >
                  <p className="text-primary font-mono text-xl md:text-2xl font-bold mb-1">
                    15+
                  </p>
                  <p className="text-gray-300 text-[11px] md:text-xs font-mono font-semibold">
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
                  <div className="absolute left-0 top-4 w-7 h-7 bg-background border-2 border-primary rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300 ease-out transform-gpu">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="bg-gradient-to-r from-gray-900/50 to-gray-900/30 border border-primary/30 backdrop-blur rounded-none p-5 group-hover:border-primary/70 transition-colors duration-300 shadow-lg shadow-primary/5 group-hover:shadow-primary/20">
                    <div className="flex flex-col items-center sm:flex-row sm:items-center gap-5">
                      <img
                        src={edu.logo}
                        alt={edu.logoAlt}
                        className="h-36 w-36 shrink-0 object-contain sm:h-28 sm:w-28"
                      />

                      <div className="min-w-0 flex-1 w-full">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 md:gap-4 mb-3">
                          <div>
                            <p className="text-cyan-400 text-sm font-mono font-bold mb-2 flex items-center gap-2 leading-none">
                              <Calendar size={16} className="flex-shrink-0" />{" "}
                              {edu.year}
                            </p>
                            <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors">
                              {edu.degree}
                            </h4>
                            <p className="text-gray-400 text-sm mt-1">
                              {edu.school}
                            </p>
                          </div>
                          {edu.gpa && (
                            <div className="bg-gradient-to-r from-primary/20 to-cyan-400/20 border border-primary/50 px-4 py-2 rounded-none w-fit whitespace-nowrap group-hover:border-primary group-hover:bg-primary/30 transition-colors duration-300">
                              <p className="text-cyan-400 font-mono text-sm font-bold">
                                {edu.gpa.includes("/")
                                  ? `GPA: ${edu.gpa}`
                                  : edu.gpa}
                              </p>
                            </div>
                          )}
                        </div>
                        {edu.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {edu.skills.map((skill, i) => (
                              <span key={i} className={skillTagClass}>
                                <CheckCircle
                                  size={12}
                                  className="flex-shrink-0"
                                />{" "}
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
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
