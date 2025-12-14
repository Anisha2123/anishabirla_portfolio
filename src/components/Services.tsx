import React from "react";
import {
  FaCalendarAlt,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    title: "Basic Website",
    price: "₹2,000",
    popular: false,
    description:
      "Clean, responsive static or portfolio websites ideal for individuals, startups, and personal branding.",
    features: [
      "Responsive UI (Mobile + Desktop)",
      "Landing Page / Portfolio Website",
      "Contact Form Integration",
      "Basic SEO Setup",
    ],
    stacks: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Professional Web App",
    price: "₹5,000",
    popular: true, // ⭐ MOST POPULAR
    description:
      "End-to-end full-stack applications suitable for real businesses, startups, and scalable products.",
    features: [
      "Authentication & Authorization",
      "Admin Dashboard",
      "Payment Gateway Integration",
      "REST APIs & Database",
    ],
    stacks: ["MERN", "MEAN", "Angular", "Next.js", "MongoDB", "SQL"],
  },
  {
    title: "Advanced Scalable System",
    price: "₹8,000",
    popular: false,
    description:
      "Production-ready, cloud-deployed systems built for scalability, security, and performance.",
    features: [
      "Cloud Deployment (AWS)",
      "Scalable Backend Architecture",
      "Role-Based Access Control",
      "Performance Optimization",
    ],
    stacks: ["Next.js", "Node.js", "MongoDB", "AWS", "SQL"],
  },
];


const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Services Offered
        </h2>
        <p className="text-center text-gray-500 text-base max-w-2xl mx-auto mb-16 leading-relaxed">
  Professional web development solutions designed for startups,
  businesses, and scalable products.
</p>


        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative bg-white rounded-3xl border p-8 flex flex-col justify-between transition-all
                ${
                  service.popular
                    ? "border-blue-500 shadow-xl scale-[1.03]"
                    : "border-gray-200 shadow-md hover:shadow-xl"
                }`}
            >
              {/* Most Popular Badge */}
              {service.popular && (
                <span className="absolute -top-3 right-6 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow">
                  Most Popular
                </span>
              )}

              {/* Title */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">
                  {service.price}
                </p>

                {/* Description */}
                <p className="text-gray-900 text-sm leading-relaxed mb-6">
  {service.description}
</p>


                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-gray-700 text-sm"
                    >
                      <FaCheckCircle className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {service.stacks.map((stack) => (
                    <span
                      key={stack}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="https://calendly.com/birlaani/new-meeting"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
                >
                  <FaCalendarAlt />
                  Book a Call
                </a>

                <a
                  href="https://wa.me/916307255290"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-300 hover:border-green-500 hover:text-green-600 font-semibold transition"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
