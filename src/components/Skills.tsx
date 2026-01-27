import { motion } from "framer-motion";

const skills = [
  { name: "C", category: "lang" },
  { name: "C++", category: "lang" },
  { name: "Java", category: "lang" },
  { name: "Python", category: "lang" },
  { name: "HTML", category: "web" },
  { name: "CSS", category: "web" },
  { name: "JavaScript", category: "web" },
  { name: "React", category: "web" },
  { name: "Machine Learning", category: "ml" },
  { name: "OpenCV", category: "ml" },
  { name: "MongoDB", category: "tool" },
  { name: "MySQL", category: "tool" },
  { name: "Git", category: "tool" },
  { name: "DSA", category: "concept" },
];

const Skills = () => {
  const half = Math.ceil(skills.length / 2);
  const leftSkills = skills.slice(0, half);
  const rightSkills = skills.slice(half);

  return (
    <motion.section
      id="skills"
      className="py-32 px-6 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">
            SKILLS <span className="text-primary"></span>
          </h2>

          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            Technologies I Work With
          </span>
        </motion.div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-3">
          
          {/* LEFT HALF */}
          {leftSkills.map((skill, index) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, x: -40, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-5 py-3 glass rounded-full text-foreground font-medium cursor-default hover:border-accent/50 transition-colors"
            >
              {skill.name}
            </motion.span>
          ))}

          {/* RIGHT HALF */}
          {rightSkills.map((skill, index) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-5 py-3 glass rounded-full text-foreground font-medium cursor-default hover:border-accent/50 transition-colors"
            >
              {skill.name}
            </motion.span>
          ))}

        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
