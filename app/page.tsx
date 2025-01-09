"use client";
import About from "@/components/About";
import Hero2 from "@/components/Hero2";
import RecentWorks from "@/components/RecentWorks";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader/index";
import ZoomParallax from "@/components/ZoomParallax/index";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          className="z-0 relative overflow-x-hidden text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Hero2 />
          <div className="bg-cream z-10">
            <div className="max-w-7xl mx-auto">
              <About />
              <RecentWorks />
            </div>
          </div>
          <ZoomParallax />
        </motion.div>
      )}
    </main>
  );
}
