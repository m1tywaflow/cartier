"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Imperial_Script } from "next/font/google";
import CurvedLoop from "@/components/atoms/CurvedLoopText/CurvedLoop";

const imperial = Imperial_Script({
  subsets: ["latin"],
  weight: "400",
});

const scenes = [
  {
    bg: "/hero/first-scene/hero1.jpg",
    watch: "/hero/first-scene/watch1.png",
    bgColor: "#3f3f3f",
  },
  {
    bg: "/hero/second-scene/hero2.jpg",
    watch: "/hero/second-scene/watch2.png",
    bgColor: "#947E2E",
  },
  {
    bg: "/hero/third-scene/hero3.jpg",
    watch: "/hero/third-scene/watch3.png",
    bgColor: "#080C1A",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % scenes.length);
        setFading(false);
      }, 700);
    }, 4000);

    return () => clearInterval(timer);
  }, []);
  const scene = scenes[current];
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image src={scene.bg} alt="bg" fill className="object-cover" />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <CurvedLoop
          marqueeText="CARTIER - CARTIER - CARTIER - CARTIER"
          speed={1}
          curveAmount={-10}
          direction="right"
          interactive
          className="custom-text-style font-mono"
        />
      </div>

      <div
        className={`relative z-20 flex flex-col items-center justify-center h-full transition-opacity duration-700 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div style={{ backgroundColor: scene.bgColor }} className=" p-10">
          <Image
            src={scene.watch}
            alt="watch"
            width={300}
            height={300}
            className="hover:scale-115 transition duration-200"
          />
        </div>
        <div className="text-3xl text-center font-serif pt-10 space-y-4">
          <h1>Elegance and Precision</h1>
          <h1 className="flex gap-3">
            The Finest
            <span
              className={`${imperial.className} text-5xl relative bottom-2`}
            >
              Luxury Watches
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
