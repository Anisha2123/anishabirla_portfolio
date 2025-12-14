import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              BirlaTech Solutions
            </h3>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Your one-stop solution for professional websites, scalable
              applications, and modern digital products — built with
              performance, security, and growth in mind.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5 text-lg text-slate-500">
              <a href="https://github.com/Anisha2123" target="_blank" rel="noreferrer"
                className="hover:text-blue-600 transition">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/anishabirla/" target="_blank" rel="noreferrer"
                className="hover:text-blue-600 transition">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/916307255290" target="_blank" rel="noreferrer"
                className="hover:text-green-600 transition">
                <FaWhatsapp />
              </a>
              <a href="https://www.instagram.com/wt.aq_ab/?hl=en" target="_blank" rel="noreferrer"
                className="hover:text-pink-500 transition">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a href="#home" className="hover:text-blue-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Availability & CTA */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
              Availability
            </h4>

            <div className="space-y-3 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600" />
                India · Remote Worldwide
              </p>

              <p className="flex items-center gap-2">
                <FaClock className="text-blue-600" />
                Open for Freelance & Full-Time Roles
              </p>
            </div>

            {/* Calendly Button */}
            <a
              href="https://calendly.com/birlaani/new-meeting"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-2 mt-6
                px-5 py-3 rounded-lg
                bg-gradient-to-r from-blue-600 to-blue-700
                text-white text-sm font-semibold
                hover:from-blue-700 hover:to-blue-800
                transition shadow-md
              "
            >
              <FaCalendarAlt />
              Book a Call
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200 mt-12 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Anisha Birla · All rights reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;
