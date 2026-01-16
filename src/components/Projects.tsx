import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft, 
  Github, 
  Terminal, 
  ExternalLink,
  Shield,
  Activity,
  GraduationCap,
  Zap 
} from "lucide-react";

const allProjects = [
  {
    id: "01",
    title: "Xsploit",
    category: "Cybersecurity Infrastructure",
    tech: ["MERN", "AWS EC2", "CloudFront"],
    description: "Architected a production-grade cybersecurity ecosystem with OTP-based auth. Optimized content delivery via AWS CloudFront to minimize global latency.",
    live: "https://www.xsploithack.com",
    github: "https://github.com/Anisha2123/Xscploit_Lovelish",
    // Modern Network/Server visualization
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200", 
  },
  {
    id: "02",
    title: "4eDentalAI",
    category: "AI Diagnostics System",
    tech: ["Angular", "AI API", "Stripe"],
    description: "AI-powered diagnostic platform. Integrated specialized computer vision APIs for X-ray analysis and automated clinical scheduling via Stripe.",
    live: "https://4edentalai.com",
    github: null,
    // High-end modern dental/medical technology
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200",
  },
  {
    id: "03",
    title: "PSDC Platform",
    category: "EdTech Scalability",
    tech: ["Angular", "Node.js", "AWS"],
    description: "High-throughput skill training platform. Engineered modular admin ecosystem and integrated payment gateways for institutional enrollment.",
    live: "https://pratibhaskilldevelopment.com/",
    github: null,
    // Modern, clean educational interface vibe
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200",
  },
  {
    id: "04",
    title: "TopDataCoach",
    category: "Enterprise LMS",
    tech: ["MERN Stack", "Stripe", "RBAC"],
    description: "Role-based learning management system. Engineered secure payment flows and hierarchical user permissions for granular data integrity.",
    live: "https://topdatcoach.com/",
    github: null,
    // Clean data visualization and corporate dashboard
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
  }
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0);
  const scrollAnchorRef = useRef(null);

  const projectsPerPage = 3;
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);

  const handlePagination = (newDirection) => {
    const nextPage = currentPage + newDirection;
    if (nextPage >= 1 && nextPage <= totalPages) {
      if (window.innerWidth < 1024) {
        const topOffset = scrollAnchorRef.current.offsetTop - 100;
        window.scrollTo({ top: topOffset, behavior: "smooth" });
      }
      setDirection(newDirection);
      setCurrentPage(nextPage);
    }
  };

  const currentProjects = allProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  return (
    <section 
      id="projects" 
      ref={scrollAnchorRef}
      className="relative py-20 md:py-32 bg-white text-gray-900 overflow-hidden"
    >
      {/* Background decoration matching Contact section */}
      <div className="absolute top-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* HEADER: Matching Contact typography */}
        {/* <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[11px] uppercase tracking-[0.3em] text-blue-600 font-semibold mb-6">
              Engineering Lab
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Selected <span className="text-blue-600">Shipments</span> <br className="hidden md:block" />
              & Production Work.
            </h3>
          </div>
          <p className="text-gray-600 text-lg font-light leading-relaxed max-w-xs border-l border-gray-100 pl-6 hidden lg:block">
            Architecting for scale through refined engineering principles.
          </p>
        </div> */}
         {/* HEADER: Massive on Desktop, Sharp & Clean on Mobile */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-24 gap-4 md:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-blue-600 font-bold mb-3 md:mb-6">
               Engineering Lab
            </h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-none italic">
              Selected Shipments <span className="text-slate-200">&</span> <br className="hidden md:block" /> 
              Production <span className="text-slate-900">Work.</span>
            </h3>
          </div>
          <div className="lg:max-w-xs pb-1 md:pb-2">
            <p className="text-slate-400 text-[10px] md:text-sm font-bold leading-relaxed uppercase tracking-widest">
              Engineered for scale. <br className="hidden md:block" />
              Optimized for performance.
            </p>
          </div>
        </div>

        {/* PROJECTS CONTAINER */}
        <div className="min-h-[400px] relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction < 0 ? 30 : -30 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
            >
             {currentProjects.map((proj) => (
  <div 
    key={proj.id} 
    className="group flex flex-col h-full bg-white rounded-[2.5rem] p-4 border border-gray-50 shadow-xl shadow-blue-900/10 transition-all duration-500 hover:shadow-blue-900/20 hover:-translate-y-2"
  >
    {/* 1. Image Frame */}
    <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden bg-gray-50 mb-6 shadow-inner">
      <img 
        src={proj.image} 
        alt={proj.title}
        className="w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-105"
      />
      <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold text-blue-600 uppercase tracking-widest border border-blue-50 shadow-sm">
              {proj.id}
          </span>
      </div>
    </div>

    {/* 2. Content Area */}
    <div className="space-y-4 px-3 flex-grow flex flex-col">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold tracking-tight text-gray-900">
          {proj.title}
        </h4>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
           <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
           <span className="text-[10px] font-bold text-blue-700 uppercase tracking-tighter">Live</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
         <Terminal size={12} className="text-blue-500 opacity-60" />
         {proj.category}
      </div>

      <p className="text-gray-600 text-sm leading-relaxed font-medium line-clamp-3">
        {proj.description}
      </p>

      {/* 3. Footer Actions */}
      <div className="flex items-center gap-6 pt-6 mt-auto border-t border-gray-50">
        <a href={proj.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-900 hover:text-blue-600 transition-colors group/link">
          Launch <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
        {proj.github && (
          <a href={proj.github} target="_blank" rel="noreferrer" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-gray-900 transition-all hover:bg-gray-100">
            <Github size={18} />
          </a>
        )}
      </div>
    </div>
  </div>
))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* NAVIGATION: Pill Style & Soothing Shadows */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-10 gap-8">
           
           <div className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-xs font-medium text-gray-400 bg-gray-50">
                {currentPage}
              </div>
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.3em]">
                Registry Index <span className="mx-2 text-gray-200">/</span> {totalPages}
              </p>
           </div>

           <div className="flex gap-4 w-full md:w-auto">
              <button 
                onClick={() => handlePagination(-1)}
                disabled={currentPage === 1}
                className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-white border border-gray-200 text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-blue-600 disabled:opacity-20 transition-all active:scale-95 shadow-sm"
              >
                <ArrowLeft size={16} />
                Prev
              </button>
              <button 
                onClick={() => handlePagination(1)}
                disabled={currentPage === totalPages}
                className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-blue-600 text-[11px] font-bold uppercase tracking-widest text-white hover:bg-blue-700 disabled:opacity-20 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
              >
                Next
                <ArrowRight size={16} />
              </button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;