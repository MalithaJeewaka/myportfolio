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

    // gsap.fromTo(
    //   imageRef.current,
    //   { width: 0 },
    //   { width: "100%", duration: 2, delay: 2.5 }
    // );

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
      className="bg-cream -z-10 relative h-[100vh] w-screen flex flex-col px-[6rem] text-black py-10 gap-3 pt-16"
    >
      <div ref={containerRef} className=" flex-1 flex items-end mb-3">
        <h1
          className={`text-[8.5rem] font-medium leading-[7rem] tracking-[5px] `}
        >
          CREATIVE
          <br /> DEVELOPER
        </h1>
      </div>

      <div
        ref={imageContainerRef}
        // onMouseEnter={mouseEnterAnim}
        // onMouseLeave={mouseLeaveAnim}
        className="w-[800px] h-[250px] transition"
      >
        <div
          ref={imageRef}
          className="relative h-full w-full bg-[url(/videos/bg2.mp4)] bg-top bg-cover  bg-fixed "
        >
          {/* relative h-full w-full bg-[url(/images/mee4.jpg)] bg-center bg-cover bg-fixed */}

          <video
            src="/videos/bg3.mp4"
            className="w-full h-full object-cover pointer-events-none"
            autoPlay
            loop
            muted
          />

          {/* <Image
            src={"/images/mee4.jpg"}
            layout="fill"
            alt="me"
            className="object-cover object-center w-full"
          /> */}
        </div>
      </div>

      <div className="flex flex-1 ">
        <div className="flex flex-1 justify-between items-end gap-5">
          <Image
            ref={arrowRef}
            src={"/assets/down-arrow.svg"}
            width={50}
            height={50}
            alt="down arrow"
          />
          <div className="flex-1  flex justify-start">
            <p className=" text-[1.6rem] font-normal leading-tight">
              Dive into <br /> the story
            </p>
          </div>
        </div>

        <div className="flex-1 flex items-end justify-end">
          <h1
            className={`text-[9rem] font-medium leading-[7.5rem] text-right tracking-[5px] `}
          >
            MALITHA <br />
            JEEWAKA
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
