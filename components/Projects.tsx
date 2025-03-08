import React, { useRef } from "react";

import Project from "@/components/double/Projects";
import { div } from "framer-motion/client";
import Button2 from "@/common/button/Button";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const projects = [
  {
    name: "Tech Waddo",
    client: "Decimal",
    description: "Tech Solution Provider Platform",
    src: "3.png",
    year: 2024,
  },
  {
    name: "Support Desk",
    client: "analogueagency",
    description: "Reports Ticketing System",
    src: "4.png",
    year: 2024,
  },
  {
    name: "Eventure",
    client: "Grow",
    description: "Event Booking App",
    src: "6.png",
    year: 2025,
  },
  {
    name: "Maxed",
    client: "Wix Playground",
    description: "E-Commerce Site",
    src: "11.png",
    year: 2023,
  },
  {
    name: "Budget Buddy",
    client: "POWELL—STUDIO",
    description: "Budget Planner Web App",
    src: "8.png",
    year: 2023,
  },
  {
    name: "PixGen",
    client: "ET Studio",
    description: "Image Generating Web App",
    src: "7.png",
    year: 2023,
  },
];

const Projects = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "-10% center",
        end: "top center",
        markers: false,
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 100,
    });
  }, []);
  return (
    <div>
      <div className="px-[6rem] sms:px-[1rem]">
        <h1
          ref={titleRef}
          className="text-[5rem] sms:text-[4rem] xss:text-[2.5rem] sms:text-center text-[#B5FF6D]"
        >
          Latest Projects
        </h1>
      </div>

      <div ref={containerRef}>
        <div className="project-container">
          <Project projects={[projects[0], projects[1]]} />
        </div>
        <div className="project-container">
          <Project projects={[projects[2], projects[3]]} reversed={true} />
        </div>

        <div className="project-container">
          <Project projects={[projects[4], projects[5]]} />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="mt-14 inline-flex items-center border justify-center">
          <Link
            target="_blank"
            href={"https://github.com/MalithaJeewaka?tab=repositories"}
          >
            <Button2
              label="More Projects"
              containerClass="border inline-flex border-black px-10 py-2 text-[1.2rem]  font-regular"
            />
          </Link>
          {/* bug: animation happense only when text is hovered */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
