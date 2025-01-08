"use client";
import React from "react";
import styles from "./style.module.css";

export default function index({
  index,
  title,
  setModal,
}: {
  index: any;
  title: any;
  setModal: any;
}) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2 className="text-black">{title}</h2>
      <p className="text-black">Design & Development</p>
    </div>
  );
}
