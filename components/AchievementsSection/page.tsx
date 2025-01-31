"use client";

import styles from "./page.module.css";

import { useState } from "react";

import Project from "../achievements/page";

import Modal from "../modal/page";

const projects = [
  {
    title: "AI Sprint",

    src: "/assets/11.jpg",

    color: "#000000",
  },

  {
    title: "Dextron",

    src: "/assets/10.jpg",

    color: "#8C8C8C",
  },

  {
    title: "Haxtream",

    src: "/assets/14.jpg",

    color: "#EFE8D3",
  },

  {
    title: "Event 5",

    src: "/assets/6.jpg",

    color: "#706D63",
  },
];

export default function AchievementsSection() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>

      <Modal modal={modal} projects={projects} />
    </main>
  );
}
