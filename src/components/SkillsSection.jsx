import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  SiCplusplus,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGit,
  SiJavascript,
  SiLinux,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";



const skills = [
  { name: "C++", icon: <SiCplusplus />, category: "systems" },
  { name: "Python", icon: <SiPython />, category: "systems" },
  { name: "JavaScript", icon: <SiJavascript />, category: "frontend" },
  { name: "React", icon: <SiReact />, category: "frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "frontend" },
  { name: "Node.js", icon: <DiNodejs />, category: "backend" },
  { name: "FastAPI", icon: <SiFastapi />, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb />, category: "database" },
  { name: "MySQL", icon: <SiMysql />, category: "database" },
  { name: "SQL", icon: <SiMysql />, category: "database" }, // Reuses MySQL icon
  { name: "AWS", icon: <FaAws />, category: "devops" },
  { name: "Linux", icon: <SiLinux />, category: "tools" },
  { name: "Docker", icon: <SiDocker />, category: "devops" },
  { name: "Git", icon: <SiGit />, category: "tools" },
];


const categories = ["all", "systems", "frontend", "backend", "database", "devops", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = skills.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-br from-background to-secondary relative">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-primary">Expertise</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full capitalize transition-all duration-300",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground scale-105"
                  : "bg-secondary text-accent hover:bg-secondary/80"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="p-6 bg-card rounded-xl shadow-lg flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-110 group"
            >
              <div className="text-5xl mb-2 text-gray-500 group-hover:text-primary animate-pulse">
                {skill.icon}
              </div>
              <span className="text-lg font-medium">{skill.name}</span>
              <div className="mt-3 w-10 h-10 rounded-full border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
