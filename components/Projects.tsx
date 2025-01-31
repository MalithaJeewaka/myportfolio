import React from "react";

import Project from "@/components/double/Projects";
import { div } from "framer-motion/client";
import Button2 from "@/common/button/Button";
import Link from "next/link";
import gsap from "gsap";

export const projects = [
  {
    name: "Project Name",
    client: "Grow",
    description: "Project Description",
    src: "6.png",
    year: 2023,
  },
  {
    name: "Project Name",
    client: "Decimal",
    description: "Project Description",
    src: "3.png",
    year: 2023,
  },
  {
    name: "Project Name",
    client: "analogueagency",
    description: "Project Description",
    src: "4.png",
    year: 2022,
  },
  {
    name: "Project Name",
    client: "Wix Playground",
    description: "Project Description",
    src: "11.png",
    year: 2022,
  },
  {
    name: "Project Name",
    client: "POWELL—STUDIO",
    description: "Project Description",
    src: "8.png",
    year: 2023,
  },
  {
    name: "Project Name",
    client: "ET Studio",
    description: "Project Description",
    src: "7.png",
    year: 2022,
  },
];

const Projects = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[5rem]">Latest Projects</h1>
      </div>

      <div>
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

      <div className="mt-14 flex items-center justify-center">
        <Link href={"#"}>
          <Button2
            label="More Projects"
            containerClass="border inline-flex border-black px-10 py-2 text-[1.2rem]  font-regular"
          />
        </Link>
        {/* bug: animation happense only when text is hovered */}
      </div>
    </div>
  );
};

export default Projects;
