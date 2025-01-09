"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import Parallax from "./Parallax";
import ZoomParallax from "./ZoomParallax";

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

    gsap.to(imageRef.current, {
      rotateZ: 360, // Full rotation
      duration: 10, // Time for one full rotation
      repeat: -1, // Infinite loop
      ease: "linear", // Constant speed
    });

    gsap.to(arrowRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
      },
      rotateZ: 45,
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
      className="bg-cream relative h-[100vh] w-screen flex flex-col px-[6rem]   -z-10 text-black py-10 gap-3 pt-16"
    >
      <div className=" flex-1 flex items-end mb-3">
        <h1 className="text-[8rem] font-medium leading-[6.5rem] ">
          CREATIVE
          <br /> DEVELOPER
        </h1>
      </div>

      <div className="w-[800px] h-[250px]">
        <div className="relative h-full bg-[url(/images/me4.png)]  bg-cover bg-center">
          {/* <Image
            src={"/images/me3.png"}
            layout="fill"
            alt="me"
            className="object-cover w-full"
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
          />
          <div className="flex-1  flex justify-end">
            <p className=" text-[2rem] font-normal leading-tight">
              UNDERGRADUATE <br />
              COMPUTER ENGINEER
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-end justify-end">
          <h1 className="text-[8rem] font-medium leading-[6.5rem] text-right">
            MALITHA <br />
            JEEWAKA
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
