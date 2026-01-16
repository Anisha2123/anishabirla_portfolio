import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Top Section: Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Identity & Mission */}
          <div className="flex flex-col items-center md:items-start space-y-5">
            <h3 className="text-2xl font-normal text-white tracking-tight">
              Anisha <span className="text-blue-500">Birla</span>
            </h3>
            <p className="text-sm font-light leading-relaxed max-w-xs">
              Software Engineer specializing in building scalable systems 
              and performance-driven web architectures with a focus on impact.
            </p>
            
            {/* Social Icons - Clean & Minimalist */}
            <div className="flex gap-5 text-xl">
              <a href="https://github.com/Anisha2123" target="_blank" rel="noreferrer" 
                 className="hover:text-blue-400 transition-colors duration-300">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/anishabirla/" target="_blank" rel="noreferrer" 
                 className="hover:text-blue-400 transition-colors duration-300">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/916307255290" target="_blank" rel="noreferrer" 
                 className="hover:text-green-500 transition-colors duration-300">
                <FaWhatsapp />
              </a>
              <a href="https://www.instagram.com/wt.aq_ab/?hl=en" target="_blank" rel="noreferrer" 
                 className="hover:text-pink-400 transition-colors duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Simplified Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-6">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Availability & Action */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-6">
              Status
            </h4>
            
            <div className="space-y-4 text-sm font-light mb-8">
              <p className="flex items-center justify-center md:justify-start gap-3">
                <FaMapMarkerAlt className="text-blue-500" />
                India · Remote Worldwide
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>Available for New Opportunities</span>
              </div>
            </div>

            {/* Calendly CTA - Subtle & Modern */}
            <a
              href="https://calendly.com/birlaani/new-meeting"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 px-6 py-3 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <FaCalendarAlt className="group-hover:scale-110 transition-transform" />
              Schedule a Sync
            </a>
          </div>
        </div>

        {/* Legal & Version Info */}
        {/* <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] font-light text-slate-600"> */}
          {/* <p>© {new Date().getFullYear()} Anisha Birla</p> */}
          {/* <div className="flex gap-6 italic"> */}
            {/* <span>Built with React & Tailwind</span> */}
            {/* <span>v2.0.26</span> */}
          {/* </div> */}
        </div>

      {/* </div> */}
    </footer>
  );
};

export default Footer;