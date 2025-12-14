import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import ResumeA from "../assets/Anisha_Birla_Resume1.pdf";
import "../App.css";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-10 px-6 bg-gray-50 text-gray-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-wide"
      >
        My Resume
      </motion.h2>


      {/* Download Resume */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-center"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={ResumeA}
          download
          className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300"
        >
          <FaDownload />
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Resume;
