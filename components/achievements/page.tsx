"use client";
import React from "react";
import styles from "./style.module.css";

export default function index({
  index,
  title,
  setModal,
  result,
}: {
  index: any;
  title: any;
  setModal: any;
  result: any;
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
      <h2 className="text-white xss:flex-1">{title}</h2>
      <p className="text-white xss:flex-1">{result}</p>
    </div>
  );
}
