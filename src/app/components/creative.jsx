"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ArrowIcon = () => (
  <svg
    width="49"
    height="35"
    viewBox="0 0 48.7295674 34.7295396"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M31.286293,14.6352302 L47.358628,30.6352302 L48.729567,32 L47.358628,33.3647698 L31.286293,49.3647698 L28.569038,46.6352302 L41.334,33.9252302 L0,33.9257376 L0,30.0742624 L41.337,30.0742302 L28.569038,17.3647698 L31.286293,14.6352302 Z"
        fill="#FFFFFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

const services = [
  {
    title: "E-commerce",
    caseStudy: "Alveena Casa",
    image: "/demo.jpg",
    link: "/case-studies/alveena-casa",
  },
  {
    title: "Website Design",
    caseStudy: "Romans & Partners",
    image: "/demo.jpg",
    link: "/case-studies/romans-partners",
  },
  {
    title: "Digital Products",
    caseStudy: "Fudli App",
    image: "/demo.jpg",
    link: "/case-studies/fudli",
  },
  {
    title: "Brand Identities",
    caseStudy: "Learning Library",
    image: "/demo.jpg",
    link: "/case-studies/learning-library",
  },
];

export default function Creative() {
  return (
    <section className="bg-[#111111] text-white py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#6366f1]/20 to-transparent" />

      <div className="px-6 lg:px-16 max-w-[1400px] mx-auto">
        {/* Intro Text */}
        <div className="text-xl mb-16">
          <div className="flex flex-wrap gap-x-2">
            {[
              "Our",
              "team",
              "of",
              "experts",
              "can",
              "help",
              "you",
              "with...",
            ].map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <a href={service.link} className="block py-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-5xl font-medium relative z-10 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:scale-[0.98] origin-left">
                    {service.title}
                  </h3>

                  <div className="flex items-center gap-8 absolute right-0 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">
                    <div className="text-right">
                      <span className="block text-gray-500 text-sm transition-transform duration-500 ease-in-out">
                        Latest Case Study
                      </span>
                      <span className="text-xl block transition-transform duration-500 ease-in-out">
                        {service.caseStudy}
                      </span>
                    </div>

                    <div className="w-16 h-16 rounded-full overflow-hidden relative">
                      <Image
                        src={service.image}
                        alt={service.caseStudy}
                        fill
                        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                      />
                    </div>

                    <div className="transition-transform duration-500 ease-in-out group-hover:translate-x-2">
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="h-px bg-white/20 my-24"
        />

        {/* Agency Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-purple-500 mb-6">
              Creative Agency
            </h2>
            <p className="text-xl max-w-xl">
              We're an award-winning creative agency based in London, focused on
              E-Commerce, Web Design London, Digital Products, Branding and SEO.
            </p>
          </div>
          <div className="flex gap-6 lg:justify-end">
            {[
              { number: "300+", label: "Projects" },
              { number: "15", label: "Awards" },
            ].map((stat, index) => (
              <div
                key={index}
                className="px-8 py-4 rounded-full h-fit flex gap-4 items-center border border-white/20 backdrop-blur-sm hover:border-white/40 transition-all duration-500 ease-in-out"
              >
                <span className="block text-2xl font-medium">
                  {stat.number}
                </span>
                <span className="block text-2xl font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
