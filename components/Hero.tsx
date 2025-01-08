"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
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

    // const tl1 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: mainContainer.current,
    //     start: "top top",
    //     end: "+=1000",
    //     markers: true,
    //     scrub: true,
    //     pin: true,
    //     pinSpacing: false,
    //   },
    // });

    // tl1.to(mainContainer.current, { scale: 0.8, duration: 1 });

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
      className="bg-grey-1 relative h-[110vh] w-screen flex justify-between -z-10"
    >
      <div ref={containerRef} className="h-screen flex-1 relative ">
        <div className="w-1/2 h-28 bg-blackish-1 absolute top-1/2 translate-y-[-50%] rounded-r-full flex items-center justify-between">
          <div className=" w-3/5  flex justify-center">
            <p className="leading-6 text-lg ">
              Located <br /> in the <br /> Sri Lanka
            </p>
          </div>

          <div className="  mx-3 rounded-full w-[80px] relative h-[80px] flex items-center justify-center bg-grey-1">
            <Image
              ref={imageRef}
              src={"/assets/world.svg"}
              width={40}
              height={40}
              alt="earth"
              className="rotate-12"
            />
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="h-full w-[600px] relative  bg-center bg-cover bg-no-repeat "
      ></div>
      <Image
        src={"/assets/me.png"}
        width={950}
        height={950}
        alt="ironman"
        className="object-cover object-center absolute bottom-0 left-1/2 -translate-x-[50%]"
      />
      <div
        ref={containerRef}
        className="h-screen flex-1 flex flex-col justify-center  relative"
      >
        <Image
          ref={arrowRef}
          src={"/assets/arrow.svg"}
          width={30}
          height={30}
          alt="arrow"
          className="absolute left-0 top-1/3"
        />

        <h2 className="leading-[3.5rem] text-[2.3rem] tracking-tight">
          Undergraduate <br />
          Computer Engineer
        </h2>
      </div>

      <div className="absolute top-[calc(100vh-350px)]">
        <div ref={slider} className="relative whitespace-nowrap flex">
          <p ref={firstText} className="text-[240px] left-0 font-normal">
            Malitha Jeewaka -
          </p>
          <p
            ref={secondText}
            className="text-[240px] font-normal absolute left-[100%]"
          >
            Malitha Jeewaka -
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
