import React from "react";
import { Calendar, MapPin, ExternalLink, Cpu, Globe, Database, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "Devlyn",
    date: "Jan 2026 - Present",
    role: "Founder & Lead Full Stack Developer",
    type: "Startup",
    location: "Remote",
    link: "https://devlyn-webs.vercel.app/", 
    tech: ["Next.js", "MERN", "AWS", "Redis", "Angular"],
    description: [
      "Architected a high-throughput digital infrastructure solution.",
      "Engineered a distributed microservices architecture for 99.9% uptime.",
      "Integrated automated CI/CD accelerating deployment cycles by 40%."
    ],
    icon: <Globe className="text-blue-600" size={18} />
  },
  {
    title: "PalTech",
    date: "Jul 2025 - Dec 2025",
    role: "Trainee Data Engineer",
    type: "Full Time",
    location: "Hyderabad",
    link: "https://www.pal.tech/",
    tech: [ "Databricks", "SQL", "ETL", "Power BI"],
    description: [
      "Optimized SQL Warehouse solutions, improving query performance by 25%.",
      "Developed scalable ETL pipelines processing multi-terabyte datasets.",
      "Implemented automated data quality frameworks for analytics integrity."
    ],
    icon: <Database className="text-indigo-600" size={18} />
  },
  {
    title: "PSDC",
    date: "May 2025 - Jun 2025",
    role: "Full Stack Developer",
    type: "Full Time",
    location: "Pune",
    link: "https://pratibhaskilldevelopment.com/",
    tech: ["Angular", "Node.js", "MongoDB", "AWS S3"],
    description: [
      "Built a skill training platform handling high concurrent user traffic.",
      "Integrated Razorpay gateways and secure AWS S3 storage solutions.",
      "Developed real-time analytics dashboards for student tracking."
    ],
    icon: <Cpu className="text-slate-600" size={18} />
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-[#fcfcfd] text-slate-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Section Header - Optimized for Mobile Reading */}
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <h2 className="text-[10px] md:text-sm uppercase tracking-[0.2em] text-blue-600 font-bold mb-3">
            Professional Roadmap
          </h2>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 italic">
            Engineering <span className="text-slate-400">Impact.</span>
          </h3>
        </div>

        {/* Timeline List */}
        <div className="relative space-y-6 md:space-y-12">
          {/* Vertical Line - Hidden on very small screens to save horizontal space */}
          <div className="absolute left-0 md:left-8 top-4 bottom-4 w-[1px] bg-slate-200 hidden sm:block"></div>

          {experiences.map((exp, index) => (
            <div key={exp.title} className="relative pl-0 sm:pl-12 md:pl-20 group">
              
              {/* Timeline Dot - Hidden on very small screens */}
              <div className="absolute left-0 md:left-[26px] top-2 w-3 h-3 rounded-full border-2 border-blue-600 bg-white z-10 group-hover:bg-blue-600 transition-colors hidden sm:block"></div>

              <div className="bg-white border border-slate-100 rounded-2xl md:rounded-3xl p-5 md:p-10 shadow-sm hover:shadow-md transition-all duration-300">
                
                {/* Header: Company & Meta */}
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-50 rounded-lg shrink-0">
                        {exp.icon}
                      </div>
                      <div>
                        <h4 className="text-lg md:text-2xl font-bold tracking-tight text-slate-900 leading-none">
                          {exp.title}
                        </h4>
                        <p className="text-sm md:text-lg font-semibold text-blue-600 mt-1">{exp.role}</p>
                      </div>
                    </div>
                    {exp.link !== "#" && (
                      <a href={exp.link} target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-blue-600 bg-slate-50 rounded-full transition-colors">
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>

                  {/* Compact Meta for Mobile */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] md:text-sm font-medium text-slate-400 border-t border-slate-50 pt-3 md:border-none md:pt-0">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-slate-300" />
                      {exp.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-slate-300" />
                      {exp.location}
                    </div>
                    <span className="hidden md:inline px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px] uppercase">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Description Bullet Points - Shortened for Mobile "To-the-point" vibe */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((line, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-600">
                      <span className="min-w-[5px] h-[5px] rounded-full bg-blue-500 mt-1.5"></span>
                      <span className="text-xs md:text-[15px] leading-relaxed">{line}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Tags - Reduced size for Mobile */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 md:px-3 md:py-1 bg-slate-50 border border-slate-100 rounded text-[9px] md:text-[11px] font-bold text-slate-500 uppercase tracking-tighter md:tracking-tight">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;