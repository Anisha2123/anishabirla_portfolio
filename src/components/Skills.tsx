import React from "react";
import { Cpu, Globe, Database, Terminal, Layers, Cloud, ChevronRight } from "lucide-react";

const skillGroups = [
  {
    category: "01. Core Systems",
    // Remove the text-blue-600 from here so it can be controlled by the parent
    icon: <Cpu size={20} />, 
    lead: "Data Structures, Algorithms & Design Patterns.",
    details: "Specializing in Big-O optimization, concurrent processing, and memory-efficient architecture.",
    tags: ["C++", "DSA Mastery", "System Design", "OS Fundamentals"]
  },
  {
    category: "02. Infrastructure",
    icon: <Cloud size={20} />,
    lead: "Distributed Systems & Cloud-Native Engineering.",
    details: "Architecting high-throughput backends with horizontal scalability and automated pipelines.",
    tags: ["AWS", "Node.js", "Redis", "Docker", "CI/CD"]
  },
  {
    category: "03. Data Engineering",
    icon: <Database size={20} />,
    lead: "Big Data Processing & Warehouse Management.",
    details: "Building ETL pipelines that handle multi-terabyte datasets and optimizing SQL schemas.",
    tags: ["SQL", "MongoDB", "Databricks", "PySpark", "ETL"]
  },
  {
    category: "04. Web Interfaces",
    icon: <Globe size={20} />,
    lead: "Modern Frontend & High-Performance UI.",
    details: "Crafting modular, accessible, and fast web experiences using modern frameworks.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 md:py-32 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* HEADER: Massive on Desktop, Sharp & Clean on Mobile */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-24 gap-4 md:gap-8 ">
          <div className="max-w-2xl">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-blue-600 font-bold mb-3 md:mb-6">
              Technical Competencies
            </h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-none italic">
              Skills <span className="text-slate-200">&</span> <br className="hidden md:block" /> 
              Domain <span className="text-slate-900">Expertise.</span>
            </h3>
          </div>
          <div className="lg:max-w-xs pb-1 md:pb-2">
            <p className="text-slate-400 text-[10px] md:text-sm font-bold leading-relaxed uppercase tracking-widest">
              Engineered for scale. <br className="hidden md:block" />
              Optimized for performance.
            </p>
          </div>
        </div>

        {/* THE DYNAMIC LIST */}
        <div className="border-t border-slate-100">
          {skillGroups.map((group, idx) => (
            <div 
              key={idx} 
              className="group border-b border-slate-100 py-8 md:py-16 flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-12 hover:bg-slate-50/50 transition-all duration-300"
            >
              {/* Column 1: Index & Icon (Compact on Mobile) */}
              <div className="lg:col-span-3 flex items-center lg:items-start lg:flex-col justify-between">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mb-6">
                {/* ICON CONTAINER: Fixed Hover Logic */}
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shrink-0">
                  {/* The icon now inherits the text-blue-600 or white based on the parent div */}
                  {group.icon}
                </div>
                  <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-400 mt-0 lg:mt-6">
                    {group.category}
                  </h4>
                </div>
                {/* Mobile-only Arrow */}
                <ChevronRight size={16} className="text-slate-300 lg:hidden group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Column 2: The Lead Text */}
              <div className="lg:col-span-5">
                <h5 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 mb-2 md:mb-4 group-hover:text-blue-600 transition-colors">
                  {group.lead}
                </h5>
                <p className="text-slate-500 text-xs md:text-base leading-relaxed font-medium">
                  {group.details}
                </p>
              </div>

              {/* Column 3: The Tech Tags (Minimalist on Mobile) */}
              <div className="lg:col-span-4 flex flex-col justify-end pt-2 md:pt-0">
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {group.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-50 lg:bg-white border border-slate-100 lg:border-slate-200 text-[9px] md:text-[10px] font-bold text-slate-600 uppercase tracking-widest rounded-lg md:rounded-full group-hover:border-blue-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* COMPACT FOOTER STATUS */}
        <div className="mt-12 md:mt-24 flex flex-col md:flex-row items-center justify-between p-6 md:p-10 bg-slate-900 rounded-3xl md:rounded-[3rem] text-white">
           <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-0">
              <div className="hidden sm:flex -space-x-4">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-slate-900 bg-blue-600 flex items-center justify-center font-black italic">D</div>
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-slate-900 bg-slate-700 flex items-center justify-center text-[8px] md:text-[10px] font-bold uppercase tracking-tighter">INFRA</div>
              </div>
              <div className="text-center md:text-left">
                <p className="text-[9px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Next Sprint</p>
                <p className="text-lg md:text-xl font-black italic">Scaling Devlyn.io</p>
              </div>
           </div>
           
           <a 
            href="#contact" 
            className="w-full md:w-auto flex items-center justify-center gap-4 bg-white text-slate-900 px-6 py-4 rounded-xl md:rounded-2xl font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl"
           >
             Get Specs
             <Terminal size={14} />
           </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;