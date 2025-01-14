"use client";

import { useEffect, useState } from "react";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [bannerData, setBannerData] = useState(null);

  // useEffect(() => {
  //   setIsVisible(true);
  // }, []);

  useEffect(() => {
    // Fetch banner data
    const fetchBannerData = async () => {
      try {
        const response = await fetch("/api/content/banner");
        if (!response.ok) throw new Error("Failed to fetch banner data");
        const data = await response.json();
        setBannerData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBannerData();
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-[90vh] w-full">
      <div className="px-6 lg:px-16">
        <div className="flex flex-col justify-evenly min-h-[80vh]">
          {/* Hero Top */}
          <div>
            <h1
              className={`text-6xl md:text-7xl lg:text-8xl font-bold transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="block text-left relative flex gap-6 overflow-hidden mb-2">
                <div
                  className={`inline-block relative transition-transform duration-700 ${
                    isVisible ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  {bannerData?.content?.heroTitle?.firstLine?.word1}
                </div>
                <div
                  className={`inline-block relative bg-clip-text text-transparent animate-gradient transition-transform duration-700 delay-200 ${
                    isVisible ? "translate-y-0" : "translate-y-full"
                  }`}
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #6366f1, #4338ca, #6366f1)",
                    backgroundSize: "200% 100%",
                    animation: "gradient 3s linear infinite",
                  }}
                >
                  {bannerData?.content?.heroTitle?.firstLine?.word2}
                </div>
              </div>
              <div className="block text-left relative overflow-hidden">
                <div
                  className={`inline-block relative transition-transform duration-700 delay-400 ${
                    isVisible ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  {bannerData?.content?.heroTitle?.secondLine}
                </div>
              </div>
            </h1>
          </div>

          {/* Hero Bottom */}
          <div
            className={`flex flex-col md:flex-row items-start md:items-center md:justify-between md:gap-16 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group">
              <div className="transition-transform duration-500 group-hover:-translate-y-1">
                <div className="bg-black text-white rounded-full w-20 h-20 flex items-center justify-center">
                  <span className="text-2xl font-medium transition-transform duration-500 group-hover:-translate-y-1">
                    {bannerData?.content?.stats?.number}
                  </span>
                </div>
                <div className="mt-2 text-gray-600 transition-transform duration-500 group-hover:-translate-y-1">
                  {bannerData?.content?.stats?.text}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="max-w-md">
                <span className="text-xl md:text-2xl font-light leading-relaxed">
                  {bannerData?.content?.description}
                </span>
              </div>

              <button
                className="relative overflow-hidden px-8 py-4 bg-[#6366f1] text-white rounded-full group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span
                  className={`inline-block w-full transition-transform duration-300 ${
                    isHovered ? "-translate-y-full" : "translate-y-0"
                  }`}
                >
                  {bannerData?.content?.button?.text}
                </span>
                <span
                  className={`absolute left-0 w-full text-center transition-transform duration-300 ${
                    isHovered ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  {bannerData?.content?.button?.text}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
