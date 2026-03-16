import profile from "../assets/pic6.png";
import Typewriter from "react-typewriter-effect";
import { useState } from "react";
import { ChevronRight, Cpu, Rocket, Code2 } from "lucide-react";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anishabirla/",
    icon: <LinkedInIcon />,
    bg: "#0A66C2",
    lightBg: "#EBF3FB",
    color: "#0A66C2",
  },
  {
    label: "GitHub",
    href: "https://github.com/Anisha2123",
    icon: <GitHubIcon />,
    bg: "#24292F",
    lightBg: "#F0F0F0",
    color: "#24292F",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Anishatycon/",
    icon: <LeetCodeIcon />,
    bg: "#FFA116",
    lightBg: "#FFF7E6",
    color: "#B45309",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6307255290",
    icon: <WhatsAppIcon />,
    bg: "#25D366",
    lightBg: "#E8FBF0",
    color: "#15803D",
  },
];

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#fcfcfd] overflow-hidden pt-20 lg:pt-24"
    >
      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-1deg); }
        }
        .animate-float-gentle { animation: float-gentle 5s ease-in-out infinite; }
        .animate-float-slow   { animation: float-slow  7s ease-in-out infinite; }
        .glass-card {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.45);
          box-shadow: 0 8px 32px 0 rgba(31,38,135,0.07);
        }
      `}</style>

      {/* Background grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23475569' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── MAIN LAYOUT ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-0 lg:pb-0 min-h-screen lg:min-h-0 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── LEFT: TEXT ── */}
          <div className="flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse flex-shrink-0" />
              Software Engineer &amp; Systems Builder
            </div>

            {/* Heading + typewriter */}
            <div className="space-y-3 w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Engineering Systems{" "}
                <br className="hidden sm:block" />
                <span className="text-blue-600">Built to Scale.</span>
              </h1>

              <div className="h-8 flex items-center justify-center lg:justify-start overflow-hidden">
                <Typewriter
                  textStyle={{
                    fontSize: "0.9rem",
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
                    "Performance Optimization",
                  ]}
                  multiTextDelay={1500}
                  typeSpeed={50}
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed font-medium">
              Focused on building high-performance digital infrastructure.
              Currently architecting{" "}
              <span className="text-slate-900 font-bold border-b-2 border-blue-100">
                Devlyn
              </span>
              , a startup dedicated to modernizing web system throughput and
              reliability.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-1.5">
              {[
                "Next.js","Node.js","Java","AWS","System Design",
                "AWS EC2","CloudFront","S3 Bucket","Databases",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-white border border-slate-200 rounded text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-tight shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-sm font-bold transition-all shadow-lg shadow-slate-200"
              >
                View Projects
                <ChevronRight size={16} />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-slate-900 text-slate-700 text-sm font-bold transition-all"
              >
                Get in Touch
              </a>
            </div>

            {/* Social pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {socialLinks.map(({ label, href, icon, bg, lightBg, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    background: lightBg,
                    border: `1.5px solid ${bg}33`,
                    transition: "transform 0.18s, box-shadow 0.18s",
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl shadow-sm hover:-translate-y-0.5"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 4px 16px 0 ${bg}55`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <span
                    style={{ background: bg, color: "#fff" }}
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center flex-shrink-0"
                  >
                    {icon}
                  </span>
                  <span
                    style={{ color }}
                    className="text-[10px] sm:text-[11px] font-bold tracking-tight"
                  >
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: IMAGE (desktop only) ── */}
          <div className="hidden lg:flex justify-center xl:justify-end">
            {/*
              Outer wrapper: fixed width + generous vertical padding so floating
              cards never clip the section boundary.
            */}
            <div className="relative w-[260px] xl:w-[290px] flex-shrink-0 py-12 mx-auto">

              {/* Photo frame */}
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[4px] border-white shadow-xl bg-slate-50 aspect-[4/5]">
                <img
                  src={profile}
                  alt="Anisha — SDE Portfolio"
                  className={`w-full h-full object-cover transition-all duration-1000 ${
                    loaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
                  }`}
                  onLoad={() => setLoaded(true)}
                />
              </div>

              {/* CARD 1 — Building Devlyn (top-left) */}
              <div className="absolute top-6 -left-[5.5rem] z-20 animate-float-gentle">
                <div className="glass-card p-3 rounded-2xl flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 border border-blue-100 flex-shrink-0">
                    <Rocket size={17} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      Building
                    </p>
                    <p className="text-[11px] font-bold text-slate-800">Devlyn</p>
                  </div>
                </div>
              </div>

              {/* CARD 2 — DSA (bottom-left) */}
              <div className="absolute bottom-6 -left-[5.5rem] z-20 animate-float-slow">
                <div className="glass-card p-3 rounded-2xl flex items-center gap-3">
                  <div className="w-9 h-9 bg-slate-50 rounded-xl flex items-center justify-center text-emerald-600 border border-emerald-100 flex-shrink-0">
                    <Code2 size={17} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      Logic
                    </p>
                    <p className="text-[11px] font-bold text-slate-800">DSA Pattern Expert</p>
                  </div>
                </div>
              </div>

              {/* CARD 3 — Systems pill (right-middle) */}
              <div className="absolute top-1/2 -right-[5rem] z-20 -translate-y-1/2 animate-float-gentle">
                <div className="bg-slate-900/90 backdrop-blur-md p-2.5 px-4 rounded-full flex items-center gap-2 border border-slate-800 shadow-2xl whitespace-nowrap">
                  <Cpu size={13} className="text-blue-400 flex-shrink-0" />
                  <span className="text-[10px] font-medium text-slate-300 leading-tight">
                    High-Throughput
                    <br />
                    Systems
                  </span>
                </div>
              </div>

              {/* Glow orbs */}
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-tr from-indigo-400/10 to-transparent rounded-full blur-3xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;