import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Leaf,
  Brain,
  Briefcase,
  FileSearch,
} from "lucide-react";

const projects = [
  {
    title: "Paddy Disease Detection",
    description:
      "CNN-based image classification system to detect paddy crop diseases from leaf images. Helps farmers with early diagnosis and prevention.",
    tech: ["Python", "TensorFlow", "CNN"],
    github: "https://github.com/samdirsipam/PADDY-CROP-DISEASE-DETECTION",
    live: "https://plantspy.onrender.com/",
    icon: Leaf,
    status: "completed",
  },
  {
    title: "Student Stress Predictor",
    description:
      "ML model predicting mental stress levels using academic and lifestyle data. Designed for early awareness and intervention.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/samdirsipam/Student-Stress-Level-Prediction",
    live: "",
    icon: Brain,
    status: "completed",
  },
  {
    title: "Job Portal Application",
    description:
      "A full-stack job portal for recruiters and job seekers featuring authentication, job listings, and application tracking. Currently under active development.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "",
    live: "",
    icon: Briefcase,
    status: "in-progress",
  },
  {
    title: "AI Resume Analyzer & Job Matcher",
    description:
      "A machine learning–powered web application that analyzes resumes using NLP, matches them with job descriptions, and provides skill-gap insights and improvement suggestions.",
    tech: ["Python", "NLP", "Scikit-learn", "React", "Flask"],
    github: "",
    live: "",
    icon: FileSearch,
    status: "in-progress",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-32 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">
            FEATURED <span className="text-primary">PROJECTS</span>
          </h2>

          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            My Work
          </span>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="group glass rounded-3xl p-8 hover-lift relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <project.icon className="text-accent" size={28} />
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-lg"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}

                    {project.status === "completed" && project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-lg"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Status Badge */}
                {project.status === "in-progress" && (
                  <span className="inline-block mb-2 px-3 py-1 text-xs font-medium text-yellow-400 bg-yellow-400/10 rounded-full">
                    In Progress
                  </span>
                )}

                {project.status === "completed" && (
                  <span className="inline-block mb-2 px-3 py-1 text-xs font-medium text-green-400 bg-green-400/10 rounded-full">
                    Completed
                  </span>
                )}

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.status === "in-progress" && (
                  <p className="mt-4 text-sm text-muted-foreground">
                    Live demo coming soon.
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
