"use client";

import styles from "./page.module.css";

import { useState } from "react";

import Project from "../project/page";

import Modal from "../modal/page";

const projects = [
  {
    title: "C2 Montreal",

    src: "/assets/1.jpg",

    color: "#000000",
  },

  {
    title: "Office Studio",

    src: "/assets/2.jpg",

    color: "#8C8C8C",
  },

  {
    title: "Locomotive",

    src: "/assets/3.jpg",

    color: "#EFE8D3",
  },

  {
    title: "Silencio",

    src: "/assets/4.png",

    color: "#706D63",
  },
];

export default function ProjectSection() {
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
