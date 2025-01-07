import About from "@/components/About";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden text-white">
      <div className=" bg-grey-1">
        <Hero />
      </div>
      <div className="max-w-7xl mx-auto">
        <About />
      </div>
    </div>
  );
}
