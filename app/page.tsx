import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden text-white h-[200vh]">
      <div className="pb-[100px] bg-grey-1">
        <Hero />
      </div>
    </div>
  );
}
