"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import Parallax from "./Parallax";
import ZoomParallax from "./ZoomParallax";
import Magnetic from "@/common/Magnetic";

import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Hero2 = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const imageRef = useRef(null);
  const arrowRef = useRef(null);
  const containerRef = useRef(null);
  const mainContainer = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useGSAP(() => {
    requestAnimationFrame(animation);

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top top",
        end: "+=1000",
        markers: false,
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    tl1.to(mainContainer.current, { scale: 0.8, duration: 1 });

    gsap.to(arrowRef.current, {
      y: -10,
      yoyo: true,
      duration: 0.5,
      ease: "power2.out",
      repeat: -1,
    });
  }, []);

  useGSAP(() => {
    const textElements = document.querySelectorAll(".text-anim span");

    gsap.fromTo(
      ".helloo span",
      { y: "100%" },
      {
        y: "0%",
        duration: 1,
        ease: "power2.out",
        stagger: 0.02,
        delay: 0.5,
      }
    );
  });

  const wrapWordsInSpans = (text: any) =>
    text.split(" ").map((word: any, i: any) => (
      <span key={i} className="inline-block helloo overflow-hidden">
        <span className="block">{word}&nbsp;</span>
      </span>
    ));

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.03 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div
      ref={mainContainer}
      className="bg-cream  -z-10  relative h-[100vh] w-screen flex flex-col px-[6rem] text-black py-10 gap-3 pt-16"
    >
      <div className=" flex-1 flex items-end mb-3">
        <h1 className="text-[8.5rem] text-anim font-medium leading-[6.5rem] ">
          {wrapWordsInSpans("CREATIVE")}
          <br />
          {wrapWordsInSpans("DEVELOPER")}
        </h1>
      </div>

      <div className="w-[800px] h-[250px]">
        <div className="relative h-full w-full bg-[url(/images/mee4.jpg)] bg-center bg-cover ">
          {/* <Image
            src={"/images/mee.jpg"}
            layout="fill"
            alt="me"
            className="object-cover object-center  w-full"
          /> */}
        </div>
      </div>
      <div className="flex flex-1 ">
        <div className="flex flex-1 justify-between items-end gap-5">
          <Image
            src={"/assets/down-arrow.svg"}
            width={100}
            height={100}
            alt="down arrow"
            ref={arrowRef}
          />
          <div className="flex-1  flex justify-start">
            <p className=" text-[2rem] font-normal leading-tight">
              The journey <br /> begins below
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-end justify-end">
          <h1 className="text-[8rem] text-anim font-medium leading-[6.3rem] text-right">
            {wrapWordsInSpans("MALITHA")} <br />
            {wrapWordsInSpans("JEEWAKA")}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
