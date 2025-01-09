import styles from "./styles.module.scss";
import Picture1 from "../../public/assets/1.jpg";
import Picture2 from "../../public/assets/2.jpg";
import Picture3 from "../../public/assets/8.jpg";
import Picture4 from "../../public/assets/4.jpg";
import Picture5 from "../../public/assets/5.jpg";
import Picture6 from "../../public/assets/6.jpg";
import Picture7 from "../../public/assets/7.jpg";
import Picture8 from "../../public/assets/9.jpg";
import Picture9 from "../../public/assets/10.jpg";
import Picture10 from "../../public/assets/11.jpg";
import Picture11 from "../../public/assets/12.jpg";
import Picture12 from "../../public/assets/3.jpg";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ZoomParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [0.6, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [0.6, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [0.6, 5.4]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [0.6, 5.8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [0.6, 6.2]);
  const scale11 = useTransform(scrollYProgress, [0, 1], [0.6, 6.6]);
  const scale12 = useTransform(scrollYProgress, [0, 1], [0.6, 7]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture3,
      scale: scale5,
    },
    {
      src: Picture11,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale5,
    },
    {
      src: Picture7,
      scale: scale6,
    },
    {
      src: Picture2,
      scale: scale8,
    },
    {
      src: Picture4,
      scale: scale9,
    },
    {
      src: Picture5,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
    {
      src: Picture10,
      scale: scale11,
    },
    {
      src: Picture8,
      scale: scale12,
    },
    {
      src: Picture2,
      scale: scale11,
    },
    {
      src: Picture3,
      scale: scale12,
    },
    {
      src: Picture3,
      scale: scale12,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={`${styles.sticky}`}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                <Image src={src} fill alt="image" placeholder="blur" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
