import { useState } from "react";
import axios from "axios";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaCheckCircle,
  FaSpinner,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    if (!form.name || !form.email || !form.message) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);
      await axios.post("https://formspree.io/f/mgvabkgv", form);
      setSuccessMsg("Thanks for reaching out! I’ll get back to you shortly.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 px-6 bg-[#f8f9fb] overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-16 items-center">
          
          {/* Left Side: Context & Info - Responsive Center Alignment */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start lg:justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Let's engineer <br />
              <span className="text-blue-600">the next big thing.</span>
            </h2>
            <p className="max-sm:hidden text-lg text-gray-600 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
              Whether it's a scalable backend system, a complex front-end
              interface, or a full-stack challenge. I'm ready to discuss how we
              can drive impact.
            </p>

            {/* Additional Contact Context */}
            <div className="space-y-4 mb-12 w-full">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Other ways to connect
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="#" className="p-3 bg-white text-gray-600 hover:text-blue-600 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <FaLinkedin size={20} />
                </a>
                 <a href="#" className="p-3 bg-white text-gray-600 hover:text-gray-900 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <FaGithub size={20} />
                </a>
                <a href="mailto:your.email@example.com" className="flex items-center gap-2 px-4 py-3 bg-white text-gray-600 hover:text-blue-600 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all font-medium">
                    <FaEnvelope />
                    <span>Email Me directly</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-[2rem] px-7 md:p-7 shadow-xl shadow-blue-900/5 border border-gray-100 relative"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center lg:text-left">
              Send a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3 text-left">
              <InputField
                icon={<FaUser />}
                placeholder="What's your name?"
                value={form.name}
                onChange={(e: any) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <InputField
                icon={<FaEnvelope />}
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e: any) =>
                  setForm({ ...form, email: e.target.value })
                }
              />

              <InputField
                icon={<FaCommentDots />}
                placeholder="Tell me about the project..."
                isTextArea
                value={form.message}
                onChange={(e: any) =>
                  setForm({ ...form, message: e.target.value })
                }
              />

              {/* Modern Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex items-center justify-center gap-3 py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/25 disabled:opacity-70 disabled:hover:translate-y-0 overflow-hidden"
              >
                 <span className={`absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out ${loading ? 'hidden' : 'block'}`}></span>
                {loading ? (
                  <FaSpinner className="animate-spin text-xl" />
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <FaPaperPlane className="text-sm transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>
            </form>

            <AnimatePresence mode="wait">
              {successMsg && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 flex items-start gap-3 p-4 bg-green-50 border border-green-100 text-green-800 rounded-xl"
                >
                  <FaCheckCircle className="mt-0.5 flex-shrink-0 text-green-500" />
                  <p className="text-sm font-medium">{successMsg}</p>
                </motion.div>
              )}

              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 p-4 bg-red-50 border border-red-100 text-red-800 rounded-xl text-sm font-medium"
                >
                  {errorMsg}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const InputField = ({
  icon,
  placeholder,
  value,
  onChange,
  isTextArea = false,
  type = "text",
}: any) => {
    const baseClasses = "w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-4 text-gray-900 placeholder-gray-400 transition-all duration-300 ease-in-out focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none hover:border-gray-300";

    return (
  <div className="relative group">
    <span className="absolute left-4 top-[1.15rem] text-gray-400 transition-colors group-focus-within:text-blue-500 z-10 text-lg">
      {icon}
    </span>

    {isTextArea ? (
      <textarea
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${baseClasses} resize-none`}
        required
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={baseClasses}
        required
      />
    )}
  </div>
)};