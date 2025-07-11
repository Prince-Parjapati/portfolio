import { Briefcase, Code, User, Download } from "lucide-react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariant}
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUpVariant}
            custom={0}
          >
            <h3 className="text-2xl font-semibold text-primary">
              Full Stack Engineer & Systems Developer in the Making
            </h3>

            <p className="text-muted-foreground">
              I'm Prince Parjapati, a Computer Software Engineering student at
              Chitkara University (Graduating 2026), passionate about solving
              real-world problems through code.
            </p>

            <p className="text-muted-foreground">
              From async TCP servers with ASIO to dynamic interfaces with React
              and Next.js — I love building efficient, scalable, and clean
              solutions across the stack.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href="#contact"
                className="cosmic-button hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
              >
                Get In Touch
              </motion.a>

              <motion.a
                href="/Prince_Parjapati_Resume.pdf"
                download="Prince_Parjapati_Resume"
                className="flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {[ 
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Systems Development",
                desc: "Building performant C++ applications with multithreading, memory management, and async networking (ASIO)."
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "Full Stack Development",
                desc: "Creating full stack apps using Next.js, Express, FastAPI, MongoDB, and MySQL with clean RESTful architecture."
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Tech Exploration & Growth",
                desc: "Always learning through real-world projects, internships, and open-source to grow as a backend and systems engineer."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                className="gradient-border p-6 card-hover transition-transform transform hover:scale-[1.02] hover:shadow-xl rounded-xl bg-background"
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUpVariant}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {card.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{card.title}</h4>
                    <p className="text-muted-foreground">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
