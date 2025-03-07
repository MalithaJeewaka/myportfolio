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
import Iridescence from "../src/blocks/Backgrounds/Iridescence/Iridescence";
import Balatro from "@/src/blocks/Backgrounds/Balatro/Balatro";

gsap.registerPlugin(ScrollTrigger);

const Hero2 = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const imageRef = useRef(null);
  const arrowRef = useRef(null);
  const containerRef = useRef(null);
  const mainContainer = useRef(null);
  const imageContainerRef = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useGSAP(() => {
    // const tl1 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: mainContainer.current,
    //     start: "top top",
    //     end: "bottom bottom",
    //     markers: false,
    //     scrub: true,
    //     pin: true,
    //     pinSpacing: false,
    //   },
    // });

    // tl1.to(mainContainer.current, { scale: 0.8, duration: 1 });

    // gsap.fromTo(
    //   imageRef.current,
    //   { width: 0 },
    //   { width: "100%", duration: 2, delay: 2.5 }
    // );

    // gsap.from(mainContainer.current, {
    //   duration: 1,
    //   delay: 2.5,
    //   opacity: 0,
    //   y: 100,
    // });

    gsap.to(arrowRef.current, {
      y: -10,
      yoyo: true,
      duration: 1,
      repeat: -1,
    });

    gsap.to(arrowRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
      },
      rotateZ: -90,
      ease: "power2.out",
    });

    // gsap.to(imageContainerRef.current, {
    //   scrollTrigger: {
    //     trigger: document.documentElement,
    //     start: 0,
    //     end: window.innerHeight,
    //     scrub: 0.25,
    //   },
    //   width: "100%",
    // });

    // gsap.to(containerRef.current, {
    //   scrollTrigger: {
    //     trigger: document.documentElement,
    //     start: 0,
    //     end: window.innerHeight,
    //     scrub: 0.25,
    //   },
    //   y: "-=50px",
    // });
  }, []);

  const mouseEnterAnim = () => {
    gsap.to(imageContainerRef.current, { width: "100%" });
  };
  const mouseLeaveAnim = () => {
    gsap.to(imageContainerRef.current, { width: "800px" });
  };

  return (
    <div
      ref={mainContainer}
      className=" -z-10 relative h-[90vh] xss:h-[80vh] w-screen flex flex-col px-[6rem] text-[#F6F7FF] py-10 gap-3 sms:px-[1rem] xss:items-center xss:justify-center"
    >
      <div ref={containerRef} className=" mds:items-start flex items-end mb-3">
        <h1
          className={`text-[8rem]  sms:text-[4rem] xss:text-[3rem] xss:text-center mds:text-[5rem] lgs:text-[6rem] lgs:leading-none lgs:tracking-normal font-medium leading-[7rem] `}
        >
          CREATIVE
          <br />
          <span className="text-[#B5FF6D]">DEVELOPER</span>
        </h1>
      </div>

      <div
        ref={imageContainerRef}
        // onMouseEnter={mouseEnterAnim}
        // onMouseLeave={mouseLeaveAnim}
        className="w-2/4 h-[300px] lgs:w-3/4  xss:w-full transition"
      >
        <div ref={imageRef} className="relative h-full w-full ">
          {/* relative h-full w-full bg-[url(/images/mee4.jpg)] bg-center bg-cover bg-fixed */}

          {/* <video
            src="/videos/bg3.mp4"
            className="w-full h-full object-cover pointer-events-none"
            autoPlay
            loop
            muted
          /> */}
          {/* 
          <Image
            src={"/images/bg.jpg"}
            layout="fill"
            alt="me"
            className="object-cover object-center w-full"
          /> */}
          <Balatro
            isRotate={false}
            mouseInteraction={false}
            pixelFilter={2000}
            color1="#000"
            color2="#149179"
            color3="#223537"
          />
        </div>
      </div>

      <div className="flex xss:flex-col  xss:items-center gap-10 sms2:gap-1">
        <div className="flex xss:order-2 flex-1 justify-between items-end gap-5">
          <Image
            ref={arrowRef}
            src={"/assets/down-arrow.svg"}
            width={50}
            height={50}
            className="mds:w-10 sms:w-6"
            alt="down arrow"
          />
          <div className="flex-1  flex justify-start">
            <p className=" text-[1.6rem] xss:mt-3 sms:text-[0.8rem]  mds:text-[1rem] lgs:text-[1.2rem] font-normal leading-tight">
              Dive into <br /> the story
            </p>
          </div>
        </div>

        <div className="flex-1 xss:order-1  flex items-end justify-end">
          <h1
            className={`text-[8rem] xss:text-[3rem] sms:text-[4rem] mds:text-[5rem] lgs:text-[6rem] lgs:leading-none lgs:tracking-normal font-medium leading-[7.5rem] text-right  `}
          >
            MALITHA <br />
            <span className="text-[#B5FF6D]">JEEWAKA</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
