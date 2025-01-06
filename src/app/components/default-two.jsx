"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Jaeger-LeCoultre",
    logo: "/jaeger.svg",
    width: 180,
  },
  {
    name: "TGA",
    logo: "/tga.svg",
    width: 120,
  },
  {
    name: "Luxe Collective",
    logo: "/luxe.svg",
    width: 160,
  },
  {
    name: "Richemont",
    logo: "/richemont.svg",
    width: 180,
  },
];

export default function DefaultTwo() {
  return (
    <section className="py-24 bg-white">
      <div className="px-6 lg:px-16 max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-24"
        >
          From ambitious startups to global companies, we partner with great
          businesses and industry leaders.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center"
        >
          {clients.map((client, index) => (
            <div key={index} className="relative h-12">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className={`object-contain object-left filter grayscale hover:grayscale-0 transition-all duration-300 w-[${client.width}px]`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
