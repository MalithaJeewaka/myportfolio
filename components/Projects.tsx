import React from "react";

import Project from "@/components/double/Projects";
import { div } from "framer-motion/client";
import Button2 from "@/common/button/Button";
import Link from "next/link";

export const projects = [
  {
    name: "Google Pixel Creator Labs",
    client: "Grow",
    description: "A partnership between Google & SN37.",
    src: "google.jpg",
    year: 2023,
  },
  {
    name: "Decimal",
    client: "Decimal",
    description: "Portfolio site for Decimal.",
    src: "decimal.jpg",
    year: 2023,
  },
  {
    name: "MAVEN 11",
    client: "analogueagency",
    description: "New web design for the blockchain investment fund Maven 11.",
    src: "maven.jpg",
    year: 2022,
  },
  {
    name: "Wix Playground Homepage",
    client: "Wix Playground",
    description: "Wix Playground is powered by the Wix.com design team.",
    src: "wix.jpg",
    year: 2022,
  },
  {
    name: "POWELL—STUDIO",
    client: "POWELL—STUDIO",
    description: "The online presence for Powell—Studio.",
    src: "powell.jpg",
    year: 2023,
  },
  {
    name: "ROCKETPANDA",
    client: "ET Studio",
    description: "An Italian animation studio.",
    src: "panda.jpg",
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
        <Project projects={[projects[0], projects[1]]} />
        <Project projects={[projects[2], projects[3]]} reversed={true} />
        <Project projects={[projects[4], projects[5]]} />
      </div>
      <div className="mt-14 flex items-center justify-center">
        <Link href={"/projects"}>
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
