import { useState } from "react";
import axios from "axios";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaCheckCircle,
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
    <section id="contact" className="pb-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-gray-700 mb-12 leading-relaxed">
          Have a project in mind or need a scalable web solution?
          Let’s discuss how I can help.
        </p>

        {/* Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 space-y-6 shadow-sm"
        >
          <InputField
            icon={<FaUser />}
            placeholder="Full Name"
            value={form.name}
            onChange={(e: any) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <InputField
            icon={<FaEnvelope />}
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e: any) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <InputField
            icon={<FaCommentDots />}
            placeholder="Your Message"
            isTextArea
            value={form.message}
            onChange={(e: any) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition disabled:opacity-60"
          >
            <FaPaperPlane />
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {/* Success / Error */}
        <AnimatePresence>
          {successMsg && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl"
            >
              <FaCheckCircle />
              <span className="text-sm font-medium">{successMsg}</span>
            </motion.div>
          )}

          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl text-sm"
            >
              {errorMsg}
            </motion.div>
          )}
        </AnimatePresence>
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
}: any) => (
  <div className="relative">
    <span className="absolute left-4 top-3.5 text-gray-400">
      {icon}
    </span>

    {isTextArea ? (
      <textarea
        rows={5}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 text-sm text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    )}
  </div>
);
