import styles from "./styles.module.scss";
import Picture1 from "../../public/assets/1.jpg";
import Picture2 from "../../public/assets/2.jpg";
import Picture3 from "../../public/assets/8.jpg";
import Picture4 from "../../public/assets/4.jpg";
import Picture5 from "../../public/assets/5.jpg";
import Picture6 from "../../public/assets/6.jpg";
import Picture7 from "../../public/assets/7.jpg";
import Picture16 from "../../public/assets/16.jpg";
import Picture9 from "../../public/assets/10.jpg";
import Picture10 from "../../public/assets/11.jpg";
import Picture17 from "../../public/assets/17.jpg";
import Picture13 from "../../public/assets/13.jpg";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { div } from "framer-motion/client";

export default function ZoomParallax() {
  const container = useRef(null);
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useGSAP(() => {
    gsap.from(".gallery-anim", {
      scrollTrigger: {
        trigger: container.current,
        start: "5% center",
        end: "0% center",
        markers: false,
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      y: 100,
    });

    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "0% center",
        end: "15% center",
        markers: false,
        toggleActions: "play reverse play reverse",
      },
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  // useGSAP(() => {
  //   gsap.to(titleRef.current, {
  //     scrollTrigger: {
  //       trigger: container.current,
  //       start: "15% center",
  //       end: "20% center",
  //       markers: true,
  //       toggleActions: "play none none reverse",
  //     },
  //     x: -100,
  //     opacity: 0,
  //   });
  // }, []);

  const scale4 = useTransform(scrollYProgress, [0, 1], [0.8, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [0.8, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [0.8, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [0.8, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [0.8, 9]);

  const pictures = [
    {
      src: Picture16,
      scale: scale4,
    },
    {
      src: Picture10,
      scale: scale5,
    },
    {
      src: Picture13,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <div>
      <div className="px-[6rem] sms:px-[1rem]  mt-10">
        <h1
          ref={titleRef}
          className="text-[3rem] sms:text-[2rem] xss:text-[1.5rem] xss:text-center text-[#B5FF6D]"
        >
          Dive Into The Story...
        </h1>
      </div>
      <div ref={container} className={styles.container}>
        <div className={`${styles.sticky} gallery-anim`}>
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
    </div>
  );
}
