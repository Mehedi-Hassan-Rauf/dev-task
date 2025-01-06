"use client";
import { motion } from "framer-motion";

export default function BigMsg() {
  const titleWords = [
    ["Crafting", "digital"],
    ["experiences"],
    ["since", "2004"],
  ];

  const wordAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background diagonal lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full transform -skew-x-12 bg-gradient-to-r from-gray-200 via-transparent to-gray-200" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto">
          {titleWords.map((line, lineIndex) => (
            <div
              key={lineIndex}
              className={`title-line ${lineIndex === 1 ? "text-blue-600" : ""}`}
            >
              {line.map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={wordAnimation}
                  transition={{
                    duration: 0.5,
                    delay: wordIndex * 0.1 + lineIndex * 0.2,
                  }}
                  className="inline-block text-7xl md:text-8xl font-bold mx-2"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
