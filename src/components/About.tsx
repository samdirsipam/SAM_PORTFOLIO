import { Card } from "@/components/ui/card";
import aboutImage from "@/assets/me.png";
import { Code2, Brain, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building scalable end-to-end web applications",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Applying ML to solve real-world problems",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description: "Turning ideas into practical solutions",
  },
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-24 bg-gradient-hero"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image Section with Glow */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative group"
          >
            {/* Glow layer */}
            <div className="absolute inset-0 rounded-lg bg-primary/25 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <img
              src={aboutImage}
              alt="Developer workspace"
              className="relative z-10 rounded-lg shadow-card w-full h-[500px] object-cover border border-white/10"
            />
          </motion.div>

          {/* Content Section */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="font-display text-2xl md:text-5xl font-bold">
              ABOUT <span className="text-primary">ME</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Sam here! I enjoy building applications that solve real problems using full-stack
              development and machine learning, turning ideas into clean, practical solutions
              people can actually use. I’m big on writing readable code, learning new things,
              and experimenting with different approaches while figuring out how to make apps
              simpler, faster, and better.
            </p>

            {/* Highlights Section */}
            <div className="pt-2">
              <h3 className="font-display text-2xl font-bold mb-4">
                Technical Focus
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item) => (
                  <Card
                    key={item.title}
                    className="p-4 bg-gradient-card border-border hover:border-primary transition-all hover:shadow-glow flex gap-4 items-start"
                  >
                    <item.icon className="text-primary mt-1" size={22} />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
