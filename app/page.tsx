"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import RecentWorks from "@/components/RecentWorks";
import Scene from "@/components/Scene";
import { AnimatePresence } from "framer-motion";
import { main } from "framer-motion/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader/index";
import ZoomParallax from "@/components/ZoomParallax/index";
import Prank from "@/components/Prank";
import Button from "@/common/RoundedButton";
import Hero2 from "@/components/Hero2";

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
      <div className="z-0 relative overflow-x-hidden text-white">
        {/* <Hero /> */}
        <Hero2 />

        <div className=" bg-cream z-10">
          <div className="max-w-7xl mx-auto ">
            <About />
            <RecentWorks />
          </div>
        </div>
      </div>
      <ZoomParallax />
      <About />
    </main>
  );
}
