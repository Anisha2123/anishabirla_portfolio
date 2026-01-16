import profile from "../assets/pic6.png";
import Typewriter from "react-typewriter-effect";
import { useState } from "react";
import { ChevronRight, Cpu, Rocket, Layers, Terminal, Code2 } from "lucide-react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#fcfcfd] overflow-hidden md:pt-20 lg:pt-25 px-6 sm:px-12 lg:px-20 "
    >
      {/* Dynamic Keyframes for Minimalist Floating */}
      <style>
        {`
          @keyframes float-gentle {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(1deg); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-8px) rotate(-1deg); }
          }
          .animate-float-gentle { animation: float-gentle 5s ease-in-out infinite; }
          .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
          .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.4);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.05);
          }
        `}
      </style>
      {/* Background Engineering Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23475569' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* TEXT CONTENT */}
        <div className="max-sm:space-y-5 md:space-y-20 lg:space-y-4 text-center lg:text-left">
          
          {/* SDE Badge */}
          <div className="py-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] md:text-xs font-bold tracking-widest uppercase mx-auto lg:mx-0">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            Software Engineer & Systems Builder
          </div>

          <div className="space-y-4 ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Engineering Systems <br className="hidden sm:block" />
              <span className="text-blue-600">Built to Scale.</span>
            </h1>
            
            {/* Typewriter Container - Fixed height to prevent layout shift */}
            <div className="max-sm:mt-10 md:h-10 flex items-center justify-center lg:justify-start overflow-hidden">
              <Typewriter
                textStyle={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#64748b",
                  fontFamily: "JetBrains Mono, monospace",
                }}
                startDelay={500}
                cursorColor="#2563EB"
                multiText={[
                  "Founder @ Devlyn",
                  "Full-Stack Architecture",
                  "Algorithmic Problem Solver",
                  "Performance Optimization"
                ]}
                multiTextDelay={1500}
                typeSpeed={50}
              />
            </div>
          </div>

          <p className="text-sm md:text-base text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            Focused on building high-performance digital infrastructure. 
            Currently architecting <span className="text-slate-900 font-bold border-b-2 border-blue-100">Devlyn</span>, 
            a startup dedicated to modernizing web system throughput and reliability.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {["Next.js", "Node.js", "Java", "AWS", "System Design"].map((tech) => (
              <div key={tech} className="px-3 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-500 uppercase tracking-tight shadow-sm">
                {tech}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <a 
              href="#projects" 
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-sm font-bold transition-all shadow-lg shadow-slate-200"
            >
              View Projects
              <ChevronRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-slate-900 text-slate-700 text-sm font-bold transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>

       {/* RIGHT IMAGE SECTION */}
        <div className="hidden lg:flex justify-end relative pr-10">
          <div className="relative w-full max-w-[280px]">
            
            {/* MAIN IMAGE FRAME */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[4px] border-white shadow-xl bg-slate-50 aspect-[4/5]">
              <img
                src={profile}
                alt="SDE Portfolio"
                className={`w-full h-full object-cover transition-all duration-1000 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
                onLoad={() => setLoaded(true)}
              />
            </div>

            {/* CARD 1: STARTUP (Clean Minimalist) */}
            <div className="absolute -top-4 -left-12 z-20 animate-float-gentle">
              <div className="glass-card p-3 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 border border-blue-100">
                  <Rocket size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Building</p>
                  <p className="text-[11px] font-bold text-slate-800">Devlyn</p>
                </div>
              </div>
            </div>

            {/* CARD 2: DSA (Dynamic Border) */}
            <div className="absolute -bottom-2 -right-10 z-20 animate-float-slow transition-transform hover:scale-105">
              <div className="glass-card p-3 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 bg-slate-50 rounded-xl flex items-center justify-center text-emerald-600 border border-emerald-100">
                  <Code2 size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Logic</p>
                  <p className="text-[11px] font-bold text-slate-800">DSA Pattern Expert</p>
                </div>
              </div>
            </div>

            {/* CARD 3: SYSTEM DESIGN (Minimal Dark) */}
            <div className="absolute top-1/2 -right-14 z-20 animate-float-gentle delay-700">
              <div className="bg-slate-900/90 backdrop-blur-md p-2.5 px-4 rounded-full flex items-center gap-2 border border-slate-800 shadow-2xl">
                <Cpu size={14} className="text-blue-400" />
                <span className="text-[10px] font-medium text-slate-300 whitespace-nowrap tracking-wide">
                  High-Throughput <br></br>Systems
                </span>
              </div>
            </div>

            {/* Subtle Gradient Glows instead of blobs */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gradient-to-tr from-indigo-400/10 to-transparent rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;