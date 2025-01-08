import About from "@/components/About";
import Hero from "@/components/Hero";
import RecentWorks from "@/components/RecentWorks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden text-white">
      <Hero />

      <div className="  bg-white z-10">
        <div className="max-w-7xl mx-auto ">
          <About />
          <RecentWorks />
        </div>
      </div>
    </div>
  );
}
