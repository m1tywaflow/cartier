"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function WatchBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const watchRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateY = ((e.clientX - centerX) / rect.width) * 20;
      const rotateX = -((e.clientY - centerY) / rect.height) * 20;

      gsap.to(watchRef.current, {
        rotateY,
        rotateX,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
    gsap.to(leftRef.current, {
      x: "-100%",
      opacity: 0,
      duration: 0.6,
      ease: "power3.inOut",
    });
    gsap.to(watchRef.current, {
      x: "-20%",
      scale: 1.1,
      duration: 0.6,
      ease: "power3.inOut",
    });
    gsap.to(marqueeRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: 0.3,
    });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    gsap.to(leftRef.current, {
      x: "0%",
      opacity: 1,
      duration: 0.6,
      ease: "power3.inOut",
    });
    gsap.to(watchRef.current, {
      x: "0%",
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.inOut",
    });
    gsap.to(marqueeRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[620px] overflow-hidden cursor-pointer mx-auto max-w-[95%] rounded-sm"
      style={{ perspective: "1000px" }}
    >
      <Image
        src="/bg/bgRed.jpg"
        alt="background"
        fill
        className="object-cover"
      />
      <div
        ref={leftRef}
        className="absolute left-0 top-0 h-full w-[45%] bg-red-700 z-10 flex flex-col justify-center px-12"
      >
        <p className="text-white/60 text-xs tracking-widest uppercase mb-3">
          Upgrade
        </p>
        <h2 className="text-white font-serif italic text-4xl leading-tight mb-4">
          Your Timepiece
          <br />
          <span className="not-italic font-light">Collection Today</span>
        </h2>
        <p className="text-white/70 text-sm max-w-xs leading-relaxed">
          Don&apos;t miss out on the opportunity to upgrade your timepiece
          collection today and add a touch of elegance to your everyday look.
        </p>
      </div>
      <div
        ref={watchRef}
        className="absolute right-0 top-0 h-full w-[70%] z-20"
        style={{ transformStyle: "preserve-3d", transform: "scale(1.8)" }}
      >
        <Image
          src="/hero/first-scene/watch1.png"
          alt="watch"
          fill
          className="object-contain"
        />
      </div>
      <div
        ref={marqueeRef}
        className="absolute bottom-6 left-0 w-full z-30 overflow-hidden opacity-0"
        style={{ transform: "translateY(20px)" }}
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                className="text-[#7fffd4] font-serif italic text-5xl mx-8"
              >
                Shop now –
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
