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
      </div>

      <ZoomParallax />

      <div className=" bg-cream z-10">
        <div className="max-w-7xl mx-auto ">
          <About />
        </div>
      </div>

      <div className="py-10">
        <Projects />
      </div>
      <ParallaxText />
      <div className="max-w-7xl mx-auto mt-10 z-20">
        <Achievements />
      </div>

      <div className="py-10 relative">
        <Skills />
      </div>

      <Footer />
      {/* <ProjectsSection2 /> */}
    </main>
  );
}
