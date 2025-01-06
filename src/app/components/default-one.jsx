"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const wordAnimation = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function DefaultOne() {
  const titleWords = ["Your", "Digital", "Partner"];
  const descriptionWords = [
    ["We", "partner", "with", "companies", "of", "all", "sizes", "to"],
    ["solve", "complex", "business", "challenges", "and"],
    ["define", "their", "digital", "strategies", "and", "objectives"],
    ["that", "deliver", "results.", "We", "help", "bring", "ideas", "to"],
    ["life", "and", "create", "brands,", "websites", "&", "digital"],
    ["products", "that", "work."],
  ];

  return (
    <section className="py-24 bg-white">
      <div className="px-6 lg:px-16 max-w-[1400px] mx-auto">
        {/* Title */}
        <div className="mb-16">
          <h2 className="text-4xl font-medium">
            <div className="flex gap-x-2">
              {titleWords.map((word, i) => (
                <motion.div
                  key={i}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  variants={wordAnimation}
                >
                  {word}
                </motion.div>
              ))}
            </div>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <div className="text-xl text-gray-600 mb-12">
              {descriptionWords.map((line, lineIndex) => (
                <div key={lineIndex} className="flex flex-wrap gap-x-2 mb-2">
                  {line.map((word, wordIndex) => (
                    <motion.div
                      key={wordIndex}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      transition={{
                        delay: (lineIndex * line.length + wordIndex) * 0.03,
                      }}
                      variants={wordAnimation}
                    >
                      {word}
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-4">
                {["bbc.svg", "costa.svg", "demo.jpg"].map((src, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 overflow-hidden relative"
                  >
                    <Image
                      src={`/${src}`}
                      alt={`Client ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-gray-600">Brands who've trusted us...</span>
            </motion.div>
          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-12"
          >
            <div className="grid grid-cols-2 gap-12">
              {[
                { number: "20", label: "Years on the market" },
                { number: "500", label: "Satisfied Customers" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl font-medium mb-4">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
