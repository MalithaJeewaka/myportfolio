"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import Scene from "@/components/Scene";
import { AnimatePresence } from "framer-motion";
import { main } from "framer-motion/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader/index";
import ZoomParallax from "@/components/ZoomParallax/index";
import Footer from "@/components/footer/Footer";
import ParallaxText from "@/components/ParallaxText/ParallaxText";

import Hero2 from "@/components/Hero2";

import Button2 from "@/common/button/Button";
import Projects from "@/components/Projects";
import Skills from "@/components/skills/Skills";
import ProjectsSection2 from "@/components/projects2/ProjectsSection2";
import Balatro from "@/src/blocks/Backgrounds/Balatro/Balatro";

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
    <main className="relative">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div className="relative overflow-x-hidden text-white">
        {/* <Hero /> */}

        <Hero2 />
      </div>
      <div className="relative">
        <ZoomParallax />
      </div>

      <div className=" z-10">
        <About />
      </div>

      <div className="py-10">
        <Projects />
      </div>
      <ParallaxText />
      <div className="mx-auto my-[4rem] z-20">
        <Achievements />
      </div>

      {/* <div className="py-10 relative">
        <Skills />
      </div> */}

      <Footer />
      {/* <ProjectsSection2 /> */}
    </main>
  );
}
