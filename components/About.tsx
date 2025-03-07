"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import Scene from "./Scene";
import ZoomParallax from "./ZoomParallax";
import styles from "../app/styles.module.scss";
import Button from "@/common/RoundedButton";
import LogoAnimation from "@/components/IconAnimationComponent";
import Link from "next/link";
import Iridescence from "@/src/blocks/Backgrounds/Iridescence/Iridescence";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const circleRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    const textElements = document.querySelectorAll(".text-anim span");

    gsap.fromTo(
      ".hello span",
      { y: "100%" },
      {
        y: "0%",

        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#container",
          start: "10% center",
          end: "65% center",
          markers: false,
          // scrub: true,
          toggleActions: "play none none reverse",
        },
        stagger: 0.01,
      }
    );

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

    gsap.fromTo(
      circleRef.current,
      { y: 300 },
      {
        scrollTrigger: {
          trigger: "#container",
          start: "top center",
          end: "bottom center",
          markers: false,
          scrub: true,
        },
        y: 0,
      }
    );
  }, []);

  const wrapWordsInSpans = (text: any) =>
    text.split(" ").map((word: any, i: any) => (
      <span key={i} className="inline-block hello overflow-hidden">
        <span className="block">{word}&nbsp;</span>
      </span>
    ));

  return (
    <div className="min-h-screen px-[6rem] flex flex-col sms:px-[1rem]">
      <h1
        ref={titleRef}
        className="relative mt-[5rem] text-[5rem] sms:text-[4rem] xss:text-[3rem] sms:text-center"
      >
        About Me
      </h1>
      <div
        ref={containerRef}
        id="container"
        className="relative h-full w-full text-black flex  gap-24  overflow-hidden justify-center  items-center flex-1 sms2:flex-col sms2:gap-0 sms2:text-center"
      >
        <div className="flex-3 h-full">
          <p className="text-[calc(1.3rem+1vw)] xss:text-[1.2rem]  text-anim leading-tight">
            {wrapWordsInSpans(`Hi, I’m Malitha Jeewaka!`)} <br />{" "}
          </p>
          <p className="text-[calc(0.6rem+0.9vw)] xss:text-[0.8rem] mds:text-[1rem]  text-anim leading-tight">
            {wrapWordsInSpans(
              `I’m a 24-year-old Computer Engineering undergraduate at the University of Ruhuna, Faculty of Engineering. Passionate about crafting innovative tech solutions, I thrive on challenges that push the boundaries of engineering and creativity. With a solid foundation in computer systems and software development, I aim to bridge the gap between complex problems and elegant solutions. When I’m not coding or designing, I enjoy exploring new technologies and working on impactful projects that make a difference. Let’s connect and create something amazing together!`
            )}
          </p>
        </div>
        <div className=" flexx-1 flex flex-col items-center gap-10 relative">
          <div className="px-2 pt-3">
            <p
              ref={textRef}
              className="text-[calc(0.9rem+0.2vw)] xss:text-[1rem] font-semibold text-anim leading-tight"
            >
              {wrapWordsInSpans(
                `"Every day is a new canvas, and I’m here to paint it with curiosity, growth, and passion."`
              )}
            </p>
          </div>
          <div
            ref={circleRef}
            className="flex justify-center items-center gap-10"
          >
            <Button
              className={`${styles.button} w-[100px] h-[100px] sms2:w-[70px] sms2:h-[70px] `}
            >
              <Link href={"https://github.com/MalithaJeewaka"} target="_blank">
                <LogoAnimation
                  width={100}
                  height={100}
                  src="/animations/github.lottie"
                />
              </Link>
            </Button>
            <Button
              className={`${styles.button} w-[100px] h-[100px] sms2:w-[70px] sms2:h-[70px]  `}
            >
              <Link
                href={"https://www.linkedin.com/in/malitha-jeewaka-37546b26b/"}
                target="_blank"
              >
                <LogoAnimation
                  width={100}
                  height={100}
                  src="/animations/linkedin.lottie"
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
