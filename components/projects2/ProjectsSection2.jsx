import React, { useRef } from "react";
import { projects2 } from "@/data";
import Card from "../Card/index";
import { useScroll } from "framer-motion";

const ProjectsSection2 = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <div>
      {projects2.map((project, i) => {
        const targetScale = 1 - (projects2.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default ProjectsSection2;
