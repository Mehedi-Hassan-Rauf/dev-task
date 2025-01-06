"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const testimonials = [
    {
      quote:
        "We have worked with Artistsweb to build a complete new website with quite complex connections with our CRM and accounting functions. The end product is brilliant, a really first class blend of design and functionality and the speed and depth of understanding about our business was remarkable. I'd highly recommend them.",
      author: "Steven Glaberry",
      company: "TGA Mobility",
      image: "/tga-mobility.png",
    },
    {
      quote:
        "Artistsweb built our new website and it has been an absolute pleasure working with the whole team. Excellent communication and they built us just an incredible looking website.",
      author: "Nathan Smith",
      company: "Tech SuperPowers",
      image: "/tech-superpowers.png",
    },
    {
      quote:
        "Artistsweb are a great team of professionals to work with. They listened to our requirements very closely and delivered complex solutions with detail and outstanding creativity and more importantly to deadlines other agencies could not previously meet. We would highly recommend them to any corporation looking for a talented team of digital strategists, designers and developers.",
      author: "David Cortes",
      company: "Costa Coffee",
      image: "/costa-coffee.png",
    },
    {
      quote:
        "In the years we've worked with Artistsweb, they have consistently been a solid, reliable, dedicated and effective partner. We value greatly their capacity to work quickly and the advice that they give us. Their knowledge and development skillset is unrivalled compared to other digital agencies we've worked with and we shall continue to collaborate with them undoubtedly, for many years to come.",
      author: "Oliver Cripps",
      company: "Media Tree",
      image: "/media-tree.png",
    },
    {
      quote:
        "I had the absolute privilege of working with this wonderful team. The work they presented for my webpage was exactly what I had in mind. They are a team of talented artists who understood the concept and managed to deliver exactly what I was looking for. You don't need to look any further if you're looking for quality, professionalism, and a total artistic perspective. These guys are amazing! I won't leave them.",
      author: "Fortunato Angelini",
      company: "iPo-Core Pilates",
      image: "/ipo-core.png",
    },
  ];

  return (
    <div id="testimonials11" className="relative h-[400vh]" ref={containerRef}>
      <motion.div className="sticky top-0 min-h-screen w-full flex flex-col justify-center bg-gradient-to-b from-[#0f0f1b] to-[#1a1a2f] overflow-hidden">
        <div className="inner md ml-[40px] px-[30px] max-w-[350rem] mx-auto py-20">
          {/* Header Section */}
          <motion.div
            className="section-header mb-16"
            style={{
              scale: useTransform(scrollYProgress, [0, 0.2], [0.9, 1]),
            }}
          >
            <div className="section-header-item">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                <div className="title-line">
                  <motion.span className="inline-block">Client</motion.span>{" "}
                  <motion.span className="inline-block">Feedback</motion.span>
                </div>
              </h2>
              <p className="text-xl text-gray-400">
                We're collaborators - We build tight-knit partnerships with our
                clients.
              </p>
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <div className="testimonials-scroll space-y-8 flex flex-col items-center gap-20">
            {testimonials.map((testimonial, index) => {
              const scale = useTransform(
                scrollYProgress,
                [index * 0.15, index * 0.15 + 0.3],
                [0.8, 1.2]
              );

              const opacity = useTransform(
                scrollYProgress,
                [index * 0.15, index * 0.15 + 0.3],
                [0.5, 1]
              );

              return (
                <motion.div
                  key={index}
                  className="testimonials-scroll-item w-full max-w-[340rem]"
                  style={{
                    scale,
                    opacity,
                  }}
                >
                  <div className="box box-testimonial bg-[#1c1c2e] rounded-2xl px-[30px] pt-20 pb-12">
                    <div className="flex flex-col gap-16">
                      <p className="testimonial-title text-white text-xl">
                        "{testimonial.quote}"
                      </p>
                      <div className="box-testimonial-footer flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="circle-element w-12 h-12 flex-shrink-0 rounded-full overflow-hidden bg-gray-700">
                            <div className="w-full h-full bg-gray-600" />
                          </div>
                          <span className="text-white font-medium">
                            {testimonial.author}
                          </span>
                        </div>
                        <span className="text-blue-400">
                          {testimonial.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
