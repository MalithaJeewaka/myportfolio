import Image from "next/image";
import React from "react";
import Scene from "./Scene";

const Prank = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center relative">
      <div className="relative p-10 w-full h-full">
        <Image
          src={"/assets/laughing.gif"}
          layout="fill"
          alt="gif image"
          className="object-fit"
        />
      </div>

      <Scene />
    </div>
  );
};

export default Prank;
