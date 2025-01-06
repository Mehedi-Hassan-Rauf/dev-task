"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DefaultFour() {
  const services = [
    "E-Commerce",
    "Website Design",
    "Web Development",
    "Digital Products",
    "Brand Identities",
    "SEO Optimisation",
  ];

  return (
    <section className="default no-border">
      <div className="inner max-w-[90rem] mx-auto px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              We're good at
            </motion.h2>

            <div className="services-list">
              <motion.p
                className="text-sm text-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Services
              </motion.p>

              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl md:text-3xl font-medium py-4 border-t border-gray-200">
                    {service}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <motion.div
            className="bg-[#4F46E5] text-white p-8 md:p-12 rounded-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Let's start with a conversation about how we can help you! Get in
              touch, we're a nice bunch.
            </h2>

            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <Link
                href="/contact"
                className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium text-center"
              >
                Let's talk
              </Link>
              <Link
                href="tel:0207 112 82 85"
                className="inline-block px-8 py-4 rounded-full border border-white text-center"
              >
                0207 112 82 85
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
