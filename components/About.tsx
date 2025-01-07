"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const circleRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const textElements = document.querySelectorAll(".text-anim span");

    gsap.fromTo(
      ".hello span",
      { y: "100%" },
      {
        y: "0%",

        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#container",
          start: "-10% center",
          end: "center center",
          markers: false,
          toggleActions: "play none none reverse",
        },
        stagger: 0.01,
      }
    );

    gsap.fromTo(
      circleRef.current,
      { y: 200 },
      {
        scrollTrigger: {
          trigger: "#container",
          start: "top center",
          end: "90% center",
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
    <div
      ref={containerRef}
      id="container"
      className=" w-full px-10 text-black flex  gap-24 py-[170px] overflow-hidden"
    >
      <div className="flex-3 px-2">
        <p className="text-[calc(1.3rem+1vw)] font-normal text-anim leading-tight">
          {wrapWordsInSpans(
            "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge."
          )}
        </p>
      </div>
      <div className=" flexx-1 flex flex-col items-center gap-10 relative">
        <div className="px-2 pt-3">
          <p
            ref={textRef}
            className="text-[calc(0.9rem+0.2vw)] text-anim leading-tight"
          >
            {wrapWordsInSpans(
              "The combination of my passion for design, code & interaction positions me in a unique place in the web design world."
            )}
          </p>
        </div>
        <div
          ref={circleRef}
          className="w-[210px] h-[210px] rounded-full bg-blackish-1 flex justify-center items-center text-white text-[1.1rem] cursor-pointer"
        >
          <p>About me</p>
        </div>
      </div>
    </div>
  );
};

export default About;
