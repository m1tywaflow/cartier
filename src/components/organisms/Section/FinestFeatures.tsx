"use client";

import LuxuryTimepieces from "@/components/atoms/Typography/LuxuryTimepieces";
import GridCards from "@/components/molecules/GridPosts/GridCard";
import { posts } from "@/components/molecules/GridPosts/gridData";
import Image from "next/image";
import { Imperial_Script } from "next/font/google";

const imperial = Imperial_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function FinestFeatures() {
  return (
    <section className="bg-white px-6 sm:px-10 lg:px-20 py-16 lg:py-28">
      <div className="max-w-[1400px] mx-auto">
        <LuxuryTimepieces />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mt-16 items-start">
          <div className="lg:mt-32">
            <GridCards {...posts[0]} />
          </div>
          <div>
            <GridCards {...posts[1]} />
          </div>
        </div>
        <div className="w-full h-px bg-gray-200 my-16 lg:my-24" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="w-full overflow-hidden">
            <Image
              src={"/Posts/bigImgSecond.jpg"}
              alt="Luxury watch"
              width={1400}
              height={1400}
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
            />
          </div>
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight text-black">
              Attention to{" "}
              <span className={`${imperial.className} text-5xl lg:text-6xl`}>
                detail
              </span>
            </h2>

            <p className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed">
              Each timepiece reflects a commitment to craftsmanship and
              precision. From hand-finished surfaces to carefully selected
              materials, every detail contributes to a refined and distinctive
              presence.
            </p>
            <div className="mt-8 w-12 h-[2px] bg-black" />
          </div>
        </div>
      </div>
    </section>
  );
}