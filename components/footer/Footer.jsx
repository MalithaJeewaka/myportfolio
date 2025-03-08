import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import IconAnimationComponent from "@/components/IconAnimationComponent";
import Balatro from "@/src/blocks/Backgrounds/Balatro/Balatro";

export default function Footer() {
  const container = useRef();
  const paths = useRef([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        path.setAttribute("startOffset", -40 + i * 40 + e * 40 + "%");
      });
    });
  }, []);

  return (
    <div className="relative" ref={container}>
      <div className="h-[60vh] flex items-center justify-center">
        <svg className="w-full mb-40" viewBox="0 0 250 90">
          <path
            fill="none"
            id="curve"
            d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
          />
          <text className="text-[6px] uppercase" style={{ fill: "#B5FF6D" }}>
            {[...Array(3)].map((_, i) => {
              return (
                <textPath
                  key={i}
                  ref={(ref) => (paths.current[i] = ref)}
                  startOffset={i * 40 + "%"}
                  href="#curve"
                >
                  Coding Dreams Into Reality
                </textPath>
              );
            })}
          </text>
        </svg>
      </div>

      <Logos scrollProgress={scrollYProgress} />
    </div>
  );
}

const Logos = ({ scrollProgress }) => {
  const y = useTransform(scrollProgress, [0, 1], [-700, 0]);
  return (
    <div className="h-[40vh]  relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="h-full  flex justify-center gap-10 items-center p-10"
      >
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Balatro
            isRotate={false}
            mouseInteraction={false}
            pixelFilter={4000}
            color1="#000"
            color2="#149179"
            color3="#223537"
          />
        </div>
        <IconAnimationComponent
          src="/animations/linkedin.lottie"
          width={100}
          height={100}
        />
        <IconAnimationComponent
          src="/animations/github.lottie"
          width={100}
          height={100}
        />
      </motion.div>
    </div>
  );
};
