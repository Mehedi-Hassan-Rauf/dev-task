"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Landscape() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="px-6 lg:px-16 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[16/9] rounded-3xl overflow-hidden"
        >
          <Image
            src="/landscape-pic.jpg"
            alt="Developer working at a wooden desk with iMac and plants"
            fill
            className="object-cover"
            priority
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
