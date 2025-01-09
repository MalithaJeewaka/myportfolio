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
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"], // Choose the subsets you need
  weight: ["400"], // Specify the font weights you want
});

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

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=200px",
      y: "-=100px",
    });

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

    gsap.fromTo(
      imageRef.current,
      { width: 0 },
      { width: "100%", duration: 2, delay: 2.5 }
    );

    gsap.to(arrowRef.current, {
      y: -10,
      yoyo: true,
      duration: 1,
      repeat: -1,
    });

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
      },
      y: "-=100px",
    });
  }, []);

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
      className="bg-cream -z-10 relative h-[100vh] w-screen flex flex-col px-[6rem] text-black py-10 gap-3 pt-16"
    >
      <div className=" flex-1 flex items-end mb-3">
        <h1
          className={`text-[8.5rem] font-medium leading-[7rem] tracking-[5px] ${bebas.className}`}
        >
          CREATIVE
          <br /> DEVELOPER
        </h1>
      </div>

      <div className="w-[800px] h-[250px]">
        <div
          ref={imageRef}
          className="relative h-full w-full bg-[url(/images/mee4.jpg)] bg-center bg-cover "
        >
          {/* relative h-full w-full bg-[url(/images/mee4.jpg)] bg-center bg-cover bg-fixed */}
          <Image
            src={"/images/mee4.jpg"}
            layout="fill"
            alt="me"
            className="object-cover object-center  w-full"
          />
        </div>
      </div>

      <div className="flex flex-1 ">
        <div className="flex flex-1 justify-between items-end gap-5">
          <Image
            ref={arrowRef}
            src={"/assets/down-arrow.svg"}
            width={100}
            height={100}
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
            className={`text-[9rem] font-medium leading-[7.5rem] text-right tracking-[5px] ${bebas.className}`}
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
