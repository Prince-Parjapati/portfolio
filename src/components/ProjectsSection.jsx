"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MeetUp",
    description:
      "Real-time video conferencing app with chat and personal rooms.",
    tags: ["Next.js", "Shadcn", "TailwindCSS", "GetStream"],
    demoUrl: "#",
    githubUrl: "https://github.com/Prince-Parjapati/MeetUp",
  },
  {
    id: 2,
    title: "FileSearch",
    description:
      "Multithreaded C++ tool to quickly search files form CLI",
    tags: ["C++", "Multithreading"],
    demoUrl: "#",
    githubUrl: "https://github.com/Prince-Parjapati/FileSearch",
  },
  {
    id: 3,
    title: "TeamTrack",
    description:
      "Role-based task and employee manager with real-time chat.",
    tags: ["React", "Node.js", "Socket.IO", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/Prince-Parjapati/TeamTrack",
  },
  {
    id: 4,
    title: "Aura",
    description:
      "Realtime media room app for sharing videos, chatting, and file transfer with smooth UI animations.",
    tags: ["React", "Socket.IO", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Prince-Parjapati/Aura",
  },
];

export const ProjectsSection = () => (
  <section id="projects" className="py-24 px-4">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
        Featured <span className="text-primary">Projects</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-white/70">
        Real-world apps built with modern tech—focused on realtime systems, performance, and intuitive design.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
            className="relative group p-6 rounded-3xl 
              bg-white/5 
              backdrop-blur-md 
              border border-white/10 
              shadow-[0_0_30px_rgba(0,255,255,0.08)] 
              hover:shadow-[0_0_50px_rgba(0,255,255,0.12)] 
              transition duration-500 overflow-hidden"
          >
            {/* Watermark Initials */}
            <div className="absolute text-[6rem] font-black text-primary/10 -top-6 -right-4 select-none pointer-events-none">
              {project.title.slice(0, 2).toUpperCase()}
            </div>

            {/* Glow Accent on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none rounded-3xl bg-gradient-to-br from-primary/20 to-transparent blur-sm" />

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-4 relative z-10">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/10 text-white px-3 py-1 rounded-full border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-white relative z-10">
              {project.title}
            </h3>
            <p className="text-sm text-white/70 mt-2 relative z-10">
              {project.description}
            </p>

            {/* Action Icons */}
            <div className="flex space-x-4 mt-6 relative z-10">
              
              <a
                href={project.githubUrl}
                target="_blank"
                className="text-white/60 hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="https://github.com/Prince-Parjapati"
          target="_blank"
          className="cosmic-button w-fit mx-auto flex items-center gap-2 text-sm font-medium text-white hover:text-primary"
        >
          Explore More on GitHub <ExternalLink size={16} />
        </a>
      </div>
    </div>
  </section>
);
