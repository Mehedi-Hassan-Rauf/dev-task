"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function NavigationMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Less Blurred Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              exit: { duration: 2 },
            }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Navigation Menu */}
          <motion.div
            initial={{ opacity: 0, y: -800, x: "-50%" }}
            animate={{ opacity: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
              exit: { type: "tween", duration: 1.2, ease: "easeOut" },
            }}
            className="fixed top-1/2 left-1/2 w-2/3 h-2/3 bg-black z-50 text-white p-8 rounded-3xl"
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl">Navigation</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <nav className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <a
                  href="/case-studies"
                  className="text-4xl font-medium hover:text-gray-300 transition-colors"
                >
                  Case Studies
                </a>
                <span className="text-xl text-gray-500">13</span>
              </motion.div>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href="/our-agency"
                className="block text-4xl font-medium hover:text-gray-300 transition-colors"
              >
                Our Agency
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="/contact"
                className="block text-4xl font-medium hover:text-gray-300 transition-colors"
              >
                Contact Us
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="/news"
                className="block text-4xl font-medium hover:text-gray-300 transition-colors"
              >
                News
              </motion.a>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-8"
            >
              <p className="text-gray-500 mb-4">Follow us</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Instagram
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Facebook
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Awwwards
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 right-8"
            >
              <a
                href="/contact"
                className="px-6 py-3 bg-[#6366f1] text-white rounded-full hover:bg-[#5457d6] transition-colors"
              >
                Get in touch
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
