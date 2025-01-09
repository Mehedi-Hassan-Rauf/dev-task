"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Work() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [0, -2800]);

  const [workData, setWorkData] = useState(null);

  useEffect(() => {
    // Fetch work data
    const fetchWorkData = async () => {
      try {
        const response = await fetch("/api/content/work");
        if (!response.ok) throw new Error("Failed to fetch work data");
        const data = await response.json();
        setWorkData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWorkData();
  }, []);
  console.log(workData);
  // const cases = [
  //   {
  //     title: "Romans & Partners",
  //     image: "/demo.jpg",
  //     tags: ["UI/UX Design", "Property Portal"],
  //     isLatest: true,
  //     link: "/case-studies/romans-partners",
  //   },
  //   {
  //     title: "Alveena Casa",
  //     image: "/demo.jpg",
  //     tags: ["UI/UX Design", "E-Commerce"],
  //     link: "/case-studies/alveena-casa",
  //   },
  //   {
  //     title: "Fudli App",
  //     image: "/demo.jpg",
  //     tags: ["E-Commerce", "Digital Product"],
  //     link: "/case-studies/fudli",
  //   },
  //   {
  //     title: "Re-Core Pilates",
  //     image: "/demo.jpg",
  //     tags: ["UI/UX Design", "Development"],
  //     link: "/case-studies/re-core-pilates",
  //   },
  //   {
  //     title: "Tech SuperPowers",
  //     image: "/demo.jpg",
  //     tags: ["UI/UX Design", "Development"],
  //     link: "/case-studies/tech-superpowers",
  //   },
  // ];

  if (!workData) {
    return <p>Loading...</p>; // Add a loader or skeleton as needed
  }

  return (
    <section ref={containerRef} className="h-[400vh]">
      <div className="sticky top-0 h-screen flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-6 lg:px-16 py-24"
        ></motion.div>

        <div className="flex-1 overflow-hidden">
          <motion.div
            style={{ x: translateX }}
            className="flex gap-6 px-6 lg:px-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="min-w-[400px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-5xl font-bold">Work</h2>
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-200">
                    {workData?.content?.cases?.length}
                  </span>
                </div>
                <p className="text-xl text-gray-600 max-w-md">
                  A selection of our crafted work, built from scratch by our
                  talented in-house team.
                </p>
              </div>
              <a
                href="/case-studies"
                className="inline-flex px-6 py-3 w-fit rounded-full border border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1] hover:text-white transition-colors"
              >
                Case Studies
              </a>
            </motion.div>
            {workData?.content?.cases?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group min-w-[600px]"
              >
                <a
                  href={item.link}
                  className="block relative aspect-[4/3] rounded-2xl overflow-hidden"
                >
                  {/* Background Image */}
                  <Image
                    src={"/demo.jpg"}
                    alt={"demo"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Latest Badge */}
                  {item.isLatest && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-4 py-1 bg-[#6366f1] text-white text-sm rounded-full">
                        Latest
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-3xl font-medium mb-4">{item.title}</h3>
                    <div className="flex gap-3">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-4 py-1 bg-black/30 backdrop-blur-sm rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="min-w-[400px] flex flex-col items-center justify-center"
            >
              <h3 className="text-3xl font-bold mb-6">View More</h3>
              <a
                href="/case-studies"
                className="inline-flex px-6 py-3 rounded-full border border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1] hover:text-white transition-colors"
              >
                Case Studies
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
