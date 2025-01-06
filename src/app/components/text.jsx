"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function RunningText() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scrollYProgress to x position
  // Adjust these values to control the start and end positions
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-100%"] // Starts at 0% (right side) and moves to -100% (left side)
  );

  return (
    <section
      ref={containerRef}
      className="running-text-overflow nogap-mobile default no-border"
    >
      <div className="inner">
        <div className="running-text xl-title">
          <motion.div
            className="running-text-inner"
            ref={textRef}
            style={{ x }}
            initial={{ x: "100%" }} // Start from right side
            animate={{ x }} // Animate based on scroll
          >
            <div className="running-text-item">
              <div className="gap-el"></div>
            </div>
            <div className="running-text-item">
              <span className="text-[5rem] font-bold">
                Elevate your digital presence
              </span>
            </div>
            <div className="running-text-item">
              <div className="gap-el"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
