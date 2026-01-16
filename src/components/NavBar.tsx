import { useState, useEffect } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ResumeA from "../assets/Anisha_Birla_Resume1.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for soft transparency transitions
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

 const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  
  if (section) {
    // 1. Close menu first so the layout stabilizes
    setMenuOpen(false);

    // 2. Use a small timeout so the browser can recalculate 
    // the layout after the menu starts closing
    setTimeout(() => {
      const offset = 80; // Navbar height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 10); // A tiny 10ms delay is enough to fix the mobile "jump"
  }
};

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? "bg-white/70 backdrop-blur-lg border-b border-slate-100 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">

        {/* LOGO: Focused on Identity */}
        {/* LOGO: Aesthetic Monogram & Identity */}
<div
  onClick={() => scrollToSection("home")}
  className="cursor-pointer group flex items-center gap-3"
>
  {/* The Aesthetic Mark */}
  <div className="relative w-11 h-11 rounded-xl bg-white border border-blue-50/80 shadow-[0_2px_8px_-3px_rgba(37,99,235,0.1)] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-[0_4px_12px_-4px_rgba(37,99,235,0.15)] group-hover:border-blue-100">
    {/* Subtle gradient text for the initial */}
    <span className="relative z-10 text-xl font-semibold bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-transparent select-none">
      A
    </span>
    
    {/* Soft background glow on hover */}
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>

  {/* The Text Brand */}
  <div className="flex flex-col justify-center">
    <p className="text-[17px] font-medium tracking-tight text-slate-800 leading-tight">
      Anisha <span className="text-slate-400 font-light">Birla</span>
    </p>
    <p className="text-[10px] font-medium text-blue-600/70 uppercase tracking-[0.15em]">
      Portfolio
    </p>
  </div>
</div>

        {/* DESKTOP NAV: Light & Airy */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-[13px] font-medium uppercase tracking-[0.15em] text-slate-500 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-slate-200" />

          {/* Resume: Soft Blue Theme */}
          <a
            href={ResumeA}
            download
            className="group flex items-center gap-2 px-5 py-2 rounded-full border border-blue-600 text-blue-600 text-[12px] font-medium uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <FaDownload className="text-[10px] transition-transform group-hover:-translate-y-0.5" />
            Resume
          </a>
        </div>

        {/* MOBILE ICON */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-slate-500 rounded-xl bg-slate-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU: Smooth & Uncluttered */}
     <AnimatePresence>
  {menuOpen && (
    <motion.div
      // 1. Container Animation: Slow and Smooth
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.04, 0.62, 0.23, 0.98] // Professional "S-Curve" transition
      }}
      className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-50 overflow-hidden"
    >
      <ul className="flex flex-col items-center py-12 space-y-8">
        {navItems.map((item, index) => (
          <motion.li
            key={item.id}
            // 2. Staggered Entrance for Each Link
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: index * 0.1 + 0.2, // Each item waits for the previous one
              duration: 0.5,
              ease: "easeOut"
            }}
          >
            <button
              onClick={() => scrollToSection(item.id)}
              className="text-slate-600 text-xl font-light tracking-widest hover:text-blue-600 transition-colors"
            >
              {item.label}
            </button>
          </motion.li>
        ))}

        {/* Resume Button Entrance */}
        <motion.li 
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: (navItems.length * 0.1) + 0.2, duration: 0.5 }}
          className="pt-4 w-full px-12"
        >
          <a
            href={ResumeA}
            download
            className="flex items-center justify-center gap-3 w-full py-4 bg-blue-600 text-white rounded-2xl text-xs font-medium uppercase tracking-widest shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
          >
            <FaDownload />
            Resume
          </a>
        </motion.li>
      </ul>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
};

export default Navbar;