"use client";
import { useRef } from "react";
import Picture1 from "../../public/text/1.jpg";
import Picture2 from "../../public/text/2.jpg";
import Picture3 from "../../public/text/3.jpg";
import { motion } from "framer-motion";

import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";

const Slide = (props) => {
  const direction = props.direction == "left" ? -1 : 1;

  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );

  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src} />

      <Phrase src={props.src} />

      <Phrase src={props.src} />
    </motion.div>
  );
};
const Phrase = ({ src }) => {
  return (
    <div className={"px-5 flex gap-5 items-center"}>
      <p className="text-[5vw]">Computer Engineer</p>

      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};

export default function ParallaxText() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });
  return (
    <main className="overflow-hidden pt-20">
      <div ref={container}>
        <Slide
          src={Picture1}
          direction={"left"}
          left={"-40%"}
          progress={scrollYProgress}
        />

        <Slide
          src={Picture2}
          direction={"right"}
          left={"-25%"}
          progress={scrollYProgress}
        />

        <Slide
          src={Picture3}
          direction={"left"}
          left={"-75%"}
          progress={scrollYProgress}
        />
      </div>
    </main>
  );
}
