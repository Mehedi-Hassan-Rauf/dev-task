"use client";
import { motion } from "framer-motion";

export default function DefaultThree() {
  return (
    <section className="default no-border">
      <div className="inner max-w-[90rem] mx-auto px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end">
          {/* Left side - Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold leading-tight">
              Let our experienced team
              <br />
              <span>elevate your digital goals</span>
            </h2>

            {/* Statistics */}
            <div className="flex gap-8 mt-[100px]">
              <div>
                <motion.span
                  className="text-5xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  250
                </motion.span>
                <p className="text-xl mt-2 w-fit">Five-Star Reviews</p>
              </div>
              <div>
                <motion.span
                  className="text-5xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  10
                </motion.span>
                <p className="text-xl mt-2 w-fit">In-House Experts</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl leading-relaxed"
          >
            <p>
              We have successfully completed over 300+ projects from a variety
              of industries. In our team, designers work alongside developers
              and digital strategists, we believe this is our winning recipe for
              creating digital products that make an impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
