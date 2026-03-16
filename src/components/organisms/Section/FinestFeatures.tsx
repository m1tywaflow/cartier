"use client";

import { useEffect, useState } from "react";
import LuxuryTimepieces from "@/components/atoms/Typography/LuxuryTimepieces";
import GridCards from "@/components/molecules/GridPosts/GridCard";
import { posts } from "@/components/molecules/GridPosts/gridData";

export default function FinestFeatures() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white p-20">
      <LuxuryTimepieces />

      <div className="flex gap-20 justify-center mt-12">
        <div
          className="w-200 mt-100"
          style={{ transform: `translateY(-${scrollY * 0.05}px)` }}
        >
          <GridCards {...posts[0]} />
        </div>

        <div
          className="w-120"
          style={{ transform: `translateX(-${scrollY * 0.1}px)` }}
        >
          <GridCards {...posts[1]} />
        </div>
      </div>
    </section>
  );
}
